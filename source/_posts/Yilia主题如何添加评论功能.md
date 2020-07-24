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

接下来就要使用到[Leancloud](https://leancloud.app/)了，大概就是作为我们Valine评论系统的服务器，
因为Valine首页就介绍了Valine是“一款快速、简洁且高效的无后端评论系统”，自行注册一个账号并登录。

> **注**：这里未使用国内版因为某些不明原因导致国内版后续云域名绑定一直失败

创建一个应用，应用名看个人喜好。

![创建应用](https://s1.ax1x.com/2020/07/23/UOlITf.png)

选择刚刚创建的**应用>设置>应用Key**，然后你就能看到你的App ID和App Key了，参考下图：

![获取App ID和App Key](https://s1.ax1x.com/2020/07/23/UOl1e0.png)

分别复制**App ID**和**App Key**粘贴到前面设置的主题根目录下的`_config.yml`里对应位置，注意“:”后面必须要有一个空格，如图：

![配置_config.yml](https://s1.ax1x.com/2020/07/23/ULyOzR.png)

为了数据安全，再填写一下安全域名，**应用>设置>安全设置**中的**Web 安全域名**，
如果是Hexo一般填写自己博客主页的地址和`http://localhost:4000/`就可以了，如下图：

![安全域名](https://s1.ax1x.com/2020/07/23/UO1Vn1.png)

到这里，你的valine评论系统就已经可以工作了

当然修改了相关代码需要重新部署博客，三步操作：

```shell
hexo clean
hexo g
hexo s #本地测试用http://localhost:4000/访问即可，也可以hexo d部署到云端
```

自己写条评论试试呢，评论的数据会保存到Leancloud你创建的应用里，
具体可以登录Leancloud，选择**应用>存储>Comment**，评论的所有相关信息都可以在这儿看到：

![数据库查看](https://s1.ax1x.com/2020/07/23/UO1R4U.png)

到此如果没有更多的需求已经可以结束不折腾了，进一步的下面介绍实现邮件通知的功能

#### 部署云引擎（邮件通知）

这一部分主要参考这篇博客[Valine Admin 配置手册](https://deserts.io/valine-admin-document/)。

##### 填写代码仓库

登录[Leancloud](https://console.leancloud.app/login.html#/signin)国际版，选择**云引擎>部署>部署项目**：

![部署项目](https://s1.ax1x.com/2020/07/23/ULqWrT.png)

选择**Git部署**：

![Git部署](https://s1.ax1x.com/2020/07/23/ULqgx0.png)

选择**手动部署**：在Leancloud云引擎设置界面，填写代码库并保存：`https://github.com/DesertsP/Valine-Admin.git`

* 注意：直接复制填上去就行，不是要自己建一个类似的代码仓库，另外注意这个链接是否有变动

![手动部署](https://s1.ax1x.com/2020/07/23/ULqRMV.png)

配置完毕并部署如下

![部署完毕](https://s1.ax1x.com/2020/07/23/ULqc2q.png)

##### 设置环境变量以及Web二级域名

在设置页面，设置**环境变量**以及 **Web 二级域名**。先后顺序没什么影响，不过可以先设置 Web 二级域名，需要实名认证，自己认证一下。

> **注**：这里如果是使用国内版本的话，二级域名配置一直失败。

Web 二级域名用于评论后台管理，如`https://gty.avosapps.us`

![二级域名](https://s1.ax1x.com/2020/07/23/UO3wa6.png)

环境变量必填参数务必正确设置：

![环境变量](https://s1.ax1x.com/2020/07/23/UOtK4P.png)

这里虽然部分是选填的，但是个人建议都填上吧，当然首先要填对，填错了那就没用了。

SMTP_SERVICE建议用QQ，目前我用的QQ邮箱没有任何问题，163邮箱在我设置的过程中似乎有不能发送邮件的问题，
应该是网易邮箱那边的限制所以无关你设置得对不对，Gmail似乎是因为被墙了会连接超时，其它我没试过。

|环境变量|示例|说明|
|---|---|---|
|SITE_NAME|Deserts|[必填]博客名称|
|SITE_URL|`https://mxy493.github.io/`|[必填]首页地址|
|SMTP_SERVICE|QQ|[新版支持]邮件服务提供商，支持 QQ、163、126、Gmail 以及 [更多](https://nodemailer.com/smtp/well-known/#supported-services)|
|SMTP_USER|xxxxxx@qq.com|[必填]SMTP登录用户|
|SMTP_PASS|ccxxxxxxxxch|[必填]SMTP登录密码（QQ邮箱需要获取独立密码）|
|SENDER_NAME|mxy|[必填]发件人|
|SENDER_EMAIL|xxxxxx@qq.com|[必填]发件邮箱|
|ADMIN_URL|`https://xxx.avosapps.us/`|[建议]Web主机二级域名，用于自动唤醒|
|BLOGGER_EMAIL|xxxxxx@qq.com|[可选]博主通知收件地址，默认使用SENDER_EMAIL|

> **注**：环境变量有任何更改都需要重启应用才能生效（云引擎>实例>设置>重启）

![环境变量](https://s1.ax1x.com/2020/07/23/UOtuNt.png)

##### 评论管理

访问设置的二级域名`https://二级域名.avosapps.us/sign-up`，
注册管理员登录信息，如：`https://gty.avosapps.us/sign-up`

![注册](https://s1.ax1x.com/2020/07/23/UOtnAI.png)

> **注**：使用原版Valine如果遇到注册页面不显示直接跳转至登录页的情况，请手动删除_User表中的全部数据。

管理界面如下

![管理](https://s1.ax1x.com/2020/07/23/UOteHA.png)

##### 设置定时任务

进入**云引擎>定时任务**，创建定时器，创建两个定时任务。

* 半小时自动唤醒

选择self-wake云函数，Cron表达式为`0 0/30 7-23 * * ?`，表示每天早7点到晚23点每隔30分钟访问云引擎，确定环境变量ADMIN_URL设置正确：

![自动唤醒](https://s1.ax1x.com/2020/07/24/Ujm1oD.png)

* 八点叫我发邮件

选择resend-mails云函数，Cron表达式为`0 0 8 * * ?`，表示每天早8点检查过去24小时内漏发的通知邮件并补发：

![定时检查](https://s1.ax1x.com/2020/07/24/Ujm8Fe.png)

至此 `Valine Admin` 已经可以正常工作，更多以下是可选的进阶**配置**

#### 邮件通知模板

这一部分可选，懒得折腾可以到此为止！

邮件通知模板在**云引擎环境变量**中设定，可自定义通知邮件标题及内容模板。

邮件通知包含两种，分别是“**被@通知**”和“**博主通知**”，这两种模板都可以完全自定义。默认使用经典的蓝色风格模板（样式来源未知）。

|环境变量|示例|说明|
|---|---|---|
|MAIL_TEMPLATE_ADMIN|`见下文`|[可选]**博主邮件通知**内容模板(别人在你博客评论后，邮箱通知显示的模板)|
|MAIL_SUBJECT_ADMIN|${SITE_NAME}上有新评论了|[可选]**博主邮件通知**主题模板|
|MAIL_TEMPLATE|`见下文`|[可选]**被@通知**邮件内容模板(别人回复评论后，邮箱显示的模板)|
|MAIL_SUBJECT|PARENTNICK，您在{SITE_NAME}上的评论收到了回复|[可选]**被@通知**邮件主题（标题）模板|

##### 默认**MAIL_TEMPLATE_ADMIN**

* 默认**被@通知邮件内容模板**：

```html
<div style="border-top:2px solid #12ADDB;box-shadow:0 1px 3px #AAAAAA;line-height:180%;padding:0 15px 12px;margin:50px auto;font-size:12px;"><h2 style="border-bottom:1px solid #DDD;font-size:14px;font-weight:normal;padding:13px 0 10px 8px;">您在<a style="text-decoration:none;color: #12ADDB;" href="${SITE_URL}" target="_blank">            ${SITE_NAME}</a>上的评论有了新的回复</h2> ${PARENT_NICK} 同学，您曾发表评论：<div style="padding:0 12px 0 12px;margin-top:18px"><div style="background-color: #f5f5f5;padding: 10px 15px;margin:18px 0;word-wrap:break-word;">            ${PARENT_COMMENT}</div><p><strong>${NICK}</strong>回复说：</p><div style="background-color: #f5f5f5;padding: 10px 15px;margin:18px 0;word-wrap:break-word;"> ${COMMENT}</div><p>您可以点击<a style="text-decoration:none; color:#12addb" href="${POST_URL}" target="_blank">查看回复的完整內容</a>，欢迎再次光临<a style="text-decoration:none; color:#12addb" href="${SITE_URL}" target="_blank">${SITE_NAME}</a>。<br></p></div></div>
```

##### 默认**MAIL_TEMPLATE**

* 默认博主通知邮件内容模板：

```html
<div style="border-top:2px solid #12ADDB;box-shadow:0 1px 3px #AAAAAA;line-height:180%;padding:0 15px 12px;margin:50px auto;font-size:12px;"><h2 style="border-bottom:1px solid #DDD;font-size:14px;font-weight:normal;padding:13px 0 10px 8px;">您在<a style="text-decoration:none;color: #12ADDB;" href="${SITE_URL}" target="_blank">${SITE_NAME}</a>上的文章有了新的评论</h2><p><strong>${NICK}</strong>回复说：</p><div style="background-color: #f5f5f5;padding: 10px 15px;margin:18px 0;word-wrap:break-word;"> ${COMMENT}</div><p>您可以点击<a style="text-decoration:none; color:#12addb" href="${POST_URL}" target="_blank">查看回复的完整內容</a><br></p></div></div>
```

博主通知邮件模板中的可用变量与@通知中的基本一致，`PARENT_NICK` 和 `PARENT_COMMENT` 变量不再可用。

效果如图：

![默认邮件](https://s1.ax1x.com/2020/07/24/UjgJhT.png)

##### 彩虹风**MAIL_TEMPLATE**

* 彩虹风格的通知邮件内容模板如下：

```html
<div style="border-radius: 10px 10px 10px 10px;font-size:13px;    color: #555555;width: 666px;font-family:'Century Gothic','Trebuchet MS','Hiragino Sans GB',微软雅黑,'Microsoft Yahei',Tahoma,Helvetica,Arial,'SimSun',sans-serif;margin:50px auto;border:1px solid #eee;max-width:100%;background: #ffffff repeating-linear-gradient(-45deg,#fff,#fff 1.125rem,transparent 1.125rem,transparent 2.25rem);box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);"><div style="width:100%;background:#49BDAD;color:#ffffff;border-radius: 10px 10px 0 0;background-image: -moz-linear-gradient(0deg, rgb(67, 198, 184), rgb(255, 209, 244));background-image: -webkit-linear-gradient(0deg, rgb(67, 198, 184), rgb(255, 209, 244));height: 66px;"><p style="font-size:15px;word-break:break-all;padding: 23px 32px;margin:0;background-color: hsla(0,0%,100%,.4);border-radius: 10px 10px 0 0;">您在<a style="text-decoration:none;color: #ffffff;" href="${SITE_URL}"> ${SITE_NAME}</a>上的留言有新回复啦！</p></div><div style="margin:40px auto;width:90%"><p>${PARENT_NICK} 同学，您曾在文章上发表评论：</p><div style="background: #fafafa repeating-linear-gradient(-45deg,#fff,#fff 1.125rem,transparent 1.125rem,transparent 2.25rem);box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);margin:20px 0px;padding:15px;border-radius:5px;font-size:14px;color:#555555;">${PARENT_COMMENT}</div><p>${NICK} 给您的回复如下：</p><div style="background: #fafafa repeating-linear-gradient(-45deg,#fff,#fff 1.125rem,transparent 1.125rem,transparent 2.25rem);box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);margin:20px 0px;padding:15px;border-radius:5px;font-size:14px;color:#555555;">${COMMENT}</div><p>您可以点击<a style="text-decoration:none; color:#12addb" href="${POST_URL}#comments">查看回复的完整內容</a>，欢迎再次光临<a style="text-decoration:none; color:#12addb"                href="${SITE_URL}"> ${SITE_NAME}</a>。</p><style type="text/css">a:link{text-decoration:none}a:visited{text-decoration:none}a:hover{text-decoration:none}a:active{text-decoration:none}</style></div></div>
```

为方便修改我把上面的模板格式化了

```html
<div style="border-radius: 10px 10px 10px 10px;font-size:13px;    color: #555555;width: 666px;font-family:'Century Gothic','Trebuchet MS','Hiragino Sans GB',微软雅黑,'Microsoft Yahei',Tahoma,Helvetica,Arial,'SimSun',sans-serif;margin:50px auto;border:1px solid #eee;max-width:100%;background: #ffffff repeating-linear-gradient(-45deg,#fff,#fff 1.125rem,transparent 1.125rem,transparent 2.25rem);box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);">
    <div style="width:100%;background:#49BDAD;color:#ffffff;border-radius: 10px 10px 0 0;background-image: -moz-linear-gradient(0deg, rgb(67, 198, 184), rgb(255, 209, 244));background-image: -webkit-linear-gradient(0deg, rgb(67, 198, 184), rgb(255, 209, 244));height: 66px;">
        <p style="font-size:15px;word-break:break-all;padding: 23px 32px;margin:0;background-color: hsla(0,0%,100%,.4);border-radius: 10px 10px 0 0;">您在<a style="text-decoration:none;color: #ffffff;" href="${SITE_URL}"> ${SITE_NAME}</a>上的留言有新回复啦！</p>
    </div>
    <div style="margin:40px auto;width:90%">
        <p>${PARENT_NICK} 同学，您曾在文章上发表评论：</p>
        <div style="background: #fafafa repeating-linear-gradient(-45deg,#fff,#fff 1.125rem,transparent 1.125rem,transparent 2.25rem);box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);margin:20px 0px;padding:15px;border-radius:5px;font-size:14px;color:#555555;">${PARENT_COMMENT}</div>
        <p>${NICK} 给您的回复如下：</p>
        <div style="background: #fafafa repeating-linear-gradient(-45deg,#fff,#fff 1.125rem,transparent 1.125rem,transparent 2.25rem);box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);margin:20px 0px;padding:15px;border-radius:5px;font-size:14px;color:#555555;">${COMMENT}</div>
        <p>您可以点击<a style="text-decoration:none; color:#12addb" href="${POST_URL}#comments">查看回复的完整內容</a>，欢迎再次光临<a style="text-decoration:none; color:#12addb" href="${SITE_URL}"> ${SITE_NAME}</a>。</p>
        <style type="text/css">
            a:link {
                text-decoration: none
            }
            a:visited {
                text-decoration: none
            }
            a:hover {
                text-decoration: none
            }
            a:active {
                text-decoration: none
            }
        </style>
    </div>
</div>
```

* 彩虹风格的通知邮件内容模板 效果如图：

##### 彩虹风**MAIL_TEMPLATE_ADMIN**

```html
<div style="border-top:2px solid #12ADDB;box-shadow:0 1px 3px #AAAAAA;line-height:180%;padding:0 15px 12px;margin:50px auto;font-size:12px;"><h2 style="border-bottom:1px solid #DDD;font-size:14px;font-weight:normal;padding:13px 0 10px 8px;">您在<a style="text-decoration:none;color: #12ADDB;" href="${SITE_URL}" target="_blank">${SITE_NAME}</a>上的文章有了新的评论</h2><p><strong>${NICK}</strong>回复说：</p><div style="background-color: #f5f5f5;padding: 10px 15px;margin:18px 0;word-wrap:break-word;"> ${COMMENT}</div><p>您可以点击<a style="text-decoration:none; color:#12addb" href="${POST_URL}" target="_blank">查看回复的完整內容</a><br></p></div></div>
```

为方便修改我把上面的模板格式化了

```html
<div style="border-top:2px solid #12ADDB;box-shadow:0 1px 3px #AAAAAA;line-height:180%;padding:0 15px 12px;margin:50px auto;font-size:12px;">
    <h2 style="border-bottom:1px solid #DDD;font-size:14px;font-weight:normal;padding:13px 0 10px 8px;">您在
        <a style="text-decoration:none;color: #12ADDB;" href="${SITE_URL}" target="_blank">${SITE_NAME}</a> 上的文章有了新的评论
    </h2>
    <p>
        <strong>${NICK}</strong> 回复说：
    </p>
    <div style="background-color: #f5f5f5;padding: 10px 15px;margin:18px 0;word-wrap:break-word;"> ${COMMENT}</div>
    <p>您可以点击
        <a style="text-decoration:none; color:#12addb" href="${POST_URL}" target="_blank">查看回复的完整內容</a>
        <br>
    </p>
</div>
</div>
```

效果如图：

![彩虹邮件](https://s1.ax1x.com/2020/07/24/UjgrAx.png)

* 通知模板中的可用变量如下：

> **注**：(这是邮件模板变量，虽然一眼望去感觉，变量名与云引擎环境变量名很接近但还是有区别的，请勿与云引擎环境变量混淆)

|环境变量|说明|
|---|---|
|SITE_NAME|博客名称|
|SITE_URL|博客首页地址|
|POST_URL|文章地址（完整路径）|
|PARENT_NICK|收件人昵称（被@者，父级评论人）|
|PARENT_COMMENT|父级评论内容|
|NICK|新评论者昵称|
|COMMENT|新评论内容|

有需求代码部分可以自定义，没有需求的话直接复制**博主邮件通知**代码到`MAIL_TEMPLATE_ADMIN`，
复制**被@通知代码**到`MAIL_TEMPLATE`，保存即可。

> **注**：修改了环境变量需要重启实例。

至此 `Valine Admin`的邮箱提醒 已经可以正常工作

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
* [Valine Admin 配置手册](https://deserts.io/valine-admin-document/)
* [Hexo+yilia+Valine添加评论系统、LeanCloud、创建应用、部署云引擎](https://blog.csdn.net/Lott0419/article/details/106311866)
* [hexo+yilia+Gitalk添加评论系统](https://www.pianshen.com/article/6042218776/)
* [hexo+yilia+Gitalk添加评论系统-样式调整](https://my.oschina.net/u/4383702/blog/3678467)
* [hexo+yilia+畅言添加评论系统](https://blog.csdn.net/qq_40910541/article/details/80659127)
* [hexo+yilia+来必力添加评论系统-注册](https://blog.csdn.net/qwerty200696/article/details/78836421)
* [hexo+yilia+来必力添加评论系统](https://blog.csdn.net/maosidiaoxian/article/details/90902494)
* [hexo+yilia+Gitment添加评论系统](https://www.cnblogs.com/liuurick/p/10713709.html)
