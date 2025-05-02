---
title: 同一时间只允许一个客户端操作前端界面
tags:
  - 业务场景
---
## 设计

```
后端使用Guava cache存储一个key，来作为锁，每个用户拥有一个锁，如果10分钟没有对cache进行写操作，则过期失效
用户操作前端界面时，会请求后端获取锁（如果cache的size < 1，说明此时没人正在操作，系统给用户分配锁，否则返回null），如果用户拿到锁，则可以操作前端界面，否则无法操作
用户在前端操作完后需要后需要请求后端，释放自己分配到的锁
防止用户长时间占用界面导致其它用户无法使用，用户在前端操作时，启用定时器2分钟后禁用操作，并请求后端释放自己分配到的锁
```
## 后端

```java
@Service
@Slf4j
public class CacheService {
  /**
   * 缓存，限制人数为1，设置10分钟没有写操作则过期
   */
  private final Cache<String, Boolean> cache =
      CacheBuilder.newBuilder().maximumSize(1).expireAfterWrite(10, TimeUnit.MINUTES).build();

  /**
   * 释放锁
   * @param key
   */
  public void releaseLock(String key) {
    if (key != null) {
      log.debug("==========释放前 cache 大小 ={} ==========", cache.size());
      log.debug("========== cache key ={} ==========", cache.asMap().keySet());
      log.debug("========== key ={} ==========", key);
      cache.invalidate(key);
      log.debug("==========释放后 cache 大小 ={} ==========", cache.size());
    }
  }

  /**
   * 获取锁
   * @return
   */
  public String getLock() {
    log.debug("========== cache 大小 ={} ==========", cache.size());
    if (cache.size() < 1) {
      // 没被占用，生成id，锁住，并返回

      String key = UUIDGenerateUtil.getNextId();
      cache.put(key, true);
      log.debug("========== 生成 key ={} ==========", key);
      log.debug("========== 返回 key ={} ==========", key);
      return key;
    } else {
      log.debug("========== cache key ={} ==========", cache.asMap().keySet());
      log.debug("========== 返回 key ={} ==========", "null");
      return null;
    }
  }

}
```
```java
@Service
public class XService {
  @Autowired
  private CacheService cacheService;

  /**
   *如果某些业务操作会导致前端的操作结束，需要将对应锁释放
   */
  @Transactional
  public void operate(String key) {
    ...
    cacheService.releaseLock(key);
  }
}
```
```java
@RestController
@RequestMapping("/X")
public class XController {
  @Autowired
  private CacheService cacheService;

  @Autowired
  private XService xService;

  @GetMapping("/edit/flag")
  @ApiOperation(value="查询是否可以操作")
  public ResponseDTO<String> getEditFlag(){
    return ResponseDTO.ok(cacheService.getLock());
  }

  @PostMapping("/edit/flag")
  @ApiOperation(value="操作完成后处理")
  public ResponseDTO<Integer> removeEditFlag(@ApiParam(value="操作时分配的key") String key){
    cacheService.releaseLock(key);
    return ResponseDTO.ok();
  }

  @PutMapping
  @ApiOperation(value="业务操作")
  public ResponseDTO<Integer> operate(String key){
    xService.operate(key);
    return ResponseDTO.ok();
  }

}
```
## 前端
```typescript
/**
 * ts
 */
export default class XComponent extends Vue {
  key = null as any;
  delay = 120000;
  timer = null as any;

  initEvent(f: any) {
    const w = window as any;
    w.onload = f;
    w.onscroll = f;
    w.onresize = f;
    w.onclick = f;
    w.onmouseup = f;
    w.onmousemove = f;
    w.onmousedown = f;
    w.onkeydown = f;
    w.onkeypress = f;
    w.onkeyup = f;
  }

  isActive(e: any) {
    //console.log('活跃');
    if (this.timer) {
      clearTimeout(this.timer);
    }
    if (this.key) {
      this.timer = setTimeout((t: any) => {
        //过期需要把key置空并向后台发请求释放锁
        //console.log('超过2分钟没操作');
        //console.log('释放key %o', this.key);
        this.closeForm();
      }, this.delay);
    }
  }

  closeForm() {
    //console.log('关闭操作窗口释放key %o', this.key);
    clearTimeout(this.timer);
    this.initEvent(null);
    this.$http.post(`.../X/edit/flag?key=${this.key ? this.key : ''}`).then(res => {
      if (res.data.code === '10000000') {
        this.key = null;
        //console.log('释放完key %o', this.key);
      }
    });
  }

  // 生命构造时
  created() {
    this.initEvent(this.isActive);
    //console.log('开始操作');
    this.$http.get(`.../X/edit/flag`).then(res => {
      if (res.data.code === '10000000') {
        this.key = res.data.data;
        //console.log('获取key %o', this.key);
      }
    });
  }

  // 生命销毁时
  destroyed() {
    this.closeForm();
  }

}
```
```html
/**
 * html
 */
<div>
  ...
  <q-btn label="提交"
         type="submit"
         :disable="key == null"
         color="primary" />
</div>
```
