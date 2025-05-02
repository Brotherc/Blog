---
title: Angular-网络
tags:
  - Angular
---
## Http

### Angular2中如何在发送delete请求时携带参数

前端angular:
```typescript
    /**
     * 根据ids删除资源分组
     */
    deleteResourceGroupByIds(ids: string[]) {
        return this.http.request('DELETE', this.API + '/resourceGroup', {
            body: ids
        }).pipe(
            retry(1),
            catchError(this.handleError.bind(this))
        );
    }
```
后台springboot:
```java
    @DeleteMapping("/resourceGroup")
    public void deleteResourceGroupByIds(@RequestBody String[] ids) {
        resourceGroupService.deleteResourceGroupByIds(ids);
    }
```
参考：  
[https://stackoverflow.com/questions/38819336/body-of-http-delete-request-in-angular2](https://stackoverflow.com/questions/38819336/body-of-http-delete-request-in-angular2)



### angular中http请求的option、params使用

方式一：
```typescript
let option = {};
const params = new HttpParams().append('key', String('val'));
params = params.append('status', String(status)); // 注意要从新赋值给params
option = {params};
```
方式二：
```typescript
// 动态添加参数
const option = {};
const params = {};

if (v != null) {
  params['k'] = v;
  option['params'] = params;
}
```



### http请求返回非json数据

返回类型：image/png
```typescript
export class XxxService {
  getRqCode() {
    const url = '';
    return this.http.post(url, {}, {
      responseType: 'blob' // 类型
    }).pipe(
      retry(1),
      catchError(this.handleError.bind(this))
    );
  }
}
```
