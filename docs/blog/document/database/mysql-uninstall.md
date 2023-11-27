---
title: MySQL-卸载
tags:
- MySQL
---
## windows卸载8.0
**1.停止mysql服务**  
点击win + R，输入services.msc，打开服务列表，选中MySQL80，右键停止  

**2.删除Mysql相关目录**  
以下目录如果存在则将其删除  

```
C:\Program Files\MySQL  
C:\Program Files (x86)\MySQL  
C:\ProgramData\MySQL  
自定义安装时手动选择的目录  
```

**3.卸载Mysql相关应用**  
点击开始-设置-应用，搜索mysql，将搜索出来的相关应用进行删卸载  
这里在删除MySQL Connector Net XXX时，可能会删除不掉，需要借助[windows故障排除程序](https://support.microsoft.com/en-us/topic/fix-problems-that-block-programs-from-being-installed-or-removed-cca7d1b6-65a9-3d98-426b-e9f927e1eb4d)  
具体参考：[https://blog.csdn.net/weixin_63836026/article/details/124429837](https://blog.csdn.net/weixin_63836026/article/details/124429837)  

**4.删除注册表**  
点击win + R，输入regedit，以下目录如果存在则将其删除

```
HKEY_LOCAL_MACHINE/SYSTEM/ControlSet001/Services
HKEY_LOCAL_MACHINE/SYSTEM/ControlSet001/Services/Eventlog/Application
HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Services
HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Services/Eventlog/Application
```

**5.删除系统变量**  
选择电脑-属性-高级系统设置-环境变量-系统变量，删除Path变量中Mysql相关的配置