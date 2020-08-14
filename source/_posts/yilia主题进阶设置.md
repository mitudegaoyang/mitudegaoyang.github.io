---
title: yilia主题进阶设置
tags:
  - 技术积累
  - hexo
  - yilia
categories:
  - 技术积累
  - hexo
  - yilia
toc: true
abbrlink: e10c0cde
date: 2020-07-17 11:30:27
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

### 增加分类菜单

#### 添加分类链接

修改`themes/yilia/_config.yml`

```text
menu:
    主页:  /
    分类:  /categories/index.html
    归档:  /archives/index.html
```

#### 分类页面的构建

* 新建 categories 页面

```shell
hexo new page categories
```

该命令在 source 目录下生成一个 categories 目录，categories 目录下有一个 index.md 文件。

* 修改 categories/index.md 为：

```html
---
title: 文章分类
date: 2018-06-11 10:13:21
type: "categories"
comments: false
---
```

* 生成 html

```shell
hexo g
hexo s
```

访问`http://localhost:4000/categories/` ，即可看到 categories 页面，只不过现在的页面只有标题。

#### 修改主题

修改 `yilia/source-src/css/main.scss`，将下面的内容添加进去

```css
@import "./category";
```

在 `yilia/source-src/css/`目录下添加`category.scss`，并将下面的内容添加进去

```css
.category-all-page {
    margin: 30px 40px 30px 40px;
    position: relative;
    min-height: 70vh;
}
.category-all-page h2 {
    margin: 20px 0;
}
.category-all-page .category-all-title {
    text-align: center;
}
.category-all-page .category-all {
    margin-top: 20px;
}
.category-all-page .category-list {
    margin: 0;
    padding: 0;
    list-style: none;
}
.category-all-page .category-list-item-list-item {
    margin: 10px 15px;
}
.category-all-page .category-list-item-list-count {
    color: #999;
}
.category-all-page .category-list-item-list-count:before {
    display: inline;
    content: " (";
}
.category-all-page .category-list-item-list-count:after {
    display: inline;
    content: ") ";
}
.category-all-page .category-list-item {
    margin: 10px 10px;
}
.category-all-page .category-list-count {
    color: #999;
}
.category-all-page .category-list-count:before {
    display: inline;
    content: " (";
}
.category-all-page .category-list-count:after {
    display: inline;
    content: ") ";
}
.category-all-page .category-list-child {
    padding-left: 10px;
}
```

生成编译文件

```shell
# cd 到 yilia 目录下
npm install
npm run dev
npm run dist
```

新建 `yilia/layout/categories.ejs`，输入：

```html
<article class="article article-type-post show">
    <header class="article-header" style="border-bottom: 1px solid #ccc">
        <h1 class="article-title" itemprop="name">
            <%= page.title %>
        </h1>
    </header>

    <% if (site.categories.length){ %>
    <div class="category-all-page article-type-post show">
        <h2>共计&nbsp;<%= site.categories.length %>&nbsp;个分类</h2>
        <ul class="category-list">
            <% site.categories.sort('name').each(function(item){ %>
            <% if(item.posts.length){ %>
            <li class="category-list-item">
                <a href="<%- config.root %><%- item.path %>"
                    title="<%= item.name %>"><%= item.name %>[<%= item.posts.length %>]</a>
            </li>
            <% } %>
            <% }); %>
        </ul>
    </div>
    <% } %>
</article>
```

#### 使用分类

修改文章头部

```html
---
title: yilia主题进阶设置
date: 2020-07-17 11:30:27
tags: [hexo,技术积累]
categories: [hexo,技术积累]
toc: true
---
```

效果如下

![分类](https://s1.ax1x.com/2020/07/23/ULEmyF.png)

#### 多层分类

以上，已经完成了categories分类页面，但是只有一层分类。假设，现在有一篇文章的分类为多层分类

例如：

```text
title: yilia主题进阶设置
date: 2020-07-17 11:30:27
tags: [hexo,技术积累]
categories: [hexo,技术积累]
toc: true
```

显示的效果为所有类别平级显示，不是我们想要的效果，如下图：

![分类](https://s1.ax1x.com/2020/07/23/ULEmyF.png)

本节就实现多层分类的显示效果，具体操作如下：

修改 `yilia/layout/categories.ejs`，输入：

```html
<article class="article article-type-post show">
  <header class="article-header" style="border-bottom: 1px solid #ccc">
  <h1 class="article-title" itemprop="name">
    <%= page.title %>
  </h1>
  </header>

  <% if (site.categories.length){ %>
  <div class="category-all-page">
    <h2>共计&nbsp;<%= site.categories.length %>&nbsp;个分类</h2>
    <%- list_categories(site.categories, {
      show_count: true,
      class: 'category-list-item',
      style: 'list',
      depth: 3, # 显示的层级
      separator: ''
    }) %>
  </div>
  <% } %>
</article>
```

再次访问categories，达到了预期效果，如下图：

![多级分类](https://s1.ax1x.com/2020/07/23/ULeeQf.png)

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

[Yilia主题如何添加相册功能](/archives/20200718f57a1917/)

### 增加不蒜子统计

利用这个统计，可以知道你博客的访问量

#### 安装不蒜子脚本

在 `themes\yilia\layout\_partial\after-footer.ejs`最后添加，注意以下新的域名才有效，老的已经失效了

```html
<script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
```

#### 添加统计网站访问量

修改 `themes\yilia\layout\_partial\footer.ejs`，包括访客数和站点访问总量

```html
# PV方式，单个用户连续点击 n 篇，记录 n 次记录值
<span id="busuanzi_container_site_pv">  本站总访问量<span id="busuanzi_value_site_pv"></span>次</span>

# UV方式，单个用户连续点击 n 篇，记录 1 次记录值
<span id="busuanzi_container_site_uv">  本站访客数<span id="busuanzi_value_site_uv"></span>人次</span>
```

我的footer.ejs配置

```html
<footer id="footer">
  <div class="outer">
    <div id="footer-info">
      <div class="footer-left">
        &copy; <%= date(new Date(), 'YYYY') %> <%= config.author || config.title %>
      </div>
      <div class="footer-right">
        <a href="http://hexo.io/" target="_blank">Hexo</a> Theme <a href="https://github.com/litten/hexo-theme-yilia" target="_blank">Yilia</a> by Litten
      </div>
    </div>
    <div calss="count-span">
      <span id="busuanzi_container_site_pv">
        总访问量: <span id="busuanzi_value_site_pv"></span>
      </span>

      <span id="busuanzi_container_site_uv">
        总访客: <span id="busuanzi_value_site_uv"></span>
      </span>
    </div>
  </div>
</footer>
```

#### 单篇文章点击量

`themes\yilia\layout\_partial\article.ejs`中 在 `<%- partial('post/tag') %>` 插入如下代码

```html
<!--显示阅读次数-->
<% if (!index && post.comments){ %>
  <a class="cloud-tie-join-count" href="<%- url_for(post.path) %>" style="color:gray;font-size:14px;">
    <span class="icon-smile"></span>
    <span id="busuanzi_container_page_pv">
      阅读量(<span id="busuanzi_value_page_pv"></span>)
    </span>
  </a>
<% } %>
```

### 添加评论系统

> 实现评论功能内容较多 以单独一篇文章来记录

[Yilia主题如何添加评论功能](/archives/202007217dfdd292/)

### 插入网易云音乐

#### 网易云音乐外链播放器生成

登录网页版网易云音乐，打开一首歌，点击 “生成外链播放器”(找首没版权限制的歌曲好难)。

#### 侧栏添加背景音乐

打开 `/hexo/themes/yilia/layout/_partial/left-col.ejs` 文件，
把音乐 HTML 代码粘贴进去，可以添加样式，改变大小，这是我的代码：

```html
<nav class="header-nav">
    <div class="social">
        <% for (var i in theme.subnav){ %>
            <a class="<%= i %>" target="_blank" href="<%- url_for(theme.subnav[i]) %>" title="<%= i %>"><i class="icon-<%= i %>"></i></a>
        <%}%>
    </div>

    <% if(theme.music.enable){ %>
    <!--音乐播放插件-->
      <div style="margin-top:30px;">
        <iframe
          frameborder="no"
          border="<%=theme.music.border%>"
          marginwidth="<%=theme.music.marginwidth%>"
          marginheight="<%=theme.music.marginheight%>"
          width="<%=theme.music.width%>"
          height="<%=theme.music.height%>"
          src="<%=theme.music.src%>"
        >
        </iframe>
      </div>
    <%}%>
</nav>
```

打开 `/hexo/themes/yilia/_config.yml` 文件，
把音乐播放器的配置添加上。注意“music:”后面必须要有一个空格，如图：

```text
# 配置网易云音乐
music: 
  enable: true #是否展示
  src: '//music.163.com/outchain/player?type=2&id=470795480&auto=1&height=32' #网易云音乐外链地址
  border: 0
  marginwidth: 0
  marginheight: 0
  width: 240
  height: 52
```

添加后效果如图

![添加效果](https://s1.ax1x.com/2020/07/30/auaQD1.png)

### 添加版权信息

### 百度/Google统计/SEO

### 路过图床

#### 上传图片到路过图床

#### blog中使用图床图片

#### 可能遇到的问题

> 您被禁止使用路过图床 imgchr.com
> 本图床服务免费套餐仅限非商业行为的个人使用, 若用于商业行为请购买付费套餐. imgchr.com

可能原因:

1. 该IP段用户(不一定是您)曾经上传过非法图片.
2. 正在使用代理/扶墙, 请关闭扶墙代理工具后再刷新本页面.

[参考文档](https://www.hostloc.com/thread-591879-1-1.html)

### 七牛云图床

#### 上传图片到七牛云

#### 使用 PicGo 自动生成外链

### 文章字数/阅读时长

#### 安装 hexo-wordcount

在博客目录下打开 Git Bash，输入命令

```shell
npm i –save hexo-wordcount
```

#### 文件配置

在 `theme\yilia\layout\_partial\post` 下创建 word.ejs 文件：

```html
<div style="margin-top:10px;">
    <span class="post-time">
      <span class="post-meta-item-icon">
        <i class="fa fa-keyboard-o"></i>
        <span class="post-meta-item-text">  字数统计: </span>
        <span class="post-count"><%= wordcount(post.content) %>字</span>
      </span>
    </span>

    <span class="post-time">
      &nbsp; | &nbsp;
      <span class="post-meta-item-icon">
        <i class="fa fa-hourglass-half"></i>
        <span class="post-meta-item-text">  阅读时长: </span>
        <span class="post-count"><%= min2read(post.content) %>分</span>
      </span>
    </span>
</div>
```

然后在 `themes/yilia/layout/_partial/article.ejs` 中添加

```html
<div class="article-inner">
    <% if (post.link || post.title){ %>
      <header class="article-header">
        <%- partial('post/title', {class_name: 'article-title'}) %>
        <% if (!post.noDate){ %>
        <%- partial('post/date', {class_name: 'archive-article-date', date_format: null}) %>
        <!-- 需要添加的位置 -->
        <!-- 开始添加字数统计-->
        <% if(theme.word_count && !post.no_word_count){%>
          <%- partial('post/word') %>
          <% } %>
        <!-- 添加完成 -->

        <% } %>
      </header>
      <!-- 省略剩余代码 -->
    <% } %>
</div>
```

#### 开启功能

在站点的（不是主题的）_config.yml 中添加下面代码

```text
# 是否开启字数统计
#不需要使用，直接设置值为false，或注释掉
word_count: True
```

### Url持久化

> 实现Url持久化 以单独一篇文章来记录

[Yilia主题生成永久短连接](/archives/20200803e0185335/)

### 网站运行时间

### 鼠标点击小红心设置

### 代码块行号错乱问题解决

### sitemap 功能添加

> 实现sitemap功能 以单独一篇文章来记录

[hexo添加sitemap功能](/archives/20200814f023bd8e/)

### RSS 功能添加

#### 安装 RSS 插件

注意一定要安装到 blog 的根目录

```shell
npm install --save hexo-generator-feed
```

#### 更改配置文件

在你的项目的`_config.yml` 配置文件下找到 `Extensions` 添加如下内容：

```text
# Extensions  #插件和主题
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
#RSS订阅
plugins: hexo-generater-feed
```

在主题配置文件里，在 rss 位置，添加 `/atom.xml`

```text
subnav:
  #github: "#"
  #weibo: "#"
  rss: "/atom.xml"
```

### 谷歌统计添加

### 部署命令

修改配置后，输入以下三条命令即可部署

``` shell
hexo clean
hexo g
hexo d
```

点击这里 查看博客正文的效果

以上希望对你所有帮助。

## 参考资料

* [Hexo-Yilia 进阶笔记](https://tding.top/archives/9a232bbe.html)
* [Hexo yilia 主题一揽子使用方案](https://blog.csdn.net/liuyunjay66/article/details/79845944)
* [hexo yilia 文章浏览量统计](https://codegitz.github.io/2018/04/13/hexo-yilia-%E6%96%87%E7%AB%A0%E6%B5%8F%E8%A7%88%E9%87%8F%E7%BB%9F%E8%AE%A1/)
* [Hexo 添加分类及标签](https://juejin.im/post/5cc11c41f265da038f7745b5)
* [Hexo添加categories页面](https://www.voidking.com/dev-hexo-categories/)
