---
title: Z字形变换
tags:
  - 技术积累
  - LeetCode
  - Z字形变换
  - 中等
  - 每日一练
categories:
  - 技术积累
  - LeetCode
abbrlink: e3e2e8e
date: 2021-11-01 19:59:46
---

![首屏图](https://z3.ax1x.com/2021/11/02/IikjQ1.jpg)

<!-- more -->

## LeetCode 题目总结 - Z 字形变换

### 题目

将一个给定字符串 `s` 根据给定的行数 `numRows` ，以从上往下、从左到右进行  Z 字形排列。

比如输入字符串为 `"PAYPALISHIRING"`  行数为 `3` 时，排列如下：

```text
P   A   H   N
A P L S I I G
Y   I   R
```

之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如：`"PAHNAPLSIIGYIR"`。

请你实现这个将字符串进行指定行数变换的函数：

```text
string convert(string s, int numRows);
```

#### 示例 1

```text
输入：s = "PAYPALISHIRING", numRows = 3
输出："PAHNAPLSIIGYIR"
```

#### 示例 2

```text
输入：s = "PAYPALISHIRING", numRows = 4
输出："PINALSIGYAHRPI"
解释：
P     I     N
A   L S   I G
Y A   H R
P     I
```

#### 示例 3

```text
输入：s = "A", numRows = 1
输出："A"
```

提示：

- `1 <= s.length <= 1000`
- `s` 由英文字母（小写和大写）、`','` 和 `'.'` 组成
- `1 <= numRows <= 1000`

#### 解法一: 公式枚举法

- 时间复杂度 O(n^3^)
- 空间复杂度 O(1)

```js
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  // 特殊情况处理
  if (numRows === 1) {
    return s;
  }
  // 初始化数据
  let arr = [];
  let str = '';
  for (i = 0; i < numRows; i++) {
    arr[i] = [];
  }
  // 按结构推入数据
  for (i = 0; i < s.length; i++) {
    // 获取%的值
    let m = i % (2 * numRows - 2);
    if (m < numRows) {
      arr[m].push(s.charAt(i));
    } else {
      arr[2 * (numRows - 1) - m].push(s.charAt(i));
    }
  }
  // 拼接数据
  for (i = 0; i < numRows; i++) {
    for (j = 0; j < arr[i].length; j++) {
      str += arr[i][j];
    }
  }
  // 返回新数据
  return str;
};
```

##### 优化

```js
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  // 特殊情况处理
  if (numRows === 1) {
    return s;
  }
  // 初始化数据
  let arr = [];
  let str = '';
  for (i = 0; i < numRows; i++) {
    arr[i] = [];
  }
  // 按结构推入数据
  for (i = 0; i < s.length; i++) {
    // 获取%的值
    let m = i % (2 * numRows - 2);
    if (m < numRows) {
      arr[m].push(s.charAt(i));
    } else {
      arr[2 * (numRows - 1) - m].push(s.charAt(i));
    }
  }
  // 二维数组转一维
  let newArr = [];
  newArr = arr.reduce(function (a, b) {
    return a.concat(b);
  });
  // 拼接数据
  str = newArr.join('');
  // 返回新数据
  return str;
};
```

#### 解法二: 标识法

- 题目理解

  - 字符串 `s` 是以 Z 字形为顺序存储的字符串，目标是按行打印。
  - 设 `numRows` 行字符串分别为 S1,S2,...,Sn，则容易发现：按顺序遍历字符串 `s` 时，每个字符 `c` 在 Z 字形中对应的 **行索引** 先从 S1 增大至 Sn，再从 Sn 减小至 S1 …… 如此反复。
  - 因此，解决方案为：模拟这个行索引的变化，在遍历 `s` 中把每个字符填到正确的行 `res[i]` 。

- 算法流程 按顺序遍历字符串 `s`；

  - `res[i] += c`： 把每个字符 `c` 填入对应行 Si；
  - `i += flag`： 更新当前字符 `c` 对应的行索引；
  - `flag = - flag`： 在达到 Z 字形转折点时，执行反向。

- 复杂度分析：

  - 时间复杂度 O(N)O(N) ：遍历一遍字符串 `s`；
  - 空间复杂度 O(N)O(N) ：各行字符串共占用 O(N)O(N) 额外空间。

![z形变换](https://z3.ax1x.com/2021/11/15/Ig46G6.gif)

```js
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  // 特殊情况处理
  if (numRows < 2) return s;
  // 初始化数据
  let arr = [];
  let str = '';
  for (i = 0; i < numRows; i++) {
    arr[i] = [];
  }
  let index = 0;
  let flag = -1;
  // 按结构推入数据
  for (i = 0; i < s.length; i++) {
    arr[index].push(s.charAt(i));
    if (index === 0 || index === numRows - 1) flag = -flag;
    index += flag;
  }
  // 二维数组转一维
  let newArr = [];
  newArr = arr.reduce(function (a, b) {
    return a.concat(b);
  });
  // 拼接数据
  str = newArr.join('');
  return str;
};
```

## 参考资料

- [Z 字形变换](https://leetcode-cn.com/problems/zigzag-conversion/)
