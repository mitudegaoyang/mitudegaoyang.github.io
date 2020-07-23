---
title: Yilia主题如何添加评论功能
date: 2020-07-21 10:22:17
tags: [技术积累,hexo,yilia]
categories: [技术积累,hexo,yilia]
toc: true
---

![首屏图](https://s1.ax1x.com/2020/07/21/U5XM4K.jpg)

<!-- more -->

[返回yilia主题进阶设置](/2020/07/17/yilia主题进阶设置/#添加评论系统)

## 常见的评论系统

* Valine(评论不需要账号，数据托管于Leancloud数据库管理)
* Gitalk(可以使用，评论需要登录GitHub账号)
* 畅言(搜狐的评论系统,很强大,但需要有备案号)
* Gitment(登录GitHub账号长时间loading)
* 来必力(注册受阻，且是韩国服务器，评论系统响应变慢)
* 友言(不需要备案号,功能也比较强大)
* disqus(国内经常被墙)
* 网易云跟帖(已经关闭系统)
* 多说(功能强大，但是已经停止服务)

### Valine

先开始使用的Gitalk，但是这个评论必须拥有GitHub账号才可以，因此转而使用Valine试试。

#### 配置Valine

在`yilia/_config.yml`文件中配置代码：

``` text
#7、配置Valine
valine:
 enable: true #是否启用valine
 appid: #Leancloud应用的appId
 appkey: #Leancloud应用的appKey
 verify: false #验证码，verify和notify这两个最好就别动了
 notify: false #评论回复提醒
 avatar: mm #评论列表头像样式：''/mm/identicon/monsterid/wavatar/retro/hide
 placeholder: Just go go #评论框占位符
```

拷贝如下三个地址的`av-min.js`、`Valine.min.js`和`jquery.min.js`到`yilia/source/lib/valine`目录（没有的话新建文件）

* [av-min.js](https://cdn1.lncld.net/static/js/3.0.4/av-min.js)
* [Valine.min.js](https://unpkg.com/valine/dist/Valine.min.js)
* [jquery.min.js](https://cdnjs.loli.net/ajax/libs/jquery/3.2.1/jquery.min.js)

在`theme/yilia/layout/_partial/post`文件夹下新建文件`valine.ejs`，

``` html
<div id="vcomment" class="comment"></div>
<script>
    var notify = '<%= theme.valine.notify %>' == true ? true : false;
    var verify = '<%= theme.valine.verify %>' == true ? true : false;
    new Valine({
        av: AV,
        el: '#vcomment',
        notify: notify,
        app_id: "<%= theme.valine.appid %>",
        app_key: "<%= theme.valine.appkey %>",
        placeholder: "<%= theme.valine.placeholder %>",
        avatar:"<%= theme.valine.avatar %>",
    });
</script>
```

在`layout/_partial/article.ejs`文件中的结尾添加如下代码(可以参考其他评论代码)：

``` html
<% if (!index && theme.valine && theme.valine.enable && theme.valine.appid && theme.valine.appkey){ %>
<section id="comments" class="comments">
  <style>
    .comments {
      margin: 30px;
      padding: 10px;
      background: #fff
    }

    @media screen and (max-width:800px) {
      .comments {
        margin: auto;
        padding: 10px;
        background: #fff
      }
    }
  </style>
  <%- partial('post/valine', {
            key: post.slug,
            title: post.title,
            url: config.url+url_for(post.path)
            }) %>
</section>
<% } %>
```

在`yilia/layout/_partial/head.ejs`文件中添加代码：

``` text
<% if (theme.valine && theme.valine.enable){ %>
  <script src="/lib/valine/av-min.js"></script>
  <script src='/lib/valine/Valine.min.js'></script>
  <script src="/lib/valine/jquery.min.js"></script>
<% } %>
```

#### 配置评论仓库

接下来就要使用到[Leancloud](https://www.leancloud.cn/)了，大概就是作为我们Valine评论系统的服务器，
因为Valine首页就介绍了Valine是“一款快速、简洁且高效的无后端评论系统”，自行注册一个账号并登录。

创建一个应用，应用名看个人喜好。

![创建应用](https://s1.ax1x.com/2020/07/23/ULsmct.jpg)

选择刚刚创建的**应用>设置>应用Key**，然后你就能看到你的App ID和App Key了，参考下图：

![获取App ID和App Key](https://s1.ax1x.com/2020/07/23/ULyK2R.png)

分别复制**App ID**和**App Key**粘贴到前面设置的主题根目录下的`_config.yml`里对应位置，注意“:”后面必须要有一个空格，如图：

![配置_config.yml](https://s1.ax1x.com/2020/07/23/ULyOzR.png)

为了数据安全，再填写一下安全域名，**应用>设置>安全设置**中的**Web 安全域名**，
如果是Hexo一般填写自己博客主页的地址和`http://localhost:4000/`就可以了，如下图：

![安全域名](https://s1.ax1x.com/2020/07/23/ULsnjP.png)

到这里，你的valine评论系统就已经可以工作了

当然修改了相关代码需要重新部署博客，三步操作：

```shell
hexo clean
hexo g
hexo s #本地测试用http://localhost:4000/访问即可，也可以hexo d部署到云端
```

自己写条评论试试呢，评论的数据会保存到Leancloud你创建的应用里，
具体可以登录Leancloud，选择**应用>存储>Comment**，评论的所有相关信息都可以在这儿看到：

![数据库查看](https://s1.ax1x.com/2020/07/23/UL60fJ.png)

到此如果没有更多的需求已经可以结束不折腾了，进一步的下面介绍实现邮件通知的功能

### Gitalk

可以选择gitment和gitalk评论功能，但是gitment没有弄出来，可能是停服了。

Gitalk 是一个基于 GitHub Issue 和 Preact 开发的评论插件

参考[Demo](https://gitalk.github.io/)

#### 注册Gitalk应用

先要有一个自己的github账号，登录自己的github账户，点击头像>>Settings>>Developer settings>>New OAuth App，或点击[注册](https://github.com/settings/applications/new)

![注册](https://s1.ax1x.com/2020/07/21/UIQg4x.png)

* Application name：可以随意填写
* Homepage URL：个人博客地址（域名）
* Application description：可填可不填，不是关键，若填，可填个人博客的相关描述
* Authorization callback URL：个人博客地址（域名）

#### 获取Client ID跟Client Secret

一切设置完成之后点击Register application，注册完成后，
会出现两个关键信息（个人博客配置评论功能之关键，就不放图了）

Client ID：
Client Secret：

#### 配置gitalk

在`yilia/_config.yml`文件中配置代码：

``` text
#6、配置gitalk
gitalk:
  enable: true
  client_id: OAuth application注册成功获得
  client_secret: OAuth application注册成功获得
  repo: 存储博客评论的仓库地址，可以是存储博客的仓库
  owner: github账户名
  admin: github账户名
```

下载gitalk项目，点这里

拷贝`gitalk/dist/`目录下的`gitalk.css`和`gitalk.min.js`到`yilia/source/lib/gitalk`目录（没有的话新建文件）

在`theme/yilia/layout/_partial/post`文件夹下新建文件`gitalk.ejs`，

``` html
<div class="gitalk">
    <div id="gitalk-container"></div>
    <script type="text/javascript">
        const gitalk = new Gitalk({
            clientID: '<%=theme.gitalk.client_id%>',
            clientSecret: '<%=theme.gitalk.client_secret%>',
            repo: '<%=theme.gitalk.repo%>',
            owner: '<%=theme.gitalk.owner%>',
            admin: ['<%=theme.gitalk.admin%>'],
            id: md5(location.pathname),      // Ensure uniqueness and length less than 50
            distractionFreeMode: false  // Facebook-like distraction free mode
        })
        gitalk.render('gitalk-container')
    </script>
</div>
```

在`yilia/source-src/css/comment.scss`文件中添加代码：

```scss
#disqus_thread, .duoshuo, .cloud-tie-wrapper, #SOHUCS, #gitment-ctn, #gitalk-container {
    padding: 0 30px !important;
    min-height: 20px;
}

#SOHUCS {
    #SOHU_MAIN .module-cmt-list .block-cont-gw {
        border-bottom: 1px dashed #c8c8c8 !important;
    }
}
```

* 修改源文件重新build。上述资源对应源文件为 `yilia/source-src/css/comment.scss`，按照如下方式build

```shell
cd 到 yilia 目录下
npm install
npm run dev
npm run dist
```

在`yilia/layout/_partial/article.ejs`文件中添加代码：

``` text
<% if (!index && theme.gitalk.enable && post.comments){ %>
<%- partial('post/gitalk', {
    key: post.slug,
    title: post.title,
    url: config.url+url_for(post.path)
  }) %>
<% } %>
```

在`yilia/layout/_partial/head.ejs`文件中添加代码：

``` text
<% if (theme.gitalk.enable){ %>
  <link rel="stylesheet" href="/lib/gitalk/gitalk.css">
  <script src="/lib/gitalk/gitalk.min.js"></script>
  <script src="/lib/gitalk/md5.js"></script>
<% } %>
```

最终效果如下

![评论](https://s1.ax1x.com/2020/07/21/UIqryd.png)

### 畅言

添加步骤

#### 注册畅言账号

前往 畅言官网 注册,注册成功后，按照官网提示，填好东西后，注意填写备案信息。

#### 获取appid跟appkey

登录畅言后台，获取自己的appid跟appkey

#### 配置畅言

修改`themes/yilia/_config.yml`,把你上述得到的appid跟appkey填写到如下位置:

``` text
widgets:
   - popular_posts

#2、网易云跟帖
wangyiyun: false

#3、畅言
changyan_appid: ''        //appid添到这里
changyan_conf: ''         //appkey添到这里
```

这样就配置结束了，之后`hexo clean`,`hexo g`,`hexo d` 就ok了

### 来必力

#### 注册来必力账号

打开来必力[官网](https://livere.com)

按套路注册（有可能注册上面要花费点功夫）。（貌似需要科学上网？之前没科学上网好像登录界面显示不了）。

#### 主题配置添加来必力

修改 hexo 博客目录的 `theme/yilia/_config.yml` 文件，增加如下配置：

``` text
# livere 来必力。将 false 改为自己的uid则启用该评论系统。
livere_uid: false
```

#### 新增来必力评论代码文件

```html
<!-- 来必力City版安装代码 -->
<div id="lv-container" data-id="city" data-uid="<%=theme.livere_uid%>">
<script type="text/javascript">
(function(d, s) {
    var j, e = d.getElementsByTagName(s)[0];

    if (typeof LivereTower === 'function') { return; }

    j = d.createElement(s);
    j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
    j.async = true;

    e.parentNode.insertBefore(j, e);
})(document, 'script');
</script>
<noscript> 为正常使用来必力评论功能请激活JavaScript</noscript>
</div>
<!-- City版安装代码已完成 -->
```

#### 修改 article.ejs

修改 `yilia/layout/_partial/article.ejs` 文件，在 `<% if (!index && post.comments){ %>` 后的任意一个评论代码前或后插入如下代码：

``` text
<%if (theme.livere_uid) { %>
    <%- partial('post/livere') %>
<% } %>
```

如上三步，修改完成。如果要启用，修改主题的 `_config.yml` 文件，将 `livere_uid` 的值改为自己的来必力 `uid` 即可，注意冒号之后有空格。

[返回yilia主题进阶设置](/2020/07/17/yilia主题进阶设置/#添加评论系统)

## 参考资料

* [hexo+yilia+Valine添加评论系统](https://blog.csdn.net/qq_43827595/article/details/101450966)
* [新增对Valine评论系统的支持 #646](https://github.com/litten/hexo-theme-yilia/pull/646)
* [hexo+yilia+Gitalk添加评论系统](https://www.pianshen.com/article/6042218776/)
* [hexo+yilia+Gitalk添加评论系统-样式调整](https://my.oschina.net/u/4383702/blog/3678467)
* [hexo+yilia+畅言添加评论系统](https://blog.csdn.net/qq_40910541/article/details/80659127)
* [hexo+yilia+来必力添加评论系统-注册](https://blog.csdn.net/qwerty200696/article/details/78836421)
* [hexo+yilia+来必力添加评论系统](https://blog.csdn.net/maosidiaoxian/article/details/90902494)
* [hexo+yilia+Gitment添加评论系统](https://www.cnblogs.com/liuurick/p/10713709.html)
