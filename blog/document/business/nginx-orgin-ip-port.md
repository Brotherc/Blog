---
title: 【工作】Nginx获取客户端ip端口
tags:
  - 业务场景
---
# 【工作】Nginx获取客户端ip端口
## request.getRemoteAddr()
### 介绍
该接口返回发送请求的客户端或最后一个代理的 Internet 协议 (IP) 地址。  
[https://docs.oracle.com/javaee/7/api/javax/servlet/ServletRequest.html](https://docs.oracle.com/javaee/7/api/javax/servlet/ServletRequest.html)  

### 使用
在客户端直接访问服务端(中间没有代理)时，可以通过这种方式正确拿到客户端IP。当中间存在代理服务器，如nginx时，拿到的将是最近一个代理服务器的IP。  



## X-Real-IP $remote_addr
### 介绍
虽然通过request.getRemoteAddr()无法获得用户的真实IP，但是，nginx是可以获得用户的真实ip的，也就是说nginx使用$remote_addr变量时获得的是用户的真实ip  

### 使用
```
proxy_set_header X-Real-IP $remote_addr;
```



## X-Forwarded-For
### 介绍
X-Forwarded-For（XFF）是用来识别通过HTTP代理或负载均衡方式连接到Web服务器的客户端最原始的IP地址的HTTP头字段。Squid缓存代理服务器的开发人员最早引入了这一HTTP头字段。  
[https://zh.wikipedia.org/wiki/X-Forwarded-For](https://zh.wikipedia.org/wiki/X-Forwarded-For)  

### 格式
```
X-Forwarded-For: client1, proxy1, proxy2
```
其中的值通过一个 逗号+空格 把多个IP地址区分开, 最左边（client1）是最原始客户端的IP地址, 代理服务器每成功收到一个请求，就把请求来源IP地址添加到右边。  
在上面这个例子中，这个请求成功通过了三台代理服务器：proxy1、proxy2和proxy3。请求由client1发出，到达了proxy3（proxy3可能是请求的终点）。  
请求刚从client1中发出时，XFF是空的，请求被发往proxy1；  
通过proxy1的时候，client1被添加到XFF中，之后请求被发往proxy2；  
通过proxy2的时候，proxy1被添加到XFF中，之后请求被发往proxy3；  
通过proxy3时，proxy2被添加到XFF中，之后请求的的去向不明，如果proxy3不是请求终点，请求会被继续转发。  
鉴于伪造这一字段非常容易，应该谨慎使用X-Forwarded-For字段。正常情况下XFF中最后一个IP地址是最后一个代理服务器的IP地址, 这通常是一个比较可靠的信息来源。

### 使用
```
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
```
$proxy_add_x_forwarded_for会将和Nginx直接连接的客户端IP追加在请求原有X-Forwarded-For值的右边。  

如果一个HTTP请求到达服务器之前，经过了三个代理 Proxy1、Proxy2、Proxy3，IP分别为 IP1、IP2、IP3，用户真实IP为IP0，那么拿到的值为X-Forwarded-For: IP0, IP1, IP2  

### 代码
```java
public class RequestUtil {
  public RequestUtil() {
  }

  public static String getIpAddr(HttpServletRequest request) {
    if (request == null) {
      return null;
    } else {
      String ip = null;
      if (StringUtils.isEmpty(ip) || "unknown".equalsIgnoreCase(ip)) {
        ip = request.getHeader("HTTP_X_FORWARDED_FOR");
        if (StringUtils.isEmpty(ip) || "unknown".equalsIgnoreCase(ip)) {
          ip = request.getHeader("X-Forwarded-For");
          if (StringUtils.isEmpty(ip) || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("X-Real-IP");
            if (StringUtils.isEmpty(ip) || "unknown".equalsIgnoreCase(ip)) {
              ip = request.getRemoteAddr();
            }
          }
        }
      }

      if (!StringUtils.isEmpty(ip)) {
        ip = ip.split(",")[0];
      }

      return ip;
    }
  }
}
```

## X-Forwarded-Port

### 使用
```
proxy_set_header X-Forwarded-Port $remote_port;
```

### 代码
```java
public class RequestUtil {

  private static final String X_FORWARDED_PORT = "X-Forwarded-Port";

  private RequestUtil() {
  }

  public static int getClientPort(HttpServletRequest request) {
    int remotePort = 0;

    if(request != null) {
      String port = request.getHeader(X_FORWARDED_PORT);
      log.info("============>X-Forwarded-Port: {}", port);
      if(StringUtil.isNotBlank(port)) {
        remotePort = Integer.parseInt(port.split(",")[0]);
      } else {
        remotePort = request.getRemotePort();
      }
    }
    log.info("============>remotePort: {}", remotePort);
    return remotePort;
  }

}
```

参考：  
[https://blog.csdn.net/qq_34556414/article/details/78185057](https://blog.csdn.net/qq_34556414/article/details/78185057)  
[https://blog.csdn.net/bao19901210/article/details/52537279](https://blog.csdn.net/bao19901210/article/details/52537279)  
[https://www.nginx.cn/doc/standard/httpproxy.html](https://www.nginx.cn/doc/standard/httpproxy.html)  
[https://blog.csdn.net/wanglei_storage/article/details/66004933](https://blog.csdn.net/wanglei_storage/article/details/66004933)  
[https://www.cnblogs.com/sucretan2010/p/12522851.html](https://www.cnblogs.com/sucretan2010/p/12522851.html)  
[https://blog.csdn.net/juewuer/article/details/104850405](https://blog.csdn.net/juewuer/article/details/104850405)  
[https://docs.ifs.com/techdocs/Foundation1/010_overview/210_security/090_exposing_to_internet/sample_nginx.htm](https://docs.ifs.com/techdocs/Foundation1/010_overview/210_security/090_exposing_to_internet/sample_nginx.htm)  
[http://nginx.org/en/docs/http/ngx_http_core_module.html#server](http://nginx.org/en/docs/http/ngx_http_core_module.html#server)  
[http://nginx.org/en/docs/varindex.html](http://nginx.org/en/docs/varindex.html)  
[http://nginx.org/en/docs/http/ngx_http_core_module.html#var_remote_port](http://nginx.org/en/docs/http/ngx_http_core_module.html#var_remote_port)  
