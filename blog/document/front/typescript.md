---
title: typescript
tags:
  - js
---
## 常用操作

### 保留两位小数

```typescript
Math.floor(15.7784514000 * 100) / 100 // 输出结果为 15.77
parseInt(7/2) // 丢弃小数部分,保留整数部分

const a = 2.461;
const b = (parseInt(a * 100) / 100).toFixed(2); // 2.46
```

### 创建Map并赋值
```typescript
const map = new Map([[2, 'foo'], [1, 'bar']]);
```

### 判断Map类型
```typescript
isMap(obj) {
  return obj instanceof Map;
}
```

### 删除数组中的某个元素
```typescript
const arr = ['a','b','c','d'];
arr.splice(1,1);
console.log(arr); //['a','c','d'];
```

### Object转成Map
```typescript
const result = new Map(Object.entries(map));
```

### 将Map的key、value转成数组
```typescript
const values = Array.from(map.values());
const keys = Array.from(map.keys());
```

### 求数组最大值
```typescript
const maxN = Math.max.apply(null,ary);
const minN = Math.min.apply(null,ary);
```

### 实现Map的深克隆
```typescript
export class MapUtils {
    public static deepClone(obj) {
        if (!obj || true === obj) { // this also handles boolean as true and false
            return obj;
        }
        const objType = typeof(obj);
        if ('number' === objType || 'string' === objType) { // add your immutables here
            return obj;
        }
        const result = Array.isArray(obj) ? [] : !obj.constructor ? {} : new obj.constructor();
        if (obj instanceof Map) {
            for (const key of obj.keys()) {
                result.set(key, this.deepClone(obj.get(key)));
            }
        }
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                result[key] = this.deepClone(obj[key]);
            }
        }
        return result;
    }
}
```
参考：  
[https://stackoverflow.com/questions/8206988/clone-copy-a-map-instance/39643085#39643085](https://stackoverflow.com/questions/8206988/clone-copy-a-map-instance/39643085#39643085)  

### 请求的url后面添加时间戳参数或者随机数的参数
```typescript
// 添加时间戳
...?time=new Date();
// 添加随机数
...?number=Math.random();
//
"...?" + Math.floor(Math.random() * 100)
```
