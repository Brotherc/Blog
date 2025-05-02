---
title: 第三方库
tags:
  - moment.js
---

## moment.js

### 常用操作

**将String转成moment再格式化**

```typescript
const date = '2019-03-07T21:16:00Z';
moment(date, 'YYYY-MM-DDTHH:mm:ssZ').format('HH:mm')
```

