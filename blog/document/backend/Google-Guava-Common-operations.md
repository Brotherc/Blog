---
title: 【工作】Guava开发必备代码库
tags:
  - Java
  - Guava
---
# 【工作】Guava开发必备代码库
## Joiner & Splitter
url路径参数解析
```java
Map<String, String> join = Splitter
        .on("&").withKeyValueSeparator("=").split("id=1&name=lcs");
String split = Joiner
        .on("&").withKeyValueSeparator("=").join(join);
```
- skipNulls：会过滤掉空的参数，包括数组中的null值。
- usefornull：会以参数替换空的参数，包括数组中的null值。
```java
Joiner.on("|").skipNulls().join(stringList);
Joiner.on("|").useForNull("no value").join(stringList);
```
join参数可以支持各种类型
```java
String result = Joiner.on("_")
        .join("user_common_count", "name", new Object[]{"nick","adidas",10000})
```



## MD5
```java
public class HashUtils {
	private static final HashFunction FUNCTION = Hashing.md5();
	private static final String SALT = "abcd";

	public static String encryPassword(String password) {
	   return FUNCTION.hashString(
               password + SALT, Charset.forName("UTF-8")).toString();
	}
}
```



## Cache
```java
private final Cache<String, String> cache =
    CacheBuilder.newBuilder()
        .maximumSize(100)
        .expireAfterAccess(15, TimeUnit.MINUTES)
        .removalListener(new RemovalListener<String, String>() {
          @Override
          public void onRemoval(RemovalNotification<String, String> notification) {
            // ...
          }
        }).build();
```



## File
```java
String text = CharStreams.toString(
        new InputStreamReader(new FileInputStream("d:/sample.txt"), "UTF-8"));
```
