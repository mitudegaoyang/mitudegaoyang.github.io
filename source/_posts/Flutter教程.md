---
title: Flutter教程
abbrlink: 1bf41062
date: 2021-02-26 10:33:35
tags:
  - 技术积累
  - flutter
categories:
  - 技术积累
  - flutter
toc: true
---

![首屏图](https://z3.ax1x.com/2021/03/01/6iJtn1.png)

<!-- more -->

## Flutter 介绍

## Flutter 环境搭建

### Windows 系统安装 Flutter

### Mac 系统安装 Flutter

#### 准备工作

1. 升级 MacOS 至最新系统
2. 安装最新版本的 Xcode
3. 运行一次 Xcode
4. 电脑上安装[brew](https://brew.sh)

#### 安装 Flutter

##### 下载 Flutter

[下载地址](https://flutter.cn/docs/development/tools/sdk/releases?tab=macos)

![下载地址](https://z3.ax1x.com/2021/02/26/yxRVaR.png)

##### 将 Flutter 解压至安装目录下

![安装目录](https://z3.ax1x.com/2021/02/26/yxWmwj.png)

##### 配置 Flutter 环境变量

- 打开环境变量配置文件

```shell
vim ~/.bash_profile
```

- flutter 环境变量配置

```shell
# 注意：下面第一行的环境变量需要改为自己flutter的安装目录
export PATH=/Users/gaotianyang/flutter_mac/flutter/bin:$PATH
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
```

- 让环境变量立即生效

```shell
source ~/.bash_profile
```

- 验证 flutter 是否配置成功

```shell
flutter -h
```

![安装成功](https://z3.ax1x.com/2021/02/26/yxh8Z4.png)

> 注意：如果`flutter -h`提示 flutter 不是内置命令之类的错误，可能是 sdk 没有配置成功或者 sdk 下载时出错，需重新下载并配置。

#### 运行 Flutter doctor 检测环境

```shell
# 检测flutter环境
$ flutter doctor
```

根据 Flutter doctor 报错提示进行修复

直至只提示缺少安卓环境为止

![检测成功](https://z3.ax1x.com/2021/02/26/yxIswF.png)

#### 生成 Flutter 项目

通过以下步骤来创建你的第一个 Flutter 应用并进行测试：

- 通过运行以下命令来创建一个新的 Flutter 应用：

```shell
# 创建项目 flutter create [项目名称]
$ flutter create my_app
```

- 上述命令创建了一个 my_app 的目录，包含了 Flutter 初始的应用模版，切换路径到这个目录内：

```shell
# 进入项目目录
$ cd my_app
```

- 确保模拟器已经处于运行状态，输入以下命令来启动应用：

```shell
# 运行flutter项目
$ flutter run
```

#### 修改 Flutter SDK 目录权限及项目权限

如果项目运行提示权限不足可使用如下指令进行修改

```shell
# sudo chmod -R 777 [对应项目文件名]
$ sudo chmod -R 777 flutterDemo
# 修改SDK文件夹权限
$ cd /Users/gaotianyang/flutter_mac
$ sudo chmod -R 777 flutter
```

#### Xcode 打开 Flutter 项目模拟器运行项目

- Xcode 运行项目双击项目目录下的文件

![Xcode运行项目](https://z3.ax1x.com/2021/02/26/yzeUQs.png)

- 运行模拟器

![运行模拟器](https://z3.ax1x.com/2021/02/26/yzmUhD.png)

##### 可能会有报错导致模拟器启动失败

- `Runner.app/Info.plist does not exist. The Flutter "Thin Binary" build phase must run after "Copy Bundle Resources".`

> 解决方法：打开 Xcode 菜单,选择 "Product" > "Clean Build Folder". 清空项目预览文件，再重新启动模拟器。

- 打开项目后项目白屏

> 解决方法：再重新启动模拟器，重新打开项目。

#### Vscode 配置及开发 Flutter 项目

##### 安装 Flutter 插件 Dart 插件

安装 Flutter、Flutter 插件提示插件

![Flutter插件](https://z3.ax1x.com/2021/02/26/yznNbq.png)

安装 Dart 插件

![Dart插件](https://z3.ax1x.com/2021/02/26/yzndaV.png)

##### 启动模拟器

```shell
# 启动模拟器
$ open -a Simulator
```

##### 运行应用

```shell
# 运行应用
$ flutter run
```

##### 模式切换

- R 启动热更新，重新加载项目
- O 切换为安卓/iOS 模式
- P 打开/关闭网格，可以方便掌握布局情况
- Q 退出调试预览模式

## Flutter 目录结构

```text
项目目录
├── README.md
├── android         // 安卓平台相关代码资源
├── build           // 运行项目生成的编译目录
├── ios             // iOS平台相关代码资源
├── lib             // flutter相关代码，编写项目主要在这个目录
├── test            // 测试文件目录
├── flutterDemo.iml
├── pubspec.lock
└── pubspec.yaml    // 项目配置文件：项目名称、描述、第三方库依赖
```

### Flutter 入口

每一个 flutter 项目的 lib 目录里面都有一个 main.dart 这个文件就是 flutter 的入口文件

`main.dart` 里面的

```dart
void main(){
    runApp(MyApp());
}
// 也可以简写
void main()=>runApp(MyApp());
```

其中的 main 方法是 dart 的入口方法。runApp 方法是 flutter 的入口方法。

MyApp 是自定义的一个组件

### 首个 Demo Center 组件

`main.dart` 里面的

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(Center(
    child: Text(
      "Welcome Flutter",
      textDirection: TextDirection.ltr,
    ),
  ));
}
```

执行 R 进行重新编译

![首个Demo](https://z3.ax1x.com/2021/02/26/yzBhnI.png)

### 自定义 Widget

`main.dart` 里面的

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

// 自定义组件
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Center(
      child: Text(
        "Welcome Flutter",
        textDirection: TextDirection.ltr,
      ),
    );
  }
}
```

执行 r 进行重新加载

### Text 组件简单介绍

给文字调整字号和颜色

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Center(
      child: Text("Welcome Flutter",
          textDirection: TextDirection.ltr,
          style: TextStyle(fontSize: 40.0, color: Colors.yellow
              // color: Color.fromRGBO(255, 0, 255, 0.7)
              )),
    );
  }
}
```

#### textDirection

文本显示方式`TextDirection.ltr`从左到右

#### style

文本样式

### MaterialApp 组件

MaterialApp 是一个方便的 Widget，它封装了应用程序实现 Material Design 所需要的 一些 Widget。一般作为顶层(根) widget 使用。

常用的属性：

- home（主页）
- title（标题）
- color（颜色）
- theme（主题）
- routes（路由）
- ...

### Scaffold 组件

Scaffold 是 Material Design 布局结构的基本实现。此类提供了用于显示 drawer、 snackbar 和底部 sheet 的 API。

Scaffold 有下面几个主要属性：

- appBar - 显示在界面顶部的一个 AppBar。
- body - 当前界面所显示的主要内容 Widget。
- drawer - 抽屉菜单控件。
- ...

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

//自定义组件
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Flutter Demo')),
        body: HomeContent(),
      ),
      theme: ThemeData(primarySwatch: Colors.yellow),
    );
  }
}

//
class HomeContent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Center(
        child: Text(
      '你好Flutter 111',
      textDirection: TextDirection.ltr,
      style: TextStyle(
        fontSize: 40.0,
        color: Colors.yellow,
        // color: Color.fromRGBO(244, 233, 121, 0.5),
      ),
    ));
  }
}
```

![使用MaterialApp及Scaffold](https://z3.ax1x.com/2021/03/01/6Pvkxx.png)

## Flutter 组件

### Container 组件

|    名称    |                                                                                                                                   功能                                                                                                                                    |
| :--------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| alignment  | topCenter：顶部居中对齐</br>topLeft：顶部左对齐</br>topRight：顶部右对齐</br>center：水平垂直居中对齐</br>centerLeft：垂直居中水平居左对齐</br>centerRight：垂直居中水平居右对齐</br>bottomCenter 底部居中对齐</br>bottomLeft：底部居左对齐</br>bottomRight：底部居右对齐 |
| decoration |                                                       decoration: BoxDecoration( color: Colors.blue, border: Border.all( color: Colors.red, width: 2.0, ),borderRadius: BorderRadius.all( Radius.circular(8.0) ) )                                                        |
|   margin   |                                                                                               margin 属性是表示 Container 与外部其他 组件的距离。</br>EdgeInsets.all(20.0),                                                                                               |
|  padding   |                                                                               padding 就 是 Container 的 内 边 距 ， 指 Container 边缘与 Child 之间的距离</br>padding: EdgeInsets.all(10.0)                                                                               |
| transform  |                                                                                                 让 Container 容易进行一些旋转之类的</br>transform: Matrix4.rotationZ(0.2)                                                                                                 |
|   height   |                                                                                                                                 容器高度                                                                                                                                  |
|   width    |                                                                                                                                 容器宽度                                                                                                                                  |
|   child    |                                                                                                                                容器子元素                                                                                                                                 |

[更多参数](https://api.flutter.dev/flutter/widgets/Container-class.html)

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('home'),
        ),
        body: HomeContent(),
      ),
      theme: ThemeData(primarySwatch: Colors.lightBlue),
    );
  }
}

class HomeContent extends StatelessWidget {
  build(BuildContext context) {
    return Center(
      child: Container(
        child: Text(
          '我是超长长长长长长长长长长长文本',
          textAlign: TextAlign.center,
          overflow: TextOverflow.ellipsis,
          maxLines: 1,
          textScaleFactor: 2,
          style: TextStyle(
            fontSize: 16.0,
            color: Colors.red,
            // color: Color.fromARGB(a, r, g, b),
            fontWeight: FontWeight.w800,
            fontStyle: FontStyle.italic,
            decoration: TextDecoration.lineThrough,
            decorationColor: Colors.green,
            decorationStyle: TextDecorationStyle.dashed,
            letterSpacing: 5.0,
          ),
        ),
        height: 300.0,
        width: 300.0,
        decoration: BoxDecoration(
          color: Colors.yellow,
          border: Border.all(
            color: Colors.blue,
            width: 2.0,
          ),
          borderRadius: BorderRadius.all(
            // Radius.circular(150), // 圆形
            Radius.circular(50),
          ),
        ),
        // padding: EdgeInsets.all(20),
        padding: EdgeInsets.fromLTRB(10, 10, 5, 5),
        margin: EdgeInsets.fromLTRB(10, 10, 5, 5),
        // transform: Matrix4.translationValues(100, 10, 10),  // 位移
        // transform: Matrix4.rotationZ(0.3),  // 旋转
        // transform: Matrix4.diagonal3Values(1.3, 1, 1), // 缩放
        alignment: Alignment.center,
      ),
    );
  }
}
```

![使用Container组件](https://z3.ax1x.com/2021/03/01/6iG5O1.png)

### Text 组件

|      名称       |                                   功能                                   |
| :-------------: | :----------------------------------------------------------------------: |
|    textAlign    | 文本对齐方式（center 居中，left 左 对齐，right 右对齐，justfy 两端对齐） |
|  textDirection  |                 文本方向（ltr 从左至右，rtl 从右至 左）                  |
|    overflow     |   文字超出屏幕之后的处理方式（clip 裁剪，fade 渐隐，ellipsis 省略号）    |
| textScaleFactor |                               字体显示倍率                               |
|    maxLines     |                             文字显示最大行数                             |
|      style      |                              字体的样式设置                              |

下面是 TextStyle 的参数

|      名称       |                                        功能                                         |
| :-------------: | :---------------------------------------------------------------------------------: |
|   decoration    |  文字装饰线（none 没有线，lineThrough 删除线，overline 上划线，underline 下划线）   |
| decorationColor |                                   文字装饰线颜色                                    |
| decorationStyle | 文字装饰线风格（[dashed,dotted]虚线， double 两根线，solid 一根实线，wavy 波浪 线） |
|   wordSpacing   |                     单词间隙（如果是负值，会让单词变得更紧凑）                      |
|  letterSpacing  |                     字母间隙（如果是负值，会让字母变得更紧凑）                      |
|    fontStyle    |                       文字样式（italic 斜体，normal 正常体）                        |
|    fontSize     |                                      文字大小                                       |
|      color      |                                      文字颜色                                       |
|   fontWeight    |                        字体粗细（bold 粗体，normal 正常体）                         |

[更多参数](https://api.flutter.dev/flutter/painting/TextStyle-class.html)

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('home'),
        ),
        body: HomeContent(),
      ),
      theme: ThemeData(primarySwatch: Colors.lightBlue),
    );
  }
}

class HomeContent extends StatelessWidget {
  build(BuildContext context) {
    return Center(
      child: Container(
        child: Text(
          '我是文本',
          textAlign: TextAlign.center,
          style: TextStyle(
            fontSize: 16.0,
          ),
        ),
        height: 300.0,
        width: 300.0,
        alignment: Alignment.center,
        decoration: BoxDecoration(
          color: Colors.yellow,
          border: Border.all(
            color: Colors.blue,
            width: 2.0,
          ),
        ),
      ),
    );
  }
}
```

![使用Text组件](https://z3.ax1x.com/2021/03/01/6PzWx1.png)

### 图片组件

[更多参数](https://api.flutter.dev/flutter/widgets/Image-class.html)

#### 图片引入

##### 引入线上图片

##### 引入本地图片

#### 原型/圆角图片实现

##### 使用 Container 实现

##### 使用 ClipOval 组件实现

### ListView 组件

[更多参数](https://api.flutter.dev/flutter/widgets/Image-class.html)

#### ListTile 组件

### ListView2 组件

[更多参数](https://api.flutter.dev/flutter/widgets/Image-class.html)

## 参考资料

- [B 站-Dart Flutter 教程\_Dart Flutter 入门实战视频教程-2020 年新出-第 14 讲以后是 Flutter 教程](https://www.bilibili.com/video/BV1S4411E7LY?from=search&seid=18237173814777031437)
