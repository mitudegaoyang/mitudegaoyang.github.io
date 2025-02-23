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
