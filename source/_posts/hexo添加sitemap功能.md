---
title: hexo添加sitemap功能
tags:
  - 技术积累
  - hexo
  - yilia
categories:
  - 技术积累
  - hexo
  - yilia
toc: true
abbrlink: f023bd8e
date: 2020-08-14 15:27:14
---

![首屏图](https://s1.ax1x.com/2020/08/14/dPmdMj.jpg)

<!-- more -->

[返回yilia主题进阶设置](/archives/20200717e10c0cde/#sitemap-功能添加)

> 如果你的`博客`是使用`GitHub + Hexo`搭建的，那么你的`博客`内容是无法被`百度、谷歌`等搜索引擎搜索到的，
虽然我们将自己的`博客`托管在`GitHub`，但是`GitHub`是不会讲站点信息提交给搜索引擎的，
所以我们可以手动将自己的`博客`站点提交给`百度、谷歌`的搜索引擎。

## 验证站点

搜索引擎验证的方法有好几种，下面我选择`HTML标签验证`验证方法，
其他的方法有兴趣可以自己去试一下，这里就不介绍了。

* 首先打开[百度搜索引擎](https://ziyuan.baidu.com/site/siteadd)，在`输入您想要添加的网站`的输入框中输入自己的`博客`地址。
* 选择自己网站的站点属性。
![站点属性](https://s1.ax1x.com/2020/08/14/dP9v1P.png)
* 选择`HTML标签验证`，然后将下方的`meta`代码复制下来，网页先不要关。
![标签验证](https://s1.ax1x.com/2020/08/14/dPC90g.jpg)
* 重新开一个页面，打开[谷歌搜索引擎验证](https://www.google.com/webmasters/tools/home?hl=zh-CN)，点击`网址前缀`，一样输入自己的`博客`地址。(`谷歌`需要翻墙，如果不想翻墙的话，可以跳过`谷歌`验证的步骤，只看`百度`的验证)
![网址前缀](https://s1.ax1x.com/2020/08/14/dPP0qU.png)
* 输完后选择`其他验证方法`下的`HTML`标记 ，然后将下方的`meta`代码复制下来，网页也不要关。
![HTML验证](https://s1.ax1x.com/2020/08/14/dPPWM6.png)
* 打开本地博客主题下的 `layout/_partial/head.ejs`文件，将刚才复制的两句`meta`代码粘贴进去。
* 保存文件后，输入以下命令将`博客`重新部署到`GitHub`服务器。

```shell
hexo cl && hexo g && hexo d
```

* 然后分别点击刚才`百度、谷歌`验证页面的`验证`按钮进行站点验证。

## 生成站点地图

* 打开终端`cd`到本地博客目录下，输入以下命令安装`sitmap`插件。

```shell
npm install hexo-generator-sitemap --save
npm install hexo-generator-baidu-sitemap --save
hexo clean
hexo g
```

* 打开本地博客目录下的`_config.yml`文件，修改`url`参数为你博客的`首页地址`，这样是为了保证能正确生成`sitemap.xml`文件中的地址。

```text
url: http://www.gaotianyang.top # 修改成你博客的首页地址
root: /
permalink: :year/:month/:day/:title/
permalink_defaults:
```

* ~~添加以下配置(注意冒号后有空格)~~

```text
# 自动生成sitemap
sitemap:
  path: sitemap.xml
baidusitemap:
  path: baidusitemap.xml
```

* 输入以下命令重新部署博客。

```shell
hexo cl && hexo g && hexo d
```

查看`public`文件夹，可以看到`sitemap.xml`、`baidusitemap.xml`文件。

> 注：`sitemap`的初衷是给搜索引擎看的，为了提高搜索引擎对自己站点的收录效果，我们最好手动到`Google和百度`等搜索引擎提交`sitemap.xml`。

## 将站点地图提交百度、谷歌

### 百度

打开[百度站点普通收录控制台](https://ziyuan.baidu.com/linksubmit/index)，选择`资源提交-sitemap`，填写`https://gaotianyang.top/baidusitemap.xml`。

![百度普通收录](https://s1.ax1x.com/2020/08/14/dPZ9FU.png)

> 提交完成后，就可以等待搜索引擎`自动抓取`或者配置`自动推送`或者`主动推送`站点链接了。
如果你的`博客`是使用`GitHub + Hexo`搭建的，由于`Github`貌似禁止百度爬虫访问`博客`，
导致`博客`可能无法被百度收录，所以可以主动推送站点链接。

### 谷歌

打开[谷歌站点控制台](https://search.google.com/search-console/sitemaps)进入站点地图，录入博客的站点地图文件，点击`提交`站点地图。

![谷歌站点地图收录](https://s1.ax1x.com/2020/08/14/dPeFN8.png)

[返回yilia主题进阶设置](/archives/20200717e10c0cde/#sitemap-功能添加)

## 参考资料

* [Hexo-Yilia 进阶笔记](https://tding.top/archives/9a232bbe.html)
* [给Hexo搭建的博客增加百度和谷歌的搜索引擎验证](https://www.jianshu.com/p/1ae43e700c45)
