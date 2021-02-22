---
title: Dart Flutter教程
abbrlink: 9c01b81e
date: 2021-02-22 14:37:13
tags:
  - 技术积累
  - flutter
categories:
  - 技术积累
  - flutter
toc: true
---

![首屏图](https://s3.ax1x.com/2021/02/22/y7Le4x.jpg)

<!-- more -->

## Dart介绍

Dart是由谷歌开发的计算机编程语言，它可以用于web、服务器、移动应用和物联网等领域的开发。

Dart 诞生于2011年，号称起到javaScript/但是过去的几年中一直不温不火。知道Flutter的出现人们重新重视。

要学习Flutter的话我们必须首先得会[Dart](https://dart.dev)。

### Dart环境搭建

#### Windows系统安装Dart

* 命令行安装

```shell
# 安装dart-sdk
$  choco install dart-sdk
# 更新dart-sdk
$  choco upgrade dart-sdk
```

* 软件安装SDK(推荐)

[下载dart的SDK软件](https://gekorm.com/dart-windows/)

#### Mac系统安装Dart

```shell
# 跟新追踪brew的包管理信息，扩展可安装软件的选择
$ brew tap dart-lang/dart
# 使用brew安装dart
$ brew install dart
```

[dart官网下载地址](https://dart.dev/get-dart)

> 注： 如果没有安装brew工具，需先[安装Homebrew](https://brew.sh/)

### Dart开发工具

Dark常见的开发工具有：IntelliJ IDEA、Webstorm、Atom、Vscode等

* Dart的提示插件

![Dart的VScode插件](https://s3.ax1x.com/2021/02/22/y7xdBD.png)

* Dart的运行插件code runner

![code-runner](https://s3.ax1x.com/2021/02/22/y7zOzt.png)

### Dart的初次编写

```dart
main() {
  print("hello dart");
}
```

![运行首个Dart文件](https://s3.ax1x.com/2021/02/22/yHSo60.png)

### Dart方法介绍

#### Dart入口方法

所有需要被执行的方法需放置在main方法中

共有两种main的写法，分别是基本用法和无返回值的用法

```dart
<!-- 基本用法 -->
main() {
  print("hello dart");
}

<!-- 无返回值的main方法 -->
void main() {
  print("hello dart");
}
```

#### Dart打印

上面的例子中使用到了打印方法

```dart
<!-- 打印"hello dart" -->
main() {
  print("hello dart");
}
```

#### Dart注释

```dart
// main() {
//   print("hello dart1");
// }

/**
main() {
  print("hello dart2");
}
 * */

/// main() {
///   print("hello dart3");
/// }

main() {
  print("hello dart4");
}
```

#### Dart变量

dart是一个强大的脚本类语言，可以不预先定义变量类型，自动会类型推断

dart中定义变量可以通过var关键字或类型关键字来申明变量

* 字符串类型：String
* 数字类型：int

```dart
    var str = 'this is var';
    print(str);
    var mynum = 123;
    print(mynum);
    String string = 'this is String';
    print(string);
    int mynum2 = 456;
    print(mynum2);
```

> 注：var不要和类型关键字一起使用

dart中存在类型校验 下面三种情况均会报错

```dart
    var str = '';
    str = 123;
    print(str);

    String mynum = 123;
    print(mynum);

    int mynum2 = '456';
    print(mynum2);
```

此时赋值操作会出现报错提示，因为声明时推断str为字符串类型

#### Dart常量

常量只能进行一次赋值操作

* const常量

```dart
    const PI = 3.14159;
    print(PI);

    final PI2 = 3.14159;
    print(PI2);

    final now = new DateTime.now();
    print(now);
```

* final常量

区别：final不仅有const的编译时常量的特性，最重要的是它是运行时常量，并且final是惰性初始化，即在运行时第一次使用前才初始化

#### Dart命名规则

1. 变量名称必须由数字、字母、下划线和$符组成
1. 注意：标识符开头不能是数字
1. 标识符不能是保留字和关键字
1. 变量的名字是区分大小写的：如age和Age是不同的变量。在实际的运用中，也建议不要用一个
1. 标识符(变量名称)一定要见名思意：变量名称建议用名词，方法名称建议用动词

## 参考资料

* [B站-Dart Flutter教程_Dart Flutter入门实战视频教程-2020年新出-第14讲以后是Flutter教程](https://www.bilibili.com/video/BV1S4411E7LY?from=search&seid=18237173814777031437)