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

本文演示如何快速创建微前端的应用及改造已有应用接入微前端，基座创建使用的是 icejs，微应用是使用的 icejs、create-react-app分别创建。

## 环境搭建

创建项目，并拉取到本地。在根目录分别创建package.json、和packages文件夹。

初始化package.json将项目对应名称填写完整

```json
{
    "name": "icestark-demo",
    "private": true,
    "workspaces": [
        "packages/icestark-layout",
        "packages/icestark-child-icejs",
        "packages/icestark-child-react",
        "packages/icestark-child-vue"
    ]
}
```

进入项目目录`packages`

```shell
cd packages/
```

## 初始化主应用

```shell
# 基于 React 的主应用
$ npm init ice icestark-layout @icedesign/stark-layout-scaffold
# 或者基于 Vue 的主应用
$ npm init ice icestark-layout @vue-materials/icestark-layout-app
```

> 注意需要将主应用中`package.json`的name改为`icestark-layout`

## 安装依赖

回到根目录执行yarn命令

```shell
# 安装依赖
$ yarn
# 预览主应用
$ yarn workspaces icestark-layout start
```

即可通过浏览器预览整个应用：

![主应用预览](https://s3.ax1x.com/2021/01/28/ypQBDK.gif)

打开主应用 `src/app.tsx` 即可看到默认注册的几个微应用。

![默认注册微应用](https://s3.ax1x.com/2021/01/28/yp1rfH.png)

## 初始化微应用

### 基于icejs初始化微应用

进入项目目录`packages`

```shell
# 基于 React 的微应用
$ npm init ice icestark-child-icejs @icedesign/stark-child-scaffold
# 基于 Vue 的微应用
$ npm init ice icestark-child-icejs @vue-materials/icestark-child-app

# 回到根目录安装icejs微应用依赖 ./icestark-demo/

# 安装依赖
$ yarn
# 预览微应用
$ yarn workspaces icestark-child-icejs start
```

> 注意这里也需要将微应用中`package.json`的name改为`icestark-child-icejs`

可以在主应用的 `src/app.tsx` 中增加对应的微应用配置。

如果不需要改造现有项目，可直接跳过基于create-react-app改造微应用和基于vue cli改造微应用。
直接查看[微应用本地调试](/archives/202101115b56e29a/#微应用本地调试)。

### 基于create-react-app改造微应用

#### create-react-app创建react应用

进入项目目录`packages`

```shell
# 使用npm初始化app
$ npm create-react-app icestark-child-react --template typescript
$ # 或者使用yarn初始化
$ yarn create react-app icestark-child-react --template typescript

# 在icestark-child-react引入ice/stark-app
# ./icestark-demo/icestark-child-react/
$ yarn add @ice/stark-app

# 回到根目录安装react微应用依赖
# ./icestark-demo/
# 安装依赖
$ yarn
# 预览微应用
$ yarn workspaces icestark-child-react start
```

> 更改微应用name为`icestark-child-react`

此时会出现缺少babel-loader的报错提示

![缺少babel-loader@8.1.0](https://s3.ax1x.com/2021/01/28/y9Ya4K.png)

```shell
# 在icestark-child-react引入babel-loader
# ./icestark-demo/icestark-child-react/
$ yarn add babel-loader@8.1.0
```

再次启动提示eslint版本不正确

![缺少eslint^7.11.0](https://s3.ax1x.com/2021/01/28/y9N4mj.png)

```shell
# 在icestark-child-react引入eslint
# ./icestark-demo/icestark-child-react/
$ yarn add eslint --dev
```

由于workspaces的依赖判断问题，导致运行icestark-child-react时，没有使用子项目中的eslint版本，此时需要将高版本的eslint存储到外层的公共node_modules中。

修改根目录的package.json后再次执行yarn

```json
{
    "name": "icestark-demo",
    "private": true,
    "workspaces": [
        "packages/icestark-layout",
        "packages/icestark-child-icejs",
        "packages/icestark-child-react",
        "packages/icestark-child-vue"
    ],
    "devDependencies": {
        "eslint": "^7.11.0"
    }
}
```

#### 应用入口适配

将 React 应用改造为微应用，仅仅只需要导出对应的生命周期即可：

修改微应用 `src/index.tsx` 的微应用入口

```js
import ReactDOM from 'react-dom';
import { isInIcestark } from '@ice/stark-app';
import App from './App';

export function mount(props) {
  const { container, customProps } = props;
  ReactDOM.render(<App {...customProps} />, container);
}

export function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container);
}

if (isInIcestark()) {
  console.log('app is running in framework app');
} else {
  ReactDOM.render(<App />, document.getElementById('ice-container'));
}
```

### 基于vue cli改造微应用

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

### 定义基准路由

正常情况下，注册微应用时会为每个微应用分配一个基准路由比如 /seller，
当前微应用的所有路由需要定义在基准路由之下，社区常见的路由库都可以通过参数非常简单的实现该功能。
微应用可以通过 getBasename() API 获取自身的基准路由。

React 项目中使用 react-router-dom：

```shell
# 引入react-router-dom
$ yarn add react-router-dom
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

## 问题汇总

### @ice/stark^2.0.0版本问题

当项目安装的@ice/stark是2.1.0时，会出现entry的地址获取js、css路径不正确。
此时需将版本降至2.0.2即可修复。可通过复制并整体替换处理。

## 参考资料

* [icestark快速上手](https://ice.work/docs/icestark/start)
* [路由运行时配置](https://ice.work/docs/guide/basic/router#%E8%BF%90%E8%A1%8C%E6%97%B6%E9%85%8D%E7%BD%AE)
* [Link](https://ice.work/docs/guide/basic/api#Link)
* [useHistory](https://ice.work/docs/guide/basic/api#useHistory)
* [history](https://ice.work/docs/guide/basic/api#history)
* [微应用间跳转](https://ice.work/docs/icestark/guide/child-app#%E5%BE%AE%E5%BA%94%E7%94%A8%E9%97%B4%E8%B7%B3%E8%BD%AC)
