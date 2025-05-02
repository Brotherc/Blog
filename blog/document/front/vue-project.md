---
title: 【案例】前端项目构建
tags:
  - Vue
  - Vite
---
# 【案例】前端项目构建

## Vite
**初始化项目**  
```
npm create vite@5.0.0 --template vue
```

## ant-design-vue
**安装ant-design-vue**  
```
npm i --save ant-design-vue@4.1.0
```

**全局引入ant-design-vue**  
::: code-group
```js[main.js]
import { createApp } from 'vue';
import 'style.css'
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/reset.css';

const app = createApp(App);

app.use(Antd).mount('#app');
```
:::

**安装图标库**  
```
npm install --save @ant-design/icons-vue
```

**全局引入图标库**  
::: code-group
```js[main.js]
import * as Icons from '@ant-design/icons-vue';

const icons = Icons;
for (const i in icons) {
  app.component(i, icons[i]);
}
```
:::

**初始化布局**  
[https://antdv.com/components/layout#components-layout-demo-top-side-2](https://antdv.com/components/layout#components-layout-demo-top-side-2)  
- 在`src/view/home.vue`中填入上述代码
- 需要把上述布局代码中`#components-layout-demo-top-side-2`删除
- 需要注释掉`src/style.css`中的代码

## 路由
**安装vue-router**  
```
npm i vue-router
```
**使用**  
::: code-group
```js[src/router/index.js]
import {createRouter, createWebHistory} from 'vue-router'
import Home from '../view/home.vue'

const routes = [{
  path: '/',
  redirect: '/home'
},{
  path: '/home',
  component: Home
}]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

```js[src/App.vue]
<template>
  <router-view></router-view>
</template>
```

```js[main.js]
import router from './router'

app.use(Antd).use(router).mount('#app');
```
:::

**增加登录页**  
::: code-group
```js[src/router/index.js]
import {createRouter, createWebHistory} from 'vue-router'
import Home from '../view/home.vue'
import Login from '../view/login.vue'

const routes = [{
  path: '/',
  redirect: '/home'
},{
  path: '/home',
  component: Home
},{
  path: '/login',
  component: Login
}]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```
```vue[src/view/login.vue]
<template>
  我是登录页
</template>
```
:::