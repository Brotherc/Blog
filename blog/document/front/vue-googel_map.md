---
title: 【案例】Vue谷歌地图集成
tags:
  - Vue
  - Google Map
---
# 【案例】Vue实现谷歌地图集成
## 申请API Key
详情见：[https://developers.google.cn/maps/documentation/javascript/get-api-key](https://developers.google.cn/maps/documentation/javascript/get-api-key)  


## 原生Demo实现
### googleMap.html
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Simple Map</title>
    <meta name="viewport" content="initial-scale=1.0">
    <meta charset="utf-8">
    <style>
      #map {
        height: 100%;
      }
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script>
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }
    </script>
    <!-- 将YOUR_API_KEY替换成可用的API Key -->
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
  </body>
</html>
```

<br>

## Vue实现

### 1. 安装依赖

```sh
npm install vue2-google-maps
```
详情见：[https://github.com/xkjyeah/vue-google-maps#readme](https://github.com/xkjyeah/vue-google-maps#readme)  

### 2. googleMap.ts

```typescript
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'YOUR_API_TOKEN',// 替换成可用的API Key
    libraries: 'places',
  },
  installComponents: true
})
```
**遇到错误：**
> Could not find a declaration file for module 'vue2-google-maps'.
> ...

**解决：** 创建vue2-google-maps.d.ts，并添加以下内容
```typescript
declare module 'vue2-google-maps' {

  //如果Vue.use报错则加入以下两行
  import { PluginFunction } from "vue";
  export const install: PluginFunction<{}>;

  // 将下列url返回的内容添加在这里
  // https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/types/googlemaps/index.d.ts

}
```
详情见：[https://github.com/xkjyeah/vue-google-maps/issues/560](https://github.com/xkjyeah/vue-google-maps/issues/560)  

### 3. googleMap.html

```html
<GmapMap
  :center="{lat:10, lng:10}"
  :zoom="7"
  map-type-id="terrain"
  style="width: 500px; height: 300px"
>
</GmapMap>
```
**遇到报错：** 如果是单页面应用则不会出现以下错误  

> error .../node_modules/vue2-google-maps/dist/components/infoWindow.vue:3  
> ^
> 
> SyntaxError: Unexpected token <


**解决：** 需要将ssr相关配置关闭，不同框架修改不同，我使用的是Quasar框架需修改以下配置
::: code-group

```json[package.json]
{
  // ...
  "scripts": {
    "serve": "quasar dev -m ssr" // 将ssr修改为spa
    // ...
  }
}
```
```js[quasar.conf.js]
module.exports = function () {
  return {
    // ...
    preFetch: true // 修改为false
  }
}
```
:::

详情见：[https://github.com/xkjyeah/vue-google-maps/issues/493](https://github.com/xkjyeah/vue-google-maps/issues/493)  

<br>

## 服务端渲染实现
### 1. googleMap.ts

```typescript
// ...
mounted() {
  this.loadAMapJS().then(result => {
    if (result) {
      // 刷新地图初始化
      this.initialize();
    }
  });
}

loadAMapJS() {
  return new Promise((resolve, reject) => {
    // 替换成可用的API Key
    this.asyncLoadJs('https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY')
      .then((result) => {
        resolve(result)
      })
      .catch(err => {
        reject(err)
      })
  })
}

asyncLoadJs(url: any) {
  return new Promise((resolve, reject) => {
    const hasLoaded = document.getElementById("googleMapScript");
    if (hasLoaded) {
      resolve(true)
      return
    }
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.id = "googleMapScript"
    script.src = url
    document.body.appendChild(script)
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      reject(false)
    }
  })
}

// 初始化地圖
initialize() {
  this.centerDot = new google.maps.LatLng(22.2041179884, 113.557519102);
  const options = {
    zoom: 12,
    center: this.centerDot, // 設定地圖中心點
    mapTypeId: google.maps.MapTypeId.ROADMAP // HYBRID,ROADMAP,SATELLITE,TERRAIN
  };
  this.map = new google.maps.Map(document.getElementById("map"), options);
}
```
**遇到报错：** 有可能会出现
> Cannot find name 'google'

**解决：**
```typescript
declare let google: any;
```
详情见：[https://stackoverflow.com/questions/50054386/using-the-object-from-external-javascript-file-inside-typescript](https://stackoverflow.com/questions/50054386/using-the-object-from-external-javascript-file-inside-typescript)  

### 2. googleMap.html

```html
<div id="map" style="height: 600px; width: 1000px;"></div>
```


## 其它问题
**1. 出现此页面无法正确加载Google地图。的弹窗**  
在Google云平台的`[应用限制]`里我们对密钥使用进行限制，只允许特定的地址使用密钥，这样可以防止我们的配额泄露或被窃取。  


**2. 出现For development purposes only的覆盖层**  
正常使用API Key需要开通结算账户。在Google云平台的`[导航菜单]`-`[结算]`中关联结算账户，注意需要信用卡验证身份，支持VISA、运通、JCB、MasterCard，暂不支持银联。 验证身份时会先扣除一美元，验证成功后会返还。  


## 文档 & 资料

[https://developers.google.cn/maps/documentation/javascript/overview](https://developers.google.cn/maps/documentation/javascript/overview)  
[https://developers.google.com/maps/gmp-get-started#enable-api-sdk](https://developers.google.com/maps/gmp-get-started#enable-api-sdk)  
[https://blog.csdn.net/feiyu_may/article/details/83869037](https://blog.csdn.net/feiyu_may/article/details/83869037)  
[https://blog.csdn.net/k678mh/article/details/9717219](https://blog.csdn.net/k678mh/article/details/9717219)  
[https://blog.csdn.net/xr510002594/article/details/84866251](https://blog.csdn.net/xr510002594/article/details/84866251)  
[https://www.jianshu.com/p/b4ff113e5957](https://www.jianshu.com/p/b4ff113e5957)  
[https://www.jianshu.com/p/bfaf719b6887](https://www.jianshu.com/p/bfaf719b6887)  

