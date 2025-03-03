---
title: Python文件操作与异常处理
tags:
  - 技术积累
  - 后端
  - Python
  - 文件操作
  - 异常处理
  - 文件读写
categories:
  - 技术积累
  - 后端
  - Python
toc: true
abbrlink: d948b0f0
date: 2025-03-03 22:32:35
---

![首屏图](https://s21.ax1x.com/2025/02/23/pElDQl8.jpg)

<!-- more -->

[返回](/archives/202502214537ccef/#Day-1-2：文件操作与异常处理)

## 1. 文件读写

### 1.1. 文件读写简明解释

**用途**：

- 实现程序与文件系统的数据交互
- **读取**：从磁盘加载配置、数据集或日志
- **写入**：持久化保存计算结果、生成报告或记录状态
- 支持文本模式（字符流）和二进制模式（字节流）

**常见场景**：

- 配置文件管理（`.ini`/`.json`/`.yaml`）
- 数据持久化（CSV/Excel 文件操作）
- 日志记录（实时追加运行日志）
- 多媒体文件处理（图片/音频二进制操作）

### 1.2. 代码示例

```python
# 写入并读取文本文件（自动处理资源关闭）
def write_and_read_demo():
    # 写入文件
    with open("demo.txt", "w", encoding="utf-8") as f:
        f.write("Python文件读写\n")
        f.write("第二行内容")

    # 读取文件
    with open("demo.txt", "r", encoding="utf-8") as f:
        content = f.read()
        print(content)

write_and_read_demo()  # 输出两行文本
```

### 1.3. 常见错误及避免方法

#### 错误 1：资源未正确释放

```python
f = open("data.txt", "r")
content = f.read()
# 忘记调用 f.close() → 可能引发文件锁死
```

**修正**：始终使用`with`语句上下文管理

#### 错误 2：路径处理错误

```python
with open("../data.txt", "r") as f:  # 相对路径混乱
```

**修正**：

- 使用`os.path`模块处理路径
- 或使用绝对路径：`open(os.path.join(dirname, filename))`

#### 错误 3：编码问题

```python
with open("中文文件.txt", "r") as f:  # 默认编码可能不是utf-8
```

**修正**：明确指定编码：`encoding="utf-8"`

### 1.4. 实际应用场景

#### 场景 1：数据导入/导出

```python
def save_to_csv(data, filename):
    with open(filename, "w", encoding="utf-8") as f:
        f.write("Name,Age,Score\n")
        for item in data:
            f.write(f"{item['name']},{item['age']},{item['score']}\n")

def load_from_csv(filename):
    data = []
    with open(filename, "r", encoding="utf-8") as f:
        headers = f.readline().strip().split(",")
        for line in f:
            values = line.strip().split(",")
            data.append(dict(zip(headers, values)))
    return data
```

#### 场景 2：实时日志记录

```python
import datetime

def log(message, level="INFO"):
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    with open("app.log", "a", encoding="utf-8") as f:
        f.write(f"[{timestamp}] {level}: {message}\n")

log("程序启动")  # 追加写入日志文件
```

### 1.5. 递进练习题

#### 题目 1: 统计文件的行数(初级)

- 编写函数`count_lines(filename)`，统计指定文本文件的行数

> [参考答案](/archives/20250223abbb24cd/#题目-1-统计文件的行数-初级)

#### 题目 2: 合并文本文件(中级)

- 创建函数`merge_files(files, output)`，将多个文本文件内容合并到新文件中

> [参考答案](/archives/20250223abbb24cd/#题目-2-合并文本文件-中级)

#### 题目 3: 文件内容加密保存(高级)

- 实现`encrypted_copy(src, dst, key)`，通过异或运算对文件内容进行加密后写入新文件（处理二进制模式）

> [参考答案](/archives/20250223abbb24cd/#题目-3-文件内容加密保存-高级)

### 1.6. 深度思考问题

当多个进程同时写入同一个文件时，如何避免数据损坏？在分布式系统中，文件存储方案与数据库存储各自的优劣边界在哪里？

（思考方向：文件锁机制、原子操作、ACID 特性、海量小文件存储效率、数据一致性要求）

[返回](/archives/202502214537ccef/#Day-1-2：文件操作与异常处理)

## 2. 异常处理

### 2.1. 异常处理简明解释

**用途**：

- 捕获和处理程序运行时的错误，防止程序意外终止
- 提供优雅的错误恢复机制，增强程序健壮性
- 区分正常逻辑与错误处理逻辑，提升代码可读性

**常见场景**：

- 文件/网络操作中的资源不可用（如文件不存在、网络断开）
- 用户输入验证（如类型错误、格式错误）
- 外部服务调用（如 API 请求超时、数据库连接失败）

### 2.2. 代码示例

```python
def safe_divide():
    try:
        num = float(input("输入被除数: "))
        den = float(input("输入除数: "))
        result = num / den
    except ValueError:
        print("错误：请输入有效数字")
    except ZeroDivisionError:
        print("错误：除数不能为零")
    else:
        print(f"结果为：{result:.2f}")
    finally:
        print("运算结束")

safe_divide()
```

**执行示例**：

```bash
输入被除数: 8
输入除数: 0
错误：除数不能为零
运算结束
```

### 2.3. 常见错误及避免方法

#### 错误 1：过度宽泛的异常捕获

```python
try:
    # ...
except:  # 捕获所有异常，隐藏潜在问题
    pass
```

**修正**：明确捕获特定异常类型（如`except ValueError`）

#### 错误 2：忽略异常上下文

```python
try:
    with open("data.txt") as f:
        content = f.read()
except FileNotFoundError:
    print("文件不存在")  # 未记录错误细节
```

**修正**：使用`except ... as e`获取异常对象，记录日志

#### 错误 3：资源未正确释放

```python
f = open("data.txt")
try:
    # 处理文件
except:
    pass
finally:
    f.close()  # 可能漏关资源
```

**修正**：使用`with`上下文管理器自动处理资源

### 2.4. 实际应用场景

#### 场景 1：API 调用重试机制

```python
import requests
from time import sleep

def fetch_data(url, retries=3):
    for _ in range(retries):
        try:
            response = requests.get(url, timeout=5)
            return response.json()
        except (requests.Timeout, requests.ConnectionError) as e:
            print(f"网络错误：{e}，剩余重试次数：{retries-_}")
            sleep(2)
    raise Exception("API请求失败")
```

#### 场景 2：数据库事务回滚

```python
import sqlite3

def update_user_balance(user_id, amount):
    conn = sqlite3.connect("bank.db")
    try:
        cursor = conn.cursor()
        cursor.execute("UPDATE accounts SET balance = balance + ? WHERE user_id = ?", (amount, user_id))
        if amount < 0:  # 模拟业务规则校验
            raise ValueError("转账金额不能为负")
        conn.commit()
    except Exception as e:
        conn.rollback()
        print(f"操作失败：{e}")
    finally:
        conn.close()
```

### 2.5. 递进练习题

#### 题目 1: 读取用户年龄函数(初级)

- 编写读取用户年龄的函数，处理非数字输入异常

> [参考答案](/archives/20250223abbb24cd/#题目-1-读取用户年龄函数-初级)

#### 题目 2: 文件复制函数(中级)

- 创建文件复制函数，处理源文件不存在和目标路径无权限的情况

> [参考答案](/archives/20250223abbb24cd/#题目-2-文件复制函数-中级)

#### 题目 3: 用户注册验证(高级)

- 实现带有自定义异常类（`InvalidEmailError`）的用户注册验证系统

> [参考答案](/archives/20250223abbb24cd/#题目-3-用户注册验证-高级)

### 2.6. 深度思考问题

当异常处理机制被过度使用时（例如将所有业务逻辑错误都转换为异常），是否会模糊程序正常流程与错误状态的边界？与返回错误码的传统方式相比，异常处理在软件工程层面带来了哪些范式转变？

（思考方向：防御式编程与契约式编程的差异、异常对控制流的影响、栈展开的代价、错误处理策略的可维护性）

[返回](/archives/202502214537ccef/#Day-1-2：文件操作与异常处理)

## 3. 课后练习

- 编写一个程序，读取一个文本文件并统计行数。
- 编写一个程序，处理用户输入时的异常（如非数字输入）。
