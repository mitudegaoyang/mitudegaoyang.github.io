---
title: react个人站建站总结
abbrlink: 2f46f162
date: 2023-11-28 17:02:14
tags:
  - 技术积累
  - 前端
  - React
categories:
  - 技术积累
  - 前端
  - React
toc: true
---

![首屏图](https://z1.ax1x.com/2023/11/29/piDNnQf.png)

<!-- more -->

## 简介

基于 react-antd-admin 搭建的前端简历网站 [预览地址](https://me.gaotianyang.top)

## 技术总结

- **react-antd-admin-template** 基于 `React` 和 `Ant Design` 的后台管理系统模板
- **antd** `Web` `UI` 组件库
- **echarts** `echarts-wordcloud` 词云库
- **仿钉钉官网动效** 基于 `JavaScript` `Css` 的滚动动效
- **仿 antd 图片预览** 基于 `Ant Design` `Modal` 的图片预览功能
- **axios** 基于 `promise` 的 `HTTP` 库
- **mockjs** 模拟数据生成器
- **lodash** `JavaScript` 实用工具库
- **dayjs** `JavaScript` 时间处理工具库

## 功能与问题

### Mockjs 实现数据过滤

基于 Mockjs，在`项目列表`接口请求时，实现了数据的过滤、分页等功能。

![mockjs](https://z1.ax1x.com/2023/11/29/piDU8BD.png)

### 仿钉钉官网动效

在实现此动效的时候，遇到了一些问题。例如原 demo 为原生 `html` `css` `js` 实现的，需要对其进行 react 的迁移与改造。另外，因为在项目中的使用场景为 dashboard 页面下使用，因此原本监听页面滚动事件，触发动效将不再生效。解决方案为将滚动监听，变更为 antd layout 组件，并将监听结果挂载于 window 自定义变量中。页面根据挂载的自定义变量，进行页面的重绘。

![dashboard](https://z1.ax1x.com/2023/11/29/piDNnQf.png)

### echarts 词云

在使用词云效果的自定义词云形状时，会遇到因背景图加载原因，导致的首次渲染白屏的问题。解决方案为，将词云首次绘制，执行于背景图加载完毕后(`maskImage.onload`)。

![wordcloud](https://z1.ax1x.com/2023/11/29/piDUtNd.png)

### 仿 antd 图片预览

本项目的 `Ant Design` 版本为 V3.X，尚未加入图片预览功能，因此基于 `Ant Design` 的 `Modal` 组件二次封装了图片预览组件，并基于 `css` `js` 实现了缩放、翻转、旋转这些功能。

![imagePreview](https://z1.ax1x.com/2023/11/29/piDUGHe.png)

## 参考资料

- [react-antd-admin-template](https://github.com/NLRX-WJC/react-antd-admin-template)
- [复刻钉钉官网滚动动画](https://www.bilibili.com/video/BV12z4y1s7nE/?vd_source=2e6014e07f90a9d8b3424eb1c055a867)
- [代码仓库-复刻钉钉官网滚动动画](https://gitee.com/vary-space/hello-world/tree/12z4y1s7nE)
- [echarts-wordcloud npm 词云](https://www.npmjs.com/package/echarts-wordcloud)
- [react 项目使用 echarts-wordcloud（文字云）](https://www.cnblogs.com/art-poet/p/13936076.html)
- [react+typeScript 框架 config-overrides 中设置 Alias 路径 报错的解决方法](https://blog.csdn.net/Zeng__Yi/article/details/106197891)
- [最优雅解决 typescript 报错：“元素隐式具有 “any“ 类型，因为类型为 “string“ 的表达式不能用于索引类型”](https://blog.csdn.net/m0_47670683/article/details/124025972)
- [react antd 实现图片自定义预览](https://cloud.tencent.com/developer/article/2233289)
- [刘关化的前端简历 参考](https://github.com/liuguanhua/liuguanhua.github.io)
- [宋楠的前端简历 参考](https://github.com/sunniejs/sunniejs.github.io)
