---
title: react生命周期函数
abbrlink: 2a3f29d
date: 2021-03-11 10:42:26
tags:
  - 技术积累
  - 前端
  - react
categories:
  - 技术积累
  - 前端
  - react
---

![首屏图](https://s3.ax1x.com/2021/03/11/6Y5OyV.jpg)

<!-- more -->

## React生命周期函数

> react哪些生命周期可以执行setState

* 挂载或卸载过程涉及到三个函数：
  * componentWillMount - 组件即将挂载、
  * componentDidMount - 组件挂载完成、
  * componentWillUnmount - 组件即将卸载。
  * 这些函数都只会在组件初始化或者卸载时运行一次。
* 组件更新时涉及到四个函数：
  * shouldComponentUpdate - 判断组件是否需要更新、
  * componentWillUpdate - 组件即将更新、
  * componentDidUpdate - 组件完成更新、
  * componentWillReceiveProps - 组件即将接收新的 props。

![react生命周期](https://s3.ax1x.com/2021/03/11/6Y5CKf.jpg)

### 生命周期函数里可以 setState 吗？什么时候 setState 合适？

1. 在 `componentWillMount`中执行 setState 是无意义的，应该将这里的 setState 放到初始化 this.state 的地方去（如 constructor）直接作为 state 的初始值。 `不可以`
  原因：组件只挂载一次，在 componentWillMount里 setState 会但是仅会更新 state 一次，而且会和 constructor 里的初始化 state 合并执行，因此这是无意义的 setState。
1. 在 `componentDidMount` 中执行 setState 会导致组件在初始化的时候就触发了更新，渲染了两遍。`可以`
1. 在 `componentWillUnmount`中执行 setState 不会更新 state，是不生效而且无意义的。`不可以`
1. 禁止在 `shouldComponentUpdate` 和 `componentWillUpdate`中调用setState，这会造成循环调用，直至耗光浏览器内存后崩溃。`不可以`
  shouldComponentUpdate` 或者 componentWillUpdate里调用 setState 会再次触发这两个函数，然后在两个函数又触发了 setState，然后再次触发这两个函数。从而死循环。
1. 在 `componentDidUpdate` 中执行 setState 会导致组件刚刚完成更新，又要再更新一次，连续渲染两遍（和在 componentDidMount 中执行 setState 类似）。`可以`
1. 在 `componentWillReceiveProps`中可以 setState，不会造成二次渲染。由于只有 props 的变化才会触发 componentWillReceiveProps 事件，因为在这个事件里 setState 不会造成不停触发组件更新的死循环，可以放心在这个函数里 setState。`可以`

> 总结如下

1. `componentWillMount` 被初始化替代 无意义 `不可以`
1. `componentDidMount` 连续渲染两遍 `可以`
1. `componentWillUnmount` 不生效 无意义 `不可以`
1. `shouldComponentUpdate` 和 `componentWillUpdate` 死循环 `不可以`
1. `componentDidUpdate` 连续渲染两遍 `可以`
1. `componentWillReceiveProps` `可以`

回到[前端知识积累](/archives/2021021570ca98d5/#生命周期函数)

## 参考资料

* [React 生命周期中 对setState的调用](https://blog.csdn.net/yh_ang_eng/article/details/98958474)
