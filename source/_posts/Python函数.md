---
title: Python函数
tags:
  - 技术积累
  - 后端
  - Python
  - 函数
  - 定义函数
  - 函数参数与返回值
  - 局部变量与全局变量
categories:
  - 技术积累
  - 后端
  - Python
toc: true
abbrlink: c8f562d1
date: 2025-02-28 09:04:54
---

![首屏图](https://s21.ax1x.com/2025/02/23/pElDMSf.jpg)

<!-- more -->

[返回](/archives/202502214537ccef/#Day-5-6：函数)

## 1. 定义函数

### 1.1. 函数定义简明解释

函数是组织可重用代码块的容器，用于执行特定任务。它们能：

- 减少重复代码
- 提高可读性
- 实现模块化开发
- 支持参数化行为

**常见场景**：

- 频繁执行相同逻辑时（如数据清洗）
- 需要分解复杂任务时（如电商订单处理）
- 参数化不同输入时（如数学公式计算）

### 1.2. 代码示例

```python
# 温度转换函数
def celsius_to_fahrenheit(c_temp):
    """将摄氏温度转换为华氏温度"""
    return c_temp * 9/5 + 32

print(celsius_to_fahrenheit(25))  # 输出 77.0
```

### 1.3. 常见错误及避免方法

#### 错误 1：忽略返回值

```python
def add(a, b):
    print(a + b)  # 应该用 return
result = add(3,5)  # 得到 None
```

- **避免方法**: 明确使用`return`语句

#### 错误 2：修改可变默认参数

```python
def append_item(item, lst=[]):  # 默认列表会持续存在
    lst.append(item)
    return lst
```

- **避免方法**: `def append_item(item, lst=None): lst = lst or []`

#### 错误 3：参数顺序混淆

```python
def divide(a, b):
    return a / b

divide(5)  # 缺少必要参数
```

- **避免方法**: 使用关键字参数或检查参数完整性

### 1.4. 实际应用场景

#### 场景 1：数据验证管道

```python
def validate_email(email):
    # 检查格式有效性
    return "@" in email and "." in email.split("@")[1]

def process_user_data(data):
    if not validate_email(data["email"]):
        raise ValueError("Invalid email")
    # 其他处理...
```

#### 场景 2：动态报告生成

```python
def generate_report(data, format="markdown"):
    template = choose_template(format)
    apply_styling(template)
    insert_statistics(data)
    return compile_report()
```

### 1.5. 练习题

#### 题目 1: 计算矩形周长(初级)

- 创建计算矩形周长的函数，参数为长和宽

> [参考答案](/archives/20250223abbb24cd/#题目-1-计算矩形周长-初级)

#### 题目 2: 计算平均值(中级)

- 编写支持可变数量参数的函数，计算任意个数数字的平均值

> [参考答案](/archives/20250223abbb24cd/#题目-2-计算平均值-中级)

#### 题目 3: 生成斐波那契数列(高级)

- 实现记忆化（memoization）的斐波那契数列生成函数，要求通过装饰器实现缓存

> [参考答案](/archives/20250223abbb24cd/#题目-3-生成斐波那契数列-高级)

### 1.6. 深度思考问题

当函数可以接受其他函数作为参数时（高阶函数），这种特性如何从根本上改变了我们组织代码的方式？这种设计模式在哪些场景下可能成为双刃剑？

（思考方向：函数式编程范式、回调机制、代码抽象层次、调试复杂度之间的平衡）

[返回](/archives/202502214537ccef/#Day-5-6：函数)

## 2. 函数参数与返回值

### 2.1. 函数参数与返回值简明解释

- **参数**：接收外部输入，使函数具有灵活性，支持：
  - 位置参数（按顺序传递）
  - 关键字参数（按名称传递）
  - 默认参数（预定义默认值）
  - 可变参数（`*args`和`**kwargs`）
- **返回值**：将计算结果传递回调用者，可用`return`返回单个值、元组（多值）或对象。

**常见场景**：

- 动态配置函数行为（如设置阈值、选项开关）
- 处理不同输入源（如文件、API 响应）
- 实现链式调用（函数的返回值作为另一个函数的输入）

### 2.2. 代码示例

```python
# 计算矩形面积（含默认参数和返回值）
def calculate_area(length, width=1):
    """计算面积，默认宽度为1（视为线段）"""
    area = length * width
    return area, f"Area: {area} units²"  # 返回元组（数值+描述）

# 调用方式对比
print(calculate_area(5))        # 位置参数 (5, 1) → (5, "Area:5 units²")
print(calculate_area(width=3, length=4))  # 关键字参数 → (12, "Area:12 units²")
```

### 2.3. 常见错误及避免方法

#### 错误 1：误用可变默认参数

```python
def add_item(item, items=[]):  # 默认列表会被所有调用共享！
    items.append(item)
    return items
add_item(1)  # [1]
add_item(2)  # [1,2]（非预期）
```

- **避免方法**:`def add_item(item, items=None): items = items or []`

#### 错误 2：忽略返回值类型

```python
def get_user():
    print("Fetching data...")  # 忘记return → 返回None
user = get_user()  # user 是 None
```

- **避免方法**:明确区分“操作”函数（无返回值）和“计算”函数（必须返回数据）

#### 错误 3：混淆参数顺序

```python
def connect(host, port=80):
    pass
connect(port=443, "api.server.com")  # 位置参数不能在关键字参数后
```

- **避免方法**:位置参数在前，关键字参数在后：`connect("api.server.com", port=443)`

### 2.4. 实际应用场景

#### 场景 1：动态数据处理管道

```python
def process_data(data, filter_func=None, format="json"):
    if filter_func:  # 接受函数作为参数
        data = filter_func(data)
    if format == "csv":
        return convert_to_csv(data)
    return data  # 返回处理后的数据
```

#### 场景 2：配置生成器

```python
def create_config(api_key, timeout=10, retries=3):
    return {
        "auth": {"key": api_key},
        "network": {"timeout": timeout, "retries": retries}
    }
# 返回结构化配置对象供其他模块使用
```

### 2.5. 递进练习题

#### 题目 1 拼接字符串(初级)

- 编写函数`greet(name, greeting="Hello")`，返回拼接的问候字符串（如`"Hello, Alice!"`）

> [参考答案](/archives/20250223abbb24cd/#题目-1-拼接字符串-初级)

#### 题目 2 任意参数求和(中级)

- 实现函数`sum_numbers(*args)`，接受任意数量的数字参数并返回总和，若无参数返回 0

> [参考答案](/archives/20250223abbb24cd/#题目-2-任意参数求和-中级)

#### 题目 3 任意参数求积(高级)

- 设计函数`apply_operation(func, *args, **kwargs)`，接受一个函数和其参数，执行后返回结果（如调用`apply_operation(pow, 2, 3)`返回 8）

> [参考答案](/archives/20250223abbb24cd/#题目-3-任意参数求积-高级)

### 2.6. 深度思考问题

当函数可以返回其他函数（闭包）时，这种能力如何影响程序的状态管理？在哪些场景下，返回函数可能比直接返回数据更具优势或风险？

（思考方向：延迟执行、状态封装、装饰器模式、内存泄漏风险、调试复杂度）

[返回](/archives/202502214537ccef/#Day-5-6：函数)

## 3. 局部变量与全局变量

### 3.1. 局部变量与全局变量简明解释

- **全局变量**：在函数外定义，整个程序可见，用于存储共享数据（如配置参数、公共状态）
- **局部变量**：在函数内定义，仅在函数作用域内有效，用于封装临时计算数据

**常见场景**：

- 全局变量：多函数共享的常量（如 API 密钥、日志级别）
- 局部变量：函数内部中间计算结果（如循环计数器、临时缓存）

### 3.2. 代码示例

```python
# 全局变量
MAX_RETRIES = 3  # 全局常量

def process_data(data):
    # 局部变量
    attempt = 0  # 仅在函数内有效
    while attempt < MAX_RETRIES:  # 读取全局变量
        try:
            # ...处理逻辑...
            return True
        except Exception:
            attempt += 1
    return False

# 测试
print(process_data("test"))  # 使用全局MAX_RETRIES
```

### 3.3. 常见错误及避免方法

#### 错误 1：误改全局变量未声明

```python
counter = 0

def increment():
    counter += 1  # 触发UnboundLocalError（Python认为counter是局部变量）

increment()
```

**修正**：使用`global`关键字声明：`global counter`

#### 错误 2：局部变量覆盖全局变量

```python
PI = 3.1416

def calculate_area(radius):
    PI = 3.14  # 创建同名局部变量，覆盖全局变量
    return PI * radius**2

print(calculate_area(2))  # 输出12.56（全局PI未被使用）
```

**修正**：避免全局/局部变量同名，或用`global PI`明确引用

#### 错误 3：误认为代码块创建作用域

```python
if True:
    temp = 5  # 实际属于全局作用域（Python没有块级作用域）
print(temp)  # 输出5（非预期）
```

**修正**：理解 Python 只有函数/模块/类作用域，避免在条件/循环块内定义变量

### 3.4. 实际应用场景

#### 场景 1：应用配置中心

```python
# config.py
DEBUG_MODE = False  # 全局配置
API_TIMEOUT = 30

# utils.py
from config import API_TIMEOUT

def call_api(url):
    # 使用全局API_TIMEOUT
    return requests.get(url, timeout=API_TIMEOUT)
```

#### 场景 2：状态跟踪器

```python
def create_counter():
    count = 0  # 闭包内的"伪全局"变量
    def increment():
        nonlocal count  # 声明非局部变量
        count += 1
        return count
    return increment

counter = create_counter()
print(counter())  # 1
print(counter())  # 2（count变量在闭包中持久化）
```

### 3.5. 递进练习题

#### 题目 1 平方和(初级)

- 编写函数`sum_squares(a, b)`，计算 a² + b²，要求使用局部变量存储中间结果

> [参考答案](/archives/20250223abbb24cd/#题目-1-平方和-初级)

#### 题目 2 打印消息(中级)

- 创建全局变量`LOG_LEVEL="INFO"`，编写函数`log(message)`，仅在 LOG_LEVEL 为"DEBUG"时打印消息

> [参考答案](/archives/20250223abbb24cd/#题目-2-打印消息-中级)

#### 题目 3 闭包保存 n(高级)

- 实现函数`create_multiplier(n)`，返回一个新函数，该函数能将输入参数乘以 n（使用闭包保存 n 的值）

> [参考答案](/archives/20250223abbb24cd/#题目-3-闭包保存-n-高级)

### 3.6. 深度思考问题

当多个线程同时读写全局变量时，会引发怎样的数据竞争问题？在 Python 的 GIL（全局解释器锁）机制下，这种风险是降低了还是以其他形式存在？

（思考方向：线程安全、原子操作、GIL 的工作机制、协程与多进程的替代方案）
[返回](/archives/202502214537ccef/#Day-5-6：函数)

## 4. 课后练习

- 编写一个函数，计算两个数的最大公约数（GCD）。
- 编写一个函数，判断一个字符串是否是回文。
