---
title: 【问题】Skywalking启动异常
tags:
  - Skywalking
---
# 【问题】Skywalking启动异常
## 客户端启动报错
### 问题描述
Skywalking服务端部署在192.168.1.100，将skywalking-agent.jar拷贝至客户端所在服务器的`/user/local/skywalking-agent.jar`，启动java客户端应用
```sh
java -jar 
-javaagent:/user/local/skywalking-agent.jar 
-DSW_AGENT_COLLECTOR_BACKEND_SERVICES=192.168.1.100:11800 
-DSW_AGENT_NAME=client-service 
/user/local/app/client-service.jar
```

启动报错
><span style="font-size: 11px">// 省略了前面部分无关日志</span>  
><span style="font-size: 11px">Caused by: java.lang.ExceptionInInitializerError: `agent.service_name` is missing.</span>  
>&nbsp;&nbsp;<span style="font-size: 11px">at org.apache.skywalking.apm.agent.core.conf.SnifferConfigInitializer.initializeCoreConfig(SnifferConfigInitializer.java:109)</span>  
>&nbsp;&nbsp;<span style="font-size: 11px">at org.apache.skywalking.apm.agent.SkyWalkingAgent.premain(SkyWalkingAgent.java:68)</span>  
>&nbsp;&nbsp;<span style="font-size: 11px">... 6 more</span>  

### 解决办法
把SW_AGENT_COLLECTOR_BACKEND_SERVICES替换为skywalking.collector.backend_service  
把SW_AGENT_NAME替换为skywalking.agent.service_name  
```sh
java -jar 
-javaagent:/user/local/skywalking-agent.jar 
-Dskywalking.collector.backend_service=192.168.1.100:11800 
-Dskywalking.agent.service_name=client-service 
/user/local/app/client-service.jar
```

## 客户端Agent启动报错
### 问题描述
Skywalking服务端部署在192.168.1.100，将skywalking-agent.jar拷贝至客户端所在服务器的`/user/local/skywalking-agent.jar`，启动java客户端应用
```sh
java -jar 
-javaagent:/user/local/skywalking-agent.jar 
-Dskywalking.collector.backend_service=192.168.1.100:11800 
-Dskywalking.agent.service_name=client-service 
/user/local/app/client-service.jar
```

请求client-service服务的接口，发现Skywalking服务端UI界面并未查询出任何数据，查看client-service服务启动日志显示错误
> <span style="font-size: 10px">ERROR 2023-04-19 08:51:43.483 main SnifferConfigInitializer : Failed to read the config file, skywalking is going to run in default config.</span>   
> <span style="font-size: 10px">org.apache.skywalking.apm.agent.core.conf.ConfigNotFoundException: Failed to load agent.config.</span>  
>&nbsp;&nbsp;<span style="font-size: 11px">at org.apache.skywalking.apm.agent.core.conf.SnifferConfigInitializer.loadConfig(SnifferConfigInitializer.java:259)</span>  
>&nbsp;&nbsp;<span style="font-size: 11px">at org.apache.skywalking.apm.agent.core.conf.SnifferConfigInitializer.initializeCoreConfig(SnifferConfigInitializer.java:72)</span>  
>&nbsp;&nbsp;<span style="font-size: 11px">at org.apache.skywalking.apm.agent.SkyWalkingAgent.premain(SkyWalkingAgent.java:68)</span>  
>&nbsp;&nbsp;<span style="font-size: 11px">at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)</span>  
>&nbsp;&nbsp;<span style="font-size: 11px">at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)</span>  
>&nbsp;&nbsp;<span style="font-size: 11px">at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)</span>  
>&nbsp;&nbsp;<span style="font-size: 11px">at java.lang.reflect.Method.invoke(Method.java:498)</span>  
>&nbsp;&nbsp;<span style="font-size: 11px">at sun.instrument.InstrumentationImpl.loadClassAndStartAgent(InstrumentationImpl.java:386)</span>  
>&nbsp;&nbsp;<span style="font-size: 11px">at sun.instrument.InstrumentationImpl.loadClassAndCallPremain(InstrumentationImpl.java:401)</span>  

### 解决办法
从官网下载skywalking-agent.zip后进行解压，需要把整个skywalking-agent目录放到服务器上，而不是只拷贝一个skywalking-agent.jar
```text
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
java -jar 
-javaagent:/user/local/skywalking-agent/skywalking-agent.jar 
-Dskywalking.collector.backend_service=192.168.1.100:11800 
-Dskywalking.agent.service_name=client-service 
/user/local/app/client-service.jar
```