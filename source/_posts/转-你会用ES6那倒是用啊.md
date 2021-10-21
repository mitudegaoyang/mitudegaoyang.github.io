---
title: '[转]你会用ES6那倒是用啊'
abbrlink: 3379300f
date: 2021-10-20 18:05:59
tags:
  - 技术积累
  - 前端
  - ES6
categories:
  - 技术积累
toc: true
---

![首屏图](https://z3.ax1x.com/2021/10/20/5BZINn.jpg)

<!-- more -->

## 前言

在刷掘金过程中，发现一篇关于 ES6 的宝藏文，确实有我日常工作中值得借鉴的一些点，记录下来。

![我只是个分割线](https://z3.ax1x.com/2021/10/20/5040oV.png)

不是标题党，这是一位 leader 在一次代码评审会对小组成员发出的“怒吼”，原因是在代码评审中发现很多地方还是采用 ES5 的写法，
也不是说用 ES5 写法不行，会有 BUG，只是造成代码量增多，可读性变差而已。

恰好，这位 leader 有代码洁癖，面对 3~5 年经验的成员，还写这种水平的代码，极为不满，不断对代码进行吐槽。
不过对于他的吐槽，我感觉还是有很大收获的，故就把 leader 的吐槽记录下来，分享给掘友们，觉得有收获点个赞，有错误的或者更好的写法，非常欢迎在评论中留言。

> **ps：ES5 之后的 JS 语法统称 ES6！！！**

## 一、关于取值的吐槽

取值在程序中非常常见，比如从对象`obj`中取值。

```js
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
};
```

> 吐槽：

```js
const a = obj.a;
const b = obj.b;
const c = obj.c;
const d = obj.d;
const e = obj.e;
```

或者

```js
const f = obj.a + obj.d;
const g = obj.c + obj.e;
```

吐槽：“不会用 ES6 的解构赋值来取值吗？5 行代码用 1 行代码搞定不香吗？直接用对象名加属性名去取值，要是对象名短还好，很长呢？搞得代码中到处都是这个对象名。”

> 改进：

```js
const { a, b, c, d, e } = obj;
const f = a + d;
const g = c + e;
```

> 反驳：

不是不用 ES6 的解构赋值，而是服务端返回的数据对象中的属性名不是我想要的，这样取值，不是还得重新创建个遍历赋值。

> 吐槽：

看来你对 ES6 的解构赋值掌握的还是不够彻底。如果想创建的变量名和对象的属性名不一致，可以这么写：

```js
const { a: a1 } = obj;
console.log(a1); // 1
```

> 补充：

ES6 的解构赋值虽然好用。但是要注意解构的对象不能为 `undefined`、`null`。否则会报错，故要给被解构的对象一个默认值。

```js
const { a, b, c, d, e } = obj || {};
```

## 二、关于合并数据的吐槽

比如合并两个数组，合并两个对象。

```js
const a = [1, 2, 3];
const b = [1, 5, 6];
const c = a.concat(b); //[1,2,3,1,5,6]

const obj1 = {
  a: 1
};
const obj2 = {
  b: 1
};
const obj = Object.assign({}, obj1, obj2); //{a:1,b:1}
```

> 吐槽：

ES6 的扩展运算符是不是忘记了，还有数组的合并不考虑去重吗？

> 改进：

```js
const a = [1, 2, 3];
const b = [1, 5, 6];
const c = [...new Set([...a, ...b])]; //[1,2,3,5,6]

const obj1 = {
  a: 1
};
const obj2 = {
  b: 1
};
const obj = { ...obj1, ...obj2 }; //{a:1,b:1}
```

## 三、关于拼接字符串的吐槽

```js
const name = '小明';
const score = 59;
let result = '';
if (score > 60) {
  result = `${name}的考试成绩及格`;
} else {
  result = `${name}的考试成绩不及格`;
}
```

> 吐槽：

像你们这样用 ES6 字符串模板，还不如不用，你们根本不清楚在${}中可以做什么操作。在${}中可以放入任意的 JavaScript 表达式，可以进行运算，以及引用对象属性。

> 改进：

```js
const name = '小明';
const score = 59;
const result = `${name}${score > 60 ? '的考试成绩及格' : '的考试成绩不及格'}`;
```

## 四、关于 if 中判断条件的吐槽

```js
if (
    type == 1 ||
    type == 2 ||
    type == 3 ||
    type == 4 ||
) {
    //...
}
```

> 吐槽：

ES6 中数组实例方法 includes 会不会使用呢？

> 改进：

```js
const condition = [1, 2, 3, 4];

if (condition.includes(type)) {
  //...
}
```

## 五、关于列表搜索的吐槽

在项目中，一些没分页的列表的搜索功能由前端来实现，搜索一般分为精确搜索和模糊搜索。搜索也要叫过滤，一般用 filter 来实现。

```js
const a = [1, 2, 3, 4, 5];
const result = a.filter((item) => {
  return item === 3;
});
```

> 吐槽：

如果是精确搜索不会用 ES6 中的 find 吗？性能优化懂么，find 方法中找到符合条件的项，就不会继续遍历数组。

> 改进：

```js
const a = [1, 2, 3, 4, 5];
const result = a.find((item) => {
  return item === 3;
});
```

## 六、关于扁平化数组的吐槽

一个部门 JSON 数据中，属性名是部门 id，属性值是个部门成员 id 数组集合，现在要把有部门的成员 id 都提取到一个数组集合中。

```js
const deps = {
  采购部: [1, 2, 3],
  人事部: [5, 8, 12],
  行政部: [5, 14, 79],
  运输部: [3, 64, 105]
};
let member = [];
for (let item in deps) {
  const value = deps[item];
  if (Array.isArray(value)) {
    member = [...member, ...value];
  }
}
member = [...new Set(member)];
```

> 吐槽：

获取对象的全部属性值还要遍历吗？Object.values 忘记了吗？还有涉及到数组的扁平化处理，为啥不用 ES6 提供的 flat 方法呢，
还好这次的数组的深度最多只到 2 维，还要是遇到 4 维、5 维深度的数组，是不是得循环嵌套循环来扁平化？

> 改进：

```js
const deps = {
  采购部: [1, 2, 3],
  人事部: [5, 8, 12],
  行政部: [5, 14, 79],
  运输部: [3, 64, 105]
};
let member = Object.values(deps).flat(Infinity);
```

其中使用 Infinity 作为 flat 的参数，使得无需知道被扁平化的数组的维度。

> 补充：

flat 方法不支持 IE 浏览器。

## 七、关于获取对象属性值的吐槽

```js
const name = obj && obj.name;
```

> 吐槽：

ES6 中的可选链操作符会使用么？

> 改进：

```js
const name = obj?.name;
```

## 八、关于添加对象属性的吐槽

当给对象添加属性时，如果属性名是动态变化的，该怎么处理。

```js
let obj = {};
let index = 1;
let key = `topic${index}`;
obj[key] = '话题内容';
```

> 吐槽：

为何要额外创建一个变量。不知道 ES6 中的对象属性名是可以用表达式吗？

> 改进：

```js
let obj = {};
let index = 1;
obj[`topic${index}`] = '话题内容';
```

## 九、关于输入框非空的判断

在处理输入框相关业务时，往往会判断输入框未输入值的场景。

```js
if (value !== null && value !== undefined && value !== '') {
  //...
}
```

> 吐槽：

ES6 中新出的空值合并运算符了解过吗，要写那么多条件吗？

```js
if (value ?? '' !== '') {
  //...
}
```

## 十、关于异步函数的吐槽

异步函数很常见，经常是用 Promise 来实现。

```js
const fn1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 300);
  });
};
const fn2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 600);
  });
};
const fn = () => {
  fn1().then((res1) => {
    console.log(res1); // 1
    fn2().then((res2) => {
      console.log(res2);
    });
  });
};
```

> 吐槽：

如果这样调用异步函数，不怕形成地狱回调啊！

> 改进：

```js
const fn = async () => {
  const res1 = await fn1();
  const res2 = await fn2();
  console.log(res1); // 1
  console.log(res2); // 2
};
```

> 补充：

但是要做并发请求时，还是要用到 `Promise.all()`。

```js
const fn = () => {
  Promise.all([fn1(), fn2()]).then((res) => {
    console.log(res); // [1,2]
  });
};
```

如果并发请求时，只要其中一个异步函数处理完成，就返回结果，要用到 `Promise.race()`。

## 十一、后续

欢迎来对以上十点 leader 的吐槽进行反驳，你的反驳如果有道理的，下次代码评审会上，我替你反驳。

此外以上的整理内容有误的地方，欢迎在评论中指正，万分感谢。

## 参考资料

- [你会用 ES6，那倒是用啊！](https://juejin.cn/post/7016520448204603423?utm_source=gold_browser_extension)
