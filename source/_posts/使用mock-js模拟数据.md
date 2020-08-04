---
title: 使用mock.js模拟数据
tags:
  - 技术积累
  - 前端
  - js
categories:
  - 技术积累
  - 前端
  - js
toc: true
abbrlink: c3af7d0b
date: 2020-08-04 18:12:29
---

![首屏图](https://s1.ax1x.com/2020/08/04/awruy8.jpg)

<!-- more -->

[mock.js](http://mockjs.com/)是一款前端开发中拦截`AJAX`请求再生成随机数据响应的工具。可以用来模拟服务器响应。优点是非常简单方便，无侵入性，基本覆盖常用的接口数据类型。

大概记录下使用过程, 详细使用可以参见Mock文档[Mock Wiki](https://github.com/nuysoft/Mock/wiki)

## 安装

使用npm安装: `npm install mockjs`;
或直接`<script src="http://mockjs.com/dist/mock.js"></script>;`

## 数据模板格式

```text
'name|rule': value

属性名|生成规则: 属性值
```

## GET请求

发起get请求:

```js
$.ajax({
    url: 'http://test.com',
    type: 'get',
    dataType: 'json'
}).done(function(data, status, xhr) {
    console.log(JSON.stringify(data, null, 4));
});
```

Mock.js响应:

```js
var obj = {'aa':'11', 'bb':'22', 'cc':'33', 'dd':'44'};

// Mock响应模板
Mock.mock('http://test.com', {
    "user|1-3": [{   // 随机生成1到3个数组元素
        'name': '@cname',  // 中文名称
        'id|+1': 88,    // 属性值自动加 1，初始值为88
        'age|18-28': 0,   // 18至28以内随机整数, 0只是用来确定类型
        'birthday': '@date("yyyy-MM-dd")',  // 日期
        'city': '@city(true)',   // 中国城市
        'color': '@color',  // 16进制颜色
        'isMale|1': true,  // 布尔值
        'isFat|1-2': true,  // true的概率是1/3
        'fromObj|2': obj,  // 从obj对象中随机获取2个属性
        'fromObj2|1-3': obj,  // 从obj对象中随机获取1至3个属性
        'brother|1': ['jack', 'jim'], // 随机选取 1 个元素
        'sister|+1': ['jack', 'jim', 'lily'], // array中顺序选取元素作为结果
        'friends|2': ['jack', 'jim'] // 重复2次属性值生成一个新数组
    },{
        'gf': '@cname'
    }]
});
```

可以看到结果:

```js
{
    "user": [
        {
            "name": "董静",
            "id": 88,
            "age": 25,
            "birthday": "2015-04-01",
            "city": "湖南省 怀化市",
            "color": "#c0f279",
            "isMale": false,
            "isFat": false,
            "fromObj": {
                "dd": "44",
                "aa": "11"
            },
            "fromObj2": {
                "bb": "22",
                "cc": "33"
            },
            "brother": "jack",
            "sister": "jack",
            "friends": [
                "jack",
                "jim",
                "jack",
                "jim"
            ]
        },
        {
            "gf": "田杰"
        }
    ]
}
```

响应时也可以是使用`function`, 如:

```js
Mock.mock('http://test.com', 'get', function() {
    return Mock.mock({
        "user|1-3": [{
            'name': '@cname',
            'id': 88
        }
      ]
    });
});
```

结果:

```js
{
    "user": [
        {
            "name": "许超",
            "id": 88
        }
    ]
}
```

## POST请求

发起post请求:

```js
$.ajax({
    url: 'http://test.com',
    type: 'post',
    dataType: 'json',
    data: {
      account: 888,
      pwd: 'abc123'
    }
}).done(function(data, status, xhr) {
    console.log(JSON.stringify(data, null, 4));
});
```

Mock.js响应:

```js
Mock.mock('http://test.com', function(options) {
    console.log(options);
    return Mock.mock({
        "user|1-3": [{
            'name': '@cname',
            'id|+1': 88
        }
      ]
    });
});
```

可以看到结果:

```js
{url: "http://test.com", type: "POST", body: "account=888&pwd=abc123"}

{
    "user": [
        {
            "name": "曾明",
            "id": 88
        }
    ]
}
```

## 自定义响应时间

可以自定义设置响应时间, 可以是绝对值, 也可以是区间.

```js
// 设置4秒后再响应
Mock.setup({ timeout: 4000 });  

// 设置1秒至4秒间响应
Mock.setup({ timeout: '1000-4000' });
```

## 数据集

`Mock.Random`是一个工具类，用于生成各种格式随机数据. 有两种写法:

第一种:

```js
// 生成一个email格式的字符串
console.log(Mock.mock('@email'));  // 结果: s.uorjeqdou@crqfpdypt.gw
```

第二种:

```js
var Random = Mock.Random;
console.log(Random.email());  // 结果: r.quyppn@yit.cv
```

提供的种类有:

|type|Method|
|-|-|
|Basic|boolean, natural, integer, float, character, string, range, date, time, datetime, now|
|Image|image, dataImage|
|Color|color|
|Text|paragraph, sentence, word, title, cparagraph, csentence, cword, ctitle|
|Name|first, last, name, cfirst, clast, cname|
|Web|url, domain, email, ip, tld|
|Address|area, region|
|Helper|capitalize, upper, lower, pick, shuffle|
|Miscellaneous|guid, id|

如果上面没有你需要的种类, 还可以自定义扩展, 如下:

```js
Random.extend({
    weekday: function(date) {
        var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return this.pick(weekdays);
    },
    sex: function(date) {
        var sexes = ['男', '女', '中性', '未知'];
        return this.pick(sexes);
    }
});

console.log(Random.weekday()); // 结果: Saturday
console.log(Mock.mock('@weekday')); // 结果: 112Tuesday
console.log(Random.sex()); // 结果: 男
console.log(Mock.mock('@sex')); // 结果: 未知
```

## 校验

`Mock.valid(template, data)`: 用来校验真实数据`data`是否与数据模板`template`匹配

```js
var tempObj = { "user|1-3": [{ 'name': '@cname', 'id|18-28': 88 } ]};
var realData = { "user": [{ 'name': '张三', 'id': 90 } ]};
console.log(Mock.valid(tempObj, realData));
```

## JSON Schema

`Mock.toJSONSchema(template)`: 用来把`Mock.js`风格的数据模板`template`转换成`JSON Schema`

```js
var tempObj = { "user|1-3": [{ 'name': '@cname', 'id|18-28': 88 } ]};
console.log(Mock.toJSONSchema(tempObj));
```

## 参考资料

* [mock.js官网](http://mockjs.com/)
* [mock.js使用](https://segmentfault.com/a/1190000008839142)
* [正确开启Mockjs的三种姿势：入门参考（一）](https://www.cnblogs.com/soyxiaobi/p/9846057.html)
* [使用Mock.js模拟数据请求](https://juejin.im/post/6844903571381551111)
