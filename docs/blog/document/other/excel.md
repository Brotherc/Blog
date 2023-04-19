---
title: excel
tags:
  - excel-database
---
## 数据转成sql


![](./assets/1.png)**1.在新加一列中输入以下函数**  

```sql
=CONCATENATE(
"update table_name set column_name1=XXX, column_name2 ='",
G2,
"' where column_name3=",
A2,
";"
)
```

**2.选中输入框，双击右下角，则可复制整列**  
