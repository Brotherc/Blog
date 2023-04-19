---
title: Java-多线程2
tags:
  - Java基础
---
### 线程之间通信
线程通信概念 线程是操作系统中独立的个体,但这些个体如果不经过特殊的处理就不能成为一个整体,线程间的通信就成为整体的必用方式之一,当线程存在通信指挥,系统间的交互性会更强大,在提高CPU利用率的同时还会使开发人员对线程任务在处理的过程中进行有效的把控与监督.
使用wait notily方法实现线程间的通信。 (注意这两个方法都是object的类的方法,换句话说java为所有的对象都提供了这两个方法)
1 wait和 notify 必须配合synchronized关键字使用
2 wait方法释放锁, notify方法不释放锁.
```java
import java.util.ArrayList;
import java.util.List;
/**
 * wait notfiy 方法，wait释放锁，notfiy不释放锁
 */
public class ListAdd2 {
	private volatile static List list = new ArrayList();

	public void add(){
		list.add("bjsxt");
	}
	public int size(){
		return list.size();
	}

	public static void main(String[] args) {
		final ListAdd2 list2 = new ListAdd2();

		// 1 实例化出来一个 lock
		// 当使用wait 和 notify 的时候 ， 一定要配合着synchronized关键字去使用
		final Object lock = new Object();
		// final CountDownLatch countDownLatch = new CountDownLatch(1);

		Thread t1 = new Thread(new Runnable() {
			@Override
			public void run() {
				try {
					synchronized (lock) {
						for(int i = 0; i <10; i++){
							list2.add();
							System.out.println("当前线程：" + Thread.currentThread().getName() + "添加了一个元素..");
							Thread.sleep(500);
							if(list2.size() == 5){
								System.out.println("已经发出通知..");
								//countDownLatch.countDown();
								lock.notify();
							}
						}
					}
				} catch (InterruptedException e) {
					e.printStackTrace();
				}

			}
		}, "t1");

		Thread t2 = new Thread(new Runnable() {
			@Override
			public void run() {
				synchronized (lock) {
					if(list2.size() != 5){
						try {
							//System.out.println("t2进入...");
							lock.wait();
							// countDownLatch.await();
						} catch (InterruptedException e) {
							e.printStackTrace();
						}
					}
					System.out.println("当前线程：" + Thread.currentThread().getName() + "收到通知线程停止..");
					throw new RuntimeException();
				}
			}
		}, "t2");

		t2.start();
		t1.start();
	}
}

```
```java
当前线程：t1添加了一个元素..
当前线程：t1添加了一个元素..
当前线程：t1添加了一个元素..
当前线程：t1添加了一个元素..
当前线程：t1添加了一个元素..
已经发出通知..
当前线程：t1添加了一个元素..
当前线程：t1添加了一个元素..
当前线程：t1添加了一个元素..
当前线程：t1添加了一个元素..
当前线程：t1添加了一个元素..
当前线程：t2收到通知线程停止..
Exception in thread "t2" java.lang.RuntimeException
	at com.bjsxt.base.conn008.ListAdd2$2.run(ListAdd2.java:65)
	at java.lang.Thread.run(Thread.java:745)
```

上述方式需要等到notify所在代码全部执行完毕，其它方式CountDownLatch（跟锁没有关系）
countdownlatch同样拥有wait和notify功能，对应的是await和countDown,不过它是即时的，不需要等待notify代码块执行完毕后才释放锁，只要执行了notify函数后，其他线程就能拿到锁，不过countdownlatch不具备锁的功能
```java
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CountDownLatch;
/**
 * wait notfiy 方法，wait释放锁，notfiy不释放锁
 */
public class ListAdd2 {
	private volatile static List list = new ArrayList();

	public void add(){
		list.add("bjsxt");
	}
	public int size(){
		return list.size();
	}

	public static void main(String[] args) {
		final ListAdd2 list2 = new ListAdd2();

		// 1 实例化出来一个 lock
		// 当使用wait 和 notify 的时候 ， 一定要配合着synchronized关键字去使用
		//final Object lock = new Object();

		final CountDownLatch countDownLatch = new CountDownLatch(1);

		Thread t1 = new Thread(new Runnable() {
			@Override
			public void run() {
				try {
					//synchronized (lock) {
						for(int i = 0; i <10; i++){
							list2.add();
							System.out.println("当前线程：" + Thread.currentThread().getName() + "添加了一个元素..");
							Thread.sleep(500);
							if(list2.size() == 5){
								System.out.println("已经发出通知..");
								countDownLatch.countDown();
								//lock.notify();
							}
						}
					//}
				} catch (InterruptedException e) {
					e.printStackTrace();
				}

			}
		}, "t1");

		Thread t2 = new Thread(new Runnable() {
			@Override
			public void run() {
				//synchronized (lock) {
					if(list2.size() != 5){
						try {
							//System.out.println("t2进入...");
							//lock.wait();
							countDownLatch.await();
						} catch (InterruptedException e) {
							e.printStackTrace();
						}
					}
					System.out.println("当前线程：" + Thread.currentThread().getName() + "收到通知线程停止..");
					throw new RuntimeException();
				//}
			}
		}, "t2");

		t2.start();
		t1.start();

	}
}
```
```java
当前线程：t1添加了一个元素..
当前线程：t1添加了一个元素..
当前线程：t1添加了一个元素..
当前线程：t1添加了一个元素..
当前线程：t1添加了一个元素..
已经发出通知..
Exception in thread "t2" 当前线程：t1添加了一个元素..
当前线程：t2收到通知线程停止..
java.lang.RuntimeException
	at com.bjsxt.base.conn008.ListAdd2$2.run(ListAdd2.java:68)
	at java.lang.Thread.run(Thread.java:745)
当前线程：t1添加了一个元素..
当前线程：t1添加了一个元素..
当前线程：t1添加了一个元素..
当前线程：t1添加了一个元素..
```
应用：
```java
有一个client去连接zk,去连接的时候需要耗时1~2秒，但是主程序是不阻塞的一直往下走，这就会导致可能返回的zk还没有值，但是主线程已经拿着zk进行操作，就会出现空指针
所以我们需要在主线程countDownLatch.await(),在zk连接成功返回时countDownLatch.countDown()
```

### ThreadLocal
ThreadLocal概念:线程局部变量,是一种多线程间并发访问变量的解决方案.与其synchronized等加锁的方式不同, ThreadlLocal完全不提供锁,而使用以空问换时间的手段,为每个线程提供变量的独立副本,以保障线程安全
从性能上说, ThreadLocal不具有绝对的优势,在并发不是很高的时候,加锁的性能会更好,但作为一套与镇完全无关的线程安全解决方案,在高并发或者竞争激烈的场景,用ThreadLocal可以在一定程度上减少锁竞争。

```java
public class ConnThreadLocal {
	public static ThreadLocal<String> th = new ThreadLocal<String>();

	public void setTh(String value){
		th.set(value);
	}
	public void getTh(){
		System.out.println(Thread.currentThread().getName() + ":" + this.th.get());
	}

	public static void main(String[] args) throws InterruptedException {

		final ConnThreadLocal ct = new ConnThreadLocal();
		Thread t1 = new Thread(new Runnable() {
			@Override
			public void run() {
				ct.setTh("张三");
				ct.getTh();
			}
		}, "t1");

		Thread t2 = new Thread(new Runnable() {
			@Override
			public void run() {
				try {
					Thread.sleep(1000);
					ct.getTh();
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
		}, "t2");

		t1.start();
		t2.start();
	}
}
```
```
t1:张三
t2:null
```
