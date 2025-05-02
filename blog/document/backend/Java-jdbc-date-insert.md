---
title: Java-jdbc
tags:
  - Java
---
## 存储时间字段
- 插入字段为时间
- 插入字段为时间戳
```java
Connection conn = ……        //省略部分代码
String sql = "INSERT INTO users(date, datetime) VALUES (?,?)"; 
 //定义插入数据的SQL语句
PreparedStatement ps = conn.prepareStatement(sql);// 实例化PreparedStatement对象
ps.setDate(1, new java.sql.Date(new Date().getTime()));// 给参数赋值
ps.setTimestamp(2, new java.sql.Timestamp(new Date().getTime()));// 给参数赋值
```

## 预编译 + 批处理
```java
  // 外层需要close connection
  private void executeBatch(List<Integer> list, Connection connection) {
    String sql = "INSERT INTO user(name)VALUES(?)";
    try (
        PreparedStatement ps = connection.prepareStatement(sql);
    ) {
      for (int i = 0; i < list.size(); i++) {
        ps.setLong(1, i);
        ps.addBatch();

        if (i % 500 == 0) {
          ps.executeBatch();
          ps.clearBatch();
          connection.commit();
        }
      }
      ps.executeBatch();
      connection.commit();
    } catch (Exception e) {
      try {
        connection.rollback();
      } catch (SQLException ex) {
        log.error("数据回滚失败！ error", ex);
      }
    }
  }
```
参考：  
[https://blog.csdn.net/qq_44891295/article/details/103795164](https://blog.csdn.net/qq_44891295/article/details/103795164)  