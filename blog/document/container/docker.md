---
title: docker-基础
tags:
  - docker
---
## Docker导学

**到底什么是Docker?**

![](./assets/docker/1.jpg)

**Docker能干什么?**

- 简化配置
- 整合服务器
- 代码流水线管理
- 调试能力
- 提高开发效率
- 多租户
- 隔离应用
- 快速部署

**容器时代的"双城记"**

- Docker
- Kubernetes

**大海航行靠舵手-Kubernetes**

![](./assets/docker/4.jpg)

**DevOps = 文化 + 过程 + 工具**

![](./assets/docker/5.jpg)
![](./assets/docker/6.jpg)

## 容器技术概述

**Long Long Time Ago**

![](./assets/docker/7.jpg)

**虚拟化技术出现以后**

![](./assets/docker/8.jpg)

**虚拟化的优点**

- 资源池-一个物理机的资源分配到了不同的虚拟机里
- 很容易扩展-加物理机or加虚拟机
- 很容易云化-亚马逊AWS，阿里云等

**虚拟化的局限性**

- 每一个虚拟机都是一个完整的操作系统，要给其分配资源，当虚拟机数量增多时，操作系统本身消耗的资源势必增多

**开发和运维面临的挑战**![](./assets/docker/11.jpg)
**容器解决了什么问题?**![](./assets/docker/12.jpg)

- 解决了开发和运维之间的矛盾

- 在开发和运维之间搭建了一个桥梁，是实现devops的最佳解决方案

**什么是容器？**

  ![](./assets/docker/14.jpg)
**容器和虚拟机的区别**

![](./assets/docker/15.jpg)
**虚拟机 + 容器**

![](./assets/docker/16.jpg)
**Docker - 容器技术的一种实现**

![](./assets/docker/17.jpg)

## Docker架构和底层技术简介

**Docker Platform**

- Docker提供了一个开发，打包，运行app的平台
- 把app和底层infrastructure隔离开来

![](./assets/docker/18.jpg)

**Docker Engine**

![](./assets/docker/19.jpg)

**Docker Architecture**

![](./assets/docker/20.jpg)

**底层技术**

- Namespaces：做隔离pid，net，ipc，mnt，uts
- Control groups：做资源限制
- Union file systems：Container和image的分层

## 在centos上安装docker

**安装**

```sh
sudo yum remove docker \
docker-common \
docker-selinux \
docker-engine

sudo yum install -y yum-utils \
device-mapper-persistent-data \
lvm2

sudo yum-config-manager \
--add-repo \
https://download.docker.com/linux/centos/docker-ce.repo

sudo yum install docker-ce
```
**启动**

```sh
sudo systemctl start docker
sudo docker version
```
**helloworld**

```sh
sudo docker run hello-world
```
## Docker Image概述

**什么是Image**

![](./assets/docker/22.jpg)

**Image的获取(1)**

![](./assets/docker/23.jpg)

**Image的获取(2)**

![](./assets/docker/24.jpg)

```sh
// 查看进程
ps -ef | grep docker
// 查看镜像
sudo docker image ls
// 拉取镜像
sudo docker pull ubuntu:14.04
// 运行镜像
docker run hello-world
docker run -it centos
// 删除镜像
docker image rm 67759a80360c(镜像ID)
docker image rmi f2a91732366c(镜像ID)
```
## DIY一个Base Image

**自己实现helloworld**

```c
mkdir hello-world
cd hello-world/
vim hello.c

// 内容
#include<stdio.h>

int main() {
  printf("hello docker\n");
}

gcc -static hello.c -o hello
```
```dockerfile
vim Dockerfile

// 内容
FROM scratch
ADD hello /
CMD ["/hello"]
```
```sh
docker build -t brotherc/hello-world .
docker run brotherc/hello-world
```
## 初始container

**什么是Container**

![](./assets/docker/25.jpg)
```sh
docker container ls
docker container ls -a
docker container ps -a
docker rm $(docker container ls -f "status-exited" -q)
docker rm $(docker container ls -aq)
docker container rm 846b5efe98d4(容器ID)
docker container rm 84(容器ID前缀)
// 将已有容器提交成新的镜像
Usage: docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]] [flags]
docker commit xenodochial_pare(容器名称) brotherc/centos-vim
docker stop 容器id或名称
docker start 容器id或名称
docker inspect 容器id或名称
docker logs 容器id或名称
```
## 构建自己的Docker镜像

**基于已经存在的container创建一个image**

```sh
// 运行一个已安装好vim的centos容器
docker run -it centos
yum install -y vim
exit
```
```sh
// 容器名：xenodochial_pare
docker commit xenodochial_pare brotherc/centos-vim
```
**基于Dockerfile创建一个image**

```dockerfile
mkdir docker-centos-vim
cd docker-centos-vim/
vim Dockerfile

FROM centos
RUN yum install -y vim

docker build -t brotherc/centos-vim-new .
```
## Dockerfile语法梳理
**FROM**
尽量使用官方的image作为base image!

```dockerfile
FROM scratch #制作base image
FROM centos  #使用base image
FROM ubuntu:14.04
```
**LABEL**
Metadata不可少!

```dockerfile
LABEL maintainer="brotherc@136.com"
LABEL version="1.0"
LABEL description="This is description"
```
**RUN**
为了美观，复杂的RUN请用反斜杠换行!避免无用分层，合并多条命令成一行!

```dockerfile
RUN yum update && yum install -y vim \ #反斜线换行
    python-dev
```
```dockerfile
RUN apt-get update && apt-get install -y perl \
    pwgen --no-install-recommends && rm -rf \
    /var/lib/apt/lists/* #注意清理cache
```
```dockerfile
RUN /bin/bash -c'source $HOME/.bashrc;echo $HOME'
```
**WORKDIR**
设定当前工作目录，类似cd
用WORKDIR，不要用RUN cd!尽量使用绝对目录!

```dockerfile
WORKDIR /root
```
```dockerfile
WORKDIR /test #如果没有会自动创建test目录
WORKDIR demo
RUN pwd       #输出结果应该是 /test/demo
```
**ADD and COPY**
将本地文件添加到image里面
大部分情况，COPY优于ADD!ADD除了COPY还有额外功能(解压)!添加远程文件/目录
请使用curl或者wget!

```dockerfile
ADD hello /
```
```dockerfile
ADD test.tar.gz / #添加到根目录并解压
```
```dockerfile
WORKDIR /root
ADD hello test/ # /root/test/hello
```
```dockerfile
WORKDIR /root
COPY hello test/
```
**ENV**
尽量使用ENV增加可维护性!

```dockerfile
ENV MYSQL_VERSION 5.6 #设置常量
RUN apt-get install -y mysql-server="${MYSQL_VERSION}" \
    && rm -rf /var/lib/apt/lists/* #引用常量
```
**RUN vs CMD vs ENTRYPOINT**
RUN:执行命令并创建新的image layer
CMD:设置容器启动后默认执行的命令和参数
ENTRYPOINT:设置容器启动时运行的命令
**Shell格式**

```dockerfile
RUN apt-get install -y vim
CMD echo "hello docker"
ENTRYPOINT echo "hello docker"
```
```dockerfile
FROM centos
ENV name Docker
ENTRYPOINT echo "hello $name"
```
**Exec格式**

```dockerfile
RUN ["apt-get", "install", "-y", "vim"]
CMD ["/bin/echo", "hello docker"]
ENTRYPOINT ["/bin/echo", "hello docker"]
```
```dockerfile
FROM centos
ENV name Docker
ENTRYPOINT ["/bin/echo", "hello docker"]
```
## Dockerfile最佳实践
Dockerfile:
```dockerfile
FROM centos
ENV name Docker
ENTRYPOINT echo "hello $name"
```
```dockerfile
docker build -t brotherc/centos-entrypoint-shell .
docker run brotherc/centos-entrypoint-shell
hello Docker
```
Dockerfile:
```dockerfile
FROM centos
ENV name Docker
ENTRYPOINT ["/bin/bash", "-c", "echo hello $name"]
```
```dockerfile
docker build -t brotherc/centos-entrypoint-exec .
docker run brotherc/centos-entrypoint-exec
hello Docker
```
**CMD**
容器启动时默认执行的命令
如果docker run指定了其它命令，CMD命令被忽略
如果定义了多个CMD，只有最后一个会执行
Dockerfile:
```dockerfile
FROM centos
ENV name Docker
CMD echo "hello $name"
```
```sh
docker build -t brotherc/centos-cmd-shell .
docker run brotherc/centos-cmd-shell
hello Docker

docker run -it brotherc/centos-cmd-shell /bin/bash
无输出
```
**ENTRYPOINT**
让容器以应用程序或者服务的形式运行
不会被忽略，一定会执行

```sh
docker run brotherc/centos-entrypoint-shell
hello Docker

docker run -it brotherc/centos-entrypoint-shell /bin/bash
hello Docker

```
## 镜像的发布
```sh
docker login
docker push DockerId/镜像名称
docker pull DockerId/镜像名称
```
**分享产生image**
把我们的账户link到github或bitbucket，在github上面创建一个代码仓库，把我们的dockerfile push上去，这样就做了一个关联。
只要我们这个仓库里面有dockerfile，就会自动去克隆获取到这个dockerfile然后dockerhub后台服务器会帮我们去build。
这样我们既提供了dockerfile，docker image又是dockerhub后台服务器帮我们build的，这个安全性会有很大的提升。
![](./assets/docker/78.jpg)

**私有的registry**

```sh
docker run -d -p 5000:5000 --restart always --name registry
// 访问ip:5000
```
/etc/docker/daemon.json:
```json
{"insecure-registries":["ip:5000"]}
```
/lib/systemd/system/docker.service:
![](./assets/docker/79.jpg)

```sh
sudo service docker restart
```
```sh
telnet ip:5000

docker push ip:5000/镜像名称
docker pull ip:5000/镜像名称
```
## Docker Network
**基础网络概念**
![](./assets/docker/32.jpg)

**基于数据包的通信方式**

![](./assets/docker/33.jpg)

**网络的分层**

![](./assets/docker/34.jpg)

**路由的概念**

![](./assets/docker/35.jpg)

**IP地址和路由**

![](./assets/docker/36.jpg)

**公有IP和私有IP**

- Public IP：互联网的唯一标识，可以访问internet

- Private IP：不可在互联网上使用，仅供机构内部使用

  A类 10.0.0.0--10.255.255.255 （10.0.0.0/8）

  B类 172.16.0.0--172.31.255.255 （172.16.0.0/12）

  C类 192.168.0.0--192.168.255.255 （192.168.0.0/16）

**网络地址转换NAT**
![](./assets/docker/38.jpg)

**Ping和telnet**

- Ping(ICMP)：验证IP的可达性

![](./assets/docker/39.jpg)

- telnet：验证服务的可用性


![](./assets/docker/40.jpg)

```sh
sudo docker run -d --name test1 busybox /bin/sh -c "while true; do sleep 3600; done"
sudo docker exec -it test1 /bin/sh

ip a
```
```sh
sudo docker run -d --name test2 busybox /bin/sh -c "while true; do sleep 3600; done"
sudo docker exec test2 ip a
```
![](./assets/docker/41.jpg)
![](./assets/docker/42.jpg)
![](./assets/docker/43.jpg)
![](./assets/docker/44.jpg)

**Linux Network Namespace**

![](./assets/docker/45.jpg)
![](./assets/docker/46.jpg)
![](./assets/docker/47.jpg)
![](./assets/docker/48.jpg)
![](./assets/docker/49.jpg)
![](./assets/docker/50.jpg)
![](./assets/docker/51.jpg)
![](./assets/docker/52.jpg)
![](./assets/docker/53.jpg)
![](./assets/docker/54.jpg)
![](./assets/docker/55.jpg)
![](./assets/docker/56.jpg)
![](./assets/docker/57.jpg)
![](./assets/docker/58.jpg)

**Bridge Network**

![](./assets/docker/59.jpg)
![](./assets/docker/60.jpg)
![](./assets/docker/61.jpg)
![](./assets/docker/62.jpg)
![](./assets/docker/63.jpg)
![](./assets/docker/64.jpg)
![](./assets/docker/65.jpg)
![](./assets/docker/66.jpg)
![](./assets/docker/67.jpg)
![](./assets/docker/68.jpg)
![](./assets/docker/69.jpg)
![](./assets/docker/70.jpg)
![](./assets/docker/71.jpg)

**Container Port Map**

![](./assets/docker/72.jpg)
![](./assets/docker/73.jpg)
![](./assets/docker/74.jpg)
![](./assets/docker/75.jpg)
![](./assets/docker/76.jpg)
![](./assets/docker/77.jpg)

## Docker的持久化存储和数据共享
**Container Layer**

![](./assets/docker/26.jpg)

**Data Volume**

![](./assets/docker/27.jpg)

**Docker持久化数据的方案**

- 基于本地文件系统的Volume。可以在执行Docker create或Docker run时，通过-v参数将主机的目录作为容器的数据卷。这部分功能便是基于本地文件系统的volume管理。
- 基于plugin的Volume，支持第三方的存储方案，比如NAS，aws

**Volume的类型**

- 受管理的data Volume，由docker后台自动创建。
- 绑定挂载的Volume，具体挂载位置可以由用户指定。

**数据持久化：Data Volume**
![](./assets/docker/30.jpg)

```sh
//mysql镜像会默认将数据挂载到本地
sudo docker run -d --name mysql1 -e MYSQL_ALLOW_EMPTY_PASSWORD=true mysql
```
```sh
sudo docker volume ls

DRIVER        VOLUME NAME
local         e6ee5901156...

sudo docker volume inspect e6ee5901156...
```
```sh
sudo docker stop mysql1
sudo docker rm mysql1
sudo docker volume ls

DRIVER        VOLUME NAME
local         e6ee5901156...

```
```sh
//给volume指定名字
sudo docker run -d -v mysql:/var/lib/mysql --name mysql1 -e MYSQL_ALLOW_EMPTY_PASSWORD=true mysql
sudo docker volume ls

DRIVER        VOLUME NAME
local         mysql
```
```sh
//让mysql容器使用已存在的volume
sudo docker rm -rf mysql1
sudo docker run -d -v mysql:/var/lib/mysql --name mysql2 -e MYSQL_ALLOW_EMPTY_PASSWORD=true mysql
```
**数据持久化：Bind Mouting**
![](./assets/docker/31.jpg)
Dockerfile:
```dockerfile
FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY index.html index.html
```
```sh
docker build -t brotherc/my-nginx .
docker run -d -p 80:80 --name web brotherc/my-nginx
```
```sh
docker rm -f web
docker run -d -v $(pwd):/usr/share/nginx/html -p 80:80 --name web brotherc/my-nginx
docker exec -it web /bin/bash
//在容器中
cd /usr/share/nginx/html
touch test.txt
exit
//在linux中看到刚刚创建的test.txt文件
```
