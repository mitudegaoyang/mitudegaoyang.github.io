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

```

> 优化一下

- XXX

```python

```

### [题目 2: 计算平均值(中级)](/archives/20250228c8f562d1/#题目-2-计算平均值-中级)

- 编写支持可变数量参数的函数，计算任意个数数字的平均值

```python

```

> 优化一下

- XXX

```python

```

### [题目 3: 生成斐波那契数列(高级)](/archives/20250228c8f562d1/#题目-3-生成斐波那契数列-高级)

- 实现记忆化（memoization）的斐波那契数列生成函数，要求通过装饰器实现缓存

```python

```

> 优化一下

- XXX

```python

```

## 2. 函数参数与返回值

### [题目 1 拼接字符串(初级)](/archives/20250228c8f562d1/#题目-1-拼接字符串-初级)

- 编写函数`greet(name, greeting="Hello")`，返回拼接的问候字符串（如`"Hello, Alice!"`）

```python

```

> 优化一下

- XXX

```python

```

### [题目 2 任意参数求和(中级)](/archives/20250228c8f562d1/#题目-2-任意参数求和-中级)

- 实现函数`sum_numbers(*args)`，接受任意数量的数字参数并返回总和，若无参数返回 0

```python

```

> 优化一下

- XXX

```python

```

### [题目 3 任意参数求积(高级)](/archives/20250228c8f562d1/#题目-3-任意参数求积-高级)

- 设计函数`apply_operation(func, *args, **kwargs)`，接受一个函数和其参数，执行后返回结果（如调用`apply_operation(pow, 2, 3)`返回 8）

```python

```

> 优化一下

- XXX

```python

```

## 3. 局部变量与全局变量

### [题目 1 平方和(初级)](/archives/20250228c8f562d1/#题目-1-平方和-初级)

- 编写函数`sum_squares(a, b)`，计算 a² + b²，要求使用局部变量存储中间结果

```python

```

> 优化一下

- XXX

```python

```

### [题目 2 打印消息(中级)](/archives/20250228c8f562d1/#题目-2-打印消息-中级)

- 创建全局变量`LOG_LEVEL="INFO"`，编写函数`log(message)`，仅在 LOG_LEVEL 为"DEBUG"时打印消息

```python

```

> 优化一下

- XXX

```python

```

### [题目 3 闭包保存 n(高级)](/archives/20250228c8f562d1/#题目-3-闭包保存-n-高级)

- 实现函数`create_multiplier(n)`，返回一个新函数，该函数能将输入参数乘以 n（使用闭包保存 n 的值）

```python

```

> 优化一下

- XXX

```python

```
