---
title: MybatisPlus
tags:
  - Mybatis-plus
---

## 常用操作

### max查询

```java
// entity
Object obj = new Object;
// 查询max
QueryWrapper<Object> queryWrapper = new QueryWrapper<>();
queryWrapper.select("NVL(MAX(SEQ_NO), 0)");
int seqNo = getObj(queryWrapper, o -> ((BigDecimal) o).intValue());
```

### 数据加解密操作
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
  public void setNonNullParameter(PreparedStatement ps, int i, Object parameter, JdbcType jdbcType) throws SQLException {
    ps.setString(i, AesUtil.encrypt((String) parameter, KEY, IV));
  }

  @Override
  public String getNullableResult(ResultSet rs, String columnName) throws SQLException {
    String columnValue = rs.getString(columnName);
    return decrypt(columnValue);
  }

  @Override
  public String getNullableResult(ResultSet rs, int columnIndex) throws SQLException {
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
自定义查询：
```xml
  <resultMap id="userVo"
             type="com.brotherc.User">
    <result column="user_name" property="userName"
            typeHandler="com.brotherc.AesEncryptHandler" />
  </resultMap>

  <select id="select" resultMap="userVo">
    SELECT * FROM USER;
  </select>
```
注：
- 使用Mybatis或MybtisPlug查询无需额外操作
- 如果查询条件包括加密字段，需要加密查询条件
