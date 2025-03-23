---
title: 【工作】Guava开发必备代码库
tags:
  - Java
  - Guava
---

## Joiner & Splitter
```java
// url路径参数解析
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

<br>

## MD5
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

<br>

## Cache
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

<br>

### File
```java
String text = CharStreams.toString(new InputStreamReader(new FileInputStream("d:/sample.txt"), "UTF-8"));
```
