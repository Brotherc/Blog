---
title: 【实践】SpringSchedule实现动态配置
tags:
  - Java
  - Spring
---
# 【实践】SpringSchedule实现动态配置

## 背景
在分布式环境下实现调度功能，我们一般会使用一些第三方的分布式定时调度任务平台或引擎，例如XXL-JOB、Elastic-Job、Quartz等。而在单体项目中，我们大多直接使用Spring框架提供的@Scheduled注解实现定时任务。但是@Scheduled注解的cron表达室只能硬编码，无法动态配置，存在局限性。这时我们需要改为使用`org.springframework.scheduling.annotation.SchedulingConfigurer`  

## SchedulingConfigurer
SchedulingConfigurer是@Scheduled 的全局配置入口 / 高级用法，允许我们定制@Scheduled的底层调度行为，可以自定义Spring定时任务使用的调度器（线程池、触发器、动态 cron 等）  

## 动态调度
在使用@Scheduled时，我配置了项目启动60s后，每60s秒执行一次  
```java
@Scheduled(fixedRate = 1000 * 60, initialDelay = 1000 * 60)
public void exec() {
}
```
改为使用SchedulingConfigurer
```java
@Configuration
@EnableScheduling
public class DynamicScheduleConfig implements SchedulingConfigurer {

    @Override
    public void configureTasks(ScheduledTaskRegistrar taskRegistrar) {
        taskRegistrar.addTriggerTask(
                // 要执行的任务
                DynamicScheduleConfig::exec,

                // 动态触发器
                triggerContext -> {
                    // 动态获取执行间隔（单位：毫秒）
                    long interval = getInterval() * 1000;

                    Date lastActualExecutionTime = triggerContext.lastActualExecutionTime();
                    if (lastActualExecutionTime == null) {
                        return new Date(System.currentTimeMillis() + interval);
                    }
                    return new Date(lastActualExecutionTime.getTime() + interval);
                }
        );
    }

    public void exec() {
    }

    public long getInterval() {
        // 此处可以从数据库或配置中心获取
        return 60;
    }
    
}
```

## 动态Cron
如果相实现动态的Cron表达式，则可以将上面的`addTriggerTask`替换成`addCronTask`即可。除了传入执行的任务外再传入表达式，表达式可以选择从数据库或配置中心进行获取  
