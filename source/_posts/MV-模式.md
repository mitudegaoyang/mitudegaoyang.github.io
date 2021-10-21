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

![首屏图](https://z3.ax1x.com/2021/03/15/6BreZF.jpg)

<!-- more -->

## MV\*模式

MV\*模式主要解决的问题就是 View 代码难以维护的问题。

MV\*模式将 View 中的逻辑分离出去，形成一个弱逻辑的易于维护的视图。

MV*中的*是 Model 和 View 的桥梁，负责保持 Model 和 View 的同步。

### MVC 模式

Model，View，Controler，Controler 负责视图逻辑，数据流向为 View -> Controler，Controler -> Model，Model -> View，三种呈环形结构

![MVC](https://z3.ax1x.com/2021/03/15/6BDy59.png)

### MVC 缺陷

![MVC缺陷](https://z3.ax1x.com/2021/03/15/6BD4bD.png)

### MVP 模式

Model，View，Presenter，Presenter 负责视图逻辑，数据流向为 View <-> Presentrer, Presenter <-> Model, Persenter 成为 View 和 Model 的中介，不允许 Model 和 View 直接通信，MVP 一定程度上解决了 MVC 的问题，但是 Presenter 将会非常复杂

![MVP](https://z3.ax1x.com/2021/03/15/6BDT5d.png)

### MVVM 模式

Model，View，ViewModel，ViewModel 负责视图逻辑，数据流向 View <-> ViewModel, ViewModel <-> Model, 进化版的 MVP 模式，将 Presenter 改为 ViewModel。
其中的 Model 为纯数据，不包括视图元素状态(显示/隐藏，高亮，禁用/启用等)。
而多数的 MVVM 框架，ViewModel 包含 Model，ViewModel 是数据和业务逻辑的集合体，
View 和 ViewModel 的同步是采用 data-binding 的形式。
实际上，形成如下演变模式， View <-> ViewModel，
说是 VVM 模式也许更贴切，目前这种方式被推崇为前端领域的最佳实践。

![MVVM](https://z3.ax1x.com/2021/03/15/6BDjr8.png)

## 参考资料

- [MV\*模式的个人理解](https://www.cnblogs.com/mengff/p/5964902.html)
- [深入了解 MV\*模式](https://www.jianshu.com/p/6250177941f2)
