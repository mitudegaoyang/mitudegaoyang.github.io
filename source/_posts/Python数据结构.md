---
title: Python数据结构
tags:
  - 技术积累
  - 后端
  - Python
  - 数据结构
  - 列表
  - 字典
  - 元组和集合
categories:
  - 技术积累
  - 后端
  - Python
toc: true
abbrlink: 22c892e4
date: 2025-03-02 09:05:00
---

![首屏图](https://s21.ax1x.com/2025/02/23/pElDl6S.jpg)

<!-- more -->

[返回](/archives/202502214537ccef/#Day-7：数据结构)

## 1. 列表

### 1.1. 列表的解释

**列表**是 Python 中的有序可变容器，可存储任意数据类型（包括其他列表）。元素通过方括号`[]`定义，用逗号分隔。

- **用途**：批量存储/管理数据、动态增删元素、排序/过滤数据
- **常见场景**：临时存储用户输入、处理 CSV 文件内容、保存算法中间结果

### 1.2. 代码示例

```python
# 创建混合类型列表
my_list = [3, "apple", True, 2.5]

# 访问和修改元素
print(my_list[1])  # 输出：apple
my_list[0] = 99    # 修改第一个元素

# 添加/删除元素
my_list.append("new_item")
popped = my_list.pop(2)  # 移除并返回第三个元素

# 切片操作
sub_list = my_list[1:3]  # 获取索引1到2的元素
```

### 1.3. 常见错误与避免方法

#### 错误 1：索引越界

尝试访问`list[5]`但列表只有 3 个元素  
→ 使用前检查长度：`if index < len(my_list)`

#### 错误 2：混淆引用复制与值复制

直接`new_list = old_list`会导致两个列表关联  
→ 使用`new_list = old_list.copy()`或切片`new_list = old_list[:]`

#### 错误 3：在循环中修改列表长度

遍历时删除元素会导致索引错乱  
→ 遍历副本：`for item in list.copy():`

### 1.4. 实际应用场景

#### 场景 1：数据预处理

```python
# 过滤温度数据中异常值
temperatures = [22, 35, -5, 18, 45]
valid_temps = [t for t in temperatures if 0 <= t <= 40]
```

#### 场景 2：游戏开发

```python
# 管理玩家背包物品
inventory = ["sword", "potion", "key"]
def use_item(item):
    if item in inventory:
        inventory.remove(item)
        print(f"Used {item}!")
```

### 1.5. 递进练习题

#### 题目 1:计算平均值(初级)

- 创建包含 10 个随机整数的列表（范围 1-100），计算它们的平均值

> [参考答案](/archives/20250223abbb24cd/#题目-1-计算平均值-初级)

#### 题目 2:合并列表并排序(中级)

- 合并两个已排序列表（如[1,3,5]和[2,4,6]），保持结果列表有序

> [参考答案](/archives/20250223abbb24cd/#题目-2-合并列表并排序-中级)

#### 题目 3:矩阵转置(高级)

- 实现矩阵转置函数，输入如[[1,2],[3,4],[5,6]]，返回[[1,3,5],[2,4,6]]

> [参考答案](/archives/20250223abbb24cd/#题目-3-矩阵转置-高级)

### 1.6. 深度思考问题

当列表存储超过 100 万条数据时，频繁在列表开头插入/删除元素（时间复杂度 O(n)）会导致性能问题。如何通过选择其他数据结构（如`collections.deque`）优化这类操作？这种取舍体现了计算机科学中哪些底层原理？

[返回](/archives/202502214537ccef/#Day-7：数据结构)

## 2. 字典

### 2.1. 字典的解释

**字典**是 Python 中的无序键值对集合，用花括号`{}`表示，通过唯一键（不可变类型）快速访问值。

- **用途**：快速数据查找、存储结构化数据、配置参数管理
- **常见场景**：JSON 数据处理、数据库查询结果缓存、替代多个`if-else`的条件映射

### 2.2. 代码示例

```python
# 创建学生信息字典
student = {
    "id": 101,
    "name": "Alice",
    "courses": ["Math", "Physics"],
    "active": True
}

# 访问/修改值
print(student.get("name", "Unknown"))  # 安全获取值
student["graduated"] = False           # 新增键值对

# 遍历字典
for key, value in student.items():
    print(f"{key}: {value}")

# 字典推导式
squared = {x: x**2 for x in range(5)}  # {0:0, 1:1, 2:4...}
```

### 2.3. 常见错误与避免方法

#### 错误 1：直接访问不存在的键

`print(student["age"])` 会引发`KeyError`  
→ 用`student.get("age", 0)`或`if "age" in student`

#### 错误 2：误认为字典有序

在 Python 3.7 之前字典不保证顺序  
→ 需要有序时使用`collections.OrderedDict`

#### 错误 3：使用可变类型作为键

如`dict_key = {[1,2]: "value"}`会报错  
→ 键必须为不可变类型（数字/字符串/元组）

### 2.4. 实际应用场景

#### 场景 1：缓存计算结果

```python
cache = {}
def fibonacci(n):
    if n in cache: return cache[n]
    if n <= 1: return n
    cache[n] = fibonacci(n-1) + fibonacci(n-2)
    return cache[n]
```

#### 场景 2：数据分组统计

```python
# 按城市分组统计销售额
sales = [
    {"city": "Beijing", "amount": 200},
    {"city": "Shanghai", "amount": 300},
    {"city": "Beijing", "amount": 150}
]

city_stats = {}
for record in sales:
    key = record["city"]
    city_stats[key] = city_stats.get(key, 0) + record["amount"]
```

### 2.5. 递进练习题

#### 题目 1: 统计字符出现次数(初级)

- 编写函数统计字符串中各字符出现次数（如"hello"返回{'h':1, 'e':1, 'l':2, 'o':1}）

> [参考答案](/archives/20250223abbb24cd/#题目-1-统计字符出现次数-初级)

#### 题目 2: 合并字典(中级)

- 合并两个字典，若键冲突则保留第二个字典的值

> [参考答案](/archives/20250223abbb24cd/#题目-2-合并字典-中级)

#### 题目 3: 扁平化(高级)

- 实现嵌套字典的扁平化，将`{'a':1, 'b':{'c':2, 'd':{'e':3}}}`转换为`{'a':1, 'b.c':2, 'b.d.e':3}`

> [参考答案](/archives/20250223abbb24cd/#题目-3-扁平化-高级)

### 2.6. 思考问题

Python 字典底层采用哈希表实现，当字典扩容时会发生 rehash 操作。如果字典被用作全局缓存且包含百万级键值对，频繁的 rehash 会带来性能问题。如何通过预分配空间（如`dict.fromkeys`预先填充键）优化性能？这反映了数据结构设计中哪些重要原则？

[返回](/archives/202502214537ccef/#Day-7：数据结构)

## 3. 元组和集合

### 3.1. 元组和集合的解释

#### 元组（Tuple）

- 不可变有序序列，用圆括号`()`定义
- **用途**：存储不可修改的数据（如坐标/日期）、作为字典键、函数多返回值
- **场景**：数据库查询结果、常量集合、保护敏感数据不被修改

#### 集合（Set）

- 可变无序容器，元素唯一且不可重复，用花括号`{}`或`set()`创建
- **用途**：快速成员检测、数据去重、集合运算（交/并/差）
- **场景**：用户行为日志去重、好友关系计算、屏蔽词过滤

### 3.2. 代码示例

```python
# 元组操作示例
coordinates = (40.7128, -74.0060)  # 经纬度元组
print(coordinates[0])              # 访问元素 → 40.7128
rgb = tuple([255, 128, 64])        # 将列表转为元组

# 集合操作示例
unique_nums = {2, 5, 2, 8, 5}      # 自动去重 → {2,5,8}
setA = {1, 2, 3}
setB = {3, 4, 5}
print(setA | setB)                 # 并集 → {1,2,3,4,5}
```

### 3.3. 常见错误与避免方法

#### 元组相关错误

##### 错误 1：尝试修改元组元素

```python
t = (1,2,3)
t[0] = 5  # TypeError
```

→ 重新创建新元组：`t = (5,) + t[1:]`

##### 错误 2：忽略单元素元组的逗号

`single = (5)` 实际是 int 类型 → 正确写法：`single = (5,)`

#### 集合相关错误

##### 错误 1：用索引访问集合元素

```python
s = {5,2,7}
print(s[0])  # TypeError: 'set' is not subscriptable
```

→ 先转为列表：`list(s)[0]`（但会破坏无序特性）

##### 错误 2：混淆集合与字典语法

`{}`表示空字典 → 创建空集合必须用`set()`

### 3.4. 实际应用场景

#### 场景 1：用户权限组管理（集合）

```python
admin_roles = {"superuser", "editor"}
user_roles = {"viewer", "editor"}

# 检查权限交集
if admin_roles & user_roles:
    print("有部分管理权限")
```

#### 场景 2：股票交易记录（元组）

```python
# 不可变的交易记录
transaction = (
    "AAPL",
    datetime(2023,8,15),
    ("buy", 175.50, 100)
)
# 作为字典键
history = {transaction: "pending"}
```

### 3.5. 递进练习题

#### 题目 1: 集合去重(初级)

- 将列表`["cat", "dog", "cat", "bird"]`转换为集合去重，再转回排序后的列表

> [参考答案](/archives/20250223abbb24cd/#题目-1-集合去重-初级)

#### 题目 2: 变位词判断(中级)

- 编写函数判断两个字符串是否为变位词（字母组成相同），使用集合优化效率

> [参考答案](/archives/20250223abbb24cd/#题目-2-变位词判断-中级)

#### 题目 3: 不可变元组存储实验数据(高级)

- 实现多组实验数据的不可变存储结构，每个实验包含（实验名称，时间戳，温度值元组）

> [参考答案](/archives/20250223abbb24cd/#题目-3-不可变元组存储实验数据-高级)

### 3.6. 思考问题

元组的不可变特性使其在并发编程中具有线程安全优势，而集合的哈希表实现带来 O(1)查询时间复杂度。当处理 10 亿级数据时，如何利用元组的内存优化特性（相比列表节省约 20%内存）和集合的快速去重能力协同提升系统性能？这反映了冯·诺依曼体系结构中哪些关键特性的取舍？

[返回](/archives/202502214537ccef/#Day-7：数据结构)

## 4. 课后练习

- 编写一个程序，统计一段文本中每个单词的出现次数。
- 编写一个程序，合并两个列表并去重。
