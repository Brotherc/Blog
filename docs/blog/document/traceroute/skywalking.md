---
title: Skywalking
tags:
  - Skywalking
---

## Issue

### 1.启动读取不到相关参数

在服务器A(192.168.1.100)上搭建Skywalking服务端，将skywalking-agent.jar拷贝至服务器B的`/user/local/skywalking-agent.jar`，在服务器B上启动java程序  

```sh
java -jar -javaagent:/user/local/skywalking-agent.jar -DSW_AGENT_COLLECTOR_BACKEND_SERVICES=192.168.1.100:11800 -DSW_AGENT_NAME=client-service /user/local/app/client-service.jar
```

**问题：**

```java
//启动报错，省略了前面部分无关日志
Caused by: java.lang.ExceptionInInitializerError: `agent.service_name` is missing.
        at org.apache.skywalking.apm.agent.core.conf.SnifferConfigInitializer.initializeCoreConfig(SnifferConfigInitializer.java:109)
        at org.apache.skywalking.apm.agent.SkyWalkingAgent.premain(SkyWalkingAgent.java:68)
        ... 6 more
```

**解决：**

把SW_AGENT_COLLECTOR_BACKEND_SERVICES替换为skywalking.collector.backend_service  

把SW_AGENT_NAME替换为skywalking.agent.service_name  

```sh
java -jar -javaagent:/user/local/skywalking-agent.jar -Dskywalking.collector.backend_service=192.168.1.100:11800 -Dskywalking.agent.service_name=client-service /user/local/app/client-service.jar
```

*其实这里是由于下文第二个问题引起的，可直接按第二个问题的解决方案  



### 2.Agent启动报错

在服务器A(192.168.1.100)上搭建Skywalking服务端，将skywalking-agent.jar拷贝至服务器B的`/user/local/skywalking-agent.jar`，在服务器B上启动java程序  

```sh
java -jar -javaagent:/user/local/skywalking-agent.jar -Dskywalking.collector.backend_service=192.168.1.100:11800 -Dskywalking.agent.service_name=client-service /user/local/app/client-service.jar
```

**问题：**

请求client-service服务的接口，发现Skywalking服务端UI界面并未查询出任何数据，查看client-service服务启动日志显示错误  

```java
ERROR 2023-04-19 08:51:43.483 main SnifferConfigInitializer : Failed to read the config file, skywalking is going to run in default config. 
org.apache.skywalking.apm.agent.core.conf.ConfigNotFoundException: Failed to load agent.config.
        at org.apache.skywalking.apm.agent.core.conf.SnifferConfigInitializer.loadConfig(SnifferConfigInitializer.java:259)
        at org.apache.skywalking.apm.agent.core.conf.SnifferConfigInitializer.initializeCoreConfig(SnifferConfigInitializer.java:72)
        at org.apache.skywalking.apm.agent.SkyWalkingAgent.premain(SkyWalkingAgent.java:68)
        at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
        at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
        at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
        at java.lang.reflect.Method.invoke(Method.java:498)
        at sun.instrument.InstrumentationImpl.loadClassAndStartAgent(InstrumentationImpl.java:386)
        at sun.instrument.InstrumentationImpl.loadClassAndCallPremain(InstrumentationImpl.java:401)
```

**解决：**

从官网下载skywalking-agent.zip后进行解压，需要把整个skywalking-agent目录放到服务器上，而不是只拷贝一个skywalking-agent.jar

```java
|-user
 |-local
  |-skywalking-agent
   |-activations
   |-bootstrap-plugins
   |-config
   |-licenses
   |-logs
   |-optional-plugins
   |-optional-reporter-plugins
   |-plugins
   |-LICENSE
   |-NOTICE
   |-skywalking-agent.jar
```

```sh
java -jar -javaagent:/user/local/skywalking-agent/skywalking-agent.jar -Dskywalking.collector.backend_service=192.168.1.100:11800 -Dskywalking.agent.service_name=client-service /user/local/app/client-service.jar
```

参考：  

[https://blog.csdn.net/HcJsJqJSSM/article/details/127403323](https://blog.csdn.net/HcJsJqJSSM/article/details/127403323)  

[https://www.cnblogs.com/windysai/p/16311091.html](https://www.cnblogs.com/windysai/p/16311091.html)  