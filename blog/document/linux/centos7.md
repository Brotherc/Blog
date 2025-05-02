---
title: centos7-知识点
tags:
  - linux
---
## 操作系统主机名修改
centos6:
```
#hostname //查看主机名
#hostname newhostname //在当前会话修改主机名为newhostname，重启后失效

#vim /etc/sysconfig/network //修改其中的HOSTNAME=newhostname，重启后依旧生效
```

centos7：
```
#hostname //查看主机名

#vim /etc/hostname //直接修改其中的主机名，重启后依旧生效
```



## 时区操作

centos6:
```sh
date // 查看时间
date -R //查看时区
cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime // 修改时区为东京时区
```

centos7:
```sh
timedatectl // 查看时间、时区。。。
timedatectl set-timezone Asia/Tokyo // 修改时区为东京时区
timedatectl set-local-rtc 1 //设置rtc时间与local时间相同
```



## centos7 ip操作

```sh
ip addr // 查看ip地址信息
ip a add 192.168.8.149/24 dev eth0:2  // 添加网卡ip
ip a del 192.168.8.149/24 dev eth0:2  // 删除网卡ip
ip link set dev eth0 down // 将接口设备关闭
ip link set dev eth0 up // 将接口设备启用
```
