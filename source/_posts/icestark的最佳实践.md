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

![首屏图](https://s1.ax1x.com/2020/07/19/UWeCUH.jpg)

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

## 微应用内跳转及传参

## 微应用间跳转及传参

## 参考资料

* [icestark快速上手](https://ice.work/docs/icestark/start)
* [路由运行时配置](https://ice.work/docs/guide/basic/router#%E8%BF%90%E8%A1%8C%E6%97%B6%E9%85%8D%E7%BD%AE)
