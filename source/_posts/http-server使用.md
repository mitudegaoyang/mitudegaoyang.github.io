---
title: http-server使用
tags:
  - 技术积累
  - nodejs
  - http服务器
categories:
  - 技术积累
  - nodejs
  - http服务器
toc: true
abbrlink: 64e0b1f7
date: 2021-12-09 09:33:49
---

![首屏图](https://s1.ax1x.com/2021/12/09/ofeKKK.jpg)

<!-- more -->

## 前言

在很多情况下，需要在本地开启 http 服务器来测试。所以就需要一个简单的省事好用的 http 服务器。
以前的时候，都是使用 php 的本地环境，但是，自从学了 nodejs，发现了 http-server 好东西。
不用配置直接在当前文件夹内打开 cmd，就能够使用，简单易用，轻松方便。

## 简介

`http-server` 是一个简单的零配置命令行 http 服务器。
它对于生产使用来说是足够强大的，但它的测试，本地开发和学习足够简单易用。

## 安装

安装通过 npm 进行全局安装

`npm install http-server -g`

这将 `http-server` 全局安装，以便它可以从命令行运行。

## 使用

打开 cmd，移动进入当前文件夹，在当前文件夹内输入命令即可

`http-server [path] [options]`

`[path]`默认为`./public` (若文件夹存在)，否则为`./`。

现在，您可以访问 `http://localhost:8080` 来查看您的服务器

## 可选配置

| 命令               | 描述                                                                                                                                                                | 默认值     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `-p` 或 `--port`   | 要使用的端口                                                                                                                                                        | 8080       |
| `-a`               | 要使用的地址                                                                                                                                                        | 0.0.0.0    |
| `-d`               | 显示目录列表                                                                                                                                                        | `true`     |
| `-i`               | 显示自动索引                                                                                                                                                        | `true`     |
| `-g` 或`--gzip`    | 启用时，它将用于`./public/some-file.js.gz` 代替`./public/some-file.js`zip 压缩版本的文件，并且该请求接受 gzip 编码。如果 brotli 也被启用，它会首先尝试服务 brotli。 | `false`    |
| `-b` 或`--brotli`  | 启用时，它将用于`./public/some-file.js.br` 代替`./public/some-file.js`zip 压缩版本的文件，并且该请求接受 br 编码。如果 gzip 也被启用，它会首先尝试服务 brotli。     | `false`    |
| `-e` 或`--ext`     | 默认文件扩展名（如果没有提供）（默认为'html'）                                                                                                                      | `html`     |
| `-s` 或`--silent`  | 从输出中抑制日志消息                                                                                                                                                |            |
| `--cors`           | 通过 `Access-Control-Allow-Origin` 标题启用 CORS                                                                                                                    |            |
| `-o` [path]        | 启动服务器后打开浏览器窗口 例如：`-o /other/dir/`                                                                                                                   |            |
| `-c`               | 设置缓存控制 max-age 头的缓存时间（以秒为单位），例如-c10 10 秒。要禁用缓存，请使用-c-1。                                                                           | `3600`     |
| `-U` 或`--utc`     | 在日志消息中使用 UTC 时间格式。                                                                                                                                     |            |
| `--log-ip`         | 启用客户端 IP 地址的日志记录                                                                                                                                        | `false`    |
| `-P` 或`--proxy`   | 将所有无法在本地解析到给定 url 的请求代理。例如：`-P http://someurl.com`                                                                                            |            |
| `--proxy-options`  | 使用嵌套的虚线对象传递代理选项。例如：`--proxy-options.secure false`                                                                                                |            |
| `--username`       | 用于基本身份验证的用户名                                                                                                                                            |            |
| `--password`       | 基本认证密码                                                                                                                                                        |            |
| `-S` 或`--ssl`     | 启用 https。                                                                                                                                                        | `false`    |
| `-C` 或`--certssl` | 证书文件的路径                                                                                                                                                      | `cert.pem` |
| `-K` 或`--keyssl`  | 密钥文件的路径                                                                                                                                                      | `key.pem`  |
| `-r` 或`--robots`  | 提供一个/robots.txt（其内容默认为'User-agent：\* \ nDisallow：/'）                                                                                                  | `false`    |
| `--no-dotfiles`    | 不显示点文件                                                                                                                                                        |            |
| `--mimetypes`      | 自定义 mimetype 定义的 .types 文件的路径                                                                                                                            |            |
| `-h` 或`--help`    | 打印此列表并退出。                                                                                                                                                  |            |
| `-v` 或`--version` | 打印版本并退出。                                                                                                                                                    |            |

## 参考资料

- [使用 http-server 零配置在本地开启 http 服务器](https://blog.csdn.net/qq_30100043/article/details/73105362)
- [npm http-server](https://www.npmjs.com/package/http-server)
