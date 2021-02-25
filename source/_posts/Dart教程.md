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

#### 自增自减运算

```dart
void main(){
  /*
    ++  --   表示自增 自减 1
    在赋值运算里面 如果++ -- 写在前面 这时候先运算 再赋值，如果++ --写在后面 先赋值后运行运算
  */
  var a = 10;
  a++; //a=a+1;
  print(a);

  var b = 10;
  b--; //b=b-1;
  print(b);

  var c = 10;
  var d = a++;
  print(c); //11
  print(d); //10

  var e = 10;
  var f = ++a;
  print(e); //11
  print(f); //11

  var g = 10;
  var h = --a;
  print(g); //9
  print(h); //9

  var i = 10;
  var j = a--;
  print(i); //9
  print(j); //10

  var k = 10;
  ++k;
  print(k);
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

#### for循环语句

```dart
void main(){
  /*
    // for基本语法
    for (int i = 1; i<=100; i++) {   
      print(i);
    }

    //第一步，声明变量int i = 1;
    //第二步，判断i <=100
    //第三步，print(i);
    //第四步，i++
    //第五步 从第二步再来，直到判断为false
  */

  for (int i = 1; i <= 10; i++) {
    print(i);
  }

  // 1、打印0-50所有的偶数
  for (int i = 0; i <= 50; i++) {
    if (i % 2 == 0) {
      print(i);
    }
  }

  // 2、求 1+2+3+4 +...100的和
  var sum = 0;
  for (var i = 1; i <= 100; i++) {
    sum += i;
  }
  print(sum);

  // 3、计算5的阶乘   (1*2*3*4*5    n的阶乘1*2……*n)
  var sum2 = 1;
  for (var i = 1; i <= 5; i++) {
    sum2 *= i;
  }
  print(sum2);

  // 4、打印List  ['张三','李四','王五'] 里面的内容
  List list = ['张三', '李四', '王五'];
  print(list[1]);
  for (var i = 0; i < list.length; i++) {
    print(list[i]);
  }

  // 5、打印List中item的title
  List list2 = [
    {"title": "新闻111"},
    {"title": "新闻222"},
    {"title": "新闻333"}
  ];
  print(list2[1]);
  for (var i = 0; i < list.length; i++) {
    print(list[i]['title']);
  }

  // 6、定义一个二维数组 打印里面的内容
  List list3 = [
    {
      "cate": '国内',
      "news": [
        {"title": "国内新闻1"},
        {"title": "国内新闻2"},
        {"title": "国内新闻3"}
      ]
    },
    {
      "cate": '国际',
      "news": [
        {"title": "国际新闻1"},
        {"title": "国际新闻2"},
        {"title": "国际新闻3"}
      ]
    }
  ];
   /*
    国内
    -------------
    国内新闻1
    国内新闻2
    国内新闻3
    国际
    -------------
    国际新闻1
    国际新闻2
    国际新闻3
  */
  for (var i = 0; i < list3.length; i++) {
    print(list3[i]["cate"]);
    print('-------------');
    for (var j = 0; j < list3[i]["news"].length; j++) {
      print(list3[i]["news"][j]["title"]);
    }
  }
}
```

#### while do...while循环语句

```dart
void main(){
/*
语法格式:

  while(表达式/循环条件){

  }

  do{
    语句/循环体
  }while(表达式/循环条件);

  注意： 1、最后的分号不要忘记
        2、循环条件中使用的变量需要经过初始化
        3、循环体中，应有结束循环的条件，否则会造成死循环。
*/

/*
  int i=1;
  while(i<=10){

      print(i);
  }
  //死循环
 */

  int i = 1;
  while (i <= 10) {
    print(i);
    i++;
  }

  // 1、求1+2+3+4 ...+100的和
  int j = 1;
  var sum = 0;
  while (j <= 100) {
    sum += j;
    j++;
  }
  print(sum);

  int k = 1;
  var sum2 = 0;
  do {
    sum += k;
    k++;
  } while (k <= 100);
  print(sum2);

  //  while 和 do while的区别   第一次循环条件不成立的情况下
  int l = 10;
  while (l < 2) {
    print('执行代码');
  }

  var m = 10;
  do {
    print('执行代码');
  } while (m < 2);
}
```

#### break和continue关键词

```dart
void main(){
  for (var i = 1; i <= 10; i++) {
    print(i);
  }
  
  // 1、如果i等于4的话跳过
  for (var i = 1; i <= 10; i++) {
    if (i == 4) {
      continue; /*跳过当前循环体 然后循环还会继续执行*/
    }
    print(i);
  }

  // 2、如果 i等于4的话跳出循环
  for (var i = 1; i <= 10; i++) {
    if (i == 4) {
      break; /*跳出循环体*/
    }
    print(i);
  }

  // 3、break语句只能向外跳出一层
  for (var i = 0; i < 5; i++) {
    print('外层---$i');
    for (var j = 0; j < 3; j++) {
      if (j == 1) {
        break;
      }
      print('里层$j');
    }
  }

  // 4、while循环 break跳出循环
  var i = 1;
  while (i <= 10) {
    if (i == 4) {
      break;
    }
    print(i);
    i++;
  }

  var sex = "男";
  switch (sex) {
    case "男":
      print('男');
      break;
    case "女":
      print('男');
      break;
    default:
  }
}
```

### 集合类型

#### List

> List里面常用的属性和方法：

* 常用属性：
  * length          长度
  * reversed        翻转
  * isEmpty         是否为空
  * isNotEmpty      是否不为空
* 常用方法：  
  * add         增加
  * addAll      拼接数组
  * contains    查找  传入具体值  返回true/false
  * indexOf     查找  传入具体值
  * remove      删除  传入具体值
  * removeAt    删除  传入索引值
  * fillRange(start,end,value)   修改
  * insert(index,value);            指定位置插入
  * insertAll(index,list)           指定位置插入List
  * toList()    其他类型转换成List  
  * join()      List转换成字符串
  * split()     字符串转化成List
  * forEach
  * map
  * where
  * any
  * every

```dart
void main(){
  // 声明List的两种方式
  List myList = ['香蕉', '苹果', '西瓜'];
  print(myList[1]);

  var list = new List();
  list.add('111');
  list.add('222');
  print(list);

  // List里面的属性：
  List myList2 = ['香蕉', '苹果', '西瓜'];
  print(myList2); //List
  print(myList2.length); //长度
  print(myList2.isEmpty); // 判断为空
  print(myList2.isNotEmpty); // 判断非空
  print(myList2.reversed); // 对列表倒序排序 输出对象是元组 ('西瓜', '苹果', '香蕉')
  var newMyList = myList2.reversed.toList();
  print(newMyList);

  // List里面的方法：

  // 添加
  List myList3 = ['香蕉', '苹果', '西瓜'];
  myList3.add('桃子'); //增加数据  增加一个
  print(myList3);
  // 拼接
  myList3.addAll(['李子', '葡萄']); //拼接数组
  print(myList3);

  // 查找
  print(myList3.indexOf('苹果')); //indexOf查找数据 查找不到返回-1  查找到返回索引值
  print(myList3.indexOf('苹x果')); //indexOf查找数据 查找不到返回-1  查找到返回索引值

  // 移除某个值
  myList3.remove('西瓜');
  print(myList3);

  // 移除某个索引值
  myList3.removeAt(1);
  print(myList3);

  // 修改 插入
  List myList4 = ['香蕉', '苹果', '西瓜'];

  myList4.fillRange(1, 2, 'aaa'); // 修改
  myList4.fillRange(1, 3, 'aaa');

  myList4.insert(1, 'aaa'); //插入  一个
  myList4.insertAll(1, ['aaa', 'bbb']); //插入 多个

  // 数组转换成字符串
  List myList5 = ['香蕉', '苹果', '西瓜'];
  var str = myList5.join('-'); //list转换成字符串
  print(str);
  print(str is String); //true

  // 字符串按-切割成数组
  var str2 = '香蕉-苹果-西瓜';
  var myList6 = str2.split('-');
  print(myList6);
  print(myList6 is List);
}
```

#### Set

```dart
void main(){
  //用它最主要的功能就是去除数组重复内容
  //Set是没有顺序且不能重复的集合，所以不能通过索引去获取值
  var s = new Set();
  s.add('香蕉');
  s.add('苹果');
  s.add('苹果');
  print(s); // {香蕉, 苹果}
  print(s.toList()); // [香蕉, 苹果]

  // 将数组去重
  List myList = ['香蕉', '苹果', '西瓜', '香蕉', '苹果', '香蕉', '苹果'];
  var s1 = new Set();
  s1.addAll(myList);
  print(s1); // {香蕉, 苹果, 西瓜}
  print(s1.toList()); // [香蕉, 苹果, 西瓜]
}
```

#### Map

> 映射(Maps)是无序的键值对：

* 常用属性：
  * keys            获取所有的key值
  * values          获取所有的value值
  * isEmpty         是否为空
  * isNotEmpty      是否不为空
* 常用方法:
  * remove(key)     删除指定key的数据
  * addAll({...})   合并映射  给映射内增加属性
  * containsValue   查看映射内的值  返回true/false
  * forEach
  * map
  * where
  * any
  * every

```dart
void main(){
  Map person = {
    "name": "张三",
    "age": 20
  };
  var m = new Map();
  m["name"] = "李四";
  print(person);
  print(m);

  
  //常用属性：
  Map person2 = {"name": "张三", "age": 20, "sex": "男"};
  print(person2.keys.toList());
  print(person2.values.toList());
  print(person2.isEmpty);
  print(person2.isNotEmpty);

  //常用方法：
  Map person3 = {"name": "张三", "age": 20, "sex": "男"};
  person3.addAll({
    "work": ['敲代码', '送外卖'],
    "height": 160
  });
  print(person3);
  person3.remove("sex");
  print(person3);
  print(person3.containsValue('张三')); // 查看映射内的值
}
```

#### 通用方法

> forEach map where any every

##### List中使用

```dart
void main(){
  // 循环输出myList
  List myList = ['香蕉', '苹果', '西瓜'];
  for (var i = 0; i < myList.length; i++) {
    print(myList[i]);
  }
  for (var item in myList) {
    print(item);
  }
  myList.forEach((value) {
    print("$value");
  });

  // 修改myList2每一项
  List myList2 = [1, 3, 5];
  // List newList = [];
  List newList = new List();
  for (var i = 0; i < myList2.length; i++) {
    newList.add(myList2[i] * 2);
  }
  print(newList);

  var newList2 = myList.map((value) {
    return value * 2;
  });
  print(newList2.toList());

  // 查找符合条件的值
  List myList3 = [1, 3, 4, 5, 7, 8, 9];
  var newList3 = myList3.where((value) {
    return value > 5;
  });
  print(newList3.toList());

  // 判断是否存在符合条件的值 true/false
  List myList4 = [1, 3, 4, 5, 7, 8, 9];
  var f = myList4.any((value) {
    //只要集合里面有满足条件的就返回true
    return value > 5;
  });
  print(f);

  // 判断是否存都是符合条件的值 true/false
  List myList5 = [1, 3, 4, 5, 7, 8, 9];
  var f2 = myList5.every((value) {
    //每一个都满足条件返回true  否则返回false
    return value > 5;
  });
  print(f2);
}
```

##### Set中使用

```dart
void main(){
  // 循环输出Set的值
  var s = new Set();
  s.addAll([1, 222, 333]);
  s.forEach((value) => print(value));
}
```

##### Map中使用

```dart
void main(){
  Map person = {"name": "张三", "age": 20};
  person.forEach((key, value) {
    print("$key---$value");
  });
}
```

### 函数

* 内置方法/函数：
  * print();
* 自定义方法：
  * 自定义方法的基本格式：

```text
返回类型 方法名称（参数1，参数2,...）{
  方法体
  return 返回值;
}
```

#### 函数的定义、变量及作用域

```dart
void printInfo() {
  print('我是一个自定义方法');
}

int getNum() {
  var myNum = 123;
  return myNum;
}

String printUserInfo() {
  return 'this is str';
}

List getList() {
  return ['111', '2222', '333'];
}

void main(){
  print('调用系统内置的方法');

  printInfo();

  var n = getNum();
  print(n);

  print(printUserInfo());

  print(getList());

  // print(getList());

  //演示方法的作用域
  void xxx() {
    aaa() {
      print(getList());
      print('aaa');
    }
    aaa();
  }
  // aaa();  // 错误写法
  xxx(); // 调用方法
}
```

#### 函数的传参、默认参数及可选参数

```dart
void main(){
  // 1、定义一个方法 求1到这个数的所有数的和 60 1+2+3+。。。+60
  int sumNum(int n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }

  var n1 = sumNum(5);
  print(n1);
  var n2 = sumNum(100);
  print(n2);

  // 2、定义一个方法然后打印用户信息
  String printUserInfo(String username, int age) { // 形参
    return "姓名:$username---年龄:$age";
  }
  print(printUserInfo('张三', 20)); // 实参

  // 3、定义一个带可选参数的方法
  String printUserInfo2(String username, [int age]) {
    //行参
    if (age != null) {
      return "姓名:$username---年龄:$age";
    }
    return "姓名:$username---年龄保密";
  }
  print(printUserInfo2('张三', 21)); //实参
  print(printUserInfo2('张三'));

  // 4、定义一个带默认参数的方法
  String printUserInfo3(String username, [String sex = '男', int age]) {
    //行参
    if (age != null) {
      return "姓名:$username---性别:$sex--年龄:$age";
    }
    return "姓名:$username---性别:$sex--年龄保密";
  }
  print(printUserInfo3('张三'));
  print(printUserInfo3('小李', '女'));
  print(printUserInfo3('小李', '女', 30));

  // 5、定义一个命名参数的方法
  String printUserInfo4(String username, {int age, String sex = '男'}) {
    //行参
    if (age != null) {
      return "姓名:$username---性别:$sex--年龄:$age";
    }
    return "姓名:$username---性别:$sex--年龄保密";
  }
  // 命名参数同时也是可选参数
  print(printUserInfo4('小李', sex: '未知'));
  print(printUserInfo4('张三', age: 20, sex: '未知'));

  // 6、实现一个 把方法当做参数的方法
  var fn = () {
    print('我是一个匿名方法');
  };
  fn();
  // 方法1
  fn1() {
    print('fn1');
  }
  // 方法2
  fn2(fn) {
    fn();
  }
  // 调用fn2这个方法 把fn1这个方法当做参数传入
  fn2(fn1);
}
```

#### 箭头函数

```dart
void main(){
  // 1. 需求：使用forEach打印下面List里面的数据
  List list = ['苹果', '香蕉', '西瓜'];
  list.forEach((value) {
    print(value);
  });
  list.forEach((value) => print(value));
  list.forEach((value) => {
    print(value)
  });

  // 2. 需求：修改下面List里面的数据，让数组中大于2的值乘以2
  List list2 = [4, 1, 2, 3, 4];
  var newList = list2.map((value) {
    if (value > 2) {
      return value * 2;
    }
    return value;
  });
  print(newList.toList());

  var newList2 = list.map((value) => value > 2 ? value * 2 : value);
  print(newList2.toList());

  /*
  需求： 1、定义一个方法isEvenNumber来判断一个数是否是偶数  
        2、定义一个方法打印1-n以内的所有偶数
  */

  // 定义一个方法isEvenNumber来判断一个数是否是偶数
  bool isEvenNumber(int n) {
    if (n % 2 == 0) {
      return true;
    }
    return false;
  }

  // 定义一个方法打印1-n以内的所有偶数
  printNum(int n) {
    for (var i = 1; i <= n; i++) {
      if (isEvenNumber(i)) {
        print(i);
      }
    }
  }
  printNum(10);
}
```

#### 匿名函数

```dart
int getNum(int n) {
  return n;
}
void main(){
  print(getNum(12));

  // 匿名函数
  var printNum = () {
    print(123);
  };
  printNum();

  var printNum2 = (int n) {
    print(n + 2);
  };
  printNum2(12);
}
```

#### 自执行函数

```dart
void main(){
  (() {
    print('我是自执行方法');
  })();

  // 传参
  ((int n) {
    print(n);
    print('我是自执行方法');
  })(12);
}
```

#### 方法的递归

```dart
void main(){
  var sum = 1;
  fn(n) {
    sum *= n;
    if (n == 1) {
      return;
    }
    fn(n - 1);
  }

  fn(5);
  print(sum);

  // 通过方法的递归 求1-100的和
  var sum1 = 0;
  fn1(int n) {
    sum1 += n;
    if (n == 0) {
      return;
    }
    fn1(n - 1);
  }

  fn1(100);
  print(sum1);
}
```

#### 闭包

变量的特点

1. 全局变量特点: 全局变量常驻内存、全局变量污染全局
2. 局部变量的特点: 不常驻内存会被垃圾机制回收、不会污染全局  

想实现的功能：

1. 常驻内存
2. 不污染全局

> 产生了闭包,闭包可以解决这个问题.....  
> 闭包: 函数嵌套函数, 内部函数会调用外部函数的变量或参数, 变量或参数不会被系统回收(不会释放内存)
> 闭包的写法: 函数嵌套函数，并`return`里面的函数，这样就形成了闭包。

```dart
/*全局变量*/
var a=123;

void main(){
  print(a);  // 123
  fn() {
    a++;
    print(a);
  }
  fn();  // 124
  fn();  // 125
  fn();  // 126

  // 局部变量
  printInfo() {
    var myNum = 123;
    myNum++;
    print(myNum);
  }
  printInfo();  // 124
  printInfo();  // 124
  printInfo();  // 124

  // 闭包
  fn2() {
    var a = 123; /*不会污染全局 常驻内存*/
    return () {
      a++;
      print(a);
    };
  }
  var b = fn2();
  b();  // 124
  b();  // 125
  b();  // 126
}
```

### 对象-类

#### 面向对象概念

面向对象编程(OOP)的三个基本特征是：封装、继承、多态

* 封装：封装是对象和类概念的主要特性。封装，把客观事物封装成抽象的类，并且把自己的部分属性和方法提供给其他对象调用, 而一部分属性和方法则隐藏。
* 继承：面向对象编程 (OOP) 语言的一个主要功能就是“继承”。继承是指这样一种能力：它可以使用现有类的功能，并在无需重新编写原来的类的情况下对这些功能进行扩展。
* 多态：允许将子类类型的指针赋值给父类类型的指针, 同一个函数调用会有不同的执行效果 。

Dart所有的东西都是对象，所有的对象都继承自Object类。

Dart是一门使用类和单继承的面向对象语言，所有的对象都是类的实例，并且所有的类都是Object的子类

一个类通常由属性和方法组成。

```dart
// dart内置的类
void main(){
  // List
  List list=new List();
  list.isEmpty;
  list.add('香蕉');
  list.add('香蕉1');

  // Map
  Map m=new Map();
  m["username"]="张三";
  m.addAll({"age":20});
  m.isEmpty;

  // Object
  Object a=123;
  Object v=true;
  print(a);
  print(v);
}
```

#### 定义类

> Dart是一门使用类和单继承的面向对象语言，所有的对象都是类的实例，并且所有的类都是Object的子类

```dart
class Person {
  String name = "张三";
  int age = 23;
  void getInfo() {
    // print("$name----$age");
    print("${this.name}----${this.age}");
  }

  void setInfo(int age) {
    this.age = age;
  }
}
void main(){
  // 实例化
  var p1 = new Person();
  print(p1.name);
  p1.getInfo();

  // 实例化类的类型
  Person p2 = new Person();
  print(p2.name);
  
  // 调用类里的方法
  p2.setInfo(28);
  p2.getInfo();
}
```

#### 构造函数

#### 默认构造函数

> 构造函数的写法

```dart
class Person {
  String name = '张三';
  int age = 20;
  // 默认构造函数
  Person() {
    print('这是构造函数里面的内容 这个方法在实例化的时候触发');
  }
  void printInfo() {
    print("${this.name}----${this.age}");
  }
}

void main(){
  var p1 = new Person();
}
```

> 使用构造函数初始化类的属性

```dart
class Person {
  String name;
  int age;
  //默认构造函数
  Person(String name, int age) {
    this.name = name;
    this.age = age;
  }
  void printInfo() {
    print("${this.name}----${this.age}");
  }
}

void main(){
  Person p1 = new Person('张三', 20);
  p1.printInfo();
  
  Person p2 = new Person('李四', 25);
  p2.printInfo();
}
```

> 默认构造函数的简写

```dart
class Person {
  String name;
  int age;
  //默认构造函数的简写
  Person(this.name, this.age);
  void printInfo() {
    print("${this.name}----${this.age}");
  }
}

void main(){
  Person p1 = new Person('张三', 20);
  p1.printInfo();
  
  Person p2 = new Person('李四', 25);
  p2.printInfo();
}
```

#### 命名构造函数

dart里面命名构造函数可以写多个

```dart
class Person {
  String name;
  int age;
  //默认构造函数的简写
  Person(this.name, this.age);

  Person.now() {
    print('我是命名构造函数');
  }

  Person.setInfo(String name, int age) {
    this.name = name;
    this.age = age;
  }

  void printInfo() {
    print("${this.name}----${this.age}");
  }
}

void main() {
  var d = new DateTime.now(); // 实例化DateTime调用它的命名构造函数
  print(d);

  Person p1 = new Person('张三', 20); // 默认实例化类的时候调用的是 默认构造函数
  p1.printInfo();

  Person p2 = new Person.now(); // 调用命名构造函数

  Person p3 = new Person.setInfo('李四', 30);
  p3.printInfo();
}
```

#### 将类抽离成一个模块

`index.dart`

```dart
import 'lib/Person.dart';

void main(){
  Person p1=new Person.setInfo('李四1',30);
  p1.printInfo(); 
}
```

`lib/Person.dart`

```dart
class Person{
  String name;
  int age; 
  //默认构造函数的简写
  Person(this.name,this.age);
  
  Person.now(){
    print('我是命名构造函数');
  }

  Person.setInfo(String name,int age){
    this.name=name;
    this.age=age;
  }

  void printInfo(){   
    print("${this.name}----${this.age}");
  }
}
```

#### 类的私有属性和方法

Dart和其他面向对象语言不一样，Data中没有`public` `private` `protected`这些访问修饰符合

但是我们可以使用`_`把一个属性或者方法定义成私有(类必须在单独的文件中，才能将属性或方法私有)。

`index.dart`

```dart
import 'lib/Animal.dart';

void main(){
  Animal a = new Animal('小狗', 3);
  print(a.age); // 间接的获取私有属性
  print(a.getName()); // 间接的获取私有属性
  a.execRun(); // 间接的调用私有方法
}
```

`lib/Animal.dart`

```dart
class Animal {
  String _name; // 私有属性
  int age;
  // 默认构造函数的简写
  Animal(this._name, this.age);

  void printInfo() {
    print("${this._name}----${this.age}");
  }

  String getName() {
    return this._name;
  }

  void _run() {
    print('这是一个私有方法');
  }

  execRun() {
    this._run(); // 类里面方法的相互调用
  }
}
```

#### 类的getter和setter

获取矩形的面积

* 使用方法获取

```dart
class Rect {
  num height;
  num width;

  Rect(this.height, this.width);
  area() {
    return this.height * this.width;
  }
}

void main() {
  Rect r = new Rect(10, 4);
  print("面积:${r.area()}");
}
```

* 使用get获取(计算属性)

```dart
class Rect {
  num height;
  num width;
  Rect(this.height, this.width);
  get area {
    return this.height * this.width;
  }
}

void main() {
  Rect r = new Rect(10, 2);
  print("面积:${r.area}"); // 注意调用直接通过访问属性的方式访问area
}
```

* 使用set存储

```dart
class Rect {
  num height;
  num width;

  Rect(this.height, this.width);
  get area {
    return this.height * this.width;
  }

  set areaHeight(value) {
    this.height = value;
  }
}

void main() {
  Rect r = new Rect(10, 4);
  r.areaHeight = 6;
  print("面积:${r.area}"); // 注意调用直接通过访问属性的方式访问area
}
```

#### 类的初始化列表

Dart中我们也可以在构造函数体运行之前初始化实例变量

```dart
class Rect{
  int height;
  int width;
  Rect():height=2,width=10{
    print("${this.height}---${this.width}");
  }
  getArea(){
    return this.height*this.width;
  } 
}

void main(){
  Rect r=new Rect();
  print(r.getArea()); 
}
```

#### 静态成员

1. 使用static 关键字来实现类级别的变量和函数
2. 静态方法不能访问非静态成员，非静态方法可以访问静态成员

```dart
class Person {
  static String name = '张三';
  static void show() {
    print(name);
  }
}

void main() {
  print(Person.name);
  Person.show();
}
```

##### 非静态方法访问静态成员和非静态成员

```dart
class Person {
  static String name = '张三';
  int age = 20;

  static void show() {
    print(name);
  }

  void printInfo() {
    /*非静态方法可以访问静态成员以及非静态成员*/

    print(name); // 访问静态属性
    print(this.age); // 访问非静态属性

    show(); // 调用静态方法
  }
}
void main(){
  Person p = new Person();
  p.printInfo();
}
```

##### 静态方法只能访问静态成员

```dart
class Person {
  static String name = '张三';
  int age = 20;

  static void show() {
    print(name);
  }

  static void printUserInfo() {
    // 静态方法
    print(name); // 静态属性
    show(); // 静态方法

    // print(age); // 静态方法没法访问非静态的属性
    // print(this.age); // 静态方法没法访问非静态的属性
    // this.printInfo(); // 静态方法没法访问非静态的方法
    // printInfo(); // 静态方法没法访问非静态的方法
  }
}
void main(){
  Person.printUserInfo();
}
```

#### 操作符

* ?     条件运算符 （了解）
* as    类型转换
* is    类型判断
* ..    级联操作 （连缀）  (记住)

##### 条件运算符

```dart
class Person {
  String name;
  num age;
  Person(this.name, this.age);
  void printInfo() {
    print("${this.name}---${this.age}");
  }
}

void main(){
  Person p;
  p?.printInfo();

  Person p2 = new Person('张三', 20);
  p2?.printInfo();
}
```

##### 操作符-类型判断

```dart
class Person {
  String name;
  num age;
  Person(this.name, this.age);
  void printInfo() {
    print("${this.name}---${this.age}");
  }
}

void main(){
  Person p = new Person('张三', 20);

  if (p is Person) {
    p.name = "李四";
  }
  p.printInfo(); // 李四---20
  print(p is Object); // true
}
```

##### 类型转换

```dart
class Person {
  String name;
  num age;
  Person(this.name, this.age);
  void printInfo() {
    print("${this.name}---${this.age}");
  }
}
void main(){
  var p1;
  p1 = '';
  p1 = new Person('张三1', 20);

  p1.printInfo(); // 老版本报错 不知道p1是字符串还是Person类
  (p1 as Person).printInfo(); // 强制转换为Person类
}
```

##### 级联操作

```dart
class Person {
  String name;
  num age;
  Person(this.name, this.age);
  void printInfo() {
    print("${this.name}---${this.age}");
  }
}
void main(){
  Person p1 = new Person('张三', 20);

  p1.printInfo(); // 张三---20

  p1.name = '李四';
  p1.age = 40;
  p1.printInfo(); // 李四---40

  // 使用连缀简化为
  p1..name = '王五'
    ..age = 60
    ..printInfo(); // 王五---60
}
```

#### 类的继承

##### 简单继承

1. 子类使用extends关键词来继承父类
2. 子类会继承父类里面可见的属性和方法 但是不会继承构造函数
3. 子类能复写父类的方法 getter和setter

```dart
class Person {
  String name = '张三';
  num age = 20;
  void printInfo() {
    print("${this.name}---${this.age}");
  }
}

class Web extends Person {

}

main() {
  Web w = new Web();
  print(w.name);
  w.printInfo();
}
```

##### super关键词的使用

```dart
class Person {
  String name;
  num age;
  Person(this.name, this.age);
  void printInfo() {
    print("${this.name}---${this.age}");
  }
}

class Web extends Person {
  Web(String name, num age) : super(name, age) {

  }
}

void main(){
  Person p = new Person('李四', 20);
  p.printInfo();

  Person p1 = new Person('张三', 20);
  p1.printInfo();

  Web w = new Web('王五', 12);
  w.printInfo();
}
```

> 继承类的属性扩展

```dart
class Person {
  String name;
  num age;
  Person(this.name, this.age);
  void printInfo() {
    print("${this.name}---${this.age}");
  }
}

class Web extends Person {
  String sex;
  Web(String name, num age, String sex) : super(name, age) {
    this.sex = sex;
  }
  
  run() {
    print("${this.name}---${this.age}--${this.sex}");
  }
}

void main(){
  Person p = new Person('李四', 20);
  p.printInfo();

  Person p1 = new Person('张三', 20);
  p1.printInfo();

  Web w = new Web('王五', 12);
  w.printInfo();
  w.run();
}
```

> super给命名构造函数传参

```dart
class Person {
  String name;
  num age;
  Person.setInfo(this.name, this.age);
  void printInfo() {
    print("${this.name}---${this.age}");
  }
}

class Web extends Person {
  String sex;
  Web(String name, num age, this.sex) : super.setInfo(name, age) {}
  run() {
    print("${this.name}---${this.age}--${this.sex}");
  }
}

main() {
  Web w = new Web('张三', 12, "男");
  w.printInfo();
  w.run();
}
```

##### 复写父类的方法

```dart
class Person {
  String name;
  num age;
  Person(this.name, this.age);
  void printInfo() {
    print("${this.name}---${this.age}");
  }

  work() {
    print("${this.name}在工作...");
  }
}

class Web extends Person {
  Web(String name, num age) : super(name, age);

  run() {
    print('run');
  }

  // 覆写父类的方法
  @override //可以写也可以不写 建议在覆写父类方法的时候加上 @override
  void printInfo() {
    print("姓名：${this.name}---年龄：${this.age}");
  }

  @override
  work() {
    print("${this.name}的工作是写代码");
  }
}

void main(){
  Web w = new Web('李四', 20);
  w.printInfo();
  w.work();
}
```

##### 子类调用父类的方法

```dart
class Person {
  String name;
  num age;
  Person(this.name, this.age);
  void printInfo() {
    print("${this.name}---${this.age}");
  }

  work() {
    print("${this.name}在工作...");
  }
}

class Web extends Person {
  Web(String name, num age) : super(name, age);

  run() {
    print('run');
    super.work(); //自类调用父类的方法
  }

  //覆写父类的方法
  @override //可以写也可以不写  建议在覆写父类方法的时候加上 @override
  void printInfo() {
    print("姓名：${this.name}---年龄：${this.age}");
  }
}

main() {
  Web w = new Web('李四', 20);
  w.run();
}
```

### 抽象类

#### 创建抽象类

Dart抽象类主要用于定义标准，子类可以继承抽象类，也可以实现抽象类接口。

1. 抽象类通过abstract 关键字来定义
2. Dart中的抽象方法不能用abstract声明，Dart中没有方法体的方法我们称为抽象方法。
3. 如果子类继承抽象类必须得实现里面的抽象方法
4. 如果把抽象类当做接口实现的话必须得实现抽象类里面定义的所有属性和方法。
5. 抽象类不能被实例化，只有继承它的子类可以

extends抽象类 和 implements的区别：

1. 如果要复用抽象类里面的方法，并且要用抽象方法约束自类的话我们就用extends继承抽象类
2. 如果只是把抽象类当做标准的话我们就用implements实现抽象类

```dart
// 案例：定义一个Animal 类要求它的子类必须包含eat方法
abstract class Animal {
  eat(); //抽象方法
  run(); //抽象方法
  
  printInfo() {
    print('我是一个抽象类里面的普通方法');
  }
}

class Dog extends Animal {
  @override
  eat() {
    print('小狗在吃骨头');
  }
  
  @override
  run() {
    // TODO: implement run
    print('小狗在跑');
  }
}

class Cat extends Animal {
  @override
  eat() {
    // TODO: implement eat
    print('小猫在吃老鼠');
  }
  
  @override
  run() {
    // TODO: implement run
    print('小猫在走');
  }
}

void main(){
  Dog d = new Dog();
  d.eat();
  d.printInfo();

  Cat c = new Cat();
  c.eat();
  c.printInfo();

  // Animal a = new Animal(); //抽象类没法直接被实例化
}
```

#### 多态

多态：允许将子类类型的指针赋值给父类类型的指针, 同一个函数调用会有不同的执行效果。

子类的实例赋值给父类的引用。

多态就是父类定义一个方法不去实现，让继承他的子类去实现，每个子类有不同的表现。

```dart
abstract class Animal{
  eat();   //抽象方法 
}

class Dog extends Animal{
  @override
  eat() {
     print('小狗在吃骨头');
  }
  run(){
    print('run');
  }
}
class Cat extends Animal{
  @override
  eat() {   
    print('小猫在吃老鼠');
  }
  run(){
    print('run');
  }
}

main() {
  // 类型定义为父类 可以访问run方法
  Dog d = new Dog();
  d.eat();
  d.run();

  Cat c = new Cat();
  c.eat();
  c.run();

  // 类型定义为父类 不可以访问run方法
  Animal d1 = new Dog();
  d1.eat();

  Animal c1 = new Cat();
  c1.eat();
}
```

#### 接口

`dart`和`Java`一样，`dart`也有接口，但是和`Java`还是有区别的。
首先，`dart`的接口没有`interface`关键字定义接口，而是普通类或抽象类都可以作为接口被实现。
同样使用`implements`关键字进行实现。

但是`dart`的接口有点奇怪，如果实现的类是普通类，会将普通类和抽象中的属性的方法全部需要覆写一遍。
而因为抽象类可以定义抽象方法，普通类不可以，所以一般如果要实现像Java接口那样的方式，一般会使用抽象类。
建议使用抽象类定义接口。

```dart
/*
  定义一个DB库 支持 mysql  mssql  mongodb
  mysql  mssql  mongodb三个类里面都有同样的方法
*/
abstract class Db {
  //当做接口   接口：就是约定 、规范
  String uri; //数据库的链接地址
  add(String data);
  save();
  delete();
}

class Mysql implements Db {
  @override
  String uri;

  Mysql(this.uri);

  @override
  add(data) {
    // TODO: implement add
    print('这是mysql的add方法' + data);
  }

  @override
  delete() {
    // TODO: implement delete
    return null;
  }

  @override
  save() {
    // TODO: implement save
    return null;
  }

  remove() {}
}

class MsSql implements Db {
  @override
  String uri;
  @override
  add(String data) {
    print('这是mssql的add方法' + data);
  }

  @override
  delete() {
    // TODO: implement delete
    return null;
  }

  @override
  save() {
    // TODO: implement save
    return null;
  }
}
void main() {
  Mysql mysql = new Mysql('xxxxxx');
  mysql.add('1243214');
}
```

#### 接口文件分离

`lib/Db.dart`

```dart
abstract class Db{   //当做接口   接口：就是约定 、规范
    String uri;      //数据库的链接地址
    add(String data);
    save();
    delete();
}
```

`lib/MySql.dart`

```dart
import 'Db.dart';

class Mysql implements Db{
  
  @override
  String uri;

  Mysql(this.uri);

  @override
  add(data) {   
    print('这是mysql的add方法'+data);
  }

  @override
  delete() {   
    return null;
  }

  @override
  save() {   
    return null;
  }

}
```

`lib/MsSql.dart`

```dart
import 'Db.dart';

class MsSql implements Db{
  @override
  String uri;
  @override
  add(String data) {
    print('这是mssql的add方法'+data);
  }

  @override
  delete() {
    return null;
  }

  @override
  save() {
    return null;
  }

}
```

`index.dart`

```dart
import 'lib/MsSql.dart';
import 'lib/MySql.dart';

main() {
  Mysql mysql = new Mysql('xxxxxx');
  mysql.add('1243214');

  MsSql mssql = new MsSql();
  mssql.uri = '127.0.0.1';
  mssql.add('增加的数据');
}
```

### 一个类多个接口

```dart
void main(){

}
```

### 泛型

```dart
void main(){

}
```

### 库

```dart
void main(){

}
```

## 参考资料

* [B站-Dart Flutter教程_Dart Flutter入门实战视频教程-2020年新出-第14讲以后是Flutter教程](https://www.bilibili.com/video/BV1S4411E7LY?from=search&seid=18237173814777031437)