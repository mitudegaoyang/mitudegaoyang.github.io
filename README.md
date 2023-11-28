# blog.io

> 本项目基于 hexo+码云结构创建

## 一、安装步骤

### 1. 创建新文件夹，并执行命令安装 Hexo

执行如下命令安装 Hexo：

```shell
sudo npm install -g hexo
```

初始化 hexo

```shell
hexo init
```

生成静态页面

```shell
hexo generate（hexo g也可以）
```

启动本地服务，进行文章预览调试

```shell
hexo server
```

浏览器输入`http://localhost:4000`

### 2. 在 github/码云上创建仓库，并保存本地

- 注意：建立与你用户名对应的仓库，仓库名必须为【your_user_name.github.io】，固定写法

### 3. 将 Hexo 全部内容复制进上一步创建的文件夹中，并提交仓库

### 4. 配置 Github/码云仓库

现在我们需要\_config.yml 文件，来建立关联

翻到最下面，改成我这样子的

```text
deploy:

     type: git

     repo: https://github.com/leopardpan/leopardpan.github.io.git

     branch: master
```

然后执行命令：

```shell
npm install hexo-deployer-git --save
```

- 注意：网上会有很多说法，有的 type 是 github, 还有 repository 最后面的后缀也不一样，
  是 github.com.git，我也踩了很多坑，我现在的版本是 hexo: 3.1.1，执行命令 hexo -vsersion 就出来了,
  貌似 3.0 后全部改成我上面这种格式了。

- 忘了说了，我没用 SSH Keys 如果你用了 SSH Keys 的话直接在 github 里复制 SSH 的就行了，总共就两种协议，相信你懂的。

### 5. 执行配置命令

```shell
hexo deploy
```

然后再浏览器中输入`http://mitudegaoyang.github.io/`就行了，我的 github 的账户叫 mitudegaoyang,把这个改成你 github 的账户名就行了

### 6. 部署步骤

每次部署的步骤，可按以下三步来进行。

```shell
hexo clean

hexo generate

hexo deploy
```

### 7. 一些常用命令

```shell
hexo new"postName" #新建文章

hexo new page"pageName" #新建页面

hexo generate #生成静态页面至public目录

hexo server #开启预览访问端口（默认端口4000，'ctrl + c'关闭server）

hexo deploy #将.deploy目录部署到GitHub

hexo help # 查看帮助

hexo version #查看Hexo的版本
```

### 8. 报错总结

```shell
ERROR Deployer not found: git 或者 ERROR Deployer not found: github
```

解决方法： npm install hexo-deployer-git --save

如发生报错： ERROR Process failed: layout/.DS_Store , 那么进入主题里面 layout 和\_partial 目录下，使用删除命令：

rm-rf.DS_Store

```shell
ERROR Plugin load failed: hexo-server
```

原因：

Besides,utilities are separated into a standalone module.hexo.util is not reachable anymore.

解决方法，执行命令：

sudo npm install hexo-server

执行命令 hexo server，

提示：Usage: hexo ....

原因：

我认为是没有生成本地服务

解决方法，执行命令：

npm install hexo-server --save

提示：hexo-server@0.1.2 node_modules/hexo-server

[原文链接](http://www.jianshu.com/p/465830080ea9)
