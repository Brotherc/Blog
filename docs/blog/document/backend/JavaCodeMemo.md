---
title: Java高频代码备忘录
tags:
  - Java
---

## Map
**根据key排序**
```java
Map<String, String> sortMap = new TreeMap<>((String s1, String s2) -> s1.compareTo(s2));
sortMap.putAll(map);
```
**快速构建Map**
```java
private Map<Integer, String> newsEventMap = new HashMap<Integer, String>(){{
  put(k1, "v1");
  put(k2, "v2");
}};
```
**获取第一个元素**
```java
map.entrySet().stream().findFirst();
```

<br>

## List
**交换两个元素位置**
```java
Collections.swap(list, 0, 6);
```
**按数量分批**
```java
// guava
Lists.partition(list, 500);// 每500个分为1组
// apache common collection
ListUtils.partition(list, 500);
```
**排序**
```java
// 升序 
list.sort(Comparator.comparing(Xxx::getXxx));
// 降序
list.sort(Comparator.comparing(Xxx::getXxx).reversed());
```
**分组后排序**
```java
// null在前，其它倒排
list.stream().collect(Collectors.groupingBy(
          Xxx::getXxx,
          Collectors.collectingAndThen(Collectors.toList(),
              o -> o.stream().sorted(Comparator.comparing(Xxx::getYyy)).collect(Collectors.toList())))
      );
```
```java
// null在前，其它倒排
list.stream().sorted(Comparator.comparing(Xxx::getXxx,
    Comparator.nullsLast(Xxx::compareTo)).reversed()).collect(Collectors.toList());
```
**按汉字首字母排序**
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

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    private static class Address {
        public String name;
    }
}
```
**转Map**
```java
// guava
Maps.uniqueIndex(list, Object::getKey);// key objecct
```
**collectors.toMap()值为空导致空指针解决方法**
```java
Map<Integer, Boolean> collect = list.stream()
        .collect(HashMap::new, (m,v)-> m.put(v.getId(), v.getAnswer()), HashMap::putAll);
``` 
**按属性统计数量（校验重复数量）**
```java
Map<String, Long> map = list.stream().map(Xxx::getXxx).collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));
```

<br>

## JSON
**Gson转换指定泛型类型**
```java
List<Object> list = new Gson().fromJson("{}", new TypeToken<List<Object>>() {}.getType());
```
**ObjectMap转换指定泛型类型**
```java
Map<String, String> json = new ObjectMapper().readValue("{}", new TypeReference<Map<String, String>>() {});
```
详情见：[https://www.baeldung.com/java-super-type-tokens](https://www.baeldung.com/java-super-type-tokens) 

<br>

## String
**编码转换**
```java
new String("string".getBytes(StandardCharsets.ISO_8859_1), StandardCharsets.UTF_8)
```

<br>

## 日期时间
**获取当天的开始时间和结束时间**
```java
LocalDateTime todayStart = LocalDateTime.of(LocalDate.now(), LocalTime.MIN);//当天开始
LocalDateTime todayEnd = LocalDateTime.of(LocalDate.now(), LocalTime.MAX);//当天结束
```

**获取当年的开始时间和结束时间**
```java
Date startDate = Date.from(LocalDate.now().with(TemporalAdjusters.firstDayOfYear()).atStartOfDay(ZoneId.systemDefault()).toInstant());
Date endDate = Date.from(LocalDate.now().with(TemporalAdjusters.lastDayOfYear()).atTime(LocalTime.MAX).atZone(ZoneId.systemDefault()).toInstant());
```

**获取当前时间到第二天的时间差**
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

