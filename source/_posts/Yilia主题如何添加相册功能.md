---
title: Yilia主题如何添加相册功能
date: 2020-07-18 09:29:07
tags: [hexo,yilia,技术积累]
toc: true
---

![首屏图](https://s1.ax1x.com/2020/07/19/UWeCUH.jpg)

<!-- more -->

[返回yilia主题进阶设置](/2020/07/17/yilia主题进阶设置/#添加相册功能)

## 添加相册功能的思路

仿照Yilia主题的作者 Litten的 [github 仓库](https://github.com/litten/hexo-theme-yilia)的相册，
实现[相册](http://litten.me/photos/)功能，再进行订制化处理。

* 实现思路

1. 在主页上必须有一个可供点击的相册连接
2. 要用 hexo 生成一个 photos.html 文件
3. photos.html 中的图片数据来源?因为这是一个静态页面所有要有一个 json 文件
4. json 文件中有含有信息，图片的文件名
5. 图片要有一个完整的路径，把图片放到哪呢？图床，github 的空间，自己的服务器都可以
6. 怎么上传呢?大量图片当然写脚本传了.不会写咋办?很多人都写好了,改改就是了,脚本也有很多个版本.多数用 nodeJS写的,hexo 就用的 nodeJS.Python也是很不错的选择.
7. 加载图片太慢怎么办？准备两套图，一套缩略图，一套高清大图。缩略图怎么来？写脚本裁剪图片。

闲言少叙，顺着思路逐一解决问题吧

## 生成相册目录

* 进入到你的博客目录下执行 `hexo new page "photos"`,就会出现一个这样的新目录

![photos新目录](https://s1.ax1x.com/2020/07/19/URbHbD.png)

* 在主题配置文件`yourBlog/themes/yilia/_config.yml`中这样设置

``` text
menu:
  主页: /
  技术: /tags/技术积累/
  归档: /archives/
  相册: /photos/
```

## 生成 photos.html 文件来

### 参考主题作者的生成方式

[下载作者的备份博客](https://github.com/litten/BlogBackup)

### 模仿他的文件目录结构

![photos参考目录](https://s1.ax1x.com/2020/07/19/URLMlt.png)

复制作者的文件到你博客相应的目录下。
ejs 文件是以后要hexo 文件渲染的文件。
assets 目录是放默认图片的也要有。

### 定制化调整文件模板

修改 ejs 模板文件,ins.js 文件设置自己的东西

#### index.ejs文件

可以不用修改

#### 修改 ins.js 文件

修改其中的render()函数。这个函数是用来渲染数据的修改图片的路径地址。
minSrc是小图的路径。src是大图的路径。修改为自己的图片路径(路过图床，七牛的, github的路径)。

![ins.js](https://s1.ax1x.com/2020/07/19/URj80K.png)

因为图片的尺寸是不固定的，这里做了一下定制化处理。
修改`data-size="640x640"`改为`data-size="' + size + '"`。

![data-size](https://s1.ax1x.com/2020/07/20/UfqLef.png)

## 编辑json文件

这一步是关键的一步，也是最后一步。

因为路过图床是自动生成大小图链接的，因此这里省略了使用脚本把图片处理成一套大图和一套小图的操作。
将图片的链接整理并编辑图片的`yourBlog/source/photos/ins.json`文件。

添加size字段，将图片的尺寸录入。例如：`1080x1440`

## 总结

走到这里所有的所有的准备工作都做好了.
进入到你博客目录, 处理ins.json

``` shell
hexo clean (清理之前的 HTML 等)
hexo g (生成 HTML 文件)
hexo s (看看效果如何)
```

最后部署到你的博客上.

[返回yilia主题进阶设置](/2020/07/17/yilia主题进阶设置/#添加相册功能)

## 参考资料

* [Yilia主题的作者 Litten的 github 仓库](https://github.com/litten/hexo-theme-yilia)
* [Yilia主题作者的备份博客仓库](https://github.com/litten/BlogBackup)
* [hexo Yilia 主题如何添加相册功能](https://www.jianshu.com/p/a9f309aaa0e0)
* [PhotoSwipe 畫廊函式庫，網頁展示照片](https://blog.gtwang.org/web-development/photoswipe-javascript-image-gallery-tutorial/)
