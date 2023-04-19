---
title: 公开课-Google平滑限流方案-Guava
tags:
  - 云析学院公开课
---
-  **大厂面试题，说说你知道的限流方案**

-  **限流场景**

12306
双十一（11.11零点，由于各种商家的促销活动(前XX名免单)，支付宝进入排队支付状态）
外卖业务

-  **常见的限流方案**

![](./assets/yunxi/guava-xianliu/1.jpg)
![](./assets/yunxi/guava-xianliu/2.jpg)
![](./assets/yunxi/guava-xianliu/3.jpg)
![](./assets/yunxi/guava-xianliu/4.jpg)
![](./assets/yunxi/guava-xianliu/5.jpg)
![](./assets/yunxi/guava-xianliu/6.jpg)
![](./assets/yunxi/guava-xianliu/7.jpg)
![](./assets/yunxi/guava-xianliu/8.jpg)

##  Guava是什么
![](./assets/yunxi/guava-xianliu/9.jpg)
![](./assets/yunxi/guava-xianliu/10.jpg)

##  Guava限流核心算法
![](./assets/yunxi/guava-xianliu/11.jpg)
![](./assets/yunxi/guava-xianliu/12.jpg)
![](./assets/yunxi/guava-xianliu/13.jpg)
![](./assets/yunxi/guava-xianliu/14.jpg)
![](./assets/yunxi/guava-xianliu/15.jpg)
![](./assets/yunxi/guava-xianliu/16.jpg)

##  Guava限流实战
![](./assets/yunxi/guava-xianliu/20.jpg)
-  **平滑突发限流**

```java
import com.google.common.util.concurrent.RateLimiter;

/**
 * @Description 平滑突发限流(SmoothBursty)
 */
public class SmoothBurstyRateLimitTest01 {

    public static void main(String[] args) {
        //每秒允许5个请求，表示桶容量为5且每秒新增5个令牌，即每隔0.2秒新增一个令牌
        RateLimiter limiter = RateLimiter.create(5);
        //如果当前桶中有足够令牌则成功（返回值为0）返回获取token的耗时，以秒为单位
        //将突发请求速率平均为了固定请求速率，固定频率=0.2s/个
        System.out.println(limiter.acquire(1));
        System.out.println(limiter.acquire(1));
        System.out.println(limiter.acquire(1));
        System.out.println(limiter.acquire(1));
        System.out.println(limiter.acquire(1));
        System.out.println(limiter.acquire(1));
    }
}
```
![](./assets/yunxi/guava-xianliu/17.jpg)
```java
import com.google.common.util.concurrent.RateLimiter;

/**
 * @Description 平滑突发限流(SmoothBursty) 使用场景：对冷数据的预热处理
 */
public class SmoothBurstyRateLimitTest02 {

    public static void main(String[] args) {
        //每秒允许5个请求，表示桶容量为5且每秒新增5个令牌，即每隔0.2秒新增一个令牌
        RateLimiter limiter = RateLimiter.create(5);
        //一次性消费5个令牌，模拟预热的场景（初始化redis缓存）
        System.out.println(limiter.acquire(5));
        //limiter.acquire(1)将等待差不多1秒桶中才能有令牌
        System.out.println(limiter.acquire(1));
        //固定速率
        System.out.println(limiter.acquire(1));
        //固定速率
        System.out.println(limiter.acquire(1));
        //固定速率
        System.out.println(limiter.acquire(1));
    }
}
```
![](./assets/yunxi/guava-xianliu/18.jpg)
```java
import com.google.common.util.concurrent.RateLimiter;

/**
 * @Description 平滑突发限流(SmoothBursty) 使用场景：对冷数据的预热处理
 */
public class SmoothBurstyRateLimitTest03 {

    public static void main(String[] args) {
        //每秒允许5个请求，表示桶容量为5且每秒新增5个令牌，即每隔0.2毫秒新增一个令牌
        RateLimiter limiter = RateLimiter.create(5);
        //第一秒突发了10个请求
        System.out.println(limiter.acquire(10));
        //limiter.acquire(1)将等待差不多2秒桶中才能有令牌
        System.out.println(limiter.acquire(1));
        //固定速率
        System.out.println(limiter.acquire(1));
        //固定速率
        System.out.println(limiter.acquire(1));
        //固定速率
        System.out.println(limiter.acquire(1));
    }
}
```
![](./assets/yunxi/guava-xianliu/19.jpg)

-  **平滑预热限流**

```java
import com.google.common.util.concurrent.RateLimiter;

import java.util.concurrent.TimeUnit;

/**
 * @Description 平滑预热限流(SmoothWarmingUp)
 */
public class SmoothWarmingUp {

    public static void main(String[] args) {

        //permitsPerSecond:每秒新增的令牌数  warmupPeriod:从冷启动速率过渡到平均速率的时间间隔
        //系统冷启动后慢慢的趋于平均固定速率（即刚开始速率慢一些，然后慢慢趋于我们设置的固定速率）
        RateLimiter limiter = RateLimiter.create(10, 1000, TimeUnit.MILLISECONDS);
        for(int i = 0; i < 20;i++) {
            //获取一个令牌
            System.out.println(limiter.acquire(1));
        }
    }
}
```
![](./assets/yunxi/guava-xianliu/21.jpg)
-  **Guava用于秒杀场景**

```java
import com.google.common.util.concurrent.RateLimiter;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

/**
 * @Description Guava秒杀场景：Guava使得商品被均匀的被秒杀，效果较好，未秒到商品的用户引流至推荐页
 */
public class GuavaSecKill {

    public static void main(String[] args) throws InterruptedException {

        //限流，每秒允许10个请求进入秒杀 QPS=10 令牌生成速度=100ms/个
        RateLimiter limiter = RateLimiter.create(0);
        /**
         * 开线程池
         */
        ExecutorService executorService = Executors.newFixedThreadPool(100);
        //100个线程同时抢购
        for (int i = 0; i < 100; i++) {

            executorService.submit(() -> {
                //每个秒杀请求如果在50ms（0.05s）以内得到令牌，就算是秒杀成功，否则就返回秒杀失败
                if (limiter.tryAcquire(50, TimeUnit.MILLISECONDS)) {
                    if (CountUtils.TOTAL_COUNT.get() > 0) {
                        //库存减1
                        CountUtils.decrease();
                        System.out.println("恭喜您，秒杀成功！！！");
                    } else {
                        System.out.println("秒杀失败，商品已售完");
                    }

                } else {
                    System.out.println("秒杀失败，请继续努力~");
                }
            });
            //给limiter 0.01s的时间生成新的令牌生成
            Thread.sleep(10);
        }
        Thread.sleep(1000);
        executorService.shutdown();
    }
}
```
![](./assets/yunxi/guava-xianliu/22.jpg)
![](./assets/yunxi/guava-xianliu/23.jpg)
![](./assets/yunxi/guava-xianliu/24.jpg)

##  笔记
![](./assets/yunxi/guava-xianliu/25.jpg)
![](./assets/yunxi/guava-xianliu/26.jpg)
![](./assets/yunxi/guava-xianliu/27.jpg)

参考：
[https://github.com/online-demo/yunxi-guava/tree/master/src/main/java/com/yunxi/demo/guava](https://github.com/online-demo/yunxi-guava/tree/master/src/main/java/com/yunxi/demo/guava)
