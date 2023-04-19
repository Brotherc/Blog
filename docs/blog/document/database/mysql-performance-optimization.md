---
title: MySQL-性能优化
tags:
  - MySQL
---

## Mysql进阶

## 索引与表设计准则

## Explain执行计划

## SQL优化

## Mysql中锁机制
### 概念

- 锁,在现实生活中是为我们想要隐藏于外界所使用的一种工具
- 在计算机中,是协调多个进程或线程并发访问某一资源的一种机制
- 在数据库当中,除了传统的计算资源(CPU, RAM, VO等等)的争用之外,数据也是一种供许多用户共享访问的资源
- 如何保证数据并发访问的一致性、有效性,是所有数据库必须解决的一个问题
- 锁的冲突也是影响数据库并发访问性能的一个重要因素

### 举例

- 在购买商品时,商品库存只有1个时,两个人同时买时,谁买到的问题
- 会用到事务,先从库存表中取出物品的数据,然后插入订单,付款后,插入付款表信息
- 更新商品的效量,在这个过程中,使用锁可以对有限的资源进行保护,解决隔意和并发的矛盾

### 锁分类
按操作分：
- 读锁(共享锁)
- 写锁(排它锁)

按粒度分：
- 表锁
- 行锁
- 页锁

### 表锁
- 偏向MYISAM存储引擎,开销小,加锁快,无死锁,锁定粒度大,发生锁冲突的概率最高,并发最低
- 整张表就只能一个人使用

#### 示例
1· 建立一张Myisam引擎的表
```sql
CREATE TABLE `locktest` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar (255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
```
2. 查看表有没有被锁过
```sql
show open tables;
```
3. 对表加锁
```sql
lock table locktest read, locktest2 write;
```
4. 对表进行解锁
```sql
unlock tables;
```

#### 读写锁对操作和性能产生哪些影响
1. 对locktest添加读锁 lock table locktest read;(共享)  

|            | 是否可以查看自己 | 是否可以更新                                  | 能不能读别的表                                    |
| ---------- | ---------------- | --------------------------------------------- | ------------------------------------------------- |
| 当前连接   | 可以             | 不可以                                        | 不可以,当前表还没有解锁,不能放下当前,操作别的内容 |
| 另一个连接 | 可以             | 当更新时,处理阻塞状态,等待解锁后,才能进行更新 | 可以                                              |

2. 对locktest添加写锁 lock table locktest write;(排它)  

|            | 是否可以查看自己 | 是否可以更新                                  | 能不能读别的表 |
| ---------- | ---------------- | --------------------------------------------- | -------------- |
| 当前连接   | 可以             | 可以                                          | 不可以         |
| 另一个连接 | 可以             | 当更新时,处理阻塞状态,等待解锁后,才能进行更新 | 可以           |
  ![](./assets/mysql-performance-optimization/1.jpg)  
  ![](./assets/mysql-performance-optimization/2.jpg)
  ![](./assets/mysql-performance-optimization/3.jpg)
  ![](./assets/mysql-performance-optimization/4.jpg)
  ![](./assets/mysql-performance-optimization/5.jpg)
  ![](./assets/mysql-performance-optimization/6.jpg)
  ![](./assets/mysql-performance-optimization/7.jpg)
  ![](./assets/mysql-performance-optimization/8.jpg)
  ![](./assets/mysql-performance-optimization/9.jpg)
  ![](./assets/mysql-performance-optimization/10.jpg)
  ![](./assets/mysql-performance-optimization/11.jpg)
  ![](./assets/mysql-performance-optimization/12.jpg)
  ![](./assets/mysql-performance-optimization/13.jpg)
  ![](./assets/mysql-performance-optimization/14.jpg)
  ![](./assets/mysql-performance-optimization/15.jpg)
  ![](./assets/mysql-performance-optimization/16.jpg)
  ![](./assets/mysql-performance-optimization/17.jpg)
  ![](./assets/mysql-performance-optimization/18.jpg)
  ![](./assets/mysql-performance-optimization/19.jpg)
  ![](./assets/mysql-performance-optimization/20.jpg)
  ![](./assets/mysql-performance-optimization/21.jpg)
  ![](./assets/mysql-performance-optimization/22.jpg)
  ![](./assets/mysql-performance-optimization/23.jpg)
  ![](./assets/mysql-performance-optimization/24.jpg)
  ![](./assets/mysql-performance-optimization/25.jpg)
  ![](./assets/mysql-performance-optimization/26.jpg)
  ![](./assets/mysql-performance-optimization/27.jpg)
  ![](./assets/mysql-performance-optimization/28.jpg)

#### 表锁分析
- show status like 'table%';  
- Myisam的读写锁调度是写优先,这也是myisam不适合做写为主表的引擎  
- 因为写锁后,其它线程不能做任何操作,大量更新会使用查询很难得到锁,从而造成永久阻塞  
- 淘宝：买家库(偏向读取)、卖家库(卖家库更多偏向写)  

### 行锁
- 偏向InnoDB存储引擎,开销大,加锁慢,会出现死锁,锁定粒度小,发生冲突的概率最低,并发度也最高  
- InnoDB与MyISAM的最大不同点:一是支持事务,二是采用了行级锁  

#### 事务
- ACID属性  



| 属性                |                                                              |
| ------------------- | ------------------------------------------------------------ |
| 原子性(Atomicity)   | 原子性是指事务包含的所有操作要么全部成功,要么全部失败回滚    |
| 一致性(Consistency) | 一致性是指事务必须使数据库从一个一致性状态变换到另一个一致性状态,也就是说一个事务执行之前和执行之后都必须处于一致性状态。让数据保持一定上的合理一个商品出库时,仓库商品数量减1,对应用户的购物车中商品加1 |
| 隔离性(Isolation)   | 隔离性是当多个用户并发访问效据库时,比如操作同一张表时,数据库为每一个用户开启的事务,不能被其他事务的操作所干扰,多个并发事务之间要相互隔离。 |
| 持久性(Durability)  | 持久性是指一个事第一旦被提交了,就不能再回滚了,已经把数据保存到数据库当中了。 |

- 并发事务处理带来的问题 


| 问题       |                                                              |
| ---------- | ------------------------------------------------------------ |
| 更新丢失   | 两个或多个事务选择同一行,然后基于最初选定的值更新该行时,由于每个事务都不知道其它事务的存在,就会发生丢失更新问题,最后的更新覆盖了其它事务所做的更新 |
| 脏读       | 老板要给程序员发工资,程序员的工资是3.6万/月。  <br/>但是发工资时老板不小心按错了数字，按成3.9万/月，该钱已经打到程序员的户口，但是事务还没有提交，  <br/>就在这时，程序员去查看自己这个月的工资，发现比往常多了3千元，以为涨工资了非常高兴。  <br/>但是老板及时发现了不对，马上回滚差点就提交了的事务，将数字改成3.6万再提交  <br/>实际程序员这个月的工资还是3.6万,但是程序员看到的是3.9万。他看到的是老板还没提交事务时的数据。这就是脏读。  <br/>事务A读到了事务B已修改,但尚未提交的数据  <br/>解决方法(Read committed! 读提交，能解决脏读问题) |
| 不可重复读 | 程序员拿着工资(卡里当然是只有3.6万) ,当他买单时(程序员事务开启) ,收费系统事先检测到他的卡里有3.6万,  <br/>就在这个时候! !程序员的妻子要把线全部转出充当家用,并提交。  <br/>当收费系统准备扣款时,再检测卡里的金额,发现已经没钱了。程序员就会很郁闷,明明卡里是有钱的...  <br/>一个事务范围内两个相同的查询却返回了不同数据,这就是不可重复读  <br/>事务A读取到了事务B已经提交的修改数据  <br/>解决办法(Repeatable read) |
| 重复读     | 程序员拿着工资卡(卡里还是有3.6万) ,当他买时(事务开启,不允许其他事务的UPDATE修改操作) ,收费系统事先检测到他的卡里有3.6万。  <br/>这个时候他的妻子不能转出金额了,接下来收费系统就可以扣款了。 |
| 幻读       | 程序员某一天去消费,花了2千元,然后他的妻子去查看他今天的消费记录(妻子事务开启)  <br/>看到确实是花了2千元,就在这个时候,程序员花了1万买了一部电脑,即新增INSERT了一条消费记录,并提交。<br/>当妻子打印程序员的消费记录清单时(妻子事务提交) ,发现花了1.2万元,似乎出现了幻觉,这就是幻读。<br/>解决办法(Serializple,但是这种事务隔离级别效率低下,比较耗数据库性能,一般不使用。) |

对应关系:  
| 事务隔离级别                | 脏读      | 不可重复读 | 幻读      |
| -------------------------- | -------- | --------- | --------- |
| 读未提交(read-uncommitted)  | 是       | 是        | 是        |
| 不可重复读(read-committed)  | 否       | 是        | 是        |
| 可重复读(repeatable-read)   | 否       | 否        | 是        |
| 串行化(serializable)        | 否       | 否        | 否        |

- 事务隔离级别  
Read uncommitted: 就是一个事务可以读取另一个未提交事务的数据  
Read committed: 一个事务要等待另一个事务提交后才能读取数据  
Repeatable read: 就是在开始读取数据（事务开启）时，不再允许修改操作  
Serializable: 在该级别下，事务串行化顺序执行，可以避免脏读、不可重复读和幻读  
- 查看隔离级别  
```sql
select @@global.tx_isolation,@@tx_isolation;
```
- 设置隔离级别  
全局的：```set global transaction isolation level read committed;```  
当前会话：```set session transaction isolation level read committed;```  

#### 示例
##### 演示行锁  
- 5.5以后，默认后，事务会自动提交  

- 由于演示，开两个连接 都关闭自动提交```set autocommit = 0```  

- 做以下操作：


|                                                      |                                                              |
| ---------------------------------------------------- | ------------------------------------------------------------ |
| 执行更新操作                                         | 自己可以查看到更新的内容，连接2看不到更新的内容,只有commit后,才能看到更新的内容 |
| 连接1执行更新操作,连接2也执行更新操作,更新同一条记录 | 连接1没有提交事务时,连接2更新处于阻塞状态,当commit时,连接2才会继续执行，连接2更新也要commit |
| 连接1和连接2同时更新数据,但更新的不是同一条记录      | 不会影响                                                     |

![](./assets/mysql-performance-optimization/29.jpg)
![](./assets/mysql-performance-optimization/30.jpg)
![](./assets/mysql-performance-optimization/31.jpg)
![](./assets/mysql-performance-optimization/32.jpg)
![](./assets/mysql-performance-optimization/33.jpg)
![](./assets/mysql-performance-optimization/34.jpg)
![](./assets/mysql-performance-optimization/35.jpg)
![](./assets/mysql-performance-optimization/36.jpg)
![](./assets/mysql-performance-optimization/37.jpg)
![](./assets/mysql-performance-optimization/38.jpg)
![](./assets/mysql-performance-optimization/39.jpg)
![](./assets/mysql-performance-optimization/40.jpg)
![](./assets/mysql-performance-optimization/41.jpg)
![](./assets/mysql-performance-optimization/42.jpg)
![](./assets/mysql-performance-optimization/43.jpg)

#### 索引失效,行锁变表锁
![](./assets/mysql-performance-optimization/45.jpg)
![](./assets/mysql-performance-optimization/46.jpg)
![](./assets/mysql-performance-optimization/47.jpg)
![](./assets/mysql-performance-optimization/48.jpg)
![](./assets/mysql-performance-optimization/49.jpg)
![](./assets/mysql-performance-optimization/50.jpg)
![](./assets/mysql-performance-optimization/51.jpg)
![](./assets/mysql-performance-optimization/52.jpg)
![](./assets/mysql-performance-optimization/53.jpg)
![](./assets/mysql-performance-optimization/54.jpg)
![](./assets/mysql-performance-optimization/55.jpg)
![](./assets/mysql-performance-optimization/56.jpg)

#### 间隙锁
![](./assets/mysql-performance-optimization/57.jpg)
![](./assets/mysql-performance-optimization/58.jpg)
![](./assets/mysql-performance-optimization/59.jpg)
![](./assets/mysql-performance-optimization/60.jpg)
![](./assets/mysql-performance-optimization/61.jpg)

#### 如何锁定一行数据  
![](./assets/mysql-performance-optimization/62.jpg)
![](./assets/mysql-performance-optimization/63.jpg)
![](./assets/mysql-performance-optimization/64.jpg)
![](./assets/mysql-performance-optimization/65.jpg)
![](./assets/mysql-performance-optimization/66.jpg)
![](./assets/mysql-performance-optimization/67.jpg)
![](./assets/mysql-performance-optimization/68.jpg)

#### show status like 'innodb_row_lock%';
![](./assets/mysql-performance-optimization/69.jpg)

### 悲观锁
- 就是很悲观，它对于数据被外界修改保持保守态度，认为数据随时会修改，
- 所以整个数据处理中需要将数据加锁。悲观锁一般都是依靠关系数据库提供的锁机制，
- 事实上关系数据库中的行锁，表锁不论是读写锁都是悲观锁

### 乐观锁
- 顾名思义，就是很乐观，每次自己操作数据的时候认为没有人会来修改它，所以不去加锁
- 但是在更新的时候会去判断在此期间数据有没有被修改，需要用户自己去实现
- 不会发生并发抢占资源，只有在提交操作的时候检查是否违反数据完整性
- 为什么要使用乐观锁?
对于读操作远多于写操作的时候，大多数都是读取，这时候一个更新操作加锁会阻塞所有读取，降低了吞吐量。  
最后还要释放锁，锁是需要一些开销的，我们只要想办法解决极少量的更新操作的同步问题。  
换句话说，如果是读写比例差距不是非常大或者你的系统没有响应不及时，吞吐量瓶颈问题，那就不要去使用乐观锁，它增加了复杂度，也带来了额外的风险。  

- 乐观锁的实现方式
版本号:  
![](./assets/mysql-performance-optimization/70.jpg)
![](./assets/mysql-performance-optimization/71.jpg)
![](./assets/mysql-performance-optimization/72.jpg)
![](./assets/mysql-performance-optimization/73.jpg)
时间戳:  

## Linux环境下操作Mysql

## 主从复制

## 日志分析