---
title: 【问题】RSA私钥获取异常
tags:
  - Java
  - 加解密
---
> 生成PKCS8编码的私钥时报algid parse error, not a sequence
```java
PrivateKey getPrivateKey(String key) throws NoSuchAlgorithmException, InvalidKeySpecException {
    byte[] keyBytes = Base64.getDecoder().decode(key);
    PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(keyBytes);
    KeyFactory keyFactory = KeyFactory.getInstance("RSA");
    return keyFactory.generatePrivate(keySpec);
}
```
错误：
> java.security.spec.InvalidKeySpecException: java.security.InvalidKeyException: IOException : algid parse error, not a sequence
>	at sun.security.rsa.RSAKeyFactory.engineGeneratePrivate(RSAKeyFactory.java:217)
>	at java.security.KeyFactory.generatePrivate(KeyFactory.java:372)

解决：  
```java
PrivateKey getPrivateKey(String key) throws NoSuchAlgorithmException, InvalidKeySpecException {
    // 使用BouncyCastle
    Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());
    byte[] keyBytes = Base64.getDecoder().decode(key);
    PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(keyBytes);
    KeyFactory keyFactory = KeyFactory.getInstance("RSA");
    return keyFactory.generatePrivate(keySpec);
}
```

RSA密钥生成与使用详情见：[https://www.cnblogs.com/yszr/p/8215075.html](https://www.cnblogs.com/yszr/p/8215075.html)  
