---
title: Python参考答案
tags:
  - 技术积累
  - 后端
  - Python
  - 参考答案
categories:
  - 技术积累
  - 后端
  - Python
toc: true
abbrlink: abbb24cd
date: 2025-02-23 21:12:52
---

![首屏图](https://s21.ax1x.com/2025/02/23/pElDufP.jpg)

<!-- more -->

## 1. 变量与数据类型

### [题目 1：基础练习](/archives/2025022423fce97e/#题目-1：基础练习)

- 编写一个程序，要求用户输入姓名和年龄，然后输出一条消息，如“你好，[姓名]！你今年[年龄]岁。”

```python
user_name = input("输入你的姓名: ")
user_age = input("输入你的年龄: ")
print(f"你好，{user_name}！你今年{user_age}岁。")
```

进一步完善

- 使用 strip() 方法去除用户输入的前后空格，提高输入的准确性。
- 使用 isdigit() 方法检查用户输入的年龄是否为整数，避免在后续转换为整数时引发 ValueError。
- 如果用户输入的年龄不是整数，程序会提示用户输入有效的年龄。

```python
user_name = input("输入你的姓名: ").strip()
user_age = input("输入你的年龄: ").strip()
# 检查年龄是否为整数
if user_age.isdigit():
    user_age = int(user_age)
    print(f"你好，{user_name}！你今年{user_age}岁。")
else:
    print("请输入有效的年龄（整数）。")
```

### [题目 2：数据类型转换](/archives/2025022423fce97e/#题目-2：数据类型转换)

- 编写一个程序，要求用户输入两个数字（字符串形式），将它们转换为整数并计算它们的和。

```python
number_a = input("输入数字1: ")
number_b = input("输入数字2: ")
print(f"两数字的和是{int(number_a)+int(number_b)}。")
```

进一步完善

- 使用 strip() 方法去除用户输入的前后空格，提高输入的准确性。
- 使用 isdigit() 方法检查用户输入的两个数字是否为整数，避免在后续转换为整数时引发 ValueError。使用 isdigit() 方法检查用户输入的两个数字是否为整数，避免在后续转换为整数时引发 ValueError。
- 如使用 try-except 块来捕获 ValueError 异常，确保程序在用户输入无效整数时不会崩溃，并给出友好的错误提示。

```python
try:
    number_a = int(input("输入数字1: ").strip())
    number_b = int(input("输入数字2: ").strip())
    add = number_a + number_b
    print(f"两数字的和是{add}。")
except ValueError:
    print("请输入有效的整数。")
```

### [题目 3：复杂逻辑](/archives/2025022423fce97e/#题目-3：复杂逻辑)

- 编写一个程序，要求用户输入一个圆的半径（浮点数），计算并输出圆的面积和周长。

```python
number_r = input("输入圆的半径: ")
area = 3.14 * int(number_r) ** 2
length = 2 * 3.14 * int(number_r)
print(f"圆的面积是{area}。圆的周长是{length}")
```

进一步完善

- 使用 strip() 方法去除用户输入的前后空格，提高输入的准确性。
- 使用 float() 函数将输入转换为浮点数，以便处理小数。
- 使用 try-except 块来捕获 ValueError 异常，确保程序在用户输入无效浮点数时不会崩溃，并给出友好的错误提示。
- 使用更精确的常数：使用 math.pi 来代替 3.14，提高计算精度。
- 使用 :.2f 格式化输出面积和周长，保留两位小数，使输出更加美观。

```python
import math
try:
    number_r = float(input("输入圆的半径: ").strip())
    area = math.pi * number_r ** 2
    length = 2 * math.pi * number_r
    print(f"圆的面积是{area:.2f}。圆的周长是{length:.2f}")
except ValueError:
    print("请输入有效的浮点数作为半径。")
```

## 2. 变量与数据类型

### [题目 1: 展示输入(初级)](/archives/2025022423fce97e/#题目-1-展示输入-初级)

- 编写一个程序，要求用户输入他的年龄，并输出他出生的年份。

```python
from datetime import datetime
user_age = input("输入年龄: ")
current_year = datetime.now().year
birth_year = current_year - int(user_age)
print(f"你的出生年份是{int(birth_year)}。")
```

进一步完善

- 去除不必要的类型转换：birth_year 已经是整数，不需要再次转换为整数。
- 添加输入验证：确保用户输入的是有效的整数。

```python
from datetime import datetime

def get_birth_year():
    while True:
        user_age = input("输入年龄: ").strip()
        if user_age.isdigit():
            user_age = int(user_age)
            current_year = datetime.now().year
            birth_year = current_year - user_age
            print(f"你的出生年份是{birth_year}。")
            break
        else:
            print("请输入有效的整数作为年龄。")

get_birth_year()
```

### [题目 2: 计算输入(中级)](/archives/2025022423fce97e/#题目-2-计算输入-中级)

- 编写一个程序，要求用户输入两个数字，并输出它们的和、差、积和商。

```python
num_1 = input("输入数字1: ")
num_2 = input("输入数字2: ")
sum = int(num_1) + int(num_2)
difference = int(num_1) - int(num_2)
product = int(num_1) * int(num_2)
quotient = int(num_1) / int(num_2)
print(f"两数的和是, {sum}；两数的差是, {difference}；两数的积是, {product}；两数的商是, {quotient}；")
```

> 优化一下

- 输入验证
  - 使用 strip() 去除用户输入的前后空格。
  - 使用 float() 将输入转换为浮点数，以便处理小数。
  - 使用 try-except 块捕获 ValueError 异常，确保程序在用户输入无效数字时不会崩溃，并给出友好的错误提示。
- 异常处理
  - 捕获 ValueError 异常，处理无效输入。
  - 捕获其他异常（如除以零），并给出相应的错误提示。
- 代码格式化
  - 使用更清晰的格式化字符串输出结果，每个结果占一行，便于阅读。
- 变量命名
  - 避免使用内置函数名作为变量名，使用 addition、difference、product 和 quotient 作为变量名。

```python
def calculate_operations():
    while True:
        try:
            num_1 = float(input("输入数字1: ").strip())
            num_2 = float(input("输入数字2: ").strip())

            addition = num_1 + num_2
            difference = num_1 - num_2
            product = num_1 * num_2

            # 处理除以零的情况
            if num_2 == 0:
                quotient = "未定义（除以零）"
            else:
                quotient = num_1 / num_2

            print(f"两数的和是: {addition}")
            print(f"两数的差是: {difference}")
            print(f"两数的积是: {product}")
            print(f"两数的商是: {quotient}")
            break
        except ValueError:
            print("请输入有效的数字。")
        except Exception as e:
            print(f"发生错误: {e}")

calculate_operations()
```

### [题目 3: 处理输入(高级)](/archives/2025022423fce97e/#题目-3-处理输入-高级)

- 编写一个程序，要求用户输入一个字符串，并输出该字符串的反转形式。

```python
user_input = input("输入一个字符串: ")
reversed_string = ''.join(reversed(user_input))
print(f"输入字符串的反转形式是: {reversed_string}")
```

> 优化一下

- 使用切片
  - 使用字符串切片，从字符串末尾开始，每次取一个字符，直到取完所有字符。
  - 切片操作的基本语法是 start:stop:step，其中：
    - start：表示切片的起始位置，默认为 0。
    - stop：表示切片的结束位置，默认为字符串末尾。
    - step：表示切片的步长，默认为 1。
  - start 和 stop 都被省略，表示从字符串的开始到结束。
  - step 为 -1，表示从右向左遍历字符串。

```python
user_input = input("输入一个字符串: ")
reversed_string = user_input[::-1]
print(f"输入字符串的反转形式是: {reversed_string}")
```

- 使用循环

```python
user_input = input("输入一个字符串: ")
reversed_string = ''
for char in user_input:
    reversed_string = char + reversed_string
print(f"输入字符串的反转形式是: {reversed_string}")
```

- 使用递归

```python
def reverse_string(s):
    if len(s) == 0:
        return s
    else:
        return reverse_string(s[1:]) + s[0]

user_input = input("输入一个字符串: ")
reversed_string = reverse_string(user_input)
print(f"输入字符串的反转形式是: {reversed_string}")
```

## 3. 基本运算符

### [题目 1: 计算和、差、积和商(初级)](/archives/2025022423fce97e/#题目-1-计算和、差、积和商-初级)

- 编写一个程序，要求用户输入两个数字，并输出它们的和、差、积和商。

[答案同上](/archives/20250223abbb24cd/#题目-2-计算输入-中级)

### [题目 2: 判断闰年(中级)](/archives/2025022423fce97e/#题目-2-判断闰年-中级)

- 编写一个程序，要求用户输入一个年份，判断它是否为闰年（闰年规则：能被 4 整除但不能被 100 整除，或者能被 400 整除）。

```python
year = int(input("输入年份: ").strip())

# 处理除以零的情况
if (year % 4 == 0 and year %100 != 0) or (year % 400 == 0):
    result = "是"
else:
    result = "不是"

print(f"{year}年{result}闰年")
```

> 优化一下

- 使用 try-except 块捕获 ValueError 异常，确保程序在用户输入无效数字时不会崩溃，并给出友好的错误提示。

```python
def is_leap_year():
    while True:
        try:
            year = int(input("输入年份: ").strip())

            # 处理除以零的情况
            if (year % 4 == 0 and year %100 != 0) or (year % 400 == 0):
                result = "是"
            else:
                result = "不是"

            print(f"{year}年{result}闰年")
            break
        except ValueError:
            print("请输入有效的年份。")
        except Exception as e:
            print(f"发生错误: {e}")

is_leap_year()
```

### [题目 3: 计算极值(高级)](/archives/2025022423fce97e/#题目-3-计算极值-高级)

- 编写一个程序，要求用户输入三个数字，并输出其中的最大值和最小值。

```python
num1 = float(input("输入数字1: "))
num2 = float(input("输入数字2: "))
num3 = float(input("输入数字3: "))

# 将输入的数字存储在一个列表中
numbers = [num1, num2, num3]

# 初始化最大值和最小值
max_num = numbers[0]
min_num = numbers[0]

# 使用循环比较每个数字
for num in numbers:
    if num > max_num:
        max_num = num
    if num < min_num:
        min_num = num

print(f"最大值是: {max_num}")
print(f"最小值是: {min_num}")
```

> 优化一下

- 使用内置函数 max() 和 min()，无需自己实现。
- 使用 try-except 块捕获 ValueError 异常，确保程序在用户输入无效数字时不会崩溃，并给出友好的错误提示。

```python
def calculate_extremes():
    while True:
        try:
            num_1 = float(input("输入数字1: ").strip())
            num_2 = float(input("输入数字2: ").strip())
            num_3 = float(input("输入数字3: ").strip())

            max_value = max(num_1, num_2, num_3)
            min_value = min(num_1, num_2, num_3)
            print(f"最大值是: {max_value}")
            print(f"最小值是: {min_value}")
            break
        except ValueError:
            print("请输入有效的数字。")
        except Exception as e:
            print(f"发生错误: {e}")
calculate_extremes()
```

## 1. 条件语句（if、elif、else）

### [题目 1：根据分数计算等级](/archives/20250226d92cbff1/#题目-1：根据分数计算等级)

- 编写一个程序，根据用户输入的分数，输出相应的等级（例如，90 分以上为 A，80-89 分为 B，依此类推）。

```python
number = int(input("请输入一个数字: "))
if(number>=90):
    print("A")
elif(number>80 and number<90):
    print("B")
elif(number>70 and number<80):
    print("C")
elif(number>60 and number<70):
    print("D")
else:
    print("E")
```

> 优化一下

- 变量命名：将 number 改为 score，使变量名更具描述性。
- 条件表达式：使用 80 <= score < 90 这样的链式比较，使条件判断更简洁和易读。
- 空格：在运算符两边添加空格，符合 PEP 8 风格指南，提高代码可读性。

```python
score = int(input("请输入一个分数: "))

if score >= 90:
    print("A")
elif 80 <= score < 90:
    print("B")
elif 70 <= score < 80:
    print("C")
elif 60 <= score < 70:
    print("D")
else:
    print("E")
```

### [题目 2：判断闰年](/archives/20250226d92cbff1/#题目-2：判断闰年)

- 编写一个程序，判断一个年份是否为闰年。

```python
year = int(input("请输入一个年份: "))
if year % 4 == 0 and year % 100 != 0 or year % 400 == 0:
    print("闰年")
else:
    print("平年")
```

> 优化一下

- 逻辑表达式：在 if 条件中使用括号来明确逻辑关系，确保 year % 4 == 0 and year % 100 != 0 和 year % 400 == 0 是两个独立的条件，通过 or 连接。
- 空格：在运算符两边添加空格，符合 PEP 8 风格指南，提高代码可读性。

```python
year = int(input("请输入一个年份: "))

if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print("闰年")
else:
    print("平年")
```

### [题目 3：计算月份天数](/archives/20250226d92cbff1/#题目-3：计算月份天数)

- 编写一个程序，根据用户输入的月份，输出该月份的天数。

```python
mouth = int(input("请输入月份: "))
if(mouth==1 or mouth==3 or mouth==5 or mouth==7 or mouth==8 or mouth==10 or mouth==12):
    print("31天")
elif(mouth==4 or mouth==6 or mouth==9 or mouth==11):
    print("30天")
else:
    print("28天")
```

> 优化一下

- 使用集合进行条件判断：使用集合 {1, 3, 5, 7, 8, 10, 12} 和 {4, 6, 9, 11} 来判断月份，使代码更简洁和易读。
- 处理 2 月特殊情况：虽然题目没有要求处理闰年 2 月的情况，但可以在输出中提示用户 2 月可能是 28 天或 29 天。
- 添加无效月份检查：增加对无效月份的检查，提高程序的健壮性。

```python
month = int(input("请输入月份: "))

if month in {1, 3, 5, 7, 8, 10, 12}:
    print("31天")
elif month in {4, 6, 9, 11}:
    print("30天")
elif month == 2:
    print("28天（或29天，如果是闰年）")
else:
    print("无效的月份")
```

## 2. 循环

### [题目 1: 循环输出平方(初级)](/archives/20250226d92cbff1/#题目-1-循环输出平方-初级)

- 编写一个程序，使用 for 循环打印 1 到 10 的平方。

```python
for i in range(1, 11):
    square = i * i
    print(square)
```

> 优化一下

- 简化变量命名：去掉 pingfang 变量，直接在 print 语句中计算平方，减少不必要的变量。
- 提高可读性：使用格式化字符串 f"{i} 的平方是 {i \* i}" 来输出结果，使输出更清晰易读。

```python
for i in range(1, 11):
    print(f"{i} 的平方是 {i * i}")
```

### [题目 2: 计算累加值(中级)](/archives/20250226d92cbff1/#题目-2-计算累加值-中级)

- 编写一个程序，使用 while 循环计算 1 到 100 的和。

```python
count = 1
sum = 0
while count <= 100:
    sum += count
    count += 1
print(sum)
```

> 优化一下

- 变量命名
  - 将 sum 改为 total，因为 sum 是 Python 内置函数的名称，使用它作为变量名可能会导致潜在的冲突或混淆。
  - 将 count 改为 number，使变量名更具描述性。

```python
total = 0
number = 1

while number <= 100:
    total += number
    number += 1

print(total)
```

### [题目 3: 打印列表中的偶数(高级)](/archives/20250226d92cbff1/#题目-3-打印列表中的偶数-高级)

- 编写一个程序，使用 for 循环遍历一个列表，并打印出列表中所有偶数。

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for number in numbers:
    if number % 2 == 0:
        print(number)
```

> 优化一下

- 添加注释

```python
# 编写一个程序，使用 for 循环遍历一个列表，并打印出列表中所有偶数。
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for number in numbers:
    if number % 2 == 0:  # 检查数字是否为偶数
        print(number)    # 打印偶数
```

## 3. break 和 continue

### [题目 1: 找到第一个负数](/archives/20250226d92cbff1/#题目-1-找到第一个负数)

- 编写一个程序，使用 for 循环遍历一个列表，找到第一个负数并打印出来，然后退出循环。

```python
numbers = [1, 2, -3, 4, -5, 6, -7, 8, -9, 10]
for number in numbers:
    if number < 0:
        print(number)
        break
```

> 优化一下

- 添加注释

```python
numbers = [1, 2, -3, 4, -5, 6, -7, 8, -9, 10]

for number in numbers:
    if number < 0:  # 检查数字是否为负数
        print(number)  # 打印第一个负数
        break  # 退出循环
```

### [题目 2: 使用 while 找到奇数](/archives/20250226d92cbff1/#题目-2-使用-while-找到奇数)

- 编写一个程序，使用 while 循环打印 1 到 20 之间的所有奇数。

```python
number = 1
while number <= 20:
    if number % 2 != 0:
        print(number)
    number += 1
```

> 优化一下

- 添加注释

```python
number = 1
while number <= 20:
    if number % 2 != 0:  # 检查数字是否为奇数
        print(number)    # 打印奇数
    number += 1          # 增加计数器
```

### [题目 3: 使用 for 找到奇数](/archives/20250226d92cbff1/#题目-3-使用-for-找到奇数)

- 编写一个程序，使用 for 循环遍历一个列表，跳过所有偶数，打印所有奇数。

```python
number = 1
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for number in numbers:
    if number % 2 == 0:
        continue
    print(number)
```

> 优化一下

- 添加注释

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for number in numbers:
    if number % 2 == 0:  # 检查数字是否为偶数
        continue         # 跳过偶数
    print(number)        # 打印奇数
```

## 1. 定义函数

### [题目 1: 计算矩形周长(初级)](/archives/20250228c8f562d1/#题目-1-计算矩形周长-初级)

- 创建计算矩形周长的函数，参数为长和宽

```python
def rectangle_perimeter(length, width):
    return 2 * (length + width)
```

> 优化一下

- 参数类型检查：确保传入的参数是数值类型（如整数或浮点数），以避免无效输入导致的错误。
- 异常处理：使用 try-except 块来捕获可能的异常，例如当传入非数值类型的参数时给出友好提示。
- 文档字符串 (docstring)：为函数添加描述性注释，说明函数的功能、参数及返回值，便于他人理解代码。
- 正负数验证：确保长度和宽度为非负数，因为矩形的尺寸不能为负。

```python
def rectangle_perimeter(length, width):
    try:
        # 将输入转换为浮点数，并去除可能存在的多余空格
        length = float(str(length).strip())
        width = float(str(width).strip())

        # 检查是否为非负数
        if length < 0 or width < 0:
            raise ValueError("长度和宽度必须是非负数。")

        return 2 * (length + width)

    except ValueError as ve:
        print(f"值错误: {ve}")
        return None
    except TypeError:
        print("类型错误: 长度和宽度必须是数字类型。")
        return None
```

### [题目 2: 计算平均值(中级)](/archives/20250228c8f562d1/#题目-2-计算平均值-中级)

- 编写支持可变数量参数的函数，计算任意个数数字的平均值

```python
def average(*args):
    return sum(args) / len(args)
```

> 优化一下

- 处理空参数：如果用户没有传入任何参数，len(args)将为 0，导致除以零的错误。需要添加检查以处理这种情况。
- 参数类型检查：确保传入的参数是数值类型（如整数或浮点数），以避免无效输入导致的错误。
- 异常处理：使用 try-except 块来捕获可能的异常，例如当传入非数值类型的参数时给出友好提示。
- 文档字符串 (docstring)：为函数添加描述性注释，说明函数的功能、参数及返回值，便于他人理解代码。

```python
def average(*args):
    if not args:
        raise ValueError("至少需要传入一个数字参数。")

    try:
        total = sum(args)
        count = len(args)
        return total / count

    except TypeError:
        print("类型错误: 所有参数必须是数字类型。")
        return None
```

### [题目 3: 生成斐波那契数列(高级)](/archives/20250228c8f562d1/#题目-3-生成斐波那契数列-高级)

- 实现记忆化（memoization）的斐波那契数列生成函数，要求通过装饰器实现缓存

```python
def fibonacci_with_memoization(n):
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci_with_memoization(n-1) + fibonacci_with_memoization(n-2)
```

> 优化一下

- 使用 lru_cache 装饰器：
  - lru_cache 是 Python 标准库 functools 模块中的一个装饰器，它可以自动为函数添加缓存功能，避免重复计算。
  - maxsize=None 表示缓存没有大小限制，可以缓存所有计算过的斐波那契数。

```python
from functools import lru_cache

@lru_cache(maxsize=None)
def fibonacci_with_memoization(n):
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci_with_memoization(n-1) + fibonacci_with_memoization(n-2)
```

## 2. 函数参数与返回值

### [题目 1 拼接字符串(初级)](/archives/20250228c8f562d1/#题目-1-拼接字符串-初级)

- 编写函数`greet(name, greeting="Hello")`，返回拼接的问候字符串（如`"Hello, Alice!"`）

```python
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Alice"))
print(greet("Alice", 'Good morning'))
```

> 优化一下

- 函数注释：为函数添加注释，说明函数的作用、参数和返回值。
- 类型提示：为函数参数添加类型提示，提高代码可读性和可维护性。
- 常量使用：将默认问候语定义为常量，便于管理和修改。

```python
# 定义默认问候语常量
DEFAULT_GREETING = "Hello"

def greet(name: str, greeting: str = DEFAULT_GREETING) -> str:
    """
    返回拼接的问候字符串。

    参数:
    name (str): 被问候的人的名字。
    greeting (str): 问候语，默认为"Hello"。

    返回:
    str: 拼接后的问候字符串。
    """
    return f"{greeting}, {name}!"

# 测试函数
print(greet("Alice"))
print(greet("Alice", 'Good morning'))
```

### [题目 2 任意参数求和(中级)](/archives/20250228c8f562d1/#题目-2-任意参数求和-中级)

- 实现函数`sum_numbers(*args)`，接受任意数量的数字参数并返回总和，若无参数返回 0

```python
def sum_numbers(*args):
    total = 0
    for num in args:
        total += num
    return total

print(sum_numbers(1, 2, 3, 4, 5))
print(sum_numbers())
```

> 优化一下

- 类型提示：为函数参数和返回值添加类型提示，提高代码的可读性和可维护性。
- 函数注释：为函数添加注释，说明函数的作用、参数和返回值。
- 异常处理：使用 try-except 块来捕获可能的异常，例如当传入非数字类型的参数时给出友好提示。
- 简洁性：使用了内置的 sum() 函数来计算总和，代码更简洁。
- 可读性：使用了 sum() 函数，这是 Python 中计算总和的标准方法。
- 性能：使用了内置函数 sum()，通常会有更好的性能优化。

```python
def sum_numbers(*args: float) -> float:
    """
    接受任意数量的数字参数并返回总和，若无参数返回 0。

    参数:
    *args: 任意数量的数字参数。

    返回:
    float: 数字参数的总和，若无参数返回 0。

    异常:
    TypeError: 如果参数中包含非数字类型。
    """
    if not args:
        return 0

    try:
        return sum(args)
    except TypeError:
        raise TypeError("所有参数必须是数字类型。")

# 测试函数
print(sum_numbers(1, 2, 3, 4, 5))
print(sum_numbers())
```

### [题目 3 任意参数求积(高级)](/archives/20250228c8f562d1/#题目-3-任意参数求积-高级)

- 设计函数`apply_operation(func, *args, **kwargs)`，接受一个函数和其参数，执行后返回结果（如调用`apply_operation(pow, 2, 3)`返回 8）

```python
def apply_operation(func, *args, **kwargs):
    """
    接受一个函数和其参数，执行后返回结果。

    参数:
    func: 要执行的函数。
    *args: 函数的参数。
    **kwargs: 函数的关键字参数。

    返回:
    执行函数的结果。
    """
    return func(*args, **kwargs)

print(f"{apply_operation(pow, 2, 3)}")
```

> 优化一下

- 类型提示：为函数参数和返回值添加类型提示，提高代码的可读性和可维护性。
- 错误处理：添加对传入函数和参数的错误处理，确保函数的健壮性。
- 文档字符串：进一步完善文档字符串，使其更加清晰和详细。

```python
from typing import Callable, Any

def apply_operation(func: Callable, *args: Any, **kwargs: Any) -> Any:
    """
    接受一个函数和其参数，执行后返回结果。

    参数:
    func (Callable): 要执行的函数。
    *args (Any): 函数的位置参数。
    **kwargs (Any): 函数的关键字参数。

    返回:
    Any: 执行函数的结果。

    异常:
    TypeError: 如果传入的参数不是函数或参数不匹配。
    """
    if not callable(func):
        raise TypeError("第一个参数必须是一个可调用的函数。")

    try:
        return func(*args, **kwargs)
    except TypeError as te:
        raise TypeError(f"调用函数时发生类型错误: {te}")

# 测试函数
print(f"{apply_operation(pow, 2, 3)}")
```

## 3. 局部变量与全局变量

### [题目 1 平方和(初级)](/archives/20250228c8f562d1/#题目-1-平方和-初级)

- 编写函数`sum_squares(a, b)`，计算 a² + b²，要求使用局部变量存储中间结果

```python
def sum_squares(a, b):
    square_sum = a ** 2 + b ** 2
    return square_sum
```

> 优化一下

- 类型提示：为函数参数和返回值添加类型提示，提高代码的可读性和可维护性。
- 文档字符串：为函数添加注释，说明函数的作用、参数和返回值。
- 代码格式：确保代码格式符合 PEP 8 风格指南，提高代码的可读性。

```python
def sum_squares(a: float, b: float) -> float:
    """
    计算 a² + b²。

    参数:
    a (float): 第一个数字。
    b (float): 第二个数字。

    返回:
    float: a² + b² 的结果。
    """
    square_sum = a ** 2 + b ** 2
    return square_sum
```

### [题目 2 打印消息(中级)](/archives/20250228c8f562d1/#题目-2-打印消息-中级)

- 创建全局变量`LOG_LEVEL="INFO"`，编写函数`log(message)`，仅在 LOG_LEVEL 为"DEBUG"时打印消息

```python
LOG_LEVEL="INFO"
def log(message):
    if LOG_LEVEL == "DEBUG":
        print(message)
    else:
        return message
```

> 优化一下

- 类型提示：为函数参数和返回值添加类型提示，提高代码的可读性和可维护性。
- 文档字符串：为函数添加注释，说明函数的作用、参数和返回值。
- 代码格式：确保代码格式符合 PEP 8 风格指南，提高代码的可读性。
- 全局变量管理：确保全局变量的使用是清晰和可控的。
- 返回值一致性：确保函数在不同情况下返回一致的类型，避免混淆。

```python
LOG_LEVEL = "INFO"

def log(message: str) -> None:
    """
    打印消息，仅在 LOG_LEVEL 为 "DEBUG" 时输出。

    参数:
    message (str): 要打印的消息。

    返回:
    None
    """
    if LOG_LEVEL == "DEBUG":
        print(message)
```

### [题目 3 闭包保存 n(高级)](/archives/20250228c8f562d1/#题目-3-闭包保存-n-高级)

- 实现函数`create_multiplier(n)`，返回一个新函数，该函数能将输入参数乘以 n（使用闭包保存 n 的值）

```python
def create_multiplier(n):
    n = n
    def multiplier(x):
        return x * n
    return multiplier
```

> 优化一下

- 类型提示：为函数参数和返回值添加类型提示，提高代码的可读性和可维护性。
- 文档字符串：为函数添加注释，说明函数的作用、参数和返回值。
- 代码格式：确保代码格式符合 PEP 8 风格指南，提高代码的可读性。
- 闭包使用：确保闭包的使用是清晰和正确的。
- 返回函数的命名：为返回的函数添加一个更具描述性的名称。

```python
def create_multiplier(n: float) -> callable:
    """
    返回一个新函数，该函数能将输入参数乘以 n。

    参数:
    n (float): 乘数。

    返回:
    callable: 一个函数，接受一个数字参数并返回该数字乘以 n 的结果。
    """
    def multiplier(x: float) -> float:
        """
        将输入参数乘以 n。

        参数:
        x (float): 要乘以 n 的数字。

        返回:
        float: x 乘以 n 的结果。
        """
        return x * n

    return multiplier
```

## 1. 列表

### [题目 1:计算平均值(初级)](/archives/2025030222c892e4/#题目-1-计算平均值-初级)

- 创建包含 10 个随机整数的列表（范围 1-100），计算它们的平均值

```python
import random
numbers = [random.randint(1, 100) for _ in range(10)]

def calculate_average(numbers):
    return sum(numbers) / len(numbers)

print(f"数组{numbers}的平均值是{calculate_average(numbers)}")
```

> 优化一下

- 代码可读性：在格式化字符串中增加空格以提高可读性。
- 函数注释：为 calculate_average 函数添加注释，说明其功能。
- 避免重复计算：将 calculate_average(numbers) 的结果存储在一个变量中，避免重复计算。
- 代码注释：保持代码注释清晰，确保每个部分的功能明确。

```python
import random

# 生成包含10个1到100之间随机整数的列表
numbers = [random.randint(1, 100) for _ in range(10)]

def calculate_average(numbers):
    """计算并返回数字列表的平均值"""
    return sum(numbers) / len(numbers)

# 计算平均值并存储在变量中
average = calculate_average(numbers)

# 打印结果，使用格式化字符串提高可读性
print(f"数组 {numbers} 的平均值是 {average}")
```

### [题目 2:合并列表并排序(中级)](/archives/2025030222c892e4/#题目-2-合并列表并排序-中级)

- 合并两个已排序列表（如[1,3,5]和[2,4,6]），保持结果列表有序

```python
list1 = [1, 3, 5]
list2 = [2, 4, 6]
def merge_sorted_lists(list1, list2):
    """合并两个已排序列表，保持结果列表有序

    参数：
    list1 (list): 已排序的列表1
    list2 (list): 已排序的列表2

    返回值：
    list: 合并后的已排序列表
    """
    merged_list = list1 + list2
    return sorted(merged_list)

print(merge_sorted_lists(list1, list2))
```

> 优化一下

- 算法效率：当前的 merge_sorted_lists 函数使用了 list1 + list2 和 sorted(listall)，时间复杂度为 O(n log n)。可以使用双指针方法将时间复杂度优化为 O(n)。
- 代码可读性：保持代码注释清晰，确保每个部分的功能明确。
- 函数注释：确保函数注释详细且准确。

```python
list1 = [1, 3, 5]
list2 = [2, 4, 6]

def merge_sorted_lists(list1, list2):
    """合并两个已排序列表，保持结果列表有序

    参数：
    list1 (list): 已排序的列表1
    list2 (list): 已排序的列表2

    返回值：
    list: 合并后的已排序列表
    """
    merged_list = []
    i, j = 0, 0

    # 使用双指针合并两个列表
    while i < len(list1) and j < len(list2):
        if list1[i] < list2[j]:
            merged_list.append(list1[i])
            i += 1
        else:
            merged_list.append(list2[j])
            j += 1

    # 添加剩余元素
    merged_list.extend(list1[i:])
    merged_list.extend(list2[j:])

    return merged_list

print(merge_sorted_lists(list1, list2))
```

### [题目 3:矩阵转置(高级)](/archives/2025030222c892e4/#题目-3-矩阵转置-高级)

- 实现矩阵转置函数，输入如[[1,2],[3,4],[5,6]]，返回[[1,3,5],[2,4,6]]

```python
def transpose_matrix(matrix):
    """
    实现矩阵转置函数

    参数：
    matrix (list): 输入的矩阵

    返回值：
    list: 转置后的矩阵
    """
    # 获取矩阵的行数和列数
    rows = len(matrix)
    cols = len(matrix[0])
    transposed = [[] for _ in range(cols)]

    for i in range(rows):
        for j in range(cols):
            transposed[j].append(matrix[i][j])
    return transposed

matrix = [[1, 2], [3, 4], [5, 6]]
print(transpose_matrix(matrix))
```

> 优化一下

- 代码可读性：使用更具描述性的变量名。
- 简化逻辑：使用列表推导式简化代码。
- 函数注释：确保函数注释详细且准确。
- 移除不必要的注释：移除不必要的注释，使代码更简洁。

```python
def transpose_matrix(matrix):
    """
    实现矩阵转置函数

    参数：
    matrix (list): 输入的矩阵

    返回值：
    list: 转置后的矩阵
    """
    # 使用列表推导式简化转置逻辑
    transposed = [[matrix[i][j] for i in range(len(matrix))] for j in range(len(matrix[0]))]
    return transposed

matrix = [[1, 2], [3, 4], [5, 6]]
print(transpose_matrix(matrix))
```

## 2. 字典

### [题目 1: 统计字符出现次数(初级)](/archives/2025030222c892e4/#题目-1-统计字符出现次数-初级)

- 编写函数统计字符串中各字符出现次数（如"hello"返回{'h':1, 'e':1, 'l':2, 'o':1}）

```python
def get_char_counts(s):
    char_counts = {}
    for char in s:
        char_counts[char] = char_counts.get(char, 0) + 1
    return char_counts
print(get_char_counts('hello'))
```

> 优化一下

- 函数注释：保持函数注释详细且准确，说明参数和返回值。
- 代码格式：保持代码格式一致，提高可读性。

```python
def get_char_counts(str):
    """
    统计字符串中各字符出现次数

    参数：
    str (str): 输入的字符串

    返回值：
    dict: 字符及其出现次数的字典
    """
    char_counts = {}
    for char in str:
        char_counts[char] = char_counts.get(char, 0) + 1
    return char_counts
print(get_char_counts('hello'))
```

### [题目 2: 合并字典(中级)](/archives/2025030222c892e4/#题目-2-合并字典-中级)

- 合并两个字典，若键冲突则保留第二个字典的值

```python
dict1 = {'a': 1, 'b': 2}
dica2 = {'b': 3, 'c': 4}
def merge_dicts(dict1, dict2):
    """
    合并两个字典，若键冲突则保留第二个字典的值

    参数：
    dict1 (dict): 第一个字典
    dict2 (dict): 第二个字典

    返回值：
    dict: 合并后的字典
    """
    merged_dict = dict1.copy()
    for key in dict2:
        merged_dict[key] = dict2[key]
    return merged_dict

print(merge_dicts(dict1, dict2))
```

> 优化一下

- 使用字典解包（Dictionary Unpacking）：Python 3.5 及以上版本支持字典解包，可以更简洁地合并字典。
- 函数注释：确保函数注释详细且准确。
- 代码格式：保持代码格式一致，提高可读性

```python
dict1 = {'a': 1, 'b': 2}
dict2 = {'b': 3, 'c': 4}

def merge_dicts(dict1, dict2):
    """
    合并两个字典，若键冲突则保留第二个字典的值

    参数：
    dict1 (dict): 第一个字典
    dict2 (dict): 第二个字典

    返回值：
    dict: 合并后的字典
    """
    return {**dict1, **dict2}

print(merge_dicts(dict1, dict2))
```

### [题目 3: 扁平化(高级)](/archives/2025030222c892e4/#题目-3-扁平化-高级)

- 实现嵌套字典的扁平化，将`{'a':1, 'b':{'c':2, 'd':{'e':3}}}`转换为`{'a':1, 'b.c':2, 'b.d.e':3}`

```python
def flatten_dict(d, parent_key='', sep='.'):
    flattened = {}
    for key, value in d.items():
        if parent_key:
            new_key = parent_key + sep + key
        else:
            new_key = key
        if isinstance(value, dict):
            flattened.update(flatten_dict(value, new_key, sep))
        else:
            flattened[new_key] = value
    return flattened

dict1 = {'a':1, 'b':{'c':2, 'd':{'e':3}}}
print(flatten_dict(dict1))
```

> 优化一下

- xxxx

```python
def flatten_dict(d, parent_key='', sep='.'):
    """
    实现嵌套字典的扁平化，将`{'a':1, 'b':{'c':2, 'd':{'e':3}}}`转换为`{'a':1, 'b.c':2, 'b.d.e':3}`

    参数：
    d (dict): 需要扁平化的嵌套字典
    parent_key (str): 父层级传递下来的key，默认为空字符串
    sep (str): 分隔符，默认为'.'

    返回值：
    dict: 扁平化后的字典
    """
    if not isinstance(d, dict):
        raise ValueError("Input must be a dictionary")

    flattened = {}
    for key, value in d.items():
        new_key = f"{parent_key}{sep}{key}" if parent_key else key
        if isinstance(value, dict):
            flattened.update(flatten_dict(value, new_key, sep))
        else:
            flattened[new_key] = value
    return flattened

dict1 = {'a': 1, 'b': {'c': 2, 'd': {'e': 3}}}
print(flatten_dict(dict1))
```

## 3. 元组和集合

### [题目 1: 集合去重(初级)](/archives/2025030222c892e4/#题目-1-集合去重-初级)

- 将列表`["cat", "dog", "cat", "bird"]`转换为集合去重，再转回排序后的列表

```python
lst = ["cat", "dog", "cat", "bird"]
def convert_to_set(lst):
    """
    将列表转换为集合并去重

    参数：
    lst (list): 输入的列表

    返回值：
    set: 去重后的集合
    """
    return set(lst)
def convert_to_list(s):
    """
    将集合转换为排序后的列表

    参数：
    s (set): 输入的集合

    返回值：
    list: 排序后的列表
    """
    return sorted(list(s))
print(convert_to_list(convert_to_set(lst)))
```

> 优化一下

- 合并函数：将 convert_to_set 和 convert_to_list 合并为一个函数 convert_to_sort_list，减少函数调用的复杂性。
- 函数注释：确保函数注释详细且准确。
- 代码格式：保持代码格式一致，提高可读性。

```python
lst = ["cat", "dog", "cat", "bird"]

def convert_to_sort_list(lst):
    """
    将列表转换为集合并去重，再转换为排序后的列表

    参数：
    lst (list): 输入的列表

    返回值：
    list: 去重并排序后的列表
    """
    return sorted(set(lst))

print(convert_to_sort_list(lst))
```

### [题目 2: 变位词判断(中级)](/archives/2025030222c892e4/#题目-2-变位词判断-中级)

- 编写函数判断两个字符串是否为变位词（字母组成相同），使用集合优化效率

```python
def is_anagram(str1, str2):
    """
    判断两个字符串是否为变位词（字母组成相同）

    参数：
    str1 (str): 第一个字符串
    str2 (str): 第二个字符串

    返回值：
    bool: 如果两个字符串是变位词则返回True，否则返回False
    """
   # 如果长度不同，直接返回 False
    if len(str1) != len(str2):
        return False

    # 使用 set 获取所有唯一的字符
    unique_chars = set(str1)

    # 统计 str1 中每个字符的出现次数
    count1 = {char: str1.count(char) for char in unique_chars}

    # 统计 str2 中每个字符的出现次数
    count2 = {char: str2.count(char) for char in unique_chars}

    # 比较两个字典中的字符出现次数是否相同
    return count1 == count2

print(is_anagram('room', 'morr'))  # 输出: False
print(is_anagram('good', 'dog'))   # 输出: False
print(is_anagram('good', 'dogs'))  # 输出: False
print(is_anagram('good', 'goad')) # 输出: False
print(is_anagram('listen', 'silent')) # 输出: True
print(is_anagram('good', 'good')) # 输出: True
```

> 优化一下

- 使用 collections.Counter：
  - Counter(str1)：统计 str1 中每个字符的出现次数。
  - Counter(str2)：统计 str2 中每个字符的出现次数。
  - Counter(str1) == Counter(str2)：比较两个计数器是否相等。
- 函数注释：保持函数注释详细且准确，说明参数和返回值。
- 代码格式：保持代码格式一致，提高可读性。

```python
from collections import Counter

def is_anagram(str1, str2):
    """
    判断两个字符串是否为变位词（字母组成相同）

    参数：
    str1 (str): 第一个字符串
    str2 (str): 第二个字符串

    返回值：
    bool: 如果两个字符串是变位词则返回True，否则返回False
    """
    return Counter(str1) == Counter(str2)

print(is_anagram('room', 'morr'))  # 输出: False
print(is_anagram('good', 'dog'))   # 输出: False
print(is_anagram('good', 'dogs'))  # 输出: False
print(is_anagram('good', 'goad')) # 输出: False
print(is_anagram('listen', 'silent')) # 输出: True
print(is_anagram('good', 'good')) # 输出: True
```

### [题目 3: 不可变元组存储实验数据(高级)](/archives/2025030222c892e4/#题目-3-不可变元组存储实验数据-高级)

- 实现多组实验数据的不可变存储结构，每个实验包含（实验名称，时间戳，温度值元组）

```python
experiments = []
def add_experiment(name, timestamp, temperature):
    """
    添加一组实验数据到不可变存储结构中，每个实验包含（实验名称，时间戳，温度值元组）

    参数：
    name (str): 实验名称
    timestamp (str): 时间戳
    temperature (tuple): 温度值元组

    返回值：
    None
    """
    experiment = (name, timestamp, temperature)
    experiments.append(experiment)

add_experiment('实验1', '2023-07-01', (25, 30, 35))
add_experiment('实验2', '2023-07-02', (28, 32, 36))
print(experiments)
```

> 优化一下

- 使用类来管理实验数据：
  - 使用一个类来封装实验数据的存储和管理，避免使用全局变量。
- 函数设计：
  - 将 add_experiment 方法作为类的方法，而不是直接操作全局变量。
- 返回值：
  - 返回添加的实验数据，提高函数的灵活性和可测试性。

```python
class ExperimentManager:
    def __init__(self):
        """
        初始化实验管理器，存储实验数据的列表
        """
        self.experiments = []

    def add_experiment(self, name, timestamp, temperature):
        """
        添加一组实验数据到不可变存储结构中，每个实验包含（实验名称，时间戳，温度值元组）

        参数：
        name (str): 实验名称
        timestamp (str): 时间戳
        temperature (tuple): 温度值元组

        返回值：
        tuple: 添加的实验数据元组
        """
        experiment = (name, timestamp, temperature)
        self.experiments.append(experiment)
        return experiment

    def get_experiments(self):
        """
        获取所有实验数据

        返回值：
        list: 包含所有实验数据的列表
        """
        return self.experiments

# 创建实验管理器实例
experiment_manager = ExperimentManager()

# 添加实验数据
experiment1 = experiment_manager.add_experiment('实验1', '2023-07-01', (25, 30, 35))
experiment2 = experiment_manager.add_experiment('实验2', '2023-07-02', (28, 32, 36))

# 打印所有实验数据
print(experiment_manager.get_experiments())
```

## 1. 文件读写

### [题目 1: 统计文件的行数(初级)](/archives/20250303d948b0f0/#题目-1-统计文件的行数-初级)

- 编写函数`count_lines(filename)`，统计指定文本文件的行数

```python
def count_lines(filename):
    with open(filename, 'r') as f:
        return sum(1 for _ in f)
```

> 优化一下

- 参数验证：确保传入的 filename 参数是一个有效的字符串，并且文件存在。
- 日志记录：使用日志记录来代替简单的 print 语句，以便更好地管理和分析日志信息。
- 代码注释：增加更多的注释，以提高代码的可读性和可维护性。
- 异常处理：增加更多的异常处理，以应对各种可能的错误情况。
- 返回值：在函数成功执行后返回一个有意义的值，例如文件的行数。
- 性能优化：确保每次读取的块大小合理，避免内存占用过高。

```python
import logging
import os

# 配置日志记录
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def count_lines(filename):
    """
    统计指定文本文件的行数。

    参数:
    filename (str): 文件路径。

    返回:
    int: 文件的行数。

    异常:
    ValueError: 如果 filename 不是字符串。
    FileNotFoundError: 如果文件不存在。
    PermissionError: 如果文件读取权限不足。
    """
    # 验证参数是否为字符串
    if not isinstance(filename, str):
        raise ValueError("filename 参数必须是一个字符串")

    # 验证文件是否存在且为文件
    if not os.path.isfile(filename):
        raise FileNotFoundError(f"文件 '{filename}' 不存在或不是文件")

    try:
        with open(filename, 'r', encoding='utf-8') as f:
            line_count = sum(1 for _ in f)
        logging.info(f"文件 '{filename}' 的行数是 {line_count}")
        return line_count
    except PermissionError as e:
        logging.error(f"权限错误：无法读取文件 '{filename}'：{e}")
        raise PermissionError(f"权限错误：无法读取文件 '{filename}'：{e}")
    except Exception as e:
        logging.error(f"未知错误：无法读取文件 '{filename}'：{e}")
        raise Exception(f"未知错误：无法读取文件 '{filename}'：{e}")

# 使用示例
if __name__ == "__main__":
    try:
        result = count_lines("example.txt")
        print(f"文件 'example.txt' 的行数是: {result}")
    except ValueError as e:
        print(f"参数错误：{e}")
    except FileNotFoundError as e:
        print(f"操作失败：{e}")
    except PermissionError as e:
        print(f"权限错误：{e}")
    except Exception as e:
        print(f"未知错误：{e}")
```

### [题目 2: 合并文本文件(中级)](/archives/20250303d948b0f0/#题目-2-合并文本文件-中级)

- 创建函数`merge_files(files, output)`，将多个文本文件内容合并到新文件中

```python
def merge_files(files, output):
    """将多个文本文件的内容合并到新文件中。

    Args:
        files (list): 需要合并的文件路径列表。
        output (str): 合并后的输出文件路径。
    """
    with open(output, 'w', encoding='utf-8') as outfile:
        for filename in files:
            with open(filename, 'r', encoding='utf-8') as infile:
                outfile.write(infile.read())
                outfile.write("\n")  # 可选：在文件内容间添加空行分隔
```

> 优化一下

- 参数验证：确保传入的 files 参数是一个列表，并且列表中的每个元素都是有效的文件路径。
- 日志记录：使用日志记录来代替简单的 print 语句，以便更好地管理和分析日志信息。
- 代码注释：增加更多的注释，以提高代码的可读性和可维护性。
- 异常处理：增加更多的异常处理，以应对各种可能的错误情况。
- 性能优化：确保每次读取和写入的块大小合理，避免内存占用过高。
- 返回值：在函数成功执行后返回一个有意义的值，例如目标文件路径。

```python
import logging
import os

# 配置日志记录
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def merge_files(files, output):
    """
    将多个文本文件的内容合并到新文件中。

    参数:
    files (list): 需要合并的文件路径列表。
    output (str): 合并后的输出文件路径。

    返回:
    str: 成功合并后的目标文件路径

    异常:
    ValueError: 如果 files 不是列表或列表中的元素不是字符串。
    FileNotFoundError: 如果源文件不存在。
    PermissionError: 如果文件读取或写入权限不足。
    """
    # 验证参数是否为列表
    if not isinstance(files, list):
        raise ValueError("files 参数必须是一个列表")

    # 验证列表中的每个元素是否为字符串
    for filename in files:
        if not isinstance(filename, str):
            raise ValueError("files 列表中的每个元素必须是字符串")

    # 验证每个文件是否存在且为文件
    for filename in files:
        if not os.path.isfile(filename):
            raise FileNotFoundError(f"源文件 '{filename}' 不存在或不是文件")

    try:
        with open(output, 'w', encoding='utf-8') as outfile:
            for filename in files:
                with open(filename, 'r', encoding='utf-8') as infile:
                    outfile.write(infile.read())
                    outfile.write("\n")  # 可选：在文件内容间添加空行分隔
        logging.info(f"文件合并成功：从 {files} 到 {output}")
        return output
    except PermissionError as e:
        logging.error(f"权限错误：无法读取源文件或写入目标文件 '{output}'：{e}")
        raise PermissionError(f"权限错误：无法读取源文件或写入目标文件 '{output}'：{e}")
    except Exception as e:
        logging.error(f"未知错误：无法合并文件 {files} 到 '{output}'：{e}")
        raise Exception(f"未知错误：无法合并文件 {files} 到 '{output}'：{e}")

# 使用示例
if __name__ == "__main__":
    try:
        result = merge_files(["file1.txt", "file2.txt"], "merged_file.txt")
        print(f"文件合并成功，目标路径为: {result}")
    except ValueError as e:
        print(f"参数错误：{e}")
    except FileNotFoundError as e:
        print(f"操作失败：{e}")
    except PermissionError as e:
        print(f"权限错误：{e}")
    except Exception as e:
        print(f"未知错误：{e}")
```

### [题目 3: 文件内容加密保存(高级)](/archives/20250303d948b0f0/#题目-3-文件内容加密保存-高级)

- 实现`encrypted_copy(src, dst, key)`，通过异或运算对文件内容进行加密后写入新文件（处理二进制模式）

```python
def encrypted_copy(src, dst, key):
    """使用异或运算加密二进制文件并保存到新路径

    Args:
        src (str): 源文件路径
        dst (str): 目标文件路径
        key (str/bytes): 加密密钥（字符串或字节序列）

    Raises:
        ValueError: 密钥为空时抛出异常
    """
    # 将密钥统一转换为字节序列
    if isinstance(key, str):
        key_bytes = key.encode("utf-8")
    else:
        key_bytes = key

    if not key_bytes:
        raise ValueError("密钥不能为空")

    key_length = len(key_bytes)

    with open(src, "rb") as f_in, open(dst, "wb") as f_out:
        global_index = 0  # 跟踪全局字节位置
        while True:
            chunk = f_in.read(4096)  # 每次读取4KB的块
            if not chunk:
                break
            # 对每个字节进行异或加密
            encrypted_chunk = bytes(
                byte ^ key_bytes[(global_index + i) % key_length]
                for i, byte in enumerate(chunk)
            )
            f_out.write(encrypted_chunk)
            global_index += len(chunk)  # 更新全局索引
```

> 优化一下

- 参数验证：确保传入的路径参数是有效的字符串，并且文件路径存在。
- 日志记录：使用日志记录来代替简单的 print 语句，以便更好地管理和分析日志信息。
- 代码注释：增加更多的注释，以提高代码的可读性和可维护性。
- 异常处理：增加更多的异常处理，以应对各种可能的错误情况。
- 性能优化：确保每次读取和写入的块大小合理，避免内存占用过高。
- 返回值：在函数成功执行后返回一个有意义的值，例如目标文件路径。

```python
import logging
import os

# 配置日志记录
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def encrypted_copy(src, dst, key):
    """
    使用异或运算加密二进制文件并保存到新路径

    参数:
    src (str): 源文件路径
    dst (str): 目标文件路径
    key (str/bytes): 加密密钥（字符串或字节序列）

    返回:
    str: 成功加密后的目标文件路径

    异常:
    ValueError: 密钥为空时抛出异常
    FileNotFoundError: 源文件不存在时抛出异常
    PermissionError: 文件读取或写入权限不足时抛出异常
    TypeError: 参数类型不正确时抛出异常
    """
    # 验证参数是否为字符串
    if not isinstance(src, str) or not isinstance(dst, str):
        raise TypeError("源文件路径和目标文件路径必须是字符串")

    # 验证源文件是否存在且为文件
    if not os.path.isfile(src):
        raise FileNotFoundError(f"源文件 '{src}' 不存在或不是文件")

    # 将密钥统一转换为字节序列
    if isinstance(key, str):
        key_bytes = key.encode("utf-8")
    elif isinstance(key, bytes):
        key_bytes = key
    else:
        raise TypeError("密钥必须是字符串或字节序列")

    if not key_bytes:
        raise ValueError("密钥不能为空")

    key_length = len(key_bytes)

    try:
        with open(src, "rb") as f_in, open(dst, "wb") as f_out:
            global_index = 0  # 跟踪全局字节位置
            while True:
                chunk = f_in.read(4096)  # 每次读取4KB的块
                if not chunk:
                    break
                # 对每个字节进行异或加密
                encrypted_chunk = bytes(
                    byte ^ key_bytes[(global_index + i) % key_length]
                    for i, byte in enumerate(chunk)
                )
                f_out.write(encrypted_chunk)
                global_index += len(chunk)  # 更新全局索引
            logging.info(f"文件加密成功：从 '{src}' 到 '{dst}'")
            return dst
    except PermissionError as e:
        logging.error(f"权限错误：无法读取源文件 '{src}' 或写入目标文件 '{dst}'：{e}")
        raise PermissionError(f"权限错误：无法读取源文件 '{src}' 或写入目标文件 '{dst}'：{e}")
    except Exception as e:
        logging.error(f"未知错误：无法加密文件 '{src}' 到 '{dst}'：{e}")
        raise Exception(f"未知错误：无法加密文件 '{src}' 到 '{dst}'：{e}")

# 使用示例
if __name__ == "__main__":
    try:
        result = encrypted_copy("source.bin", "encrypted.bin", "mysecretkey")
        print(f"文件加密成功，目标路径为: {result}")
    except FileNotFoundError as e:
        print(f"操作失败：{e}")
    except PermissionError as e:
        print(f"权限错误：{e}")
    except ValueError as e:
        print(f"参数错误：{e}")
    except TypeError as e:
        print(f"类型错误：{e}")
    except Exception as e:
        print(f"未知错误：{e}")
```

## 2. 异常处理

### [题目 1: 读取用户年龄函数(初级)](/archives/20250303d948b0f0/#题目-1-读取用户年龄函数-初级)

- 编写读取用户年龄的函数，处理非数字输入异常

```python
def get_valid_age():
    """循环获取用户输入的年龄，确保输入为有效整数"""
    while True:
        try:
            age = int(input("请输入年龄（整数）："))
            return age  # 输入有效时返回年龄
        except ValueError:
            print("⚠️ 输入无效，请确保输入的是整数（如 25）")

# 使用示例
if __name__ == "__main__":
    age = get_valid_age()
    print(f"您输入的年龄是：{age} 岁")
```

> 优化一下

- 输入范围验证：确保输入的年龄在合理的范围内（例如，0 到 120 岁）。
- 日志记录：使用日志记录来代替简单的 print 语句，以便更好地管理和分析日志信息。
- 代码注释：增加更多的注释，以提高代码的可读性和可维护性。
- 异常处理：增加更多的异常处理，以应对各种可能的错误情况。
- 返回值：在函数成功执行后返回一个有意义的值，例如有效的年龄。
- 用户提示：在用户输入无效时，提供更详细的提示信息。

```python
import logging

# 配置日志记录
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def get_valid_age():
    """
    循环获取用户输入的年龄，确保输入为有效整数，并在合理范围内（0 到 120 岁）。

    返回:
    int: 用户输入的有效年龄

    异常:
    ValueError: 如果输入的年龄不在合理范围内
    """
    while True:
        try:
            age_input = input("请输入年龄（整数，0 到 120 岁）：").strip()
            age = int(age_input)

            # 检查年龄是否在合理范围内
            if 0 <= age <= 120:
                logging.info(f"用户输入的有效年龄: {age}")
                return age
            else:
                logging.warning(f"输入的年龄 {age} 不在合理范围内（0 到 120 岁）")
                print("⚠️ 输入的年龄不在合理范围内（0 到 120 岁），请重新输入。")
        except ValueError:
            logging.warning(f"输入无效: {age_input} 不是有效的整数")
            print("⚠️ 输入无效，请确保输入的是整数（如 25）。")

# 使用示例
if __name__ == "__main__":
    try:
        age = get_valid_age()
        print(f"您输入的年龄是：{age} 岁")
    except Exception as e:
        print(f"发生错误: {e}")
```

### [题目 2: 文件复制函数(中级)](/archives/20250303d948b0f0/#题目-2-文件复制函数-中级)

- 创建文件复制函数，处理源文件不存在和目标路径无权限的情况

```python
import os
import shutil

def copy_file(src_path, dst_path):
    """安全复制文件并处理常见异常

    Args:
        src_path (str): 源文件路径
        dst_path (str): 目标文件路径

    Raises:
        FileNotFoundError: 源文件不存在时抛出
        PermissionError: 目录创建或文件写入权限不足时抛出
        IsADirectoryError: 目标路径是目录时抛出
    """
    # 验证源文件存在且为文件
    if not os.path.isfile(src_path):
        raise FileNotFoundError(f"源文件 '{src_path}' 不存在或不是文件")

    # 创建目标目录（自动处理路径不存在的情况）
    dst_dir = os.path.dirname(dst_path)
    if dst_dir:  # 避免空路径情况
        os.makedirs(dst_dir, exist_ok=True)  # 自动处理目录已存在的情况

    # 执行文件复制操作
    shutil.copy2(src_path, dst_path)  # 保留文件元数据

# 使用示例
if __name__ == "__main__":
    try:
        copy_file("source.txt", "backup/copy.txt")
        print("文件复制成功")
    except FileNotFoundError as e:
        print(f"操作失败：{e}")
    except PermissionError as e:
        print(f"权限错误：{e}")
    except IsADirectoryError as e:
        print(f"路径错误：目标位置是目录")
    except Exception as e:
        print(f"未知错误：{e}")
```

> 优化一下

- 增强异常处理：增加更多的异常处理，以应对各种可能的错误情况，例如目标文件已存在的情况。
- 日志记录：使用日志记录来代替简单的 print 语句，以便更好地管理和分析日志信息。
- 代码注释：增加更多的注释，以提高代码的可读性和可维护性。
- 参数验证：确保传入的路径参数是有效的字符串。
- 返回值：在函数成功执行后返回一个有意义的值，例如目标文件路径。

```python
import os
import shutil
import logging

# 配置日志记录
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def copy_file(src_path, dst_path):
    """
    安全复制文件并处理常见异常

    参数:
    src_path (str): 源文件路径
    dst_path (str): 目标文件路径

    返回:
    str: 成功复制后的目标文件路径

    异常:
    FileNotFoundError: 源文件不存在时抛出
    PermissionError: 目录创建或文件写入权限不足时抛出
    IsADirectoryError: 目标路径是目录时抛出
    FileExistsError: 目标文件已存在时抛出
    ValueError: 参数不是有效的字符串时抛出
    """
    # 验证参数是否为字符串
    if not isinstance(src_path, str) or not isinstance(dst_path, str):
        raise ValueError("源文件路径和目标文件路径必须是字符串")

    # 验证源文件存在且为文件
    if not os.path.isfile(src_path):
        raise FileNotFoundError(f"源文件 '{src_path}' 不存在或不是文件")

    # 创建目标目录（自动处理路径不存在的情况）
    dst_dir = os.path.dirname(dst_path)
    if dst_dir:  # 避免空路径情况
        try:
            os.makedirs(dst_dir, exist_ok=True)  # 自动处理目录已存在的情况
        except PermissionError as e:
            raise PermissionError(f"无法创建目标目录 '{dst_dir}'：{e}")

    # 检查目标文件是否已存在
    if os.path.exists(dst_path):
        raise FileExistsError(f"目标文件 '{dst_path}' 已存在")

    # 执行文件复制操作
    try:
        shutil.copy2(src_path, dst_path)  # 保留文件元数据
        logging.info(f"文件复制成功：从 '{src_path}' 到 '{dst_path}'")
        return dst_path
    except PermissionError as e:
        logging.error(f"权限错误：无法复制文件 '{src_path}' 到 '{dst_path}'：{e}")
        raise PermissionError(f"权限错误：无法复制文件 '{src_path}' 到 '{dst_path}'：{e}")
    except Exception as e:
        logging.error(f"未知错误：无法复制文件 '{src_path}' 到 '{dst_path}'：{e}")
        raise Exception(f"未知错误：无法复制文件 '{src_path}' 到 '{dst_path}'：{e}")

# 使用示例
if __name__ == "__main__":
    try:
        result = copy_file("source.txt", "backup/copy.txt")
        print(f"文件复制成功，目标路径为: {result}")
    except FileNotFoundError as e:
        print(f"操作失败：{e}")
    except PermissionError as e:
        print(f"权限错误：{e}")
    except IsADirectoryError as e:
        print(f"路径错误：目标位置是目录")
    except FileExistsError as e:
        print(f"文件已存在：{e}")
    except ValueError as e:
        print(f"参数错误：{e}")
    except Exception as e:
        print(f"未知错误：{e}")
```

### [题目 3: 用户注册验证(高级)](/archives/20250303d948b0f0/#题目-3-用户注册验证-高级)

- 实现带有自定义异常类（`InvalidEmailError`）的用户注册验证系统

```python
import re

# 定义自定义异常类
class InvalidEmailError(Exception):
    """自定义异常类，用于表示无效的电子邮件地址"""
    def __init__(self, message="无效的电子邮件地址"):
        self.message = message
        super().__init__(self.message)

# 验证电子邮件地址的正则表达式
EMAIL_REGEX = re.compile(
    r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)"
)

def validate_email(email):
    """
    验证电子邮件地址的有效性

    参数:
    email (str): 电子邮件地址

    异常:
    InvalidEmailError: 如果电子邮件地址无效
    """
    if not EMAIL_REGEX.match(email):
        raise InvalidEmailError(f"无效的电子邮件地址: {email}")

def register_user(username, email):
    """
    注册用户

    参数:
    username (str): 用户名
    email (str): 电子邮件地址

    异常:
    InvalidEmailError: 如果电子邮件地址无效
    """
    try:
        validate_email(email)
        print(f"用户 {username} 注册成功，电子邮件地址为 {email}")
    except InvalidEmailError as e:
        print(e)

# 主程序
if __name__ == "__main__":
    # 测试有效的电子邮件地址
    register_user("Alice", "alice@example.com")

    # 测试无效的电子邮件地址
    register_user("Bob", "bob@example")
```

> 优化一下

- 增强电子邮件验证：使用更严格的正则表达式来验证电子邮件地址。
- 用户输入验证：确保用户名和电子邮件地址不为空。
- 日志记录：使用日志记录来代替简单的 print 语句，以便更好地管理和分析日志信息。
- 异常处理：增加更多的异常处理，以应对各种可能的错误情况。
- 代码注释：增加更多的注释，以提高代码的可读性和可维护性。

```python
import re
import logging

# 配置日志记录
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# 定义自定义异常类
class InvalidEmailError(Exception):
    """自定义异常类，用于表示无效的电子邮件地址"""
    def __init__(self, message="无效的电子邮件地址"):
        self.message = message
        super().__init__(self.message)

# 验证电子邮件地址的正则表达式
EMAIL_REGEX = re.compile(
    r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)"
)

def validate_email(email):
    """
    验证电子邮件地址的有效性

    参数:
    email (str): 电子邮件地址

    异常:
    InvalidEmailError: 如果电子邮件地址无效
    """
    if not email:
        raise InvalidEmailError("电子邮件地址不能为空")
    if not EMAIL_REGEX.match(email):
        raise InvalidEmailError(f"无效的电子邮件地址: {email}")

def validate_username(username):
    """
    验证用户名的有效性

    参数:
    username (str): 用户名

    异常:
    ValueError: 如果用户名无效
    """
    if not username:
        raise ValueError("用户名不能为空")

def register_user(username, email):
    """
    注册用户

    参数:
    username (str): 用户名
    email (str): 电子邮件地址

    异常:
    InvalidEmailError: 如果电子邮件地址无效
    ValueError: 如果用户名无效
    """
    try:
        validate_username(username)
        validate_email(email)
        logging.info(f"用户 {username} 注册成功，电子邮件地址为 {email}")
    except InvalidEmailError as e:
        logging.error(e)
    except ValueError as e:
        logging.error(e)

# 主程序
if __name__ == "__main__":
    # 测试有效的电子邮件地址
    register_user("Alice", "alice@example.com")

    # 测试无效的电子邮件地址
    register_user("Bob", "bob@example")

    # 测试空用户名
    register_user("", "bob@example.com")

    # 测试空电子邮件地址
    register_user("Bob", "")
```

## 1. 导入模块（`import`）

### [题目 1: 生成随机整数(初级)](/archives/2025030562adce42/#题目-1-生成随机整数-初级)

- 编写脚本导入`random`模块，生成 10 个 1-100 的随机整数

```python
import random

# 生成 10 个随机整数
random_numbers = [random.randint(1, 100) for _ in range(10)]

# 打印结果（可选两种格式）
print("生成的随机数:", random_numbers)        # 列表格式输出
# print("生成的随机数:", *random_numbers)     # 展开平铺输出
```

> 优化一下

- 函数封装：将生成随机整数的逻辑封装到一个函数 generate_random_numbers 中，提高代码的可重用性和可读性。
- 参数化：允许用户指定生成随机整数的数量、起始范围和结束范围，使函数更加灵活。
- 文档字符串：为函数添加了详细的文档字符串，说明函数的作用、参数和返回值，便于他人理解和使用。
- 注释：增加了注释，解释代码的主要部分，提高代码的可读性。

```python
import random

def generate_random_numbers(count=10, start=1, end=100):
    """
    生成指定数量的随机整数。

    参数:
    count (int): 生成的随机整数数量，默认为 10。
    start (int): 随机整数的起始范围，默认为 1。
    end (int): 随机整数的结束范围，默认为 100。

    返回:
    list: 包含生成的随机整数的列表。
    """
    return [random.randint(start, end) for _ in range(count)]

# 生成 10 个随机整数
random_numbers = generate_random_numbers()

# 打印结果（可选两种格式）
print("生成的随机数:", random_numbers)        # 列表格式输出
# print("生成的随机数:", *random_numbers)     # 展开平铺输出
```

### [题目 2: 导入并使用函数(中级)](/archives/2025030562adce42/#题目-2-导入并使用函数-中级)

- 创建自定义模块`geometry.py`，包含计算圆面积的函数`circle_area(r)`，在主程序中导入并使用

```python
# geometry.py
import math

def circle_area(r):
    """计算圆的面积

    Args:
        r (float/int): 圆的半径（必须为非负数）

    Returns:
        float: 圆的面积

    Raises:
        ValueError: 当半径 r 为负数时触发异常
    """
    if r < 0:
        raise ValueError("半径不能为负数")
    return math.pi * (r ** 2)
```

```python
# main.py
from geometry import circle_area

# 计算半径为5的圆面积
radius = 5
area = circle_area(radius)
print(f"半径为 {radius} 的圆面积: {area:.2f}")

# 尝试非法输入（负数半径）
try:
    circle_area(-3)
except ValueError as e:
    print("错误捕获:", e)
```

> 优化一下

- 类型检查：
  - 在 circle_area 函数中添加了类型检查，确保传入的半径是数字类型（整数或浮点数），否则抛出 TypeError。
- 函数封装：
  - 在 main.py 中将计算和打印圆面积的逻辑封装到 calculate_and_print_circle_area 函数中，提高代码的可重用性和可读性。
- 异常处理：
  - 在 main.py 中增加了对 TypeError 的捕获，确保程序在用户输入非数字类型的半径时不会崩溃，并给出友好的错误提示。
- 代码注释：
  - 增加了更多的注释，解释代码的主要部分，提高代码的可读性和可维护性。
- 文档字符串：
  - 为 circle_area 函数添加了详细的文档字符串，说明函数的作用、参数、返回值和可能抛出的异常，便于他人理解和使用。

```python
# geometry.py
import math

def circle_area(r):
    """
    计算圆的面积。

    参数:
    r (float/int): 圆的半径（必须为非负数）。

    返回:
    float: 圆的面积。

    异常:
    ValueError: 如果半径 r 为负数。
    TypeError: 如果半径 r 不是数字类型。
    """
    if not isinstance(r, (int, float)):
        raise TypeError("半径必须是数字类型")
    if r < 0:
        raise ValueError("半径不能为负数")
    return math.pi * (r ** 2)
```

main.py

```python
# main.py
from geometry import circle_area

def calculate_and_print_circle_area(radius):
    """
    计算并打印给定半径的圆的面积。

    参数:
    radius (float/int): 圆的半径。
    """
    try:
        area = circle_area(radius)
        print(f"半径为 {radius} 的圆面积: {area:.2f}")
    except ValueError as e:
        print(f"值错误: {e}")
    except TypeError as e:
        print(f"类型错误: {e}")

# 计算半径为5的圆面积
calculate_and_print_circle_area(5)

# 尝试非法输入（负数半径）
calculate_and_print_circle_area(-3)

# 尝试非法输入（非数字类型）
calculate_and_print_circle_area("abc")
```

### [题目 3: 动态更新模块代码(高级)](/archives/2025030562adce42/#题目-3-动态更新模块代码-高级)

- 实现模块热重载功能：通过`importlib.reload()`动态更新正在运行的模块代码

```python
# hot_reload_demo.py
import importlib
import sys
import time
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

# ---------------------------
# 热重载核心控制器
# ---------------------------
class HotReloader(FileSystemEventHandler):
    def __init__(self, module_names):
        self.module_names = module_names
        self.last_reload = time.time()

    def on_modified(self, event):
        """文件修改事件处理器"""
        if time.time() - self.last_reload < 1:  # 防抖处理
            return

        if event.src_path.endswith('.py'):
            print(f"\n检测到文件变动: {event.src_path}")
            self.reload_modules()
            self.last_reload = time.time()

    def reload_modules(self):
        """执行模块重载"""
        for name in self.module_names:
            if name in sys.modules:
                print(f"重新加载模块: {name}")
                module = sys.modules[name]
                importlib.reload(module)
                self.update_references(module)

    def update_references(self, module):
        """更新全局引用（演示动态替换函数和类）"""
        # 如果模块中存在需要热替换的函数
        if hasattr(module, 'dynamic_function'):
            globals()['dynamic_function'] = module.dynamic_function

        # 如果模块中存在需要热替换的类
        if hasattr(module, 'DynamicClass'):
            # 替换类定义
            globals()['DynamicClass'] = module.DynamicClass
            # 更新现有实例的方法（高级用法）
            for obj in list(globals().values()):
                if isinstance(obj, module.DynamicClass):
                    obj.__class__ = module.DynamicClass

# ---------------------------
# 主程序
# ---------------------------
def start_hot_reload(modules_to_watch):
    # 初始化监控器
    event_handler = HotReloader(modules_to_watch)
    observer = Observer()
    observer.schedule(event_handler, path='.', recursive=False)
    observer.start()

    try:
        print("热重载监控已启动，修改文件后会自动更新...")
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()

if __name__ == "__main__":
    # 初始加载目标模块
    import demo_module  # 假设这是需要热重载的模块

    # 启动热重载监控
    start_hot_reload(['demo_module'])
```

```Python
# demo_module.py
version = "1.0"

def dynamic_function():
    return "原始函数"

class DynamicClass:
    def __init__(self):
        self.data = "初始数据"

    def show(self):
        print(f"Class version: {version}, Data: {self.data}")
```

> 优化一下

- XXX

```python

```

## 2. 常用标准库（`os`、`sys`、`math`、`random`）

### [题目 1: 二次方程求根公式(初级)](/archives/2025030562adce42/#题目-1-二次方程求根公式-初级)

- 使用`math`模块实现二次方程求根公式

```python
import math

def quadratic_roots(a: float, b: float, c: float) -> tuple:
    """计算二次方程 ax² + bx + c = 0 的根

    Args:
        a: 二次项系数（不能为0）
        b: 一次项系数
        c: 常数项

    Returns:
        tuple: 包含两个根的元组，可能为实数或复数

    Raises:
        ValueError: 当 a=0 时抛出（非二次方程）
    """
    if a == 0:
        raise ValueError("二次项系数 a 不能为零")

    discriminant = b**2 - 4*a*c  # 计算判别式

    # 根据判别式类型分情况处理
    if discriminant >= 0:
        sqrt_d = math.sqrt(discriminant)
        root1 = (-b + sqrt_d) / (2*a)
        root2 = (-b - sqrt_d) / (2*a)
    else:
        # 处理复数根
        sqrt_d = math.sqrt(-discriminant)
        real_part = -b / (2*a)
        imag_part = sqrt_d / (2*a)
        root1 = complex(real_part, imag_part)
        root2 = complex(real_part, -imag_part)

    return (root1, root2)

# 使用示例
if __name__ == "__main__":
    # 案例1：两个实数根（x²-5x+6=0）
    print(quadratic_roots(1, -5, 6))    # 输出 (3.0, 2.0)

    # 案例2：重复根（x²+2x+1=0）
    print(quadratic_roots(1, 2, 1))     # 输出 (-1.0, -1.0)

    # 案例3：复数根（x²+x+1=0）
    print(quadratic_roots(1, 1, 1))     # 输出 ((-0.5+0.866j), (-0.5-0.866j))

    # 非法输入测试
    try:
        quadratic_roots(0, 2, 3)
    except ValueError as e:
        print(e)  # 输出 "二次项系数 a 不能为零"
```

> 优化一下

- XXX

```python

```

### [题目 2: 当前目录代码行数(中级)](/archives/2025030562adce42/#题目-2-当前目录代码行数-中级)

- 编写脚本用`os`遍历当前目录，统计所有.py 文件的行数

```python
import os

def count_lines_in_py_files(directory):
    """
    统计指定目录下所有 .py 文件的行数。

    参数:
    directory (str): 要遍历的目录路径。

    返回:
    int: 所有 .py 文件的总行数。
    """
    total_lines = 0

    # 遍历目录及其子目录中的所有文件
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.py'):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        total_lines += sum(1 for _ in f)
                except Exception as e:
                    print(f"无法读取文件 {file_path}: {e}")

    return total_lines

# 获取当前目录
current_directory = os.getcwd()

# 统计当前目录下所有 .py 文件的行数
total_lines = count_lines_in_py_files(current_directory)

# 打印结果
print(f"当前目录下所有 .py 文件的总行数是: {total_lines}")
```

> 优化一下

- XXX

```python

```

### [题目 3: 文本过滤器(高级)](/archives/2025030562adce42/#题目-3-文本过滤器-高级)

- 利用`sys.stdin`实现一个支持管道操作的文本过滤器（如将输入转为大写）

```python
import sys

def to_uppercase():
    """
    从标准输入读取文本，并将其转换为大写后输出到标准输出。
    """
    try:
        for line in sys.stdin:
            # 去除行末的换行符，并转换为大写
            print(line.strip().upper())
    except Exception as e:
        print(f"发生错误: {e}", file=sys.stderr)

if __name__ == "__main__":
    to_uppercase()
```

> 优化一下

- XXX

```python

```

## 3. 安装和使用第三方库（`pip`）

### [题目 1: 图片转为灰度图(初级)](/archives/2025030562adce42/#题目-1-图片转为灰度图-初级)

- 安装`pillow`库并编写脚本将图片转为灰度图

```python
from PIL import Image
import sys
import logging

# 配置日志记录
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def convert_to_grayscale(input_path, output_path):
    """
    将指定路径的图片转换为灰度图并保存到指定路径。

    参数:
    input_path (str): 输入图片的路径。
    output_path (str): 输出灰度图的路径。

    异常:
    ValueError: 如果输入路径不是有效的图片文件。
    FileNotFoundError: 如果输入文件不存在。
    PermissionError: 如果文件读取或写入权限不足。
    """
    try:
        # 打开输入图片
        with Image.open(input_path) as img:
            # 将图片转换为灰度图
            grayscale_img = img.convert("L")
            # 保存灰度图到输出路径
            grayscale_img.save(output_path)
            logging.info(f"图片已成功转换为灰度图：从 '{input_path}' 到 '{output_path}'")
    except FileNotFoundError as e:
        logging.error(f"文件未找到：'{input_path}' 不存在")
        raise FileNotFoundError(f"文件未找到：'{input_path}' 不存在")
    except PermissionError as e:
        logging.error(f"权限错误：无法读取文件 '{input_path}' 或写入文件 '{output_path}'")
        raise PermissionError(f"权限错误：无法读取文件 '{input_path}' 或写入文件 '{output_path}'")
    except ValueError as e:
        logging.error(f"值错误：'{input_path}' 不是有效的图片文件")
        raise ValueError(f"值错误：'{input_path}' 不是有效的图片文件")
    except Exception as e:
        logging.error(f"未知错误：无法转换图片 '{input_path}'：{e}")
        raise Exception(f"未知错误：无法转换图片 '{input_path}'：{e}")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("使用方法: python script.py <输入图片路径> <输出图片路径>")
        sys.exit(1)

    input_path = sys.argv[1]
    output_path = sys.argv[2]

    try:
        convert_to_grayscale(input_path, output_path)
        print(f"图片已成功转换为灰度图，保存到: {output_path}")
    except Exception as e:
        print(f"操作失败：{e}")
```

> 优化一下

- XXX

```python

```

### [题目 2: 项目依赖(中级)](/archives/2025030562adce42/#题目-2-项目依赖-中级)

- 创建`requirements.txt`文件管理项目依赖，包含`flask>=2.0`和`sqlalchemy<1.4`

```python

```

> 优化一下

- XXX

```python

```

### [题目 3: 模块打包上传(高级)](/archives/2025030562adce42/#题目-3-模块打包上传-高级)

- 将自己编写的 Python 模块打包上传至 PyPI，并通过`pip`安装测试

```python

```

> 优化一下

- XXX

```python

```
