---
title: icestark的使用
abbrlink: b721b7cb
date: 2021-01-05 11:16:53
tags:
  - 技术积累
  - 前端
  - 微服务
categories:
  - 技术积累
  - 前端
  - 微服务
toc: true
---

![首屏图](https://s3.ax1x.com/2021/01/12/sG4nFf.jpg)

<!-- more -->

## 关于icestark

### 介绍

[icestark](https://github.com/ice-lab/icestark) 是一个面向大型系统的微前端解决方案，适用于以下业务场景：

* 后台比较分散，体验差别大，因为要频繁跳转导致操作效率低，希望能统一收口的一个系统内
* 单页面应用非常庞大，多人协作成本高，开发/构建时间长，依赖升级回归成本高
* 系统有二方/三方接入的需求

icestark 在保证一个系统的操作体验基础上，实现各个子应用的独立开发和发版，主应用通过 icestark 管理微应用的注册和渲染，将整个系统彻底解耦。

### 特性

* 主应用和微应用皆支持 React/Vue/Angular... 等不同框架
* 主应用只需依赖 npm 包 `@ice/stark`，不耦合任何工程体系
* 微应用独立开发、不耦合任何框架以及工程体系，已有应用迁移成本极低
* 整个系统用户体验好，跟 SPA 应用基本一致
* 微应用只需发布前端资源 bundle 即可，主应用通过 bundle 渲染微应用

### 架构设计

![icestark架构设计](https://s3.ax1x.com/2021/01/06/sEIxV1.png)

* 按照 UI 结构进行主应用、微应用的拆分
* 主应用：负责微应用的注册与渲染，公共内容展示（Common Header、Common Sidebar、Common Footer等）
* 微应用：负责自身业务相关的内容展示

### 使用案例

#### 阿里创作者平台

![阿里创作者平台](https://s3.ax1x.com/2021/01/06/sE7ngS.png)

#### 阿里健康-熙牛医疗云医院信息系统

![阿里健康](https://s3.ax1x.com/2021/01/06/sE7H8f.png)

#### 淘系小二工作台

![淘系小二工作台](https://s3.ax1x.com/2021/01/06/sEH9P0.png)

## 快速上手

[快速上手](https://ice.work/docs/icestark/start)

[icestark最佳实践](/archives/202101115b56e29a/)

## 版本升级

### 1.x -> 2.x

> icestark@2.0.0 于 2020 年 12 月发布，Changelog

* 支持以 API 的方式初始化主应用，主应用不再限制 React/Vue/Angular 等不同框架
* 支持加载 UMD 格式的子应用产物

注意：`@ice/stark` 2.0.0 完全兼容 1.0.0 版本的 API，因此主应用可以非常低成本的升级 2.0.0 版本。

#### 主应用升级

存量 1.x 的应用将 `@ice/stark` 升级到 2.x 最新版本即可，AppRouter 注册方式同 1.x 完全兼容。

#### 不同版本混用

微应用本身不依赖 `@ice/stark` 的版本变化，原先通过 `registerAppEnter` 和 `registerAppLeave` 方式注册生命周期的方式，均可以在 1.x 和 2.x 版本下运行。

增量的微应用推荐通过 UMD 的规范导出，如需渲染 UMD 格式的微应用，需要将主应用中 `@ice/stark` 升级到 2.0.0 (或者 1.6.0)，同时在应用列表中显示声明 umd：

`AppRoute` API 渲染 UMD 规范的子应用：

```js
<AppRoute
+  umd={true}
  path="/seller"
  title="标题"
  url={[]}
/>
```

`regsiterMicroApps` API 渲染 UMD 规范的子应用：

```js
regsiterMicroApps([
  {
    name: 'app1',
    activePath: ['/seller'],
+    umd: true
    title: '通用页面',
    url: [],
  }
]);
```

### 0.x -> 1.x

> icestark@1.0.0 于 2019 年 10 月发布，Changelog

* 将微应用相关 API 拆成独立的包 `@ice/stark-app`，保证兼容不同框架的微应用
* 支持 `onAppEnter/onAppLeave` 相关 API

#### 迁移步骤

##### 主应用

将 `@ice/stark` 从 0.x 升级到 1.x 即可，API 跟 0.x 兼容。

##### 微应用

* 移除 `@ice/stark` 依赖：`npm rm @ice/stark --save`
* 安装 `@ice/stark-app` 依赖：`npm i @ice/stark-app --save`
* 批量替换代码中 `@ice/stark` 为 `@ice/stark-app`

## 核心概念与原理

### 原理

icestark 内部维护了所有微应用的配置信息，包括路由规则、bundle 地址等，同时劫持了 `window.history` 相关的几个跳转事件，
当捕获到页面跳转事件时，icestark 会根据跳转的路由获取对应的微应用信息，然后跟之前的微应用信息进行对比，如果是同一个微应用，
则什么都不做，如果是不同的微应用，则将前一个微应用的 bundle 卸载，同时加载新的微应用 bundle 资源，加载完成后微应用 bundle 会执行自身的渲染逻辑。

### 主应用含义

又称框架应用或基座应用，一个系统只有一个主应用，主应用负责系统整体的 Layout 以及微应用的管理与注册。

### 微应用含义

又称子应用，微应用通常是一个单页面应用（SPA），可能包含一个或多个路由页面，一般情况下不存在多个微应用同时运行的场景。

### 微模块含义

微应用的更小粒度，通常是一个模块或页面，跟页面路由无关，可以随处挂载，也会出现多个微模块同时渲染运行。

## 使用原则

[使用原则](https://ice.work/docs/icestark/guide/principle)

## 主应用开发与接入（React）

对于 React 主应用，推荐使用 AppRouter/AppRoute 这种 React Component 的方式使用。

### 注册微应用

```js
// src/App.jsx
import React from 'react';
import { AppRouter, AppRoute } from '@ice/stark';
import NotFound from '@/components/NotFound';
import PageLoading from '@/components/PageLoading';
import BasicLayout from '@/layouts/BasicLayout';

export default class App extends React.Component {
  state = {
    pathname: '',
  }

  handleRouteChange = (pathname) => {
    console.log('route change', pathname);
    // 如有需求，可根据 pathname 切换 layout 的形态
    this.setState({
      pathname,
    });
  }

  render() {
    const { pathname } = this.state;

    return (
      <BasicLayout pathname={pathname}>
        <AppRouter
          NotFoundComponent={NotFound}
          LoadingComponent={PageLoading}
          onRouteChange={this.handleRouteChange}
        >
          <AppRoute
            
            title="商家平台"
            url={[
              '//unpkg.com/icestark-child-seller/build/js/index.js',
              '//unpkg.com/icestark-child-seller/build/css/index.css',
            ]}
          />
          <AppRoute
            path="/user"
            //...
          />
          <AppRoute
            path="*"
            render={() => {
              return <></>;
            }}
          />
        </AppRouter>
      </BasicLayout>
    );
  }
}
```

### 微应用配置

#### 基准路由 path

类型为 `string|string[]`，大部分情况下都是 string，通过 path 约束每个微应用的路由定义，建立路由和微应用的映射关系。

#### 微应用入口 url/entry/entryContent

通过 AppRoute 注册微应用，微应用入口支持 url/entry/entryContent 方式，此部分与 API 注册使用一致，
可参考文档[微应用入口](https://ice.work/docs/icestark/guide/framework-api#%E5%BE%AE%E5%BA%94%E7%94%A8%E5%85%A5%E5%8F%A3)使用。

在此基础上，AppRoute 还支持了更为灵活的 component 和 render 方式配置微应用入口：

```JS
<AppRoute
  path="/foo"
  render={() => {
    return <iframe src="" />;
  }}
  // 或者直接传入 component
  // component={CustomComponent}
/>
```

通过这种方式，可以通过 AppRoute 渲染一个 iframe 或者任意的 React 组件。

### 微应用注册通过数据驱动

在很多场景下，我们的微应用可能通过一些配置平台注册，这时候可以将所有微应用的信息通过全局变量输出到 html 中，然后前端通过该数据注册微应用：

```js
// src/App.jsx
import React from 'react';
import { AppRouter, AppRoute } from '@ice/stark';

export default class App extends React.Component {
  render() {
    return (
      <AppRouter>
        {
          (window.appConfig || []).map((item) => {
            return (
              <AppRoute
                key={idx}
                path={item.path}
                title={item.title}
                url={item.url}
              />
            );
          })
        }
      </AppRouter>
    );
  }
}
```

### 应用级别权限校验

icestark 支持对 `AppRoute` 再进行二次封装，统一处理容器定制/权限校验等场景：

```js
// src/components/AuthAppRoute.js
import React, { useState, useEffect } from 'react';
import { AppRoute } from '@ice/stark';

export default function AuthAppRoute(props) {
  const [loading, setLoading] = useState(true);
  const [hasAuth, setHasAuth] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasAuth(true);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div>wait for a moment</div>;
  }

  if (!hasAuth) {
    return <div>No access!</div>;
  }

  return (
    <div>
      //  注意要将 ...others 透传给 AppRoute
      <AppRoute {...props} />
    </div>
  );
}
```

封装完成后即可在 AppRouter 下使用：

```js
// src/App.jsx
import React from 'react';
import { AppRouter, AppRoute } from '@ice/stark';
import NotFound from '@/components/NotFound';
import PageLoading from '@/components/PageLoading';
import BasicLayout from '@/layouts/BasicLayout';
import AuthAppRoute from '@/components/AuthAppRoute';

export default class App extends React.Component {
  render() {
    return (
      <BasicLayout>
        <AppRouter
          NotFoundComponent={NotFound}
          LoadingComponent={PageLoading}
        >
          {/* 注意：path/url/entry 等配置信息配置在组件外层，AppRouter 的直接子元素上 */}
          <AuthAppRoute
            path={['/', '/message', '/about']}
            exact
            title="主页"
            url={[
              '//unpkg.com/icestark-child-common/build/js/index.js',
              '//unpkg.com/icestark-child-common/build/css/index.css',
            ]}
          />
        </AppRouter>
      </BasicLayout>
    );
  }
}
```

### 不同页面 Layout 不同

如上示例，通过 `onRouteChange` 可以捕获到所有的路由变化，此时可以根据不同路由对 Layout 做一些状态的变化，实现不同页面不同布局的能力。

## 主应用开发与接入（非 React）

[主应用开发与接入（非 React）](https://ice.work/docs/icestark/guide/framework-api)

## 微应用开发与接入

[微应用开发与接入](https://ice.work/docs/icestark/guide/child-app)

## 应用间通信

[应用间通信](https://ice.work/docs/icestark/guide/interaction)

## 样式和脚本隔离

[样式和脚本隔离](https://ice.work/docs/icestark/guide/sandbox)

## 常见问题

[常见问题](https://ice.work/docs/icestark/guide/faq)

## API

### @ice/stark

Vue版API[详见](https://ice.work/docs/icestark/reference/api)

### @ice/stark-app

#### isInIcestark

判断当前运行环境，是否运行在 icestark 环境中，返回值类型：boolean

* 类型：`function`
* 示例代码详见 `registerAppLeave`

#### getBasename

配置微应用 `React Router` 中的 `basename` 参数的方法，根据 `AppRoute` 中的 `basename` 或者 `path` 配置生成最终结果

* 类型：`function`
* 默认值：`() => basename || (Array.isArray(path) ? path[0] : path)) || "/"`

#### getMountNode

根据微应用运行环境，返回微应用渲染节点

* 类型：`function`
* 默认值：`<div id="ice-container"></div>`
* 使用规则：方法支持传参，传参代表默认渲染的 DOM 节点，默认节点只在微应用单独启动时生效。支持 `string | HTMLElement | function`， `string` 表示默认 DOM 节点的 `id`，`function` 支持函数返回值作为默认 DOM 节点

#### renderNotFound

微应用触发渲染全局 404 的方法

* 类型：`function`

#### appHistory

提供手动切换不同应用的方法。

##### appHistory.push

* 类型：`function`
* 代码示例：

```js
import React from 'react';
import { appHistory } from '@ice/stark-app';

export default class SelfLink extends React.Component {
  render() {
    return (
      <span
        onClick={() => {
          appHistory.push('/home');
        }}
      >
        selfLink
      </span>
    );
  }
}
```

##### appHistory.replace

* 类型：`function`
* 代码示例参考 `appHistory.push`

#### registerAppEnter

提供快速注册当前应用加载前的回调事件

* 类型：`function`
* 示例代码详见 `registerAppLeave`

#### registerAppLeave

提供快速注册当前应用卸载前的回调事件

* 类型：`function`
* 代码示例：

```js
// src/index.js
import ReactDOM from 'react-dom';
import { isInIcestark, getMountNode, registerAppEnter, registerAppLeave } from '@ice/stark-app';
import router from './router';

if (isInIcestark()) {
  const mountNode = getMountNode();
  registerAppEnter(() => {
    ReactDOM.render(router(), getMountNode());
  });
  // make sure the unmount event is triggered
  registerAppLeave(() => {
    ReactDOM.unmountComponentAtNode(getMountNode());
  });
} else {
  ReactDOM.render(router(), document.getElementById('ice-container'));
}
```

## 参考资料

* [关于 icestark](https://ice.work/docs/icestark/about)
