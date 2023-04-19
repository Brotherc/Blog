---
title: 问题
tags:
  - 加密/解密
---

### 私钥转报algid parse error, not a sequence
代码：
```java
  PrivateKey getPrivateKey(String key) throws NoSuchAlgorithmException, InvalidKeySpecException {
    byte[] keyBytes = Base64.getDecoder().decode(key);
    PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(keyBytes);
    KeyFactory keyFactory = KeyFactory.getInstance("RSA");
    return keyFactory.generatePrivate(keySpec);
  }
```
错误：  
```java
java.security.spec.InvalidKeySpecException: java.security.InvalidKeyException: IOException : algid parse error, not a sequence
	at sun.security.rsa.RSAKeyFactory.engineGeneratePrivate(RSAKeyFactory.java:217)
	at java.security.KeyFactory.generatePrivate(KeyFactory.java:372)
```
解决：  
```java
  PrivateKey getPrivateKey(String key) throws NoSuchAlgorithmException, InvalidKeySpecException {
    Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());
    byte[] keyBytes = Base64.getDecoder().decode(key);
    PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(keyBytes);
    KeyFactory keyFactory = KeyFactory.getInstance("RSA");
    return keyFactory.generatePrivate(keySpec);
  }
```

参考：  
[https://blog.csdn.net/ls0111/article/details/77533768](https://blog.csdn.net/ls0111/article/details/77533768)  
[https://blog.csdn.net/qq_29583513/article/details/78866461](https://blog.csdn.net/qq_29583513/article/details/78866461)  
[https://www.cnblogs.com/yszr/p/8215075.html](https://www.cnblogs.com/yszr/p/8215075.html)  
