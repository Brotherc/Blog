---
title: Java-常用操作
tags:
  - Java
---

### java对Map进行排序
#### 根据key排序
jdk8:
```java
// map为待排序的Map
Map<String, String> sortMap = new TreeMap<>((String s1, String s2) -> s1.compareTo(s2));
sortMap.putAll(map);

return sortMap;
```
参考：  
[https://blog.csdn.net/weixin_41415986/article/details/82781618](https://blog.csdn.net/weixin_41415986/article/details/82781618)

### 快速生成Map
```java
private Map<Integer, String> newsEventMap = new HashMap<Integer, String>(){{
  put("k1", "v1");
  put("k2", "v2");
}};
```
参考：  
[https://blog.csdn.net/molingduzun123/article/details/50634637/](https://blog.csdn.net/molingduzun123/article/details/50634637/)

### 获取hashmap的第一个元素
```java
map.entrySet().stream().findFirst();
```
参考：  
[https://stackoverflow.com/questions/35658606/how-to-get-the-first-key-of-a-hashmap/35658690](https://stackoverflow.com/questions/35658606/how-to-get-the-first-key-of-a-hashmap/35658690)

### 交换List中两个元素位置
```java
public class Solution{
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        for (int i = 0; i < 10; ++i){
            list.add(i);
        }
        Collections.swap(list, 0, 6);
        System.out.println(list);
    }
}
```

### list to map
```java
list.stream().collect(Collectors.toMap(Object::getKey, Object::getValue));// key value
```
参考：  
[https://blog.csdn.net/qq_39629277/article/details/83012548](https://blog.csdn.net/qq_39629277/article/details/83012548)  
```java
// guava
Maps.uniqueIndex(list, Object::getKey);// key objecct
```
参考：  
[https://blog.csdn.net/weixin_34186931/article/details/92378020](https://blog.csdn.net/weixin_34186931/article/details/92378020)  

### collectors.toMap()值为空导致空指针解决方法
```java
Map<Integer, Boolean> collect = list.stream()
        .collect(HashMap::new, (m,v)-> m.put(v.getId(), v.getAnswer()), HashMap::putAll);
```
参考:  
[https://stackoverflow.com/questions/24630963/nullpointerexception-in-collectors-tomap-with-null-entry-values](https://stackoverflow.com/questions/24630963/nullpointerexception-in-collectors-tomap-with-null-entry-values)  

### json to list
```java
// guava
List<Object> list = new Gson().fromJson("string", new TypeToken<List<Object>>() {
}.getType());
```

### json to map
```java
Gson gson = new Gson();
Map map = Maps.newHashMap();
map.put("colour", "red");
map.put("weight", "10kg");
map = gson.fromJson(gson.toJson(map), Map.class);
```

### ObjectMap转换类型传参为泛型
```java
TypeReference<Map<String, String>> token = new TypeReference<Map<String, String>>() {};
Map<String, String> json = objectMapper.readValue(data, token);
```
```java
JavaType javaType = objectMapper.getTypeFactory().constructParametricType(Map.class, String.class, String.class);
Map<String, String> json = objectMapper.readValue(data, javaType);
```
```java
JavaType javaType = objectMapper.getTypeFactory().constructParametricType(List.class, String.class);
List<String> json = objectMapper.readValue(data, javaType);
```

[https://www.baeldung.com/java-super-type-tokens](https://www.baeldung.com/java-super-type-tokens) 


### 编码转换
```java
new String("string".getBytes(StandardCharsets.ISO_8859_1), StandardCharsets.UTF_8)
```

### 将方法置为过期
```java
@Deprecated
```

### 按某个属性统计数量（校验重复数量）
```java
Map<String, Long> map = list.parallelStream().map(o -> o[0]).collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));// o[0]某个属性
```

### 创建单个对象的list
```java
Collections.singletonList(new Object());
```

### list排序
```java
// 升序 
list.sort(Comparator.comparing(Xxx::getXxx));
// 降序
list.sort(Comparator.comparing(Xxx::getXxx).reversed());
```
参考：  
[https://blog.csdn.net/fxtxz2/article/details/109099593](https://blog.csdn.net/fxtxz2/article/details/109099593)  

### 分组后排序
```java
// null在前，其它倒排
list.stream().collect(Collectors.groupingBy(
          GoodsPropertyValueNameVo::getPropertyCode,
          Collectors.collectingAndThen(Collectors.toList(),
              o -> o.stream().sorted(Comparator.comparing(GoodsPropertyValueNameVo::getId)).collect(Collectors.toList())))
      );
```
```java
// null在前，其它倒排
list.stream().sorted(Comparator.comparing(McBmRecordVO::getStartDate,
    Comparator.nullsLast(Date::compareTo)).reversed()).collect(Collectors.toList());
```

### 将list进行分组
```java
Lists.partition(list, 500);// 每500个分为1组
```
参考：  
[https://blog.csdn.net/fzy629442466/article/details/84765070](https://blog.csdn.net/fzy629442466/article/details/84765070)  

### Array join to String
参考：  
[https://howtodoinjava.com/java8/java-8-join-string-array-example/](https://howtodoinjava.com/java8/java-8-join-string-array-example/)  

### 去除string中非数字字母
```java
String s = "string@#$".replaceAll("[^A-Za-z0-9]", "");
```
参考：  
[https://blog.csdn.net/qq_36675676/article/details/78392158](https://blog.csdn.net/qq_36675676/article/details/78392158)  

### 获取当天的开始时间和结束时间
```java
LocalDateTime todayStart = LocalDateTime.of(LocalDate.now(), LocalTime.MIN);//当天开始
LocalDateTime todayEnd = LocalDateTime.of(LocalDate.now(), LocalTime.MAX);//当天结束
```
参考：  
[https://www.baeldung.com/java-day-start-end](https://www.baeldung.com/java-day-start-end)    

### 获取当年的开始时间和结束时间
```java
Date startDate = Date.from(LocalDate.now().with(TemporalAdjusters.firstDayOfYear()).atStartOfDay(ZoneId.systemDefault()).toInstant());
Date endDate = Date.from(LocalDate.now().with(TemporalAdjusters.lastDayOfYear()).atTime(LocalTime.MAX).atZone(ZoneId.systemDefault()).toInstant());
```
参考：  
[https://www.baeldung.com/java-date-year-start-end](https://www.baeldung.com/java-date-year-start-end)  
[http://www.java2s.com/example/java/java.time/get-first-date-of-current-year.html](http://www.java2s.com/example/java/java.time/get-first-date-of-current-year.html)  

### 获取当前时间到第二天的时间差
```java
public final class DateUtils {

  private DateUtils() {
  }

  /**
   * 获取当前时间直到当天结束的时间差
   *
   * @param currentTime
   * @param unit
   * @return
   */
  public static Long getUntilTomorrowTime(Date currentTime, ChronoUnit unit) {
    //从一个 Instant和区域ID获得 LocalDateTime实例
    LocalDateTime localDateTime = LocalDateTime.ofInstant(currentTime.toInstant(), ZoneId.systemDefault());
    //获取第第二天零点时刻的实例
    LocalDateTime toromorrowTime = LocalDateTime.ofInstant(currentTime.toInstant(), ZoneId.systemDefault())
        .plusDays(1).withHour(0).withMinute(0).withSecond(0).withNano(0);
    //ChronoUnit日期枚举类, between方法计算两个时间对象之间的时间量
    return unit.between(localDateTime, toromorrowTime);
  }
}
```
```java
DateUtils.getUntilTomorrowTime(new Date(), ChronoUnit.SECONDS)
```
参考：  
[https://blog.csdn.net/qq_40691113/article/details/103148860](https://blog.csdn.net/qq_40691113/article/details/103148860)  

### 模糊查询
参考：
[https://www.baeldung.com/java-case-insensitive-string-matching](https://www.baeldung.com/java-case-insensitive-string-matching)  
[https://stackoverflow.com/questions/327513/fuzzy-string-search-library-in-java](https://stackoverflow.com/questions/327513/fuzzy-string-search-library-in-java)  

### 按汉字首字母排序
```java
List<String> list = Arrays.asList(
  new String[]{"中山","汕头","广州","安庆","阳江","南京","武汉","北京","安阳","北方"}
);
list = list.stream()
           .sorted(Collator.getInstance(Locale.CHINA))
           .collect(Collectors.toList());
```

```java
public class Main {
    public static void main(String[] args) {
        List<Address> list = Arrays.asList(new Address[]{new Address("中山"), new Address("汕头"), new  Address("广州")});
        list = list.stream().sorted(Comparator.comparing(o->Collator.getInstance(Locale.CHINA).getCollationKey(o.getName()))).collect(Collectors.toList());
    }

    private static class Address {
        public String id;
        public String name;

        public Address(String name) {
            this.name = name;
        }

        public String getName() {
            return this.name;
        }
    }
}
```

### maven-antrun-plugin和surefire运行测试报告
```shell
mvn clean package surefire-report:report -Dtest=类名
mvn clean package surefire-report:report -Dtest=类名#方法名,类名#方法名
```
