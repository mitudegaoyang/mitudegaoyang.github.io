---
title: Yilia主题如何添加左侧SubNav图标
tags:
  - 技术积累
  - hexo
  - yilia
categories:
  - 技术积累
  - hexo
  - yilia
toc: true
abbrlink: e928c2fc
date: 2021-02-05 17:51:50
---

![首屏图](https://s3.ax1x.com/2021/02/08/yU8KoT.jpg)

<!-- more -->

## 介绍

博客左下角的SubNav发现和我的诉求不太一致，希望扩展一下更多的图标库。

![原有SubNav](https://s3.ax1x.com/2021/02/08/yU8y6A.png)

比如这些：

![现有SubNav](https://s3.ax1x.com/2021/02/08/yU8T6s.png)

那么我是如何将图标库添加的呢？

## 修改主题

首先，我们看到`./themes/yilia/source/fonts`中有四个格式不同但是命名相同的字体文件。

![iconfont编辑后文件](https://s3.ax1x.com/2021/02/08/yUGPn1.png)

我们的目的就是把我们需要的图标加进去，之后重新生成这四个文件。
但是，不能直接更改这四个文件，因为这四个文件是编译Yilia时自动生成的，每次重新编译Yilia之后都会被替换掉。
我们修改一个程序肯定不会直接对着程序本体修改，而是取得他的源代码然后更改源代码。那么，在Yilia源代码中：

真正需要修改的是`./themes/yilia/source-src/css/fonts`文件夹里面的四个字体文件。

![iconfont源文件](https://s3.ax1x.com/2021/02/08/yUGIUK.png)

生成字体文件的方法有好几种,分别是：

1. 使用在线icon-font生成器+自制CSS
1. 矢量图形编辑软件（Adobe Illustrator）+Glyphs/Glyphs Mini/FontLab + FontSquirrel WebFont Generator+ 自制CSS文件
1. 上一条中出现的软件的开源版，InkScape + FontForge + FontSquirrel WebFont Generator
1. 矢量图形编辑软件（Adobe Illustrator）+FontCustom命令行

生成字体文件的详细内容可以参考这篇[文章](https://www.jianshu.com/p/095eb298ed18)

今天我选择直接使用百度的[字体编辑器](https://www.gaotianyang.top/fonteditor/)，
后面我会很简单的讲一下如何使用如果我没讲明白，你可以看一下[百度字体编辑器教程](https://ecomfe.github.io/blog/use-fonteditor-to-build-webfont/)。

## 修改字体

![百度字体编辑器教程步骤](https://s3.ax1x.com/2021/02/08/yUYneI.jpg)

### 下载新图标

#### 下载Font Awesome最新图标

去[Font Awesome](https://fontawesome.com/how-to-use/on-the-web/setup/hosting-font-awesome-yourself)下载最新版的图标。

![下载免费版](https://s3.ax1x.com/2021/02/08/yUYNmn.png)

#### 下载iconfont图标

打开[iconfont](https://www.iconfont.cn/home/index)

将喜欢的图标添加至自己的项目，然后导出项目。

![下载iconfont图标](https://s3.ax1x.com/2021/02/08/yUtS1g.png)

### 导入项目

导入两个项目，一个项目是主题的旧字体，一个是从网上下载的待添加字体。

1. 打开.woff文件
1. 保存项目

按照图中的步骤一，步骤二操作，每次切换项目都要点击“保存项目”。

### 在项目间迁移图标

通过“复制”、“粘贴”功能将喜欢的图标添加到旧字体，添加完所有的图标后，
最好截一张图，这样后面修改的时候会方便很多，最后下载zip格式并解压。

下面这张图是我添加的图标

![复制图标](https://s3.ax1x.com/2021/02/08/yUYrpF.png)

### 导出项目

将迁移好的新项目下载至本地。

![下载新图标项目](https://s3.ax1x.com/2021/02/08/yUaxVs.png)

### 图标重命名

有些时候，不同的图标在复制粘贴过程中，会出现名称或unicode码重复的情况，此时需要修改字形信息。

选中问题字形，点击字形信息，修改并保存。

![重命名图标](https://s3.ax1x.com/2021/02/08/yUts4f.png)

## 修改CSS

### 安装依赖

如果你之前没有修改过Yilia，请先使用以下命令安装依赖。

进入主题根目录`./themes/yilia`，安装依赖。

```shell
cd themes/yilia
yarn
```

### 开发

修改`./themes/yilia/source-src/css`中的`fonts.scss`和`social.scss`，可以修改自己喜欢的图标和颜色。content中的内容要和上面截图中的unicode码一致。

![修改scss文件](https://s3.ax1x.com/2021/02/08/yUa7PP.png)
![unicode码对照](https://s3.ax1x.com/2021/02/08/yUa6C6.png)

然后，将新生成的字体文件拷贝到`./themes/yilia/source-src/css/fonts`。
切换目录至`./themes/yilia`，运行`npm run dev`。
此时会用webpack打包，把文件编译到source文件里，但文件不会经过压缩。

### 发布

最终定稿后运行

```shell
yarn run dist
```

获得最终确定版本，此时的编译会经过压缩。

## 重新生成网站

配置主题的`./themes/yilia/_config.yml`文件。

![修改config](https://s3.ax1x.com/2021/02/08/yUdeaR.png)

执行编译命令

```shell
hexo cl
hexo g
hexo d
```

## 常见问题

FontEditor无法正常上传woff文件，显示`e.inflate is not a function`错误

可以打开[kekee000部署版本正常上传](https://kekee000.github.io/fonteditor/index.html)

[返回yilia主题进阶设置](/archives/20200717e10c0cde/#SubNav图标拓展)

## 参考资料

* [修改Yilia左下角SubNav的社交图标](https://blog.zscself.com/posts/70677220/)
* [fontawesome下载页](https://fontawesome.com/how-to-use/on-the-web/setup/hosting-font-awesome-yourself)
* [使用FontEditor创建web字体图标](https://ecomfe.github.io/blog/use-fonteditor-to-build-webfont/)
* [FontEditor线上版本出问题了](https://github.com/ecomfe/fonteditor/issues/33)
