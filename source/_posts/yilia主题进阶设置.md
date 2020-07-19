---
title: yilia主题进阶设置
date: 2020-07-17 11:30:27
tags: [hexo,技术积累]
toc: true
---

![首屏图](https://s1.ax1x.com/2020/07/17/UssPcF.jpg)

<!-- more -->

在用 Hexo 搭建完毕后，接着就寻找主题了，对比了几个主题 ，发现这个yilia 主题比较干净，
简洁，于是就选了这个主题，但是有些细节不太习惯，于是就研究调整了一下，就是现在这个博客的样子。

### 查看所有文件提示缺失模块

`yilia` 在首次使用时，点击**所有文章**时，会出现模块找不到的错误，可按照提示操作即可
注意一下，`_config.yml` 路径是指根目录下的，而非 `yilia` 主题下的 config文件

![yilia_loss_module](https://s1.ax1x.com/2020/07/17/UyEc8g.png)

### 配置图片资源

* **添加图片资源文件夹**。 路径为 `themes/yilia/source/`下，可添加一个 `assets` 文件夹，里面存放图片资源即可
* **配置文件中直接引用即可**。路径为 `themes/yilia/_config.yml`，找到如下即可

``` text
# 微信二维码图片
weixin:  /assets/img/wechat.png
# 头像图片
avatar:  /assets/img/head.jpg
# 网页图标
favicon:  /assets/img/head.jpg
```

### 文章如何显示摘要

* 问题: 点击主页时，发现所有文章都是全文显示，不利于查找，可控制显示的字数
* 解决办法: 在你 MD 格式文章正文插入 `<!-- more -->`即可，只会显示它之前的，此后的就不显示，点击文章标题，全文阅读才可看到，同时注释掉以下 `themes/yilia/_config.yml`，避免展示重复

* 重复时显示如下:

![摘要配置重复](https://s1.ax1x.com/2020/07/17/UyeQDs.png)

``` text
# excerpt_link: more
```

* 效果:

![yilia_摘要](https://s1.ax1x.com/2020/07/17/Uye6PK.png)

### 文章显示目录

增加文章目录 TOC(table of content )，方便阅读文章, 在 themes/yilia/_config.ym中进行配置 toc: 1即可，它会将你 Markdown 语法的标题，生成目录，目录查看在右下角。

* `toc: 0` 默认不生成目录
* `toc: 1` 文章配置时添加`toc: true`生成目录
* `toc: 2` 默认生成目录

![目录效果](https://s1.ax1x.com/2020/07/17/UyMNng.png)

### 增加归档菜单

修改 themes/yilia/_config.yml

```text
menu:
    主页:  /
    归档:  /archives/index.html
```

### 增加tags菜单

修改 themes/yilia/_config.yml

```text
menu:
    主页:  /
    归档:  /tags/tag名称/
```

### 修改代码块样式

默认的代码样式太刺眼了，调成稍微柔和一些的，这里是调成 Atom 风格，以下为两种方式都可以，推荐第一种直接修改编译好的文件，不然还需要重新build。

* **直接修改编译好的文件**。路径为：`theme\yilia\source\main.0cf68a.css`
  * 修改代码背景色，搜索 `.article-entry .highlight`, 修改background后面的颜色
  ![背景色修改](https://s1.ax1x.com/2020/07/17/UyGiAe.png)
  * 修改代码字体颜色 `.article-entry .highlight .line`
  ![代码字体色修改](https://s1.ax1x.com/2020/07/17/UyGRHO.png)
* **修改源文件重新build**。上述资源对应源文件为 yilia\source-src\css\highlight.scss，按照如下方式build

```shell
cd 到 yilia 目录下
npm install
npm run dev
npm run dist
```

### 添加相册功能

> 实现相册功能内容较多 以单独一篇文章来记录

[Yilia主题如何添加相册功能](/2020/07/18/Yilia主题如何添加相册功能)

### 增加不蒜子统计

#### 安装不蒜子脚本

#### 添加统计网站访问量

#### 单篇文章点击量

### 添加来必力评论系统

### 添加版权信息

### 插入网易云音乐

### 百度/Google统计/SEO

### 路过图床

#### 上传图片到路过图床

#### blog中使用图床图片

### 七牛云图床

#### 上传图片到七牛云

#### 使用 PicGo 自动生成外链

### Demo测试

修改配置后，输入以下三条命令即可部署

``` shell
hexo clean
hexo g
hexo d
```

点击这里 查看博客正文的效果

以上希望对你所有帮助。

## 参考资料

* [Hexo yilia 主题一揽子使用方案](https://cloudy-liu.github.io/2018/04/07/Hexo_yilia_%E4%B8%BB%E9%A2%98%E4%B8%80%E6%8F%BD%E5%AD%90%E4%BC%98%E5%8C%96%E6%96%B9%E6%A1%88/)
