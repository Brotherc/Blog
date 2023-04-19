---
title: Feign
tags:
  - spring cloud
---
## 常用操作

### Feign接口调用如何获取响应头

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

参考：  
[https://stackoverflow.com/questions/38742191/get-headers-feign-netflix](https://stackoverflow.com/questions/38742191/get-headers-feign-netflix)  

### 输出日志
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
