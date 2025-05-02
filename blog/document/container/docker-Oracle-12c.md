---
title: docker-Oracle 12c
tags:
  - docker
---

## 1.配置阿里的docker源

```
cat /etc/docker/daemon.json
{
"registry-mirrors": ["https://pee6w651.mirror.aliyuncs.com"]
}
```
## 2.重启docker服务

```sh
systemctl restart docker
```
## 3.拉取镜像

```sh
docker pull sath89/oracle-12c
```
## 4.运行容器

```sh
docker run -d --name oracle -p 8080:8080 -p 1521:1521 -v $PWD/data:/mnt -e TZ=Asia/Shanghai sath89/oracle-12c
```
## 5.进行容器

```sh
docker exec -it ef7e5bc1c20e /bin/bash (ef7e5bc1c20e自己容器的ID)
```
## 6.相关操作

```
#root用户切换到oracle用户
su oracle

#使用sysdba登陆
/u01/app/oracle-product/12.1.0/xe/bin/sqlplus / as sysdba

#create tablespace 表空间名称 datafile 表空间路劲 size 3000m;
SQL>create tablespace bspdb datafile '/u01/app/oracle/oradata/xe/bspdb.dbf' size 3000m;

#create user 用户名 identified by 密码 default tablespace 用户默认使用哪一个表空间;
SQL>create user bspdb identified by 123456 default tablespace bspdb;

#grant 角色1,角色2 to 用户名;
SQL>grant dba, connect to bspdb;
```

参考：  
[https://www.cnblogs.com/Dev0ps/p/10676930.html](https://www.cnblogs.com/Dev0ps/p/10676930.html)  
[https://blog.csdn.net/Damionew/article/details/84566718](https://blog.csdn.net/Damionew/article/details/84566718)  
[https://www.cnblogs.com/forturn/p/9371841.html](https://www.cnblogs.com/forturn/p/9371841.html)    
