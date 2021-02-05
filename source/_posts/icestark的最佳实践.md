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

> [项目demo仓库地址](https://github.com/mitudegaoyang/icestark-demo)
> [项目demo预览地址](https://www.gaotianyang.top/icestark-demo)

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

### 本地调试icejs微应用

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

### 本地调试react微应用

#### 定义基准路由

正常情况下，注册微应用时会为每个微应用分配一个基准路由比如 `/waiter`，
当前微应用的所有路由需要定义在基准路由之下，社区常见的路由库都可以通过参数非常简单的实现该功能。
微应用可以通过 getBasename() API 获取自身的基准路由。

React 项目中使用 react-router-dom：

```shell
# 引入react-router-dom
$ yarn add react-router-dom
```

修改icestark-child-react/src/App.tsx

```js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { getBasename, renderNotFound } from '@ice/stark-app';
import Home from './routes/Home'
import List from './routes/List'
import Detail from './routes/Detail'
import './App.css';

// #原有代码
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// #因tslint规定<Route>的component必须是JSX而添加的改动
function notFound(props: any) {
  return (
    <>
      {renderNotFound()}
    </>
  )
}

function App(props: any) {
  return (
    <Router basename={getBasename()}>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/list" component={List}></Route>
        <Route exact path="/list/detail/:contractId" component={Detail} />
        <Route
          component={notFound}
        />
      </Switch>
    </Router>
  );
}

export default App;
```

查看微应用的端口地址

![查看微应用端口地址](https://s3.ax1x.com/2021/02/01/yZvbk9.png)

在主应用的 src/app.tsx 中覆盖对应的微应用配置的路径

![覆盖微应用路径](https://s3.ax1x.com/2021/02/01/yZx3pq.png)

> 这里无法使用src获取到react微应用，需要使用entry来自动匹配微应用资源。

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

![微应用间跳转](https://s3.ax1x.com/2021/02/01/yeA8IK.png)

![微应用间跳转](https://s3.ax1x.com/2021/02/01/yeEpFK.gif)

#### 使用 AppLink

> ~~直接使用ice中的AppLink会报错，需要自己封装个AppLink来跳转。~~

示例在上个章节已介绍。

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

## 微应用打包部署

项目结构如下

```text
icestark-demo
├─node_modules                 # 公共依赖文件
├─docs                         # 项目部署后静态资源地址
|    ├─subapp                  # 子项目静态资源包
|    |   ├icestark-child-icejs # icejs子项目静态资源包
|    |   ├icestark-child-react # creat-react-app子项目静态资源包
|    |   ├icestark-child-vue   # vue cli子项目静态资源包
|    ├─index.html              # 基座打包后入口文件
├─.gitignore                   # 忽略文件
├─README.md                    # 项目介绍
├─package.json                 # 项目依赖
├─packages                     # 项目文件
|    ├─icestark-layout         # 基座
|    |    ├─node_modules       # 子项目依赖文件
|    ├─icestark-child-icejs    # icejs创建子项目
|    ├─icestark-child-react    # creat-react-app创建子项目
|    ├─icestark-child-vue      # vue cli创建子项目
```

### 微应用打包

#### icejs微应用打包

在项目根目录执行build命令

```shell
# 执行打包命令
$ yarn workspace icestark-child-icejs build
```

执行完毕后，微应用目录下生成build文件夹。

将其拷贝至根目录docs/subapp/icestark-child-icejs文件下

#### react微应用打包

在项目根目录执行build命令

```shell
# 执行打包命令
$ yarn workspace icestark-child-react build
```

执行完毕后，微应用目录下生成build文件夹。

将其拷贝至根目录docs/subapp/icestark-child-react文件下

### 主应用连接部署后的微应用

将项目推送至远端

此时还无法获取到微应用资源，需将github仓库进行github page修改

如下图所示

![微应用部署](https://s3.ax1x.com/2021/02/02/ymf3ZV.gif)

修改后`http://www.gaotianyang.top/icestark-demo/`地址就指向了项目根目录的docs文件夹

修改主应用的 src/app.tsx 中覆盖对应的微应用配置的路径

![微应用路径配置](https://s3.ax1x.com/2021/02/02/ymhOhD.png)

## 主应用打包部署

在项目根目录执行build命令

```shell
# 执行打包命令
$ yarn workspace icestark-layout build
```

将build文件复制到项目docs根目录

可访问[https://www.gaotianyang.top/icestark-demo/](https://www.gaotianyang.top/icestark-demo/)进行查看

> 注意这里打包需要解决资源获取路径为相对路径的问题。修改主应用的build.json的publicPath，将资源路径改为相对路径即可。

```json
{
  "publicPath": ".",
  "plugins": [
    [
      "build-plugin-icestark",
      {
        "uniqueName": "frameworkJsonp"
      }
    ],
    [
      "build-plugin-fusion",
      {
        "themePackage": "@alifd/theme-design-pro",
        "themeConfig": {
          "nextPrefix": "next-icestark-"
        }
      }
    ],
    [
      "build-plugin-moment-locales",
      {
        "locales": [
          "zh-cn"
        ]
      }
    ]
  ]
}
```

### 主应用配置二级路由

因为项目部署在github page中，项目地址为二级域名`https://www.gaotianyang.top/icestark-demo`
因此项目中的路由配置及跳转信息需要额外配置`icestark-demo`方可正常显示。

解决方案如下

#### 获取应用状态并存储二级路由

在主应用获取当前应用是处于预览还是打包，并将路由存储在localStorage中。

在`icestark-demo/packages/icestark-layout/src/app.tsx`修改微应用path

```js
localStorage.setItem("baseUrl", process.env.NODE_ENV === "development" ? "" : "/icestark-demo")

const baseUrl = localStorage.baseUrl
```

![微应用path配置二级路由](https://s3.ax1x.com/2021/02/02/ynLxhR.png)

#### 修改主应用路由

在`icestark-demo/packages/icestark-layout/src/routes.ts`修改主应用路由

![主应用路由配置二级路由](https://s3.ax1x.com/2021/02/02/ynOLxP.png)

#### 修改主应用菜单

在`icestark-demo/packages/icestark-layout/src/layouts/BasicLayout/menuConfig.ts`修改主应用菜单

![主应用菜单配置二级路由](https://s3.ax1x.com/2021/02/02/ynOLxP.png)

#### 修改微应用跳转

![微应用跳转路径](https://s3.ax1x.com/2021/02/02/ynXRij.png)

## 问题汇总

### GitHub-page 刷新找不到二级域名下的路由地址

因为GitHub-page只能存放静态资源。并且不支持.htaccess，
所以用webpack构建出来的单页应用，
直接将dist文件推送到GitHub-page分支，
在切换路由之后，手动刷新是会出现404的。

![找不到项目](https://s3.ax1x.com/2021/02/05/yGrZZR.png)

处理方法

* 给站点根目录添加404.html

一般也就是dist目录下（GitHub-page找不到的路径会自动访问这个404.html）

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/icestark-demo/'">
  </head>
  <body>
      
  </body>
</html>
```

> 这里使用的知识点是`<meta http-equiv="refresh" content="0;URL='/icestark-demo/'">`

常见的几种使用场景

```html
<!-- 这个表示当前页面每5秒钟刷一下，刷一下~ -->
<meta http-equiv="refresh" content="5">

<!-- 这个表示当前页面2秒后跳到首页 -->
<meta http-equiv="refresh" content="2; url='/'">

<!-- 页面直接跳转到腾讯网 -->
<meta http-equiv="refresh" content="0; url='http://www.qq.com/'">
```

* 给index.html添加重定向逻辑

```html
<script>
  // 这段代码要放在其他js的前面
  (function(){
    var redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect != location.href) {
      history.replaceState(null, null, redirect);
    }
  })();
</script>
```

### @ice/stark^2.0.0版本问题

当项目安装的@ice/stark是2.1.0时，会出现entry的地址获取js、css路径不正确。
此时需将版本降至2.0.2即可修复。可通过复制并整体替换处理。

处理方法

* 先正常yarn项目
* 打开根目录的node_modules/@ice/stark
* 将2.0.2版本的ice-stark整体替换至改目录下即可

## 参考资料

* [icestark快速上手](https://ice.work/docs/icestark/start)
* [路由运行时配置](https://ice.work/docs/guide/basic/router#%E8%BF%90%E8%A1%8C%E6%97%B6%E9%85%8D%E7%BD%AE)
* [Link](https://ice.work/docs/guide/basic/api#Link)
* [useHistory](https://ice.work/docs/guide/basic/api#useHistory)
* [history](https://ice.work/docs/guide/basic/api#history)
* [微应用间跳转](https://ice.work/docs/icestark/guide/child-app#%E5%BE%AE%E5%BA%94%E7%94%A8%E9%97%B4%E8%B7%B3%E8%BD%AC)
* [主应用打包后资源改为相对路径](https://ice.work/docs/guide/basic/build#publicPath)
* [框架API-环境变量](https://ice.work/docs/guide/basic/api#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F)
* [单页应用在gh-pages动态路由刷新后404解决方案](https://segmentfault.com/a/1190000012951274)
* [使用meta实现页面的定时刷新或跳转](https://www.zhangxinxu.com/wordpress/2015/03/meta-http-equiv-refresh-content/)
