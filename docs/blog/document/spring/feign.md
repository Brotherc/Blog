---
title: 【工作】Feign
tags:
  - Java
  - Spring
---
## 获取响应头
```java
@RestController
public class TestController {
  @Autowired
  private ReciveClient reciveClient;

  @GetMapping("/request")
  public void request() {
    Response response = reciveClient.recive();
    System.out.println(response.headers());
  }
}
```
```java
@RestController
public class ReciveController {
  @GetMapping("/recive")
  public String recive() {
    return "hello world";
  }
}
```
```java
@FeignClient
public interface ReciveClient {
  @GetMapping("/recive")
  public Response recive();
}
```

## 日志打印
```yaml
logging:
  level:
    com.xxx.feign.xxxFeignClient: debug

feign:
  client:
    config:
      default:
        loggerLevel: full
```
