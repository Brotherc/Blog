---
title: 【工作】策略模式在Spring中实现
tags:
  - Java
  - 设计模式
  - Spring
---

```java
public interface Strategy {
  Object verificate(StrategyBo strategyBo);
}
```
```java
@Component("aStrategy")
public class AStrategy implements Strategy {
  @Override
  public Object verificate(StrategyBo strategyBo) {
    // ...
    return null;
  }
}
```
```java
@Component("bStrategy")
public class BStrategy implements Strategy {
  @Override
  public Object verificate(StrategyBo strategyBo) {
    // ...
    return null;
  }
}
```
```java
@Getter
@AllArgsConstructor
@NoArgsConstructor
public enum BizType {
  A("a", "aStrategy"),
  B("b", "bStrategy");

  private String features;
  private String service;
  
  public static BizType get(String features) {
    for(BizType o : values()) {
      if(o.features.equals(features)) {
        return o;
      }
    }
    return null;
  }
}
```
```java
@Component
public class StrategyFactory {
  @Autowired
  private Map<String, Strategy> strategyMap;

  public Strategy creator(String serviceName){
    return strategyMap.get(serviceName);
  }
}
```
```java
@Service
public class TestService {
  @Autowired
  private StrategyFactory strategyFactory;

  public Object test(String features) {
    if (BizType.get(features) != null) {
      StrategyBo strategyBo = new StrategyBo();
      return strategyFactory.creator(BizType.get(features).getService()).verificate(strategyBo);
    }
    return null;
  }
}
```
