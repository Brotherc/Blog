---
title: 【问题】RSA私钥获取异常
tags:
  - Java
  - 加解密
---
# 【问题】RSA私钥获取异常
## 问题描述
生成PKCS8编码的私钥时报`algid parse error, not a sequence`
```java
PrivateKey getPrivateKey(String key) 
        throws NoSuchAlgorithmException, InvalidKeySpecException {
    byte[] keyBytes = Base64.getDecoder().decode(key);
    PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(keyBytes);
    KeyFactory keyFactory = KeyFactory.getInstance("RSA");
    return keyFactory.generatePrivate(keySpec);
}
```
错误：
> <span style="font-size: 11px">java.security.spec.InvalidKeySpecException: java.security.InvalidKeyException: IOException : algid parse error, not a sequence</span>  
>&nbsp;&nbsp;<span style="font-size: 11px">at sun.security.rsa.RSAKeyFactory.engineGeneratePrivate(RSAKeyFactory.java:217)</span>  
>&nbsp;&nbsp;<span style="font-size: 11px">at java.security.KeyFactory.generatePrivate(KeyFactory.java:372)</span>  

## 解决办法
使用BouncyCastle
```java
PrivateKey getPrivateKey(String key) 
        throws NoSuchAlgorithmException, InvalidKeySpecException {
    // 使用BouncyCastle
    Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());
    byte[] keyBytes = Base64.getDecoder().decode(key);
    PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(keyBytes);
    KeyFactory keyFactory = KeyFactory.getInstance("RSA");
    return keyFactory.generatePrivate(keySpec);
}
```

RSA密钥生成与使用详情见：[https://www.cnblogs.com/yszr/p/8215075.html](https://www.cnblogs.com/yszr/p/8215075.html)  
