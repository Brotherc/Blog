---
title: Telegraf
tags:
- telegraf
---
## Jolokia2 Input Plugins
### Jolokia Proxy
- jolokia2 采集分为两种模式，一种是jvm代理，由java应用启动时修改参数引入jolokia2包
  -javaagent:/usr/local/jolokia-jvm-1.5.0-agent.jar=port=8778,host=0.0.0.0
  第二种是Proxy模式，由于第一种应用的限制，proxy模式不需要在应用端修改
- 在某些情况下，不可能在目标平台上部署Jolokia代理。这可能是出于政治原因，
  或者是仪表化服务器上已经建立的JSR-160导出。在这些环境中，Jolokia可以作为JMX代理进行操作。
  在此设置中，代理部署在专用代理Java EE服务器(或其他受支持的代理平台)上。
  代理连接Jolokia JSON请求和对目标服务器的远程JSR-160调用的响应
- Jolokia代理是通用的，与目标服务器无关，因为它通过传入请求(与HTTP代理相同)获取目标的信息。
  由于需要扩展信息，所以只能使用Jolokia POST请求进行代理，因为目前还没有方法将目标信息封装
  在GET Url中。请求的基本Jolokia URL是代理服务器的URL，而目标参数包含在请求中。
  在下一个示例中，一个代理Jolokia请求通过一个代理tomcat-proxy查询服务器jboss的活动线程数，
  该代理在Jolokia上下文中部署了一个代理。代理URL是这样的 `http://jolokia-proxy:8080/jolokia`
- 请求的POST参数如下：
```json
{
  "type":"READ"
  "mbean":"java.lang:type=Threading",
  "attribute":"ThreadCount",
  "target": {
              "url":"service:jmx:rmi:///jndi/rmi://jboss-as:8686/jmxrmi",
              "password":"admin",
              "user":"s!cr!t"
            },
}
```

### WAR Agent
- WAR代理jolokia.war在Java EE服务器中部署为常规Web归档（WAR）
- 此外，这是代理模式的代理，它部署在一个简单、专用的应用服务器中，比如Tomcat或Jetty

### 安装与启动
**步骤1. 在Tomcat服务器上安装Jolokia代理**  
①从以下网址下载最新版本的Jolokia.war文件：[https://jolokia.org/download.html](https://jolokia.org/download.html)  
②将文件重命名jolokia-war-X.X.X.war为jolokia.war。  
③将jolokia.war文件复制到${TOMCAT_HOME}/webapps。  
④添加jolokia为角色tomcat-users.xml（Jolokia 1.6或更高版本强制使用）  

```xml
<role rolename="jolokia"/>
<user username="jolokia" password="jolokia" roles="jolokia"/>
```
⑤启动Tomcat服务器。  
⑥停止Tomcat服务器并修改jolokia的web.xml，添加以下内容（自版本1.5.0起，默认情况下不启用代理模式）  

```xml
<init-param>
  <description>
    Classnames (comma separated) of RequestDispatcher used in addition
    to the LocalRequestDispatcher
  </description>
  <param-name>dispatcherClasses</param-name>
  <param-value>org.jolokia.jsr160.Jsr160RequestDispatcher</param-value>
</init-param>
```
⑦通过访问此URL验证Jolokia代理安装：[http://tomcatip:8080/jolokia/version](http://tomcatip:8080/jolokia/version)  

**步骤2.配置Telegraf Jolokia2输入插件**

```yaml
[[inputs.jolokia2_proxy]]
#   # default_tag_prefix      = ""
#   # default_field_prefix    = ""
#   # default_field_separator = "."
#
#   ## Proxy agent
  url = "http://tomcatip:8080/jolokia"
  username = "jolokia" #如果是jolokia-war-unsecured-1.6.0.war则不需要username
  password = "jolokia" #如果是jolokia-war-unsecured-1.6.0.war则不需要password
  response_timeout = "30s"
#
#   ## Optional TLS config
#   # tls_ca   = "/var/private/ca.pem"
#   # tls_cert = "/var/private/client.pem"
#   # tls_key  = "/var/private/client-key.pem"
#   # insecure_skip_verify = false
#
#   ## Add proxy targets to query
#   # default_target_username = ""
#   # default_target_password = ""
  [[inputs.jolokia2_proxy.target]]
    url = "service:jmx:rmi:///jndi/rmi://ip:port/jmxrmi"
#     # username = ""
#     # password = ""

  [[inputs.jolokia2_agent.metric]]
    name  = "jvm_runtime"
    mbean = "java.lang:type=Runtime"
    paths = ["Uptime"]
```
**步骤3.配置多个targets**

```yaml
  [[inputs.jolokia2_proxy.target]]
    url = "service:jmx:rmi:///jndi/rmi://ip:port/jmxrmi"
#     # username = ""
#     # password = ""
  [[inputs.jolokia2_proxy.target]]
    url = "service:jmx:rmi:///jndi/rmi://ip:port/jmxrmi"
#     # username = ""
#     # password = ""
```

### 例子

**抓取teamcenter(制造业的一个工业软件)的pool_manager**

telegraf.conf
```yaml
[global_tags]

[agent]
  interval = "60s"                         #修改成实际的抓取间隔
  round_interval = true
  metric_batch_size = 1000
  metric_buffer_limit = 10000
  collection_jitter = "0s"
  flush_interval = "10s"
  flush_jitter = "0s"
  precision = ""
  debug = false
  quiet = false
  logfile = ""
  hostname = ""
  omit_hostname = true


###############################################################################
#                            OUTPUT PLUGINS                                   #
###############################################################################
[[outputs.influxdb]]
  urls = ["http://ip:8086"]   #修改成实际的influxdb地址

  database = "volume_monitor"

  skip_database_creation = true

  username = "admin"                             #有权限验证则修改用户名，否则删除该行配置
  password = "admin"                             #有权限验证则修改密码，否则删除该行配置

  namepass=["volume_*"]

[[outputs.influxdb]]
  urls = ["http://ip:8086"]   #修改成实际的influxdb地址

  database = "pool_monitor"

  skip_database_creation = true

  username = "admin"                              #有权限验证则修改用户名，否则删除该行配置
  password = "admin"                              #有权限验证则修改密码，否则删除该行配置

  namepass=["pool_*"]

###############################################################################
#                            PROCESSOR PLUGINS                                #
###############################################################################
[[processors.converter]]
  [processors.converter.fields]
    tag = ["Assigned User"]

[[processors.strings]]
  [[processors.strings.trim_prefix]]
    tag = "jolokia_agent_url"
    prefix = "service:jmx:rmi:///jndi/rmi://"

  [[processors.strings.trim_suffix]]
    tag = "jolokia_agent_url"
    suffix = "/jmxrmi"

###############################################################################
#                            INPUT PLUGINS                                    #
###############################################################################
[[inputs.jolokia2_proxy]]
  name_prefix="volume_"
  url = "http://localhost:8181/jolokia"                          #代理的tomcat地址
  username = "jolokia"                                           #代理的tomcat 用户名
  password = "jolokia"                                           #代理的tomcat 密码
  response_timeout = "60s"

  [[inputs.jolokia2_proxy.target]]
    url = "service:jmx:rmi:///jndi/rmi://ip:8999/jmxrmi"         #ip必须设置为主机名，即使是加了host映射
    username = "username"                                        #jmx有权限验证则修改用户名，否则删除该行配置
    password = "password"                                        #jmx有权限验证则修改密码，否则删除该行配置

  [[inputs.jolokia2_proxy.metric]]
    name  = "fsc_local_read_write"
    mbean = "com.teamcenter.mld:units=mSec,name=LocalReadWholeFile-FMSWebHandlerRoot,type=*,SRC=*"
    paths = ["Active", "ActiveSpan", "AdHocValues", "Age", "CurrentFilter", "FilterAlgorithm", "FilterMovingAvgTime", "FilterNum", "FilterNumLastMax", "FilterSpan", "FilterTimeAvg", "FilterTimeMax",
              "FilterTimeMin", "FilterTimeStdv", "Histogram", "KBytes", "MeasureBytes", "Name", "NumFailures", "NumSuccesses", "TimeAvg", "TimeMax", "TimeMin", "TimeNum", "TimeStdv", "Trace",
              "TraceAboveMsec", "TraceOneShot", "TracePattern"]
    tag_keys = ["name"]

  [[inputs.jolokia2_proxy.metric]]
    name  = "fsc_local_read_write"
    mbean = "com.teamcenter.mld:units=mSec,name=LocalWrite-FMSWebHandlerRoot,type=*,SRC=*"
    paths = ["Active", "ActiveSpan", "AdHocValues", "Age", "CurrentFilter", "FilterAlgorithm", "FilterMovingAvgTime", "FilterNum", "FilterNumLastMax", "FilterSpan", "FilterTimeAvg", "FilterTimeMax",
              "FilterTimeMin", "FilterTimeStdv", "Histogram", "KBytes", "MeasureBytes", "Name", "NumFailures", "NumSuccesses", "TimeAvg", "TimeMax", "TimeMin", "TimeNum", "TimeStdv", "Trace",
              "TraceAboveMsec", "TraceOneShot", "TracePattern"]
    tag_keys = ["name"]

[[inputs.jolokia2_proxy]]
  name_prefix="pool_"

  url = "http://localhost:8181/jolokia"                          #代理的tomcat地址
  username = "jolokia"                                           #代理的tomcat 用户名
  password = "jolokia"                                           #代理的tomcat 密码
  response_timeout = "60s"

  [[inputs.jolokia2_proxy.target]]
    url = "service:jmx:rmi:///jndi/rmi://ip:8088/jmxrmi"         #ip必须设置为主机名，即使是加了host映射
    username = "username"                                        #jmx有权限验证则修改用户名，否则删除该行配置
    password = "password"                                        #jmx有权限验证则修改密码，否则删除该行配置

  [[inputs.jolokia2_proxy.metric]]
    name  = "administer_pool_manager"
    mbean = "Administer PoolA manager :id=*"
    paths = ["Assignment Service", "Host", "Mux", "Number of Assigned Servers", "Number of Cold Servers", "Number of Servers",
              "Number of Servers Terminated Before Normal Timeout", "Number of Warm Servers", "Number of Warming Up Servers",
              "Pool ID", "Servers in Edit Mode", "Servers in Read Mode", "Servers in Stateless Mode"]
    tag_keys = ["id"]

  [[inputs.jolokia2_proxy.metric]]
    name  = "administer_pool_servers"
    mbean = "Administer PoolA servers :id=*"
    paths = ["Abandoned", "Active", "Assigned", "Assigned User", "Health Monitoring", "Last Message Number","Last Message Time",
              "Management Pipe Name", "Process ID", "Provisional", "Ready", "Remove", "Request Pipe Name", "Server ID", "State"]
    tag_keys = ["id"]
```

参考：  
[https://github.com/influxdata/telegraf/tree/master/plugins/inputs/jolokia2](https://github.com/influxdata/telegraf/tree/master/plugins/inputs/jolokia2)  
[https://jolokia.org/features/proxy.html](https://jolokia.org/features/proxy.html)  
[https://jolokia.org/agent.html](https://jolokia.org/agent.html)  
[https://jolokia.org/tutorial.html](https://jolokia.org/tutorial.html)  
[https://jolokia.org/agent/war.html](https://jolokia.org/agent/war.html)  
[http://repo1.maven.org/maven2/org/jolokia/jolokia-war-unsecured/1.6.0/](http://repo1.maven.org/maven2/org/jolokia/jolokia-war-unsecured/1.6.0/)  
[https://jolokia.org/reference/html/proxy.html](https://jolokia.org/reference/html/proxy.html)  
[https://jolokia.org/reference/html/proxy.html](https://jolokia.org/reference/html/proxy.html)  
[https://www.bountysource.com/issues/41049672-redesign-the-jolokia-input-plugin-as-jolokia2](https://www.bountysource.com/issues/41049672-redesign-the-jolokia-input-plugin-as-jolokia2)  
[http://zhoujinl.github.io/2018/05/16/compared/](http://zhoujinl.github.io/2018/05/16/compared/)



## Prometheus Input plugins

需要结合修改过的oracledb_exporter
### 安装与启动
**步骤1.启动oracledb_exporter，并访问oracledb_exporter启动时指定的ip:port，确认数据无误。**  
加载不同配置启动oracledb_exporter：  
oracle.conf

```yaml
connections:
 - connection: userName/userPassword@ip:1521/databaseName
   database: databaseName
   instance: ip
   id: customId
   metrics: process,top_sql,session,wait_time,activity,physical_io,cache
   topsql:
     rownum: 10
```
oracledb_exporter -configfile=oracle.conf -web.listen-address ip:port

oracle_table.conf
```yaml
connections:
 - connection: userName/userPassword@ip:1521/databaseName
   database: databaseName
   instance: ip
   id: customId
   metrics: top_table,tablespace
   toptable:
     rownum: 10
```
oracledb_exporter -configfile=oracle_table.conf -web.listen-address ip:port

**步骤2.配置Telegraf Prometheus输入插件（对于抓取不同metric的输agent，需要不同的telegraf配置）**  
抓取以oracle.conf启动的oracle_exporter的telegraf.conf

```yaml
[global_tags]

[agent]
  interval = "60s"                              #修改成实际的抓取间隔
  round_interval = true
  metric_batch_size = 1000
  metric_buffer_limit = 10000
  collection_jitter = "0s"
  flush_interval = "10s"
  flush_jitter = "0s"
  precision = ""
  debug = false
  quiet = false
  logfile = ""
  hostname = "hostname"                              #修改成抓取的数据库所在主机名
  omit_hostname = false

###############################################################################
#                            OUTPUT PLUGINS                                   #
###############################################################################
[[outputs.influxdb]]
  urls = ["http://ip:8086"]           #修改成实际的influxdb地址
  database = "oracledb_monitor"
  skip_database_creation = true
  username = "admin"                            #有权限验证则修改用户名，否则删除该行配置
  password = "admin"                            #有权限验证则修改密码，否则删除该行配置
  namepass=["oracledb_*"]

###############################################################################
#                            PROCESSOR PLUGINS                                #
###############################################################################
[[processors.converter]]
  [processors.converter.tags]
    string = ["info_version", "sql_text", "sql_username"]
    boolean = ["info_is_rac"]
    float = ["info_uptime", "info_dbtime", "sql_exec"]

###############################################################################
#                            INPUT PLUGINS                                    #
###############################################################################
[[inputs.prometheus]]
  urls = ["http://ip:9162/metrics"]  #修改成实际的exporter地址
  response_timeout = "150s"
```

抓取以oracle_table.conf启动的oracle_exporter的telegraf.conf
```yaml
[global_tags]

[agent]
  interval = "24h"                    #修改成实际的抓取间隔
  round_interval = true
  metric_batch_size = 1000
  metric_buffer_limit = 10000
  collection_jitter = "0s"
  flush_interval = "10s"
  flush_jitter = "0s"
  precision = ""
  debug = false
  quiet = false
  logfile = ""
  hostname = "hostname"                    #修改成抓取的数据库所在主机名
  omit_hostname = false

###############################################################################
#                            OUTPUT PLUGINS                                   #
###############################################################################
[[outputs.influxdb]]
  urls = ["http://ip:8086"]  #修改成实际的influxdb地址
  database = "oracledb_monitor"
  skip_database_creation = true
  username = "admin"                   #有权限验证则修改用户名，否则删除该行配置
  password = "admin"                   #有权限验证则修改密码，否则删除该行配置
  namepass=["oracledb_*"]

###############################################################################
#                            PROCESSOR PLUGINS                                #
###############################################################################
[[processors.converter]]
  [processors.converter.tags]
    integer = ["index_bytes", "lob_bytes", "num_rows"]

###############################################################################
#                            INPUT PLUGINS                                    #
###############################################################################
[[inputs.prometheus]]
  urls = ["http://ip:9162/metrics"]  #修改成实际的exporter地址
  response_timeout = "150s"
```
**步骤3.启动telegraf**
收集不同exporter启动时加载不同的配置文件

```sh
telegraf --config telegraf.conf --input-filter prometheus --processor-filter converter --output-filter influxdb
telegraf --config telegraf_table.conf --input-filter prometheus --processor-filter converter --output-filter influxdb
```



## File plugin inputs
需要使用新增过功能的telegraf  

### 安装与启动

**步骤1.配置telegraf.conf**

```yaml
[global_tags]

[agent]
  interval = "1h"                #修改成实际的抓取间隔
  round_interval = true
  metric_batch_size = 1000
  metric_buffer_limit = 10000
  collection_jitter = "0s"
  flush_interval = "20s"
  flush_jitter = "0s"
  precision = ""
  debug = false
  quiet = false
  hostname = ""
  omit_hostname = false


###############################################################################
#                                  OUTPUTS                                    #
###############################################################################
[[outputs.influxdb]]
  urls = ["http://ip:8086"]     #修改成实际的influxdb地址
  database = "volume_monitor"
  skip_database_creation = true
  username = "admin"                        #有权限验证则修改用户名，否则删除该行配置
  password = "admin"                        #有权限验证则修改密码，否则删除该行配置
  namepass=["volume_*"]


###############################################################################
#                                  INPUTS                                     #
###############################################################################
[[inputs.filecount]]
  name_prefix="volume_"
  directories = ["E:\\volume01"]                    #实际抓取的文件目录
  name = "*"
  recursive = true
  regular_only = true
  size = 0
  large_file_size = 4
  mtime = "0s"
```
**步骤2.启动**

```sh
telegraf --config telegraf.conf --input-filter filecount --output-filter influxdb
```
