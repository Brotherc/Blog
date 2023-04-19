---
title: MySQL-主从复制与读写分离
tags:
  - MySQL
---
## 数据库主从库理论
主从同步如何工作

![](./assets/mysql/1.jpg)

## 步骤一

##### 主：

修改配置
![](./assets/mysql/2.jpg)
![](./assets/mysql/3.jpg)
重启mysql
![](./assets/mysql/4.jpg)
连接mysql，查看主状态
![](./assets/mysql/5.jpg)
##### 从：
修改配置
![](./assets/mysql/6.jpg)
![](./assets/mysql/7.jpg)
重启mysql
![](./assets/mysql/8.jpg)

## 步骤二

##### 主：

授权
![](./assets/mysql/9.jpg)
##### 从：
设置主从关系
![](./assets/mysql/10.jpg)
查看从状态
![](./assets/mysql/11.jpg)
出现error
![](./assets/mysql/12.jpg)
修改配置
![](./assets/mysql/13.jpg)
![](./assets/mysql/14.jpg)
查看状态
![](./assets/mysql/15.jpg)

## 代码
略