---
title: MV*模式
abbrlink: de93538b
date: 2021-02-16 09:47:20
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

![首屏图](https://s3.ax1x.com/2021/03/15/6BreZF.jpg)

<!-- more -->

## MV*模式

MV*模式主要解决的问题就是 View代码难以维护的问题。

MV*模式将View中的逻辑分离出去，形成一个弱逻辑的易于维护的视图。

MV*中的*是Model和View的桥梁，负责保持Model和View的同步。

### MVC模式

Model，View，Controler，Controler负责视图逻辑，数据流向为 View -> Controler，Controler -> Model，Model -> View，三种呈环形结构

![MVC](https://s3.ax1x.com/2021/03/15/6BDy59.png)

### MVC缺陷

![MVC缺陷](https://s3.ax1x.com/2021/03/15/6BD4bD.png)

### MVP模式

Model，View，Presenter，Presenter负责视图逻辑，数据流向为 View <-> Presentrer, Presenter <-> Model, Persenter成为View和Model的中介，不允许Model和View直接通信，MVP一定程度上解决了MVC的问题，但是Presenter将会非常复杂

![MVP](https://s3.ax1x.com/2021/03/15/6BDT5d.png)

### MVVM模式

Model，View，ViewModel，ViewModel负责视图逻辑，数据流向 View <-> ViewModel, ViewModel <-> Model, 进化版的MVP模式，将Presenter改为ViewModel。
其中的Model为纯数据，不包括视图元素状态(显示/隐藏，高亮，禁用/启用等)。
而多数的MVVM框架，ViewModel包含Model，ViewModel是数据和业务逻辑的集合体，
View和ViewModel的同步是采用data-binding的形式。
实际上，形成如下演变模式， View <-> ViewModel，
说是VVM模式也许更贴切，目前这种方式被推崇为前端领域的最佳实践。

![MVVM](https://s3.ax1x.com/2021/03/15/6BDjr8.png)

## 参考资料

* [MV*模式的个人理解](https://www.cnblogs.com/mengff/p/5964902.html)
* [深入了解MV*模式](https://www.jianshu.com/p/6250177941f2)
