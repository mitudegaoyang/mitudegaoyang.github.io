---
title: screen的使用
tags:
  - 技术积累
  - 后端
  - screen
categories:
  - 技术积累
  - 后端
abbrlink: 69ea2648
date: 2025-04-01 21:28:39
---

![首屏图](https://s21.ax1x.com/2025/03/01/pE8qB5j.jpg)

<!--
首屏图备用
![首屏图](https://s21.ax1x.com/2025/03/01/pE8qgMV.jpg)
![首屏图](https://s21.ax1x.com/2025/03/01/pE8qy2q.jpg)
![首屏图](https://s21.ax1x.com/2025/03/01/pE8q6x0.jpg)
![首屏图](https://s21.ax1x.com/2025/03/01/pE8qsGn.jpg)
-->

<!-- more -->

## 基本简介

`screen`是一个全屏窗口管理器，可以在一个物理终端上创建多个全屏窗口，并且可以在这些窗口之间进行切换。它主要用于在远程服务器上运行长时间的任务，即使网络连接中断，任务也可以继续运行。

## 快速使用

### 安装 screen

```sh
# 在 Debian/Ubuntu 系统上
sudo apt-get install screen

# 在 CentOS/RHEL 系统上
sudo yum install screen

# 在 macOS 上
brew install screen
```

### screen 的配置文件说明

可以通过 `~/.screenrc` 文件自定义 screen 行为。

```plaintext
# 设置默认滚动缓冲区大小
defscrollback 1000

# 启用状态栏显示
hardstatus alwayslastline "%{= kw}%-w%{=b bw}%n %t%{-b fw}%+w"

# 自动启动多窗口模式
startup_message off
```

通过编辑 `~/.screenrc` 文件，用户可以定制 screen 的外观和功能。

### 启动一个新的 screen 会话

```sh
screen -S <session_name>
```

示例：启动一个名为 mysession 的会话。

```sh
screen -S mysession
```

### 重新连接到一个已有的 screen 会话

```sh
screen -r <session_name>
```

示例：重新连接到名为 mysession 的会话。

```sh
screen -r mysession
```

### 分离当前 screen 会话

按下 `Ctrl+A` 然后按 `D` 键，可以将当前会话分离，但不会终止会话中的任务。

```sh
Ctrl+A D
```

### 列出所有 screen 会话

```sh
screen -ls
```

这将显示所有正在运行的会话及其状态。

### 终止一个 screen 会话

在会话中输入 `exit` ，或者按下 `Ctrl+D` ，可以终止当前会话。

## 高级功能

### 创建新窗口

按下 `Ctrl+A` 然后按 `C` 键，可以在当前会话中创建一个新的窗口。

### 切换窗口

按下 `Ctrl+A` 然后按数字键（如 0 到 9），可以快速切换到对应的窗口。
按下 `Ctrl+A` 然后按 " " 键，可以列出所有窗口并选择切换。

### 重命名当前窗口

按下 `Ctrl+A` 然后按 `A` 键，可以为当前窗口重命名，方便识别。

### 查看会话日志

启用日志记录功能，可以将屏幕输出保存到文件中。

```sh
Ctrl+A H
```

### 复制模式

按下 `Ctrl+A` 然后按 `[` 键，进入复制模式，可以滚动和复制屏幕内容。

### 发送命令到后台运行

如果需要在后台运行某个命令，可以结合 `screen` 和 `-d` `-m` 参数。

```sh
screen -dmS <session_name> <command>
```

示例：在后台运行 `ping` 命令。

```sh
screen -dmS ping_test ping www.google.com
```

示例：在后台运行定时任务。

```sh
screen -dmS cronjob bash -c "while true; do echo 'Hello World'; sleep 60; done"
```

### 会话共享

实现多人协作。

```sh
# 启用多用户模式
Ctrl+A :multiuser on

# 添加其他用户访问权限
Ctrl+A :acladd <username>
```

## 常见指令

### 会话管理

| 命令/快捷键                | 说明                                                      |
| -------------------------- | --------------------------------------------------------- |
| `screen`                   | 启动一个新的 screen 会话。                                |
| `screen -S <name>`         | 创建一个命名的新会话（例如 `screen -S mysession`）。      |
| `screen -r`                | 恢复最近分离（detached）的会话。                          |
| `screen -r <name/pid>`     | 恢复指定名称或 PID 的会话（例如 `screen -r mysession`）。 |
| `screen -ls`               | 列出所有已存在的 screen 会话（包括分离和附着的）。        |
| `screen -X -S <name> quit` | 强制终止指定会话（不进入会话直接关闭）。                  |
| `Ctrl+A d`                 | **分离当前会话**（Detach），返回原终端，会话在后台运行。  |
| `Ctrl+A :quit`             | 关闭当前会话并终止所有窗口。                              |

### 窗口（Window）操作

| 快捷键/命令  | 说明                           |
| ------------ | ------------------------------ |
| `Ctrl+A c`   | 创建一个新窗口（Create）。     |
| `Ctrl+A n`   | 切换到下一个窗口（Next）。     |
| `Ctrl+A p`   | 切换到上一个窗口（Previous）。 |
| `Ctrl+A 0-9` | 直接切换到第 0-9 个窗口。      |
| `Ctrl+A "`   | 列出所有窗口，可交互选择。     |
| `Ctrl+A A`   | 重命名当前窗口。               |
| `Ctrl+A k`   | 关闭（Kill）当前窗口。         |
| `Ctrl+A \`   | 终止所有窗口并关闭当前会话。   |

### 分屏（Region/Split）

| 快捷键/命令  | 说明                                                   |
| ------------ | ------------------------------------------------------ |
| `Ctrl+A S`   | 水平分割当前区域（Split horizontally）。               |
| `Ctrl+A`     | 垂直分割当前区域（Split vertically，需注意键盘布局）。 |
| `Ctrl+A Tab` | 切换焦点到下一个区域。                                 |
| `Ctrl+A X`   | 关闭当前焦点所在的区域。                               |
| `Ctrl+A Q`   | 关闭所有区域，仅保留当前焦点区域。                     |

### 其他常用操作

| 快捷键/命令                  | 说明                                                       |
| ---------------------------- | ---------------------------------------------------------- |
| `Ctrl+A ?`                   | 查看所有快捷键帮助。                                       |
| `Ctrl+A [`                   | 进入**复制模式**（可滚动屏幕内容，按 `Esc` 退出）。        |
| `Ctrl+A ]`                   | 粘贴复制模式中选中的内容。                                 |
| `Ctrl+A H`                   | 开启/关闭当前窗口的日志记录（保存到 `screenlog.n` 文件）。 |
| `Ctrl+A :scrollback 1000`    | 设置屏幕回滚行数为 1000（调整缓冲区大小）。                |
| `Ctrl+A x`                   | 锁定会话（需输入用户密码解锁）。                           |
| `Ctrl+A :sessionname <name>` | 重命名当前会话。                                           |

### 多用户共享会话

| 命令/快捷键             | 说明                                       |
| ----------------------- | ------------------------------------------ |
| `screen -x`             | 加入一个已存在的会话（多人共享同一会话）。 |
| `Ctrl+A :multiuser on`  | 启用多用户模式。                           |
| `Ctrl+A :acladd <user>` | 允许指定用户访问当前会话（需 root 权限）。 |

## 最佳实践

- 使用命名会话：为每个会话指定有意义的名字，便于管理和识别。
- 定期检查会话状态：使用 screen -ls 查看是否有未关闭的会话。
- 避免意外分离：如果网络中断或终端关闭，可以通过 screen -r 重新连接到会话。
- 善用多窗口功能：在一个会话中创建多个窗口，分别运行不同的任务。
- 启用日志记录：对于重要的任务，启用日志功能以便后续分析。

### 示例流程

- 创建并命名会话

```bash
screen -S mywork
```

- 分离会话

按下 `Ctrl+A d` 返回原终端。

- 恢复会话

```bash
screen -r mywork
```

- 创建新窗口

在会话中按下 `Ctrl+A c`，然后通过 `Ctrl+A n/p` 切换窗口。

- 分屏操作

按下 `Ctrl+A S` 水平分屏，用 `Ctrl+A Tab` 切换区域。

## 常见问题解答（FAQ）

- Q: 如何解决 screen 无法恢复会话的问题？

  - A: 如果 screen -r 提示无法恢复会话，可能是会话已经终止或被占用。可以尝试以下命令：

    ```bash
    screen -ls # 查看所有会话
    screen -r <session_name> # 恢复指定会话
    screen -dr <session_name> # 强制分离并恢复会话
    ```

- Q: 如何退出复制模式？
  - A: 在复制模式下，按下 Esc 键即可退出。

## 总结

掌握这些命令后，可以高效管理终端任务，尤其适合长时间运行进程或远程服务器操作。
