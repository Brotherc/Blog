---
title: kapacitor
tags:
  - kapacitor
---

## lambda使用
**简单使用：**

```
|where(lambda: "tag" == 'v1' AND "field" == 'v2')
|eval(lambda: ("field1" - "field2") / "field3" * 100.0)
|eval(lambda: float("field1") / float("field2") * 100.0)
```
**保留两位小数：**

```
|eval(lambda: float(int("field" * 100.0)) / 100.0) // 保留两位小数
```

**整数转成小数：**

```
|eval(lambda:("field1" + "field2") / 2.0)   
```



## issues

### kapacitor与influxdb在不同机器上通信时的配置
kapacitor在启动时会向配置中的influxBD进行发现与创建订阅，这些订阅告诉InfluxDB将它收到的所有数据发送给Kapacitor。
当kapacitor与influxdb不在同一台机器上时，需要在kapactior的配置中配置influxdb可以通信的IP或主机名。
只要是在influxdb订阅过，influxdb之后都会像这些订阅发送数据。

kapactior.conf:
```
hostname = "localhost" // 默认修改为influxdb可以ping得通的ip或主机名
```