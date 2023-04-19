---
title: Oracle-monitor-sql
tags:
  - Oracle
---
## topsql
#### 最大增量（即最大Elapsed_Time的一次sql）
```sql
// 最近快照
select * from (
  SELECT
    m.*, TO_CHAR(dbms_lob.substr(v.sql_text, 3900)) SQL_Text
  FROM (
    select distinct
        snap_id,
        sql_id,
        EXECUTIONS_DELTA,
        trunc(max(ELAPSED_TIME_DELTA)OVER(PARTITION BY snap_id, sql_id),0) max_elapsed,
        trunc(max(cpu_time_delta)OVER(PARTITION BY snap_id, sql_id),0) max_cpu
    from
      dba_hist_sqlstat t
    WHERE
      t.snap_id IN (SELECT MAX(snap_id) FROM dba_hist_sqlstat)
  ) M,dba_hist_sqltext v
  where
    v.sql_id(+)=m.sql_id and v.SQL_TEXT not like '%v$%'
  order by max_elapsed desc
) where rownum < 10;
```
```sql
-- 不区分快照，关联sql执行用户
select * from (
  select
    sqt.sql_id, sqt.max_exec, sqt.max_elapsed, su.username,
    TO_CHAR(dbms_lob.substr(st.sql_text, 3900)) sql_text
  from
    (select
      sql_id,
      min(snap_id) snap_id,
      max(executions_delta) max_exec,
      max(cpu_time_delta) max_cpu,
      NVL((MAX(elapsed_time_delta) / 1000000), to_number(null)) max_elapsed
    from dba_hist_sqlstat
    where module = 'tcserver.exe' -- 过滤某个程序执行的sql语句
    group by sql_id) sqt, dba_hist_sqltext st,
    (SELECT sql_id, parsing_schema_name username
      FROM (
        SELECT t.sql_id,t.parsing_schema_name,row_number() over(partition by t.sql_id order by t.snap_id asc) rn
        FROM dba_hist_sqlstat t
        WHERE module ='tcserver.exe') -- 过滤某个程序执行的sql语句
      WHERE rn = 1) su
  where
    st.sql_id(+) = sqt.sql_id and su.sql_id(+) = sqt.sql_id
  order by nvl(sqt.max_elapsed, -1) desc, sqt.sql_id
) where rownum <= 10;
```

#### 总量（即某条sql的总时长）
```sql
select * from (
  select
    sqt.sql_id,
    sqt.exec Executions,
    nvl((sqt.elap / 1000000), to_number(null)) Elapsed_Time_s,
    nvl((sqt.cput / 1000000), to_number(null)) CPU_Time_s,
    decode(sqt.exec,
           0,
           to_number(null),
           (sqt.elap / sqt.exec / 1000000)) Elap_per_Exec_s,
    TO_CHAR(dbms_lob.substr(st.sql_text, 3900)) SQL_Text
  from
    (select
      sql_id,
      max(module) module,
      sum(elapsed_time_delta) elap,
      sum(cpu_time_delta) cput,
      sum(executions_delta) exec
    from
      dba_hist_sqlstat
    group by
      sql_id) sqt, dba_hist_sqltext st
  where
    st.sql_id(+) = sqt.sql_id and st.sql_text not like '%v$%'
  order by
    nvl(sqt.elap, -1) desc, sqt.sql_id
) where rownum < 10;
```
```sql
select
  sql_id,
  executions,
  elapsed_time,
  cpu_time,
  (elapsed_time / executions ) Elap_per_Exec,
  TO_CHAR(dbms_lob.substr(sql_fulltext, 3900)) SQL_Text
from
  (select
    sql_id,
    child_number,
    sql_text,
    elapsed_time,
    cpu_time,
    disk_reads,
    sql_fulltext,
    executions,
    rank () over(order by elapsed_time desc) as sql_rank
  from
    v$sql where sql_fulltext not like '%v$%')
where
  sql_rank < 10;
```
#### 注意：
- 使用TO_CHAR(dbms_lob.substr(BLOB_FIELD, 3900))将BLOB转成VARCHAR
- 根据情况选择查询dba_hist_sqlstat表或v$sql表
- row_number() over( partition by 分组字段 order by 排序字段 desc ) oracle按某个字段分组然后从每组取出最大的一条纪录

参考：  
[http://www.cnblogs.com/david-zhang-index/archive/2012/03/16/2399846.html](http://www.cnblogs.com/david-zhang-index/archive/2012/03/16/2399846.html)   
[http://www.dba-oracle.com/t_sql_longest_elapsed_time.htm](http://www.dba-oracle.com/t_sql_longest_elapsed_time.htm)   
[http://blog.itpub.net/12679300/viewspace-2125679/](http://blog.itpub.net/12679300/viewspace-2125679/)  
[https://stackoverflow.com/questions/828650/how-do-i-get-textual-contents-from-blob-in-oracle-sql](https://stackoverflow.com/questions/828650/how-do-i-get-textual-contents-from-blob-in-oracle-sql)  
[https://www.cnblogs.com/ryanchancrj/p/6437288.html](https://www.cnblogs.com/ryanchancrj/p/6437288.html)    
其他情境下的sql:  
[https://blog.csdn.net/yingwang9/article/details/80853484](https://blog.csdn.net/yingwang9/article/details/80853484)  
[https://blog.csdn.net/xwnxwn/article/details/78062433](https://blog.csdn.net/xwnxwn/article/details/78062433)


## toptable
```sql
SELECT
  t1.*, nvl(t2.index_bytes, 0) index_bytes, nvl(t3.lob_bytes, 0) lob_bytes
FROM
  (SELECT * FROM(SELECT
    tab.owner,
    tab.table_name,
    tab.tablespace_name,
    nvl(tab.num_rows, to_number(NULL)) num_rows,
  nvl(stab.bytes, to_number(NULL)) bytes
  FROM
    dba_tables tab, dba_segments stab
  WHERE
    stab.owner = tab.owner AND stab.segment_name = tab.table_name AND
    tab.owner NOT LIKE '%SYS%' ORDER BY stab.bytes DESC) WHERE rownum <= 10) t1,
  (SELECT
    table_owner,
    table_name,
    SUM(nvl(bytes, to_number(NULL))) index_bytes
  FROM
    dba_indexes ind, dba_segments seg
  WHERE
   ind.owner=seg.owner AND ind.index_name=seg.segment_name AND table_owner NOT LIKE '%SYS%'
  GROUP BY
   table_owner,table_name) t2,
  (SELECT
    l.owner,
    l.table_name,
  SUM(nvl(bytes, to_number(NULL))) lob_bytes
  FROM
    dba_lobs l, dba_segments seg
  WHERE
    l.owner=seg.owner AND l.segment_name=seg.segment_name AND l.owner NOT LIKE '%SYS%'
  GROUP BY l.owner,l.table_name) t3
WHERE t1.table_name = t2.table_name(+) AND t1.owner = t2.table_owner(+)
  AND t1.table_name = t3.table_name(+) AND t1.owner = t3.owner(+)
```

参考：  
[https://github.com/freenetdigital/prometheus_oracle_exporter](https://github.com/freenetdigital/prometheus_oracle_exporter)   
