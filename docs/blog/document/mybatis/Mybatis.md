---
title: Mybatis
tags:
- Mybatis
---

## 常用操作

### 消除SQL语句where查询的第一个and

```sql
<where>
    <if test="attr1 != null and attr1 != ''">
        (LOWER(COLUMN1) LIKE CONCAT(CONCAT('%', LOWER(#{attr1})), '%'))
    </if>

    <if test="attr2 != null and attr2 != ''">
        AND (LOWER(COLUMN2) LIKE CONCAT(CONCAT('%', LOWER(#{attr2})), '%'))
    </if>
</where>
```

### 在mapper.xml中引用其他mapper.xml文件中代码片段
ShareMapper.xml
```xml
<mapper namespace="com.company.ShareMapper">
    <sql id="someSQL">
       id,name
    </sql>
</mapper>
```
CustomMapper.xml
```xml
<mapper namespace="com.company.CustomMapper">
    <select id="selectSome" >
        select
       <include refid="com.company.ShareMapper.someSQL"/>
        from t
    </select>
</mapper>
```
参考：  
[https://blog.csdn.net/jslcylcy/article/details/65628390](https://blog.csdn.net/jslcylcy/article/details/65628390)  

### 查询忽略关键字(Oracle)
```java
public static String replaceUnderlineOrPercent(String content) {
  String SOURCE_UNDERLINE = "_";
  String SOURCE_PERCENT = "%";
  String SOURCE_SLASHLINE = "\\\\";
  String TARGET_UNDERLINE = "\\\\_";
  String TARGET_PERCENT = "\\\\%";
  String TARGET__SLASHLINE = "\\\\\\\\";
  if (StringUtils.hasText(content)) {
    String result = content.replaceAll("\\\\", "\\\\\\\\").replaceAll("_", "\\\\_").replaceAll("%", "\\\\%");
    return result;
  } else {
    return content;
  }
}
```
```xml
<if test="keyword != null and keyword != ''">
  AND (
  USER_ACCOUNT LIKE CONCAT(CONCAT('%', #{keyword, jdbcType=VARCHAR}), '%')ESCAPE '\' OR
  NICK_NAME LIKE CONCAT(CONCAT('%', #{keyword, jdbcType=VARCHAR}), '%')ESCAPE '\'
  )
</if>
```
参考：  
[http://blog.itpub.net/203348/viewspace-1399770/](http://blog.itpub.net/203348/viewspace-1399770/)  
