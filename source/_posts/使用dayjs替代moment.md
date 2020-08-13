---
title: 使用dayjs替代moment
tags:
  - 技术积累
  - 前端
  - js
categories:
  - 技术积累
  - 前端
  - js
toc: true
abbrlink: e362d928
date: 2020-08-13 10:21:40
---

![首屏图](https://s1.ax1x.com/2020/08/13/azsXcR.jpg)

<!-- more -->

Moment.js 是一个大而全的 JS 时间库，很大地方便了我们处理日期和时间。
但是 Moment.js太重了(200k+ with locals)，可能一般项目也只使用到了她几个常用的API。
虽然社区也有几个轻量的时间库，要想迁移过去又会增加新的学习和迁移成本。

**如果能有一个和 Moment.js 一样语法，一样功能，又轻量的库该多好！**

Day.js 是一个轻量的 JavaScript 时间日期处理库，和 Moment.js 的 API 设计保持完全一样. 如果你曾经用过 Moment.js, 那么你已经知道如何使用 Day.js

`Day.js` 基本用法如下，相同的API，相同的链式操作。

```js
dayjs().startOf('month').add(1, 'day').set('year', 2018).format('YYYY-MM-DD HH:mm:ss');
```

* 🕒 和 Moment.js 相同的 API 和用法
* 💪 不可变数据 (Immutable)
* 🔥 支持链式操作 (Chainable)
* 🌐 I18n 国际化
* 📦 仅 2kb 大小的微型库
* 👫 全浏览器兼容

Day.js 虽然仅有 2kb 大小，但是功能一点都没有阉割。包含了时间处理的全部常用方法。

## 简单使用

v1.6.0 支持多语言国际化了，按需加载需要的语言，那想缩小打包体积，
提升开发体验只需要 `replace(/moment/g, 'dayjs')` 全局替换一下。
就能从 `Moment.js + locals` 200kb 减小成 `dayjs` 2kb的体积。
所有的API调用都保持不变，无需修改。

来感受一下 `Dayjs` 的语法吧，是不是很看起来亲切呢 😋 (没错 这就是 moment 的语法嘛)

### 创建

```js
dayjs() // 当前时间
dayjs('1995-12-25') // 1995-12-25
dayjs(Date.now() - 24 * 60 * 60 * 1000) // 昨天
```

### 格式化

```js
dayjs().format('YYYY年MM月DD日 HH:mm:ss') // 2018年08月08日 00:00:00
dayjs().format('[YYYY]') // "[2018]"。[] 里的会原样输出。
```

### 操作

```js
dayjs().add(7, 'days') // 之后的第7天
dayjs().subtract(1, 'months') // 上个月
dayjs().startOf('months') // 获取一月初
dayjs().endOf('year') // 获取一年年末
```

### 查询

```js
dayjs('2010-10-20').isBefore('2010-10-21') // 早于
dayjs('2010-10-20').isAfter('2010-10-19') // 晚于
dayjs().isLeapYear() // 闰年
```

## 参考资料

* [day.js官方文档](https://github.com/iamkun/dayjs/blob/HEAD/docs/zh-cn/README.zh-CN.md)
* [如何使用輕量級的 day.js 處理複雜日期](https://juejin.im/post/6844903597709197319)
* [Day.js教程](https://www.jianshu.com/p/15d6a9c1bf18)
* [Day.js 2kB超轻量时间库 和Moment.js一样的API](https://calpa.me/2018/09/19/five-minutes-to-reduce-application-weight-dayjs/)
