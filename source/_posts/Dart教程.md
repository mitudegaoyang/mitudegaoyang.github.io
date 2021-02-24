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

```dart
void main(){

}
```

### 箭头函数和匿名函数

```dart
void main(){

}
```

### 对象

```dart
void main(){

}
```

### 类

```dart
void main(){

}
```

### 抽象类

```dart
void main(){

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