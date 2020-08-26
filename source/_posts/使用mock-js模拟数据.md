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

![首屏图](https://s1.ax1x.com/2020/08/24/dDO8v8.png)

<!-- more -->

[mock.js](http://mockjs.com/)是一款前端开发中拦截`AJAX`请求再生成随机数据响应的工具。可以用来模拟服务器响应。优点是非常简单方便，无侵入性，基本覆盖常用的接口数据类型。

大概记录下使用过程, 详细使用可以参见Mock文档[Mock Wiki](https://github.com/nuysoft/Mock/wiki)

## 安装

使用npm安装: `npm install mockjs`;
或直接`<script src="http://mockjs.com/dist/mock.js"></script>;`

> 这里安装时注意是`mockjs`不是`mock` 不要问我是怎么知道还有`mock`的

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

## 示例代码

```js
const data = Mock.mock({
      "data|10-20": [
        {
          "key|10": '@string', // 随机10位字符串
          "id": /\s\S{5,10}/,
          "name": '@name(1,2)', // 随机英文名
          "uname": '@cname()', // 随机中文名
          "age|18-50": 30, // 随机数字
          "phone": /1[3-9]\d{9}/, // 正则手机号
          "email": '@email', // 随机邮箱
          "province": '@province', // 随机省份
          "city": '@city', // 随机城市
          "type|1": ['线上', '线下', '三方支付'], // 随机选取 1 个元素
          'price': '@integer(100,2000)', //随机价格
          "created_at": '@datetime', //随机时间
        }]
    })
```

得到的结果

```js
{
    "data": [
        {
            "age": 45,
            "city": "澳门半岛",
            "created_at": "1971-03-20 17:38:04",
            "email": "d.rqeifdlpx@yvcxt.tz",
            "id": "TlNgYW7",
            "key": "jKi8&ZSWBEnnNzlMwSyLK$sB8UUp@H*[c2[b!ieZfg#*34LSM[u1z",
            "name": "Margaret Helen Robinson",
            "phone": "13687356217",
            "price": 598,
            "province": "广东省",
            "type": "三方支付",
            "uname": "龚娟"
        },
        {
            "age": 40,
            "city": "日喀则地区",
            "created_at": "1985-03-26 06:13:03",
            "email": "x.kikgtslgk@ynqeirb.fo",
            "id": "\fPv28ds",
            "key": "j6kjQ%$Z37F$]$mHU&)M2PJnLtk3YtNkDCM!6ij^lfO3&@FkjpJ7vZ@",
            "name": "Lisa Brenda Thompson",
            "phone": "19031788181",
            "price": 1393,
            "province": "香港特别行政区",
            "type": "线下",
            "uname": "戴平"
        },
        {
            "age": 40,
            "city": "三沙市",
            "created_at": "2009-05-22 01:51:03",
            "email": "c.zvgixnmovq@pdwps.lt",
            "id": " kaQd2",
            "key": "F)5VNx83YJ26]AygiiLWBHRIk1ANy9%NH$Mq$P8FbhF#x)tJLVH4",
            "name": "John Jennifer Johnson",
            "phone": "17315544215",
            "price": 590,
            "province": "海南省",
            "type": "线下",
            "uname": "范杰"
        },
        {
            "age": 20,
            "city": "上海市",
            "created_at": "1998-02-15 09:35:36",
            "email": "w.igoupuxm@mxnclekk.ci",
            "id": "rb065M",
            "key": "B^KDv(I3OiPkVV]25YMP&]eL4BE8bFD^Ja6aSJhEbjrjdyzrsI@GFT4",
            "name": "Michelle Thomas Davis",
            "phone": "15374035812",
            "price": 1098,
            "province": "贵州省",
            "type": "线上",
            "uname": "蔡刚"
        },
        {
            "age": 36,
            "city": "雅安市",
            "created_at": "1972-02-27 20:45:27",
            "email": "k.sdyep@kwxwdydy.ni",
            "id": "\tu8Ctp",
            "key": "zmKd&W^c0HDwAlvp^GWtQEo@&r4#nAatcM)S(2Y*(",
            "name": "Eric Cynthia Moore",
            "phone": "15893736095",
            "price": 1435,
            "province": "辽宁省",
            "type": "线下",
            "uname": "锺丽"
        },
        {
            "age": 32,
            "city": "石嘴山市",
            "created_at": "2018-05-27 04:44:36",
            "email": "f.tdbp@rkovt.ng",
            "id": " KSvKQ",
            "key": "B((6cMzcAkVrmrr4^fA0ENos5@VE0gq#lJcZT6EhoZ4Mk2lWvI",
            "name": "Joseph Anthony White",
            "phone": "13036692471",
            "price": 878,
            "province": "江西省",
            "type": "三方支付",
            "uname": "锺静"
        },
        {
            "age": 50,
            "city": "石嘴山市",
            "created_at": "1978-04-12 13:56:37",
            "email": "n.ticof@dosvgos.tg",
            "id": "\tLi7Jql2a",
            "key": "3&2t#dvTXD1sExrrXAHf0CSRkj5qn5fi(EOyTA$lK8O!F1gW^@&&xE",
            "name": "Betty Angela Hernandez",
            "phone": "19265388448",
            "price": 1995,
            "province": "黑龙江省",
            "type": "三方支付",
            "uname": "于磊"
        },
        {
            "age": 27,
            "city": "北京市",
            "created_at": "2001-09-24 16:28:19",
            "email": "t.xlqvfk@xthi.li",
            "id": " DB77FKVI",
            "key": "*(x9D[ugXmw2WCPFqUpbzsNVZzOoY2drdEa@ZdPFSDnLtqV(pxVEk",
            "name": "Helen Elizabeth Walker",
            "phone": "16227805422",
            "price": 550,
            "province": "湖北省",
            "type": "线上",
            "uname": "于丽"
        },
        {
            "age": 43,
            "city": "上海市",
            "created_at": "1975-06-10 19:44:33",
            "email": "e.fxlfi@wmbm.mh",
            "id": "fwOxTCW",
            "key": "x8^j#!qNzPCY!zz88NNNsWU*NboVlAa$fTWalQim0EmiZxAsAkJTR",
            "name": "Laura Mary Thompson",
            "phone": "14594487251",
            "price": 456,
            "province": "新疆维吾尔自治区",
            "type": "三方支付",
            "uname": "胡秀英"
        },
        {
            "age": 22,
            "city": "桃园县",
            "created_at": "2006-03-08 07:29:42",
            "email": "h.bviyekl@vlrgak.nc",
            "id": "tJ4F1tC",
            "key": "40NF#V[qfM3#PJN3[PKP7vKY8514Yu[lr5q0pycMpBwg7SQgjO7o",
            "name": "Carol Steven Hernandez",
            "phone": "15263737372",
            "price": 1664,
            "province": "广西壮族自治区",
            "type": "线上",
            "uname": "郝静"
        }
    ]
}
```

## 参考资料

* [mock.js官网](http://mockjs.com/)
* [mock.js使用](https://segmentfault.com/a/1190000008839142)
* [正确开启Mockjs的三种姿势：入门参考（一）](https://www.cnblogs.com/soyxiaobi/p/9846057.html)
* [使用Mock.js模拟数据请求](https://juejin.im/post/6844903571381551111)
