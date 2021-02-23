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

### Dart的数据类型

#### 常用数据类型

* Number(数值)
  * int
  * double
* Strings(字符串)
  * String
* Booleans(布尔)
  * bool
* List(数组)
  * 在Dart中，数组是列表对象，所以大多数人只是称它们为列表
* Maps(字典)
  * 通常来说，Map是一个键值对相关的对象。键和值可以是任何类型的对象。每个键只出现一次，而一个值则可以出现多次。映射是动态集合。换句话说，Maps可以在运行时增长和缩小。dart:core库中的Map类提供了相同的支持。

##### 字符串类型

```dart
void main(){
  // 1、字符串定义的几种方式
  var str = 'this is str';

  var str2 = "this is str2";

  print(str);
  print(str2);

  String str3 = 'this is str3';

  String str4 = 'this is str4';

  print(str3);
  print(str4);

  String str5 = '''this is str5''';
  print(str5);

  String str6 = '''this is str6
  this is str6
  this is str6
  ''';
  print(str6);

  String str7 = """this is str7
  this is str7
  this is str7
  """;
  print(str7);
  // 2、字符串的拼接
  String str8 = 'this is';
  String str9 = 'str9';
  print(str8 + " " + str9);
  print("$str8 $str9");
}
```

##### 数值类型

```dart
void main(){
  // 1.int 必须是整型
  int a = 123;
  // a = 45.5; 不可以赋浮点型
  a = 12;
  print(a);
  // 2.double 既可以是整型 也可是浮点型
  double b = 23.5;
  b = 24;
  print(b);
  // 3.运算符
  // + - * / %
  var c = a + b;
  print(c); // 12 + 24.0 = 36.0
  int d = 12;
  var e = a + d;
  print(e); // 12 + 12 = 24
  // e = 12.5; // 错误 e现前计算时为整型不可再次赋值浮点型
}
```

##### 布尔类型

```dart
/*
bool 值true/false
*/
void main(){
  // 1.bool
  bool flag = true;
  print(flag);
  bool flag2 = false;
  print(flag2);
  // bool flag3 = 123; // 不能赋非布尔的值

  // 2.条件判断语句
  if (flag) {
    print("真");
  } else {
    print("假");
  }

  var a = 123;
  var b = 456;
  if (a == b) {
    print("a==b");
  } else {
    print("a!=b");
  }
  // a!=b

  var c = '123';
  if (a == c) {
    print("a==c");
  } else {
    print("a!=c");
  }
  // a!=c

  var d = 123;
  if (a == d) {
    print("a==d");
  } else {
    print("a!=d");
  }
  // a==d

  double e = 123.0;
  if (a == e) {
    print("a==e");
  } else {
    print("a!=e");
  }
  // a==e
}
```

##### 数组/集合类型

```dart
void main(){
  // 1.第一种定义List的方式
  var list = ['1', '2', '3', '4', '5'];
  print(list);
  print(list.length);
  print(list[2]);

  // 2.第二种定义List的方式
  var list2 = new List();
  list2.add('a');
  list2.add('b');
  list2.add('c');
  print(list2);
  print(list2.length);
  print(list2[1]);

  // 3.定义List指定类型
   var list3 = new List<String>();
  list3.add('张三');
  // list3.add(123); // 不能添加非字符串类型
  print(list3);
}
```

##### Map类型

```dart
void main(){
  //第一种定义 Maps的方式
  var person = {
    "name": "John",
    "age": 21,
    "works": ["程序猿", "测试员"],
    "married": false
  };
  print(person);
  print(person["name"]);
  print(person["age"]);
  print(person["works"]);
  print(person["married"]);

  //第二种定义 Maps的方式
  var person2 = new Map();
  person2["name"] = "Bob";
  person2["age"] = 26;
  person2["works"] = ["UI设计", "测试员"];
  person2["married"] = true;
  print(person2);
  print(person2["name"]);
  print(person2["age"]);
  print(person2["works"]);
  print(person2["married"]);
}
```

#### 不常用数据类型

* Runes
  * Runes是指UTF-32编码的字符串。它可以通过文字转换成符号表情或者代表特定的文字。

```dart
main() {
  var clapping = '\u{1f44f}';
  print(clapping);
  print(clapping.codeUnits);
  print(clapping.runes.toList());

  Runes input = new Runes(
      '\u2665  \u{1f605}  \u{1f60e}  \u{1f47b}  \u{1f596}  \u{1f44d}');
  print(new String.fromCharCodes(input));
}
```

* Symbols
  * Symbols对象表示在Dart程序中声明运算符或标识符。您可能永远不需要使用符号，但它们对于按名称引用标识符的API非常有用，因为缩小会更改标识符名称而不会更改标识符符号。要获取标识符的符号，请使用符号文字，它只是＃后跟标识符。

> 在 Dart 中符号用 # 开头来表示，入门阶段不需要了解这东西，可能永远也用不上。

#### 类型判断

```dart
main() {
/*
  is 关键词来判断类型
*/
  var str = 'str';

  if (str is String) {
    print("$str 是字符串类型");
  } else if (str is num) {
    print("$str 是数字类型");
  } else {
    print("$str 是其他类型");
  }

  var number = 123;

  if (number is String) {
    print("$number 是字符串类型");
  } else if (number is num) {
    print("$number 是数字类型");
  } else {
    print("$number 是其他类型");
  }

  var doubleNum = 123.5;

  if (doubleNum is String) {
    print("$doubleNum 是字符串类型");
  } else if (doubleNum is int) {
    print("$doubleNum 是整数类型");
  } else if (doubleNum is double) {
    print("$doubleNum 是浮点数类型");
  } else {
    print("$doubleNum 是其他类型");
  }
}
```

## 参考资料

* [B站-Dart Flutter教程_Dart Flutter入门实战视频教程-2020年新出-第14讲以后是Flutter教程](https://www.bilibili.com/video/BV1S4411E7LY?from=search&seid=18237173814777031437)