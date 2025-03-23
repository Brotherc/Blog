---
title: 【工作】Influxdb篇
tags:
  - 监控
  - influxdb
---
## Query查询
### 注意点
- 查询结果如果要显示tag，则无需指定查询tag，只需要在GROUP BY 中带上tag
- 如果GROUP BY 除了time 还有其它tag，则最好不要加fill(previous)，否则数据可能会错乱
- SELECT * FROM (SELECT ...) 会将值为空的数据过滤掉
- GROUP BY time() 之后要确定用FIRST() 或 LAST()
- 如果查询的字段带有空格，则需要使用"字段名"查询

### Demo
**1.数据**  
以下数据来自telegraf 的[[inputs.prometheus]] 插件，每隔10秒从oracle_exporter中采集数据并写回influxdb，database为telegraf，measurement为oracledb_physical_iops，counter为field，其它为tag，
部分tag省略，部分值已被修改。

| #    | time              | counter | database | dbinstance | host      | id    | type       |
| ---- | ----------------- | ------- | -------- | ---------- | --------- | ----- | ---------- |
| 1    | 2019/3/28 6:21:20 | 1       | orcl     | ip1        | localhost | orcl  | read_iops  |
| 2    | 2019/3/28 6:21:20 | 2       | orcl     | ip1        | localhost | orcl  | write_iops |
| 3    | 2019/3/28 6:21:20 | 1       | orcl2    | ip2        | localhost | orcl2 | read_iops  |
| 4    | 2019/3/28 6:21:20 | 2       | orcl2    | ip2        | localhost | orcl2 | write_iops |
| 5    | 2019/3/28 6:21:30 | 1       | orcl     | ip1        | localhost | orcl  | read_iops  |
| 6    | 2019/3/28 6:21:30 | 2       | orcl     | ip1        | localhost | orcl  | write_iops |
| 7    | 2019/3/28 6:21:30 | 1       | orcl2    | ip2        | localhost | orcl2 | read_iops  |
| 8    | 2019/3/28 6:21:30 | 2       | orcl2    | ip2        | localhost | orcl2 | write_iops |
| ...  |                   |         |          |            |           |       |            |
| 13   | 2019/3/28 6:21:50 | 1       | orcl     | ip1        | localhost | orcl  | read_iops  |
| 14   | 2019/3/28 6:21:50 | 2       | orcl     | ip1        | localhost | orcl  | write_iops |
| 15   | 2019/3/28 6:21:50 | 1       | orcl2    | ip2        | localhost | orcl2 | read_iops  |
| 16   | 2019/3/28 6:21:50 | 2       | orcl2    | ip2        | localhost | orcl2 | write_iops |

**2.maven**  
pom.xml：

```xml
        <!-- https://mvnrepository.com/artifact/org.influxdb/influxdb-java -->
        <dependency>
            <groupId>org.influxdb</groupId>
            <artifactId>influxdb-java</artifactId>
            <version>2.14</version>
        </dependency>
```
**3.后端(springboot)**  
application.yml：

```yaml
spring:
  influx:
    url: http://localhost:8086
```
config：
```java
@Component
public class InfluxDbHolder {
    private final InfluxDBResultMapper mapper;
    private final InfluxDB db;

    @Autowired
    public InfluxDbHolder(InfluxDB db) {
        this.db = db;
        this.mapper = new InfluxDBResultMapper();
    }

    public InfluxDBResultMapper getMapper() {
        return mapper;
    }

    public InfluxDB getDb() {
        return db;
    }
}
```
entity：
```java
@Data
@Measurement(name = "oracledb_physical_iops")
public class DbIOps {
    @Column(name = "time")
    @JsonDeserialize(using = InstantJacksonDeserialize.class)
    @JsonSerialize(using = InstantJacksonSerializer.class)
    private Instant time;

    @Column(name = "type", tag = true)
    private String type;

    @Column(name = "counter")
    private Integer counter;
}
```
```java
@Data
public class InfluxdbCriteria {
    private Integer during;
    private Integer groupTime;
    private Integer offset;

    public void validate() {
        if (during == null) {
            during = 1;
        }
        if (groupTime == null) {
            groupTime = 10;
        }
        if (offset == null) {
            offset = 0;
        }
    }
}
```
service：
```java
    public Map<Instant, List<DbIOps>> getDatabaseIOps(String dbId, InfluxdbCriteria databaseCriteria) {
        databaseCriteria.validate();
        Integer during = databaseCriteria.getDuring();
        Integer groupTime = databaseCriteria.getGroupTime();
        Integer offset = databaseCriteria.getOffset();
        String sql = "SELECT first(counter) as counter " +
                        "FROM oracledb_physical_iops " +
                            "WHERE id='"+ dbId + "' AND time > now() - " + during + "h " +
                                "group by type, time("+ groupTime + "m, " + offset + "s)";
        Query query = new Query(sql, "telegraf");
        QueryResult result = holder.getDb().query(query);
        List<DbIOps> dbIOpsList = holder.getMapper().toPOJO(result, DbIOps.class);
        Map<Instant, List<DbIOps>> map = dbIOpsList.stream().collect(Collectors.groupingBy(DbIOps::getTime));

        //对时间排序
        Map<Instant, List<DbIOps>> sortMap = new TreeMap<>((Instant instant1, Instant instant2) -> instant1.compareTo(instant2));
        sortMap.putAll(map);

        return sortMap;
    }
```
controller：
```java
    @GetMapping("/databaseIOps/{dbId}")
    public ResponseEntity getDatabaseIOps(@PathVariable String dbId, InfluxdbCriteria databaseCriteria) {
        return ResponseEntity.ok(databaseService.getDatabaseIOps(dbId, databaseCriteria));
    }
```
**4.前端(angular)**  
service：
```typescript
    /**
     * 查询数据库IOpsmetrics
     */
    getDatabaseIOps(dbId: string, during: number): Observable<any> {
        // during: 最近during小时
        const params = DateUtils.getInfluxdbParams(during);

        return this.http.get<any>(`databaseIOps/${dbId}`, {
            params: {
                during: String(during),
                groupTime: String(params.groupTime),
                offset: String(params.offset)
            }
        }).pipe(
            retry(1),
            catchError(this.handleError.bind(this))
        );
    }
```
utils：
```typescript
export class DateUtils {
    public static getInfluxdbParams(during: number): any {
        let groupTime = 10;
        let offset = 0;
        if (during === 1) {
            groupTime = 5;
            offset = (moment().minutes() % 5) * 60 - 30;
        } else if (during === 3) {
            groupTime = 15;
            offset = (moment().minutes() % 15) * 60 - 30;
        } else if (during === 12) {
            groupTime = 60;
            offset = (moment().minutes() % 60) * 60 - 30;
        }
        return {groupTime: groupTime, offset: offset};
    }
}
```



## Issues

### Java客户端连接超时

**org.influxdb.InfluxDBIOException: java.net.SocketTimeoutException: timeout**

使用influxdb的java客户端连接influxdb：
```java
InfluxDB influxDB = InfluxDBFactory.connect("http://localhost:8086");
```
报错：
```java
Exception in thread "main" org.influxdb.InfluxDBIOException: java.net.SocketTimeoutException: timeout
	at org.influxdb.impl.InfluxDBImpl.execute(InfluxDBImpl.java:800)
	at org.influxdb.impl.InfluxDBImpl.write(InfluxDBImpl.java:455)
```
更改OKHttpClient的默认超时：
```java
OkHttpClient.Builder client = new OkHttpClient.Builder()
        .connectTimeout(1, TimeUnit.MINUTES)
        .readTimeout(1, TimeUnit.MINUTES)
        .writeTimeout(2, TimeUnit.MINUTES)
        .retryOnConnectionFailure(true);
InfluxDB influxDB = InfluxDBFactory.connect("http://localhost:8086", client);
```
参考：  
[https://github.com/influxdata/influxdb-java](https://github.com/influxdata/influxdb-java)  
[https://stackoverflow.com/questions/50922473/influxdbioexception-java-net-sockettimeoutexception-timeout](https://stackoverflow.com/questions/50922473/influxdbioexception-java-net-sockettimeoutexception-timeout)  