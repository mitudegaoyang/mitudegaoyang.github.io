---
title: Yilia主题如何添加评论功能
date: 2020-07-21 10:22:17
tags: [hexo,yilia,技术积累]
toc: true
---

![首屏图](https://s1.ax1x.com/2020/07/21/U5XM4K.jpg)

<!-- more -->

[返回yilia主题进阶设置](/2020/07/17/yilia主题进阶设置/#添加评论系统)

## 常见的评论系统

* Gitalk(测试通过，可以使用)
* Valine()
* 畅言(搜狐的评论系统,很强大,但需要有备案号)
* Gitment(登录GitHub账号长时间loading)
* 来必力(注册受阻，且是韩国服务器，评论系统响应变慢)
* 友言(不需要备案号,功能也比较强大)
* disqus(国内经常被墙)
* 网易云跟帖(已经关闭系统)
* 多说(功能强大，但是已经停止服务)

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

* [hexo+yilia+Gitalk添加评论系统](https://www.pianshen.com/article/6042218776/)
* [hexo+yilia+Gitalk添加评论系统-样式调整](https://my.oschina.net/u/4383702/blog/3678467)
* [hexo+yilia+Valine添加评论系统](https://blog.csdn.net/qq_43827595/article/details/101450966)
* [hexo+yilia+Valine添加Valine评论系统](https://mxy493.xyz/2019/01/28/Hexo%E5%8D%9A%E5%AE%A2%EF%BC%88%E4%B8%BB%E9%A2%98%EF%BC%9Ayilia%EF%BC%89%E6%B7%BB%E5%8A%A0Valine%E8%AF%84%E8%AE%BA%E7%B3%BB%E7%BB%9F/#%E5%BA%8F%E8%A8%80)
* [新增对Valine评论系统的支持 #646](https://github.com/litten/hexo-theme-yilia/pull/646)
* [hexo+yilia+畅言添加评论系统](https://blog.csdn.net/qq_40910541/article/details/80659127)
* [hexo+yilia+来必力添加评论系统-注册](https://blog.csdn.net/qwerty200696/article/details/78836421)
* [hexo+yilia+来必力添加评论系统](https://blog.csdn.net/maosidiaoxian/article/details/90902494)
* [hexo+yilia+Gitment添加评论系统](https://www.cnblogs.com/liuurick/p/10713709.html)
