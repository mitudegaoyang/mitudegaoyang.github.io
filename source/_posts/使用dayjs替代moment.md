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

## 安装

### npm

```shell
npm install dayjs --save
```

```js
var dayjs = require('dayjs');
dayjs().format();
```

### cdn

```js
<script src="https://unpkg.com/dayjs"></script>
<script>
  dayjs().format();
</script>
```

> 注：Day.js 的返回值都是新的 Dayjs 对象

### 从moment迁移至dayjs

v1.6.0 支持多语言国际化了，按需加载需要的语言，那想缩小打包体积，
提升开发体验只需要 `replace(/moment/g, 'dayjs')` 全局替换一下。
就能从 `Moment.js + locals` 200kb 减小成 `dayjs` 2kb的体积。
所有的API调用都保持不变，无需修改。

## 使用

来感受一下 `Dayjs` 的语法吧，是不是很看起来亲切呢 😋 (没错 这就是 moment 的语法嘛)

### 解析时间

直接运行 dayjs()，得到包含当前时间和日期的 Dayjs 对象

```js
dayjs() // 返回当前时间 Tue, 28 May 2019 05:57:34 GMT
```

可以解析传入的一个标准的[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)时间字符串。

```js
dayjs('1995-12-25') // Sun, 24 Dec 1995 16:00:00 GMT
```

可以解析传入的一个 Javascript Date 对象。

```js
dayjs(new Date(2018, 8, 18)) //Mon, 17 Sep 2018 16:00:00 GMT
```

可以解析传入的一个 Unix 时间戳 (13 位数字)。

```js
dayjs(1318781876406) // Sun, 16 Oct 2011 16:17:56 GMT
```

可以解析计算后的时间。

```js
dayjs(Date.now() - 24 * 60 * 60 * 1000) // 昨天
```

Dayjs 对象是不可变的，如果您想获得一个对象的拷贝，请执行 .clone()。 向 dayjs() 里传入一个 Dayjs 对象也能实现同样的效果。

```js
dayjs(Dayjs)
dayjs().clone()
```

检测当前 Dayjs 对象是否是一个有效的时间

```js
dayjs().isValid()
```

### 格式化时间

格式化 Dayjs 对象并展示。

接收一系列的时间日期字符串并替换成相应的值。

```js
dayjs().format(String)
dayjs('2019-01-25').format('YYYY-MM-DD HH:mm:ss') // 2019-01-25 00:00:00
dayjs().format('YYYY年MM月DD日 HH:mm:ss') // 2018年08月08日 00:00:00
dayjs().format('[YYYY]') // "[2018]"。[] 里的会原样输出。
```

|格式|输出|描述|
|--|--|--|
|YY|18|两位数的年份|
|YYYY|2018|四位数的年份|
|M|1-12|月份，从 1 开始|
|MM|01-12|月份，两位数|
|MMM|Jan-Dec|简写的月份名称|
|MMMM|January-December|完整的月份名称|
|D|1-31|月份里的一天|
|DD|01-31|月份里的一天，两位数|
|d|0-6|一周中的一天，星期天是 0|
|dd|Su-Sa|最简写的一周中一天的名称|
|ddd|Sun-Sat|简写的一周中一天的名称|
|dddd|Sunday-Saturday|一周中一天的名称|
|H|0-23|小时|
|HH|00-23|小时，两位数|
|h|1-12|小时, 12 小时制|
|hh|01-12|Hours, 12 小时制, 两位数|
|m|0-59|分钟|
|mm|00-59|分钟，两位数|
|s|0-59|秒|
|ss|00-59|秒 两位数|
|SSS|000-999|毫秒 三位数|
|Z|+5:00|UTC 的偏移量|
|ZZ|+0500|UTC 的偏移量，数字前面加上 0|
|A|AM PM|&nbsp;|
|a|am pm|&nbsp;|

### 操作时间

您可以对 Dayjs 对象如下增加减少之类的操作

增加时间并返回一个新的 Dayjs() 对象。

```js
dayjs().add(value : Number, unit : String);
dayjs().add(7, 'days'); // 之后的第7天
```

减少时间并返回一个新的 Dayjs() 对象。

```js
dayjs().subtract(value : Number, unit : String);
dayjs().subtract(1, 'months'); //在当前基础上减少1个月
```

返回当前时间的开头时间的 Dayjs() 对象，如月份的第一天。

```js
dayjs().startOf(unit : String);
dayjs().startOf('month'); // 获取本月初
```

返回当前时间的末尾时间的 Dayjs() 对象，如月份的最后一天。

```js
dayjs().endOf(unit : String);
dayjs().endOf('year'); // 获取本年年末
```

### 设置时间

获取或设置年份。

```js
dayjs().year() //2019
dayjs().year(2000) //Sun, 28 May 2000 06:14:07 GMT
```

获取或设置月份。从 0 开始

```js
dayjs().month() //4 实际上5月
dayjs().month(0) //Mon, 28 Jan 2019 06:15:25 GMT
```

获取或设置日期。从 1 开始

```js
dayjs().date() //28 当天是2019年5月28日
dayjs().date(1) //Wed, 01 May 2019 06:17:04 GMT
```

获取或设置星期。从星期天 0 开始

```js
dayjs().day() //2 当天是星期二
dayjs().day(0) //Sun, 26 May 2019 06:18:13 GMT 被强行设置为上周日
```

获取或设置小时

```js
dayjs().hour()  //14 当时为下午2点
dayjs().hour(12) //Tue, 28 May 2019 04:21:30 GMT 不清楚
```

获取或设置分钟。

```js
dayjs().minute() //22
dayjs().minute(59) //Tue, 28 May 2019 06:59:50 GMT
```

获取或设置秒

```js
dayjs().second()
dayjs().second(1)
```

获取或设置毫秒。

```js
dayjs().millisecond()
dayjs().millisecond(1)
```

获取从 Dayjs 对象中取到的信息 传入的单位 (unit) 对大小写不敏感

```js
dayjs().get('month') //4
```

|单位|缩写|描述|
|--|--|--|
|date||日期|
|day|d|星期几 (星期天 0, 星期六 6)|
|month|M|月 (一月 0, 十二月 11)|
|year|y|年|
|hour|h|时|
|minute|m|分|
|second|s|秒|
|millisecond|ms|毫秒|

设置时间

```js
dayjs().set('date', 1);
dayjs().set('month', 3); // 四月
dayjs().set('second', 30);
```

### 显示时间

获取两个 Dayjs 对象的时间差，默认毫秒。

```js
const date1 = dayjs('2019-01-25')
const date2 = dayjs('2018-06-05')
date1.diff(date2) // 20214000000
date1.diff(date2, 'month') // 7
date1.diff(date2, 'month', true) // 7.645161290322581
date1.diff(date2, 'day') // 233
```

返回 Unix 时间戳 (毫秒)

```js
dayjs().valueOf()
```

返回 Unix 时间戳 (秒)。

```js
dayjs().unix()
```

返回月份的天数

```js
dayjs().daysInMonth()
```

返回原生的 Date 对象。

```js
dayjs().toDate()
```

当序列化 Dayjs 对象时，会返回 ISO8601 格式的字符串。

```js
dayjs().toJSON() //"2018-08-08T00:00:00.000Z"
```

返回 ISO8601 格式的字符串。

```js
dayjs().toISOString()
```

返回字符串

```js
dayjs().toString()
```

### 查询时间

检查一个 Dayjs 对象是否在另一个 Dayjs 对象时间之前。

```js
dayjs('2010-10-20').isBefore('2010-10-21') // 早于
dayjs().isBefore(Dayjs, unit? : String);
dayjs().isBefore(dayjs()); // false
dayjs().isBefore(dayjs(), 'year'); // false
```

检查一个 Dayjs 对象是否和另一个 Dayjs 对象时间相同。

```js
dayjs().isSame(Dayjs, unit? : String);
dayjs().isSame(dayjs()); // true
dayjs().isSame(dayjs(), 'year'); // true
```

检查一个 Dayjs 对象是否在另一个 Dayjs 对象时间之后。

```js
dayjs('2010-10-20').isAfter('2010-10-19') // 晚于
dayjs().isAfter(Dayjs, unit? : String);
dayjs().isAfter(dayjs()); // false
dayjs().isAfter(dayjs(), 'year'); // false
```

检查一个 Dayjs 对象是否是闰年。

```js
dayjs().isLeapYear() // 闰年
```

## 参考资料

* [day.js官方文档](https://github.com/iamkun/dayjs/blob/HEAD/docs/zh-cn/README.zh-CN.md)
* [如何使用輕量級的 day.js 處理複雜日期](https://juejin.im/post/6844903597709197319)
* [Day.js教程](https://www.jianshu.com/p/15d6a9c1bf18)
* [Day.js 2kB超轻量时间库 和Moment.js一样的API](https://calpa.me/2018/09/19/five-minutes-to-reduce-application-weight-dayjs/)
