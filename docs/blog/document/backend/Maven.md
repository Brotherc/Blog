---
title: 【拓展】Maven高级应用
tags:
  - Maven
---

## 测试报告
**maven-antrun-plugin和surefire生成测试报告指定范围**
```shell
mvn clean package surefire-report:report -Dtest=类名
mvn clean package surefire-report:report -Dtest=类名#方法名,类名#方法名
```