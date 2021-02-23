---
title: Dart教程
abbrlink: 9c01b81e
date: 2021-02-22 14:37:13
tags:
  - 技术积累
  - dart
  - flutter
categories:
  - 技术积累
  - dart
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

### 数据类型

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

### 条件判断

#### 算数运算符

```dart
void main(){
  // +    -    *    /     ~/ (取整)     %（取余）
  int a=13;
  int b=5;

  print(a+b);   //加
  print(a-b);   //减
  print(a*b);   //乘
  print(a/b);   //除
  print(a%b);   //其余
  print(a~/b);  //取整

  var c=a*b;
  print('--------');
  print(c);
  
}
```

#### 关系运算符

```dart
void main(){
  //  ==    !=   >    <    >=    <=

  int a=5;
  int b=3;

  print(a==b);   //判断是否相等
  print(a!=b);   //判断是否不等
  print(a>b);   //判断是否大于
  print(a<b);   //判断是否小于
  print(a>=b);   //判断是否大于等于
  print(a<=b);   //判断是否小于等于

  if(a>b){
    print('a大于b');
  }else{
    print('a小于b');
  }

}
```

#### 逻辑运算符

```dart
void main(){
  /* ! 取反 */ 
  bool flag=false;
  print(!flag);   //取反

  /* &&并且:全部为true的话值为true 否则值为false */ 
  bool a = true;
  bool b = false;
  print(a && b);
  
  /* ||或者：全为false的话值为false 否则值为true */ 
  bool c = false;
  bool d = false;
  print(c || d);

  // 如果一个人的年龄是20 并且 sex是女的话我们打印这个人
  int age = 20;
  String sex = "女";
  if (age == 20 && sex == "女") {
    print("$age --- $sex");
  } else {
    print("不打印");
  }

  int age2 = 30;
  String sex2 = "女";
  if (age2 == 20 && sex2 == "女") {
    print("$age2 --- $sex2");
  } else {
    print("不打印");
  }

  //如果一个人的年龄是20 或者 sex是女的话我们打印这个人

  int age3 = 30;
  String sex3 = "女";
  if (age3 == 20 || sex3 == "女") {
    print("$age3 --- $sex3");
  } else {
    print("不打印");
  }
}
```

#### 赋值运算符

```dart
void main(){
  //  1、基础赋值运算符   =   ??=
  int a = 10;
  int b = 3;
  print(a);
  int c = a + b; //从右向左
  
  // b ??= 23;  表示如果b为空的话把 23赋值给b
  int d = 10;
  d ??= 23;
  print(d);

  int e;
  e ??= 23;
  print(e);

  // 2、复合赋值运算符   +=  -=  *=   /=   %=  ~/=
  var f = 12;
  f = f + 10;
  print(f);

  var g = 13;
  g += 10; //g=g+10
  print(g);

  var h = 4;
  h *= 3; //h=h*3;
  print(h);

  var i = 7;
  i %= 3; //i=i%3;
  print(i);

  var j = 7;
  j ~/= 3; //j=(j~/3);
  print(j);
}
```

#### 条件表达式

```dart
void main(){
  // 1、if  else   switch case
  bool flag = true;
  if (flag) {
    print('true');
  } else {
    print('false');
  }
  
  // 判断一个人的成绩 如果大于60 显示及格   如果大于 70显示良好  如果大于90显示优秀
  var score = 41;
  if (score > 90) {
    print('优秀');
  } else if (score > 70) {
    print('良好');
  } else if (score >= 60) {
    print('及格');
  } else {
    print('不及格');
  }

  var sex = "女";
  switch (sex) {
    case "男":
      print('性别是男');
      break;
    case "女":
      print('性别是女');
      print('性别是女2');
      break;
    default:
      print('传入参数错误');
      break;
  }

  // 2、三目运算符
  var falg = true;
  var a;
  if (falg) {
    a = '我是true';
  } else {
    a = "我是false";
  }
  print(a);

  bool flag2 = false;
  String b = flag2 ? '我是true' : '我是false';
  print(b);

  //3  ??运算符
  var c;
  var d = c ?? 10;
  print(d); // 10

  var e = 22;
  var f = e ?? 10;
  print(f); // 22
}
```

#### Dart类型转换

```dart
void main(){
  // 1、Number与String类型之间的转换
  // Number类型转换成String类型 toString()
  // String类型转成Number类型  int.parse()
  String str = '123';
  var myNum = int.parse(str);
  print(myNum is int);
  
  String str2 = '123.1';
  var myNum2 = double.parse(str2);
  print(myNum2 is double);

  // 价格从字符串转数字时推荐使用浮点型避免报错
  String price = '12'; // String price = '12.5'
  var myNum3 = double.parse(price);
  print(myNum3);
  print(myNum3 is double);

  // 报错
  String price2 = '';
  var myNum4 = double.parse(price2);
  print(myNum4);
  print(myNum4 is double);

  // try  ... catch
  String price3 = '';
  try {
    var myNum = double.parse(price3);
    print(myNum);
  } catch (err) {
    print(0);
  }

  // 空值预处理
  String price4 = '';
  price4 = (price4 == '') ? '0' : price4;
  var myNum5 = double.parse(price4);
  print(myNum5);
  print(myNum5 is double);

  var myNum5 = 12;
  var str3 = myNum5.toString();
  print(str3 is String);


  // 2、其他类型转换成Booleans类型
  // isEmpty:判断字符串是否为空
  var str4 = '';
  if (str4.isEmpty) {
    print('str4空');
  } else {
    print('str4不为空');
  }

  var myNum6 = 123;
  if (myNum6 == 0) {
    print('0');
  } else {
    print('非0');
  }

  var myNum7;
  if (myNum7 == 0) {
    print('0');
  } else {
    print('非0');
  }

  var myNum8;
  if (myNum8 == null) {
    print('空');
  } else {
    print('非空');
  }

  var myNum9 = 0 / 0;
  print(myNum9);
  if (myNum9.isNaN) {
    print('myNum9是NaN');
  }
}
```

### 循环语句

### 集合类型

### 函数

### 箭头函数和匿名函数

### 对象

### 类

### 抽象类

### 一个类多个接口

### 泛型

### 库

## 参考资料

* [B站-Dart Flutter教程_Dart Flutter入门实战视频教程-2020年新出-第14讲以后是Flutter教程](https://www.bilibili.com/video/BV1S4411E7LY?from=search&seid=18237173814777031437)