---
title: icestark的最佳实践
abbrlink: 5b56e29a
date: 2021-01-11 17:44:43
tags:
  - 技术积累
  - 前端
  - js
categories:
  - 技术积累
  - 前端
  - js
toc: true
---

![首屏图](https://s3.ax1x.com/2021/01/12/sG4eTP.jpg)

<!-- more -->

本章演示如何快速创建微前端的应用，以下模板均使用了 icejs，通过 icejs 的插件机制可以更加简单的接入微前端能力。

## 初始化主应用

```shell
# 基于 React 的主应用
$ npm init ice icestark-layout @icedesign/stark-layout-scaffold
# 或者基于 Vue 的主应用
$ npm init ice icestark-layout @vue-materials/icestark-layout-app

$ cd icestark-layout
$ npm install
$ npm start
```

即可通过浏览器预览整个应用：

![主应用预览](https://s3.ax1x.com/2021/01/11/s8JZJe.png)

打开 `src/app.tsx` 即可看到默认注册的几个微应用。

## 初始化微应用

```shell
# 基于 React 的微应用
$ npm init ice icestark-child @icedesign/stark-child-scaffold
# 基于 Vue 的微应用
$ npm init ice icestark-child @vue-materials/icestark-child-app

$ cd icestark-child
$ npm install
$ npm run start
```

可以在主应用的 `src/app.tsx` 中增加对应的微应用配置。

## 微应用本地调试

单独微应用开发时只能看到自身的内容，无法关注到在主应用下的表现，这时候本地如果需要再启动一个主应用，
开发起来就很繁琐。针对这种情况，我们推荐通过主应用的日常/线上环境调试本地微应用。

查看微应用的js、css资源路径。

![查看微应用js路径](https://s3.ax1x.com/2021/01/11/s8dUlF.png)
![查看微应用css路径](https://s3.ax1x.com/2021/01/11/s8dhmd.png)

在主应用的 `src/app.tsx` 中覆盖对应的微应用配置的路径

![覆盖微应用路径](https://s3.ax1x.com/2021/01/11/s8djmj.png)

此时打开主应用的对应微应用模块，会发现微应用没有正常显示，原因是微应用没有获取正确的basename。

![微应用不显示](https://s3.ax1x.com/2021/01/11/s8Ba6S.png)

参考[运行时配置](https://ice.work/docs/guide/basic/router#%E8%BF%90%E8%A1%8C%E6%97%B6%E9%85%8D%E7%BD%AE)

在微应用 `src/app.ts` 中，我们可以配置路由的类型和基础路径等信息，具体配置如下：

```js
import { runApp, IAppConfig } from 'ice';

const appConfig: IAppConfig = {
  router: {
    type: 'browser',
    basename: '/seller',
    fallback: `<div>loading...</div>`,
    modifyRoutes: (routes) => {
      return routes;
    }
  },
  icestark: {
    type: 'child',
  },
};

runApp(appConfig);
```

## 路由跳转

### 微应用内跳转

#### 使用Link组件

通过 `<Link />` 标签组件可实现路由跳转，使用方式：

```js
import { Link } from 'ice';

function Demo() {
  return (
    <div>
      <Link to='/courses?sort=name' />

      {/* 可以携带额外的数据 `state` 到路由中。 */}
      <Link
        to={{
          pathname: '/courses',
          search: '?sort=name',
          hash: '#the-hash',
          state: { fromDashboard: true },
        }}
      />
    </div>
  )
}
```

> 在示例项目中使用如下

##### 修改详情页路由

修改微应用 `src/routes.tsx` 的详情页路由

```js
import { renderNotFound, isInIcestark } from '@ice/stark-app';
import BasicLayout from '@/layouts/BasicLayout';
import Detail from '@/pages/Detail';
import Home from '@/pages/Home';
import List from '@/pages/List';
import NotFound from '@/components/NotFound';

const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/list',
        exact: true,
        component: List,
      },
      {
        path: '/list/detail/:contractId',
        component: Detail,
      },
      {
        // 微应用独立运行 404 路由渲染 NotFound 组件
        component: isInIcestark() ? () => renderNotFound() : NotFound,
      },
    ],
  },
];

export default routerConfig;
```

##### 修改Link组件传参

修改微应用 `src/list/index.tsx` 的列表页Link组件，添加传参

```js
<Table.Column
  title="操作"
  dataIndex="detail"
  key="detail"
  width={200}
  cell={(value, index, record) => (
    <div>
      <a className={styles.link} onClick={() => Message.success('暂不支持修改合同')}>
        修改
      </a>
      <span className={styles.separator} />
      <Link className={styles.link} to={`/list/detail/${data[index].id}`}>
        查看
      </Link>
    </div>
  )}
/>
```

##### 详情页接收参数

引入`useRouteMatch`并获取`contractId`

![详情页接收参数](https://s3.ax1x.com/2021/01/12/sGzbE8.png)

#### 使用 useHistory API

useHistory hook 用于获取 history 实例。

```js
import { useHistory } from 'ice';

function HomeButton() {
  const history = useHistory();

  function handleClick() {
    history.push('/home');
  }

  return (
    <button type='button' onClick={handleClick}>
      Go home
    </button>
  );
}
```

> 在示例项目中使用如下

##### 详情页添加返回按钮

在微应用的`src/detail/index.tsx`引入`useHistory`方法，声明返回方法并调用`useHistory`，将返回按钮传入`PageTitle`组件。

![详情页添加返回按钮](https://s3.ax1x.com/2021/01/12/sJyR8s.png)

改造微应用的`/src/components/PageTitle/index.tsx`文件，扩展`PageTitle`组件接收subTitle参数。

```js
import React from 'react';
import styles from './index.module.scss';

// 原组件
// export default ({ title, subTitle }) => {
//     <h5 className={styles.title}>
//         <span>{title}</span>
//         <span>{subTitle}</span>
//     </h5>
// };

export interface PageTitleProps {
    title?: any;
    subTitle?: any;
}

export default function PageTitle(props: PageTitleProps) {
    let { title, subTitle } = props;
    return (
        <h5 className={styles.title}>
            <span>{title}</span>
            <span className={styles.subTitle}>{subTitle}</span>
        </h5>
    );
}
```

#### 使用 history API

在微应用的`src/detail/index.tsx`引入`history`方法，声明返回方法并调用`history`，将返回按钮传入`PageTitle`组件。

![详情页使用history跳转](https://s3.ax1x.com/2021/01/12/sYCU0I.png)

### 微应用间跳转

#### 使用 appHistory

在 A 微应用里需要跳转到 B 微应用时，如果使用 react-router/vue-router 提供的 Link 组件，
一般会强行在 path 上追加 basename，因此推荐使用 appHistory/AppLink 来跳转：

注意：AppLink 仅支持在基于 React 的微应用中使用，appHistory 不限制微应用的框架类型

```js
import React from 'react';
import { appHistory, AppLink } from '@ice/stark-app';

export default function FrameworkLayout() {
  return (
    <>
      <span
        onClick={() => {
          appHistory.push('/seller/list');
        }}
      >
        seller
      </span>
      <AppLink to="/waiter/list">waiter</AppLink>
    </>
  );
}
```

> 在示例项目中使用如下

![详情页使用appHistory跳转](https://s3.ax1x.com/2021/01/12/sYP2xe.png)

#### 使用 AppLink

> 直接使用ice中的AppLink会报错，需要自己封装个AppLink来跳转。

##### 封装 AppLink

在`src/utils/AppLink.tsx`封装

```js
import * as React from "react";

export type AppLinkProps = {
    to: string;
    message?: string;
    children?: React.ReactNode;
} & React.AnchorHTMLAttributes<any>;

// tslint:disable-next-line:variable-name
const AppLink: React.SFC<AppLinkProps> = (props: AppLinkProps) => {
    const { to, message, children, ...rest } = props;
    return (
        <a
            {...rest}
            href={to}
            onClick={(e) => {
                e.preventDefault();
                if (message && window.confirm(message) === false) {
                    return false;
                }

                window.history.pushState(
                    {
                        forceRender: true
                    },
                    "",
                    to
                );
            }}
        >
            {children}
        </a>
    );
};

export default AppLink;
```

在`src/utils/index.tsx`声明`AppLink`

```js
export { default as AppLink } from "./AppLink";
```

##### 调用 AppLink

![详情页使用AppLink跳转](https://s3.ax1x.com/2021/01/12/sYF6je.png)

## 参考资料

* [icestark快速上手](https://ice.work/docs/icestark/start)
* [路由运行时配置](https://ice.work/docs/guide/basic/router#%E8%BF%90%E8%A1%8C%E6%97%B6%E9%85%8D%E7%BD%AE)
* [Link](https://ice.work/docs/guide/basic/api#Link)
* [useHistory](https://ice.work/docs/guide/basic/api#useHistory)
* [history](https://ice.work/docs/guide/basic/api#history)
* [微应用间跳转](https://ice.work/docs/icestark/guide/child-app#%E5%BE%AE%E5%BA%94%E7%94%A8%E9%97%B4%E8%B7%B3%E8%BD%AC)
