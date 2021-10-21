---
title: Go2Shell关于BigSur的适配
abbrlink: fb26c275
date: 2021-03-06 14:43:14
tags:
  - 技术积累
  - Mac
categories:
  - 技术积累
  - Mac
toc: true
---

![首屏图](https://z3.ax1x.com/2021/02/26/yxRURf.jpg)

<!-- more -->

## Go2Shell 介绍

Go2Shell for mac 是一款非常高效的即时终端窗口，无需学习曲线，
只需单击鼠标即可完成所需的工作，是您可以使用的最快，最直观的工具之一。
使用 Go2Shell 非常简单，您只需要打开一个 Terminal 窗口，
写下`open -a Go2Shell --args config`参数，然后按 Return 键即可。

## 问题描述

Go2shell 很久不更新，导致新系统不再支持使用，Go2shell 无法使用的替代方案，和原版基本一致

## 解决方案

Github 有人分享的，下载后复制到应用程序目录，然后按住 Cmd+鼠标左键拖动到 Finder 的工具栏中就可以了，
图标和效果基本和原版 Go2shell 一致，支持最新的 Big Sur。

- [CSDN 下载地址](https://download.csdn.net/download/u011478374/13210059)
- [Github 下载地址](https://github.com/Breathleas/Go2Shell)

![Go2shell](https://z3.ax1x.com/2021/03/06/6nhoEF.png)

安装包共有 4 个

- Go2Shell_iTerm // 使用 iTerm 打开当前目录
- Go2Shell_iTerm_newWin // 使用 iTerm 在新窗口打开当前目录
- Go2Shell_Term // 使用 Term 打开当前目录
- Go2Shell_Term_newWin // 使用 Term 在新窗口打开当前目录

## 参考资料

- [Go2Shell for mac(即时终端窗口) v2.5](https://zhuanlan.zhihu.com/p/113184152)
- [Mac 必备神器之 Go2Shell，最新版支持 Big Sur](https://blog.csdn.net/u011478374/article/details/109754818)
- [github-Go2Shell](https://github.com/Breathleas/Go2Shell)
