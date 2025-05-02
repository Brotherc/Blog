---
title: Logback
tags:
  - Logback
---
## Logback的主要模块
### logback-access
与server容器集成，提供通过http来访问日志的功能，我们的第三方软件可以通过logback-access来访问到logback里面记录的日志，例如kibanner等都会用到这个模块。
### logback-classic
log4j的改良版本，同时完整的实现了slef4j api，使你可以很方便的更换成其他的日志系统，比如log4j等。
### logback-core
为我们前两个模块提供了基础的服务。



## Logback的主要标签
### logger
作为日志的记录器，主要用于存放日志对象，也可以定义日志的类型还有级别等。
### appender
用于指定日志输出的目的地，可以是控制台、文件、远程套接字服务器等。
### layout
用于格式化日志信息输出的。



## Logback的加载顺序
程序在运行的时候会按照一定的顺序去加载我们logback相关的配置文件

**1. 如果我们在配置里面指定了logback.configurationFile这个属性那我们将使用这个属性的的地址去寻找相关的配置文件**  

```sh
java -Dlogback.configurationFile=xxxxxx/xxx.xml
```
**2.如果没有配置这个属性他将会加载我们classpath下的logback.groovy文件**  
**3.如果也找不到这个文件，才会加载同级目录下的logback-test.xml文件**  
**4.如果也没有，它就会加载logback.xml文件**  
**5.如果都没找到上述的配置文件，jdk1.6以上就会调用service-provider loading facility去查找com.qos.logback.classic.spi.Configurator这个接口的第一个实现类**  
**6.如果上面的都没有，则会使用ch.qos.logback.classic.BasicConfigurator这个实现类，就是直接在控制台输出**

```xml
<?xml version="1.0" encoding="utf-8" standalone="no"?>
<!-- scan="true" 如果配置文件被改变，将会重新去加载 -->
<!-- scanPeriod 设置监测我们的配置文件是否有修改时间的时间间隔，默认单位是毫秒，当scan为true时生效，每分钟扫一下配置文件看有没有发生变化如果有变化就会重新去加载配置，这样就不需要重启服务器 -->
<!-- debug 打印出logback的内部信息 实时查看logback的运行状态 -->
<configuration scan="true" scanPeriod="60 seconds" debug="false">
	<!-- 定义参数常量 -->
	<!-- TRACE<DEBUG<INFO<WARN<ERROR >以上的级别才会显示-->
	<property name="log.level" value="debug" />
	<!-- 文件保留的时长 -->
	<property name="log.maxHistory" value="30" />
	<!-- 日志存储的根路径 -->
	<property name="log.filePath" value="${catalina.base}/logs/webapps" />
	<!-- 日志展示的格式 -->
	<property name="log.pattern" value="%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{50} -
		%msg%n" />
	<!-- 控制台设置 -->
	<appender name="consoleAppender" class="ch.qos.logback.core.ConsoleAppender">
		<!-- 将一个event事件转化为一组byte数组，还会将转化后的数据输出到文件中 -->
		<encoder>
			<pattern>${log.pattern}</pattern>
		</encoder>
	</appender>
	<!-- DEBUG -->
	<!-- 随着大小或时间滚动日志 -->
	<appender name="debugAppender" class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
		<!-- 文件路径 -->
		<file>${log.filePath}/debug.log</file>
		<rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
			<!-- 文件名称 -->
			<fileNamePattern>${log.filePath}/debug/debug.%d{yyyy-MM-dd}.%i.log.gz</fileNamePattern>
			<!-- 文件最大保存历史数量 -->
			<maxHistory>${log.maxHistory}</maxHistory>
		</rollingPolicy>
		<encoder>
			<pattern>${log.pattern}</pattern>
		</encoder>
		<filter class="ch.qos.logback.classic.filter.LevelFilter">
			<level>DEBUG</level>
			<onMatch>ACCEPT</onMatch>
			<onMismatch>DENY</onMismatch>
		</filter>
	</appender>
	<!-- INFO -->
	<appender name="infoAppender" class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
		<!-- 文件路径 -->
		<file>${log.filePath}/info.log</file>
		<rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
			<!-- 文件名称 -->
			<fileNamePattern>${log.filePath}/info/info.%d{yyyy-MM-dd}.%i.log.gz</fileNamePattern>
			<!-- 文件最大保存历史数量 -->
			<maxHistory>${log.maxHistory}</maxHistory>
		</rollingPolicy>
		<encoder>
			<pattern>${log.pattern}</pattern>
		</encoder>
		<filter class="ch.qos.logback.classic.filter.LevelFilter">
			<level>INFO</level>
			<onMatch>ACCEPT</onMatch>
			<onMismatch>DENY</onMismatch>
		</filter>
	</appender>
	<!-- ERROR -->
	<appender name="errorAppender" class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
		<!-- 文件路径 -->
		<file>${log.filePath}/error.log</file>
		<rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
			<!-- 文件名称 -->
			<fileNamePattern>${log.filePath}/error/error.%d{yyyy-MM-dd}.%i.log.gz</fileNamePattern>
			<!-- 文件最大保存历史数量 -->
			<maxHistory>${log.maxHistory}</maxHistory>
		</rollingPolicy>
		<encoder>
			<pattern>${log.pattern}</pattern>
		</encoder>
		<filter class="ch.qos.logback.classic.filter.LevelFilter">
			<level>ERROR</level>
			<onMatch>ACCEPT</onMatch>
			<onMismatch>DENY</onMismatch>
		</filter>
	</appender>
	<!-- logger 存放日志对象，同时告诉我们logback我们需要关注哪个package下的信息 -->
	<!-- additivity 如果additivity为true那么root下面的appender也会想到logger下面 -->
	<logger name="com.brotherc.demo" level="${log.level}" additivity="true">
		<appender-ref ref="debugAppender" />
		<appender-ref ref="infoAppender" />
		<appender-ref ref="errorAppender" />
	</logger>
	<!--root 就是特殊的logger，根logger。如果logger没有指定level，默认继承root -->
	<root level="info">
		<appender-ref ref="consoleAppender" />
	</root>
</configuration>
```
