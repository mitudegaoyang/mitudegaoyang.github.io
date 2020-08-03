---
title: HTML常见标签
tags:
  - 技术积累
  - 前端
  - html
categories:
  - 技术积累
  - 前端
  - html
toc: true
abbrlink: '98767319'
date: 2020-07-16 16:13:05
---

![首屏图](https://s1.ax1x.com/2020/07/17/Us38TH.jpg)

<!-- more -->

## 元素的构成

![元素的构成](https://s1.ax1x.com/2020/07/16/UDYNbF.png)

## 链接

> a代表链接，链接到一个地址

```html
标签：
    <a></a>
属性：
    href：链接地址
    target：打开方式
        _blank：新标签页打开
        _self：当前页面打开（默认）
    title：链接提示
```

```html
示例：
// 打开一个新的页面显示链接内容
<a href ="http://baidu.com" target="_blank" title="baidu">百度.com</a>
// 不会跳转
<a href = "#">百度.com</a>  
// 跳转到id为about的页面上
<a href = "#about">百度.com</a>
// 跳转到相对于根路径下的id为getCourse的页面  
<a href ="/getCourse">百度.com</>
```

## 文本标记

### 标题元素

> h1~h6代表标题，逐层弱化

```html
<h1></h1>
<h2></h2>
<h3></h3>
<h4></h4>
<h5></h5>
<h6></h6>
```

### 文本样式

> HTML中被废弃的标签`<b><u><i><s>`，替代的标签语义化更强

&nbsp;

> `<big>`标签呈现大号字体效果
使用 `<big>` 标签可以很容易地放大字体。这简直不能再简单了：浏览器显示包含在 `<big>` 标签和其相应的 `<big>` 标签之间的文字时，其字体比周围的文字要大一号。但是，如果文字已经是最大号字体，这个 `<big>` 标签将不起任何作用。
更妙的是，可以嵌套 `<big>` 标签来放大文本。每一个 `<big>` 标签都可以使字体大一号，直到上限 7 号文本，正如字体模型所定义的那样。
但是使用 `<big>` 标签的时候还是要小心，因为浏览器总是很宽大地试图去理解各种标签，对于那些不支持 `<big>` 标签的浏览器来说，它经常将其认为是粗体字标签。

```html
加重语气：
    <strong></strong>
粗体(已弃用-效果同加重语气)：
    <b></b>
插入字：
    <ins></ins>
下划线(已弃用-效果同插入字)：
    <u></u>
强调文字：
    <em></em>
斜体(已弃用-效果同强调文字)：
    <i></i>
删除字：
    <del></del>
删除线(已弃用-效果同删除字)：
    <s></s>
大号字：
    <big></big>
小号字：
    <small></small>
上标：
    <sup></sup>
下标：
    <sub></sub>
```

### 引用

> HTML中通过`<q>`定义短的引用，且浏览器通常会为 `<q>` 元素包围引号。

```html
代码：
    <p>WWF 的目标是：<q>构建人与自然和谐共存的世界。</q></p>
效果：
    WWF 的目标是："构建人与自然和谐共存的世界。"
```

### 段落元素

> p代表段落，表示大段文字，浏览器会自动地在段落的前后添加空行。
使用空的段落标记 `<p></p>` 去插入一个空行是个坏习惯，用 `<br />` 标签代替它！

```html
<p></p>
```

### 换行元素

```html
<br/>
```

### 分割线元素

```html
标签：
    <hr/>
属性：
    size：尺寸
    width：宽度
    color：颜色
    align：水平对齐方式
        left/center/right
```

### 注释

```html
<!--  这是一段注释，在浏览器中不会显示 -->
```

### 分区元素

> div,语义为“一大块”,其一大作用就是文档布局，可用于给页面划分区块，让结构更清晰，它取代了使用表格定义布局的老式方法。
div是块级元素，它是可用于组合其他 HTML 元素的容器，且没有特定的含义，浏览器会在其前后显示折行。
如果与 CSS 一同使用，`<div>` 元素可用于对大的内容块设置样式属性。

```html
块分区元素：
    <div></div>
行内分区元素：
    <span></span>
```

### 内联元素

> span：是内联元素，可用作文本的容器，也没有特定的含义，当与 CSS 一同使用时，`<span>` 元素可用于为部分文本设置样式属性。
em：是内联元素，可用作文本的容器，表示其范围内的文本需要被强调显示。
strong :是内联元素，可用作文本的容器，表示其范围内的文本很重要，强调性更强

```html
    <span></span>
    <strong></strong>
    <em></em>
```

```html
示例：
<p>优惠<strong>100</strong>元</p>
<p>小谷<em>2</em>岁了</p>
```

### 块级元素与行内元素

```html
块级元素：
    <p></p>
    <div></div>
    <h1></h1>
    ~
    <h6></h6>
行内元素：
    <img/>
    <a></a>
    <i></i>
    <b></b>
    <s></s>
    <u></u>
    <sub></sub>
    <sup></sup>
    <span></span>
```

## 图像

> img代表展示一张图片，src是其必备属性，代表了图片的名称及地址，alt属性是指当图片显示不出来时，它就会显示，起到一个占位说明的作用。

```html
标签：
    <img/>
属性：
    src：图片地址
    alt：图片说明
    width：图像宽度
    height：图像高度
```

## iframe

> 在当前页面上嵌入一个页面，注意跨域操作问题。

```html
标签：
    <iframe></iframe>
属性：
    src：嵌入地址
    name：名称
```

```html
示例：
<iframe src="http://baidu.com" name="myPager"></iframe>
<p><a href="http://www.w3cschool.cc" target="myPager">W3Cschool.cc</a></p>
```

## 表格

> table用于展示表格，每个表格均有若干行（由 `<tr>` 标签定义），每行被分割为若干单元格（由 `<td>` 标签定义）。字母 td 指表格数据（table data），即数据单元格的内容。数据单元格可以包含文本、图片、列表、段落、表单、水平线、表格等等。
不要用table来做布局，使用 `<table>` 元素进行文档布局不是表格的正确用法，`<table>` 元素的作用是显示表格化的数据，且thread、tbody、tfoot可省略，浏览器会自动添加borader-collapse，用于合并边框。

```html
标签：
    <table></table>
属性：
    width：宽度
    height：高度
    border：边框宽度
    bgcolor：背景颜色
    cellpadding：内边距
    cellspacing：外边距
    align：水平对齐方式
        left/center/right
```

### 子元素

```html
标签：
    <tr></tr>（创建表行）
属性：
    bgcolor：背景颜色
    align：水平对齐方式
        left/center/right
    valign：垂直对齐方式
        top/middle/bottom

标签：
    <td></td>（创建单元格）
属性：
    width：宽度
    height：高度
    align：水平对齐方式
    valign：垂直对齐方式

<caption></caption>（表格标题）
<th></th>（列标题）
<thead></thead>（表头）
<tbody></tbody>（表主体）
<tfoot></tfoot> （表尾）
```

## 列表

### 有序列表

> ol: order list 有序列表 用于表示带步骤或者编号的并列内容，ol的直接子元素只能是li，而且可以嵌套。

```html
<ol>
    <li></li>
</ol>
属性：
    type：标识类型，默认为数字排列
        1（默认）/a/A/i/I
    start：定义起始值，默认从1开始
```

### 无序列表

> ul: unsort list 无序列表，其直接子元素是li，用于表示并列的内容，而且可以嵌套。

```html
<ul>
    <li></li>
</ul>
属性:
    type：标识类型
        disc（默认）/circle/square/none
```

### 自定义列表

> 自定义列表，用于展示一系列"标题：内容..."的场景。
dl:自定义列表，dt:自定义标题，dd:自定义描述。

```html
<dl>
    <dt>列表中的标题</dt>
    <dd>列表中的数据</dd>
</dl>
```

## 表单

```html
标签：
    <form></form>
属性：
    name：表单名称
    action：提交地址
    method：提交方式
        get/post
```

### input

```html
标签：
    <input/>
属性：
    name：控件名称
    type：控件类型
    value：值
    disabled：禁用
```

### 常用表单控件

```html
文本框：
    <input type="text"/>
密码框：
    <input type="password"/>
    属性：
        readonly：控件只读
        maxlength：限制字符数
单选按钮：
    <input type="radio"/>
复选框：
    <input type="checkbox"/>
    属性：
        checked：设置默认被选中
提交按钮：
    <input type="submit"/>
重置按钮：
    <input type="reset"/>
普通按钮：
    <input type="button"/>
图片按钮：
    <input type="image" src=""/>
文件选择框：
    <input type="file"/>
隐藏域：
    <input type="hidden"/>
```

### button

> 按钮

```html
<button>内容</button>
```

### select 和 option

```html
<section name="">
    <option value="" selected></option>
</section>
```

## 结构标记

```html
<header></header>
<nav></nav>
<aside></aside>
<article></article>
<section></section>
<footer></footer>
```

## 参考资料

* [HTML常见标签](https://www.jianshu.com/p/e0fc0c31f174)
* [HTML 常用标签及属性](https://juejin.im/post/5bfa2cfbe51d4509834cc06d)
* [HTML常用标签属性及事件属性](https://www.jianshu.com/p/31d2eda9f9cf)
