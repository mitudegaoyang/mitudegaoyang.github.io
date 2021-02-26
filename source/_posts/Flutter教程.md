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

![首屏图](https://s3.ax1x.com/2021/02/26/yxRURf.jpg)

<!-- more -->

## Flutter介绍

## Flutter环境搭建

### Windows系统安装Flutter

### Mac系统安装Flutter

#### 准备工作

1. 升级MacOS至最新系统
2. 安装最新版本的Xcode
3. 运行一次Xcode
4. 电脑上安装[brew](https://brew.sh)

#### 安装Flutter

##### 下载Flutter

[下载地址](https://flutter.cn/docs/development/tools/sdk/releases?tab=macos)

![下载地址](https://s3.ax1x.com/2021/02/26/yxRVaR.png)

##### 将Flutter解压至安装目录下

![安装目录](https://s3.ax1x.com/2021/02/26/yxWmwj.png)

##### 配置Flutter环境变量

* 打开环境变量配置文件

```shell
vim ~/.bash_profile
```

* flutter环境变量配置

```shell
# 注意：下面第一行的环境变量需要改为自己flutter的安装目录
export PATH=/Users/gaotianyang/flutter_mac/flutter/bin:$PATH
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
```

* 让环境变量立即生效

```shell
source ~/.bash_profile
```

* 验证flutter是否配置成功

```shell
flutter -h
```

![安装成功](https://s3.ax1x.com/2021/02/26/yxh8Z4.png)

> 注意：如果`flutter -h`提示flutter不是内置命令之类的错误，可能是sdk没有配置成功或者sdk下载时出错，需重新下载并配置。

#### 运行Flutter doctor检测环境

```shell
# 检测flutter环境
$ flutter doctor
```

根据Flutter doctor报错提示进行修复

直至只提示缺少安卓环境为止

![检测成功](https://s3.ax1x.com/2021/02/26/yxIswF.png)

#### 生成Flutter项目

通过以下步骤来创建你的第一个 Flutter 应用并进行测试：

* 通过运行以下命令来创建一个新的 Flutter 应用：

```shell
# 创建项目 flutter create [项目名称]
$ flutter create my_app
```

* 上述命令创建了一个 my_app 的目录，包含了 Flutter 初始的应用模版，切换路径到这个目录内：

```shell
# 进入项目目录
$ cd my_app
```

* 确保模拟器已经处于运行状态，输入以下命令来启动应用：

```shell
# 运行flutter项目
$ flutter run
```

#### 修改Flutter SDK目录权限及项目权限

如果项目运行提示权限不足可使用如下指令进行修改

```shell
# sudo chmod -R 777 [对应项目文件名]
$ sudo chmod -R 777 flutterDemo
# 修改SDK文件夹权限
$ cd /Users/gaotianyang/flutter_mac
$ sudo chmod -R 777 flutter
```

#### Xcode打开Flutter项目模拟器运行项目

* Xcode运行项目双击项目目录下的文件

![Xcode运行项目](https://s3.ax1x.com/2021/02/26/yzeUQs.png)

* 运行模拟器

![运行模拟器](https://s3.ax1x.com/2021/02/26/yzmUhD.png)

##### 可能会有报错导致模拟器启动失败

* `Runner.app/Info.plist does not exist. The Flutter "Thin Binary" build phase must run after "Copy Bundle Resources".`

> 解决方法：打开Xcode菜单,选择 "Product" > "Clean Build Folder". 清空项目预览文件，再重新启动模拟器。

* 打开项目后项目白屏

> 解决方法：再重新启动模拟器，重新打开项目。

#### Vscode配置及开发Flutter项目

##### 安装Flutter插件Dart插件

安装Flutter、Flutter插件提示插件

![Flutter插件](https://s3.ax1x.com/2021/02/26/yznNbq.png)

安装Dart插件

![Dart插件](https://s3.ax1x.com/2021/02/26/yzndaV.png)

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

* R 启动热更新，重新加载项目
* O 切换为安卓/iOS模式
* P 打开/关闭网格，可以方便掌握布局情况
* Q 退出调试预览模式

## Flutter目录结构

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

### Flutter入口

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

### 首个Demo Center组件

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

执行R进行重新编译

![首个Demo](https://s3.ax1x.com/2021/02/26/yzBhnI.png)

### 自定义Widget

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

执行r进行重新加载

### Center组件

### Text组件

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

### MaterialApp组件

### Scaffold组件

## 参考资料

* [B站-Dart Flutter教程_Dart Flutter入门实战视频教程-2020年新出-第14讲以后是Flutter教程](https://www.bilibili.com/video/BV1S4411E7LY?from=search&seid=18237173814777031437)
