---
title: Guava
tags:
  - Guava
---

## 常用操作

### Maps.newHashMap()

```java
// 原生和使用Maps.newHashMap()唯一的区别就是简化代码，一个需要你手动加泛型，一个不需要你手动加
// jdk 1.8 之后已经不用加泛型了
Map<String, Object> result = new HashMap<String,Object>();
Map<String, Object> result = Maps.newHashMap();
```

### Joiner 和 Splitter

```java
Map<String, String> join = Splitter.on("&").withKeyValueSeparator("=").split("id=1&name=lcs");
String split = Joiner.on("&").withKeyValueSeparator("=").join(join);
```
```java
// skipNulls会过滤掉空的参数，包括数组中的null值。
Joiner.on("|").skipNulls().join(stringList);
// usefornull会以参数替换空的参数，包括数组中的null值。
Joiner.on("|").useForNull("no value").join(stringList);
```
```java
// join参数可以很复杂
String result = Joiner.on("_").join("user_common_count", "name", new Object[]{"nick","adidas",10000})
```

### MD5加密

```java
public class HashUtils {

	private static final HashFunction FUNCTION = Hashing.md5();

	private static final String SALT = "abcd";

	public static String encryPassword(String password){
	   HashCode hashCode =	FUNCTION.hashString(password + SALT, Charset.forName("UTF-8"));
	   return hashCode.toString();
	}

}
```
参考：   
[https://www.tinymind.net.cn/articles/6e6def50718372](https://www.tinymind.net.cn/articles/6e6def50718372)  
参考：  
[https://ifeve.com/google-guava-hashing/](https://ifeve.com/google-guava-hashing/)  

### Cache

```java
private final Cache<String, String> cache =
    CacheBuilder.newBuilder().maximumSize(100).expireAfterAccess(15, TimeUnit.MINUTES)
        .removalListener(new RemovalListener<String, String>() {

          @Override
          public void onRemoval(RemovalNotification<String, String> notification) {
            ...
          }
        }).build();
```

### InputStream to String
```java
InputStream inputStream = new FileInputStream("d:/sample.txt");
String text = CharStreams.toString(new InputStreamReader(inputStream, "UTF-8"));
```
参考：  
[https://www.cnblogs.com/mistor/p/6127336.html](https://www.cnblogs.com/mistor/p/6127336.html)  
