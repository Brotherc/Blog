---
title: 【工作】Mybatis高频代码备忘录
tags:
  - Mybatis
---
# 【工作】Mybatis高频代码备忘录
## Mapper.xml使用
### 代码精简
**消除SQL语句where查询的第一个and**
```xml
<where>
    <if test="attr1 != null and attr1 != ''">
        (LOWER(COLUMN1) LIKE CONCAT(CONCAT('%', LOWER(#{attr1})), '%'))
    </if>

    <if test="attr2 != null and attr2 != ''">
        AND (LOWER(COLUMN2) LIKE CONCAT(CONCAT('%', LOWER(#{attr2})), '%'))
    </if>
</where>
```

### 代码片段复用
**在mapper.xml中引用其他mapper.xml文件中代码片段**  
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

## 复杂操作
### 查询忽略关键字（Oracle）
```java
private static final String SOURCE_UNDERLINE = "_";
private static final String SOURCE_PERCENT = "%";
private static final String SOURCE_SLASHLINE = "\\\\";
private static final String TARGET_UNDERLINE = "\\\\_";
private static final String TARGET_PERCENT = "\\\\%";
private static final String TARGET__SLASHLINE = "\\\\\\\\";

public static String replaceUnderlineOrPercent(String content) {
  if (StringUtils.hasText(content)) {
    String result = content
        .replaceAll("\\\\", "\\\\\\\\")
        .replaceAll("_", "\\\\_")
        .replaceAll("%", "\\\\%");
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

### 数据加解密
```java
/**
 * AES对称加密
 */
public final class AesUtil {

  private AesUtil() {}

  private static final String AES_TYPE = "AES/CBC/PKCS5Padding";
  private static final String AES = "AES";

  public static String encrypt(String message, String key, String iv) {
    try {
      // 偏移量
      IvParameterSpec ivParameterSpec = new IvParameterSpec(iv.getBytes());
      SecretKeySpec secretKeySpec = new SecretKeySpec(key.getBytes(), AES);
      Cipher cipher = Cipher.getInstance(AES_TYPE);
      // 加密
      cipher.init(Cipher.ENCRYPT_MODE, secretKeySpec, ivParameterSpec);
      byte[] encryptedData = cipher.doFinal(message.getBytes(StandardCharsets.UTF_8));
      String sencryptBase64Data = Base64.getEncoder().encodeToString(encryptedData);
      return sencryptBase64Data;
    } catch (Exception e) {
      throw new SystemException(e);
    }
  }

  public static String decrypt(String message, String key, String iv) {
    try {
      IvParameterSpec ivParameterSpec = new IvParameterSpec(iv.getBytes());
      SecretKeySpec secretKeySpec = new SecretKeySpec(key.getBytes(), AES);
      Cipher cipher = Cipher.getInstance(AES_TYPE);
      // 解密
      byte[] bytes = Base64.getDecoder().decode(message.getBytes());
      cipher.init(Cipher.DECRYPT_MODE, secretKeySpec, ivParameterSpec);
      byte[] decryptedData = cipher.doFinal(bytes);
      String decryptedBase64Data = new String(decryptedData, StandardCharsets.UTF_8);
      return decryptedBase64Data;
    } catch (Exception e) {
      throw new SystemException(e);
    }
  }
}
```
```java
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.type.BaseTypeHandler;
import org.apache.ibatis.type.JdbcType;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@Slf4j
public class AesEncryptHandler extends BaseTypeHandler {

  public static final String KEY = "aaaaaaaa";
  public static final String IV = "bbbbbbbbb";

  @Override
  public void setNonNullParameter(
          PreparedStatement ps, int i, Object parameter, JdbcType jdbcType
  ) throws SQLException {
    ps.setString(i, AesUtil.encrypt((String) parameter, KEY, IV));
  }

  @Override
  public String getNullableResult(
          ResultSet rs, String columnName) throws SQLException {
    String columnValue = rs.getString(columnName);
    return decrypt(columnValue);
  }

  @Override
  public String getNullableResult(
          ResultSet rs, int columnIndex) throws SQLException {
    String columnValue = rs.getString(columnIndex);
    return decrypt(columnValue);
  }

  @Override
  public String getNullableResult(CallableStatement cs, int columnIndex)
      throws SQLException {
    String columnValue = cs.getString(columnIndex);
    return decrypt(columnValue);
  }

  private String decrypt(String columnValue) {
    if (columnValue == null) {
      return null;
    }
    try {
      columnValue = AesUtil.decrypt(columnValue, KEY, IV);
    } catch (Exception e) {
      log.error("解密失败，返回原始数据");
    }
    return columnValue;
  }
}
```
```java
@Getter
@Setter
@ToString
@TableName(value = "USER", autoResultMap = true)
@KeySequence(value = "S_USER")
public class User {
  
    @TableField(typeHandler = AesEncryptHandler.class)
    private String userName;

    //...
}
```

```xml
  <!--自定义查询-->
  <resultMap id="userVo"
             type="com.brotherc.User">
    <result column="user_name" property="userName"
            typeHandler="com.brotherc.AesEncryptHandler" />
  </resultMap>

  <select id="select" resultMap="userVo">
    SELECT * FROM USER;
  </select>
```
- 使用Mybatis或MybtisPlug查询无需额外操作
- 如果查询条件包括加密字段，需要加密查询条件

### max查询（Mybatis-plus）
```java
// entity
Object obj = new Object();
// 查询max
QueryWrapper<Object> queryWrapper = new QueryWrapper<>();
queryWrapper.select("NVL(MAX(SEQ_NO), 0)");
int seqNo = getObj(queryWrapper, o -> ((BigDecimal) o).intValue());
```

