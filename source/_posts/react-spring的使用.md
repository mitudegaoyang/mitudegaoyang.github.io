---
title: react-spring的使用
abbrlink: 4fbd9ce8
date: 2021-01-04 16:49:41
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

```js
  // 完整写法如下
  // const fadeInProps = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
  const fadeInProps = useSpring({ opacity: 1, from: { opacity: 0 } })
  // 省略中间代码
  <animated.div style={fadeInProps}>
    {preparElem}
  </animated.div>
```

> !useSpring不可加入数组 typeScript报错

## 参考资料

* [用react-spring以react hook组件的形式编写动画](https://juejin.cn/post/6844903988383449096)
