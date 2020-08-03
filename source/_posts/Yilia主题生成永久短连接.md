---
title: Yilia主题生成永久短连接
abbrlink: e0185335
date: 2020-08-03 18:05:26
tags:
  - 技术积累
  - hexo
  - yilia
categories:
  - 技术积累
  - hexo
  - yilia
toc: true
---

![首屏图](https://s1.ax1x.com/2020/08/03/aUOvyF.jpg)

<!-- more -->

[返回yilia主题进阶设置](/archives/20200717e10c0cde/#Url持久化)

## 简述

使用Hexo搭建博客已经有一段时间了，文章的链接也一直是使用的默认格式，
文章的链接格式可以在博客根目录下的 `_config.yml` 文件中修改，
默认的配置如下所示，默认生成的文章地址路径是 `【网站名称／年／月／日／文章名称】`,
最终生成的链接大概是这样的：`https://www.gaotianyang.top/2020/08/03/title` 。

```text
# URL
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: https://www.gaotianyang.top/ #你的站点Url
root: / #站点的根目录
# permalink: :year/:month/:day/:title/ #文章的 永久链接 格式
# permalink_defaults: #永久链接中各部分的默认值
```

更多关于永久链接的配置可以参考Hexo的官方文档：[永久链接（Permalinks）](https://hexo.io/zh-cn/docs/permalinks)

如果说文章的标题是英文，那么生成的链接还是比较简洁的，
但如果是是中文的标题，比如2020年8月3日的标题为“Yilia主题生成永久短连接”的文章生成的文章链接将是这样的：

`https://www.gaotianyang.top/2020/08/03/Yilia%E4%B8%BB%E9%A2%98%E7%94%9F%E6%88%90%E6%B0%B8%E4%B9%85%E7%9F%AD%E8%BF%9E%E6%8E%A5`

这种链接对搜索爬虫是很不友好的，它的 url 结构超过了三层，太深了。

可以看到，默认配置下中文标题的文章链接是很复杂的类似于乱码的状态，
并且这种链接对搜索爬虫是很不友好的，它的 url 结构超过了三层，太深了。
本文要达到的效果将是这样的：`https://www.gaotianyang.top/202008035e0185335/`

## 使用 hexo-abbrlink 生成短链接

下面我推荐安装 `hexo-abbrlink` 插件：

```shell
npm install hexo-abbrlink --save
```

然后配置_config.yml

```text
# permalink: :title/
# permalink: archives/:year:month:day:abbrlink.html
# permalink: :year:month:day:abbrlink/
permalink: archives/:year:month:day:abbrlink/
abbrlink:
  alg: crc32  # 算法：crc16(default) and crc32
  rep: hex    # 进制：dec(default) and hex
  # 下面几项可以省略
  drafts: false #(true)Process draft,(false)Do not process draft
  # Generate categories from directory-tree
  # depth: the max_depth of directory-tree you want to generate, should > 0
  auto_category:
     enable: false
     depth:
```

> 注意：版本为2.1.5之前的必须完整添加上述所有配置，否则会生成失败！（可能是bug，2.2.1已修复）

不同参数的效果如下所示：

```text
crc16 & hex
https://post.zz173.com/posts/66c8.html

crc16 & dec
https://post.zz173.com/posts/65535.html

crc32 & hex
https://post.zz173.com/posts/8ddf18fb.html

crc32 & dec
https://post.zz173.com/posts/1690090958.html
```

[返回yilia主题进阶设置](/archives/20200717e10c0cde/#Url持久化)

## 参考资料

* [Hexo-Yilia 进阶笔记](https://tding.top/archives/9a232bbe.html)
* [Hexo博客使用插件hexo-abbrlink生成永久短链接](https://mxy493.xyz/2020070417822/)
