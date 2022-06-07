---
title: crawler的使用
tags:
  - 技术积累
  - 前端
  - 爬虫
categories:
  - 技术积累
  - 前端
  - 爬虫
toc: true
abbrlink: a78aa02e
date: 2022-06-07 09:32:00
---

![首屏图](https://s1.ax1x.com/2022/06/07/XBGM2q.png)

<!-- more -->

> node-crawler：一个轻量级爬虫工具

## 这就是 node-crawler

`node-crawler` 是一个轻量级的 node.js 爬虫工具，兼顾了高效与便利性，支持分布式爬虫系统，支持硬编码，支持 http 前级代理。

`node-crawler` 完全由 nodejs 写成，天生支持非阻塞异步 IO，为爬虫的流水线作业机制提供了极大便利。同时支持对 `DOM` 的快速选择，对于抓取网页的特定部分的任务可以说是杀手级功能，无需再手写正则表达式，提高爬虫开发效率。

## 特点

- DOM 元素快速解析 & 符合 jQuery 语法的选择器功能(默认使用 Cheerio，支持更换为 `JSDOM` 等其它 DOM 解析器)
- 支持连接池模式，并发数和重连数均可配置
- 支持请求队列的优先权（即不同 URL 的请求能有不同的优先级）
- 支持延时功能（某些服务器对每分钟内连接数有限制）
- 支持 `forceUTF8` 模式以应对复杂的编码问题，当然你也可以自己为不同的连接设置编码
- 支持 4.x 及更高版本的 Nodejs

## 快速上手

- [安装](https://node-crawler.readthedocs.io/zh_CN/latest/quick_start/#_2)
- [最简单的使用实例](https://node-crawler.readthedocs.io/zh_CN/latest/quick_start/#_3)
- 回调处理
- [并发控制及慢速模式](https://node-crawler.readthedocs.io/zh_CN/latest/quick_start/#_4)

## 高级功能

- [自定义参数](https://node-crawler.readthedocs.io/zh_CN/latest/extra_example/#_2)
- [使用 http 代理](https://node-crawler.readthedocs.io/zh_CN/latest/extra_example/#_3)
- [处理原始返回数据](https://node-crawler.readthedocs.io/zh_CN/latest/extra_example/#_4)
- 分布式爬虫
- 链式模型
- 使用 POST,GET,PUT 等请求方法
- 使用 Cookie

## 参数详细介绍

- [回调设置](https://node-crawler.readthedocs.io/zh_CN/latest/reference/main/#_2)
- [调度参数](https://node-crawler.readthedocs.io/zh_CN/latest/reference/main/#_3)
- [重试控制](https://node-crawler.readthedocs.io/zh_CN/latest/reference/main/#_4)
- [DOM 选项](https://node-crawler.readthedocs.io/zh_CN/latest/reference/main/#_5)
- [编码设置](https://node-crawler.readthedocs.io/zh_CN/latest/reference/main/#_6)
- [缓存设置](https://node-crawler.readthedocs.io/zh_CN/latest/reference/main/#_7)
- [其它](https://node-crawler.readthedocs.io/zh_CN/latest/reference/main/#_8)

## Crawler 类捕获事件

- Event: 'schedule'
- Event: 'limiterChange'
- Event: 'request'
- Event: 'drain'

## 最佳实践

> 循环爬取列表数据，并根据列表数据获取对应详情页数据。

### 获取列表数据

根据数据源页面规律，构建爬取 url 列表。并爬取列表基础数据。

```js
// 引入爬虫插件
const Crawler = require('crawler');
// 引入导出文件插件
const fs = require('fs');
//系统路径模块
let path = require('path');
const format = require('./utils/format.js');
const utils = require('./utils/utils.js');
// 临时存储数据
let datas = [];

let c = new Crawler({
  maxConnections: 1,
  followRedirect: false,
  // 在每个请求处理完毕后将调用此回调函数
  callback: function (error, res, done) {
    if (error) {
      console.log(error);
      console.log(`错误条目${res.options.title}%`);
    } else {
      // $ 默认为 Cheerio 解析器
      // 它是核心jQuery的精简实现，可以按照jQuery选择器语法快速提取DOM元素
      // var $ = res.$;

      // 格式化json(将dom结构解析为json数据)
      let json = format.formatList(res, host);

      // 合并数据
      datas = [...datas, ...json];

      // 获取并输出进度(当queue插入的数据是数组对象时，可以根据res.options获取数据对应的属性)
      let progress = utils.getProgress(res.options.key, num);
      console.log(`进度${progress}%`);

      // 当爬取完毕输出
      let text = JSON.stringify(datas);
      // 指定要创建的目录和文件名称 __dirname为执行当前js文件的目录
      let file = path.join(__dirname + '/json', 'urlList.json');

      // 写入文件
      fs.writeFile(file, text, function (err) {
        if (err) {
          console.log(err);
        } else {
          if (res.options.key === num) {
            console.log('文件创建成功~' + file);
          }
        }
      });
    }
    done();
  }
});

// 基础配置
let start = 1; // 设置起始请求页数
let num = 1; // 设置请求页数总数
let host = 'https://www.dytt8.net'; // 目标网站域名
let urls = []; // 存储爬取页面列表

// 构建爬取列表
for (var i = start; i < num + 1; i++) {
  let item = {};
  item.key = i;
  // 循环生成列表数据
  item.uri = host + '/html/gndy/dyzz/list_23_' + i + '.html';
  urls.push(item);
}
// 将一个URL加入请求队列，并使用默认回调函数
c.queue(urls);

// 将多个URL加入请求队列
// c.queue(['http://www.google.com/', 'http://www.yahoo.com']);

console.log('---------------开始爬取---------------');
```

### 获取详情数据

根据第一步爬取的列表数据，进入详情页爬取详情数据，并通过正则匹配，处理成需要的数据格式。

```js
const Crawler = require('crawler');
const fs = require('fs');
let path = require('path');
const format = require('./utils/format.js');
const utils = require('./utils/utils.js');

let datas = [];
// 获取原始链接数据
let urlList = require('./json/urlList.json');

let c = new Crawler({
  maxConnections: 1,
  followRedirect: false,
  // 在每个请求处理完毕后将调用此回调函数
  callback: function (error, res, done) {
    if (error) {
      console.log(error);
      console.log(`错误条目${res.options.title}%`);
    } else {
      // $ 默认为 Cheerio 解析器
      // 它是核心jQuery的精简实现，可以按照jQuery选择器语法快速提取DOM元素
      // var $ = res.$;

      // 格式化json
      let json = format.formatDetails(res);
      datas.push(json);

      let progress = utils.getProgress(res.options.key, urlList.length);
      console.log(`进度${progress}%`);
      // 当爬取完毕输出
      let text = JSON.stringify(datas);

      // 指定要创建的目录和文件名称 __dirname为执行当前js文件的目录
      let file = path.join(__dirname + '/json', 'movieList.json');

      // 写入文件
      fs.writeFile(file, text, function (err) {
        if (err) {
          console.log(err);
        } else {
          if (res.options.key === urlList.length) {
            console.log('文件创建成功~' + file);
          }
        }
      });
    }
    done();
  }
});

let num = 0; // 设置起始值
let urls = [];

for (var i = num; i < urlList.length; i++) {
  if (urlList[i]) {
    let item = {};
    item.key = i + 1;
    item.uri = urlList[i].url;
    item.id = urlList[i].id;
    item.title = urlList[i].title;
    item.url = urlList[i].url;
    item.date = urlList[i].date;
    item.desc = urlList[i].desc;
    item.img = urlList[i].img;
    urls.push(item);
  }
}
c.queue(urls);

console.log('---------------开始爬取---------------');
```

### 清洗详情数据

数据中存在错误数据，异常数据，可以通过清洗脚本，批量赋默认值处理。例如清洗图片 404 的数据。

```js
const fs = require('fs');
// 系统路径模块
let path = require('path');
// 异常图片地址列表
const formatConfig = require('./utils/formatConfig.js');

let formatList = require('./json/movieList.json');
// 设置默认图片链接
let baseImage = 'https://img9.doubanio.com/view/photo/l_ratio_poster/public/p.jpg';

for (i = 0; i < formatList.length; i++) {
  // 若img字段为空，赋默认值
  if (formatList[i].img === '') {
    formatList[i].img = baseImage;
  }
  // 若img字段符合异常数据列表，赋默认值
  for (j = 0; j < formatConfig.errUrl.length; j++) {
    if (formatList[i].img.includes(formatConfig.errUrl[j])) {
      formatList[i].img = baseImage;
    }
  }
}
// 格式化json
let text = JSON.stringify(formatList);

// 指定要创建的目录和文件名称 __dirname为执行当前js文件的目录
let file = path.join(__dirname + '/json', 'formatFinsh.json');

// 写入文件
fs.writeFile(file, text, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('文件创建成功~' + file);
  }
});
```

## 参考资料

- [crawler 的 NPM 地址](https://www.npmjs.com/package/crawler)
- [Node-Crawler 介绍](https://node-crawler.readthedocs.io/zh_CN/latest/)
