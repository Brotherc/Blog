---
title: 微专业-高性能编程专题
tags:
  - 网易云课堂微专业
---
### 1.1互联网系统架构演进之路
![](./assets/NeteaseCloud/HighPerformanceTopics/1.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/2.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/3.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/4.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/5.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/6.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/7.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/8.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/9.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/10.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/11.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/12.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/13.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/14.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/15.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/16.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/17.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/18.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/19.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/20.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/21.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/22.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/23.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/24.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/25.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/26.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/27.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/28.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/29.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/30.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/31.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/32.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/33.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/34.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/35.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/36.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/37.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/38.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/39.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/40.jpg)

#### 1.1.1JAVA程序运行原理分析
![](./assets/NeteaseCloud/HighPerformanceTopics/41.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/42.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/43.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/44.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/45.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/46.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/47.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/48.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/49.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/50.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/51.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/52.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/53.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/54.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/55.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/56.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/57.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/58.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/59.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/60.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/61.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/62.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/63.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/64.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/65.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/66.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/67.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/68.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/69.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/70.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/71.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/72.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/73.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/74.jpg)

#### 1.1.2线程状态
![](./assets/NeteaseCloud/HighPerformanceTopics/75.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/76.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/77.jpg)
```java
/**
 * 多线程运行状态切换示例 <br/>
 */
public class Demo2 {
	public static Thread thread1;
	public static Demo2 obj;

	public static void main(String[] args) throws Exception {
		// 第一种状态切换 - 新建 -> 运行 -> 终止
		System.out.println("#######第一种状态切换  - 新建 -> 运行 -> 终止################################");
		Thread thread1 = new Thread(new Runnable() {
			@Override
			public void run() {
				System.out.println("thread1当前状态：" + Thread.currentThread().getState().toString());
				System.out.println("thread1 执行了");
			}
		});
		System.out.println("没调用start方法，thread1当前状态：" + thread1.getState().toString());
		thread1.start();
		Thread.sleep(2000L); // 等待thread1执行结束，再看状态
		System.out.println("等待两秒，再看thread1当前状态：" + thread1.getState().toString());
		// thread1.start(); TODO 注意，线程终止之后，再进行调用，会抛出IllegalThreadStateException异常

		System.out.println();
		System.out.println("############第二种：新建 -> 运行 -> 等待 -> 运行 -> 终止(sleep方式)###########################");
		Thread thread2 = new Thread(new Runnable() {
			@Override
			public void run() {
				try {// 将线程2移动到等待状态，1500后自动唤醒
					Thread.sleep(1500);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
				System.out.println("thread2当前状态：" + Thread.currentThread().getState().toString());
				System.out.println("thread2 执行了");
			}
		});
		System.out.println("没调用start方法，thread2当前状态：" + thread2.getState().toString());
		thread2.start();
		System.out.println("调用start方法，thread2当前状态：" + thread2.getState().toString());
		Thread.sleep(200L); // 等待200毫秒，再看状态
		System.out.println("等待200毫秒，再看thread2当前状态：" + thread2.getState().toString());
		Thread.sleep(3000L); // 再等待3秒，让thread2执行完毕，再看状态
		System.out.println("等待3秒，再看thread2当前状态：" + thread2.getState().toString());

		System.out.println();
		System.out.println("############第三种：新建 -> 运行 -> 阻塞 -> 运行 -> 终止###########################");
		Thread thread3 = new Thread(new Runnable() {
			@Override
			public void run() {
				synchronized (Demo2.class) {
					System.out.println("thread3当前状态：" + Thread.currentThread().getState().toString());
					System.out.println("thread3 执行了");
				}
			}
		});
		synchronized (Demo2.class) {
			System.out.println("没调用start方法，thread3当前状态：" + thread3.getState().toString());
			thread3.start();
			System.out.println("调用start方法，thread3当前状态：" + thread3.getState().toString());
			Thread.sleep(200L); // 等待200毫秒，再看状态
			System.out.println("等待200毫秒，再看thread3当前状态：" + thread3.getState().toString());
		}
		Thread.sleep(3000L); // 再等待3秒，让thread3执行完毕，再看状态
		System.out.println("等待3秒，让thread3抢到锁，再看thread3当前状态：" + thread2.getState().toString());

	}
}
```
#### 1.1.3线程终止
![](./assets/NeteaseCloud/HighPerformanceTopics/78.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/79.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/80.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/81.jpg)
#### 1.1.4内存屏障和CPU缓存
![](./assets/NeteaseCloud/HighPerformanceTopics/82.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/83.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/84.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/85.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/86.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/87.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/88.jpg)
#### 1.1.5线程通信
![](./assets/NeteaseCloud/HighPerformanceTopics/89.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/90.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/91.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/92.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/93.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/94.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/95.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/96.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/97.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/98.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/99.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/100.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/101.jpg)
#### 1.1.6线程封闭之ThreadLocal和栈封闭
![](./assets/NeteaseCloud/HighPerformanceTopics/102.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/103.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/104.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/105.jpg)
#### 1.1.7线程池应用及实现原理剖析
![](./assets/NeteaseCloud/HighPerformanceTopics/106.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/107.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/108.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/109.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/110.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/111.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/112.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/113.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/114.jpg)
```java
import java.util.List;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.RejectedExecutionHandler;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.SynchronousQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

/** 线程池的使用 */
public class Demo9 {

	/**
	 * 测试： 提交15个执行时间需要3秒的任务,看线程池的状况
	 *
	 * @param threadPoolExecutor 传入不同的线程池，看不同的结果
	 * @throws Exception
	 */
	public void testCommon(ThreadPoolExecutor threadPoolExecutor) throws Exception {
		// 测试： 提交15个执行时间需要3秒的任务，看超过大小的2个，对应的处理情况
		for (int i = 0; i < 15; i++) {
			int n = i;
			threadPoolExecutor.submit(new Runnable() {
				@Override
				public void run() {
					try {
						System.out.println("开始执行：" + n);
						Thread.sleep(3000L);
						System.err.println("执行结束:" + n);
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				}
			});
			System.out.println("任务提交成功 :" + i);
		}
		// 查看线程数量，查看队列等待数量
		Thread.sleep(500L);
		System.out.println("当前线程池线程数量为：" + threadPoolExecutor.getPoolSize());
		System.out.println("当前线程池等待的数量为：" + threadPoolExecutor.getQueue().size());
		// 等待15秒，查看线程数量和队列数量（理论上，会被超出核心线程数量的线程自动销毁）
		Thread.sleep(15000L);
		System.out.println("当前线程池线程数量为：" + threadPoolExecutor.getPoolSize());
		System.out.println("当前线程池等待的数量为：" + threadPoolExecutor.getQueue().size());
	}

	/**
	 * 1、线程池信息： 核心线程数量5，最大数量10，无界队列，超出核心线程数量的线程存活时间：5秒， 指定拒绝策略的
	 *
	 * @throws Exception
	 */
	private void threadPoolExecutorTest1() throws Exception {
		ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(5, 10, 5, TimeUnit.SECONDS,
				new LinkedBlockingQueue<Runnable>());
		testCommon(threadPoolExecutor);
		// 预计结果：线程池线程数量为：5,超出数量的任务，其他的进入队列中等待被执行
	}

	/**
	 * 2、 线程池信息： 核心线程数量5，最大数量10，队列大小3，超出核心线程数量的线程存活时间：5秒， 指定拒绝策略的
	 *
	 * @throws Exception
	 */
	private void threadPoolExecutorTest2() throws Exception {
		// 创建一个 核心线程数量为5，最大数量为10,等待队列最大是3 的线程池，也就是最大容纳13个任务。
		// 默认的策略是抛出RejectedExecutionException异常，java.util.concurrent.ThreadPoolExecutor.AbortPolicy
		ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(5, 10, 5, TimeUnit.SECONDS,
				new LinkedBlockingQueue<Runnable>(3), new RejectedExecutionHandler() {
					@Override
					public void rejectedExecution(Runnable r, ThreadPoolExecutor executor) {
						System.err.println("有任务被拒绝执行了");
					}
				});
		testCommon(threadPoolExecutor);
		// 预计结果：
		// 1、 5个任务直接分配线程开始执行
		// 2、 3个任务进入等待队列
		// 3、 队列不够用，临时加开5个线程来执行任务(5秒没活干就销毁)
		// 4、 队列和线程池都满了，剩下2个任务，没资源了，被拒绝执行。
		// 5、 任务执行，5秒后，如果无任务可执行，销毁临时创建的5个线程
	}

	/**
	 * 3、 线程池信息： 核心线程数量5，最大数量5，无界队列，超出核心线程数量的线程存活时间：5秒
	 *
	 * @throws Exception
	 */
	private void threadPoolExecutorTest3() throws Exception {
		// 和Executors.newFixedThreadPool(int nThreads)一样的
		ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(5, 5, 0L, TimeUnit.MILLISECONDS,
				new LinkedBlockingQueue<Runnable>());
		testCommon(threadPoolExecutor);
		// 预计结：线程池线程数量为：5，超出数量的任务，其他的进入队列中等待被执行
	}

	/**
	 * 4、 线程池信息：
	 * 核心线程数量0，最大数量Integer.MAX_VALUE，SynchronousQueue队列，超出核心线程数量的线程存活时间：60秒
	 *
	 * @throws Exception
	 */
	private void threadPoolExecutorTest4() throws Exception {

		// SynchronousQueue，实际上它不是一个真正的队列，因为它不会为队列中元素维护存储空间。与其他队列不同的是，它维护一组线程，这些线程在等待着把元素加入或移出队列。
		// 在使用SynchronousQueue作为工作队列的前提下，客户端代码向线程池提交任务时，
		// 而线程池中又没有空闲的线程能够从SynchronousQueue队列实例中取一个任务，
		// 那么相应的offer方法调用就会失败（即任务没有被存入工作队列）。
		// 此时，ThreadPoolExecutor会新建一个新的工作者线程用于对这个入队列失败的任务进行处理（假设此时线程池的大小还未达到其最大线程池大小maximumPoolSize）。

		// 和Executors.newCachedThreadPool()一样的
		ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(0, Integer.MAX_VALUE, 60L, TimeUnit.SECONDS,
				new SynchronousQueue<Runnable>());
		testCommon(threadPoolExecutor);
		// 预计结果：
		// 1、 线程池线程数量为：15，超出数量的任务，其他的进入队列中等待被执行
		// 2、 所有任务执行结束，60秒后，如果无任务可执行，所有线程全部被销毁，池的大小恢复为0
		Thread.sleep(60000L);
		System.out.println("60秒后，再看线程池中的数量：" + threadPoolExecutor.getPoolSize());
	}

	/**
	 * 5、 定时执行线程池信息：3秒后执行，一次性任务，到点就执行 <br/>
	 * 核心线程数量5，最大数量Integer.MAX_VALUE，DelayedWorkQueue延时队列，超出核心线程数量的线程存活时间：0秒
	 *
	 * @throws Exception
	 */
	private void threadPoolExecutorTest5() throws Exception {
		// 和Executors.newScheduledThreadPool()一样的
		ScheduledThreadPoolExecutor threadPoolExecutor = new ScheduledThreadPoolExecutor(5);
		threadPoolExecutor.schedule(new Runnable() {
			@Override
			public void run() {
				System.out.println("任务被执行，现在时间：" + System.currentTimeMillis());
			}
		}, 3000, TimeUnit.MILLISECONDS);
		System.out.println(
				"定时任务，提交成功，时间是：" + System.currentTimeMillis() + ", 当前线程池中线程数量：" + threadPoolExecutor.getPoolSize());
		// 预计结果：任务在3秒后被执行一次
	}

	/**
	 * 6、 定时执行线程池信息：线程固定数量5 ，<br/>
	 * 核心线程数量5，最大数量Integer.MAX_VALUE，DelayedWorkQueue延时队列，超出核心线程数量的线程存活时间：0秒
	 *
	 * @throws Exception
	 */
	private void threadPoolExecutorTest6() throws Exception {
		ScheduledThreadPoolExecutor threadPoolExecutor = new ScheduledThreadPoolExecutor(5);
		// 周期性执行某一个任务，线程池提供了两种调度方式，这里单独演示一下。测试场景一样。
		// 测试场景：提交的任务需要3秒才能执行完毕。看两种不同调度方式的区别
		// 效果1： 提交后，2秒后开始第一次执行，之后每间隔1秒，固定执行一次(如果发现上次执行还未完毕，则等待完毕，完毕后立刻执行)。
		// 也就是说这个代码中是，3秒钟执行一次（计算方式：每次执行三秒，间隔时间1秒，执行结束后马上开始下一次执行，无需等待）
		threadPoolExecutor.scheduleAtFixedRate(new Runnable() {
			@Override
			public void run() {
				try {
					Thread.sleep(3000L);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
				System.out.println("任务-1 被执行，现在时间：" + System.currentTimeMillis());
			}
		}, 2000, 1000, TimeUnit.MILLISECONDS);

		// 效果2：提交后，2秒后开始第一次执行，之后每间隔1秒，固定执行一次(如果发现上次执行还未完毕，则等待完毕，等上一次执行完毕后再开始计时，等待1秒)。
		// 也就是说这个代码钟的效果看到的是：4秒执行一次。 （计算方式：每次执行3秒，间隔时间1秒，执行完以后再等待1秒，所以是 3+1）
		threadPoolExecutor.scheduleWithFixedDelay(new Runnable() {
			@Override
			public void run() {
				try {
					Thread.sleep(3000L);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
				System.out.println("任务-2 被执行，现在时间：" + System.currentTimeMillis());
			}
		}, 2000, 1000, TimeUnit.MILLISECONDS);
	}

	/**
	 * 7、 终止线程：线程池信息： 核心线程数量5，最大数量10，队列大小3，超出核心线程数量的线程存活时间：5秒， 指定拒绝策略的
	 *
	 * @throws Exception
	 */
	private void threadPoolExecutorTest7() throws Exception {
		// 创建一个 核心线程数量为5，最大数量为10,等待队列最大是3 的线程池，也就是最大容纳13个任务。
		// 默认的策略是抛出RejectedExecutionException异常，java.util.concurrent.ThreadPoolExecutor.AbortPolicy
		ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(5, 10, 5, TimeUnit.SECONDS,
				new LinkedBlockingQueue<Runnable>(3), new RejectedExecutionHandler() {
					@Override
					public void rejectedExecution(Runnable r, ThreadPoolExecutor executor) {
						System.err.println("有任务被拒绝执行了");
					}
				});
		// 测试： 提交15个执行时间需要3秒的任务，看超过大小的2个，对应的处理情况
		for (int i = 0; i < 15; i++) {
			int n = i;
			threadPoolExecutor.submit(new Runnable() {
				@Override
				public void run() {
					try {
						System.out.println("开始执行：" + n);
						Thread.sleep(3000L);
						System.err.println("执行结束:" + n);
					} catch (InterruptedException e) {
						System.out.println("异常：" + e.getMessage());
					}
				}
			});
			System.out.println("任务提交成功 :" + i);
		}
		// 1秒后终止线程池
		Thread.sleep(1000L);
		threadPoolExecutor.shutdown();
		// 再次提交提示失败
		threadPoolExecutor.submit(new Runnable() {
			@Override
			public void run() {
				System.out.println("追加一个任务");
			}
		});
		// 结果分析
		// 1、 10个任务被执行，3个任务进入队列等待，2个任务被拒绝执行
		// 2、调用shutdown后，不接收新的任务，等待13任务执行结束
		// 3、 追加的任务在线程池关闭后，无法再提交，会被拒绝执行
	}

	/**
	 * 8、 立刻终止线程：线程池信息： 核心线程数量5，最大数量10，队列大小3，超出核心线程数量的线程存活时间：5秒， 指定拒绝策略的
	 *
	 * @throws Exception
	 */
	private void threadPoolExecutorTest8() throws Exception {
		// 创建一个 核心线程数量为5，最大数量为10,等待队列最大是3 的线程池，也就是最大容纳13个任务。
		// 默认的策略是抛出RejectedExecutionException异常，java.util.concurrent.ThreadPoolExecutor.AbortPolicy
		ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(5, 10, 5, TimeUnit.SECONDS,
				new LinkedBlockingQueue<Runnable>(3), new RejectedExecutionHandler() {
					@Override
					public void rejectedExecution(Runnable r, ThreadPoolExecutor executor) {
						System.err.println("有任务被拒绝执行了");
					}
				});
		// 测试： 提交15个执行时间需要3秒的任务，看超过大小的2个，对应的处理情况
		for (int i = 0; i < 15; i++) {
			int n = i;
			threadPoolExecutor.submit(new Runnable() {
				@Override
				public void run() {
					try {
						System.out.println("开始执行：" + n);
						Thread.sleep(3000L);
						System.err.println("执行结束:" + n);
					} catch (InterruptedException e) {
						System.out.println("异常：" + e.getMessage());
					}
				}
			});
			System.out.println("任务提交成功 :" + i);
		}
		// 1秒后终止线程池
		Thread.sleep(1000L);
		List<Runnable> shutdownNow = threadPoolExecutor.shutdownNow();
		// 再次提交提示失败
		threadPoolExecutor.submit(new Runnable() {
			@Override
			public void run() {
				System.out.println("追加一个任务");
			}
		});
		System.out.println("未结束的任务有：" + shutdownNow.size());

		// 结果分析
		// 1、 10个任务被执行，3个任务进入队列等待，2个任务被拒绝执行
		// 2、调用shutdownnow后，队列中的3个线程不再执行，10个线程被终止
		// 3、 追加的任务在线程池关闭后，无法再提交，会被拒绝执行
	}

	public static void main(String[] args) throws Exception {
		new Demo9().threadPoolExecutorTest1();
//		new Demo9().threadPoolExecutorTest2();
//		new Demo9().threadPoolExecutorTest3();
//		new Demo9().threadPoolExecutorTest4();
//		new Demo9().threadPoolExecutorTest5();
//		new Demo9().threadPoolExecutorTest6();
//		new Demo9().threadPoolExecutorTest7();
//		new Demo9().threadPoolExecutorTest8();
	}
}
```
#### 1.2.1线程安全之可见性问题
![](./assets/NeteaseCloud/HighPerformanceTopics/115.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/116.jpg)
```java
import java.util.concurrent.TimeUnit;

// 1、 jre/bin/server  放置hsdis动态链接库
//  测试代码 将运行模式设置为-server， 变成死循环   。 没加默认就是client模式，就是正常（可见性问题）
// 2、 通过设置JVM的参数，打印出jit编译的内容 （这里说的编译非class文件），通过可视化工具jitwatch进行查看
// -server -XX:+UnlockDiagnosticVMOptions -XX:+PrintAssembly -XX:+LogCompilation -XX:LogFile=jit.log
//  关闭jit优化-Djava.compiler=NONE
public class VisibilityDemo {
    private volatile boolean flag = true;

    public static void main(String[] args) throws InterruptedException {
        VisibilityDemo demo1 = new VisibilityDemo();
        Thread thread1 = new Thread(new Runnable() {
            public void run() {
                int i = 0;
                // class ->  运行时jit编译  -> 汇编指令 -> 重排序
                while (demo1.flag) { // 指令重排序
                    i++;
                }
                System.out.println(i);
            }
        });
        thread1.start();

        TimeUnit.SECONDS.sleep(2);
        // 设置is为false，使上面的线程结束while循环
        demo1.flag = false;
        System.out.println("被置为false了.");
    }
}
```
![](./assets/NeteaseCloud/HighPerformanceTopics/117.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/118.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/119.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/120.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/121.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/122.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/123.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/124.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/125.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/126.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/127.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/128.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/129.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/130.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/131.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/132.jpg)
```java
import java.util.concurrent.CountDownLatch;

public class Demo {
    public static final String a = "hello tony";
    public static void main(String[] args) {
    }
}

// 官方示例，可能会读取到y的值为0
class FinalFieldExample {
    final int x;
    int y;
    static FinalFieldExample f;

    public FinalFieldExample() {
        x = 3;
        y = 4;
    }

    static void writer() {
        f = new FinalFieldExample();
    }

    static void reader() {
        if (f != null) {
            int i = f.x;  // guaranteed to see 3 肯定是3
            int j = f.y;  // could see 0 可能看到0
        }
    }
}

// 官方示例，new A().f() 可能返回 -1, 0, or 1.
class A {
    final int x;

    A() {
        x = 1;
    }

    int f() {
        return d(this, this);
    }

    int d(A a1, A a2) {
        int i = a1.x;
        g(a1);
        int j = a2.x;
        return j - i;
    }

    static void g(A a) {
        // uses reflection to change a.x to 2
        // 使用反射技术修改A.x为2
    }
}
```
![](./assets/NeteaseCloud/HighPerformanceTopics/133.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/134.jpg)
```java
// https://docs.oracle.com/javase/specs/jls/se8/html/jls-17.html#jls-17.4
// 官方提供的示例，检查有没有WordTearing情况
public class WordTearing extends Thread {
    static final int LENGTH = 8;
    static final int ITERS = 1000000;
    static byte[] counts = new byte[LENGTH];
    static Thread[] threads = new Thread[LENGTH];

    final int id;

    WordTearing(int i) {
        id = i;
    }

    public void run() {
        byte v = 0;
        for (int i = 0; i < ITERS; i++) {
            byte v2 = counts[id];
            if (v != v2) {
                System.err.println("Word-Tearing found: " +
                        "counts[" + id + "] = " + v2 +
                        ", should be " + v);
                return;
            }
            v++;
            counts[id] = v;
        }
    }

    public static void main(String[] args) {
        for (int i = 0; i < LENGTH; ++i)
            (threads[i] = new WordTearing(i)).start();
    }
}
```
#### 1.2.2线程安全之原子操作
![](./assets/NeteaseCloud/HighPerformanceTopics/135.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/136.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/137.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/138.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/139.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/140.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/141.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/142.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/143.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/144.jpg)
```java
public class LockDemo2 {
    int i = 0;

    public void add() {
        synchronized (this) {// 操作系统（JVM也是一样）监视器
            i++;
        }
    }

    public static void main(String[] args) throws InterruptedException {
        LockDemo2 ld = new LockDemo2();

        for (int i = 0; i < 2; i++) {
            new Thread(() -> {
                for (int j = 0; j < 10000; j++) {
                    ld.add();
                }
            }).start();
        }
        Thread.sleep(2000L);
        System.out.println(ld.i);
    }
}
```
```java
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class LockDemo3 {
    volatile int i = 0;

    Lock lock = new ReentrantLock();

    public void add() {
        lock.lock();
        try {
            // TODO  很多业务操作
            i++;
        }finally {
            lock.unlock();
        }
    }

    public static void main(String[] args) throws InterruptedException {
        LockDemo3 ld = new LockDemo3();

        for (int i = 0; i < 20; i++) {
            new Thread(() -> {
                for (int j = 0; j < 10000; j++) {
                    ld.add();
                }
            }).start();
        }
        Thread.sleep(2000L);
        System.out.println(ld.i);
    }
}
```
![](./assets/NeteaseCloud/HighPerformanceTopics/145.jpg)
```java
import sun.misc.Unsafe;

import java.lang.reflect.Field;

public class LockDemo1 {
    volatile int value = 0;

    static Unsafe unsafe; // 直接操作内存，修改对象，数组内存....强大的API
    private static long valueOffset;

    static {
        try {
            // 反射技术获取unsafe值
            Field field = Unsafe.class.getDeclaredField("theUnsafe");
            field.setAccessible(true);
            unsafe = (Unsafe) field.get(null);

            // 获取到 value 属性偏移量（用于定于value属性在内存中的具体地址）
            valueOffset = unsafe.objectFieldOffset(LockDemo1.class
                    .getDeclaredField("value"));

        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

    public void add() {
        // TODO xx00
        // i++;// JAVA 层面三个步骤
        // CAS + 循环 重试
        int current;
        do {
            // 操作耗时的话， 那么 线程就会占用大量的CPU执行时间
            current = unsafe.getIntVolatile(this, valueOffset);
        } while (!unsafe.compareAndSwapInt(this, valueOffset, current, current + 1));
        // 可能会失败
    }

    public static void main(String[] args) throws InterruptedException {
        LockDemo1 ld = new LockDemo1();

        for (int i = 0; i < 2; i++) {
            new Thread(() -> {
                for (int j = 0; j < 10000; j++) {
                    ld.add();
                }
            }).start();
        }
        Thread.sleep(2000L);
        System.out.println(ld.value);
    }
}
```
```java
import java.util.concurrent.atomic.AtomicInteger;

// 两个线程，对 i 变量进行递增操作
public class LockDemo {
    // volatile int i = 0;
    AtomicInteger i = new AtomicInteger(0);


    public void add() {
        // TODO xx00
        // i++;// 三个步骤
        i.incrementAndGet();
    }

    public static void main(String[] args) throws InterruptedException {
        LockDemo ld = new LockDemo();

        for (int i = 0; i < 2; i++) {
            new Thread(() -> {
                for (int j = 0; j < 10000; j++) {
                    ld.add();
                }
            }).start();
        }
        Thread.sleep(2000L);
        System.out.println(ld.i);
    }
}
```
![](./assets/NeteaseCloud/HighPerformanceTopics/146.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/147.jpg)
```java
import java.util.concurrent.atomic.AtomicLong;
import java.util.concurrent.atomic.LongAdder;

// 测试用例： 同时运行2秒，检查谁的次数最多
public class LongAdderDemo {
    private long count = 0;

    // 同步代码块的方式
    public void testSync() throws InterruptedException {
        for (int i = 0; i < 3; i++) {
            new Thread(() -> {
                long starttime = System.currentTimeMillis();
                while (System.currentTimeMillis() - starttime < 2000) { // 运行两秒
                    synchronized (this) {
                        ++count;
                    }
                }
                long endtime = System.currentTimeMillis();
                System.out.println("SyncThread spend:" + (endtime - starttime) + "ms" + " v" + count);
            }).start();
        }
    }

    // Atomic方式
    private AtomicLong acount = new AtomicLong(0L);

    public void testAtomic() throws InterruptedException {
        for (int i = 0; i < 3; i++) {
            new Thread(() -> {
                long starttime = System.currentTimeMillis();
                while (System.currentTimeMillis() - starttime < 2000) { // 运行两秒
                    acount.incrementAndGet(); // acount++;
                }
                long endtime = System.currentTimeMillis();
                System.out.println("AtomicThread spend:" + (endtime - starttime) + "ms" + " v-" + acount.incrementAndGet());
            }).start();
        }
    }

    // LongAdder 方式
    private LongAdder lacount = new LongAdder();
    public void testLongAdder() throws InterruptedException {
        for (int i = 0; i < 3; i++) {
            new Thread(() -> {
                long starttime = System.currentTimeMillis();
                while (System.currentTimeMillis() - starttime < 2000) { // 运行两秒
                    lacount.increment();
                }
                long endtime = System.currentTimeMillis();
                System.out.println("LongAdderThread spend:" + (endtime - starttime) + "ms" + " v-" + lacount.sum());
            }).start();
        }
    }

    public static void main(String[] args) throws InterruptedException {
        LongAdderDemo demo = new LongAdderDemo();
        demo.testSync();
        demo.testAtomic();
        demo.testLongAdder();
    }
}
```
```java
import java.util.concurrent.atomic.LongAccumulator;
import java.util.function.LongBinaryOperator;

// LongAdder增强版，处理累加之外，可以自行定义其他计算
public class LongAccumulatorDemo {
    public static void main(String[] args) throws InterruptedException {
        LongAccumulator accumulator = new LongAccumulator(new LongBinaryOperator() {
            @Override
            public long applyAsLong(long left, long right) {
                // 返回最大值，这就是自定义的计算
                return left < right ? left : right;
            }
        }, 0);

        // 1000个线程
        for (int i = 0; i < 1000; i++) {
            int finalI = i;
            new Thread(() -> {
                accumulator.accumulate(finalI); // 此处实际就是执行上面定义的操作
            }).start();
        }

        Thread.sleep(2000L);
        System.out.println(accumulator.longValue()); // 打印出结果
    }

}
```
![](./assets/NeteaseCloud/HighPerformanceTopics/148.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/149.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/150.jpg)

#### 1.2.3JAVA锁相关

![](./assets/NeteaseCloud/HighPerformanceTopics/151.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/152.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/153.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/154.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/155.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/156.jpg)
```java
// 锁 方法(静态/非静态),代码块(对象/类)
public class ObjectSyncDemo1 {

    public synchronized void test1() {
        try {
            System.out.println(Thread.currentThread() + " 我开始执行");
            Thread.sleep(3000L);
            System.out.println(Thread.currentThread() + " 我执行结束");
        } catch (InterruptedException e) {
        }
    }

    public static void main(String[] args) throws InterruptedException {
        new Thread(() -> {
            new ObjectSyncDemo1().test1();
        }).start();

        Thread.sleep(1000L); // 等1秒钟,让前一个线程启动起来
        new Thread(() -> {
            new ObjectSyncDemo1().test1();
        }).start();
    }
}
```
```java
// 锁 方法(静态/非静态),代码块(对象/类)
public class ObjectSyncDemo1 {

    public synchronized static void test1() {
        try {
            System.out.println(Thread.currentThread() + " 我开始执行");
            Thread.sleep(3000L);
            System.out.println(Thread.currentThread() + " 我执行结束");
        } catch (InterruptedException e) {
        }
    }

    public static void main(String[] args) throws InterruptedException {
        new Thread(() -> {
            new ObjectSyncDemo1().test1();
        }).start();

        Thread.sleep(1000L); // 等1秒钟,让前一个线程启动起来
        new Thread(() -> {
            new ObjectSyncDemo1().test1();
        }).start();
    }
}
```
```java
// 锁 方法(静态/非静态),代码块(对象/类)
public class ObjectSyncDemo1 {
    static Object temp = new Object();

    public void test1() {
        synchronized (temp) {
            try {
                System.out.println(Thread.currentThread() + " 我开始执行");
                Thread.sleep(3000L);
                System.out.println(Thread.currentThread() + " 我执行结束");
            } catch (InterruptedException e) {
            }

        }
    }

    public static void main(String[] args) throws InterruptedException {
        new Thread(() -> {
            new ObjectSyncDemo1().test1();
        }).start();

        Thread.sleep(1000L); // 等1秒钟,让前一个线程启动起来
        new Thread(() -> {
            new ObjectSyncDemo1().test1();
        }).start();
    }
}
```
```java
// 锁 方法(静态/非静态),代码块(对象/类)
public class ObjectSyncDemo1 {

    public void test1() {
        synchronized (ObjectSyncDemo1.class) {
            try {
                System.out.println(Thread.currentThread() + " 我开始执行");
                Thread.sleep(3000L);
                System.out.println(Thread.currentThread() + " 我执行结束");
            } catch (InterruptedException e) {
            }

        }
    }

    public static void main(String[] args) throws InterruptedException {
        new Thread(() -> {
            new ObjectSyncDemo1().test1();
        }).start();

        Thread.sleep(1000L); // 等1秒钟,让前一个线程启动起来
        new Thread(() -> {
            new ObjectSyncDemo1().test1();
        }).start();
    }
}
```
```java
// 可重入
public class ObjectSyncDemo2 {

    public synchronized void test1(Object arg) {
        System.out.println(Thread.currentThread() + " 我开始执行 " + arg);
        if (arg == null) {
            test1(new Object());
        }
        System.out.println(Thread.currentThread() + " 我执行结束" + arg);
    }

    public static void main(String[] args) throws InterruptedException {
        new ObjectSyncDemo2().test1(null);
    }
}
```
```java
// 锁粗化(运行时 jit 编译优化)
// jit 编译后的汇编内容, jitwatch可视化工具进行查看
public class ObjectSyncDemo3 {
    int i;

    public void test1(Object arg) {
        synchronized (this) {
            i++;
        }
        synchronized (this) {
            i++;
        }
    }

    public static void main(String[] args) throws InterruptedException {
        for (int i = 0; i < 10000000; i++) {
            new ObjectSyncDemo3().test1("a");
        }
    }
}
```
```java
// 锁消除(jit)
public class ObjectSyncDemo4 {
    public void test3(Object arg) {
        StringBuilder builder = new StringBuilder();
        builder.append("a");
        builder.append(arg);
        builder.append("c");
        System.out.println(arg.toString());
    }

    public void test2(Object arg) {
        String a = "a";
        String c = "c";
        System.out.println(a + arg + c);
    }


    public void test1(Object arg) {
        // jit 优化, 消除了锁
        StringBuffer stringBuffer = new StringBuffer();
        stringBuffer.append("a");
        stringBuffer.append(arg);
        stringBuffer.append("c");
        // System.out.println(stringBuffer.toString());
    }

    public static void main(String[] args) throws InterruptedException {
        for (int i = 0; i < 1000000; i++) {
            new ObjectSyncDemo4().test1("123");
        }
    }
}
```
![](./assets/NeteaseCloud/HighPerformanceTopics/157.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/158.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/159.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/160.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/161.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/162.jpg)

![](./assets/NeteaseCloud/HighPerformanceTopics/163.jpg)
```java
public class LockDemo3 {
    volatile int i = 0;

    Lock lock = new ReentrantLock();

    public void add() {
        lock.lock();
        try {
            // TODO  很多业务操作
            i++;
        }finally {
            lock.unlock();
        }
    }

    public static void main(String[] args) throws InterruptedException {
        LockDemo3 ld = new LockDemo3();

        for (int i = 0; i < 20; i++) {
            new Thread(() -> {
                for (int j = 0; j < 10000; j++) {
                    ld.add();
                }
            }).start();
        }
        Thread.sleep(2000L);
        System.out.println(ld.i);
    }
}
```
![](./assets/NeteaseCloud/HighPerformanceTopics/164.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/165.jpg)
```java
// 3、 演示可重入
public class ReentrantDemo1 {
    private static final ReentrantLock lock = new ReentrantLock();

    public static void main(String[] args) {
        lock.lock();  // block until condition holds
        try {
            System.out.println("第一次获取锁");
            System.out.println("当前线程获取锁的次数" + lock.getHoldCount());
            lock.lock();
            System.out.println("第二次获取锁了");
            System.out.println("当前线程获取锁的次数" + lock.getHoldCount());
        } finally {
            lock.unlock();
            lock.unlock();
        }
        System.out.println("当前线程获取锁的次数" + lock.getHoldCount());

        // 如果不释放，此时其他线程是拿不到锁的
        new Thread(() -> {
            System.out.println(Thread.currentThread() + " 期望抢到锁");
            lock.lock();
            System.out.println(Thread.currentThread() + " 线程拿到了锁");
        }).start();


    }
}
```
```java
// ReentrantLock 可重入锁示例
public class ReentrantLockDemo1 {
    private Lock lock = new ReentrantLock();

    public static void main(String[] args) throws InterruptedException {
        ReentrantLockDemo1 demo1 = new ReentrantLockDemo1();
        Runnable runnable = new Runnable() {
            @Override
            public void run() {
                try {
                    demo1.test(Thread.currentThread());
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        };
        Thread thread1 = new Thread(runnable);
        Thread thread2 = new Thread(runnable);
        thread1.start();
        Thread.sleep(500); // 等待0.5秒，让thread1先执行

        thread2.start();
        Thread.sleep(2000); // 两秒后，中断thread2

        thread2.interrupt();
    }

    public void test(Thread thread) throws InterruptedException {
        System.out.println(Thread.currentThread().getName() + "， 想获取锁");
        lock.lock();   //注意，如果需要正确中断等待锁的线程，必须将获取锁放在外面，然后将InterruptedException抛出
        try {
            System.out.println(thread.getName() + "得到了锁");
            Thread.sleep(10000); // 抢到锁，10秒不释放
        } finally {
            System.out.println(Thread.currentThread().getName() + "执行finally");
            lock.unlock();
            System.out.println(thread.getName() + "释放了锁");
        }
    }
}
```
```java
// 可响应中断
public class LockInterruptiblyDemo1 {
    private Lock lock = new ReentrantLock();

    public static void main(String[] args) throws InterruptedException {
        LockInterruptiblyDemo1 demo1 = new LockInterruptiblyDemo1();
        Runnable runnable = new Runnable() {
            @Override
            public void run() {
                try {
                    demo1.test(Thread.currentThread());
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        };
        Thread thread1 = new Thread(runnable);
        Thread thread2 = new Thread(runnable);
        thread1.start();
        Thread.sleep(500); // 等待0.5秒，让thread1先执行

        thread2.start();
        Thread.sleep(2000); // 两秒后，中断thread2

        thread2.interrupt();
    }

    public void test(Thread thread) throws InterruptedException {
        System.out.println(Thread.currentThread().getName() + "， 想获取锁");
        lock.lockInterruptibly();   //注意，如果需要正确中断等待锁的线程，必须将获取锁放在外面，然后将InterruptedException抛出
        try {
            System.out.println(thread.getName() + "得到了锁");
            Thread.sleep(10000); // 抢到锁，10秒不释放
        } finally {
            System.out.println(Thread.currentThread().getName() + "执行finally");
            lock.unlock();
            System.out.println(thread.getName() + "释放了锁");
        }
    }
}
```
![](./assets/NeteaseCloud/HighPerformanceTopics/166.jpg)
```java
// 将hashmap改造一个并发安全的
// 比hashTable的实现，效率高，读取的适合并不会同步执行
public class MapDemo {
    private final Map<String, Object> m = new HashMap<>();
    private final ReentrantReadWriteLock rwl = new ReentrantReadWriteLock();
    private final Lock r = rwl.readLock();
    private final Lock w = rwl.writeLock();

    public Object get(String key) {
        r.lock(); // 可以同时多个线程获取这把锁
        try {
            return m.get(key);
        } finally {
            r.unlock();
        }
    }

    public Object[] allKeys() {
        r.lock();
        try {
            return m.keySet().toArray();
        } finally {
            r.unlock();
        }
    }

    public Object put(String key, Object value) {
        w.lock(); // 一个线程获取 这把锁
        try {
            return m.put(key, value);
        } finally {
            w.unlock();
        }
    }

    public void clear() {
        w.lock();
        try {
            m.clear();
        } finally {
            w.unlock();
        }
    }
}
```
```java
// 不用读写锁
public class ReentrantReadWriteLockDemo1 {
    public static void main(String[] args)  {
        final ReentrantReadWriteLockDemo1 readWriteLockDemo1 = new ReentrantReadWriteLockDemo1();
        // 多线程同时读/写
        new Thread(() -> {
            readWriteLockDemo1.read(Thread.currentThread());
        }).start();

        new Thread(() -> {
            readWriteLockDemo1.write(Thread.currentThread());
        }).start();

        new Thread(() -> {
            readWriteLockDemo1.read(Thread.currentThread());
        }).start();
    }

    // 不管读写，只有一个线程能用， 独享锁
    public synchronized void read(Thread thread) { // 2秒
        long start = System.currentTimeMillis();
        while(System.currentTimeMillis() - start <= 1) {
            System.out.println(thread.getName()+"正在进行“读”操作");
        }
        System.out.println(thread.getName()+"“读”操作完毕");
    }

    /** 写 */
    public synchronized void write(Thread thread) {
        long start = System.currentTimeMillis();
        while(System.currentTimeMillis() - start <= 1) {
            System.out.println(thread.getName()+"正在进行“写”操作");
        }
        System.out.println(thread.getName()+"“写”操作完毕");
    }
}
```
```java
// 读写锁（既保证了读数据的效率，也保证数据的一致性）
public class ReentrantReadWriteLockDemo2 {
    ReentrantReadWriteLock readWriteLock = new ReentrantReadWriteLock();

    public static void main(String[] args) {
        final ReentrantReadWriteLockDemo2 readWriteLockDemo2 = new ReentrantReadWriteLockDemo2();
        // 多线程同时读/写
        new Thread(() -> {
            readWriteLockDemo2.read(Thread.currentThread());
        }).start();

        new Thread(() -> {
            readWriteLockDemo2.read(Thread.currentThread());
        }).start();

        new Thread(() -> {
            readWriteLockDemo2.write(Thread.currentThread());
        }).start();
    }

    // 多线程读，共享锁
    public void read(Thread thread) {
        readWriteLock.readLock().lock();
        try {
            long start = System.currentTimeMillis();
            while (System.currentTimeMillis() - start <= 1) {
                System.out.println(thread.getName() + "正在进行“读”操作");
            }
            System.out.println(thread.getName() + "“读”操作完毕");
        } finally {
            readWriteLock.readLock().unlock();
        }
    }

    /**
     * 写
     */
    public void write(Thread thread) {
        readWriteLock.writeLock().lock();
        try {
            long start = System.currentTimeMillis();
            while (System.currentTimeMillis() - start <= 1) {
                System.out.println(thread.getName() + "正在进行“写”操作");
            }
            System.out.println(thread.getName() + "“写”操作完毕");
        } finally {
            readWriteLock.writeLock().unlock();
        }
    }
}
```
```java
// 缓存示例
public class CacheDataDemo {
    // 创建一个map用于缓存
    private Map<String, Object> map = new HashMap<>();
    private static ReadWriteLock rwl = new ReentrantReadWriteLock();

    public static void main(String[] args) {
        // 1 读取缓存里面的数据
        // cache.query()
        // 2 如果换成没数据,则取数据库里面查询  database.query()
        // 3 查询完成之后,数据塞到塞到缓存里面 cache.put(data)
    }

    public Object get(String id) {
        Object value = null;
        // 首先开启读锁，从缓存中去取
        rwl.readLock().lock();
        try {
            if (map.get(id) == null) {
                // TODO database.query();  全部查询数据库 ,缓存雪崩
                // 必须释放读锁
                rwl.readLock().unlock();
                // 如果缓存中没有释放读锁，上写锁。如果不加锁，所有请求全部去查询数据库，就崩溃了
                rwl.writeLock().lock(); // 所有线程在此处等待  1000  1  999 (在同步代码里面再次检查是否缓存)
                try {
                    // 双重检查，防止已经有线程改变了当前的值，从而出现重复处理的情况
                    if (map.get(id) == null) {
                        // TODO value = ...如果缓存没有，就去数据库里面读取
                    }
                    rwl.readLock().lock(); // 加读锁降级写锁,这样就不会有其他线程能够改这个值，保证了数据一致性
                } finally {
                    rwl.writeLock().unlock(); // 释放写锁@
                }
            }
        } finally {
            rwl.readLock().unlock();
        }
        return value;
    }
}
```
![](./assets/NeteaseCloud/HighPerformanceTopics/167.jpg)
```java
// condition 实现队列线程安全。
public class QueueDemo {
    final Lock lock = new ReentrantLock();
    // 指定条件的等待 - 等待有空位
    final Condition notFull = lock.newCondition();
    // 指定条件的等待 - 等待不为空
    final Condition notEmpty = lock.newCondition();

    // 定义数组存储数据
    final Object[] items = new Object[100];
    int putptr, takeptr, count;

    // 写入数据的线程,写入进来
    public void put(Object x) throws InterruptedException {
        lock.lock();
        try {
            while (count == items.length) // 数据写满了
                notFull.await(); // 写入数据的线程,进入阻塞
            items[putptr] = x;
            if (++putptr == items.length) putptr = 0;
            ++count;
            notEmpty.signal(); // 唤醒指定的读取线程
        } finally {
            lock.unlock();
        }
    }
    // 读取数据的线程,调用take
    public Object take() throws InterruptedException {
        lock.lock();
        try {
            while (count == 0)
                notEmpty.await(); // 线程阻塞在这里,等待被唤醒
            Object x = items[takeptr];
            if (++takeptr == items.length) takeptr = 0;
            --count;
            notFull.signal(); // 通知写入数据的线程,告诉他们取走了数据,继续写入
            return x;
        } finally {
            lock.unlock();
        }
    }
}
```

#### 1.3.1AQS抽象队列同步器详解

![](./assets/NeteaseCloud/HighPerformanceTopics/168.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/169.jpg)

```java
// 自己实现锁
public class NeteaseLock implements Lock {
    // 当前锁的拥有者
    volatile  AtomicReference<Thread> owner = new AtomicReference<>();
    // java q 线程安全
    volatile LinkedBlockingQueue<Thread> waiters = new LinkedBlockingQueue<>();

    @Override
    public boolean tryLock() {
        return owner.compareAndSet(null, Thread.currentThread());
    }

    @Override
    public void lock() {
        boolean addQ = true;
        while (!tryLock()) {
            if (addQ) {
                // 塞到等待锁的集合中
                waiters.offer(Thread.currentThread());
                addQ = false;
            } else {
                // 挂起这个线程
                LockSupport.park();
                // 后续，等待其他线程释放锁，收到通知之后继续循环
            }
        }
        waiters.remove(Thread.currentThread());
    }

    @Override
    public void unlock() {
        // cas 修改 owner 拥有者
        if (owner.compareAndSet(Thread.currentThread(), null)) {
            Iterator<Thread> iterator = waiters.iterator();
            while (iterator.hasNext()) {
                Thread waiter = iterator.next();
                LockSupport.unpark(waiter); // 唤醒线程继续 抢锁
            }

        }
    }

    @Override
    public void lockInterruptibly() throws InterruptedException {

    }

    @Override
    public boolean tryLock(long time, TimeUnit unit) throws InterruptedException {
        return false;
    }


    @Override
    public Condition newCondition() {
        return null;
    }
}
```
ReentrantLock源码：
```java
/*
 * ORACLE PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

/*
 *
 *
 *
 *
 *
 * Written by Doug Lea with assistance from members of JCP JSR-166
 * Expert Group and released to the public domain, as explained at
 * http://creativecommons.org/publicdomain/zero/1.0/
 */

package com.study.lock.aqs.source;

import java.util.Collection;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.AbstractQueuedSynchronizer;
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.Lock;

// 源码说明版本 - 删除无关紧要的方法
public class ReentrantLockSourceLess {
    private static final long serialVersionUID = 7373984872572414699L;
    private final Sync sync;

    abstract static class Sync extends AbstractQueuedSynchronizer {
        private static final long serialVersionUID = -5179523762034025860L;

        abstract void lock();

        final boolean nonfairTryAcquire(int acquires) {
            final Thread current = Thread.currentThread();
            int c = getState();
            if (c == 0) {
                if (compareAndSetState(0, acquires)) {
                    setExclusiveOwnerThread(current);
                    return true;
                }
            } else if (current == getExclusiveOwnerThread()) {
                int nextc = c + acquires;
                if (nextc < 0) // overflow
                    throw new Error("Maximum lock count exceeded");
                setState(nextc);
                return true;
            }
            return false;
        }

        protected final boolean tryRelease(int releases) {
            int c = getState() - releases;
            if (Thread.currentThread() != getExclusiveOwnerThread())
                throw new IllegalMonitorStateException();
            boolean free = false;
            if (c == 0) {
                free = true;
                setExclusiveOwnerThread(null);
            }
            setState(c);
            return free;
        }

        protected final boolean isHeldExclusively() {
            return getExclusiveOwnerThread() == Thread.currentThread();
        }

        final ConditionObject newCondition() {
            return new ConditionObject();
        }


        final Thread getOwner() {
            return getState() == 0 ? null : getExclusiveOwnerThread();
        }

        final int getHoldCount() {
            return isHeldExclusively() ? getState() : 0;
        }

        final boolean isLocked() {
            return getState() != 0;
        }

        private void readObject(java.io.ObjectInputStream s)
                throws java.io.IOException, ClassNotFoundException {
            s.defaultReadObject();
            setState(0); // reset to unlocked state
        }
    }

    static final class NonfairSync extends Sync {
        private static final long serialVersionUID = 7316153563782823691L;

        final void lock() {
            if (compareAndSetState(0, 1))
                setExclusiveOwnerThread(Thread.currentThread());
            else
                acquire(1);
        }

        protected final boolean tryAcquire(int acquires) {
            return nonfairTryAcquire(acquires);
        }
    }

    static final class FairSync extends Sync {
        private static final long serialVersionUID = -3000897897090466540L;

        final void lock() {
            acquire(1);
        }

        protected final boolean tryAcquire(int acquires) {
            final Thread current = Thread.currentThread();
            int c = getState();
            if (c == 0) {
                if (!hasQueuedPredecessors() &&
                        compareAndSetState(0, acquires)) {
                    setExclusiveOwnerThread(current);
                    return true;
                }
            } else if (current == getExclusiveOwnerThread()) {
                int nextc = c + acquires;
                if (nextc < 0)
                    throw new Error("Maximum lock count exceeded");
                setState(nextc);
                return true;
            }
            return false;
        }
    }

    public ReentrantLockSourceLess() {
        sync = new NonfairSync();
    }

    public ReentrantLockSourceLess(boolean fair) {
        sync = fair ? new FairSync() : new NonfairSync();
    }

    public void lock() {
        sync.lock();
    }

    public void lockInterruptibly() throws InterruptedException {
        sync.acquireInterruptibly(1);
    }

    public boolean tryLock() {
        return sync.nonfairTryAcquire(1);
    }

    public boolean tryLock(long timeout, TimeUnit unit)
            throws InterruptedException {
        return sync.tryAcquireNanos(1, unit.toNanos(timeout));
    }

    public void unlock() {
        sync.release(1);
    }

//    public Condition newCondition();

//    public int getHoldCount();

//    public boolean isHeldByCurrentThread();

//    public boolean isLocked();

//    public final boolean isFair();

//    protected Thread getOwner();


//    public final boolean hasQueuedThreads();

//    public final boolean hasQueuedThread(Thread thread);
//    public final int getQueueLength();

//    protected Collection<Thread> getQueuedThreads();

//    public boolean hasWaiters(Condition condition) ;

//    public int getWaitQueueLength(Condition condition);

//    protected Collection<Thread> getWaitingThreads(Condition condition);

    // public String toString();
}
```

```java
// 抽象队列同步器
// state， owner， waiters
public class NeteaseAqs {
    // acquire、 acquireShared ： 定义了资源争用的逻辑，如果没拿到，则等待。
    // tryAcquire、 tryAcquireShared ： 实际执行占用资源的操作，如何判定一个由使用者具体去实现。
    // release、 releaseShared ： 定义释放资源的逻辑，释放之后，通知后续节点进行争抢。
    // tryRelease、 tryReleaseShared： 实际执行资源释放的操作，具体的AQS使用者去实现。

    // 1、 如何判断一个资源的拥有者
    public volatile AtomicReference<Thread> owner = new AtomicReference<>();
    // 保存 正在等待的线程
    public volatile LinkedBlockingQueue<Thread> waiters = new LinkedBlockingQueue<>();
    // 记录资源状态
    public volatile AtomicInteger state = new AtomicInteger(0);

    // 共享资源占用的逻辑，返回资源的占用情况
    public int tryAcquireShared(){
        throw new UnsupportedOperationException();
    }

    public void acquireShared(){
        boolean addQ = true;
        while(tryAcquireShared() < 0) {
            if (addQ) {
                // 没拿到锁，加入到等待集合
                waiters.offer(Thread.currentThread());
                addQ = false;
            } else {
                // 阻塞 挂起当前的线程，不要继续往下跑了
                LockSupport.park(); // 伪唤醒，就是非unpark唤醒的
            }
        }
        waiters.remove(Thread.currentThread()); // 把线程移除
    }

    public boolean tryReleaseShared(){
        throw new UnsupportedOperationException();
    }

    public void releaseShared(){
        if (tryReleaseShared()) {
            // 通知等待者
            Iterator<Thread> iterator = waiters.iterator();
            while (iterator.hasNext()) {
                Thread next = iterator.next();
                LockSupport.unpark(next); // 唤醒
            }
        }
    }

    // 独占资源相关的代码

    public boolean tryAcquire() { // 交给使用者去实现。 模板方法设计模式
        throw new UnsupportedOperationException();
    }

    public void acquire() {
        boolean addQ = true;
        while (!tryAcquire()) {
            if (addQ) {
                // 没拿到锁，加入到等待集合
                waiters.offer(Thread.currentThread());
                addQ = false;
            } else {
                // 阻塞 挂起当前的线程，不要继续往下跑了
                LockSupport.park(); // 伪唤醒，就是非unpark唤醒的
            }
        }
        waiters.remove(Thread.currentThread()); // 把线程移除
    }

    public boolean tryRelease() {
        throw new UnsupportedOperationException();
    }

    public void release() { // 定义了 释放资源之后要做的操作
        if (tryRelease()) {
            // 通知等待者
            Iterator<Thread> iterator = waiters.iterator();
            while (iterator.hasNext()) {
                Thread next = iterator.next();
                LockSupport.unpark(next); // 唤醒
            }
        }
    }

    public AtomicInteger getState() {
        return state;
    }

    public void setState(AtomicInteger state) {
        this.state = state;
    }
}
```
AbstractQueuedSynchronizer源码：
```java
/*
 * ORACLE PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

/*
 *
 *
 *
 *
 *
 * Written by Doug Lea with assistance from members of JCP JSR-166
 * Expert Group and released to the public domain, as explained at
 * http://creativecommons.org/publicdomain/zero/1.0/
 */

package com.study.lock.aqs.source;
import java.util.concurrent.TimeUnit;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.concurrent.locks.AbstractOwnableSynchronizer;
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.LockSupport;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReadWriteLock;

import sun.misc.Unsafe;

/**
 * Provides a framework for implementing blocking locks and related
 * synchronizers (semaphores, events, etc) that rely on
 * first-in-first-out (FIFO) wait queues.  This class is designed to
 * be a useful basis for most kinds of synchronizers that rely on a
 * single atomic {@code int} value to represent state. Subclasses
 * must define the protected methods that change this state, and which
 * define what that state means in terms of this object being acquired
 * or released.  Given these, the other methods in this class carry
 * out all queuing and blocking mechanics. Subclasses can maintain
 * other state fields, but only the atomically updated {@code int}
 * value manipulated using methods {@link #getState}, {@link
 * #setState} and {@link #compareAndSetState} is tracked with respect
 * to synchronization.
 *
 * <p>Subclasses should be defined as non-public internal helper
 * classes that are used to implement the synchronization properties
 * of their enclosing class.  Class
 * {@code AbstractQueuedSynchronizer} does not implement any
 * synchronization interface.  Instead it defines methods such as
 * {@link #acquireInterruptibly} that can be invoked as
 * appropriate by concrete locks and related synchronizers to
 * implement their public methods.
 *
 * <p>This class supports either or both a default <em>exclusive</em>
 * mode and a <em>shared</em> mode. When acquired in exclusive mode,
 * attempted acquires by other threads cannot succeed. Shared mode
 * acquires by multiple threads may (but need not) succeed. This class
 * does not &quot;understand&quot; these differences except in the
 * mechanical sense that when a shared mode acquire succeeds, the next
 * waiting thread (if one exists) must also determine whether it can
 * acquire as well. Threads waiting in the different modes share the
 * same FIFO queue. Usually, implementation subclasses support only
 * one of these modes, but both can come into play for example in a
 * {@link ReadWriteLock}. Subclasses that support only exclusive or
 * only shared modes need not define the methods supporting the unused mode.
 *
 * <p>This class defines a nested {@link ConditionObject} class that
 * can be used as a {@link Condition} implementation by subclasses
 * supporting exclusive mode for which method {@link
 * #isHeldExclusively} reports whether synchronization is exclusively
 * held with respect to the current thread, method {@link #release}
 * invoked with the current {@link #getState} value fully releases
 * this object, and {@link #acquire}, given this saved state value,
 * eventually restores this object to its previous acquired state.  No
 * {@code AbstractQueuedSynchronizer} method otherwise creates such a
 * condition, so if this constraint cannot be met, do not use it.  The
 * behavior of {@link ConditionObject} depends of course on the
 * semantics of its synchronizer implementation.
 *
 * <p>This class provides inspection, instrumentation, and monitoring
 * methods for the internal queue, as well as similar methods for
 * condition objects. These can be exported as desired into classes
 * using an {@code AbstractQueuedSynchronizer} for their
 * synchronization mechanics.
 *
 * <p>Serialization of this class stores only the underlying atomic
 * integer maintaining state, so deserialized objects have empty
 * thread queues. Typical subclasses requiring serializability will
 * define a {@code readObject} method that restores this to a known
 * initial state upon deserialization.
 *
 * <h3>Usage</h3>
 *
 * <p>To use this class as the basis of a synchronizer, redefine the
 * following methods, as applicable, by inspecting and/or modifying
 * the synchronization state using {@link #getState}, {@link
 * #setState} and/or {@link #compareAndSetState}:
 *
 * <ul>
 * <li> {@link #tryAcquire}
 * <li> {@link #tryRelease}
 * <li> {@link #tryAcquireShared}
 * <li> {@link #tryReleaseShared}
 * <li> {@link #isHeldExclusively}
 * </ul>
 *
 * Each of these methods by default throws {@link
 * UnsupportedOperationException}.  Implementations of these methods
 * must be internally thread-safe, and should in general be short and
 * not block. Defining these methods is the <em>only</em> supported
 * means of using this class. All other methods are declared
 * {@code final} because they cannot be independently varied.
 *
 * <p>You may also find the inherited methods from {@link
 * AbstractOwnableSynchronizer} useful to keep track of the thread
 * owning an exclusive synchronizer.  You are encouraged to use them
 * -- this enables monitoring and diagnostic tools to assist users in
 * determining which threads hold locks.
 *
 * <p>Even though this class is based on an internal FIFO queue, it
 * does not automatically enforce FIFO acquisition policies.  The core
 * of exclusive synchronization takes the form:
 *
 * <pre>
 * Acquire:
 *     while (!tryAcquire(arg)) {
 *        <em>enqueue thread if it is not already queued</em>;
 *        <em>possibly block current thread</em>;
 *     }
 *
 * Release:
 *     if (tryRelease(arg))
 *        <em>unblock the first queued thread</em>;
 * </pre>
 *
 * (Shared mode is similar but may involve cascading signals.)
 *
 * <p id="barging">Because checks in acquire are invoked before
 * enqueuing, a newly acquiring thread may <em>barge</em> ahead of
 * others that are blocked and queued.  However, you can, if desired,
 * define {@code tryAcquire} and/or {@code tryAcquireShared} to
 * disable barging by internally invoking one or more of the inspection
 * methods, thereby providing a <em>fair</em> FIFO acquisition order.
 * In particular, most fair synchronizers can define {@code tryAcquire}
 * to return {@code false} if {@link #hasQueuedPredecessors} (a method
 * specifically designed to be used by fair synchronizers) returns
 * {@code true}.  Other variations are possible.
 *
 * <p>Throughput and scalability are generally highest for the
 * default barging (also known as <em>greedy</em>,
 * <em>renouncement</em>, and <em>convoy-avoidance</em>) strategy.
 * While this is not guaranteed to be fair or starvation-free, earlier
 * queued threads are allowed to recontend before later queued
 * threads, and each recontention has an unbiased chance to succeed
 * against incoming threads.  Also, while acquires do not
 * &quot;spin&quot; in the usual sense, they may perform multiple
 * invocations of {@code tryAcquire} interspersed with other
 * computations before blocking.  This gives most of the benefits of
 * spins when exclusive synchronization is only briefly held, without
 * most of the liabilities when it isn't. If so desired, you can
 * augment this by preceding calls to acquire methods with
 * "fast-path" checks, possibly prechecking {@link #hasContended}
 * and/or {@link #hasQueuedThreads} to only do so if the synchronizer
 * is likely not to be contended.
 *
 * <p>This class provides an efficient and scalable basis for
 * synchronization in part by specializing its range of use to
 * synchronizers that can rely on {@code int} state, acquire, and
 * release parameters, and an internal FIFO wait queue. When this does
 * not suffice, you can build synchronizers from a lower level using
 * {@link java.util.concurrent.atomic atomic} classes, your own custom
 * {@link java.util.Queue} classes, and {@link LockSupport} blocking
 * support.
 *
 * <h3>Usage Examples</h3>
 *
 * <p>Here is a non-reentrant mutual exclusion lock class that uses
 * the value zero to represent the unlocked state, and one to
 * represent the locked state. While a non-reentrant lock
 * does not strictly require recording of the current owner
 * thread, this class does so anyway to make usage easier to monitor.
 * It also supports conditions and exposes
 * one of the instrumentation methods:
 *
 *  <pre> {@code
 * class Mutex implements Lock, java.io.Serializable {
 *
 *   // Our internal helper class
 *   private static class Sync extends AbstractQueuedSynchronizer {
 *     // Reports whether in locked state
 *     protected boolean isHeldExclusively() {
 *       return getState() == 1;
 *     }
 *
 *     // Acquires the lock if state is zero
 *     public boolean tryAcquire(int acquires) {
 *       assert acquires == 1; // Otherwise unused
 *       if (compareAndSetState(0, 1)) {
 *         setExclusiveOwnerThread(Thread.currentThread());
 *         return true;
 *       }
 *       return false;
 *     }
 *
 *     // Releases the lock by setting state to zero
 *     protected boolean tryRelease(int releases) {
 *       assert releases == 1; // Otherwise unused
 *       if (getState() == 0) throw new IllegalMonitorStateException();
 *       setExclusiveOwnerThread(null);
 *       setState(0);
 *       return true;
 *     }
 *
 *     // Provides a Condition
 *     Condition newCondition() { return new ConditionObject(); }
 *
 *     // Deserializes properly
 *     private void readObject(ObjectInputStream s)
 *         throws IOException, ClassNotFoundException {
 *       s.defaultReadObject();
 *       setState(0); // reset to unlocked state
 *     }
 *   }
 *
 *   // The sync object does all the hard work. We just forward to it.
 *   private final Sync sync = new Sync();
 *
 *   public void lock()                { sync.acquire(1); }
 *   public boolean tryLock()          { return sync.tryAcquire(1); }
 *   public void unlock()              { sync.release(1); }
 *   public Condition newCondition()   { return sync.newCondition(); }
 *   public boolean isLocked()         { return sync.isHeldExclusively(); }
 *   public boolean hasQueuedThreads() { return sync.hasQueuedThreads(); }
 *   public void lockInterruptibly() throws InterruptedException {
 *     sync.acquireInterruptibly(1);
 *   }
 *   public boolean tryLock(long timeout, TimeUnit unit)
 *       throws InterruptedException {
 *     return sync.tryAcquireNanos(1, unit.toNanos(timeout));
 *   }
 * }}</pre>
 *
 * <p>Here is a latch class that is like a
 * {@link java.util.concurrent.CountDownLatch CountDownLatch}
 * except that it only requires a single {@code signal} to
 * fire. Because a latch is non-exclusive, it uses the {@code shared}
 * acquire and release methods.
 *
 *  <pre> {@code
 * class BooleanLatch {
 *
 *   private static class Sync extends AbstractQueuedSynchronizer {
 *     boolean isSignalled() { return getState() != 0; }
 *
 *     protected int tryAcquireShared(int ignore) {
 *       return isSignalled() ? 1 : -1;
 *     }
 *
 *     protected boolean tryReleaseShared(int ignore) {
 *       setState(1);
 *       return true;
 *     }
 *   }
 *
 *   private final Sync sync = new Sync();
 *   public boolean isSignalled() { return sync.isSignalled(); }
 *   public void signal()         { sync.releaseShared(1); }
 *   public void await() throws InterruptedException {
 *     sync.acquireSharedInterruptibly(1);
 *   }
 * }}</pre>
 *
 * @since 1.5
 * @author Doug Lea
 */
public abstract class AbstractQueuedSynchronizer
    extends AbstractOwnableSynchronizer
    implements java.io.Serializable {

    private static final long serialVersionUID = 7373984972572414691L;

    /**
     * Creates a new {@code AbstractQueuedSynchronizer} instance
     * with initial synchronization state of zero.
     */
    protected AbstractQueuedSynchronizer() { }

    /**
     * Wait queue node class.
     *
     * <p>The wait queue is a variant of a "CLH" (Craig, Landin, and
     * Hagersten) lock queue. CLH locks are normally used for
     * spinlocks.  We instead use them for blocking synchronizers, but
     * use the same basic tactic of holding some of the control
     * information about a thread in the predecessor of its node.  A
     * "status" field in each node keeps track of whether a thread
     * should block.  A node is signalled when its predecessor
     * releases.  Each node of the queue otherwise serves as a
     * specific-notification-style monitor holding a single waiting
     * thread. The status field does NOT control whether threads are
     * granted locks etc though.  A thread may try to acquire if it is
     * first in the queue. But being first does not guarantee success;
     * it only gives the right to contend.  So the currently released
     * contender thread may need to rewait.
     *
     * <p>To enqueue into a CLH lock, you atomically splice it in as new
     * tail. To dequeue, you just set the head field.
     * <pre>
     *      +------+  prev +-----+       +-----+
     * head |      | <---- |     | <---- |     |  tail
     *      +------+       +-----+       +-----+
     * </pre>
     *
     * <p>Insertion into a CLH queue requires only a single atomic
     * operation on "tail", so there is a simple atomic point of
     * demarcation from unqueued to queued. Similarly, dequeuing
     * involves only updating the "head". However, it takes a bit
     * more work for nodes to determine who their successors are,
     * in part to deal with possible cancellation due to timeouts
     * and interrupts.
     *
     * <p>The "prev" links (not used in original CLH locks), are mainly
     * needed to handle cancellation. If a node is cancelled, its
     * successor is (normally) relinked to a non-cancelled
     * predecessor. For explanation of similar mechanics in the case
     * of spin locks, see the papers by Scott and Scherer at
     * http://www.cs.rochester.edu/u/scott/synchronization/
     *
     * <p>We also use "next" links to implement blocking mechanics.
     * The thread id for each node is kept in its own node, so a
     * predecessor signals the next node to wake up by traversing
     * next link to determine which thread it is.  Determination of
     * successor must avoid races with newly queued nodes to set
     * the "next" fields of their predecessors.  This is solved
     * when necessary by checking backwards from the atomically
     * updated "tail" when a node's successor appears to be null.
     * (Or, said differently, the next-links are an optimization
     * so that we don't usually need a backward scan.)
     *
     * <p>Cancellation introduces some conservatism to the basic
     * algorithms.  Since we must poll for cancellation of other
     * nodes, we can miss noticing whether a cancelled node is
     * ahead or behind us. This is dealt with by always unparking
     * successors upon cancellation, allowing them to stabilize on
     * a new predecessor, unless we can identify an uncancelled
     * predecessor who will carry this responsibility.
     *
     * <p>CLH queues need a dummy header node to get started. But
     * we don't create them on construction, because it would be wasted
     * effort if there is never contention. Instead, the node
     * is constructed and head and tail pointers are set upon first
     * contention.
     *
     * <p>Threads waiting on Conditions use the same nodes, but
     * use an additional link. Conditions only need to link nodes
     * in simple (non-concurrent) linked queues because they are
     * only accessed when exclusively held.  Upon await, a node is
     * inserted into a condition queue.  Upon signal, the node is
     * transferred to the main queue.  A special value of status
     * field is used to mark which queue a node is on.
     *
     * <p>Thanks go to Dave Dice, Mark Moir, Victor Luchangco, Bill
     * Scherer and Michael Scott, along with members of JSR-166
     * expert group, for helpful ideas, discussions, and critiques
     * on the design of this class.
     */
    static final class Node {
        /** Marker to indicate a node is waiting in shared mode */
        static final Node SHARED = new Node();
        /** Marker to indicate a node is waiting in exclusive mode */
        static final Node EXCLUSIVE = null;

        /** waitStatus value to indicate thread has cancelled */
        static final int CANCELLED =  1;// 等待超时或被中断
        /** waitStatus value to indicate successor's thread needs unparking */
        static final int SIGNAL    = -1;// 释放锁之后，是否通知后一个节点
        /** waitStatus value to indicate thread is waiting on condition */
        static final int CONDITION = -2;// 处于等待队列中，结点的线程等待在Condition上
        /**
         * waitStatus value to indicate the next acquireShared should
         * unconditionally propagate
         */
        static final int PROPAGATE = -3;// 共享模式中使用，线程处于可运行状态

        /**
         * Status field, taking on only the values:
         *   SIGNAL:     The successor of this node is (or will soon be)
         *               blocked (via park), so the current node must
         *               unpark its successor when it releases or
         *               cancels. To avoid races, acquire methods must
         *               first indicate they need a signal,
         *               then retry the atomic acquire, and then,
         *               on failure, block.
         *   CANCELLED:  This node is cancelled due to timeout or interrupt.
         *               Nodes never leave this state. In particular,
         *               a thread with cancelled node never again blocks.
         *   CONDITION:  This node is currently on a condition queue.
         *               It will not be used as a sync queue node
         *               until transferred, at which time the status
         *               will be set to 0. (Use of this value here has
         *               nothing to do with the other uses of the
         *               field, but simplifies mechanics.)
         *   PROPAGATE:  A releaseShared should be propagated to other
         *               nodes. This is set (for head node only) in
         *               doReleaseShared to ensure propagation
         *               continues, even if other operations have
         *               since intervened.
         *   0:          None of the above
         *
         * The values are arranged numerically to simplify use.
         * Non-negative values mean that a node doesn't need to
         * signal. So, most code doesn't need to check for particular
         * values, just for sign.
         *
         * The field is initialized to 0 for normal sync nodes, and
         * CONDITION for condition nodes.  It is modified using CAS
         * (or when possible, unconditional volatile writes).
         */
        volatile int waitStatus;

        /**
         * Link to predecessor node that current node/thread relies on
         * for checking waitStatus. Assigned during enqueuing, and nulled
         * out (for sake of GC) only upon dequeuing.  Also, upon
         * cancellation of a predecessor, we short-circuit while
         * finding a non-cancelled one, which will always exist
         * because the head node is never cancelled: A node becomes
         * head only as a result of successful acquire. A
         * cancelled thread never succeeds in acquiring, and a thread only
         * cancels itself, not any other node.
         */
        volatile Node prev;

        /**
         * Link to the successor node that the current node/thread
         * unparks upon release. Assigned during enqueuing, adjusted
         * when bypassing cancelled predecessors, and nulled out (for
         * sake of GC) when dequeued.  The enq operation does not
         * assign next field of a predecessor until after attachment,
         * so seeing a null next field does not necessarily mean that
         * node is at end of queue. However, if a next field appears
         * to be null, we can scan prev's from the tail to
         * double-check.  The next field of cancelled nodes is set to
         * point to the node itself instead of null, to make life
         * easier for isOnSyncQueue.
         */
        volatile Node next;

        /**
         * The thread that enqueued this node.  Initialized on
         * construction and nulled out after use.
         */
        volatile Thread thread;

        /**
         * Link to next node waiting on condition, or the special
         * value SHARED.  Because condition queues are accessed only
         * when holding in exclusive mode, we just need a simple
         * linked queue to hold nodes while they are waiting on
         * conditions. They are then transferred to the queue to
         * re-acquire. And because conditions can only be exclusive,
         * we save a field by using special value to indicate shared
         * mode.
         */
        Node nextWaiter;

        /**
         * Returns true if node is waiting in shared mode.
         */
        final boolean isShared() {
            return nextWaiter == SHARED;
        }

        /**
         * Returns previous node, or throws NullPointerException if null.
         * Use when predecessor cannot be null.  The null check could
         * be elided, but is present to help the VM.
         *
         * @return the predecessor of this node
         */
        final Node predecessor() throws NullPointerException {
            Node p = prev;
            if (p == null)
                throw new NullPointerException();
            else
                return p;
        }

        Node() {    // Used to establish initial head or SHARED marker
        }

        Node(Thread thread, Node mode) {     // Used by addWaiter
            this.nextWaiter = mode;
            this.thread = thread;
        }

        Node(Thread thread, int waitStatus) { // Used by Condition
            this.waitStatus = waitStatus;
            this.thread = thread;
        }
    }

    /**
     * Head of the wait queue, lazily initialized.  Except for
     * initialization, it is modified only via method setHead.  Note:
     * If head exists, its waitStatus is guaranteed not to be
     * CANCELLED.
     */
    private transient volatile Node head;

    /**
     * Tail of the wait queue, lazily initialized.  Modified only via
     * method enq to add new wait node.
     */
    private transient volatile Node tail;

    /**
     * The synchronization state.
     */
    private volatile int state;

    /**
     * Returns the current value of synchronization state.
     * This operation has memory semantics of a {@code volatile} read.
     * @return current state value
     */
    protected final int getState() {
        return state;
    }

    /**
     * Sets the value of synchronization state.
     * This operation has memory semantics of a {@code volatile} write.
     * @param newState the new state value
     */
    protected final void setState(int newState) {
        state = newState;
    }

    /**
     * Atomically sets synchronization state to the given updated
     * value if the current state value equals the expected value.
     * This operation has memory semantics of a {@code volatile} read
     * and write.
     *
     * @param expect the expected value
     * @param update the new value
     * @return {@code true} if successful. False return indicates that the actual
     *         value was not equal to the expected value.
     */
    protected final boolean compareAndSetState(int expect, int update) {
        // See below for intrinsics setup to support this
        return unsafe.compareAndSwapInt(this, stateOffset, expect, update);
    }

    // Queuing utilities

    /**
     * The number of nanoseconds for which it is faster to spin
     * rather than to use timed park. A rough estimate suffices
     * to improve responsiveness with very short timeouts.
     */
    static final long spinForTimeoutThreshold = 1000L;

    /**将node加入队尾
     * Inserts node into queue, initializing if necessary. See picture above.
     * @param node the node to insert
     * @return node's predecessor
     */
    private Node enq(final Node node) {
        for (;;) { // CAS + 循环 = 自旋
            Node t = tail;
            if (t == null) { // Must initialize 队列为空
                if (compareAndSetHead(new Node()))// 创建一个空的标志结点作为head结点
                    tail = head; // tail 和 head都是同一个节点
            } else {
                node.prev = t;
                if (compareAndSetTail(t, node)) { // 放入tail尾部
                    t.next = node;
                    return t;
                }
            }
        }
    }

    /**将当前线程加入到等待队列的队尾，并返回当前线程所在的结点
     * Creates and enqueues node for current thread and given mode.
     *
     * @param mode Node.EXCLUSIVE for exclusive, Node.SHARED for shared
     * @return the new node
     */
    private Node addWaiter(Node mode) {
        Node node = new Node(Thread.currentThread(), mode);//EXCLUSIVE（独占）和SHARED（共享）
        // Try the fast path of enq; backup to full enq on failure
        Node pred = tail;
        if (pred != null) {// 直接放到队尾。
            node.prev = pred;
            if (compareAndSetTail(pred, node)) {
                pred.next = node;
                return node;
            }
        }
        enq(node);// 按正常逻辑入队列
        return node;
    }

    /**
     * Sets head of queue to be node, thus dequeuing. Called only by
     * acquire methods.  Also nulls out unused fields for sake of GC
     * and to suppress unnecessary signals and traversals.
     *
     * @param node the node
     */
    private void setHead(Node node) {
        head = node;
        node.thread = null;
        node.prev = null;
    }

    /** 唤醒等待者
     * Wakes up node's successor, if one exists.
     *
     * @param node the node
     */
    private void unparkSuccessor(Node node) {
        /*
         * If status is negative (i.e., possibly needing signal) try
         * to clear in anticipation of signalling.  It is OK if this
         * fails or if status is changed by waiting thread.
         */
        int ws = node.waitStatus; // 正在释放锁的线程节点状态
        if (ws < 0)
            compareAndSetWaitStatus(node, ws, 0); // 修改当前节点状态

        /*
         * Thread to unpark is held in successor, which is normally
         * just the next node.  But if cancelled or apparently null,
         * traverse backwards from tail to find the actual
         * non-cancelled successor.
         */
        Node s = node.next; // 找下一个节点
        if (s == null || s.waitStatus > 0) { // 如果不存在或者被取消了，继续寻找合适的下一个节点
            s = null;
            for (Node t = tail; t != null && t != node; t = t.prev)
                if (t.waitStatus <= 0)
                    s = t;
        }
        if (s != null) // 如果找到了合适的节点，就唤醒它
            LockSupport.unpark(s.thread);
    }

    /** 共享模式下 - 唤醒当前head节点的后续节点
     * Release action for shared mode -- signals successor and ensures
     * propagation. (Note: For exclusive mode, release just amounts
     * to calling unparkSuccessor of head if it needs signal.)
     */
    private void doReleaseShared() {
        /*
         * Ensure that a release propagates, even if there are other
         * in-progress acquires/releases.  This proceeds in the usual
         * way of trying to unparkSuccessor of head if it needs
         * signal. But if it does not, status is set to PROPAGATE to
         * ensure that upon release, propagation continues.
         * Additionally, we must loop in case a new node is added
         * while we are doing this. Also, unlike other uses of
         * unparkSuccessor, we need to know if CAS to reset status
         * fails, if so rechecking.
         */
        for (;;) {
            Node h = head;
            if (h != null && h != tail) { // 判定是否还有后续节点
                int ws = h.waitStatus;
                if (ws == Node.SIGNAL) { // 如果状态为SIGNAL，代表需要通知后续节点
                    if (!compareAndSetWaitStatus(h, Node.SIGNAL, 0))// 修改状态为0，通知一次
                        continue;            // loop to recheck cases 修改失败，代表已经通知，继续处理
                    unparkSuccessor(h); // 唤醒
                }
                else if (ws == 0 &&
                         !compareAndSetWaitStatus(h, 0, Node.PROPAGATE)) // 通知过后，修改节点状态为PROPAGATE
                    continue;                // loop on failed CAS
            }
            if (h == head)                   // loop if head changed 知道其他的节点，把这个head挤下来，它才跳出循环
                break;
        }
    }

    /** 修改head节点，同时传播可以获取资源的信号
     * Sets head of queue, and checks if successor may be waiting
     * in shared mode, if so propagating if either propagate > 0 or
     * PROPAGATE status was set.
     *
     * @param node the node
     * @param propagate the return value from a tryAcquireShared
     */
    private void setHeadAndPropagate(Node node, int propagate) {
        Node h = head; // Record old head for check below
        setHead(node); // 修改head
        /*
         * Try to signal next queued node if:
         *   Propagation was indicated by caller,
         *     or was recorded (as h.waitStatus either before
         *     or after setHead) by a previous operation
         *     (note: this uses sign-check of waitStatus because
         *      PROPAGATE status may transition to SIGNAL.)
         * and
         *   The next node is waiting in shared mode,
         *     or we don't know, because it appears null
         *
         * The conservatism in both of these checks may cause
         * unnecessary wake-ups, but only when there are multiple
         * racing acquires/releases, so most need signals now or soon
         * anyway.
         */
        if (propagate > 0 || h == null || h.waitStatus < 0 ||
            (h = head) == null || h.waitStatus < 0) {// 资源剩余的数量如果不大于0，则不需要再进行唤醒
            Node s = node.next;
            if (s == null || s.isShared()) // 共享模式，通知其他节点
                doReleaseShared();
        }
    }

    // Utilities for various versions of acquire

    /**
     * Cancels an ongoing attempt to acquire.
     *
     * @param node the node
     */
    private void cancelAcquire(Node node) {
        // Ignore if node doesn't exist
        if (node == null)
            return;

        node.thread = null;

        // Skip cancelled predecessors
        Node pred = node.prev;
        while (pred.waitStatus > 0)
            node.prev = pred = pred.prev;

        // predNext is the apparent node to unsplice. CASes below will
        // fail if not, in which case, we lost race vs another cancel
        // or signal, so no further action is necessary.
        Node predNext = pred.next;

        // Can use unconditional write instead of CAS here.
        // After this atomic step, other Nodes can skip past us.
        // Before, we are free of interference from other threads.
        node.waitStatus = Node.CANCELLED;

        // If we are the tail, remove ourselves.
        if (node == tail && compareAndSetTail(node, pred)) {
            compareAndSetNext(pred, predNext, null);
        } else {
            // If successor needs signal, try to set pred's next-link
            // so it will get one. Otherwise wake it up to propagate.
            int ws;
            if (pred != head &&
                ((ws = pred.waitStatus) == Node.SIGNAL ||
                 (ws <= 0 && compareAndSetWaitStatus(pred, ws, Node.SIGNAL))) &&
                pred.thread != null) {
                Node next = node.next;
                if (next != null && next.waitStatus <= 0)
                    compareAndSetNext(pred, predNext, next);
            } else {
                unparkSuccessor(node);
            }

            node.next = node; // help GC
        }
    }

    /**检查状态，是否需要挂起线程
     * Checks and updates status for a node that failed to acquire.
     * Returns true if thread should block. This is the main signal
     * control in all acquire loops.  Requires that pred == node.prev.
     *
     * @param pred node's predecessor holding status
     * @param node the node
     * @return {@code true} if thread should block
     */
    private static boolean shouldParkAfterFailedAcquire(Node pred, Node node) {
        int ws = pred.waitStatus; // 根据 前置节点的状态 执行不同的流程
        if (ws == Node.SIGNAL) // 前置节点释放锁之后会通知当前线程，挂起吧
            /*
             * This node has already set status asking a release
             * to signal it, so it can safely park.
             */
            return true;
        if (ws > 0) { // 前置节点处于CANCELLED状态，跳过它继续寻找正常的节点，并且甩掉中间那段不正常的节点
            /*
             * Predecessor was cancelled. Skip over predecessors and
             * indicate retry.
             */
            do { // 也可以理解为，这是一次队列检查
                node.prev = pred = pred.prev;
            } while (pred.waitStatus > 0);
            pred.next = node;
        } else {
            /*
             * waitStatus must be 0 or PROPAGATE.  Indicate that we
             * need a signal, but don't park yet.  Caller will need to
             * retry to make sure it cannot acquire before parking.
             */
            compareAndSetWaitStatus(pred, ws, Node.SIGNAL); // 修改前置的状态为SIGNAL，用意是释放锁之后会通知后续节点
        }
        return false;
    }

    /**
     * Convenience method to interrupt current thread.
     */
    static void selfInterrupt() {
        Thread.currentThread().interrupt();
    }

    /**
     * Convenience method to park and then check if interrupted
     *
     * @return {@code true} if interrupted
     */
    private final boolean parkAndCheckInterrupt() {
        LockSupport.park(this);
        return Thread.interrupted(); // 返回是否有中断迹象
    }

    /*
     * Various flavors of acquire, varying in exclusive/shared and
     * control modes.  Each is mostly the same, but annoyingly
     * different.  Only a little bit of factoring is possible due to
     * interactions of exception mechanics (including ensuring that we
     * cancel if tryAcquire throws exception) and other control, at
     * least not without hurting performance too much.
     */

    /**进入等待状态，直到其他线程释放资源后唤醒继续执行
     * Acquires in exclusive uninterruptible mode for thread already in
     * queue. Used by condition wait methods as well as acquire.
     *
     * @param node the node
     * @param arg the acquire argument
     * @return {@code true} if interrupted while waiting
     */
    final boolean acquireQueued(final Node node, int arg) {
        boolean failed = true;
        try {
            boolean interrupted = false; // 当前线程释放中断的标志位
            for (;;) {// 不断尝试
                final Node p = node.predecessor(); // 获取前一个节点
                if (p == head && tryAcquire(arg)) { // 如果前一个节点是head，尝试抢一次锁
                    setHead(node); // 更换head
                    p.next = null; // help GC
                    failed = false;
                    return interrupted;
                }
                if (shouldParkAfterFailedAcquire(p, node) &&// 检查状态，是否需要挂起线程
                    parkAndCheckInterrupt())// 如果需要挂起，则通过Park进入停车场挂起
                    interrupted = true; // 如果出现中断，则修改标记
            }
        } finally {
            if (failed)
                cancelAcquire(node);
        }
    }

    /**
     * Acquires in exclusive interruptible mode.
     * @param arg the acquire argument
     */
    private void doAcquireInterruptibly(int arg)
        throws InterruptedException {
        final Node node = addWaiter(Node.EXCLUSIVE);
        boolean failed = true;
        try {
            for (;;) {
                final Node p = node.predecessor();
                if (p == head && tryAcquire(arg)) {
                    setHead(node);
                    p.next = null; // help GC
                    failed = false;
                    return;
                }
                if (shouldParkAfterFailedAcquire(p, node) &&
                    parkAndCheckInterrupt())
                    throw new InterruptedException();
            }
        } finally {
            if (failed)
                cancelAcquire(node);
        }
    }

    /**
     * Acquires in exclusive timed mode.
     *
     * @param arg the acquire argument
     * @param nanosTimeout max wait time
     * @return {@code true} if acquired
     */
    private boolean doAcquireNanos(int arg, long nanosTimeout)
            throws InterruptedException {
        if (nanosTimeout <= 0L)
            return false;
        final long deadline = System.nanoTime() + nanosTimeout;
        final Node node = addWaiter(Node.EXCLUSIVE);
        boolean failed = true;
        try {
            for (;;) {
                final Node p = node.predecessor();
                if (p == head && tryAcquire(arg)) {
                    setHead(node);
                    p.next = null; // help GC
                    failed = false;
                    return true;
                }
                nanosTimeout = deadline - System.nanoTime();
                if (nanosTimeout <= 0L)
                    return false;
                if (shouldParkAfterFailedAcquire(p, node) &&
                    nanosTimeout > spinForTimeoutThreshold)
                    LockSupport.parkNanos(this, nanosTimeout);
                if (Thread.interrupted())
                    throw new InterruptedException();
            }
        } finally {
            if (failed)
                cancelAcquire(node);
        }
    }

    /**等待..
     * Acquires in shared uninterruptible mode.
     * @param arg the acquire argument
     */
    private void doAcquireShared(int arg) {
        final Node node = addWaiter(Node.SHARED); // 以共享模式加入队列尾部
        boolean failed = true;
        try {
            boolean interrupted = false;
            for (;;) { // 自旋
                final Node p = node.predecessor(); // 前置节点
                if (p == head) { // 如果前置为head
                    int r = tryAcquireShared(arg); // 尝试获取资源,返回资源剩余的数量
                    if (r >= 0) { // 拿到资源
                        setHeadAndPropagate(node, r); // 修改head节点
                        p.next = null; // help GC
                        if (interrupted)
                            selfInterrupt();
                        failed = false;
                        return;
                    }
                }
                if (shouldParkAfterFailedAcquire(p, node) &&
                    parkAndCheckInterrupt())
                    interrupted = true;
            }
        } finally {
            if (failed)
                cancelAcquire(node);
        }
    }

    /**
     * Acquires in shared interruptible mode.
     * @param arg the acquire argument
     */
    private void doAcquireSharedInterruptibly(int arg)
        throws InterruptedException {
        final Node node = addWaiter(Node.SHARED);
        boolean failed = true;
        try {
            for (;;) {
                final Node p = node.predecessor();
                if (p == head) {
                    int r = tryAcquireShared(arg);
                    if (r >= 0) {
                        setHeadAndPropagate(node, r);
                        p.next = null; // help GC
                        failed = false;
                        return;
                    }
                }
                if (shouldParkAfterFailedAcquire(p, node) &&
                    parkAndCheckInterrupt())
                    throw new InterruptedException();
            }
        } finally {
            if (failed)
                cancelAcquire(node);
        }
    }

    /**
     * Acquires in shared timed mode.
     *
     * @param arg the acquire argument
     * @param nanosTimeout max wait time
     * @return {@code true} if acquired
     */
    private boolean doAcquireSharedNanos(int arg, long nanosTimeout)
            throws InterruptedException {
        if (nanosTimeout <= 0L)
            return false;
        final long deadline = System.nanoTime() + nanosTimeout;
        final Node node = addWaiter(Node.SHARED);
        boolean failed = true;
        try {
            for (;;) {
                final Node p = node.predecessor();
                if (p == head) {
                    int r = tryAcquireShared(arg);
                    if (r >= 0) {
                        setHeadAndPropagate(node, r);
                        p.next = null; // help GC
                        failed = false;
                        return true;
                    }
                }
                nanosTimeout = deadline - System.nanoTime();
                if (nanosTimeout <= 0L)
                    return false;
                if (shouldParkAfterFailedAcquire(p, node) &&
                    nanosTimeout > spinForTimeoutThreshold)
                    LockSupport.parkNanos(this, nanosTimeout);
                if (Thread.interrupted())
                    throw new InterruptedException();
            }
        } finally {
            if (failed)
                cancelAcquire(node);
        }
    }

    // Main exported methods

    /**尝试去获取独占资源,由使用者自行实现
     * Attempts to acquire in exclusive mode. This method should query
     * if the state of the object permits it to be acquired in the
     * exclusive mode, and if so to acquire it.
     *
     * <p>This method is always invoked by the thread performing
     * acquire.  If this method reports failure, the acquire method
     * may queue the thread, if it is not already queued, until it is
     * signalled by a release from some other thread. This can be used
     * to implement method {@link Lock#tryLock()}.
     *
     * <p>The default
     * implementation throws {@link UnsupportedOperationException}.
     *
     * @param arg the acquire argument. This value is always the one
     *        passed to an acquire method, or is the value saved on entry
     *        to a condition wait.  The value is otherwise uninterpreted
     *        and can represent anything you like.
     * @return {@code true} if successful. Upon success, this object has
     *         been acquired.
     * @throws IllegalMonitorStateException if acquiring would place this
     *         synchronizer in an illegal state. This exception must be
     *         thrown in a consistent fashion for synchronization to work
     *         correctly.
     * @throws UnsupportedOperationException if exclusive mode is not supported
     */
    protected boolean tryAcquire(int arg) {
        throw new UnsupportedOperationException();
    }

    /**尝试去释放指定的资源，由具体使用者定义
     * Attempts to set the state to reflect a release in exclusive
     * mode.
     *
     * <p>This method is always invoked by the thread performing release.
     *
     * <p>The default implementation throws
     * {@link UnsupportedOperationException}.
     *
     * @param arg the release argument. This value is always the one
     *        passed to a release method, or the current state value upon
     *        entry to a condition wait.  The value is otherwise
     *        uninterpreted and can represent anything you like.
     * @return {@code true} if this object is now in a fully released
     *         state, so that any waiting threads may attempt to acquire;
     *         and {@code false} otherwise.
     * @throws IllegalMonitorStateException if releasing would place this
     *         synchronizer in an illegal state. This exception must be
     *         thrown in a consistent fashion for synchronization to work
     *         correctly.
     * @throws UnsupportedOperationException if exclusive mode is not supported
     */
    protected boolean tryRelease(int arg) {
        throw new UnsupportedOperationException();
    }

    /**尝试获取资源，由使用者自行实现
     * Attempts to acquire in shared mode. This method should query if
     * the state of the object permits it to be acquired in the shared
     * mode, and if so to acquire it.
     *
     * <p>This method is always invoked by the thread performing
     * acquire.  If this method reports failure, the acquire method
     * may queue the thread, if it is not already queued, until it is
     * signalled by a release from some other thread.
     *
     * <p>The default implementation throws {@link
     * UnsupportedOperationException}.
     *
     * @param arg the acquire argument. This value is always the one
     *        passed to an acquire method, or is the value saved on entry
     *        to a condition wait.  The value is otherwise uninterpreted
     *        and can represent anything you like.
     * @return a negative value on failure; zero if acquisition in shared
     *         mode succeeded but no subsequent shared-mode acquire can
     *         succeed; and a positive value if acquisition in shared
     *         mode succeeded and subsequent shared-mode acquires might
     *         also succeed, in which case a subsequent waiting thread
     *         must check availability. (Support for three different
     *         return values enables this method to be used in contexts
     *         where acquires only sometimes act exclusively.)  Upon
     *         success, this object has been acquired.
     * @throws IllegalMonitorStateException if acquiring would place this
     *         synchronizer in an illegal state. This exception must be
     *         thrown in a consistent fashion for synchronization to work
     *         correctly.
     * @throws UnsupportedOperationException if shared mode is not supported
     */
    protected int tryAcquireShared(int arg) {
        throw new UnsupportedOperationException();
    }

    /** 线程释放共享资源
     * Attempts to set the state to reflect a release in shared mode.
     *
     * <p>This method is always invoked by the thread performing release.
     *
     * <p>The default implementation throws
     * {@link UnsupportedOperationException}.
     *
     * @param arg the release argument. This value is always the one
     *        passed to a release method, or the current state value upon
     *        entry to a condition wait.  The value is otherwise
     *        uninterpreted and can represent anything you like.
     * @return {@code true} if this release of shared mode may permit a
     *         waiting acquire (shared or exclusive) to succeed; and
     *         {@code false} otherwise
     * @throws IllegalMonitorStateException if releasing would place this
     *         synchronizer in an illegal state. This exception must be
     *         thrown in a consistent fashion for synchronization to work
     *         correctly.
     * @throws UnsupportedOperationException if shared mode is not supported
     */
    protected boolean tryReleaseShared(int arg) {
        throw new UnsupportedOperationException();
    }

    /**
     * Returns {@code true} if synchronization is held exclusively with
     * respect to the current (calling) thread.  This method is invoked
     * upon each call to a non-waiting {@link ConditionObject} method.
     * (Waiting methods instead invoke {@link #release}.)
     *
     * <p>The default implementation throws {@link
     * UnsupportedOperationException}. This method is invoked
     * internally only within {@link ConditionObject} methods, so need
     * not be defined if conditions are not used.
     *
     * @return {@code true} if synchronization is held exclusively;
     *         {@code false} otherwise
     * @throws UnsupportedOperationException if conditions are not supported
     */
    protected boolean isHeldExclusively() {
        throw new UnsupportedOperationException();
    }

    /**独占模式下线程获取共享资源的顶层入口
     * Acquires in exclusive mode, ignoring interrupts.  Implemented
     * by invoking at least once {@link #tryAcquire},
     * returning on success.  Otherwise the thread is queued, possibly
     * repeatedly blocking and unblocking, invoking {@link
     * #tryAcquire} until success.  This method can be used
     * to implement method {@link Lock#lock}.
     *
     * @param arg the acquire argument.  This value is conveyed to
     *        {@link #tryAcquire} but is otherwise uninterpreted and
     *        can represent anything you like.
     */
    public final void acquire(int arg) {
        if (!tryAcquire(arg) && // 判断是否拿到锁
            acquireQueued(addWaiter(Node.EXCLUSIVE), arg))
            selfInterrupt();
    }

    /**
     * Acquires in exclusive mode, aborting if interrupted.
     * Implemented by first checking interrupt status, then invoking
     * at least once {@link #tryAcquire}, returning on
     * success.  Otherwise the thread is queued, possibly repeatedly
     * blocking and unblocking, invoking {@link #tryAcquire}
     * until success or the thread is interrupted.  This method can be
     * used to implement method {@link Lock#lockInterruptibly}.
     *
     * @param arg the acquire argument.  This value is conveyed to
     *        {@link #tryAcquire} but is otherwise uninterpreted and
     *        can represent anything you like.
     * @throws InterruptedException if the current thread is interrupted
     */
    public final void acquireInterruptibly(int arg)
            throws InterruptedException {
        if (Thread.interrupted())
            throw new InterruptedException();
        if (!tryAcquire(arg))
            doAcquireInterruptibly(arg);
    }

    /**
     * Attempts to acquire in exclusive mode, aborting if interrupted,
     * and failing if the given timeout elapses.  Implemented by first
     * checking interrupt status, then invoking at least once {@link
     * #tryAcquire}, returning on success.  Otherwise, the thread is
     * queued, possibly repeatedly blocking and unblocking, invoking
     * {@link #tryAcquire} until success or the thread is interrupted
     * or the timeout elapses.  This method can be used to implement
     * method {@link Lock#tryLock(long, TimeUnit)}.
     *
     * @param arg the acquire argument.  This value is conveyed to
     *        {@link #tryAcquire} but is otherwise uninterpreted and
     *        can represent anything you like.
     * @param nanosTimeout the maximum number of nanoseconds to wait
     * @return {@code true} if acquired; {@code false} if timed out
     * @throws InterruptedException if the current thread is interrupted
     */
    public final boolean tryAcquireNanos(int arg, long nanosTimeout)
            throws InterruptedException {
        if (Thread.interrupted())
            throw new InterruptedException();
        return tryAcquire(arg) ||
            doAcquireNanos(arg, nanosTimeout);
    }

    /**释放资源的顶层入口
     * Releases in exclusive mode.  Implemented by unblocking one or
     * more threads if {@link #tryRelease} returns true.
     * This method can be used to implement method {@link Lock#unlock}.
     *
     * @param arg the release argument.  This value is conveyed to
     *        {@link #tryRelease} but is otherwise uninterpreted and
     *        can represent anything you like.
     * @return the value returned from {@link #tryRelease}
     */
    public final boolean release(int arg) {
        if (tryRelease(arg)) {
            Node h = head; // 从头开始找
            if (h != null && h.waitStatus != 0)
                unparkSuccessor(h); // 唤醒下一个线程
            return true;
        }
        return false;
    }

    /** 线程获取共享资源的入口
     * Acquires in shared mode, ignoring interrupts.  Implemented by
     * first invoking at least once {@link #tryAcquireShared},
     * returning on success.  Otherwise the thread is queued, possibly
     * repeatedly blocking and unblocking, invoking {@link
     * #tryAcquireShared} until success.
     *
     * @param arg the acquire argument.  This value is conveyed to
     *        {@link #tryAcquireShared} but is otherwise uninterpreted
     *        and can represent anything you like.
     */
    public final void acquireShared(int arg) {
        if (tryAcquireShared(arg) < 0) // 判断量够不够
            doAcquireShared(arg); // 没拿到资源，需要等待
    }

    /**
     * Acquires in shared mode, aborting if interrupted.  Implemented
     * by first checking interrupt status, then invoking at least once
     * {@link #tryAcquireShared}, returning on success.  Otherwise the
     * thread is queued, possibly repeatedly blocking and unblocking,
     * invoking {@link #tryAcquireShared} until success or the thread
     * is interrupted.
     * @param arg the acquire argument.
     * This value is conveyed to {@link #tryAcquireShared} but is
     * otherwise uninterpreted and can represent anything
     * you like.
     * @throws InterruptedException if the current thread is interrupted
     */
    public final void acquireSharedInterruptibly(int arg)
            throws InterruptedException {
        if (Thread.interrupted())
            throw new InterruptedException();
        if (tryAcquireShared(arg) < 0)
            doAcquireSharedInterruptibly(arg);
    }

    /**
     * Attempts to acquire in shared mode, aborting if interrupted, and
     * failing if the given timeout elapses.  Implemented by first
     * checking interrupt status, then invoking at least once {@link
     * #tryAcquireShared}, returning on success.  Otherwise, the
     * thread is queued, possibly repeatedly blocking and unblocking,
     * invoking {@link #tryAcquireShared} until success or the thread
     * is interrupted or the timeout elapses.
     *
     * @param arg the acquire argument.  This value is conveyed to
     *        {@link #tryAcquireShared} but is otherwise uninterpreted
     *        and can represent anything you like.
     * @param nanosTimeout the maximum number of nanoseconds to wait
     * @return {@code true} if acquired; {@code false} if timed out
     * @throws InterruptedException if the current thread is interrupted
     */
    public final boolean tryAcquireSharedNanos(int arg, long nanosTimeout)
            throws InterruptedException {
        if (Thread.interrupted())
            throw new InterruptedException();
        return tryAcquireShared(arg) >= 0 ||
            doAcquireSharedNanos(arg, nanosTimeout);
    }

    /** 线程释放共享资源
     * Releases in shared mode.  Implemented by unblocking one or more
     * threads if {@link #tryReleaseShared} returns true.
     *
     * @param arg the release argument.  This value is conveyed to
     *        {@link #tryReleaseShared} but is otherwise uninterpreted
     *        and can represent anything you like.
     * @return the value returned from {@link #tryReleaseShared}
     */
    public final boolean releaseShared(int arg) {
        if (tryReleaseShared(arg)) {
            doReleaseShared();
            return true;
        }
        return false;
    }

    // Queue inspection methods

    /**
     * Queries whether any threads are waiting to acquire. Note that
     * because cancellations due to interrupts and timeouts may occur
     * at any time, a {@code true} return does not guarantee that any
     * other thread will ever acquire.
     *
     * <p>In this implementation, this operation returns in
     * constant time.
     *
     * @return {@code true} if there may be other threads waiting to acquire
     */
    public final boolean hasQueuedThreads() {
        return head != tail;
    }

    /**
     * Queries whether any threads have ever contended to acquire this
     * synchronizer; that is if an acquire method has ever blocked.
     *
     * <p>In this implementation, this operation returns in
     * constant time.
     *
     * @return {@code true} if there has ever been contention
     */
    public final boolean hasContended() {
        return head != null;
    }

    /**
     * Returns the first (longest-waiting) thread in the queue, or
     * {@code null} if no threads are currently queued.
     *
     * <p>In this implementation, this operation normally returns in
     * constant time, but may iterate upon contention if other threads are
     * concurrently modifying the queue.
     *
     * @return the first (longest-waiting) thread in the queue, or
     *         {@code null} if no threads are currently queued
     */
    public final Thread getFirstQueuedThread() {
        // handle only fast path, else relay
        return (head == tail) ? null : fullGetFirstQueuedThread();
    }

    /**
     * Version of getFirstQueuedThread called when fastpath fails
     */
    private Thread fullGetFirstQueuedThread() {
        /*
         * The first node is normally head.next. Try to get its
         * thread field, ensuring consistent reads: If thread
         * field is nulled out or s.prev is no longer head, then
         * some other thread(s) concurrently performed setHead in
         * between some of our reads. We try this twice before
         * resorting to traversal.
         */
        Node h, s;
        Thread st;
        if (((h = head) != null && (s = h.next) != null &&
             s.prev == head && (st = s.thread) != null) ||
            ((h = head) != null && (s = h.next) != null &&
             s.prev == head && (st = s.thread) != null))
            return st;

        /*
         * Head's next field might not have been set yet, or may have
         * been unset after setHead. So we must check to see if tail
         * is actually first node. If not, we continue on, safely
         * traversing from tail back to head to find first,
         * guaranteeing termination.
         */

        Node t = tail;
        Thread firstThread = null;
        while (t != null && t != head) {
            Thread tt = t.thread;
            if (tt != null)
                firstThread = tt;
            t = t.prev;
        }
        return firstThread;
    }

    /**
     * Returns true if the given thread is currently queued.
     *
     * <p>This implementation traverses the queue to determine
     * presence of the given thread.
     *
     * @param thread the thread
     * @return {@code true} if the given thread is on the queue
     * @throws NullPointerException if the thread is null
     */
    public final boolean isQueued(Thread thread) {
        if (thread == null)
            throw new NullPointerException();
        for (Node p = tail; p != null; p = p.prev)
            if (p.thread == thread)
                return true;
        return false;
    }

    /**
     * Returns {@code true} if the apparent first queued thread, if one
     * exists, is waiting in exclusive mode.  If this method returns
     * {@code true}, and the current thread is attempting to acquire in
     * shared mode (that is, this method is invoked from {@link
     * #tryAcquireShared}) then it is guaranteed that the current thread
     * is not the first queued thread.  Used only as a heuristic in
     * ReentrantReadWriteLock.
     */
    final boolean apparentlyFirstQueuedIsExclusive() {
        Node h, s;
        return (h = head) != null &&
            (s = h.next)  != null &&
            !s.isShared()         &&
            s.thread != null;
    }

    /**
     * Queries whether any threads have been waiting to acquire longer
     * than the current thread.
     *
     * <p>An invocation of this method is equivalent to (but may be
     * more efficient than):
     *  <pre> {@code
     * getFirstQueuedThread() != Thread.currentThread() &&
     * hasQueuedThreads()}</pre>
     *
     * <p>Note that because cancellations due to interrupts and
     * timeouts may occur at any time, a {@code true} return does not
     * guarantee that some other thread will acquire before the current
     * thread.  Likewise, it is possible for another thread to win a
     * race to enqueue after this method has returned {@code false},
     * due to the queue being empty.
     *
     * <p>This method is designed to be used by a fair synchronizer to
     * avoid <a href="AbstractQueuedSynchronizer#barging">barging</a>.
     * Such a synchronizer's {@link #tryAcquire} method should return
     * {@code false}, and its {@link #tryAcquireShared} method should
     * return a negative value, if this method returns {@code true}
     * (unless this is a reentrant acquire).  For example, the {@code
     * tryAcquire} method for a fair, reentrant, exclusive mode
     * synchronizer might look like this:
     *
     *  <pre> {@code
     * protected boolean tryAcquire(int arg) {
     *   if (isHeldExclusively()) {
     *     // A reentrant acquire; increment hold count
     *     return true;
     *   } else if (hasQueuedPredecessors()) {
     *     return false;
     *   } else {
     *     // try to acquire normally
     *   }
     * }}</pre>
     *
     * @return {@code true} if there is a queued thread preceding the
     *         current thread, and {@code false} if the current thread
     *         is at the head of the queue or the queue is empty
     * @since 1.7
     */
    public final boolean hasQueuedPredecessors() {
        // The correctness of this depends on head being initialized
        // before tail and on head.next being accurate if the current
        // thread is first in queue.
        Node t = tail; // Read fields in reverse initialization order
        Node h = head;
        Node s;
        return h != t &&
            ((s = h.next) == null || s.thread != Thread.currentThread());
    }


    // Instrumentation and monitoring methods

    /**
     * Returns an estimate of the number of threads waiting to
     * acquire.  The value is only an estimate because the number of
     * threads may change dynamically while this method traverses
     * internal data structures.  This method is designed for use in
     * monitoring system state, not for synchronization
     * control.
     *
     * @return the estimated number of threads waiting to acquire
     */
    public final int getQueueLength() {
        int n = 0;
        for (Node p = tail; p != null; p = p.prev) {
            if (p.thread != null)
                ++n;
        }
        return n;
    }

    /**
     * Returns a collection containing threads that may be waiting to
     * acquire.  Because the actual set of threads may change
     * dynamically while constructing this result, the returned
     * collection is only a best-effort estimate.  The elements of the
     * returned collection are in no particular order.  This method is
     * designed to facilitate construction of subclasses that provide
     * more extensive monitoring facilities.
     *
     * @return the collection of threads
     */
    public final Collection<Thread> getQueuedThreads() {
        ArrayList<Thread> list = new ArrayList<Thread>();
        for (Node p = tail; p != null; p = p.prev) {
            Thread t = p.thread;
            if (t != null)
                list.add(t);
        }
        return list;
    }

    /**
     * Returns a collection containing threads that may be waiting to
     * acquire in exclusive mode. This has the same properties
     * as {@link #getQueuedThreads} except that it only returns
     * those threads waiting due to an exclusive acquire.
     *
     * @return the collection of threads
     */
    public final Collection<Thread> getExclusiveQueuedThreads() {
        ArrayList<Thread> list = new ArrayList<Thread>();
        for (Node p = tail; p != null; p = p.prev) {
            if (!p.isShared()) {
                Thread t = p.thread;
                if (t != null)
                    list.add(t);
            }
        }
        return list;
    }

    /**
     * Returns a collection containing threads that may be waiting to
     * acquire in shared mode. This has the same properties
     * as {@link #getQueuedThreads} except that it only returns
     * those threads waiting due to a shared acquire.
     *
     * @return the collection of threads
     */
    public final Collection<Thread> getSharedQueuedThreads() {
        ArrayList<Thread> list = new ArrayList<Thread>();
        for (Node p = tail; p != null; p = p.prev) {
            if (p.isShared()) {
                Thread t = p.thread;
                if (t != null)
                    list.add(t);
            }
        }
        return list;
    }

    /**
     * Returns a string identifying this synchronizer, as well as its state.
     * The state, in brackets, includes the String {@code "State ="}
     * followed by the current value of {@link #getState}, and either
     * {@code "nonempty"} or {@code "empty"} depending on whether the
     * queue is empty.
     *
     * @return a string identifying this synchronizer, as well as its state
     */
    public String toString() {
        int s = getState();
        String q  = hasQueuedThreads() ? "non" : "";
        return super.toString() +
            "[State = " + s + ", " + q + "empty queue]";
    }


    // Internal support methods for Conditions

    /**
     * Returns true if a node, always one that was initially placed on
     * a condition queue, is now waiting to reacquire on sync queue.
     * @param node the node
     * @return true if is reacquiring
     */
    final boolean isOnSyncQueue(Node node) {
        if (node.waitStatus == Node.CONDITION || node.prev == null)
            return false;
        if (node.next != null) // If has successor, it must be on queue
            return true;
        /*
         * node.prev can be non-null, but not yet on queue because
         * the CAS to place it on queue can fail. So we have to
         * traverse from tail to make sure it actually made it.  It
         * will always be near the tail in calls to this method, and
         * unless the CAS failed (which is unlikely), it will be
         * there, so we hardly ever traverse much.
         */
        return findNodeFromTail(node);
    }

    /**
     * Returns true if node is on sync queue by searching backwards from tail.
     * Called only when needed by isOnSyncQueue.
     * @return true if present
     */
    private boolean findNodeFromTail(Node node) {
        Node t = tail;
        for (;;) {
            if (t == node)
                return true;
            if (t == null)
                return false;
            t = t.prev;
        }
    }

    /**
     * Transfers a node from a condition queue onto sync queue.
     * Returns true if successful.
     * @param node the node
     * @return true if successfully transferred (else the node was
     * cancelled before signal)
     */
    final boolean transferForSignal(Node node) {
        /*
         * If cannot change waitStatus, the node has been cancelled.
         */
        if (!compareAndSetWaitStatus(node, Node.CONDITION, 0))
            return false;

        /*
         * Splice onto queue and try to set waitStatus of predecessor to
         * indicate that thread is (probably) waiting. If cancelled or
         * attempt to set waitStatus fails, wake up to resync (in which
         * case the waitStatus can be transiently and harmlessly wrong).
         */
        Node p = enq(node);
        int ws = p.waitStatus;
        if (ws > 0 || !compareAndSetWaitStatus(p, ws, Node.SIGNAL))
            LockSupport.unpark(node.thread);
        return true;
    }

    /**
     * Transfers node, if necessary, to sync queue after a cancelled wait.
     * Returns true if thread was cancelled before being signalled.
     *
     * @param node the node
     * @return true if cancelled before the node was signalled
     */
    final boolean transferAfterCancelledWait(Node node) {
        if (compareAndSetWaitStatus(node, Node.CONDITION, 0)) {
            enq(node);
            return true;
        }
        /*
         * If we lost out to a signal(), then we can't proceed
         * until it finishes its enq().  Cancelling during an
         * incomplete transfer is both rare and transient, so just
         * spin.
         */
        while (!isOnSyncQueue(node))
            Thread.yield();
        return false;
    }

    /**
     * Invokes release with current state value; returns saved state.
     * Cancels node and throws exception on failure.
     * @param node the condition node for this wait
     * @return previous sync state
     */
    final int fullyRelease(Node node) {
        boolean failed = true;
        try {
            int savedState = getState();
            if (release(savedState)) {
                failed = false;
                return savedState;
            } else {
                throw new IllegalMonitorStateException();
            }
        } finally {
            if (failed)
                node.waitStatus = Node.CANCELLED;
        }
    }

    // Instrumentation methods for conditions

    /**
     * Queries whether the given ConditionObject
     * uses this synchronizer as its lock.
     *
     * @param condition the condition
     * @return {@code true} if owned
     * @throws NullPointerException if the condition is null
     */
    public final boolean owns(ConditionObject condition) {
        return condition.isOwnedBy(this);
    }

    /**
     * Queries whether any threads are waiting on the given condition
     * associated with this synchronizer. Note that because timeouts
     * and interrupts may occur at any time, a {@code true} return
     * does not guarantee that a future {@code signal} will awaken
     * any threads.  This method is designed primarily for use in
     * monitoring of the system state.
     *
     * @param condition the condition
     * @return {@code true} if there are any waiting threads
     * @throws IllegalMonitorStateException if exclusive synchronization
     *         is not held
     * @throws IllegalArgumentException if the given condition is
     *         not associated with this synchronizer
     * @throws NullPointerException if the condition is null
     */
    public final boolean hasWaiters(ConditionObject condition) {
        if (!owns(condition))
            throw new IllegalArgumentException("Not owner");
        return condition.hasWaiters();
    }

    /**
     * Returns an estimate of the number of threads waiting on the
     * given condition associated with this synchronizer. Note that
     * because timeouts and interrupts may occur at any time, the
     * estimate serves only as an upper bound on the actual number of
     * waiters.  This method is designed for use in monitoring of the
     * system state, not for synchronization control.
     *
     * @param condition the condition
     * @return the estimated number of waiting threads
     * @throws IllegalMonitorStateException if exclusive synchronization
     *         is not held
     * @throws IllegalArgumentException if the given condition is
     *         not associated with this synchronizer
     * @throws NullPointerException if the condition is null
     */
    public final int getWaitQueueLength(ConditionObject condition) {
        if (!owns(condition))
            throw new IllegalArgumentException("Not owner");
        return condition.getWaitQueueLength();
    }

    /**
     * Returns a collection containing those threads that may be
     * waiting on the given condition associated with this
     * synchronizer.  Because the actual set of threads may change
     * dynamically while constructing this result, the returned
     * collection is only a best-effort estimate. The elements of the
     * returned collection are in no particular order.
     *
     * @param condition the condition
     * @return the collection of threads
     * @throws IllegalMonitorStateException if exclusive synchronization
     *         is not held
     * @throws IllegalArgumentException if the given condition is
     *         not associated with this synchronizer
     * @throws NullPointerException if the condition is null
     */
    public final Collection<Thread> getWaitingThreads(ConditionObject condition) {
        if (!owns(condition))
            throw new IllegalArgumentException("Not owner");
        return condition.getWaitingThreads();
    }

    /**
     * Condition implementation for a {@link
     * AbstractQueuedSynchronizer} serving as the basis of a {@link
     * Lock} implementation.
     *
     * <p>Method documentation for this class describes mechanics,
     * not behavioral specifications from the point of view of Lock
     * and Condition users. Exported versions of this class will in
     * general need to be accompanied by documentation describing
     * condition semantics that rely on those of the associated
     * {@code AbstractQueuedSynchronizer}.
     *
     * <p>This class is Serializable, but all fields are transient,
     * so deserialized conditions have no waiters.
     */
    public class ConditionObject implements Condition, java.io.Serializable {
        private static final long serialVersionUID = 1173984872572414699L;
        /** First node of condition queue. */
        private transient Node firstWaiter;
        /** Last node of condition queue. */
        private transient Node lastWaiter;

        /**
         * Creates a new {@code ConditionObject} instance.
         */
        public ConditionObject() { }

        // Internal methods

        /**
         * Adds a new waiter to wait queue.
         * @return its new wait node
         */
        private Node addConditionWaiter() {
            Node t = lastWaiter;
            // If lastWaiter is cancelled, clean out.
            if (t != null && t.waitStatus != Node.CONDITION) {
                unlinkCancelledWaiters();
                t = lastWaiter;
            }
            Node node = new Node(Thread.currentThread(), Node.CONDITION);
            if (t == null)
                firstWaiter = node;
            else
                t.nextWaiter = node;
            lastWaiter = node;
            return node;
        }

        /**
         * Removes and transfers nodes until hit non-cancelled one or
         * null. Split out from signal in part to encourage compilers
         * to inline the case of no waiters.
         * @param first (non-null) the first node on condition queue
         */
        private void doSignal(Node first) {
            do {
                if ( (firstWaiter = first.nextWaiter) == null)
                    lastWaiter = null;
                first.nextWaiter = null;
            } while (!transferForSignal(first) &&
                     (first = firstWaiter) != null);
        }

        /**
         * Removes and transfers all nodes.
         * @param first (non-null) the first node on condition queue
         */
        private void doSignalAll(Node first) {
            lastWaiter = firstWaiter = null;
            do {
                Node next = first.nextWaiter;
                first.nextWaiter = null;
                transferForSignal(first);
                first = next;
            } while (first != null);
        }

        /**
         * Unlinks cancelled waiter nodes from condition queue.
         * Called only while holding lock. This is called when
         * cancellation occurred during condition wait, and upon
         * insertion of a new waiter when lastWaiter is seen to have
         * been cancelled. This method is needed to avoid garbage
         * retention in the absence of signals. So even though it may
         * require a full traversal, it comes into play only when
         * timeouts or cancellations occur in the absence of
         * signals. It traverses all nodes rather than stopping at a
         * particular target to unlink all pointers to garbage nodes
         * without requiring many re-traversals during cancellation
         * storms.
         */
        private void unlinkCancelledWaiters() {
            Node t = firstWaiter;
            Node trail = null;
            while (t != null) {
                Node next = t.nextWaiter;
                if (t.waitStatus != Node.CONDITION) {
                    t.nextWaiter = null;
                    if (trail == null)
                        firstWaiter = next;
                    else
                        trail.nextWaiter = next;
                    if (next == null)
                        lastWaiter = trail;
                }
                else
                    trail = t;
                t = next;
            }
        }

        // public methods

        /**
         * Moves the longest-waiting thread, if one exists, from the
         * wait queue for this condition to the wait queue for the
         * owning lock.
         *
         * @throws IllegalMonitorStateException if {@link #isHeldExclusively}
         *         returns {@code false}
         */
        public final void signal() {
            if (!isHeldExclusively())
                throw new IllegalMonitorStateException();
            Node first = firstWaiter;
            if (first != null)
                doSignal(first);
        }

        /**
         * Moves all threads from the wait queue for this condition to
         * the wait queue for the owning lock.
         *
         * @throws IllegalMonitorStateException if {@link #isHeldExclusively}
         *         returns {@code false}
         */
        public final void signalAll() {
            if (!isHeldExclusively())
                throw new IllegalMonitorStateException();
            Node first = firstWaiter;
            if (first != null)
                doSignalAll(first);
        }

        /**
         * Implements uninterruptible condition wait.
         * <ol>
         * <li> Save lock state returned by {@link #getState}.
         * <li> Invoke {@link #release} with saved state as argument,
         *      throwing IllegalMonitorStateException if it fails.
         * <li> Block until signalled.
         * <li> Reacquire by invoking specialized version of
         *      {@link #acquire} with saved state as argument.
         * </ol>
         */
        public final void awaitUninterruptibly() {
            Node node = addConditionWaiter();
            int savedState = fullyRelease(node);
            boolean interrupted = false;
            while (!isOnSyncQueue(node)) {
                LockSupport.park(this);
                if (Thread.interrupted())
                    interrupted = true;
            }
            if (acquireQueued(node, savedState) || interrupted)
                selfInterrupt();
        }

        /*
         * For interruptible waits, we need to track whether to throw
         * InterruptedException, if interrupted while blocked on
         * condition, versus reinterrupt current thread, if
         * interrupted while blocked waiting to re-acquire.
         */

        /** Mode meaning to reinterrupt on exit from wait */
        private static final int REINTERRUPT =  1;
        /** Mode meaning to throw InterruptedException on exit from wait */
        private static final int THROW_IE    = -1;

        /**
         * Checks for interrupt, returning THROW_IE if interrupted
         * before signalled, REINTERRUPT if after signalled, or
         * 0 if not interrupted.
         */
        private int checkInterruptWhileWaiting(Node node) {
            return Thread.interrupted() ?
                (transferAfterCancelledWait(node) ? THROW_IE : REINTERRUPT) :
                0;
        }

        /**
         * Throws InterruptedException, reinterrupts current thread, or
         * does nothing, depending on mode.
         */
        private void reportInterruptAfterWait(int interruptMode)
            throws InterruptedException {
            if (interruptMode == THROW_IE)
                throw new InterruptedException();
            else if (interruptMode == REINTERRUPT)
                selfInterrupt();
        }

        /**
         * Implements interruptible condition wait.
         * <ol>
         * <li> If current thread is interrupted, throw InterruptedException.
         * <li> Save lock state returned by {@link #getState}.
         * <li> Invoke {@link #release} with saved state as argument,
         *      throwing IllegalMonitorStateException if it fails.
         * <li> Block until signalled or interrupted.
         * <li> Reacquire by invoking specialized version of
         *      {@link #acquire} with saved state as argument.
         * <li> If interrupted while blocked in step 4, throw InterruptedException.
         * </ol>
         */
        public final void await() throws InterruptedException {
            if (Thread.interrupted())
                throw new InterruptedException();
            Node node = addConditionWaiter();
            int savedState = fullyRelease(node);
            int interruptMode = 0;
            while (!isOnSyncQueue(node)) {
                LockSupport.park(this);
                if ((interruptMode = checkInterruptWhileWaiting(node)) != 0)
                    break;
            }
            if (acquireQueued(node, savedState) && interruptMode != THROW_IE)
                interruptMode = REINTERRUPT;
            if (node.nextWaiter != null) // clean up if cancelled
                unlinkCancelledWaiters();
            if (interruptMode != 0)
                reportInterruptAfterWait(interruptMode);
        }

        /**
         * Implements timed condition wait.
         * <ol>
         * <li> If current thread is interrupted, throw InterruptedException.
         * <li> Save lock state returned by {@link #getState}.
         * <li> Invoke {@link #release} with saved state as argument,
         *      throwing IllegalMonitorStateException if it fails.
         * <li> Block until signalled, interrupted, or timed out.
         * <li> Reacquire by invoking specialized version of
         *      {@link #acquire} with saved state as argument.
         * <li> If interrupted while blocked in step 4, throw InterruptedException.
         * </ol>
         */
        public final long awaitNanos(long nanosTimeout)
                throws InterruptedException {
            if (Thread.interrupted())
                throw new InterruptedException();
            Node node = addConditionWaiter();
            int savedState = fullyRelease(node);
            final long deadline = System.nanoTime() + nanosTimeout;
            int interruptMode = 0;
            while (!isOnSyncQueue(node)) {
                if (nanosTimeout <= 0L) {
                    transferAfterCancelledWait(node);
                    break;
                }
                if (nanosTimeout >= spinForTimeoutThreshold)
                    LockSupport.parkNanos(this, nanosTimeout);
                if ((interruptMode = checkInterruptWhileWaiting(node)) != 0)
                    break;
                nanosTimeout = deadline - System.nanoTime();
            }
            if (acquireQueued(node, savedState) && interruptMode != THROW_IE)
                interruptMode = REINTERRUPT;
            if (node.nextWaiter != null)
                unlinkCancelledWaiters();
            if (interruptMode != 0)
                reportInterruptAfterWait(interruptMode);
            return deadline - System.nanoTime();
        }

        /**
         * Implements absolute timed condition wait.
         * <ol>
         * <li> If current thread is interrupted, throw InterruptedException.
         * <li> Save lock state returned by {@link #getState}.
         * <li> Invoke {@link #release} with saved state as argument,
         *      throwing IllegalMonitorStateException if it fails.
         * <li> Block until signalled, interrupted, or timed out.
         * <li> Reacquire by invoking specialized version of
         *      {@link #acquire} with saved state as argument.
         * <li> If interrupted while blocked in step 4, throw InterruptedException.
         * <li> If timed out while blocked in step 4, return false, else true.
         * </ol>
         */
        public final boolean awaitUntil(Date deadline)
                throws InterruptedException {
            long abstime = deadline.getTime();
            if (Thread.interrupted())
                throw new InterruptedException();
            Node node = addConditionWaiter();
            int savedState = fullyRelease(node);
            boolean timedout = false;
            int interruptMode = 0;
            while (!isOnSyncQueue(node)) {
                if (System.currentTimeMillis() > abstime) {
                    timedout = transferAfterCancelledWait(node);
                    break;
                }
                LockSupport.parkUntil(this, abstime);
                if ((interruptMode = checkInterruptWhileWaiting(node)) != 0)
                    break;
            }
            if (acquireQueued(node, savedState) && interruptMode != THROW_IE)
                interruptMode = REINTERRUPT;
            if (node.nextWaiter != null)
                unlinkCancelledWaiters();
            if (interruptMode != 0)
                reportInterruptAfterWait(interruptMode);
            return !timedout;
        }

        /**
         * Implements timed condition wait.
         * <ol>
         * <li> If current thread is interrupted, throw InterruptedException.
         * <li> Save lock state returned by {@link #getState}.
         * <li> Invoke {@link #release} with saved state as argument,
         *      throwing IllegalMonitorStateException if it fails.
         * <li> Block until signalled, interrupted, or timed out.
         * <li> Reacquire by invoking specialized version of
         *      {@link #acquire} with saved state as argument.
         * <li> If interrupted while blocked in step 4, throw InterruptedException.
         * <li> If timed out while blocked in step 4, return false, else true.
         * </ol>
         */
        public final boolean await(long time, TimeUnit unit)
                throws InterruptedException {
            long nanosTimeout = unit.toNanos(time);
            if (Thread.interrupted())
                throw new InterruptedException();
            Node node = addConditionWaiter();
            int savedState = fullyRelease(node);
            final long deadline = System.nanoTime() + nanosTimeout;
            boolean timedout = false;
            int interruptMode = 0;
            while (!isOnSyncQueue(node)) {
                if (nanosTimeout <= 0L) {
                    timedout = transferAfterCancelledWait(node);
                    break;
                }
                if (nanosTimeout >= spinForTimeoutThreshold)
                    LockSupport.parkNanos(this, nanosTimeout);
                if ((interruptMode = checkInterruptWhileWaiting(node)) != 0)
                    break;
                nanosTimeout = deadline - System.nanoTime();
            }
            if (acquireQueued(node, savedState) && interruptMode != THROW_IE)
                interruptMode = REINTERRUPT;
            if (node.nextWaiter != null)
                unlinkCancelledWaiters();
            if (interruptMode != 0)
                reportInterruptAfterWait(interruptMode);
            return !timedout;
        }

        //  support for instrumentation

        /**
         * Returns true if this condition was created by the given
         * synchronization object.
         *
         * @return {@code true} if owned
         */
        final boolean isOwnedBy(AbstractQueuedSynchronizer sync) {
            return sync == AbstractQueuedSynchronizer.this;
        }

        /**
         * Queries whether any threads are waiting on this condition.
         * Implements {@link AbstractQueuedSynchronizer#hasWaiters(ConditionObject)}.
         *
         * @return {@code true} if there are any waiting threads
         * @throws IllegalMonitorStateException if {@link #isHeldExclusively}
         *         returns {@code false}
         */
        protected final boolean hasWaiters() {
            if (!isHeldExclusively())
                throw new IllegalMonitorStateException();
            for (Node w = firstWaiter; w != null; w = w.nextWaiter) {
                if (w.waitStatus == Node.CONDITION)
                    return true;
            }
            return false;
        }

        /**
         * Returns an estimate of the number of threads waiting on
         * this condition.
         * Implements {@link AbstractQueuedSynchronizer#getWaitQueueLength(ConditionObject)}.
         *
         * @return the estimated number of waiting threads
         * @throws IllegalMonitorStateException if {@link #isHeldExclusively}
         *         returns {@code false}
         */
        protected final int getWaitQueueLength() {
            if (!isHeldExclusively())
                throw new IllegalMonitorStateException();
            int n = 0;
            for (Node w = firstWaiter; w != null; w = w.nextWaiter) {
                if (w.waitStatus == Node.CONDITION)
                    ++n;
            }
            return n;
        }

        /**
         * Returns a collection containing those threads that may be
         * waiting on this Condition.
         * Implements {@link AbstractQueuedSynchronizer#getWaitingThreads(ConditionObject)}.
         *
         * @return the collection of threads
         * @throws IllegalMonitorStateException if {@link #isHeldExclusively}
         *         returns {@code false}
         */
        protected final Collection<Thread> getWaitingThreads() {
            if (!isHeldExclusively())
                throw new IllegalMonitorStateException();
            ArrayList<Thread> list = new ArrayList<Thread>();
            for (Node w = firstWaiter; w != null; w = w.nextWaiter) {
                if (w.waitStatus == Node.CONDITION) {
                    Thread t = w.thread;
                    if (t != null)
                        list.add(t);
                }
            }
            return list;
        }
    }

    /**
     * Setup to support compareAndSet. We need to natively implement
     * this here: For the sake of permitting future enhancements, we
     * cannot explicitly subclass AtomicInteger, which would be
     * efficient and useful otherwise. So, as the lesser of evils, we
     * natively implement using hotspot intrinsics API. And while we
     * are at it, we do the same for other CASable fields (which could
     * otherwise be done with atomic field updaters).
     */
    private static final Unsafe unsafe = Unsafe.getUnsafe();
    private static final long stateOffset;
    private static final long headOffset;
    private static final long tailOffset;
    private static final long waitStatusOffset;
    private static final long nextOffset;

    static {
        try {
            stateOffset = unsafe.objectFieldOffset
                (AbstractQueuedSynchronizer.class.getDeclaredField("state"));
            headOffset = unsafe.objectFieldOffset
                (AbstractQueuedSynchronizer.class.getDeclaredField("head"));
            tailOffset = unsafe.objectFieldOffset
                (AbstractQueuedSynchronizer.class.getDeclaredField("tail"));
            waitStatusOffset = unsafe.objectFieldOffset
                (Node.class.getDeclaredField("waitStatus"));
            nextOffset = unsafe.objectFieldOffset
                (Node.class.getDeclaredField("next"));

        } catch (Exception ex) { throw new Error(ex); }
    }

    /**
     * CAS head field. Used only by enq.
     */
    private final boolean compareAndSetHead(Node update) {
        return unsafe.compareAndSwapObject(this, headOffset, null, update);
    }

    /**
     * CAS tail field. Used only by enq.
     */
    private final boolean compareAndSetTail(Node expect, Node update) {
        return unsafe.compareAndSwapObject(this, tailOffset, expect, update);
    }

    /**
     * CAS waitStatus field of a node.
     */
    private static final boolean compareAndSetWaitStatus(Node node,
                                                         int expect,
                                                         int update) {
        return unsafe.compareAndSwapInt(node, waitStatusOffset,
                                        expect, update);
    }

    /**
     * CAS next field of a node.
     */
    private static final boolean compareAndSetNext(Node node,
                                                   Node expect,
                                                   Node update) {
        return unsafe.compareAndSwapObject(node, nextOffset, expect, update);
    }
}
```

```java
// 自己实现(独享锁) - 常用的
public class TonyLock implements Lock {
    // 抽象工具类AQS
    NeteaseAqs aqs = new NeteaseAqs(){
        @Override
        public boolean tryAcquire() {
            return owner.compareAndSet(null, Thread.currentThread());
        }

        @Override
        public boolean tryRelease() {
            // 可重入的情况下，要判断资源的占用情况（state字段保存了资源的占用次数）
            return owner.compareAndSet(Thread.currentThread(), null);
        }
    };

    @Override
    public boolean tryLock() {
        return aqs.tryAcquire();
    }

    @Override
    public void lock() {
        aqs.acquire();
    }

    @Override
    public void unlock() {
        aqs.release();
    }

    @Override
    public void lockInterruptibly() throws InterruptedException {

    }

    @Override
    public boolean tryLock(long time, TimeUnit unit) throws InterruptedException {
        return false;
    }

    @Override
    public Condition newCondition() {
        return null;
    }
}
```
![](./assets/NeteaseCloud/HighPerformanceTopics/171.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/172.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/173.jpg)
```java
// 信号量机制
public class SemaphoreDemo {
    public static void main(String[] args) {
        SemaphoreDemo semaphoreTest = new SemaphoreDemo();
        int N = 9;            // 客人数量
        NeteaseSemaphore semaphore = new NeteaseSemaphore(5); // 手牌数量，限制请求数量
        for (int i = 0; i < N; i++) {
            String vipNo = "vip-00" + i;
            new Thread(() -> {
                try {
                    semaphore.acquire(); // 获取令牌

                    semaphoreTest.service(vipNo);

                    semaphore.release(); // 释放令牌
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }).start();
        }
    }

    // 限流 控制5个线程 同时访问
    public void service(String vipNo) throws InterruptedException {
        System.out.println("楼上出来迎接贵宾一位，贵宾编号" + vipNo + "，...");
        Thread.sleep(new Random().nextInt(3000));
        System.out.println("欢送贵宾出门，贵宾编号" + vipNo);
    }
}
```
Semaphore源码：
```java
// Semaphore 源码解析版本
public class SemaphoreSource {
    private final SemaphoreSource.Sync sync;
    // 还是AQS的机制
    abstract static class Sync extends AbstractQueuedSynchronizer {
        private static final long serialVersionUID = 1192457210091910933L;

        Sync(int permits) {
            setState(permits);
        }

        final int getPermits() {
            return getState();
        }

        final int nonfairTryAcquireShared(int acquires) {
            for (; ; ) {
                int available = getState();
                int remaining = available - acquires;
                if (remaining < 0 ||
                        compareAndSetState(available, remaining))
                    return remaining;
            }
        }

        protected final boolean tryReleaseShared(int releases) {
            for (; ; ) {
                int current = getState();
                int next = current + releases;
                if (next < current) // overflow
                    throw new Error("Maximum permit count exceeded");
                if (compareAndSetState(current, next))
                    return true;
            }
        }

        final void reducePermits(int reductions) {
            for (; ; ) {
                int current = getState();
                int next = current - reductions;
                if (next > current) // underflow
                    throw new Error("Permit count underflow");
                if (compareAndSetState(current, next))
                    return;
            }
        }

        final int drainPermits() {
            for (; ; ) {
                int current = getState();
                if (current == 0 || compareAndSetState(current, 0))
                    return current;
            }
        }
    }

    static final class NonfairSync extends SemaphoreSource.Sync {
        private static final long serialVersionUID = -2694183684443567898L;

        NonfairSync(int permits) {
            super(permits);
        }

        protected int tryAcquireShared(int acquires) {
            return nonfairTryAcquireShared(acquires);
        }
    }

    static final class FairSync extends SemaphoreSource.Sync {
        private static final long serialVersionUID = 2014338818796000944L;

        FairSync(int permits) {
            super(permits);
        }

        protected int tryAcquireShared(int acquires) {
            for (; ; ) {
                if (hasQueuedPredecessors())
                    return -1;
                int available = getState();
                int remaining = available - acquires;
                if (remaining < 0 ||
                        compareAndSetState(available, remaining))
                    return remaining;
            }
        }
    }

    public SemaphoreSource(int permits) {
        sync = new SemaphoreSource.NonfairSync(permits);
    }

    public SemaphoreSource(int permits, boolean fair) {
        sync = fair ? new SemaphoreSource.FairSync(permits) : new SemaphoreSource.NonfairSync(permits);
    }

    public void acquire() throws InterruptedException {
        sync.acquireSharedInterruptibly(1);
    }

    public void acquireUninterruptibly() {
        sync.acquireShared(1);
    }

    public boolean tryAcquire() {
        return sync.nonfairTryAcquireShared(1) >= 0;
    }

    public boolean tryAcquire(long timeout, TimeUnit unit)
            throws InterruptedException {
        return sync.tryAcquireSharedNanos(1, unit.toNanos(timeout));
    }

    public void release() {
        sync.releaseShared(1);
    }

    public void acquire(int permits) throws InterruptedException {
        if (permits < 0) throw new IllegalArgumentException();
        sync.acquireSharedInterruptibly(permits);
    }

    public void acquireUninterruptibly(int permits) {
        if (permits < 0) throw new IllegalArgumentException();
        sync.acquireShared(permits);
    }

    public boolean tryAcquire(int permits) {
        if (permits < 0) throw new IllegalArgumentException();
        return sync.nonfairTryAcquireShared(permits) >= 0;
    }

    public boolean tryAcquire(int permits, long timeout, TimeUnit unit)
            throws InterruptedException {
        if (permits < 0) throw new IllegalArgumentException();
        return sync.tryAcquireSharedNanos(permits, unit.toNanos(timeout));
    }

    public void release(int permits) {
        if (permits < 0) throw new IllegalArgumentException();
        sync.releaseShared(permits);
    }

    public int availablePermits() {
        return sync.getPermits();
    }

    public int drainPermits() {
        return sync.drainPermits();
    }

    protected void reducePermits(int reduction) {
        if (reduction < 0) throw new IllegalArgumentException();
        sync.reducePermits(reduction);
    }

    public boolean isFair() {
        return sync instanceof SemaphoreSource.FairSync;
    }

    public final boolean hasQueuedThreads() {
        return sync.hasQueuedThreads();
    }

    public final int getQueueLength() {
        return sync.getQueueLength();
    }

    protected Collection<Thread> getQueuedThreads() {
        return sync.getQueuedThreads();
    }

    public String toString() {
        return super.toString() + "[Permits = " + sync.getPermits() + "]";
    }
}
```
```java
// 自定义的信号量实现
public class NeteaseSemaphore {
    NeteaseAqs aqs = new NeteaseAqs() {
        @Override
        public int tryAcquireShared() { // 信号量获取， 数量 - 1
            for(;;) {
                int count =  getState().get();
                int n = count - 1;
                if(count <= 0 || n < 0) {
                    return -1;
                }
                if(getState().compareAndSet(count, n)) {
                    return 1;
                }
            }
        }

        @Override
        public boolean tryReleaseShared() { // state + 1
            return getState().incrementAndGet() >= 0;
        }
    };

    /** 许可数量 */
    public NeteaseSemaphore(int count) {
        aqs.getState().set(count); // 设置资源的状态
    }

    public void acquire() {
        aqs.acquireShared();
    } // 获取令牌

    public void release() {
        aqs.releaseShared();
    } // 释放令牌
}
```
![](./assets/NeteaseCloud/HighPerformanceTopics/174.jpg)
```java
// CountDownLatch 自己实现
public class CDLdemo {
    AQSdemo aqSdemo = new AQSdemo() {
        @Override
        public int tryAcquireShared() { // 如果非等于0，代表当前还有线程没准备就绪，则认为需要等待
            return this.getState().get() == 0 ? 1 : -1;
        }

        @Override
        public boolean tryReleaseShared() { // 如果非等于0，代表当前还有线程没准备就绪，则不会通知继续执行
            return this.getState().decrementAndGet() == 0;
        }
    };

    public CDLdemo(int count) {
        aqSdemo.setState(new AtomicInteger(count));
    }

    public void await() {
        aqSdemo.acquireShared();
    }

    public void countDown() {
        aqSdemo.releaseShared();
    }

    public static void main(String[] args) throws InterruptedException {
        // 一个请求，后台需要调用多个接口 查询数据
        CountDownLatch cdLdemo = new CountDownLatch(10); // 创建，计数数值
        for (int i = 0; i < 10; i++) { // 启动九个线程，最后一个两秒后启动
            int finalI = i;
            new Thread(() -> {
                try {
                    Thread.sleep(2000L);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                System.out.println("我是" + Thread.currentThread() + ".我执行接口-" + finalI +"调用了");
                cdLdemo.countDown(); // 参与计数
                // 不影响后续操作
            }).start();
        }

        cdLdemo.await(); // 等待计数器为0
        System.out.println("全部执行完毕.我来召唤神龙");

    }
}
```
CountDownLatch源码：
```java
// CountDownLatch 源码解析版
public class CountDownLatchSource {
    private static final class Sync extends AbstractQueuedSynchronizer {
        private static final long serialVersionUID = 4982264981922014374L;

        Sync(int count) {
            setState(count);
        }

        int getCount() {
            return getState();
        }

        protected int tryAcquireShared(int acquires) {
            return (getState() == 0) ? 1 : -1;
        }

        protected boolean tryReleaseShared(int releases) {
            // Decrement count; signal when transition to zero
            for (;;) {
                int c = getState();
                if (c == 0)
                    return false;
                int nextc = c-1;
                if (compareAndSetState(c, nextc))
                    return nextc == 0;
            }
        }
    }

    private final CountDownLatchSource.Sync sync;

    public CountDownLatchSource(int count) {
        if (count < 0) throw new IllegalArgumentException("count < 0");
        this.sync = new CountDownLatchSource.Sync(count);
    }

    public void await() throws InterruptedException {
        sync.acquireSharedInterruptibly(1);
    }

    public boolean await(long timeout, TimeUnit unit)
            throws InterruptedException {
        return sync.tryAcquireSharedNanos(1, unit.toNanos(timeout));
    }

    public void countDown() {
        sync.releaseShared(1);
    }

    public long getCount() {
        return sync.getCount();
    }

//    public String toString();
}
```
![](./assets/NeteaseCloud/HighPerformanceTopics/175.jpg)
```java
// 循环屏障(栅栏)，示例：数据库批量插入
// 游戏大厅... 5人组队打副本
public class CyclicBarrierTest {
    public static void main(String[] args) throws InterruptedException {
        LinkedBlockingQueue<String> sqls = new LinkedBlockingQueue<>();
        // 任务1+2+3...1000  拆分为100个任务（1+..10,  11+20） -> 100线程去处理。

        // 每当有4个线程处于await状态的时候，则会触发barrierAction执行
        CyclicBarrier barrier = new CyclicBarrier(4, new Runnable() {
            @Override
            public void run() {
                // 这是每满足4次数据库操作，就触发一次批量执行
                System.out.println("有4个线程执行了，开始批量插入： " + Thread.currentThread());
                for (int i = 0; i < 4; i++) {
                    System.out.println(sqls.poll());
                }
            }
        });

        for (int i = 0; i < 10; i++) {
            new Thread(() -> {
                try {
                    sqls.add("data - " + Thread.currentThread()); // 缓存起来
                    Thread.sleep(1000L); // 模拟数据库操作耗时
                    barrier.await(); // 等待栅栏打开,有4个线程都执行到这段代码的时候，才会继续往下执行
                    System.out.println(Thread.currentThread() + "插入完毕");
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }).start();
        }

        Thread.sleep(2000);
    }
}
```
CyclicBarrier源码：
```java
public class CyclicBarrier {
    private static class Generation {
        boolean broken = false;
    }

    private final ReentrantLock lock = new ReentrantLock();
    private final Condition trip = lock.newCondition();
    private final int parties;
    private final Runnable barrierCommand;
    private Generation generation = new Generation();

    private int count;

    private void nextGeneration() {
        trip.signalAll(); // 唤醒线程
        count = parties; // count重置
        generation = new Generation();
    }
    /** 跳出栅栏，标记破碎了 */
    private void breakBarrier() {
        generation.broken = true;
        count = parties;
        trip.signalAll();
    }

    private int dowait(boolean timed, long nanos)
        throws InterruptedException, BrokenBarrierException,
            TimeoutException {
        final ReentrantLock lock = this.lock;
        lock.lock(); // 一个线程拿到锁
        try {
            final Generation g = generation;

            if (g.broken) // 一个报错，大家都报错
                throw new BrokenBarrierException();

            if (Thread.interrupted()) {
                breakBarrier(); // 如果线程被中断，唤醒目前正在等待的线程。
                throw new InterruptedException();
            }

            int index = --count;
            if (index == 0) {  // tripped 数量够了
                boolean ranAction = false;
                try {
                    final Runnable command = barrierCommand;
                    if (command != null)
                        command.run(); // 触发执行指定的任务
                    ranAction = true;
                    nextGeneration(); // 唤醒等待的线程继续执行。重新计数
                    return 0;
                } finally {
                    if (!ranAction) // 执行出现异常，不为true则设置
                        breakBarrier();
                }
            }

            // loop until tripped, broken, interrupted, or timed out
            for (;;) {
                try {
                    if (!timed) // 如果没设置超时时间，就直接进入等待
                        trip.await();
                    else if (nanos > 0L)
                        nanos = trip.awaitNanos(nanos); // 进入带有超时机制的等待
                } catch (InterruptedException ie) {
                    if (g == generation && ! g.broken) {// 中途线程被中断，则标记
                        breakBarrier();
                        throw ie;
                    } else {
                        // We're about to finish waiting even if we had not
                        // been interrupted, so this interrupt is deemed to
                        // "belong" to subsequent execution.
                        Thread.currentThread().interrupt();
                    }
                }

                if (g.broken)
                    throw new BrokenBarrierException();

                if (g != generation)
                    return index;

                if (timed && nanos <= 0L) { // 等待超时
                    breakBarrier();
                    throw new TimeoutException();
                }
            }
        } finally {
            lock.unlock();
        }
    }

    public CyclicBarrier(int parties, Runnable barrierAction) {
        if (parties <= 0) throw new IllegalArgumentException();
        this.parties = parties;
        this.count = parties;
        this.barrierCommand = barrierAction;
    }

    public CyclicBarrier(int parties) {
        this(parties, null);
    }
    public int getParties() {
        return parties;
    }

    public int await() throws InterruptedException, BrokenBarrierException {
        try {
            return dowait(false, 0L);
        } catch (TimeoutException toe) {
            throw new Error(toe); // cannot happen
        }
    }

    public int await(long timeout, TimeUnit unit)
        throws InterruptedException,
               BrokenBarrierException,
               TimeoutException {
        return dowait(true, unit.toNanos(timeout));
    }

    public boolean isBroken() {
        final ReentrantLock lock = this.lock;
        lock.lock();
        try {
            return generation.broken;
        } finally {
            lock.unlock();
        }
    }

    public void reset() {
        final ReentrantLock lock = this.lock;
        lock.lock();
        try {
            breakBarrier();   // break the current generation
            nextGeneration(); // start a new generation
        } finally {
            lock.unlock();
        }
    }

    public int getNumberWaiting() {
        final ReentrantLock lock = this.lock;
        lock.lock();
        try {
            return parties - count;
        } finally {
            lock.unlock();
        }
    }
}
```

#### 1.3.2并发容器类-1
![](./assets/NeteaseCloud/HighPerformanceTopics/176.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/177.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/178.jpg)
HashMap1_7源码：
```java
/*

 * Copyright (c) 1997, 2017, Oracle and/or its affiliates. All rights reserved.

 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.

 *

 * This code is free software; you can redistribute it and/or modify it

 * under the terms of the GNU General Public License version 2 only, as

 * published by the Free Software Foundation.  Oracle designates this

 * particular file as subject to the "Classpath" exception as provided

 * by Oracle in the LICENSE file that accompanied this code.

 *

 * This code is distributed in the hope that it will be useful, but WITHOUT

 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or

 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License

 * version 2 for more details (a copy is included in the LICENSE file that

 * accompanied this code).

 *

 * You should have received a copy of the GNU General Public License version

 * 2 along with this work; if not, write to the Free Software Foundation,

 * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.

 *

 * Please contact Oracle, 500 Oracle Parkway, Redwood Shores, CA 94065 USA

 * or visit www.oracle.com if you need additional information or have any

 * questions.

 */


package com.study.juc.map;

import java.io.*;
import java.util.*;


/**

 * Hash table based implementation of the <tt>Map</tt> interface.  This

 * implementation provides all of the optional map operations, and permits

 * <tt>null</tt> values and the <tt>null</tt> key.  (The <tt>HashMap</tt>

 * class is roughly equivalent to <tt>Hashtable</tt>, except that it is

 * unsynchronized and permits nulls.)  This class makes no guarantees as to

 * the order of the map; in particular, it does not guarantee that the order

 * will remain constant over time.

 *

 * <p>This implementation provides constant-time performance for the basic

 * operations (<tt>get</tt> and <tt>put</tt>), assuming the hash function

 * disperses the elements properly among the buckets.  Iteration over

 * collection views requires time proportional to the "capacity" of the

 * <tt>HashMap</tt> instance (the number of buckets) plus its size (the number

 * of key-value mappings).  Thus, it's very important not to set the initial

 * capacity too high (or the load factor too low) if iteration performance is

 * important.

 *

 * <p>An instance of <tt>HashMap</tt> has two parameters that affect its

 * performance: <i>initial capacity</i> and <i>load factor</i>.  The

 * <i>capacity</i> is the number of buckets in the hash table, and the initial

 * capacity is simply the capacity at the time the hash table is created.  The

 * <i>load factor</i> is a measure of how full the hash table is allowed to

 * get before its capacity is automatically increased.  When the number of

 * entries in the hash table exceeds the product of the load factor and the

 * current capacity, the hash table is <i>rehashed</i> (that is, internal data

 * structures are rebuilt) so that the hash table has approximately twice the

 * number of buckets.

 *

 * <p>As a general rule, the default load factor (.75) offers a good tradeoff

 * between time and space costs.  Higher values decrease the space overhead

 * but increase the lookup cost (reflected in most of the operations of the

 * <tt>HashMap</tt> class, including <tt>get</tt> and <tt>put</tt>).  The

 * expected number of entries in the map and its load factor should be taken

 * into account when setting its initial capacity, so as to minimize the

 * number of rehash operations.  If the initial capacity is greater

 * than the maximum number of entries divided by the load factor, no

 * rehash operations will ever occur.

 *

 * <p>If many mappings are to be stored in a <tt>HashMap</tt> instance,

 * creating it with a sufficiently large capacity will allow the mappings to

 * be stored more efficiently than letting it perform automatic rehashing as

 * needed to grow the table.

 *

 * <p><strong>Note that this implementation is not synchronized.</strong>

 * If multiple threads access a hash map concurrently, and at least one of

 * the threads modifies the map structurally, it <i>must</i> be

 * synchronized externally.  (A structural modification is any operation

 * that adds or deletes one or more mappings; merely changing the value

 * associated with a key that an instance already contains is not a

 * structural modification.)  This is typically accomplished by

 * synchronizing on some object that naturally encapsulates the map.

 *

 * If no such object exists, the map should be "wrapped" using the

 * {@link Collections#synchronizedMap Collections.synchronizedMap}

 * method.  This is best done at creation time, to prevent accidental

 * unsynchronized access to the map:<pre>

 *   Map m = Collections.synchronizedMap(new HashMap(...));</pre>

 *

 * <p>The iterators returned by all of this class's "collection view methods"

 * are <i>fail-fast</i>: if the map is structurally modified at any time after

 * the iterator is created, in any way except through the iterator's own

 * <tt>remove</tt> method, the iterator will throw a

 * {@link ConcurrentModificationException}.  Thus, in the face of concurrent

 * modification, the iterator fails quickly and cleanly, rather than risking

 * arbitrary, non-deterministic behavior at an undetermined time in the

 * future.

 *

 * <p>Note that the fail-fast behavior of an iterator cannot be guaranteed

 * as it is, generally speaking, impossible to make any hard guarantees in the

 * presence of unsynchronized concurrent modification.  Fail-fast iterators

 * throw <tt>ConcurrentModificationException</tt> on a best-effort basis.

 * Therefore, it would be wrong to write a program that depended on this

 * exception for its correctness: <i>the fail-fast behavior of iterators

 * should be used only to detect bugs.</i>

 *

 * <p>This class is a member of the

 * <a href="{@docRoot}/../technotes/guides/collections/index.html">

 * Java Collections Framework</a>.

 *

 * @param <K> the type of keys maintained by this map

 * @param <V> the type of mapped values

 *

 * @author  Doug Lea

 * @author  Josh Bloch

 * @author  Arthur van Hoff

 * @author  Neal Gafter

 * @see     Object#hashCode()

 * @see     Collection

 * @see     Map

 * @see     TreeMap

 * @see     Hashtable

 * @since   1.2

 */

// jdk1.7代码
public class HashMap1_7<K,V>

    extends AbstractMap<K,V>

    implements Map<K,V>, Cloneable, Serializable

{


    /**

     * The default initial capacity - MUST be a power of two.

     */
    // 默认的HashMap的空间大小16
    static final int DEFAULT_INITIAL_CAPACITY = 1 << 4; // aka 16


    /**

     * The maximum capacity, used if a higher value is implicitly specified

     * by either of the constructors with arguments.

     * MUST be a power of two <= 1<<30.

     */
    // hashMap最大的空间大小
    static final int MAXIMUM_CAPACITY = 1 << 30;


    /**

     * The load factor used when none specified in constructor.

     */
    // HashMap默认负载因子，负载因子越小，hash冲突机率越低，至于为什么，看完下面源码就知道了
    static final float DEFAULT_LOAD_FACTOR = 0.75f;


    /**

     * An empty table instance to share when the table is not inflated.

     */

    static final Entry<?,?>[] EMPTY_TABLE = {};


    /**

     * The table, resized as necessary. Length MUST Always be a power of two.

     */
    // table就是HashMap实际存储数组的地方
    transient Entry<K,V>[] table = (Entry<K,V>[]) EMPTY_TABLE;


    /**

     * The number of key-value mappings contained in this map.

     */
    // HashMap 实际存储的元素个数
    transient int size;


    /**

     * The next size value at which to resize (capacity * load factor).

     * @serial

     */

    // If table == EMPTY_TABLE then this is the initial capacity at which the

    // table will be created when inflated.
    // 临界值（超过这个值则开始扩容）,公式为(threshold = capacity * loadFactor)
    int threshold;


    /**

     * The load factor for the hash table.

     *

     * @serial

     */
    // HashMap 负载因子
    final float loadFactor;


    /**

     * The number of times this HashMap has been structurally modified

     * Structural modifications are those that change the number of mappings in

     * the HashMap or otherwise modify its internal structure (e.g.,

     * rehash).  This field is used to make iterators on Collection-views of

     * the HashMap fail-fast.  (See ConcurrentModificationException).

     */

    transient int modCount;


    /**

     * The default threshold of map capacity above which alternative hashing is

     * used for String keys. Alternative hashing reduces the incidence of

     * collisions due to weak hash code calculation for String keys.

     * <p/>

     * This value may be overridden by defining the system property

     * {@code jdk.map.althashing.threshold}. A property value of {@code 1}

     * forces alternative hashing to be used at all times whereas

     * {@code -1} value ensures that alternative hashing is never used.

     */

    static final int ALTERNATIVE_HASHING_THRESHOLD_DEFAULT = Integer.MAX_VALUE;


    /**

     * holds values which can't be initialized until after VM is booted.

     */

    private static class Holder {


        /**

         * Table capacity above which to switch to use alternative hashing.

         */

        static final int ALTERNATIVE_HASHING_THRESHOLD;


        static {

            String altThreshold = java.security.AccessController.doPrivileged(

                new sun.security.action.GetPropertyAction(

                    "jdk.map.althashing.threshold"));


            int threshold;

            try {

                threshold = (null != altThreshold)

                        ? Integer.parseInt(altThreshold)

                        : ALTERNATIVE_HASHING_THRESHOLD_DEFAULT;


                // disable alternative hashing if -1

                if (threshold == -1) {

                    threshold = Integer.MAX_VALUE;

                }


                if (threshold < 0) {

                    throw new IllegalArgumentException("value must be positive integer.");

                }

            } catch(IllegalArgumentException failed) {

                throw new Error("Illegal value for 'jdk.map.althashing.threshold'", failed);

            }


            ALTERNATIVE_HASHING_THRESHOLD = threshold;

        }

    }


    /**

     * A randomizing value associated with this instance that is applied to

     * hash code of keys to make hash collisions harder to find. If 0 then

     * alternative hashing is disabled.

     */

    transient int hashSeed = 0;


    /**

     * Constructs an empty <tt>HashMap</tt> with the specified initial

     * capacity and load factor.

     *

     * @param  initialCapacity the initial capacity

     * @param  loadFactor      the load factor

     * @throws IllegalArgumentException if the initial capacity is negative

     *         or the load factor is nonpositive

     */

    public HashMap1_7(int initialCapacity, float loadFactor) {

        if (initialCapacity < 0)

            throw new IllegalArgumentException("Illegal initial capacity: " +

                                               initialCapacity);

        if (initialCapacity > MAXIMUM_CAPACITY)

            initialCapacity = MAXIMUM_CAPACITY;

        if (loadFactor <= 0 || Float.isNaN(loadFactor))

            throw new IllegalArgumentException("Illegal load factor: " +

                                               loadFactor);


        this.loadFactor = loadFactor;

        threshold = initialCapacity;

        init();

    }


    /**

     * Constructs an empty <tt>HashMap</tt> with the specified initial

     * capacity and the default load factor (0.75).

     *

     * @param  initialCapacity the initial capacity.

     * @throws IllegalArgumentException if the initial capacity is negative.

     */

    public HashMap1_7(int initialCapacity) {

        this(initialCapacity, DEFAULT_LOAD_FACTOR);

    }


    /**

     * Constructs an empty <tt>HashMap</tt> with the default initial capacity

     * (16) and the default load factor (0.75).

     */

    public HashMap1_7() {

        this(DEFAULT_INITIAL_CAPACITY, DEFAULT_LOAD_FACTOR);

    }


    /**

     * Constructs a new <tt>HashMap</tt> with the same mappings as the

     * specified <tt>Map</tt>.  The <tt>HashMap</tt> is created with

     * default load factor (0.75) and an initial capacity sufficient to

     * hold the mappings in the specified <tt>Map</tt>.

     *

     * @param   m the map whose mappings are to be placed in this map

     * @throws  NullPointerException if the specified map is null

     */

    public HashMap1_7(Map<? extends K, ? extends V> m) {

        this(Math.max((int) (m.size() / DEFAULT_LOAD_FACTOR) + 1,

                      DEFAULT_INITIAL_CAPACITY), DEFAULT_LOAD_FACTOR);

        inflateTable(threshold);


        putAllForCreate(m);

    }


    static int roundUpToPowerOf2(int number) {

        // assert number >= 0 : "number must be non-negative";
        // 返回最接近临界值的2的N次方
        return number >= MAXIMUM_CAPACITY

                ? MAXIMUM_CAPACITY

                : (number > 1) ? Integer.highestOneBit((number - 1) << 1) : 1;

    }


    /**

     * Inflates the table.

     */

    private void inflateTable(int toSize) {

        // Find a power of 2 >= toSize 保证数组大小一定是 2 的 n 次方。
        // new HashMap(519)，大小是1024
        int capacity = roundUpToPowerOf2(toSize);

        // 计算扩容阈值：capacity * loadFactor
        threshold = (int) Math.min(capacity * loadFactor, MAXIMUM_CAPACITY + 1);
        // 初始化数组
        table = new Entry[capacity];

        initHashSeedAsNeeded(capacity);

    }


    // internal utilities


    /**

     * Initialization hook for subclasses. This method is called

     * in all constructors and pseudo-constructors (clone, readObject)

     * after HashMap has been initialized but before any entries have

     * been inserted.  (In the absence of this method, readObject would

     * require explicit knowledge of subclasses.)

     */

    void init() {

    }


    /**

     * Initialize the hashing mask value. We defer initialization until we

     * really need it.

     */

    final boolean initHashSeedAsNeeded(int capacity) {
        // 初始化的时候hashSeed为0,0!=0 这时为false.
        boolean currentAltHashing = hashSeed != 0;

        boolean useAltHashing = sun.misc.VM.isBooted() &&

                (capacity >= Holder.ALTERNATIVE_HASHING_THRESHOLD);

        boolean switching = currentAltHashing ^ useAltHashing;

        if (switching) {
            // Tony，为了防止放在项目里面编译报错，这段代码是我注释的
//            hashSeed = useAltHashing
//
//                ? sun.misc.Hashing.randomHashSeed(this)
//
//                : 0;

        }

        return switching;

    }


    /**

     * Retrieve object hash code and applies a supplemental hash function to the

     * result hash, which defends against poor quality hash functions.  This is

     * critical because HashMap uses power-of-two length hash tables, that

     * otherwise encounter collisions for hashCodes that do not differ

     * in lower bits. Note: Null keys always map to hash 0, thus index 0.

     */

    final int hash(Object k) {

        int h = hashSeed;

        if (0 != h && k instanceof String) {
            // Tony: Hashing这个用不了,为了防止编译报错,下面的代码是我注释的
//            return sun.misc.Hashing.stringHash32((String) k);

        }


        h ^= k.hashCode();


        // This function ensures that hashCodes that differ only by

        // constant multiples at each bit position have a bounded

        // number of collisions (approximately 8 at default load factor).

        h ^= (h >>> 20) ^ (h >>> 12);

        return h ^ (h >>> 7) ^ (h >>> 4);

    }


    /**

     * Returns index for hash code h.

     */

    static int indexFor(int h, int length) {

        // assert Integer.bitCount(length) == 1 : "length must be a non-zero power of 2";
        // 简单理解就是hash值和长度取模
        return h & (length-1);

    }


    /**

     * Returns the number of key-value mappings in this map.

     *

     * @return the number of key-value mappings in this map

     */

    public int size() {

        return size;

    }


    /**

     * Returns <tt>true</tt> if this map contains no key-value mappings.

     *

     * @return <tt>true</tt> if this map contains no key-value mappings

     */

    public boolean isEmpty() {

        return size == 0;

    }


    /**

     * Returns the value to which the specified key is mapped,

     * or {@code null} if this map contains no mapping for the key.

     *

     * <p>More formally, if this map contains a mapping from a key

     * {@code k} to a value {@code v} such that {@code (key==null ? k==null :

     * key.equals(k))}, then this method returns {@code v}; otherwise

     * it returns {@code null}.  (There can be at most one such mapping.)

     *

     * <p>A return value of {@code null} does not <i>necessarily</i>

     * indicate that the map contains no mapping for the key; it's also

     * possible that the map explicitly maps the key to {@code null}.

     * The {@link #containsKey containsKey} operation may be used to

     * distinguish these two cases.

     *

     * @see #put(Object, Object)

     */

    public V get(Object key) {

        if (key == null)

            return getForNullKey();

        Entry<K,V> entry = getEntry(key);


        return null == entry ? null : entry.getValue();

    }


    /**

     * Offloaded version of get() to look up null keys.  Null keys map

     * to index 0.  This null case is split out into separate methods

     * for the sake of performance in the two most commonly used

     * operations (get and put), but incorporated with conditionals in

     * others.

     */

    private V getForNullKey() {

        if (size == 0) {

            return null;

        }

        for (Entry<K,V> e = table[0]; e != null; e = e.next) {

            if (e.key == null)

                return e.value;

        }

        return null;

    }


    /**

     * Returns <tt>true</tt> if this map contains a mapping for the

     * specified key.

     *

     * @param   key   The key whose presence in this map is to be tested

     * @return <tt>true</tt> if this map contains a mapping for the specified

     * key.

     */

    public boolean containsKey(Object key) {

        return getEntry(key) != null;

    }


    /**

     * Returns the entry associated with the specified key in the

     * HashMap.  Returns null if the HashMap contains no mapping

     * for the key.

     */

    final Entry<K,V> getEntry(Object key) {

        if (size == 0) {

            return null;

        }


        int hash = (key == null) ? 0 : hash(key);
        // 确定key对应的数组位置,遍历查找比对链表内容
        for (Entry<K,V> e = table[indexFor(hash, table.length)];

             e != null;

             e = e.next) {

            Object k;

            if (e.hash == hash &&

                ((k = e.key) == key || (key != null && key.equals(k))))

                return e;

        }

        return null;

    }


    /**

     * Associates the specified value with the specified key in this map.

     * If the map previously contained a mapping for the key, the old

     * value is replaced.

     *

     * @param key key with which the specified value is to be associated

     * @param value value to be associated with the specified key

     * @return the previous value associated with <tt>key</tt>, or

     *         <tt>null</tt> if there was no mapping for <tt>key</tt>.

     *         (A <tt>null</tt> return can also indicate that the map

     *         previously associated <tt>null</tt> with <tt>key</tt>.)

     */

    public V put(K key, V value) {
        // 当插入第一个元素的时候，需要先初始化数组大小
        if (table == EMPTY_TABLE) {
            // 数组初始化
            inflateTable(threshold);

        }
        // 如果 key 为 null，感兴趣的可以往里看，最终会将这个 entry 放到 table[0] 中
        if (key == null)

            return putForNullKey(value);
        // 1. 求 key 的 hash 值
        int hash = hash(key);
        // 2. 找到对应的数组下标
        int i = indexFor(hash, table.length);
        // 3. 遍历一下对应下标处的链表，看是否有重复的 key 已经存在，如果有，直接覆盖，put 方法返回旧值就结束了
        for (Entry<K,V> e = table[i]; e != null; e = e.next) {

            Object k;

            if (e.hash == hash && ((k = e.key) == key || key.equals(k))) { // key -> value

                V oldValue = e.value;

                e.value = value;

                e.recordAccess(this);

                return oldValue;

            }

        }


        modCount++;
        // 4. 不存在重复的 key，将此 entry 添加到链表中
        addEntry(hash, key, value, i);

        return null;

    }


    /**

     * Offloaded version of put for null keys

     */

    private V putForNullKey(V value) {

        for (Entry<K,V> e = table[0]; e != null; e = e.next) {

            if (e.key == null) {

                V oldValue = e.value;

                e.value = value;

                e.recordAccess(this);

                return oldValue;

            }

        }

        modCount++;

        addEntry(0, null, value, 0);

        return null;

    }


    /**

     * This method is used instead of put by constructors and

     * pseudoconstructors (clone, readObject).  It does not resize the table,

     * check for comodification, etc.  It calls createEntry rather than

     * addEntry.

     */

    private void putForCreate(K key, V value) {

        int hash = null == key ? 0 : hash(key);

        int i = indexFor(hash, table.length);


        /**

         * Look for preexisting entry for key.  This will never happen for

         * clone or deserialize.  It will only happen for construction if the

         * input Map is a sorted map whose ordering is inconsistent w/ equals.

         */

        for (Entry<K,V> e = table[i]; e != null; e = e.next) {

            Object k;

            if (e.hash == hash &&

                ((k = e.key) == key || (key != null && key.equals(k)))) {

                e.value = value;

                return;

            }

        }


        createEntry(hash, key, value, i);

    }


    private void putAllForCreate(Map<? extends K, ? extends V> m) {

        for (Map.Entry<? extends K, ? extends V> e : m.entrySet())

            putForCreate(e.getKey(), e.getValue());

    }


    /**

     * Rehashes the contents of this map into a new array with a

     * larger capacity.  This method is called automatically when the

     * number of keys in this map reaches its threshold.

     *

     * If current capacity is MAXIMUM_CAPACITY, this method does not

     * resize the map, but sets threshold to Integer.MAX_VALUE.

     * This has the effect of preventing future calls.

     *

     * @param newCapacity the new capacity, MUST be a power of two;

     *        must be greater than current capacity unless current

     *        capacity is MAXIMUM_CAPACITY (in which case value

     *        is irrelevant).

     */

    void resize(int newCapacity) {

        Entry[] oldTable = table;

        int oldCapacity = oldTable.length;
        // 如果之前的HashMap已经扩充到最大了，那么就将临界值threshold设置为最大的int值
        if (oldCapacity == MAXIMUM_CAPACITY) {

            threshold = Integer.MAX_VALUE;

            return;

        }

        // 新的数组
        Entry[] newTable = new Entry[newCapacity];
        // 将原来数组中的值迁移到新的更大的数组中
        transfer(newTable, initHashSeedAsNeeded(newCapacity));

        table = newTable;
        // 阈值计算
        threshold = (int)Math.min(newCapacity * loadFactor, MAXIMUM_CAPACITY + 1);

    }


    /**

     * Transfers all entries from current table to newTable.

     */

    void transfer(Entry[] newTable, boolean rehash) {

        int newCapacity = newTable.length;
        // 遍历旧的数组
        for (Entry<K,V> e : table) {

            while(null != e) {

                Entry<K,V> next = e.next;

                if (rehash) {

                    e.hash = null == e.key ? 0 : hash(e.key);

                }

                int i = indexFor(e.hash, newCapacity);

                e.next = newTable[i];

                newTable[i] = e;

                e = next;

            }

        }

    }


    /**

     * Copies all of the mappings from the specified map to this map.

     * These mappings will replace any mappings that this map had for

     * any of the keys currently in the specified map.

     *

     * @param m mappings to be stored in this map

     * @throws NullPointerException if the specified map is null

     */

    public void putAll(Map<? extends K, ? extends V> m) {

        int numKeysToBeAdded = m.size();

        if (numKeysToBeAdded == 0)

            return;


        if (table == EMPTY_TABLE) {

            inflateTable((int) Math.max(numKeysToBeAdded * loadFactor, threshold));

        }


        /*

         * Expand the map if the map if the number of mappings to be added

         * is greater than or equal to threshold.  This is conservative; the

         * obvious condition is (m.size() + size) >= threshold, but this

         * condition could result in a map with twice the appropriate capacity,

         * if the keys to be added overlap with the keys already in this map.

         * By using the conservative calculation, we subject ourself

         * to at most one extra resize.

         */

        if (numKeysToBeAdded > threshold) {

            int targetCapacity = (int)(numKeysToBeAdded / loadFactor + 1);

            if (targetCapacity > MAXIMUM_CAPACITY)

                targetCapacity = MAXIMUM_CAPACITY;

            int newCapacity = table.length;

            while (newCapacity < targetCapacity)

                newCapacity <<= 1;

            if (newCapacity > table.length)

                resize(newCapacity);

        }


        for (Map.Entry<? extends K, ? extends V> e : m.entrySet())

            put(e.getKey(), e.getValue());

    }


    /**

     * Removes the mapping for the specified key from this map if present.

     *

     * @param  key key whose mapping is to be removed from the map

     * @return the previous value associated with <tt>key</tt>, or

     *         <tt>null</tt> if there was no mapping for <tt>key</tt>.

     *         (A <tt>null</tt> return can also indicate that the map

     *         previously associated <tt>null</tt> with <tt>key</tt>.)

     */

    public V remove(Object key) {

        Entry<K,V> e = removeEntryForKey(key);

        return (e == null ? null : e.value);

    }


    /**

     * Removes and returns the entry associated with the specified key

     * in the HashMap.  Returns null if the HashMap contains no mapping

     * for this key.

     */

    final Entry<K,V> removeEntryForKey(Object key) {

        if (size == 0) {

            return null;

        }
        // 定位到key的位置
        int hash = (key == null) ? 0 : hash(key);

        int i = indexFor(hash, table.length);

        Entry<K,V> prev = table[i];

        Entry<K,V> e = prev;

        // 删除链表中的元素
        while (e != null) {

            Entry<K,V> next = e.next;

            Object k;

            if (e.hash == hash &&

                ((k = e.key) == key || (key != null && key.equals(k)))) {

                modCount++;

                size--;

                if (prev == e)

                    table[i] = next;

                else

                    prev.next = next;

                e.recordRemoval(this);

                return e;

            }

            prev = e;

            e = next;

        }


        return e;

    }


    /**

     * Special version of remove for EntrySet using {@code Map.Entry.equals()}

     * for matching.

     */

    final Entry<K,V> removeMapping(Object o) {

        if (size == 0 || !(o instanceof Map.Entry))

            return null;


        Map.Entry<K,V> entry = (Map.Entry<K,V>) o;

        Object key = entry.getKey();

        int hash = (key == null) ? 0 : hash(key);

        int i = indexFor(hash, table.length);

        Entry<K,V> prev = table[i];

        Entry<K,V> e = prev;


        while (e != null) {

            Entry<K,V> next = e.next;

            if (e.hash == hash && e.equals(entry)) {

                modCount++;

                size--;

                if (prev == e)

                    table[i] = next;

                else

                    prev.next = next;

                e.recordRemoval(this);

                return e;

            }

            prev = e;

            e = next;

        }


        return e;

    }


    /**

     * Removes all of the mappings from this map.

     * The map will be empty after this call returns.

     */

    public void clear() {

        modCount++;

        Arrays.fill(table, null);

        size = 0;

    }


    /**

     * Returns <tt>true</tt> if this map maps one or more keys to the

     * specified value.

     *

     * @param value value whose presence in this map is to be tested

     * @return <tt>true</tt> if this map maps one or more keys to the

     *         specified value

     */

    public boolean containsValue(Object value) {

        if (value == null)

            return containsNullValue();


        Entry[] tab = table;

        for (int i = 0; i < tab.length ; i++)

            for (Entry e = tab[i] ; e != null ; e = e.next)

                if (value.equals(e.value))

                    return true;

        return false;

    }


    /**

     * Special-case code for containsValue with null argument

     */

    private boolean containsNullValue() {

        Entry[] tab = table;

        for (int i = 0; i < tab.length ; i++)

            for (Entry e = tab[i] ; e != null ; e = e.next)

                if (e.value == null)

                    return true;

        return false;

    }


    /**

     * Returns a shallow copy of this <tt>HashMap</tt> instance: the keys and

     * values themselves are not cloned.

     *

     * @return a shallow copy of this map

     */

    public Object clone() {

        HashMap1_7<K,V> result = null;

        try {

            result = (HashMap1_7<K,V>)super.clone();

        } catch (CloneNotSupportedException e) {

            // assert false;

        }

        if (result.table != EMPTY_TABLE) {

            result.inflateTable(Math.min(

                (int) Math.min(

                    size * Math.min(1 / loadFactor, 4.0f),

                    // we have limits...

                    HashMap1_7.MAXIMUM_CAPACITY),

               table.length));

        }

        result.entrySet = null;

        result.modCount = 0;

        result.size = 0;

        result.init();

        result.putAllForCreate(this);


        return result;

    }


    static class Entry<K,V> implements Map.Entry<K,V> {

        final K key;

        V value;

        Entry<K,V> next;

        int hash;


        /**

         * Creates new entry.

         */

        Entry(int h, K k, V v, Entry<K,V> n) {

            value = v;

            next = n;

            key = k;

            hash = h;

        }


        public final K getKey() {

            return key;

        }


        public final V getValue() {

            return value;

        }


        public final V setValue(V newValue) {

            V oldValue = value;

            value = newValue;

            return oldValue;

        }


        public final boolean equals(Object o) {

            if (!(o instanceof Map.Entry))

                return false;

            Map.Entry e = (Map.Entry)o;

            Object k1 = getKey();

            Object k2 = e.getKey();

            if (k1 == k2 || (k1 != null && k1.equals(k2))) {

                Object v1 = getValue();

                Object v2 = e.getValue();

                if (v1 == v2 || (v1 != null && v1.equals(v2)))

                    return true;

            }

            return false;

        }


        public final int hashCode() {

            return Objects.hashCode(getKey()) ^ Objects.hashCode(getValue());

        }


        public final String toString() {

            return getKey() + "=" + getValue();

        }


        /**

         * This method is invoked whenever the value in an entry is

         * overwritten by an invocation of put(k,v) for a key k that's already

         * in the HashMap.

         */

        void recordAccess(HashMap1_7<K,V> m) {

        }


        /**

         * This method is invoked whenever the entry is

         * removed from the table.

         */

        void recordRemoval(HashMap1_7<K,V> m) {

        }

    }


    /**

     * Adds a new entry with the specified key, value and hash code to

     * the specified bucket.  It is the responsibility of this

     * method to resize the table if appropriate.

     *

     * Subclass overrides this to alter the behavior of put method.

     */

    void addEntry(int hash, K key, V value, int bucketIndex) {
        // 如果当前 HashMap 大小已经达到了阈值，并且新值要插入的数组位置已经有元素了，那么要扩容
        if ((size >= threshold) && (null != table[bucketIndex])) {
            // 扩容，容量 * 2
            resize(2 * table.length);
            // 扩容以后，重新计算 hash 值
            hash = (null != key) ? hash(key) : 0;
            // 重新计算扩容后的新的下标
            bucketIndex = indexFor(hash, table.length);

        }

        // 创建元素
        createEntry(hash, key, value, bucketIndex);

    }


    /**

     * Like addEntry except that this version is used when creating entries

     * as part of Map construction or "pseudo-construction" (cloning,

     * deserialization).  This version needn't worry about resizing the table.

     *

     * Subclass overrides this to alter the behavior of HashMap(Map),

     * clone, and readObject.

     */
    // 将新值放到链表的表头，然后 size++
    void createEntry(int hash, K key, V value, int bucketIndex) {

        Entry<K,V> e = table[bucketIndex];

        table[bucketIndex] = new Entry<>(hash, key, value, e);

        size++;

    }


    private abstract class HashIterator<E> implements Iterator<E> {

        Entry<K,V> next;        // next entry to return

        int expectedModCount;   // For fast-fail

        int index;              // current slot

        Entry<K,V> current;     // current entry


        HashIterator() {

            expectedModCount = modCount;

            if (size > 0) { // advance to first entry

                Entry[] t = table;

                while (index < t.length && (next = t[index++]) == null)

                    ;

            }

        }


        public final boolean hasNext() {

            return next != null;

        }


        final Entry<K,V> nextEntry() {

            if (modCount != expectedModCount)

                throw new ConcurrentModificationException();

            Entry<K,V> e = next;

            if (e == null)

                throw new NoSuchElementException();


            if ((next = e.next) == null) {

                Entry[] t = table;

                while (index < t.length && (next = t[index++]) == null)

                    ;

            }

            current = e;

            return e;

        }


        public void remove() {

            if (current == null)

                throw new IllegalStateException();

            if (modCount != expectedModCount)

                throw new ConcurrentModificationException();

            Object k = current.key;

            current = null;

            HashMap1_7.this.removeEntryForKey(k);

            expectedModCount = modCount;

        }

    }


    private final class ValueIterator extends HashIterator<V> {

        public V next() {

            return nextEntry().value;

        }

    }


    private final class KeyIterator extends HashIterator<K> {

        public K next() {

            return nextEntry().getKey();

        }

    }


    private final class EntryIterator extends HashIterator<Map.Entry<K,V>> {

        public Map.Entry<K,V> next() {

            return nextEntry();

        }

    }


    // Subclass overrides these to alter behavior of views' iterator() method

    Iterator<K> newKeyIterator()   {

        return new KeyIterator();

    }

    Iterator<V> newValueIterator()   {

        return new ValueIterator();

    }

    Iterator<Map.Entry<K,V>> newEntryIterator()   {

        return new EntryIterator();

    }



    // Views


    private transient Set<Map.Entry<K,V>> entrySet = null;


    /**

     * Returns a {@link Set} view of the keys contained in this map.

     * The set is backed by the map, so changes to the map are

     * reflected in the set, and vice-versa.  If the map is modified

     * while an iteration over the set is in progress (except through

     * the iterator's own <tt>remove</tt> operation), the results of

     * the iteration are undefined.  The set supports element removal,

     * which removes the corresponding mapping from the map, via the

     * <tt>Iterator.remove</tt>, <tt>Set.remove</tt>,

     * <tt>removeAll</tt>, <tt>retainAll</tt>, and <tt>clear</tt>

     * operations.  It does not support the <tt>add</tt> or <tt>addAll</tt>

     * operations.

     */

    public Set<K> keySet() {
        // Tony: keySet用不了,为了防止编译报错,下面的代码是我注释的
//        Set<K> ks = keySet;

//        return (ks != null ? ks : (keySet = new KeySet()));

        return null;
    }


    private final class KeySet extends AbstractSet<K> {

        public Iterator<K> iterator() {

            return newKeyIterator();

        }

        public int size() {

            return size;

        }

        public boolean contains(Object o) {

            return containsKey(o);

        }

        public boolean remove(Object o) {

            return HashMap1_7.this.removeEntryForKey(o) != null;

        }

        public void clear() {

            HashMap1_7.this.clear();

        }

    }


    /**

     * Returns a {@link Collection} view of the values contained in this map.

     * The collection is backed by the map, so changes to the map are

     * reflected in the collection, and vice-versa.  If the map is

     * modified while an iteration over the collection is in progress

     * (except through the iterator's own <tt>remove</tt> operation),

     * the results of the iteration are undefined.  The collection

     * supports element removal, which removes the corresponding

     * mapping from the map, via the <tt>Iterator.remove</tt>,

     * <tt>Collection.remove</tt>, <tt>removeAll</tt>,

     * <tt>retainAll</tt> and <tt>clear</tt> operations.  It does not

     * support the <tt>add</tt> or <tt>addAll</tt> operations.

     */

    public Collection<V> values() {
        // Tony: values,为了防止编译报错,下面的代码是我注释的
//        Collection<V> vs = values;
//
//        return (vs != null ? vs : (values = new Values()));
        return null;
    }


    private final class Values extends AbstractCollection<V> {

        public Iterator<V> iterator() {

            return newValueIterator();

        }

        public int size() {

            return size;

        }

        public boolean contains(Object o) {

            return containsValue(o);

        }

        public void clear() {

            HashMap1_7.this.clear();

        }

    }


    /**

     * Returns a {@link Set} view of the mappings contained in this map.

     * The set is backed by the map, so changes to the map are

     * reflected in the set, and vice-versa.  If the map is modified

     * while an iteration over the set is in progress (except through

     * the iterator's own <tt>remove</tt> operation, or through the

     * <tt>setValue</tt> operation on a map entry returned by the

     * iterator) the results of the iteration are undefined.  The set

     * supports element removal, which removes the corresponding

     * mapping from the map, via the <tt>Iterator.remove</tt>,

     * <tt>Set.remove</tt>, <tt>removeAll</tt>, <tt>retainAll</tt> and

     * <tt>clear</tt> operations.  It does not support the

     * <tt>add</tt> or <tt>addAll</tt> operations.

     *

     * @return a set view of the mappings contained in this map

     */

    public Set<Map.Entry<K,V>> entrySet() {

        return entrySet0();

    }


    private Set<Map.Entry<K,V>> entrySet0() {

        Set<Map.Entry<K,V>> es = entrySet;

        return es != null ? es : (entrySet = new EntrySet());

    }


    private final class EntrySet extends AbstractSet<Map.Entry<K,V>> {

        public Iterator<Map.Entry<K,V>> iterator() {

            return newEntryIterator();

        }

        public boolean contains(Object o) {

            if (!(o instanceof Map.Entry))

                return false;

            Map.Entry<K,V> e = (Map.Entry<K,V>) o;

            Entry<K,V> candidate = getEntry(e.getKey());

            return candidate != null && candidate.equals(e);

        }

        public boolean remove(Object o) {

            return removeMapping(o) != null;

        }

        public int size() {

            return size;

        }

        public void clear() {

            HashMap1_7.this.clear();

        }

    }


    /**

     * Save the state of the <tt>HashMap</tt> instance to a stream (i.e.,

     * serialize it).

     *

     * @serialData The <i>capacity</i> of the HashMap (the length of the

     *             bucket array) is emitted (int), followed by the

     *             <i>size</i> (an int, the number of key-value

     *             mappings), followed by the key (Object) and value (Object)

     *             for each key-value mapping.  The key-value mappings are

     *             emitted in no particular order.

     */

    private void writeObject(java.io.ObjectOutputStream s)

        throws IOException

    {

        // Write out the threshold, loadfactor, and any hidden stuff

        s.defaultWriteObject();


        // Write out number of buckets

        if (table==EMPTY_TABLE) {

            s.writeInt(roundUpToPowerOf2(threshold));

        } else {

           s.writeInt(table.length);

        }


        // Write out size (number of Mappings)

        s.writeInt(size);


        // Write out keys and values (alternating)

        if (size > 0) {

            for(Map.Entry<K,V> e : entrySet0()) {

                s.writeObject(e.getKey());

                s.writeObject(e.getValue());

            }

        }

    }


    private static final long serialVersionUID = 362498820763181265L;


    /**

     * Reconstitute the {@code HashMap} instance from a stream (i.e.,

     * deserialize it).

     */

    private void readObject(java.io.ObjectInputStream s)

         throws IOException, ClassNotFoundException

    {

        // Read in the threshold (ignored), loadfactor, and any hidden stuff

        s.defaultReadObject();

        if (loadFactor <= 0 || Float.isNaN(loadFactor)) {

            throw new InvalidObjectException("Illegal load factor: " +

                                               loadFactor);

        }


        // set other fields that need values

        table = (Entry<K,V>[]) EMPTY_TABLE;


        // Read in number of buckets

        s.readInt(); // ignored.


        // Read number of mappings

        int mappings = s.readInt();

        if (mappings < 0)

            throw new InvalidObjectException("Illegal mappings count: " +

                                               mappings);


        // capacity chosen by number of mappings and desired load (if >= 0.25)

        int capacity = (int) Math.min(

                    mappings * Math.min(1 / loadFactor, 4.0f),

                    // we have limits...

                    HashMap1_7.MAXIMUM_CAPACITY);


        // allocate the bucket array;

        if (mappings > 0) {

            inflateTable(capacity);

        } else {

            threshold = capacity;

        }


        init();  // Give subclass a chance to do its thing.



        // Check Map.Entry[].class since it's the nearest public type to

        // what we're actually creating.
        // Tony: 下面这行代码是我注释的,为了防止编译报错
        // SharedSecrets.getJavaOISAccess().checkArray(s, Map.Entry[].class, capacity);


        // Read the keys and values, and put the mappings in the HashMap

        for (int i = 0; i < mappings; i++) {

            K key = (K) s.readObject();

            V value = (V) s.readObject();

            putForCreate(key, value);

        }

    }


    // These methods are used when serializing HashSets

    int   capacity()     { return table.length; }

    float loadFactor()   { return loadFactor;   }

}
```
![](./assets/NeteaseCloud/HighPerformanceTopics/179.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/180.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/181.jpg)
ConcurrentHashMap1_7源码：
```java
/*
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * This code is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 2 only, as
 * published by the Free Software Foundation.  Oracle designates this
 * particular file as subject to the "Classpath" exception as provided
 * by Oracle in the LICENSE file that accompanied this code.
 *
 * This code is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
 * version 2 for more details (a copy is included in the LICENSE file that
 * accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version
 * 2 along with this work; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * Please contact Oracle, 500 Oracle Parkway, Redwood Shores, CA 94065 USA
 * or visit www.oracle.com if you need additional information or have any
 * questions.
 */

/*
 * This file is available under and governed by the GNU General Public
 * License version 2 only, as published by the Free Software Foundation.
 * However, the following notice accompanied the original version of this
 * file:
 *
 * Written by Doug Lea with assistance from members of JCP JSR-166
 * Expert Group and released to the public domain, as explained at
 * http://creativecommons.org/publicdomain/zero/1.0/
 */

package com.study.juc.map;
import java.util.concurrent.ConcurrentMap;
import java.util.concurrent.locks.*;
import java.util.*;
import java.io.Serializable;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.ObjectStreamField;

/**
 * A hash table supporting full concurrency of retrievals and
 * adjustable expected concurrency for updates. This class obeys the
 * same functional specification as {@link java.util.Hashtable}, and
 * includes versions of methods corresponding to each method of
 * <tt>Hashtable</tt>. However, even though all operations are
 * thread-safe, retrieval operations do <em>not</em> entail locking,
 * and there is <em>not</em> any support for locking the entire table
 * in a way that prevents all access.  This class is fully
 * interoperable with <tt>Hashtable</tt> in programs that rely on its
 * thread safety but not on its synchronization details.
 *
 * <p> Retrieval operations (including <tt>get</tt>) generally do not
 * block, so may overlap with update operations (including
 * <tt>put</tt> and <tt>remove</tt>). Retrievals reflect the results
 * of the most recently <em>completed</em> update operations holding
 * upon their onset.  For aggregate operations such as <tt>putAll</tt>
 * and <tt>clear</tt>, concurrent retrievals may reflect insertion or
 * removal of only some entries.  Similarly, Iterators and
 * Enumerations return elements reflecting the state of the hash table
 * at some point at or since the creation of the iterator/enumeration.
 * They do <em>not</em> throw {@link ConcurrentModificationException}.
 * However, iterators are designed to be used by only one thread at a time.
 *
 * <p> The allowed concurrency among update operations is guided by
 * the optional <tt>concurrencyLevel</tt> constructor argument
 * (default <tt>16</tt>), which is used as a hint for internal sizing.  The
 * table is internally partitioned to try to permit the indicated
 * number of concurrent updates without contention. Because placement
 * in hash tables is essentially random, the actual concurrency will
 * vary.  Ideally, you should choose a value to accommodate as many
 * threads as will ever concurrently modify the table. Using a
 * significantly higher value than you need can waste space and time,
 * and a significantly lower value can lead to thread contention. But
 * overestimates and underestimates within an order of magnitude do
 * not usually have much noticeable impact. A value of one is
 * appropriate when it is known that only one thread will modify and
 * all others will only read. Also, resizing this or any other kind of
 * hash table is a relatively slow operation, so, when possible, it is
 * a good idea to provide estimates of expected table sizes in
 * constructors.
 *
 * <p>This class and its views and iterators implement all of the
 * <em>optional</em> methods of the {@link Map} and {@link Iterator}
 * interfaces.
 *
 * <p> Like {@link Hashtable} but unlike {@link HashMap}, this class
 * does <em>not</em> allow <tt>null</tt> to be used as a key or value.
 *
 * <p>This class is a member of the
 * <a href="{@docRoot}/../technotes/guides/collections/index.html">
 * Java Collections Framework</a>.
 *
 * @since 1.5
 * @author Doug Lea
 * @param <K> the type of keys maintained by this map
 * @param <V> the type of mapped values
 */
public class ConcurrentHashMap1_7<K, V> extends AbstractMap<K, V>
        implements ConcurrentMap<K, V>, Serializable {
    private static final long serialVersionUID = 7249069246763182397L;

    /*
     * The basic strategy is to subdivide the table among Segments,
     * each of which itself is a concurrently readable hash table.  To
     * reduce footprint, all but one segments are constructed only
     * when first needed (see ensureSegment). To maintain visibility
     * in the presence of lazy construction, accesses to segments as
     * well as elements of segment's table must use volatile access,
     * which is done via Unsafe within methods segmentAt etc
     * below. These provide the functionality of AtomicReferenceArrays
     * but reduce the levels of indirection. Additionally,
     * volatile-writes of table elements and entry "next" fields
     * within locked operations use the cheaper "lazySet" forms of
     * writes (via putOrderedObject) because these writes are always
     * followed by lock releases that maintain sequential consistency
     * of table updates.
     *
     * Historical note: The previous version of this class relied
     * heavily on "final" fields, which avoided some volatile reads at
     * the expense of a large initial footprint.  Some remnants of
     * that design (including forced construction of segment 0) exist
     * to ensure serialization compatibility.
     */

    /* ---------------- Constants -------------- */

    /**
     * The default initial capacity for this table,
     * used when not otherwise specified in a constructor.
     */
    static final int DEFAULT_INITIAL_CAPACITY = 16;

    /**
     * The default load factor for this table, used when not
     * otherwise specified in a constructor.
     */
    static final float DEFAULT_LOAD_FACTOR = 0.75f;

    /**
     * The default concurrency level for this table, used when not
     * otherwise specified in a constructor. 默认的并行级别 16
     */
    static final int DEFAULT_CONCURRENCY_LEVEL = 16;

    /**
     * The maximum capacity, used if a higher value is implicitly
     * specified by either of the constructors with arguments.  MUST
     * be a power of two <= 1<<30 to ensure that entries are indexable
     * using ints.
     */
    static final int MAXIMUM_CAPACITY = 1 << 30;

    /**
     * The minimum capacity for per-segment tables.  Must be a power
     * of two, at least two to avoid immediate resizing on next use
     * after lazy construction.
     */
    static final int MIN_SEGMENT_TABLE_CAPACITY = 2;

    /**
     * The maximum number of segments to allow; used to bound
     * constructor arguments. Must be power of two less than 1 << 24.
     */
    static final int MAX_SEGMENTS = 1 << 16; // slightly conservative

    /**
     * Number of unsynchronized retries in size and containsValue
     * methods before resorting to locking. This is used to avoid
     * unbounded retries if tables undergo continuous modification
     * which would make it impossible to obtain an accurate result.
     */
    static final int RETRIES_BEFORE_LOCK = 2;

    /* ---------------- Fields -------------- */

    /**
     * holds values which can't be initialized until after VM is booted.
     */
    private static class Holder {

        /**
        * Enable alternative hashing of String keys?
        *
        * <p>Unlike the other hash map implementations we do not implement a
        * threshold for regulating whether alternative hashing is used for
        * String keys. Alternative hashing is either enabled for all instances
        * or disabled for all instances.
        */
        static final boolean ALTERNATIVE_HASHING;

        static {
            // Use the "threshold" system property even though our threshold
            // behaviour is "ON" or "OFF".
            String altThreshold = java.security.AccessController.doPrivileged(
                new sun.security.action.GetPropertyAction(
                    "jdk.map.althashing.threshold"));

            int threshold;
            try {
                threshold = (null != altThreshold)
                        ? Integer.parseInt(altThreshold)
                        : Integer.MAX_VALUE;

                // disable alternative hashing if -1
                if (threshold == -1) {
                    threshold = Integer.MAX_VALUE;
                }

                if (threshold < 0) {
                    throw new IllegalArgumentException("value must be positive integer.");
                }
            } catch(IllegalArgumentException failed) {
                throw new Error("Illegal value for 'jdk.map.althashing.threshold'", failed);
            }
            ALTERNATIVE_HASHING = threshold <= MAXIMUM_CAPACITY;
        }
    }

    /**
     * A randomizing value associated with this instance that is applied to
     * hash code of keys to make hash collisions harder to find.
     */
    private transient final int hashSeed = randomHashSeed(this);

    private static int randomHashSeed(ConcurrentHashMap1_7 instance) {
        if (sun.misc.VM.isBooted() && Holder.ALTERNATIVE_HASHING) {
            return 0; // Tony:为了不让这个源码注释编译报错,注释了下面这个代码
            // return sun.misc.Hashing.randomHashSeed(instance);
        }

        return 0;
    }

    /**
     * Mask value for indexing into segments. The upper bits of a
     * key's hash code are used to choose the segment.
     */
    final int segmentMask;

    /**
     * Shift value for indexing within segments.
     */
    final int segmentShift;

    /**
     * The segments, each of which is a specialized hash table. 每一段都是一个hash表
     */
    final Segment<K,V>[] segments;

    transient Set<K> keySet;
    transient Set<Map.Entry<K,V>> entrySet;
    transient Collection<V> values;

    /**
     * ConcurrentHashMap1_7 list entry. Note that this is never exported
     * out as a user-visible Map.Entry.
     */
    static final class HashEntry<K,V> {
        final int hash;
        final K key;
        volatile V value;
        volatile HashEntry<K,V> next;

        HashEntry(int hash, K key, V value, HashEntry<K,V> next) {
            this.hash = hash;
            this.key = key;
            this.value = value;
            this.next = next;
        }

        /**
         * Sets next field with volatile write semantics.  (See above
         * about use of putOrderedObject.)
         */
        final void setNext(HashEntry<K,V> n) {
            UNSAFE.putOrderedObject(this, nextOffset, n);
        }

        // Unsafe mechanics
        static final sun.misc.Unsafe UNSAFE;
        static final long nextOffset;
        static {
            try {
                UNSAFE = sun.misc.Unsafe.getUnsafe();
                Class k = HashEntry.class;
                nextOffset = UNSAFE.objectFieldOffset
                    (k.getDeclaredField("next"));
            } catch (Exception e) {
                throw new Error(e);
            }
        }
    }

    /**
     * Gets the ith element of given table (if nonnull) with volatile
     * read semantics. Note: This is manually integrated into a few
     * performance-sensitive methods to reduce call overhead.
     */
    @SuppressWarnings("unchecked")
    static final <K,V> HashEntry<K,V> entryAt(HashEntry<K,V>[] tab, int i) {
        return (tab == null) ? null :
            (HashEntry<K,V>) UNSAFE.getObjectVolatile
            (tab, ((long)i << TSHIFT) + TBASE);
    }

    /**
     * Sets the ith element of given table, with volatile write
     * semantics. (See above about use of putOrderedObject.)
     */
    static final <K,V> void setEntryAt(HashEntry<K,V>[] tab, int i,
                                       HashEntry<K,V> e) {
        UNSAFE.putOrderedObject(tab, ((long)i << TSHIFT) + TBASE, e);
    }

    /**
     * Applies a supplemental hash function to a given hashCode, which
     * defends against poor quality hash functions.  This is critical
     * because ConcurrentHashMap1_7 uses power-of-two length hash tables,
     * that otherwise encounter collisions for hashCodes that do not
     * differ in lower or upper bits.
     */
    private int hash(Object k) {
        int h = hashSeed;

        if ((0 != h) && (k instanceof String)) {
            return 0; // Tony:为了不让这个源码注释编译报错,注释了下面这个代码
//            return sun.misc.Hashing.stringHash32((String) k);
        }

        h ^= k.hashCode();

        // Spread bits to regularize both segment and index locations,
        // using variant of single-word Wang/Jenkins hash.
        h += (h <<  15) ^ 0xffffcd7d;
        h ^= (h >>> 10);
        h += (h <<   3);
        h ^= (h >>>  6);
        h += (h <<   2) + (h << 14);
        return h ^ (h >>> 16);
    }

    /**
     * Segments are specialized versions of hash tables.  This
     * subclasses from ReentrantLock opportunistically, just to
     * simplify some locking and avoid separate construction.
     */
    static final class Segment<K,V> extends ReentrantLock implements Serializable {
        /*
         * Segments maintain a table of entry lists that are always
         * kept in a consistent state, so can be read (via volatile
         * reads of segments and tables) without locking.  This
         * requires replicating nodes when necessary during table
         * resizing, so the old lists can be traversed by readers
         * still using old version of table.
         *
         * This class defines only mutative methods requiring locking.
         * Except as noted, the methods of this class perform the
         * per-segment versions of ConcurrentHashMap1_7 methods.  (Other
         * methods are integrated directly into ConcurrentHashMap1_7
         * methods.) These mutative methods use a form of controlled
         * spinning on contention via methods scanAndLock and
         * scanAndLockForPut. These intersperse tryLocks with
         * traversals to locate nodes.  The main benefit is to absorb
         * cache misses (which are very common for hash tables) while
         * obtaining locks so that traversal is faster once
         * acquired. We do not actually use the found nodes since they
         * must be re-acquired under lock anyway to ensure sequential
         * consistency of updates (and in any case may be undetectably
         * stale), but they will normally be much faster to re-locate.
         * Also, scanAndLockForPut speculatively creates a fresh node
         * to use in put if no node is found.
         */

        private static final long serialVersionUID = 2249069246763182397L;

        /**
         * The maximum number of times to tryLock in a prescan before
         * possibly blocking on acquire in preparation for a locked
         * segment operation. On multiprocessors, using a bounded
         * number of retries maintains cache acquired while locating
         * nodes.
         */
        static final int MAX_SCAN_RETRIES =
            Runtime.getRuntime().availableProcessors() > 1 ? 64 : 1;

        /**
         * The per-segment table. Elements are accessed via
         * entryAt/setEntryAt providing volatile semantics.
         */
        transient volatile HashEntry<K,V>[] table;

        /**
         * The number of elements. Accessed only either within locks
         * or among other volatile reads that maintain visibility.
         */
        transient int count;

        /**
         * The total number of mutative operations in this segment.
         * Even though this may overflows 32 bits, it provides
         * sufficient accuracy for stability checks in CHM isEmpty()
         * and size() methods.  Accessed only either within locks or
         * among other volatile reads that maintain visibility.
         */
        transient int modCount;

        /**
         * The table is rehashed when its size exceeds this threshold.
         * (The value of this field is always <tt>(int)(capacity *
         * loadFactor)</tt>.)
         */
        transient int threshold;

        /**
         * The load factor for the hash table.  Even though this value
         * is same for all segments, it is replicated to avoid needing
         * links to outer object.
         * @serial
         */
        final float loadFactor;

        Segment(float lf, int threshold, HashEntry<K,V>[] tab) {
            this.loadFactor = lf;
            this.threshold = threshold;
            this.table = tab;
        }

        final V put(K key, int hash, V value, boolean onlyIfAbsent) {
            HashEntry<K,V> node = tryLock() ? null :
                scanAndLockForPut(key, hash, value); // put时锁定。如果当前没这条数据，则会返回新创建的HashEntry，否则为空
            V oldValue;
            try {
                HashEntry<K,V>[] tab = table;
                int index = (tab.length - 1) & hash;
                HashEntry<K,V> first = entryAt(tab, index); // 返回数组中对应位置的元素（链表头部）
                for (HashEntry<K,V> e = first;;) {
                    if (e != null) {// 如果已经存在值
                        K k;
                        if ((k = e.key) == key ||
                            (e.hash == hash && key.equals(k))) {
                            oldValue = e.value;
                            if (!onlyIfAbsent) {
                                e.value = value;
                                ++modCount;
                            }
                            break;
                        }
                        e = e.next;
                    }
                    else { // 如果数组对应位置为空
                        if (node != null) // 非空，则表示为新创建的值
                            node.setNext(first);
                        else
                            node = new HashEntry<K,V>(hash, key, value, first); // 否则创建一个
                        int c = count + 1;
                        if (c > threshold && tab.length < MAXIMUM_CAPACITY)
                            rehash(node); // 超过了容量阈值，但没达到最大限制，则扩容table
                        else
                            setEntryAt(tab, index, node); // 直接用新的node，替换掉旧的first node
                        ++modCount;
                        count = c;
                        oldValue = null;
                        break;
                    }
                }
            } finally {
                unlock();
            }
            return oldValue;
        }

        /**
         * Doubles size of table and repacks entries, also adding the
         * given node to new table
         */
        @SuppressWarnings("unchecked")
        private void rehash(HashEntry<K,V> node) {
            /*
             * Reclassify nodes in each list to new table.  Because we
             * are using power-of-two expansion, the elements from
             * each bin must either stay at same index, or move with a
             * power of two offset. We eliminate unnecessary node
             * creation by catching cases where old nodes can be
             * reused because their next fields won't change.
             * Statistically, at the default threshold, only about
             * one-sixth of them need cloning when a table
             * doubles. The nodes they replace will be garbage
             * collectable as soon as they are no longer referenced by
             * any reader thread that may be in the midst of
             * concurrently traversing table. Entry accesses use plain
             * array indexing because they are followed by volatile
             * table write.
             */
            HashEntry<K,V>[] oldTable = table;
            int oldCapacity = oldTable.length;
            int newCapacity = oldCapacity << 1;
            threshold = (int)(newCapacity * loadFactor);
            HashEntry<K,V>[] newTable =
                (HashEntry<K,V>[]) new HashEntry[newCapacity];
            int sizeMask = newCapacity - 1;
            for (int i = 0; i < oldCapacity ; i++) {
                HashEntry<K,V> e = oldTable[i];
                if (e != null) {
                    HashEntry<K,V> next = e.next;
                    int idx = e.hash & sizeMask;
                    if (next == null)   //  Single node on list
                        newTable[idx] = e;
                    else { // Reuse consecutive sequence at same slot
                        HashEntry<K,V> lastRun = e;
                        int lastIdx = idx;
                        for (HashEntry<K,V> last = next;
                             last != null;
                             last = last.next) {
                            int k = last.hash & sizeMask;
                            if (k != lastIdx) {
                                lastIdx = k;
                                lastRun = last;
                            }
                        }
                        newTable[lastIdx] = lastRun;
                        // Clone remaining nodes
                        for (HashEntry<K,V> p = e; p != lastRun; p = p.next) {
                            V v = p.value;
                            int h = p.hash;
                            int k = h & sizeMask;
                            HashEntry<K,V> n = newTable[k];
                            newTable[k] = new HashEntry<K,V>(h, p.key, v, n);
                        }
                    }
                }
            }
            int nodeIndex = node.hash & sizeMask; // add the new node
            node.setNext(newTable[nodeIndex]);
            newTable[nodeIndex] = node;
            table = newTable;
        }

        /**
         * Scans for a node containing given key while trying to
         * acquire lock, creating and returning one if not found. Upon
         * return, guarantees that lock is held. UNlike in most
         * methods, calls to method equals are not screened: Since
         * traversal speed doesn't matter, we might as well help warm
         * up the associated code and accesses as well.
         *
         * @return a new node if key not found, else null
         */
        private HashEntry<K,V> scanAndLockForPut(K key, int hash, V value) {
            HashEntry<K,V> first = entryForHash(this, hash); // 返回与hash对应的数组内容
            HashEntry<K,V> e = first;// 数组对应位置的链表头部
            HashEntry<K,V> node = null;
            int retries = -1; // negative while locating node
            while (!tryLock()) {// 非阻塞获取锁
                HashEntry<K,V> f; // to recheck first below
                if (retries < 0) {
                    if (e == null) { // 如果扫节点为空，创建新node，作为链表头部
                        if (node == null) // speculatively create node
                            node = new HashEntry<K,V>(hash, key, value, null);
                        retries = 0;
                    }
                    else if (key.equals(e.key)) // 存在，则比较是否为同一个key
                        retries = 0;
                    else // 存在，且链表头部和当前插入的值非同，则比较。
                        e = e.next;
                }
                else if (++retries > MAX_SCAN_RETRIES) { // 最多tryLock次数，超过次数，就阻塞
                    lock();
                    break;
                }
                else if ((retries & 1) == 0 &&
                         (f = entryForHash(this, hash)) != first) {
                    e = first = f; // re-traverse if entry changed
                    retries = -1;
                }
            }
            return node;
        }

        /**
         * Scans for a node containing the given key while trying to
         * acquire lock for a remove or replace operation. Upon
         * return, guarantees that lock is held.  Note that we must
         * lock even if the key is not found, to ensure sequential
         * consistency of updates.
         */
        private void scanAndLock(Object key, int hash) {
            // similar to but simpler than scanAndLockForPut
            HashEntry<K,V> first = entryForHash(this, hash);
            HashEntry<K,V> e = first;
            int retries = -1;
            while (!tryLock()) {
                HashEntry<K,V> f;
                if (retries < 0) {
                    if (e == null || key.equals(e.key))
                        retries = 0;
                    else
                        e = e.next;
                }
                else if (++retries > MAX_SCAN_RETRIES) {
                    lock();
                    break;
                }
                else if ((retries & 1) == 0 &&
                         (f = entryForHash(this, hash)) != first) {
                    e = first = f;
                    retries = -1;
                }
            }
        }

        /**
         * Remove; match on key only if value null, else match both.
         */
        final V remove(Object key, int hash, Object value) {
            if (!tryLock())
                scanAndLock(key, hash);
            V oldValue = null;
            try {
                HashEntry<K,V>[] tab = table;
                int index = (tab.length - 1) & hash;
                HashEntry<K,V> e = entryAt(tab, index);
                HashEntry<K,V> pred = null;
                while (e != null) {
                    K k;
                    HashEntry<K,V> next = e.next;
                    if ((k = e.key) == key ||
                        (e.hash == hash && key.equals(k))) {
                        V v = e.value;
                        if (value == null || value == v || value.equals(v)) {
                            if (pred == null)
                                setEntryAt(tab, index, next);
                            else
                                pred.setNext(next);
                            ++modCount;
                            --count;
                            oldValue = v;
                        }
                        break;
                    }
                    pred = e;
                    e = next;
                }
            } finally {
                unlock();
            }
            return oldValue;
        }

        final boolean replace(K key, int hash, V oldValue, V newValue) {
            if (!tryLock())
                scanAndLock(key, hash);
            boolean replaced = false;
            try {
                HashEntry<K,V> e;
                for (e = entryForHash(this, hash); e != null; e = e.next) {
                    K k;
                    if ((k = e.key) == key ||
                        (e.hash == hash && key.equals(k))) {
                        if (oldValue.equals(e.value)) {
                            e.value = newValue;
                            ++modCount;
                            replaced = true;
                        }
                        break;
                    }
                }
            } finally {
                unlock();
            }
            return replaced;
        }

        final V replace(K key, int hash, V value) {
            if (!tryLock())
                scanAndLock(key, hash);
            V oldValue = null;
            try {
                HashEntry<K,V> e;
                for (e = entryForHash(this, hash); e != null; e = e.next) {
                    K k;
                    if ((k = e.key) == key ||
                        (e.hash == hash && key.equals(k))) {
                        oldValue = e.value;
                        e.value = value;
                        ++modCount;
                        break;
                    }
                }
            } finally {
                unlock();
            }
            return oldValue;
        }

        final void clear() {
            lock();
            try {
                HashEntry<K,V>[] tab = table;
                for (int i = 0; i < tab.length ; i++)
                    setEntryAt(tab, i, null);
                ++modCount;
                count = 0;
            } finally {
                unlock();
            }
        }
    }

    // Accessing segments

    /**
     * Gets the jth element of given segment array (if nonnull) with
     * volatile element access semantics via Unsafe. (The null check
     * can trigger harmlessly only during deserialization.) Note:
     * because each element of segments array is set only once (using
     * fully ordered writes), some performance-sensitive methods rely
     * on this method only as a recheck upon null reads.
     */
    @SuppressWarnings("unchecked")
    static final <K,V> Segment<K,V> segmentAt(Segment<K,V>[] ss, int j) {
        long u = (j << SSHIFT) + SBASE;
        return ss == null ? null :
            (Segment<K,V>) UNSAFE.getObjectVolatile(ss, u);
    }

    /**
     * Returns the segment for the given index, creating it and
     * recording in segment table (via CAS) if not already present.
     *
     * @param k the index
     * @return the segment
     */
    @SuppressWarnings("unchecked")
    private Segment<K,V> ensureSegment(int k) {
        final Segment<K,V>[] ss = this.segments; // return ss[i];
        long u = (k << SSHIFT) + SBASE; // raw offset // 数组内存地址定位
        Segment<K,V> seg;
        if ((seg = (Segment<K,V>)UNSAFE.getObjectVolatile(ss, u)) == null) {// 如果不存在,就创建一个
            Segment<K,V> proto = ss[0]; // use segment 0 as prototype 第一个segment作为原型
            int cap = proto.table.length;
            float lf = proto.loadFactor;
            int threshold = (int)(cap * lf);
            HashEntry<K,V>[] tab = (HashEntry<K,V>[])new HashEntry[cap];
            if ((seg = (Segment<K,V>)UNSAFE.getObjectVolatile(ss, u))
                == null) { // recheck
                Segment<K,V> s = new Segment<K,V>(lf, threshold, tab);
                while ((seg = (Segment<K,V>)UNSAFE.getObjectVolatile(ss, u))
                       == null) {
                    if (UNSAFE.compareAndSwapObject(ss, u, null, seg = s))
                        break;
                }
            }
        }
        return seg;
    }

    // Hash-based segment and entry accesses

    /**
     * Get the segment for the given hash
     */
    @SuppressWarnings("unchecked")
    private Segment<K,V> segmentForHash(int h) {
        long u = (((h >>> segmentShift) & segmentMask) << SSHIFT) + SBASE;
        return (Segment<K,V>) UNSAFE.getObjectVolatile(segments, u);
    }

    /**
     * Gets the table entry for the given segment and hash
     */
    @SuppressWarnings("unchecked")
    static final <K,V> HashEntry<K,V> entryForHash(Segment<K,V> seg, int h) {
        HashEntry<K,V>[] tab;
        return (seg == null || (tab = seg.table) == null) ? null :
            (HashEntry<K,V>) UNSAFE.getObjectVolatile
            (tab, ((long)(((tab.length - 1) & h)) << TSHIFT) + TBASE);
    }

    /* ---------------- Public operations -------------- */

    /**
     * Creates a new, empty map with the specified initial
     * capacity, load factor and concurrency level.
     *
     * @param initialCapacity the initial capacity. The implementation
     * performs internal sizing to accommodate this many elements.
     * @param loadFactor  the load factor threshold, used to control resizing.
     * Resizing may be performed when the average number of elements per
     * bin exceeds this threshold.
     * @param concurrencyLevel the estimated number of concurrently
     * updating threads. The implementation performs internal sizing
     * to try to accommodate this many threads.
     * @throws IllegalArgumentException if the initial capacity is
     * negative or the load factor or concurrencyLevel are
     * nonpositive.
     */
    @SuppressWarnings("unchecked")
    public ConcurrentHashMap1_7(int initialCapacity,
                             float loadFactor, int concurrencyLevel) {
        if (!(loadFactor > 0) || initialCapacity < 0 || concurrencyLevel <= 0)
            throw new IllegalArgumentException();
        if (concurrencyLevel > MAX_SEGMENTS)
            concurrencyLevel = MAX_SEGMENTS;
        // Find power-of-two sizes best matching arguments
        int sshift = 0;
        int ssize = 1;
        while (ssize < concurrencyLevel) {
            ++sshift;// 默认计算结果是 4
            ssize <<= 1; // 计算下来是16 2的4次方
        }
        this.segmentShift = 32 - sshift; // 默认计算完是28
        this.segmentMask = ssize - 1; // 默认15
        if (initialCapacity > MAXIMUM_CAPACITY)// initialCapacity默认16
            initialCapacity = MAXIMUM_CAPACITY;
        int c = initialCapacity / ssize; // 默认是1
        if (c * ssize < initialCapacity)
            ++c;
        int cap = MIN_SEGMENT_TABLE_CAPACITY;
        while (cap < c)
            cap <<= 1;
        // create segments and segments[0]
        Segment<K,V> s0 =
            new Segment<K,V>(loadFactor, (int)(cap * loadFactor),
                             (HashEntry<K,V>[])new HashEntry[cap]);
        Segment<K,V>[] ss = (Segment<K,V>[])new Segment[ssize]; // 创建一个segment数组
        UNSAFE.putOrderedObject(ss, SBASE, s0); // ordered write of segments[0]
        this.segments = ss; //  默认构建了一个 长度为16的segment数组
    }

    /**
     * Creates a new, empty map with the specified initial capacity
     * and load factor and with the default concurrencyLevel (16).
     *
     * @param initialCapacity The implementation performs internal
     * sizing to accommodate this many elements.
     * @param loadFactor  the load factor threshold, used to control resizing.
     * Resizing may be performed when the average number of elements per
     * bin exceeds this threshold.
     * @throws IllegalArgumentException if the initial capacity of
     * elements is negative or the load factor is nonpositive
     *
     * @since 1.6
     */
    public ConcurrentHashMap1_7(int initialCapacity, float loadFactor) {
        this(initialCapacity, loadFactor, DEFAULT_CONCURRENCY_LEVEL);
    }

    /**
     * Creates a new, empty map with the specified initial capacity,
     * and with default load factor (0.75) and concurrencyLevel (16).
     *
     * @param initialCapacity the initial capacity. The implementation
     * performs internal sizing to accommodate this many elements.
     * @throws IllegalArgumentException if the initial capacity of
     * elements is negative.
     */
    public ConcurrentHashMap1_7(int initialCapacity) {
        this(initialCapacity, DEFAULT_LOAD_FACTOR, DEFAULT_CONCURRENCY_LEVEL);
    }

    /**
     * Creates a new, empty map with a default initial capacity (16),
     * load factor (0.75) and concurrencyLevel (16).
     */
    public ConcurrentHashMap1_7() {
        this(DEFAULT_INITIAL_CAPACITY, DEFAULT_LOAD_FACTOR, DEFAULT_CONCURRENCY_LEVEL);
    }

    /**
     * Creates a new map with the same mappings as the given map.
     * The map is created with a capacity of 1.5 times the number
     * of mappings in the given map or 16 (whichever is greater),
     * and a default load factor (0.75) and concurrencyLevel (16).
     *
     * @param m the map
     */
    public ConcurrentHashMap1_7(Map<? extends K, ? extends V> m) {
        this(Math.max((int) (m.size() / DEFAULT_LOAD_FACTOR) + 1,
                      DEFAULT_INITIAL_CAPACITY),
             DEFAULT_LOAD_FACTOR, DEFAULT_CONCURRENCY_LEVEL);
        putAll(m);
    }

    /**
     * Returns <tt>true</tt> if this map contains no key-value mappings.
     *
     * @return <tt>true</tt> if this map contains no key-value mappings
     */
    public boolean isEmpty() {
        /*
         * Sum per-segment modCounts to avoid mis-reporting when
         * elements are concurrently added and removed in one segment
         * while checking another, in which case the table was never
         * actually empty at any point. (The sum ensures accuracy up
         * through at least 1<<31 per-segment modifications before
         * recheck.)  Methods size() and containsValue() use similar
         * constructions for stability checks.
         */
        long sum = 0L;
        final Segment<K,V>[] segments = this.segments;
        for (int j = 0; j < segments.length; ++j) {
            Segment<K,V> seg = segmentAt(segments, j);
            if (seg != null) {
                if (seg.count != 0)
                    return false;
                sum += seg.modCount;
            }
        }
        if (sum != 0L) { // recheck unless no modifications
            for (int j = 0; j < segments.length; ++j) {
                Segment<K,V> seg = segmentAt(segments, j);
                if (seg != null) {
                    if (seg.count != 0)
                        return false;
                    sum -= seg.modCount;
                }
            }
            if (sum != 0L)
                return false;
        }
        return true;
    }

    /**
     * Returns the number of key-value mappings in this map.  If the
     * map contains more than <tt>Integer.MAX_VALUE</tt> elements, returns
     * <tt>Integer.MAX_VALUE</tt>.
     *
     * @return the number of key-value mappings in this map
     */
    public int size() {
        // Try a few times to get accurate count. On failure due to
        // continuous async changes in table, resort to locking.
        final Segment<K,V>[] segments = this.segments;
        int size;
        boolean overflow; // true if size overflows 32 bits
        long sum;         // sum of modCounts
        long last = 0L;   // previous sum
        int retries = -1; // first iteration isn't retry
        try {
            for (;;) {
                if (retries++ == RETRIES_BEFORE_LOCK) {
                    for (int j = 0; j < segments.length; ++j)
                        ensureSegment(j).lock(); // force creation
                }
                sum = 0L;
                size = 0;
                overflow = false;
                for (int j = 0; j < segments.length; ++j) {
                    Segment<K,V> seg = segmentAt(segments, j);
                    if (seg != null) {
                        sum += seg.modCount;
                        int c = seg.count;
                        if (c < 0 || (size += c) < 0)
                            overflow = true;
                    }
                }
                if (sum == last)
                    break;
                last = sum;
            }
        } finally {
            if (retries > RETRIES_BEFORE_LOCK) {
                for (int j = 0; j < segments.length; ++j)
                    segmentAt(segments, j).unlock();
            }
        }
        return overflow ? Integer.MAX_VALUE : size;
    }

    /**
     * Returns the value to which the specified key is mapped,
     * or {@code null} if this map contains no mapping for the key.
     *
     * <p>More formally, if this map contains a mapping from a key
     * {@code k} to a value {@code v} such that {@code key.equals(k)},
     * then this method returns {@code v}; otherwise it returns
     * {@code null}.  (There can be at most one such mapping.)
     *
     * @throws NullPointerException if the specified key is null
     */
    public V get(Object key) {
        Segment<K,V> s; // manually integrate access methods to reduce overhead
        HashEntry<K,V>[] tab;
        int h = hash(key);
        long u = (((h >>> segmentShift) & segmentMask) << SSHIFT) + SBASE;
        if ((s = (Segment<K,V>)UNSAFE.getObjectVolatile(segments, u)) != null &&
                (tab = s.table) != null) {
            for (HashEntry<K,V> e = (HashEntry<K,V>) UNSAFE.getObjectVolatile
                    (tab, ((long)(((tab.length - 1) & h)) << TSHIFT) + TBASE);
                 e != null; e = e.next) {
                K k;
                if ((k = e.key) == key || (e.hash == h && key.equals(k)))
                    return e.value;
            }
        }
        return null;
    }

    /**
     * Tests if the specified object is a key in this table.
     *
     * @param  key   possible key
     * @return <tt>true</tt> if and only if the specified object
     *         is a key in this table, as determined by the
     *         <tt>equals</tt> method; <tt>false</tt> otherwise.
     * @throws NullPointerException if the specified key is null
     */
    @SuppressWarnings("unchecked")
    public boolean containsKey(Object key) {
        Segment<K,V> s; // same as get() except no need for volatile value read
        HashEntry<K,V>[] tab;
        int h = hash(key);
        long u = (((h >>> segmentShift) & segmentMask) << SSHIFT) + SBASE;
        if ((s = (Segment<K,V>)UNSAFE.getObjectVolatile(segments, u)) != null &&
            (tab = s.table) != null) {
            for (HashEntry<K,V> e = (HashEntry<K,V>) UNSAFE.getObjectVolatile
                     (tab, ((long)(((tab.length - 1) & h)) << TSHIFT) + TBASE);
                 e != null; e = e.next) {
                K k;
                if ((k = e.key) == key || (e.hash == h && key.equals(k)))
                    return true;
            }
        }
        return false;
    }

    /**
     * Returns <tt>true</tt> if this map maps one or more keys to the
     * specified value. Note: This method requires a full internal
     * traversal of the hash table, and so is much slower than
     * method <tt>containsKey</tt>.
     *
     * @param value value whose presence in this map is to be tested
     * @return <tt>true</tt> if this map maps one or more keys to the
     *         specified value
     * @throws NullPointerException if the specified value is null
     */
    public boolean containsValue(Object value) {
        // Same idea as size()
        if (value == null)
            throw new NullPointerException();
        final Segment<K,V>[] segments = this.segments;
        boolean found = false;
        long last = 0;
        int retries = -1;
        try {
            outer: for (;;) {
                if (retries++ == RETRIES_BEFORE_LOCK) {
                    for (int j = 0; j < segments.length; ++j)
                        ensureSegment(j).lock(); // force creation
                }
                long hashSum = 0L;
                int sum = 0;
                for (int j = 0; j < segments.length; ++j) {
                    HashEntry<K,V>[] tab;
                    Segment<K,V> seg = segmentAt(segments, j);
                    if (seg != null && (tab = seg.table) != null) {
                        for (int i = 0 ; i < tab.length; i++) {
                            HashEntry<K,V> e;
                            for (e = entryAt(tab, i); e != null; e = e.next) {
                                V v = e.value;
                                if (v != null && value.equals(v)) {
                                    found = true;
                                    break outer;
                                }
                            }
                        }
                        sum += seg.modCount;
                    }
                }
                if (retries > 0 && sum == last)
                    break;
                last = sum;
            }
        } finally {
            if (retries > RETRIES_BEFORE_LOCK) {
                for (int j = 0; j < segments.length; ++j)
                    segmentAt(segments, j).unlock();
            }
        }
        return found;
    }

    /**
     * Legacy method testing if some key maps into the specified value
     * in this table.  This method is identical in functionality to
     * {@link #containsValue}, and exists solely to ensure
     * full compatibility with class {@link java.util.Hashtable},
     * which supported this method prior to introduction of the
     * Java Collections framework.

     * @param  value a value to search for
     * @return <tt>true</tt> if and only if some key maps to the
     *         <tt>value</tt> argument in this table as
     *         determined by the <tt>equals</tt> method;
     *         <tt>false</tt> otherwise
     * @throws NullPointerException if the specified value is null
     */
    public boolean contains(Object value) {
        return containsValue(value);
    }

    /**
     * Maps the specified key to the specified value in this table.
     * Neither the key nor the value can be null.
     *
     * <p> The value can be retrieved by calling the <tt>get</tt> method
     * with a key that is equal to the original key.
     *
     * @param key key with which the specified value is to be associated
     * @param value value to be associated with the specified key
     * @return the previous value associated with <tt>key</tt>, or
     *         <tt>null</tt> if there was no mapping for <tt>key</tt>
     * @throws NullPointerException if the specified key or value is null
     */
    @SuppressWarnings("unchecked")
    public V put(K key, V value) {
        Segment<K,V> s;
        if (value == null)
            throw new NullPointerException();
        int hash = hash(key); // 根据key找segment
        int j = (hash >>> segmentShift) & segmentMask;
        if ((s = (Segment<K,V>)UNSAFE.getObject          // nonvolatile; recheck
             (segments, (j << SSHIFT) + SBASE)) == null) //  in ensureSegment
            s = ensureSegment(j);
        return s.put(key, hash, value, false);
    }

    /**
     * {@inheritDoc}
     *
     * @return the previous value associated with the specified key,
     *         or <tt>null</tt> if there was no mapping for the key
     * @throws NullPointerException if the specified key or value is null
     */
    @SuppressWarnings("unchecked")
    public V putIfAbsent(K key, V value) {
        Segment<K,V> s;
        if (value == null)
            throw new NullPointerException();
        int hash = hash(key);
        int j = (hash >>> segmentShift) & segmentMask;
        if ((s = (Segment<K,V>)UNSAFE.getObject
             (segments, (j << SSHIFT) + SBASE)) == null)
            s = ensureSegment(j);
        return s.put(key, hash, value, true);
    }

    /**
     * Copies all of the mappings from the specified map to this one.
     * These mappings replace any mappings that this map had for any of the
     * keys currently in the specified map.
     *
     * @param m mappings to be stored in this map
     */
    public void putAll(Map<? extends K, ? extends V> m) {
        for (Map.Entry<? extends K, ? extends V> e : m.entrySet())
            put(e.getKey(), e.getValue());
    }

    /**
     * Removes the key (and its corresponding value) from this map.
     * This method does nothing if the key is not in the map.
     *
     * @param  key the key that needs to be removed
     * @return the previous value associated with <tt>key</tt>, or
     *         <tt>null</tt> if there was no mapping for <tt>key</tt>
     * @throws NullPointerException if the specified key is null
     */
    public V remove(Object key) {
        int hash = hash(key);
        Segment<K,V> s = segmentForHash(hash);
        return s == null ? null : s.remove(key, hash, null);
    }

    /**
     * {@inheritDoc}
     *
     * @throws NullPointerException if the specified key is null
     */
    public boolean remove(Object key, Object value) {
        int hash = hash(key);
        Segment<K,V> s;
        return value != null && (s = segmentForHash(hash)) != null &&
            s.remove(key, hash, value) != null;
    }

    /**
     * {@inheritDoc}
     *
     * @throws NullPointerException if any of the arguments are null
     */
    public boolean replace(K key, V oldValue, V newValue) {
        int hash = hash(key);
        if (oldValue == null || newValue == null)
            throw new NullPointerException();
        Segment<K,V> s = segmentForHash(hash);
        return s != null && s.replace(key, hash, oldValue, newValue);
    }

    /**
     * {@inheritDoc}
     *
     * @return the previous value associated with the specified key,
     *         or <tt>null</tt> if there was no mapping for the key
     * @throws NullPointerException if the specified key or value is null
     */
    public V replace(K key, V value) {
        int hash = hash(key);
        if (value == null)
            throw new NullPointerException();
        Segment<K,V> s = segmentForHash(hash);
        return s == null ? null : s.replace(key, hash, value);
    }

    /**
     * Removes all of the mappings from this map.
     */
    public void clear() {
        final Segment<K,V>[] segments = this.segments;
        for (int j = 0; j < segments.length; ++j) {
            Segment<K,V> s = segmentAt(segments, j);
            if (s != null)
                s.clear();
        }
    }

    /**
     * Returns a {@link Set} view of the keys contained in this map.
     * The set is backed by the map, so changes to the map are
     * reflected in the set, and vice-versa.  The set supports element
     * removal, which removes the corresponding mapping from this map,
     * via the <tt>Iterator.remove</tt>, <tt>Set.remove</tt>,
     * <tt>removeAll</tt>, <tt>retainAll</tt>, and <tt>clear</tt>
     * operations.  It does not support the <tt>add</tt> or
     * <tt>addAll</tt> operations.
     *
     * <p>The view's <tt>iterator</tt> is a "weakly consistent" iterator
     * that will never throw {@link ConcurrentModificationException},
     * and guarantees to traverse elements as they existed upon
     * construction of the iterator, and may (but is not guaranteed to)
     * reflect any modifications subsequent to construction.
     */
    public Set<K> keySet() {
        Set<K> ks = keySet;
        return (ks != null) ? ks : (keySet = new KeySet());
    }

    /**
     * Returns a {@link Collection} view of the values contained in this map.
     * The collection is backed by the map, so changes to the map are
     * reflected in the collection, and vice-versa.  The collection
     * supports element removal, which removes the corresponding
     * mapping from this map, via the <tt>Iterator.remove</tt>,
     * <tt>Collection.remove</tt>, <tt>removeAll</tt>,
     * <tt>retainAll</tt>, and <tt>clear</tt> operations.  It does not
     * support the <tt>add</tt> or <tt>addAll</tt> operations.
     *
     * <p>The view's <tt>iterator</tt> is a "weakly consistent" iterator
     * that will never throw {@link ConcurrentModificationException},
     * and guarantees to traverse elements as they existed upon
     * construction of the iterator, and may (but is not guaranteed to)
     * reflect any modifications subsequent to construction.
     */
    public Collection<V> values() {
        Collection<V> vs = values;
        return (vs != null) ? vs : (values = new Values());
    }

    /**
     * Returns a {@link Set} view of the mappings contained in this map.
     * The set is backed by the map, so changes to the map are
     * reflected in the set, and vice-versa.  The set supports element
     * removal, which removes the corresponding mapping from the map,
     * via the <tt>Iterator.remove</tt>, <tt>Set.remove</tt>,
     * <tt>removeAll</tt>, <tt>retainAll</tt>, and <tt>clear</tt>
     * operations.  It does not support the <tt>add</tt> or
     * <tt>addAll</tt> operations.
     *
     * <p>The view's <tt>iterator</tt> is a "weakly consistent" iterator
     * that will never throw {@link ConcurrentModificationException},
     * and guarantees to traverse elements as they existed upon
     * construction of the iterator, and may (but is not guaranteed to)
     * reflect any modifications subsequent to construction.
     */
    public Set<Map.Entry<K,V>> entrySet() {
        Set<Map.Entry<K,V>> es = entrySet;
        return (es != null) ? es : (entrySet = new EntrySet());
    }

    /**
     * Returns an enumeration of the keys in this table.
     *
     * @return an enumeration of the keys in this table
     * @see #keySet()
     */
    public Enumeration<K> keys() {
        return new KeyIterator();
    }

    /**
     * Returns an enumeration of the values in this table.
     *
     * @return an enumeration of the values in this table
     * @see #values()
     */
    public Enumeration<V> elements() {
        return new ValueIterator();
    }

    /* ---------------- Iterator Support -------------- */

    abstract class HashIterator {
        int nextSegmentIndex;
        int nextTableIndex;
        HashEntry<K,V>[] currentTable;
        HashEntry<K, V> nextEntry;
        HashEntry<K, V> lastReturned;

        HashIterator() {
            nextSegmentIndex = segments.length - 1;
            nextTableIndex = -1;
            advance();
        }

        /**
         * Set nextEntry to first node of next non-empty table
         * (in backwards order, to simplify checks).
         */
        final void advance() {
            for (;;) {
                if (nextTableIndex >= 0) {
                    if ((nextEntry = entryAt(currentTable,
                                             nextTableIndex--)) != null)
                        break;
                }
                else if (nextSegmentIndex >= 0) {
                    Segment<K,V> seg = segmentAt(segments, nextSegmentIndex--);
                    if (seg != null && (currentTable = seg.table) != null)
                        nextTableIndex = currentTable.length - 1;
                }
                else
                    break;
            }
        }

        final HashEntry<K,V> nextEntry() {
            HashEntry<K,V> e = nextEntry;
            if (e == null)
                throw new NoSuchElementException();
            lastReturned = e; // cannot assign until after null check
            if ((nextEntry = e.next) == null)
                advance();
            return e;
        }

        public final boolean hasNext() { return nextEntry != null; }
        public final boolean hasMoreElements() { return nextEntry != null; }

        public final void remove() {
            if (lastReturned == null)
                throw new IllegalStateException();
            ConcurrentHashMap1_7.this.remove(lastReturned.key);
            lastReturned = null;
        }
    }

    final class KeyIterator
        extends HashIterator
        implements Iterator<K>, Enumeration<K>
    {
        public final K next()        { return super.nextEntry().key; }
        public final K nextElement() { return super.nextEntry().key; }
    }

    final class ValueIterator
        extends HashIterator
        implements Iterator<V>, Enumeration<V>
    {
        public final V next()        { return super.nextEntry().value; }
        public final V nextElement() { return super.nextEntry().value; }
    }

    /**
     * Custom Entry class used by EntryIterator.next(), that relays
     * setValue changes to the underlying map.
     */
    final class WriteThroughEntry
        extends AbstractMap.SimpleEntry<K,V>
    {
        WriteThroughEntry(K k, V v) {
            super(k,v);
        }

        /**
         * Set our entry's value and write through to the map. The
         * value to return is somewhat arbitrary here. Since a
         * WriteThroughEntry does not necessarily track asynchronous
         * changes, the most recent "previous" value could be
         * different from what we return (or could even have been
         * removed in which case the put will re-establish). We do not
         * and cannot guarantee more.
         */
        public V setValue(V value) {
            if (value == null) throw new NullPointerException();
            V v = super.setValue(value);
            ConcurrentHashMap1_7.this.put(getKey(), value);
            return v;
        }
    }

    final class EntryIterator
        extends HashIterator
        implements Iterator<Entry<K,V>>
    {
        public Map.Entry<K,V> next() {
            HashEntry<K,V> e = super.nextEntry();
            return new WriteThroughEntry(e.key, e.value);
        }
    }

    final class KeySet extends AbstractSet<K> {
        public Iterator<K> iterator() {
            return new KeyIterator();
        }
        public int size() {
            return ConcurrentHashMap1_7.this.size();
        }
        public boolean isEmpty() {
            return ConcurrentHashMap1_7.this.isEmpty();
        }
        public boolean contains(Object o) {
            return ConcurrentHashMap1_7.this.containsKey(o);
        }
        public boolean remove(Object o) {
            return ConcurrentHashMap1_7.this.remove(o) != null;
        }
        public void clear() {
            ConcurrentHashMap1_7.this.clear();
        }
    }

    final class Values extends AbstractCollection<V> {
        public Iterator<V> iterator() {
            return new ValueIterator();
        }
        public int size() {
            return ConcurrentHashMap1_7.this.size();
        }
        public boolean isEmpty() {
            return ConcurrentHashMap1_7.this.isEmpty();
        }
        public boolean contains(Object o) {
            return ConcurrentHashMap1_7.this.containsValue(o);
        }
        public void clear() {
            ConcurrentHashMap1_7.this.clear();
        }
    }

    final class EntrySet extends AbstractSet<Map.Entry<K,V>> {
        public Iterator<Map.Entry<K,V>> iterator() {
            return new EntryIterator();
        }
        public boolean contains(Object o) {
            if (!(o instanceof Map.Entry))
                return false;
            Map.Entry<?,?> e = (Map.Entry<?,?>)o;
            V v = ConcurrentHashMap1_7.this.get(e.getKey());
            return v != null && v.equals(e.getValue());
        }
        public boolean remove(Object o) {
            if (!(o instanceof Map.Entry))
                return false;
            Map.Entry<?,?> e = (Map.Entry<?,?>)o;
            return ConcurrentHashMap1_7.this.remove(e.getKey(), e.getValue());
        }
        public int size() {
            return ConcurrentHashMap1_7.this.size();
        }
        public boolean isEmpty() {
            return ConcurrentHashMap1_7.this.isEmpty();
        }
        public void clear() {
            ConcurrentHashMap1_7.this.clear();
        }
    }

    /* ---------------- Serialization Support -------------- */

    /**
     * Save the state of the <tt>ConcurrentHashMap1_7</tt> instance to a
     * stream (i.e., serialize it).
     * @param s the stream
     * @serialData
     * the key (Object) and value (Object)
     * for each key-value mapping, followed by a null pair.
     * The key-value mappings are emitted in no particular order.
     */
    private void writeObject(java.io.ObjectOutputStream s) throws IOException {
        // force all segments for serialization compatibility
        for (int k = 0; k < segments.length; ++k)
            ensureSegment(k);
        s.defaultWriteObject();

        final Segment<K,V>[] segments = this.segments;
        for (int k = 0; k < segments.length; ++k) {
            Segment<K,V> seg = segmentAt(segments, k);
            seg.lock();
            try {
                HashEntry<K,V>[] tab = seg.table;
                for (int i = 0; i < tab.length; ++i) {
                    HashEntry<K,V> e;
                    for (e = entryAt(tab, i); e != null; e = e.next) {
                        s.writeObject(e.key);
                        s.writeObject(e.value);
                    }
                }
            } finally {
                seg.unlock();
            }
        }
        s.writeObject(null);
        s.writeObject(null);
    }

    /**
     * Reconstitute the <tt>ConcurrentHashMap1_7</tt> instance from a
     * stream (i.e., deserialize it).
     * @param s the stream
     */
    @SuppressWarnings("unchecked")
    private void readObject(java.io.ObjectInputStream s)
        throws IOException, ClassNotFoundException {
        // Don't call defaultReadObject()
        ObjectInputStream.GetField oisFields = s.readFields();
        final Segment<K,V>[] oisSegments = (Segment<K,V>[])oisFields.get("segments", null);

        final int ssize = oisSegments.length;
        if (ssize < 1 || ssize > MAX_SEGMENTS
            || (ssize & (ssize-1)) != 0 )  // ssize not power of two
            throw new java.io.InvalidObjectException("Bad number of segments:"
                                                     + ssize);
        int sshift = 0, ssizeTmp = ssize;
        while (ssizeTmp > 1) {
            ++sshift;
            ssizeTmp >>>= 1;
        }
        UNSAFE.putIntVolatile(this, SEGSHIFT_OFFSET, 32 - sshift);
        UNSAFE.putIntVolatile(this, SEGMASK_OFFSET, ssize - 1);
        UNSAFE.putObjectVolatile(this, SEGMENTS_OFFSET, oisSegments);

        // set hashMask
        UNSAFE.putIntVolatile(this, HASHSEED_OFFSET, randomHashSeed(this));

        // Re-initialize segments to be minimally sized, and let grow.
        int cap = MIN_SEGMENT_TABLE_CAPACITY;
        final Segment<K,V>[] segments = this.segments;
        for (int k = 0; k < segments.length; ++k) {
            Segment<K,V> seg = segments[k];
            if (seg != null) {
                seg.threshold = (int)(cap * seg.loadFactor);
                seg.table = (HashEntry<K,V>[]) new HashEntry[cap];
            }
        }

        // Read the keys and values, and put the mappings in the table
        for (;;) {
            K key = (K) s.readObject();
            V value = (V) s.readObject();
            if (key == null)
                break;
            put(key, value);
        }
    }

    // Unsafe mechanics
    private static final sun.misc.Unsafe UNSAFE;
    private static final long SBASE;
    private static final int SSHIFT;
    private static final long TBASE;
    private static final int TSHIFT;
    private static final long HASHSEED_OFFSET;
    private static final long SEGSHIFT_OFFSET;
    private static final long SEGMASK_OFFSET;
    private static final long SEGMENTS_OFFSET;

    static {
        int ss, ts;
        try {
            UNSAFE = sun.misc.Unsafe.getUnsafe();
            Class tc = HashEntry[].class;
            Class sc = Segment[].class;
            TBASE = UNSAFE.arrayBaseOffset(tc);
            SBASE = UNSAFE.arrayBaseOffset(sc);
            ts = UNSAFE.arrayIndexScale(tc);
            ss = UNSAFE.arrayIndexScale(sc);
            HASHSEED_OFFSET = UNSAFE.objectFieldOffset(
                ConcurrentHashMap1_7.class.getDeclaredField("hashSeed"));
            SEGSHIFT_OFFSET = UNSAFE.objectFieldOffset(
                ConcurrentHashMap1_7.class.getDeclaredField("segmentShift"));
            SEGMASK_OFFSET = UNSAFE.objectFieldOffset(
                ConcurrentHashMap1_7.class.getDeclaredField("segmentMask"));
            SEGMENTS_OFFSET = UNSAFE.objectFieldOffset(
                ConcurrentHashMap1_7.class.getDeclaredField("segments"));
        } catch (Exception e) {
            throw new Error(e);
        }
        if ((ss & (ss-1)) != 0 || (ts & (ts-1)) != 0)
            throw new Error("data type scale not a power of two");
        SSHIFT = 31 - Integer.numberOfLeadingZeros(ss);
        TSHIFT = 31 - Integer.numberOfLeadingZeros(ts);
    }

}
```
![](./assets/NeteaseCloud/HighPerformanceTopics/182.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/183.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/184.jpg)
#### 1.3.2并发容器类-2
![](./assets/NeteaseCloud/HighPerformanceTopics/185.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/186.jpg)
ConcurrentSkipListMap源码：
```java
/*
 * ORACLE PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

/*
 *
 *
 *
 *
 *
 * Written by Doug Lea with assistance from members of JCP JSR-166
 * Expert Group and released to the public domain, as explained at
 * http://creativecommons.org/publicdomain/zero/1.0/
 */

package com.study.juc.map;
import java.io.Serializable;
import java.util.AbstractCollection;
import java.util.AbstractMap;
import java.util.AbstractSet;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.NavigableMap;
import java.util.NavigableSet;
import java.util.NoSuchElementException;
import java.util.Set;
import java.util.SortedMap;
import java.util.SortedSet;
import java.util.Spliterator;
import java.util.concurrent.ConcurrentMap;
import java.util.concurrent.ConcurrentNavigableMap;
import java.util.concurrent.ThreadLocalRandom;
import java.util.function.BiFunction;
import java.util.function.Consumer;
import java.util.function.BiConsumer;
import java.util.function.Function;

/**
 * A scalable concurrent {@link ConcurrentNavigableMap} implementation.
 * The map is sorted according to the {@linkplain Comparable natural
 * ordering} of its keys, or by a {@link Comparator} provided at map
 * creation time, depending on which constructor is used.
 *
 * <p>This class implements a concurrent variant of <a
 * href="http://en.wikipedia.org/wiki/Skip_list" target="_top">SkipLists</a>
 * providing expected average <i>log(n)</i> time cost for the
 * {@code containsKey}, {@code get}, {@code put} and
 * {@code remove} operations and their variants.  Insertion, removal,
 * update, and access operations safely execute concurrently by
 * multiple threads.
 *
 * <p>Iterators and spliterators are
 * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
 *
 * <p>Ascending key ordered views and their iterators are faster than
 * descending ones.
 *
 * <p>All {@code Map.Entry} pairs returned by methods in this class
 * and its views represent snapshots of mappings at the time they were
 * produced. They do <em>not</em> support the {@code Entry.setValue}
 * method. (Note however that it is possible to change mappings in the
 * associated map using {@code put}, {@code putIfAbsent}, or
 * {@code replace}, depending on exactly which effect you need.)
 *
 * <p>Beware that, unlike in most collections, the {@code size}
 * method is <em>not</em> a constant-time operation. Because of the
 * asynchronous nature of these maps, determining the current number
 * of elements requires a traversal of the elements, and so may report
 * inaccurate results if this collection is modified during traversal.
 * Additionally, the bulk operations {@code putAll}, {@code equals},
 * {@code toArray}, {@code containsValue}, and {@code clear} are
 * <em>not</em> guaranteed to be performed atomically. For example, an
 * iterator operating concurrently with a {@code putAll} operation
 * might view only some of the added elements.
 *
 * <p>This class and its views and iterators implement all of the
 * <em>optional</em> methods of the {@link Map} and {@link Iterator}
 * interfaces. Like most other concurrent collections, this class does
 * <em>not</em> permit the use of {@code null} keys or values because some
 * null return values cannot be reliably distinguished from the absence of
 * elements.
 *
 * <p>This class is a member of the
 * <a href="{@docRoot}/../technotes/guides/collections/index.html">
 * Java Collections Framework</a>.
 *
 * @author Doug Lea
 * @param <K> the type of keys maintained by this map
 * @param <V> the type of mapped values
 * @since 1.6
 */
public class ConcurrentSkipListMap<K,V> extends AbstractMap<K,V>
    implements ConcurrentNavigableMap<K,V>, Cloneable, Serializable {
    /*
     * This class implements a tree-like two-dimensionally linked skip
     * list in which the index levels are represented in separate
     * nodes from the base nodes holding data.  There are two reasons
     * for taking this approach instead of the usual array-based
     * structure: 1) Array based implementations seem to encounter
     * more complexity and overhead 2) We can use cheaper algorithms
     * for the heavily-traversed index lists than can be used for the
     * base lists.  Here's a picture of some of the basics for a
     * possible list with 2 levels of index:
     *
     * Head nodes          Index nodes
     * +-+    right        +-+                      +-+
     * |2|---------------->| |--------------------->| |->null
     * +-+                 +-+                      +-+
     *  | down              |                        |
     *  v                   v                        v
     * +-+            +-+  +-+       +-+            +-+       +-+
     * |1|----------->| |->| |------>| |----------->| |------>| |->null
     * +-+            +-+  +-+       +-+            +-+       +-+
     *  v              |    |         |              |         |
     * Nodes  next     v    v         v              v         v
     * +-+  +-+  +-+  +-+  +-+  +-+  +-+  +-+  +-+  +-+  +-+  +-+
     * | |->|A|->|B|->|C|->|D|->|E|->|F|->|G|->|H|->|I|->|J|->|K|->null
     * +-+  +-+  +-+  +-+  +-+  +-+  +-+  +-+  +-+  +-+  +-+  +-+
     *
     * The base lists use a variant of the HM linked ordered set
     * algorithm. See Tim Harris, "A pragmatic implementation of
     * non-blocking linked lists"
     * http://www.cl.cam.ac.uk/~tlh20/publications.html and Maged
     * Michael "High Performance Dynamic Lock-Free Hash Tables and
     * List-Based Sets"
     * http://www.research.ibm.com/people/m/michael/pubs.htm.  The
     * basic idea in these lists is to mark the "next" pointers of
     * deleted nodes when deleting to avoid conflicts with concurrent
     * insertions, and when traversing to keep track of triples
     * (predecessor, node, successor) in order to detect when and how
     * to unlink these deleted nodes.
     *
     * Rather than using mark-bits to mark list deletions (which can
     * be slow and space-intensive using AtomicMarkedReference), nodes
     * use direct CAS'able next pointers.  On deletion, instead of
     * marking a pointer, they splice in another node that can be
     * thought of as standing for a marked pointer (indicating this by
     * using otherwise impossible field values).  Using plain nodes
     * acts roughly like "boxed" implementations of marked pointers,
     * but uses new nodes only when nodes are deleted, not for every
     * link.  This requires less space and supports faster
     * traversal. Even if marked references were better supported by
     * JVMs, traversal using this technique might still be faster
     * because any search need only read ahead one more node than
     * otherwise required (to check for trailing marker) rather than
     * unmasking mark bits or whatever on each read.
     *
     * This approach maintains the essential property needed in the HM
     * algorithm of changing the next-pointer of a deleted node so
     * that any other CAS of it will fail, but implements the idea by
     * changing the pointer to point to a different node, not by
     * marking it.  While it would be possible to further squeeze
     * space by defining marker nodes not to have key/value fields, it
     * isn't worth the extra type-testing overhead.  The deletion
     * markers are rarely encountered during traversal and are
     * normally quickly garbage collected. (Note that this technique
     * would not work well in systems without garbage collection.)
     *
     * In addition to using deletion markers, the lists also use
     * nullness of value fields to indicate deletion, in a style
     * similar to typical lazy-deletion schemes.  If a node's value is
     * null, then it is considered logically deleted and ignored even
     * though it is still reachable. This maintains proper control of
     * concurrent replace vs delete operations -- an attempted replace
     * must fail if a delete beat it by nulling field, and a delete
     * must return the last non-null value held in the field. (Note:
     * Null, rather than some special marker, is used for value fields
     * here because it just so happens to mesh with the Map API
     * requirement that method get returns null if there is no
     * mapping, which allows nodes to remain concurrently readable
     * even when deleted. Using any other marker value here would be
     * messy at best.)
     *
     * Here's the sequence of events for a deletion of node n with
     * predecessor b and successor f, initially:
     *
     *        +------+       +------+      +------+
     *   ...  |   b  |------>|   n  |----->|   f  | ...
     *        +------+       +------+      +------+
     *
     * 1. CAS n's value field from non-null to null.
     *    From this point on, no public operations encountering
     *    the node consider this mapping to exist. However, other
     *    ongoing insertions and deletions might still modify
     *    n's next pointer.
     *
     * 2. CAS n's next pointer to point to a new marker node.
     *    From this point on, no other nodes can be appended to n.
     *    which avoids deletion errors in CAS-based linked lists.
     *
     *        +------+       +------+      +------+       +------+
     *   ...  |   b  |------>|   n  |----->|marker|------>|   f  | ...
     *        +------+       +------+      +------+       +------+
     *
     * 3. CAS b's next pointer over both n and its marker.
     *    From this point on, no new traversals will encounter n,
     *    and it can eventually be GCed.
     *        +------+                                    +------+
     *   ...  |   b  |----------------------------------->|   f  | ...
     *        +------+                                    +------+
     *
     * A failure at step 1 leads to simple retry due to a lost race
     * with another operation. Steps 2-3 can fail because some other
     * thread noticed during a traversal a node with null value and
     * helped out by marking and/or unlinking.  This helping-out
     * ensures that no thread can become stuck waiting for progress of
     * the deleting thread.  The use of marker nodes slightly
     * complicates helping-out code because traversals must track
     * consistent reads of up to four nodes (b, n, marker, f), not
     * just (b, n, f), although the next field of a marker is
     * immutable, and once a next field is CAS'ed to point to a
     * marker, it never again changes, so this requires less care.
     *
     * Skip lists add indexing to this scheme, so that the base-level
     * traversals start close to the locations being found, inserted
     * or deleted -- usually base level traversals only traverse a few
     * nodes. This doesn't change the basic algorithm except for the
     * need to make sure base traversals start at predecessors (here,
     * b) that are not (structurally) deleted, otherwise retrying
     * after processing the deletion.
     *
     * Index levels are maintained as lists with volatile next fields,
     * using CAS to link and unlink.  Races are allowed in index-list
     * operations that can (rarely) fail to link in a new index node
     * or delete one. (We can't do this of course for data nodes.)
     * However, even when this happens, the index lists remain sorted,
     * so correctly serve as indices.  This can impact performance,
     * but since skip lists are probabilistic anyway, the net result
     * is that under contention, the effective "p" value may be lower
     * than its nominal value. And race windows are kept small enough
     * that in practice these failures are rare, even under a lot of
     * contention.
     *
     * The fact that retries (for both base and index lists) are
     * relatively cheap due to indexing allows some minor
     * simplifications of retry logic. Traversal restarts are
     * performed after most "helping-out" CASes. This isn't always
     * strictly necessary, but the implicit backoffs tend to help
     * reduce other downstream failed CAS's enough to outweigh restart
     * cost.  This worsens the worst case, but seems to improve even
     * highly contended cases.
     *
     * Unlike most skip-list implementations, index insertion and
     * deletion here require a separate traversal pass occurring after
     * the base-level action, to add or remove index nodes.  This adds
     * to single-threaded overhead, but improves contended
     * multithreaded performance by narrowing interference windows,
     * and allows deletion to ensure that all index nodes will be made
     * unreachable upon return from a public remove operation, thus
     * avoiding unwanted garbage retention. This is more important
     * here than in some other data structures because we cannot null
     * out node fields referencing user keys since they might still be
     * read by other ongoing traversals.
     *
     * Indexing uses skip list parameters that maintain good search
     * performance while using sparser-than-usual indices: The
     * hardwired parameters k=1, p=0.5 (see method doPut) mean
     * that about one-quarter of the nodes have indices. Of those that
     * do, half have one level, a quarter have two, and so on (see
     * Pugh's Skip List Cookbook, sec 3.4).  The expected total space
     * requirement for a map is slightly less than for the current
     * implementation of java.util.TreeMap.
     *
     * Changing the level of the index (i.e, the height of the
     * tree-like structure) also uses CAS. The head index has initial
     * level/height of one. Creation of an index with height greater
     * than the current level adds a level to the head index by
     * CAS'ing on a new top-most head. To maintain good performance
     * after a lot of removals, deletion methods heuristically try to
     * reduce the height if the topmost levels appear to be empty.
     * This may encounter races in which it possible (but rare) to
     * reduce and "lose" a level just as it is about to contain an
     * index (that will then never be encountered). This does no
     * structural harm, and in practice appears to be a better option
     * than allowing unrestrained growth of levels.
     *
     * The code for all this is more verbose than you'd like. Most
     * operations entail locating an element (or position to insert an
     * element). The code to do this can't be nicely factored out
     * because subsequent uses require a snapshot of predecessor
     * and/or successor and/or value fields which can't be returned
     * all at once, at least not without creating yet another object
     * to hold them -- creating such little objects is an especially
     * bad idea for basic internal search operations because it adds
     * to GC overhead.  (This is one of the few times I've wished Java
     * had macros.) Instead, some traversal code is interleaved within
     * insertion and removal operations.  The control logic to handle
     * all the retry conditions is sometimes twisty. Most search is
     * broken into 2 parts. findPredecessor() searches index nodes
     * only, returning a base-level predecessor of the key. findNode()
     * finishes out the base-level search. Even with this factoring,
     * there is a fair amount of near-duplication of code to handle
     * variants.
     *
     * To produce random values without interference across threads,
     * we use within-JDK thread local random support (via the
     * "secondary seed", to avoid interference with user-level
     * ThreadLocalRandom.)
     *
     * A previous version of this class wrapped non-comparable keys
     * with their comparators to emulate Comparables when using
     * comparators vs Comparables.  However, JVMs now appear to better
     * handle infusing comparator-vs-comparable choice into search
     * loops. Static method cpr(comparator, x, y) is used for all
     * comparisons, which works well as long as the comparator
     * argument is set up outside of loops (thus sometimes passed as
     * an argument to internal methods) to avoid field re-reads.
     *
     * For explanation of algorithms sharing at least a couple of
     * features with this one, see Mikhail Fomitchev's thesis
     * (http://www.cs.yorku.ca/~mikhail/), Keir Fraser's thesis
     * (http://www.cl.cam.ac.uk/users/kaf24/), and Hakan Sundell's
     * thesis (http://www.cs.chalmers.se/~phs/).
     *
     * Given the use of tree-like index nodes, you might wonder why
     * this doesn't use some kind of search tree instead, which would
     * support somewhat faster search operations. The reason is that
     * there are no known efficient lock-free insertion and deletion
     * algorithms for search trees. The immutability of the "down"
     * links of index nodes (as opposed to mutable "left" fields in
     * true trees) makes this tractable using only CAS operations.
     *
     * Notation guide for local variables
     * Node:         b, n, f    for  predecessor, node, successor
     * Index:        q, r, d    for index node, right, down.
     *               t          for another index node
     * Head:         h
     * Levels:       j
     * Keys:         k, key
     * Values:       v, value
     * Comparisons:  c
     */

    private static final long serialVersionUID = -8627078645895051609L;

    /**
     * Special value used to identify base-level header
     */
    private static final Object BASE_HEADER = new Object();

    /**
     * The topmost head index of the skiplist.
     */
    private transient volatile HeadIndex<K,V> head;

    /**
     * The comparator used to maintain order in this map, or null if
     * using natural ordering.  (Non-private to simplify access in
     * nested classes.)
     * @serial
     */
    final Comparator<? super K> comparator;

    /** Lazily initialized key set */
    private transient KeySet<K> keySet;
    /** Lazily initialized entry set */
    private transient EntrySet<K,V> entrySet;
    /** Lazily initialized values collection */
    private transient Values<V> values;
    /** Lazily initialized descending key set */
    private transient ConcurrentNavigableMap<K,V> descendingMap;

    /**
     * Initializes or resets state. Needed by constructors, clone,
     * clear, readObject. and ConcurrentSkipListSet.clone.
     * (Note that comparator must be separately initialized.)
     */
    private void initialize() {
        keySet = null;
        entrySet = null;
        values = null;
        descendingMap = null;// 初始化一个 head索引
        head = new HeadIndex<K,V>(new Node<K,V>(null, BASE_HEADER, null),
                                  null, null, 1);
    }

    /**
     * compareAndSet head node
     */
    private boolean casHead(HeadIndex<K,V> cmp, HeadIndex<K,V> val) {
        return UNSAFE.compareAndSwapObject(this, headOffset, cmp, val);
    }

    /* ---------------- Nodes -------------- */

    /**
     * Nodes hold keys and values, and are singly linked in sorted
     * order, possibly with some intervening marker nodes. The list is
     * headed by a dummy node accessible as head.node. The value field
     * is declared only as Object because it takes special non-V
     * values for marker and header nodes.
     */
    static final class Node<K,V> {
        final K key;
        volatile Object value;
        volatile Node<K,V> next;

        /**
         * Creates a new regular node.
         */
        Node(K key, Object value, Node<K,V> next) {
            this.key = key;
            this.value = value;
            this.next = next;
        }

        /**
         * Creates a new marker node. A marker is distinguished by
         * having its value field point to itself.  Marker nodes also
         * have null keys, a fact that is exploited in a few places,
         * but this doesn't distinguish markers from the base-level
         * header node (head.node), which also has a null key.
         */
        Node(Node<K,V> next) {
            this.key = null;
            this.value = this;
            this.next = next;
        }

        /**
         * compareAndSet value field
         */
        boolean casValue(Object cmp, Object val) {
            return UNSAFE.compareAndSwapObject(this, valueOffset, cmp, val);
        }

        /**
         * compareAndSet next field
         */
        boolean casNext(Node<K,V> cmp, Node<K,V> val) {
            return UNSAFE.compareAndSwapObject(this, nextOffset, cmp, val);
        }

        /**
         * Returns true if this node is a marker. This method isn't
         * actually called in any current code checking for markers
         * because callers will have already read value field and need
         * to use that read (not another done here) and so directly
         * test if value points to node.
         *
         * @return true if this node is a marker node
         */
        boolean isMarker() {
            return value == this;
        }

        /**
         * Returns true if this node is the header of base-level list.
         * @return true if this node is header node
         */
        boolean isBaseHeader() {
            return value == BASE_HEADER;
        }

        /**
         * Tries to append a deletion marker to this node.
         * @param f the assumed current successor of this node
         * @return true if successful
         */
        boolean appendMarker(Node<K,V> f) {
            return casNext(f, new Node<K,V>(f));
        }

        /**
         * Helps out a deletion by appending marker or unlinking from
         * predecessor. This is called during traversals when value
         * field seen to be null.
         * @param b predecessor
         * @param f successor
         */
        void helpDelete(Node<K,V> b, Node<K,V> f) { // 删除这个失效节点，将后置节点挪上来。这就是一个链表的维护
            /*
             * Rechecking links and then doing only one of the
             * help-out stages per call tends to minimize CAS
             * interference among helping threads.
             */
            if (f == next && this == b.next) {
                if (f == null || f.value != f) // not already marked
                    casNext(f, new Node<K,V>(f));
                else
                    b.casNext(this, f.next);
            }
        }

        /**
         * Returns value if this node contains a valid key-value pair,
         * else null.
         * @return this node's value if it isn't a marker or header or
         * is deleted, else null
         */
        V getValidValue() {
            Object v = value;
            if (v == this || v == BASE_HEADER)
                return null;
            @SuppressWarnings("unchecked") V vv = (V)v;
            return vv;
        }

        /**
         * Creates and returns a new SimpleImmutableEntry holding current
         * mapping if this node holds a valid value, else null.
         * @return new entry or null
         */
        AbstractMap.SimpleImmutableEntry<K,V> createSnapshot() {
            Object v = value;
            if (v == null || v == this || v == BASE_HEADER)
                return null;
            @SuppressWarnings("unchecked") V vv = (V)v;
            return new AbstractMap.SimpleImmutableEntry<K,V>(key, vv);
        }

        // UNSAFE mechanics

        private static final sun.misc.Unsafe UNSAFE;
        private static final long valueOffset;
        private static final long nextOffset;

        static {
            try {
                UNSAFE = sun.misc.Unsafe.getUnsafe();
                Class<?> k = Node.class;
                valueOffset = UNSAFE.objectFieldOffset
                    (k.getDeclaredField("value"));
                nextOffset = UNSAFE.objectFieldOffset
                    (k.getDeclaredField("next"));
            } catch (Exception e) {
                throw new Error(e);
            }
        }
    }

    /* ---------------- Indexing -------------- */

    /**
     * Index nodes represent the levels of the skip list.  Note that
     * even though both Nodes and Indexes have forward-pointing
     * fields, they have different types and are handled in different
     * ways, that can't nicely be captured by placing field in a
     * shared abstract class.
     */
    static class Index<K,V> {
        final Node<K,V> node;
        final Index<K,V> down;
        volatile Index<K,V> right;

        /**
         * Creates index node with given values.
         */
        Index(Node<K,V> node, Index<K,V> down, Index<K,V> right) {
            this.node = node;
            this.down = down;
            this.right = right;
        }

        /**
         * compareAndSet right field
         */
        final boolean casRight(Index<K,V> cmp, Index<K,V> val) {
            return UNSAFE.compareAndSwapObject(this, rightOffset, cmp, val);
        }

        /**
         * Returns true if the node this indexes has been deleted.
         * @return true if indexed node is known to be deleted
         */
        final boolean indexesDeletedNode() {
            return node.value == null;
        }

        /**
         * Tries to CAS newSucc as successor.  To minimize races with
         * unlink that may lose this index node, if the node being
         * indexed is known to be deleted, it doesn't try to link in.
         * @param succ the expected current successor
         * @param newSucc the new successor
         * @return true if successful
         */
        final boolean link(Index<K,V> succ, Index<K,V> newSucc) {
            Node<K,V> n = node;
            newSucc.right = succ;
            return n.value != null && casRight(succ, newSucc);
        }

        /**
         * Tries to CAS right field to skip over apparent successor
         * succ.  Fails (forcing a retraversal by caller) if this node
         * is known to be deleted.
         * @param succ the expected current successor
         * @return true if successful
         */
        final boolean unlink(Index<K,V> succ) {
            return node.value != null && casRight(succ, succ.right);
        }

        // Unsafe mechanics
        private static final sun.misc.Unsafe UNSAFE;
        private static final long rightOffset;
        static {
            try {
                UNSAFE = sun.misc.Unsafe.getUnsafe();
                Class<?> k = Index.class;
                rightOffset = UNSAFE.objectFieldOffset
                    (k.getDeclaredField("right"));
            } catch (Exception e) {
                throw new Error(e);
            }
        }
    }

    /* ---------------- Head nodes -------------- */

    /**
     * Nodes heading each level keep track of their level.
     */
    static final class HeadIndex<K,V> extends Index<K,V> {
        final int level;
        HeadIndex(Node<K,V> node, Index<K,V> down, Index<K,V> right, int level) {
            super(node, down, right);
            this.level = level;
        }
    }

    /* ---------------- Comparison utilities -------------- */

    /**
     * Compares using comparator or natural ordering if null.
     * Called only by methods that have performed required type checks.
     */
    @SuppressWarnings({"unchecked", "rawtypes"})
    static final int cpr(Comparator c, Object x, Object y) {
        return (c != null) ? c.compare(x, y) : ((Comparable)x).compareTo(y);
    }

    /* ---------------- Traversal -------------- */

    /**
     * Returns a base-level node with key strictly less than given key,
     * or the base-level header if there is no such node.  Also
     * unlinks indexes to deleted nodes found along the way.  Callers
     * rely on this side-effect of clearing indices to deleted nodes.
     * @param key the key
     * @return a predecessor of key
     */ // 这个方法目的就是查找到，这个新数据要插入到哪个节点的后面
    private Node<K,V> findPredecessor(Object key, Comparator<? super K> cmp) {
        if (key == null)
            throw new NullPointerException(); // don't postpone errors
        for (;;) {
            for (Index<K,V> q = head, r = q.right, d;;) {// 从右边找索引
                if (r != null) { // 当前level下存在合适的index
                    Node<K,V> n = r.node;
                    K k = n.key;
                    if (n.value == null) { // 如果node的value为空，这个节点就不需要了，
                        if (!q.unlink(r))// 当前level的链表中丢弃这个节点，将链表下下一个节点顶上来
                            break;           // restart 如果没有后续节点，则重试
                        r = q.right;         // reread r // 如果有，则继续寻找当前level中右边的index
                        continue;
                    }
                    if (cpr(cmp, key, k) > 0) { // 如果当前插入的key大于查找到的key，则继续往右查找（这个比较自己定义）
                        q = r;
                        r = r.right;
                        continue;
                    }
                }
                if ((d = q.down) == null) // 找到最底层level的index
                    return q.node; // 如果本身就是最低level，则返回该节点
                q = d; // 如果还有低一个level的索引，则继续寻找
                r = d.right; // 那就继续寻找
            }
        }
    }

    /**
     * Returns node holding key or null if no such, clearing out any
     * deleted nodes seen along the way.  Repeatedly traverses at
     * base-level looking for key starting at predecessor returned
     * from findPredecessor, processing base-level deletions as
     * encountered. Some callers rely on this side-effect of clearing
     * deleted nodes.
     *
     * Restarts occur, at traversal step centered on node n, if:
     *
     *   (1) After reading n's next field, n is no longer assumed
     *       predecessor b's current successor, which means that
     *       we don't have a consistent 3-node snapshot and so cannot
     *       unlink any subsequent deleted nodes encountered.
     *
     *   (2) n's value field is null, indicating n is deleted, in
     *       which case we help out an ongoing structural deletion
     *       before retrying.  Even though there are cases where such
     *       unlinking doesn't require restart, they aren't sorted out
     *       here because doing so would not usually outweigh cost of
     *       restarting.
     *
     *   (3) n is a marker or n's predecessor's value field is null,
     *       indicating (among other possibilities) that
     *       findPredecessor returned a deleted node. We can't unlink
     *       the node because we don't know its predecessor, so rely
     *       on another call to findPredecessor to notice and return
     *       some earlier predecessor, which it will do. This check is
     *       only strictly needed at beginning of loop, (and the
     *       b.value check isn't strictly needed at all) but is done
     *       each iteration to help avoid contention with other
     *       threads by callers that will fail to be able to change
     *       links, and so will retry anyway.
     *
     * The traversal loops in doPut, doRemove, and findNear all
     * include the same three kinds of checks. And specialized
     * versions appear in findFirst, and findLast and their
     * variants. They can't easily share code because each uses the
     * reads of fields held in locals occurring in the orders they
     * were performed.
     *
     * @param key the key
     * @return node holding key, or null if no such
     */
    private Node<K,V> findNode(Object key) {
        if (key == null)
            throw new NullPointerException(); // don't postpone errors
        Comparator<? super K> cmp = comparator;
        outer: for (;;) {
            for (Node<K,V> b = findPredecessor(key, cmp), n = b.next;;) {
                Object v; int c;
                if (n == null)
                    break outer;
                Node<K,V> f = n.next;
                if (n != b.next)                // inconsistent read
                    break;
                if ((v = n.value) == null) {    // n is deleted
                    n.helpDelete(b, f);
                    break;
                }
                if (b.value == null || v == n)  // b is deleted
                    break;
                if ((c = cpr(cmp, key, n.key)) == 0)
                    return n;
                if (c < 0)
                    break outer;
                b = n;
                n = f;
            }
        }
        return null;
    }

    /**
     * Gets value for key. Almost the same as findNode, but returns
     * the found value (to avoid retries during re-reads)
     *
     * @param key the key
     * @return the value, or null if absent
     */
    private V doGet(Object key) { // 查找的过程和put过程类似，就不再赘述
        if (key == null)
            throw new NullPointerException();
        Comparator<? super K> cmp = comparator;
        outer: for (;;) {
            for (Node<K,V> b = findPredecessor(key, cmp), n = b.next;;) {
                Object v; int c;
                if (n == null)
                    break outer;
                Node<K,V> f = n.next;
                if (n != b.next)                // inconsistent read
                    break;
                if ((v = n.value) == null) {    // n is deleted
                    n.helpDelete(b, f);
                    break;
                }
                if (b.value == null || v == n)  // b is deleted
                    break;
                if ((c = cpr(cmp, key, n.key)) == 0) {
                    @SuppressWarnings("unchecked") V vv = (V)v;
                    return vv;
                }
                if (c < 0)
                    break outer;
                b = n;
                n = f;
            }
        }
        return null;
    }

    /* ---------------- Insertion -------------- */

    /**
     * Main insertion method.  Adds element if not present, or
     * replaces value if present and onlyIfAbsent is false.
     * @param key the key
     * @param value the value that must be associated with key
     * @param onlyIfAbsent if should not insert if already present
     * @return the old value, or null if newly inserted
     */
    private V doPut(K key, V value, boolean onlyIfAbsent) {
        Node<K,V> z;             // added node
        if (key == null)
            throw new NullPointerException();
        Comparator<? super K> cmp = comparator;
        outer: for (;;) {// 查找这个节点应该塞到哪一个节点后面  cas+循环，无锁，不断重试
            for (Node<K,V> b = findPredecessor(key, cmp), n = b.next;;) {
                if (n != null) { // n 代表next位置，不为空则代表已经有数据存在，应该继续寻找后续的位置
                    Object v; int c;
                    Node<K,V> f = n.next;
                    if (n != b.next)               // inconsistent read 如果next发生了变化，表示出现脏读，则退出重试
                        break;
                    if ((v = n.value) == null) {   // n is deleted // 如果next节点的内容置空了，则应该删除该节点
                        n.helpDelete(b, f);
                        break;
                    }
                    if (b.value == null || v == n) // b is deleted // 如果当前node内容置空了，则退出重试
                        break;
                    if ((c = cpr(cmp, key, n.key)) > 0) { // 比较next和当前要插入的key，如果大于next的key，则继续寻找后续的next
                        b = n;
                        n = f;
                        continue;
                    }
                    if (c == 0) { // c 比对的结果，如果为0，则代表key相等，相等则直接cas替换
                        if (onlyIfAbsent || n.casValue(v, value)) {
                            @SuppressWarnings("unchecked") V vv = (V)v;
                            return vv;
                        }
                        break; // restart if lost race to replace value
                    }
                    // else c < 0; fall through
                }
                // 如果找到了合适的前置节点
                z = new Node<K,V>(key, value, n); //
                if (!b.casNext(n, z)) // CAS 将当前数据塞到前置节点后面
                    break;         // restart if lost race to append to b // 如果失败，继续循环
                break outer;
            }
        }
        // 上面的代码，是将node插入到合适的位置。接下来就需要重构一下skiplist，判断是否需要增加level
        // Tony: 防止源码编译报错，我注释掉了后面一段
        int rnd = 0; // ThreadLocalRandom.nextSecondarySeed(); // 这里的代码是生成随机数
        if ((rnd & 0x80000001) == 0) { // test highest and lowest bits // 随机数是正偶数，则升级level
            int level = 1, max;
            while (((rnd >>>= 1) & 1) != 0) // 根据随机数计算level。从低2位开始向左有多少个连续的1
                ++level;
            Index<K,V> idx = null;
            HeadIndex<K,V> h = head;
            if (level <= (max = h.level)) {// 随机计算出来的level小于当前的level级别，不需要增加层级
                for (int i = 1; i <= level; ++i)
                    idx = new Index<K,V>(z, idx, null); // 构建一个index，归属于随机到的level
            }
            else { // try to grow by one level // 升级
                level = max + 1; // hold in array and later pick the one to use // 每次升一级
                @SuppressWarnings("unchecked")Index<K,V>[] idxs =
                    (Index<K,V>[])new Index<?,?>[level+1]; // 创建一个index集合，数量是level数量
                for (int i = 1; i <= level; ++i) // 给上面新建的数组，赋值（idxs好像没什么卵用）
                    idxs[i] = idx = new Index<K,V>(z, idx, null);
                for (;;) {
                    h = head;
                    int oldLevel = h.level;
                    if (level <= oldLevel) // 新level小于就得level，代表其他线程更新了level，此次升级失败。
                        break;
                    HeadIndex<K,V> newh = h;
                    Node<K,V> oldbase = h.node;
                    for (int j = oldLevel+1; j <= level; ++j)
                        newh = new HeadIndex<K,V>(oldbase, newh, idxs[j], j); // 生成一个新的headIndex。最高level
                    if (casHead(h, newh)) { // 将head引用到新的index
                        h = newh;
                        idx = idxs[level = oldLevel];
                        break;
                    }
                }
            }
            // find insertion points and splice in         //将新的Index插入对应level链表上
            splice: for (int insertionLevel = level;;) {
                int j = h.level;
                for (Index<K,V> q = h, r = q.right, t = idx;;) {// 从head index开始找位置
                    if (q == null || t == null)
                        break splice;
                    if (r != null) { // 比对，找到level中合适的节点进行插入
                        Node<K,V> n = r.node;
                        // compare before deletion check avoids needing recheck
                        int c = cpr(cmp, key, n.key);
                        if (n.value == null) {
                            if (!q.unlink(r))
                                break;
                            r = q.right;
                            continue;
                        }
                        if (c > 0) {
                            q = r;
                            r = r.right;
                            continue;
                        }
                    }

                    if (j == insertionLevel) {
                        if (!q.link(r, t))
                            break; // restart
                        if (t.node.value == null) {
                            findNode(key);
                            break splice;
                        }
                        if (--insertionLevel == 0)
                            break splice;
                    }

                    if (--j >= insertionLevel && j < level)
                        t = t.down;
                    q = q.down;
                    r = q.right;
                }
            }
        }
        return null;
    }

    /* ---------------- Deletion -------------- */

    /**
     * Main deletion method. Locates node, nulls value, appends a
     * deletion marker, unlinks predecessor, removes associated index
     * nodes, and possibly reduces head index level.
     *
     * Index nodes are cleared out simply by calling findPredecessor.
     * which unlinks indexes to deleted nodes found along path to key,
     * which will include the indexes to this node.  This is done
     * unconditionally. We can't check beforehand whether there are
     * index nodes because it might be the case that some or all
     * indexes hadn't been inserted yet for this node during initial
     * search for it, and we'd like to ensure lack of garbage
     * retention, so must call to be sure.
     *
     * @param key the key
     * @param value if non-null, the value that must be
     * associated with key
     * @return the node, or null if not found
     */
    final V doRemove(Object key, Object value) {
        if (key == null)
            throw new NullPointerException();
        Comparator<? super K> cmp = comparator;
        outer: for (;;) {
            for (Node<K,V> b = findPredecessor(key, cmp), n = b.next;;) {
                Object v; int c;
                if (n == null)
                    break outer;
                Node<K,V> f = n.next;
                if (n != b.next)                    // inconsistent read
                    break;
                if ((v = n.value) == null) {        // n is deleted
                    n.helpDelete(b, f);
                    break;
                }
                if (b.value == null || v == n)      // b is deleted
                    break;
                if ((c = cpr(cmp, key, n.key)) < 0)
                    break outer;
                if (c > 0) {
                    b = n;
                    n = f;
                    continue;
                }
                if (value != null && !value.equals(v))
                    break outer;
                if (!n.casValue(v, null))
                    break;
                if (!n.appendMarker(f) || !b.casNext(n, f))
                    findNode(key);                  // retry via findNode
                else {
                    findPredecessor(key, cmp);      // clean index
                    if (head.right == null)
                        tryReduceLevel();
                }
                @SuppressWarnings("unchecked") V vv = (V)v;
                return vv;
            }
        }
        return null;
    }

    /**
     * Possibly reduce head level if it has no nodes.  This method can
     * (rarely) make mistakes, in which case levels can disappear even
     * though they are about to contain index nodes. This impacts
     * performance, not correctness.  To minimize mistakes as well as
     * to reduce hysteresis, the level is reduced by one only if the
     * topmost three levels look empty. Also, if the removed level
     * looks non-empty after CAS, we try to change it back quick
     * before anyone notices our mistake! (This trick works pretty
     * well because this method will practically never make mistakes
     * unless current thread stalls immediately before first CAS, in
     * which case it is very unlikely to stall again immediately
     * afterwards, so will recover.)
     *
     * We put up with all this rather than just let levels grow
     * because otherwise, even a small map that has undergone a large
     * number of insertions and removals will have a lot of levels,
     * slowing down access more than would an occasional unwanted
     * reduction.
     */
    private void tryReduceLevel() {
        HeadIndex<K,V> h = head;
        HeadIndex<K,V> d;
        HeadIndex<K,V> e;
        if (h.level > 3 &&
            (d = (HeadIndex<K,V>)h.down) != null &&
            (e = (HeadIndex<K,V>)d.down) != null &&
            e.right == null &&
            d.right == null &&
            h.right == null &&
            casHead(h, d) && // try to set
            h.right != null) // recheck
            casHead(d, h);   // try to backout
    }

    /* ---------------- Finding and removing first element -------------- */

    /**
     * Specialized variant of findNode to get first valid node.
     * @return first node or null if empty
     */
    final Node<K,V> findFirst() {
        for (Node<K,V> b, n;;) {
            if ((n = (b = head.node).next) == null)
                return null;
            if (n.value != null)
                return n;
            n.helpDelete(b, n.next);
        }
    }

    /**
     * Removes first entry; returns its snapshot.
     * @return null if empty, else snapshot of first entry
     */
    private Map.Entry<K,V> doRemoveFirstEntry() {
        for (Node<K,V> b, n;;) {
            if ((n = (b = head.node).next) == null)
                return null;
            Node<K,V> f = n.next;
            if (n != b.next)
                continue;
            Object v = n.value;
            if (v == null) {
                n.helpDelete(b, f);
                continue;
            }
            if (!n.casValue(v, null))
                continue;
            if (!n.appendMarker(f) || !b.casNext(n, f))
                findFirst(); // retry
            clearIndexToFirst();
            @SuppressWarnings("unchecked") V vv = (V)v;
            return new AbstractMap.SimpleImmutableEntry<K,V>(n.key, vv);
        }
    }

    /**
     * Clears out index nodes associated with deleted first entry.
     */
    private void clearIndexToFirst() {
        for (;;) {
            for (Index<K,V> q = head;;) {
                Index<K,V> r = q.right;
                if (r != null && r.indexesDeletedNode() && !q.unlink(r))
                    break;
                if ((q = q.down) == null) {
                    if (head.right == null)
                        tryReduceLevel();
                    return;
                }
            }
        }
    }

    /**
     * Removes last entry; returns its snapshot.
     * Specialized variant of doRemove.
     * @return null if empty, else snapshot of last entry
     */
    private Map.Entry<K,V> doRemoveLastEntry() {
        for (;;) {
            Node<K,V> b = findPredecessorOfLast();
            Node<K,V> n = b.next;
            if (n == null) {
                if (b.isBaseHeader())               // empty
                    return null;
                else
                    continue; // all b's successors are deleted; retry
            }
            for (;;) {
                Node<K,V> f = n.next;
                if (n != b.next)                    // inconsistent read
                    break;
                Object v = n.value;
                if (v == null) {                    // n is deleted
                    n.helpDelete(b, f);
                    break;
                }
                if (b.value == null || v == n)      // b is deleted
                    break;
                if (f != null) {
                    b = n;
                    n = f;
                    continue;
                }
                if (!n.casValue(v, null))
                    break;
                K key = n.key;
                if (!n.appendMarker(f) || !b.casNext(n, f))
                    findNode(key);                  // retry via findNode
                else {                              // clean index
                    findPredecessor(key, comparator);
                    if (head.right == null)
                        tryReduceLevel();
                }
                @SuppressWarnings("unchecked") V vv = (V)v;
                return new AbstractMap.SimpleImmutableEntry<K,V>(key, vv);
            }
        }
    }

    /* ---------------- Finding and removing last element -------------- */

    /**
     * Specialized version of find to get last valid node.
     * @return last node or null if empty
     */
    final Node<K,V> findLast() {
        /*
         * findPredecessor can't be used to traverse index level
         * because this doesn't use comparisons.  So traversals of
         * both levels are folded together.
         */
        Index<K,V> q = head;
        for (;;) {
            Index<K,V> d, r;
            if ((r = q.right) != null) {
                if (r.indexesDeletedNode()) {
                    q.unlink(r);
                    q = head; // restart
                }
                else
                    q = r;
            } else if ((d = q.down) != null) {
                q = d;
            } else {
                for (Node<K,V> b = q.node, n = b.next;;) {
                    if (n == null)
                        return b.isBaseHeader() ? null : b;
                    Node<K,V> f = n.next;            // inconsistent read
                    if (n != b.next)
                        break;
                    Object v = n.value;
                    if (v == null) {                 // n is deleted
                        n.helpDelete(b, f);
                        break;
                    }
                    if (b.value == null || v == n)      // b is deleted
                        break;
                    b = n;
                    n = f;
                }
                q = head; // restart
            }
        }
    }

    /**
     * Specialized variant of findPredecessor to get predecessor of last
     * valid node.  Needed when removing the last entry.  It is possible
     * that all successors of returned node will have been deleted upon
     * return, in which case this method can be retried.
     * @return likely predecessor of last node
     */
    private Node<K,V> findPredecessorOfLast() {
        for (;;) {
            for (Index<K,V> q = head;;) {
                Index<K,V> d, r;
                if ((r = q.right) != null) {
                    if (r.indexesDeletedNode()) {
                        q.unlink(r);
                        break;    // must restart
                    }
                    // proceed as far across as possible without overshooting
                    if (r.node.next != null) {
                        q = r;
                        continue;
                    }
                }
                if ((d = q.down) != null)
                    q = d;
                else
                    return q.node;
            }
        }
    }

    /* ---------------- Relational operations -------------- */

    // Control values OR'ed as arguments to findNear

    private static final int EQ = 1;
    private static final int LT = 2;
    private static final int GT = 0; // Actually checked as !LT

    /**
     * Utility for ceiling, floor, lower, higher methods.
     * @param key the key
     * @param rel the relation -- OR'ed combination of EQ, LT, GT
     * @return nearest node fitting relation, or null if no such
     */
    final Node<K,V> findNear(K key, int rel, Comparator<? super K> cmp) {
        if (key == null)
            throw new NullPointerException();
        for (;;) {
            for (Node<K,V> b = findPredecessor(key, cmp), n = b.next;;) {
                Object v;
                if (n == null)
                    return ((rel & LT) == 0 || b.isBaseHeader()) ? null : b;
                Node<K,V> f = n.next;
                if (n != b.next)                  // inconsistent read
                    break;
                if ((v = n.value) == null) {      // n is deleted
                    n.helpDelete(b, f);
                    break;
                }
                if (b.value == null || v == n)      // b is deleted
                    break;
                int c = cpr(cmp, key, n.key);
                if ((c == 0 && (rel & EQ) != 0) ||
                    (c <  0 && (rel & LT) == 0))
                    return n;
                if ( c <= 0 && (rel & LT) != 0)
                    return b.isBaseHeader() ? null : b;
                b = n;
                n = f;
            }
        }
    }

    /**
     * Returns SimpleImmutableEntry for results of findNear.
     * @param key the key
     * @param rel the relation -- OR'ed combination of EQ, LT, GT
     * @return Entry fitting relation, or null if no such
     */
    final AbstractMap.SimpleImmutableEntry<K,V> getNear(K key, int rel) {
        Comparator<? super K> cmp = comparator;
        for (;;) {
            Node<K,V> n = findNear(key, rel, cmp);
            if (n == null)
                return null;
            AbstractMap.SimpleImmutableEntry<K,V> e = n.createSnapshot();
            if (e != null)
                return e;
        }
    }

    /* ---------------- Constructors -------------- */

    /**
     * Constructs a new, empty map, sorted according to the
     * {@linkplain Comparable natural ordering} of the keys.
     */
    public ConcurrentSkipListMap() {
        this.comparator = null;
        initialize();
    }

    /**
     * Constructs a new, empty map, sorted according to the specified
     * comparator.
     *
     * @param comparator the comparator that will be used to order this map.
     *        If {@code null}, the {@linkplain Comparable natural
     *        ordering} of the keys will be used.
     */
    public ConcurrentSkipListMap(Comparator<? super K> comparator) {
        this.comparator = comparator;
        initialize();
    }

    /**
     * Constructs a new map containing the same mappings as the given map,
     * sorted according to the {@linkplain Comparable natural ordering} of
     * the keys.
     *
     * @param  m the map whose mappings are to be placed in this map
     * @throws ClassCastException if the keys in {@code m} are not
     *         {@link Comparable}, or are not mutually comparable
     * @throws NullPointerException if the specified map or any of its keys
     *         or values are null
     */
    public ConcurrentSkipListMap(Map<? extends K, ? extends V> m) {
        this.comparator = null;
        initialize();
        putAll(m);
    }

    /**
     * Constructs a new map containing the same mappings and using the
     * same ordering as the specified sorted map.
     *
     * @param m the sorted map whose mappings are to be placed in this
     *        map, and whose comparator is to be used to sort this map
     * @throws NullPointerException if the specified sorted map or any of
     *         its keys or values are null
     */
    public ConcurrentSkipListMap(SortedMap<K, ? extends V> m) {
        this.comparator = m.comparator();
        initialize();
        buildFromSorted(m);
    }

    /**
     * Returns a shallow copy of this {@code ConcurrentSkipListMap}
     * instance. (The keys and values themselves are not cloned.)
     *
     * @return a shallow copy of this map
     */
    public ConcurrentSkipListMap<K,V> clone() {
        try {
            @SuppressWarnings("unchecked")
            ConcurrentSkipListMap<K,V> clone =
                (ConcurrentSkipListMap<K,V>) super.clone();
            clone.initialize();
            clone.buildFromSorted(this);
            return clone;
        } catch (CloneNotSupportedException e) {
            throw new InternalError();
        }
    }

    /**
     * Streamlined bulk insertion to initialize from elements of
     * given sorted map.  Call only from constructor or clone
     * method.
     */
    private void buildFromSorted(SortedMap<K, ? extends V> map) {
        if (map == null)
            throw new NullPointerException();

        HeadIndex<K,V> h = head;
        Node<K,V> basepred = h.node;

        // Track the current rightmost node at each level. Uses an
        // ArrayList to avoid committing to initial or maximum level.
        ArrayList<Index<K,V>> preds = new ArrayList<Index<K,V>>();

        // initialize
        for (int i = 0; i <= h.level; ++i)
            preds.add(null);
        Index<K,V> q = h;
        for (int i = h.level; i > 0; --i) {
            preds.set(i, q);
            q = q.down;
        }

        Iterator<? extends Map.Entry<? extends K, ? extends V>> it =
            map.entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry<? extends K, ? extends V> e = it.next();
            int rnd = ThreadLocalRandom.current().nextInt();
            int j = 0;
            if ((rnd & 0x80000001) == 0) {
                do {
                    ++j;
                } while (((rnd >>>= 1) & 1) != 0);
                if (j > h.level) j = h.level + 1;
            }
            K k = e.getKey();
            V v = e.getValue();
            if (k == null || v == null)
                throw new NullPointerException();
            Node<K,V> z = new Node<K,V>(k, v, null);
            basepred.next = z;
            basepred = z;
            if (j > 0) {
                Index<K,V> idx = null;
                for (int i = 1; i <= j; ++i) {
                    idx = new Index<K,V>(z, idx, null);
                    if (i > h.level)
                        h = new HeadIndex<K,V>(h.node, h, idx, i);

                    if (i < preds.size()) {
                        preds.get(i).right = idx;
                        preds.set(i, idx);
                    } else
                        preds.add(idx);
                }
            }
        }
        head = h;
    }

    /* ---------------- Serialization -------------- */

    /**
     * Saves this map to a stream (that is, serializes it).
     *
     * @param s the stream
     * @throws java.io.IOException if an I/O error occurs
     * @serialData The key (Object) and value (Object) for each
     * key-value mapping represented by the map, followed by
     * {@code null}. The key-value mappings are emitted in key-order
     * (as determined by the Comparator, or by the keys' natural
     * ordering if no Comparator).
     */
    private void writeObject(java.io.ObjectOutputStream s)
        throws java.io.IOException {
        // Write out the Comparator and any hidden stuff
        s.defaultWriteObject();

        // Write out keys and values (alternating)
        for (Node<K,V> n = findFirst(); n != null; n = n.next) {
            V v = n.getValidValue();
            if (v != null) {
                s.writeObject(n.key);
                s.writeObject(v);
            }
        }
        s.writeObject(null);
    }

    /**
     * Reconstitutes this map from a stream (that is, deserializes it).
     * @param s the stream
     * @throws ClassNotFoundException if the class of a serialized object
     *         could not be found
     * @throws java.io.IOException if an I/O error occurs
     */
    @SuppressWarnings("unchecked")
    private void readObject(final java.io.ObjectInputStream s)
        throws java.io.IOException, ClassNotFoundException {
        // Read in the Comparator and any hidden stuff
        s.defaultReadObject();
        // Reset transients
        initialize();

        /*
         * This is nearly identical to buildFromSorted, but is
         * distinct because readObject calls can't be nicely adapted
         * as the kind of iterator needed by buildFromSorted. (They
         * can be, but doing so requires type cheats and/or creation
         * of adaptor classes.) It is simpler to just adapt the code.
         */

        HeadIndex<K,V> h = head;
        Node<K,V> basepred = h.node;
        ArrayList<Index<K,V>> preds = new ArrayList<Index<K,V>>();
        for (int i = 0; i <= h.level; ++i)
            preds.add(null);
        Index<K,V> q = h;
        for (int i = h.level; i > 0; --i) {
            preds.set(i, q);
            q = q.down;
        }

        for (;;) {
            Object k = s.readObject();
            if (k == null)
                break;
            Object v = s.readObject();
            if (v == null)
                throw new NullPointerException();
            K key = (K) k;
            V val = (V) v;
            int rnd = ThreadLocalRandom.current().nextInt();
            int j = 0;
            if ((rnd & 0x80000001) == 0) {
                do {
                    ++j;
                } while (((rnd >>>= 1) & 1) != 0);
                if (j > h.level) j = h.level + 1;
            }
            Node<K,V> z = new Node<K,V>(key, val, null);
            basepred.next = z;
            basepred = z;
            if (j > 0) {
                Index<K,V> idx = null;
                for (int i = 1; i <= j; ++i) {
                    idx = new Index<K,V>(z, idx, null);
                    if (i > h.level)
                        h = new HeadIndex<K,V>(h.node, h, idx, i);

                    if (i < preds.size()) {
                        preds.get(i).right = idx;
                        preds.set(i, idx);
                    } else
                        preds.add(idx);
                }
            }
        }
        head = h;
    }

    /* ------ Map API methods ------ */

    /**
     * Returns {@code true} if this map contains a mapping for the specified
     * key.
     *
     * @param key key whose presence in this map is to be tested
     * @return {@code true} if this map contains a mapping for the specified key
     * @throws ClassCastException if the specified key cannot be compared
     *         with the keys currently in the map
     * @throws NullPointerException if the specified key is null
     */
    public boolean containsKey(Object key) {
        return doGet(key) != null;
    }

    /**
     * Returns the value to which the specified key is mapped,
     * or {@code null} if this map contains no mapping for the key.
     *
     * <p>More formally, if this map contains a mapping from a key
     * {@code k} to a value {@code v} such that {@code key} compares
     * equal to {@code k} according to the map's ordering, then this
     * method returns {@code v}; otherwise it returns {@code null}.
     * (There can be at most one such mapping.)
     *
     * @throws ClassCastException if the specified key cannot be compared
     *         with the keys currently in the map
     * @throws NullPointerException if the specified key is null
     */
    public V get(Object key) {
        return doGet(key);
    }

    /**
     * Returns the value to which the specified key is mapped,
     * or the given defaultValue if this map contains no mapping for the key.
     *
     * @param key the key
     * @param defaultValue the value to return if this map contains
     * no mapping for the given key
     * @return the mapping for the key, if present; else the defaultValue
     * @throws NullPointerException if the specified key is null
     * @since 1.8
     */
    public V getOrDefault(Object key, V defaultValue) {
        V v;
        return (v = doGet(key)) == null ? defaultValue : v;
    }

    /**
     * Associates the specified value with the specified key in this map.
     * If the map previously contained a mapping for the key, the old
     * value is replaced.
     *
     * @param key key with which the specified value is to be associated
     * @param value value to be associated with the specified key
     * @return the previous value associated with the specified key, or
     *         {@code null} if there was no mapping for the key
     * @throws ClassCastException if the specified key cannot be compared
     *         with the keys currently in the map
     * @throws NullPointerException if the specified key or value is null
     */
    public V put(K key, V value) {
        if (value == null)
            throw new NullPointerException();
        return doPut(key, value, false);
    }

    /**
     * Removes the mapping for the specified key from this map if present.
     *
     * @param  key key for which mapping should be removed
     * @return the previous value associated with the specified key, or
     *         {@code null} if there was no mapping for the key
     * @throws ClassCastException if the specified key cannot be compared
     *         with the keys currently in the map
     * @throws NullPointerException if the specified key is null
     */
    public V remove(Object key) {
        return doRemove(key, null);
    }

    /**
     * Returns {@code true} if this map maps one or more keys to the
     * specified value.  This operation requires time linear in the
     * map size. Additionally, it is possible for the map to change
     * during execution of this method, in which case the returned
     * result may be inaccurate.
     *
     * @param value value whose presence in this map is to be tested
     * @return {@code true} if a mapping to {@code value} exists;
     *         {@code false} otherwise
     * @throws NullPointerException if the specified value is null
     */
    public boolean containsValue(Object value) {
        if (value == null)
            throw new NullPointerException();
        for (Node<K,V> n = findFirst(); n != null; n = n.next) {
            V v = n.getValidValue();
            if (v != null && value.equals(v))
                return true;
        }
        return false;
    }

    /**
     * Returns the number of key-value mappings in this map.  If this map
     * contains more than {@code Integer.MAX_VALUE} elements, it
     * returns {@code Integer.MAX_VALUE}.
     *
     * <p>Beware that, unlike in most collections, this method is
     * <em>NOT</em> a constant-time operation. Because of the
     * asynchronous nature of these maps, determining the current
     * number of elements requires traversing them all to count them.
     * Additionally, it is possible for the size to change during
     * execution of this method, in which case the returned result
     * will be inaccurate. Thus, this method is typically not very
     * useful in concurrent applications.
     *
     * @return the number of elements in this map
     */
    public int size() {
        long count = 0;
        for (Node<K,V> n = findFirst(); n != null; n = n.next) {
            if (n.getValidValue() != null)
                ++count;
        }
        return (count >= Integer.MAX_VALUE) ? Integer.MAX_VALUE : (int) count;
    }

    /**
     * Returns {@code true} if this map contains no key-value mappings.
     * @return {@code true} if this map contains no key-value mappings
     */
    public boolean isEmpty() {
        return findFirst() == null;
    }

    /**
     * Removes all of the mappings from this map.
     */
    public void clear() {
        initialize();
    }

    /**
     * If the specified key is not already associated with a value,
     * attempts to compute its value using the given mapping function
     * and enters it into this map unless {@code null}.  The function
     * is <em>NOT</em> guaranteed to be applied once atomically only
     * if the value is not present.
     *
     * @param key key with which the specified value is to be associated
     * @param mappingFunction the function to compute a value
     * @return the current (existing or computed) value associated with
     *         the specified key, or null if the computed value is null
     * @throws NullPointerException if the specified key is null
     *         or the mappingFunction is null
     * @since 1.8
     */
    public V computeIfAbsent(K key,
                             Function<? super K, ? extends V> mappingFunction) {
        if (key == null || mappingFunction == null)
            throw new NullPointerException();
        V v, p, r;
        if ((v = doGet(key)) == null &&
            (r = mappingFunction.apply(key)) != null)
            v = (p = doPut(key, r, true)) == null ? r : p;
        return v;
    }

    /**
     * If the value for the specified key is present, attempts to
     * compute a new mapping given the key and its current mapped
     * value. The function is <em>NOT</em> guaranteed to be applied
     * once atomically.
     *
     * @param key key with which a value may be associated
     * @param remappingFunction the function to compute a value
     * @return the new value associated with the specified key, or null if none
     * @throws NullPointerException if the specified key is null
     *         or the remappingFunction is null
     * @since 1.8
     */
    public V computeIfPresent(K key,
                              BiFunction<? super K, ? super V, ? extends V> remappingFunction) {
        if (key == null || remappingFunction == null)
            throw new NullPointerException();
        Node<K,V> n; Object v;
        while ((n = findNode(key)) != null) {
            if ((v = n.value) != null) {
                @SuppressWarnings("unchecked") V vv = (V) v;
                V r = remappingFunction.apply(key, vv);
                if (r != null) {
                    if (n.casValue(vv, r))
                        return r;
                }
                else if (doRemove(key, vv) != null)
                    break;
            }
        }
        return null;
    }

    /**
     * Attempts to compute a mapping for the specified key and its
     * current mapped value (or {@code null} if there is no current
     * mapping). The function is <em>NOT</em> guaranteed to be applied
     * once atomically.
     *
     * @param key key with which the specified value is to be associated
     * @param remappingFunction the function to compute a value
     * @return the new value associated with the specified key, or null if none
     * @throws NullPointerException if the specified key is null
     *         or the remappingFunction is null
     * @since 1.8
     */
    public V compute(K key,
                     BiFunction<? super K, ? super V, ? extends V> remappingFunction) {
        if (key == null || remappingFunction == null)
            throw new NullPointerException();
        for (;;) {
            Node<K,V> n; Object v; V r;
            if ((n = findNode(key)) == null) {
                if ((r = remappingFunction.apply(key, null)) == null)
                    break;
                if (doPut(key, r, true) == null)
                    return r;
            }
            else if ((v = n.value) != null) {
                @SuppressWarnings("unchecked") V vv = (V) v;
                if ((r = remappingFunction.apply(key, vv)) != null) {
                    if (n.casValue(vv, r))
                        return r;
                }
                else if (doRemove(key, vv) != null)
                    break;
            }
        }
        return null;
    }

    /**
     * If the specified key is not already associated with a value,
     * associates it with the given value.  Otherwise, replaces the
     * value with the results of the given remapping function, or
     * removes if {@code null}. The function is <em>NOT</em>
     * guaranteed to be applied once atomically.
     *
     * @param key key with which the specified value is to be associated
     * @param value the value to use if absent
     * @param remappingFunction the function to recompute a value if present
     * @return the new value associated with the specified key, or null if none
     * @throws NullPointerException if the specified key or value is null
     *         or the remappingFunction is null
     * @since 1.8
     */
    public V merge(K key, V value,
                   BiFunction<? super V, ? super V, ? extends V> remappingFunction) {
        if (key == null || value == null || remappingFunction == null)
            throw new NullPointerException();
        for (;;) {
            Node<K,V> n; Object v; V r;
            if ((n = findNode(key)) == null) {
                if (doPut(key, value, true) == null)
                    return value;
            }
            else if ((v = n.value) != null) {
                @SuppressWarnings("unchecked") V vv = (V) v;
                if ((r = remappingFunction.apply(vv, value)) != null) {
                    if (n.casValue(vv, r))
                        return r;
                }
                else if (doRemove(key, vv) != null)
                    return null;
            }
        }
    }

    /* ---------------- View methods -------------- */

    /*
     * Note: Lazy initialization works for views because view classes
     * are stateless/immutable so it doesn't matter wrt correctness if
     * more than one is created (which will only rarely happen).  Even
     * so, the following idiom conservatively ensures that the method
     * returns the one it created if it does so, not one created by
     * another racing thread.
     */

    /**
     * Returns a {@link NavigableSet} view of the keys contained in this map.
     *
     * <p>The set's iterator returns the keys in ascending order.
     * The set's spliterator additionally reports {@link Spliterator#CONCURRENT},
     * {@link Spliterator#NONNULL}, {@link Spliterator#SORTED} and
     * {@link Spliterator#ORDERED}, with an encounter order that is ascending
     * key order.  The spliterator's comparator (see
     * {@link java.util.Spliterator#getComparator()}) is {@code null} if
     * the map's comparator (see {@link #comparator()}) is {@code null}.
     * Otherwise, the spliterator's comparator is the same as or imposes the
     * same total ordering as the map's comparator.
     *
     * <p>The set is backed by the map, so changes to the map are
     * reflected in the set, and vice-versa.  The set supports element
     * removal, which removes the corresponding mapping from the map,
     * via the {@code Iterator.remove}, {@code Set.remove},
     * {@code removeAll}, {@code retainAll}, and {@code clear}
     * operations.  It does not support the {@code add} or {@code addAll}
     * operations.
     *
     * <p>The view's iterators and spliterators are
     * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
     *
     * <p>This method is equivalent to method {@code navigableKeySet}.
     *
     * @return a navigable set view of the keys in this map
     */
    public NavigableSet<K> keySet() {
        KeySet<K> ks = keySet;
        return (ks != null) ? ks : (keySet = new KeySet<K>(this));
    }

    public NavigableSet<K> navigableKeySet() {
        KeySet<K> ks = keySet;
        return (ks != null) ? ks : (keySet = new KeySet<K>(this));
    }

    /**
     * Returns a {@link Collection} view of the values contained in this map.
     * <p>The collection's iterator returns the values in ascending order
     * of the corresponding keys. The collections's spliterator additionally
     * reports {@link Spliterator#CONCURRENT}, {@link Spliterator#NONNULL} and
     * {@link Spliterator#ORDERED}, with an encounter order that is ascending
     * order of the corresponding keys.
     *
     * <p>The collection is backed by the map, so changes to the map are
     * reflected in the collection, and vice-versa.  The collection
     * supports element removal, which removes the corresponding
     * mapping from the map, via the {@code Iterator.remove},
     * {@code Collection.remove}, {@code removeAll},
     * {@code retainAll} and {@code clear} operations.  It does not
     * support the {@code add} or {@code addAll} operations.
     *
     * <p>The view's iterators and spliterators are
     * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
     */
    public Collection<V> values() {
        Values<V> vs = values;
        return (vs != null) ? vs : (values = new Values<V>(this));
    }

    /**
     * Returns a {@link Set} view of the mappings contained in this map.
     *
     * <p>The set's iterator returns the entries in ascending key order.  The
     * set's spliterator additionally reports {@link Spliterator#CONCURRENT},
     * {@link Spliterator#NONNULL}, {@link Spliterator#SORTED} and
     * {@link Spliterator#ORDERED}, with an encounter order that is ascending
     * key order.
     *
     * <p>The set is backed by the map, so changes to the map are
     * reflected in the set, and vice-versa.  The set supports element
     * removal, which removes the corresponding mapping from the map,
     * via the {@code Iterator.remove}, {@code Set.remove},
     * {@code removeAll}, {@code retainAll} and {@code clear}
     * operations.  It does not support the {@code add} or
     * {@code addAll} operations.
     *
     * <p>The view's iterators and spliterators are
     * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
     *
     * <p>The {@code Map.Entry} elements traversed by the {@code iterator}
     * or {@code spliterator} do <em>not</em> support the {@code setValue}
     * operation.
     *
     * @return a set view of the mappings contained in this map,
     *         sorted in ascending key order
     */
    public Set<Map.Entry<K,V>> entrySet() {
        EntrySet<K,V> es = entrySet;
        return (es != null) ? es : (entrySet = new EntrySet<K,V>(this));
    }

    public ConcurrentNavigableMap<K,V> descendingMap() {
        ConcurrentNavigableMap<K,V> dm = descendingMap;
        return (dm != null) ? dm : (descendingMap = new SubMap<K,V>
                                    (this, null, false, null, false, true));
    }

    public NavigableSet<K> descendingKeySet() {
        return descendingMap().navigableKeySet();
    }

    /* ---------------- AbstractMap Overrides -------------- */

    /**
     * Compares the specified object with this map for equality.
     * Returns {@code true} if the given object is also a map and the
     * two maps represent the same mappings.  More formally, two maps
     * {@code m1} and {@code m2} represent the same mappings if
     * {@code m1.entrySet().equals(m2.entrySet())}.  This
     * operation may return misleading results if either map is
     * concurrently modified during execution of this method.
     *
     * @param o object to be compared for equality with this map
     * @return {@code true} if the specified object is equal to this map
     */
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Map))
            return false;
        Map<?,?> m = (Map<?,?>) o;
        try {
            for (Map.Entry<K,V> e : this.entrySet())
                if (! e.getValue().equals(m.get(e.getKey())))
                    return false;
            for (Map.Entry<?,?> e : m.entrySet()) {
                Object k = e.getKey();
                Object v = e.getValue();
                if (k == null || v == null || !v.equals(get(k)))
                    return false;
            }
            return true;
        } catch (ClassCastException unused) {
            return false;
        } catch (NullPointerException unused) {
            return false;
        }
    }

    /* ------ ConcurrentMap API methods ------ */

    /**
     * {@inheritDoc}
     *
     * @return the previous value associated with the specified key,
     *         or {@code null} if there was no mapping for the key
     * @throws ClassCastException if the specified key cannot be compared
     *         with the keys currently in the map
     * @throws NullPointerException if the specified key or value is null
     */
    public V putIfAbsent(K key, V value) {
        if (value == null)
            throw new NullPointerException();
        return doPut(key, value, true);
    }

    /**
     * {@inheritDoc}
     *
     * @throws ClassCastException if the specified key cannot be compared
     *         with the keys currently in the map
     * @throws NullPointerException if the specified key is null
     */
    public boolean remove(Object key, Object value) {
        if (key == null)
            throw new NullPointerException();
        return value != null && doRemove(key, value) != null;
    }

    /**
     * {@inheritDoc}
     *
     * @throws ClassCastException if the specified key cannot be compared
     *         with the keys currently in the map
     * @throws NullPointerException if any of the arguments are null
     */
    public boolean replace(K key, V oldValue, V newValue) {
        if (key == null || oldValue == null || newValue == null)
            throw new NullPointerException();
        for (;;) {
            Node<K,V> n; Object v;
            if ((n = findNode(key)) == null)
                return false;
            if ((v = n.value) != null) {
                if (!oldValue.equals(v))
                    return false;
                if (n.casValue(v, newValue))
                    return true;
            }
        }
    }

    /**
     * {@inheritDoc}
     *
     * @return the previous value associated with the specified key,
     *         or {@code null} if there was no mapping for the key
     * @throws ClassCastException if the specified key cannot be compared
     *         with the keys currently in the map
     * @throws NullPointerException if the specified key or value is null
     */
    public V replace(K key, V value) {
        if (key == null || value == null)
            throw new NullPointerException();
        for (;;) {
            Node<K,V> n; Object v;
            if ((n = findNode(key)) == null)
                return null;
            if ((v = n.value) != null && n.casValue(v, value)) {
                @SuppressWarnings("unchecked") V vv = (V)v;
                return vv;
            }
        }
    }

    /* ------ SortedMap API methods ------ */

    public Comparator<? super K> comparator() {
        return comparator;
    }

    /**
     * @throws NoSuchElementException {@inheritDoc}
     */
    public K firstKey() {
        Node<K,V> n = findFirst();
        if (n == null)
            throw new NoSuchElementException();
        return n.key;
    }

    /**
     * @throws NoSuchElementException {@inheritDoc}
     */
    public K lastKey() {
        Node<K,V> n = findLast();
        if (n == null)
            throw new NoSuchElementException();
        return n.key;
    }

    /**
     * @throws ClassCastException {@inheritDoc}
     * @throws NullPointerException if {@code fromKey} or {@code toKey} is null
     * @throws IllegalArgumentException {@inheritDoc}
     */
    public ConcurrentNavigableMap<K,V> subMap(K fromKey,
                                              boolean fromInclusive,
                                              K toKey,
                                              boolean toInclusive) {
        if (fromKey == null || toKey == null)
            throw new NullPointerException();
        return new SubMap<K,V>
            (this, fromKey, fromInclusive, toKey, toInclusive, false);
    }

    /**
     * @throws ClassCastException {@inheritDoc}
     * @throws NullPointerException if {@code toKey} is null
     * @throws IllegalArgumentException {@inheritDoc}
     */
    public ConcurrentNavigableMap<K,V> headMap(K toKey,
                                               boolean inclusive) {
        if (toKey == null)
            throw new NullPointerException();
        return new SubMap<K,V>
            (this, null, false, toKey, inclusive, false);
    }

    /**
     * @throws ClassCastException {@inheritDoc}
     * @throws NullPointerException if {@code fromKey} is null
     * @throws IllegalArgumentException {@inheritDoc}
     */
    public ConcurrentNavigableMap<K,V> tailMap(K fromKey,
                                               boolean inclusive) {
        if (fromKey == null)
            throw new NullPointerException();
        return new SubMap<K,V>
            (this, fromKey, inclusive, null, false, false);
    }

    /**
     * @throws ClassCastException {@inheritDoc}
     * @throws NullPointerException if {@code fromKey} or {@code toKey} is null
     * @throws IllegalArgumentException {@inheritDoc}
     */
    public ConcurrentNavigableMap<K,V> subMap(K fromKey, K toKey) {
        return subMap(fromKey, true, toKey, false);
    }

    /**
     * @throws ClassCastException {@inheritDoc}
     * @throws NullPointerException if {@code toKey} is null
     * @throws IllegalArgumentException {@inheritDoc}
     */
    public ConcurrentNavigableMap<K,V> headMap(K toKey) {
        return headMap(toKey, false);
    }

    /**
     * @throws ClassCastException {@inheritDoc}
     * @throws NullPointerException if {@code fromKey} is null
     * @throws IllegalArgumentException {@inheritDoc}
     */
    public ConcurrentNavigableMap<K,V> tailMap(K fromKey) {
        return tailMap(fromKey, true);
    }

    /* ---------------- Relational operations -------------- */

    /**
     * Returns a key-value mapping associated with the greatest key
     * strictly less than the given key, or {@code null} if there is
     * no such key. The returned entry does <em>not</em> support the
     * {@code Entry.setValue} method.
     *
     * @throws ClassCastException {@inheritDoc}
     * @throws NullPointerException if the specified key is null
     */
    public Map.Entry<K,V> lowerEntry(K key) {
        return getNear(key, LT);
    }

    /**
     * @throws ClassCastException {@inheritDoc}
     * @throws NullPointerException if the specified key is null
     */
    public K lowerKey(K key) {
        Node<K,V> n = findNear(key, LT, comparator);
        return (n == null) ? null : n.key;
    }

    /**
     * Returns a key-value mapping associated with the greatest key
     * less than or equal to the given key, or {@code null} if there
     * is no such key. The returned entry does <em>not</em> support
     * the {@code Entry.setValue} method.
     *
     * @param key the key
     * @throws ClassCastException {@inheritDoc}
     * @throws NullPointerException if the specified key is null
     */
    public Map.Entry<K,V> floorEntry(K key) {
        return getNear(key, LT|EQ);
    }

    /**
     * @param key the key
     * @throws ClassCastException {@inheritDoc}
     * @throws NullPointerException if the specified key is null
     */
    public K floorKey(K key) {
        Node<K,V> n = findNear(key, LT|EQ, comparator);
        return (n == null) ? null : n.key;
    }

    /**
     * Returns a key-value mapping associated with the least key
     * greater than or equal to the given key, or {@code null} if
     * there is no such entry. The returned entry does <em>not</em>
     * support the {@code Entry.setValue} method.
     *
     * @throws ClassCastException {@inheritDoc}
     * @throws NullPointerException if the specified key is null
     */
    public Map.Entry<K,V> ceilingEntry(K key) {
        return getNear(key, GT|EQ);
    }

    /**
     * @throws ClassCastException {@inheritDoc}
     * @throws NullPointerException if the specified key is null
     */
    public K ceilingKey(K key) {
        Node<K,V> n = findNear(key, GT|EQ, comparator);
        return (n == null) ? null : n.key;
    }

    /**
     * Returns a key-value mapping associated with the least key
     * strictly greater than the given key, or {@code null} if there
     * is no such key. The returned entry does <em>not</em> support
     * the {@code Entry.setValue} method.
     *
     * @param key the key
     * @throws ClassCastException {@inheritDoc}
     * @throws NullPointerException if the specified key is null
     */
    public Map.Entry<K,V> higherEntry(K key) {
        return getNear(key, GT);
    }

    /**
     * @param key the key
     * @throws ClassCastException {@inheritDoc}
     * @throws NullPointerException if the specified key is null
     */
    public K higherKey(K key) {
        Node<K,V> n = findNear(key, GT, comparator);
        return (n == null) ? null : n.key;
    }

    /**
     * Returns a key-value mapping associated with the least
     * key in this map, or {@code null} if the map is empty.
     * The returned entry does <em>not</em> support
     * the {@code Entry.setValue} method.
     */
    public Map.Entry<K,V> firstEntry() {
        for (;;) {
            Node<K,V> n = findFirst();
            if (n == null)
                return null;
            AbstractMap.SimpleImmutableEntry<K,V> e = n.createSnapshot();
            if (e != null)
                return e;
        }
    }

    /**
     * Returns a key-value mapping associated with the greatest
     * key in this map, or {@code null} if the map is empty.
     * The returned entry does <em>not</em> support
     * the {@code Entry.setValue} method.
     */
    public Map.Entry<K,V> lastEntry() {
        for (;;) {
            Node<K,V> n = findLast();
            if (n == null)
                return null;
            AbstractMap.SimpleImmutableEntry<K,V> e = n.createSnapshot();
            if (e != null)
                return e;
        }
    }

    /**
     * Removes and returns a key-value mapping associated with
     * the least key in this map, or {@code null} if the map is empty.
     * The returned entry does <em>not</em> support
     * the {@code Entry.setValue} method.
     */
    public Map.Entry<K,V> pollFirstEntry() {
        return doRemoveFirstEntry();
    }

    /**
     * Removes and returns a key-value mapping associated with
     * the greatest key in this map, or {@code null} if the map is empty.
     * The returned entry does <em>not</em> support
     * the {@code Entry.setValue} method.
     */
    public Map.Entry<K,V> pollLastEntry() {
        return doRemoveLastEntry();
    }


    /* ---------------- Iterators -------------- */

    /**
     * Base of iterator classes:
     */
    abstract class Iter<T> implements Iterator<T> {
        /** the last node returned by next() */
        Node<K,V> lastReturned;
        /** the next node to return from next(); */
        Node<K,V> next;
        /** Cache of next value field to maintain weak consistency */
        V nextValue;

        /** Initializes ascending iterator for entire range. */
        Iter() {
            while ((next = findFirst()) != null) {
                Object x = next.value;
                if (x != null && x != next) {
                    @SuppressWarnings("unchecked") V vv = (V)x;
                    nextValue = vv;
                    break;
                }
            }
        }

        public final boolean hasNext() {
            return next != null;
        }

        /** Advances next to higher entry. */
        final void advance() {
            if (next == null)
                throw new NoSuchElementException();
            lastReturned = next;
            while ((next = next.next) != null) {
                Object x = next.value;
                if (x != null && x != next) {
                    @SuppressWarnings("unchecked") V vv = (V)x;
                    nextValue = vv;
                    break;
                }
            }
        }

        public void remove() {
            Node<K,V> l = lastReturned;
            if (l == null)
                throw new IllegalStateException();
            // It would not be worth all of the overhead to directly
            // unlink from here. Using remove is fast enough.
            ConcurrentSkipListMap.this.remove(l.key);
            lastReturned = null;
        }

    }

    final class ValueIterator extends Iter<V> {
        public V next() {
            V v = nextValue;
            advance();
            return v;
        }
    }

    final class KeyIterator extends Iter<K> {
        public K next() {
            Node<K,V> n = next;
            advance();
            return n.key;
        }
    }

    final class EntryIterator extends Iter<Map.Entry<K,V>> {
        public Map.Entry<K,V> next() {
            Node<K,V> n = next;
            V v = nextValue;
            advance();
            return new AbstractMap.SimpleImmutableEntry<K,V>(n.key, v);
        }
    }

    // Factory methods for iterators needed by ConcurrentSkipListSet etc

    Iterator<K> keyIterator() {
        return new KeyIterator();
    }

    Iterator<V> valueIterator() {
        return new ValueIterator();
    }

    Iterator<Map.Entry<K,V>> entryIterator() {
        return new EntryIterator();
    }

    /* ---------------- View Classes -------------- */

    /*
     * View classes are static, delegating to a ConcurrentNavigableMap
     * to allow use by SubMaps, which outweighs the ugliness of
     * needing type-tests for Iterator methods.
     */

    static final <E> List<E> toList(Collection<E> c) {
        // Using size() here would be a pessimization.
        ArrayList<E> list = new ArrayList<E>();
        for (E e : c)
            list.add(e);
        return list;
    }

    static final class KeySet<E>
            extends AbstractSet<E> implements NavigableSet<E> {
        final ConcurrentNavigableMap<E,?> m;
        KeySet(ConcurrentNavigableMap<E,?> map) { m = map; }
        public int size() { return m.size(); }
        public boolean isEmpty() { return m.isEmpty(); }
        public boolean contains(Object o) { return m.containsKey(o); }
        public boolean remove(Object o) { return m.remove(o) != null; }
        public void clear() { m.clear(); }
        public E lower(E e) { return m.lowerKey(e); }
        public E floor(E e) { return m.floorKey(e); }
        public E ceiling(E e) { return m.ceilingKey(e); }
        public E higher(E e) { return m.higherKey(e); }
        public Comparator<? super E> comparator() { return m.comparator(); }
        public E first() { return m.firstKey(); }
        public E last() { return m.lastKey(); }
        public E pollFirst() {
            Map.Entry<E,?> e = m.pollFirstEntry();
            return (e == null) ? null : e.getKey();
        }
        public E pollLast() {
            Map.Entry<E,?> e = m.pollLastEntry();
            return (e == null) ? null : e.getKey();
        }
        @SuppressWarnings("unchecked")
        public Iterator<E> iterator() {
            if (m instanceof ConcurrentSkipListMap)
                return ((ConcurrentSkipListMap<E,Object>)m).keyIterator();
            else
                return ((ConcurrentSkipListMap.SubMap<E,Object>)m).keyIterator();
        }
        public boolean equals(Object o) {
            if (o == this)
                return true;
            if (!(o instanceof Set))
                return false;
            Collection<?> c = (Collection<?>) o;
            try {
                return containsAll(c) && c.containsAll(this);
            } catch (ClassCastException unused) {
                return false;
            } catch (NullPointerException unused) {
                return false;
            }
        }
        public Object[] toArray()     { return toList(this).toArray();  }
        public <T> T[] toArray(T[] a) { return toList(this).toArray(a); }
        public Iterator<E> descendingIterator() {
            return descendingSet().iterator();
        }
        public NavigableSet<E> subSet(E fromElement,
                                      boolean fromInclusive,
                                      E toElement,
                                      boolean toInclusive) {
            return new KeySet<E>(m.subMap(fromElement, fromInclusive,
                                          toElement,   toInclusive));
        }
        public NavigableSet<E> headSet(E toElement, boolean inclusive) {
            return new KeySet<E>(m.headMap(toElement, inclusive));
        }
        public NavigableSet<E> tailSet(E fromElement, boolean inclusive) {
            return new KeySet<E>(m.tailMap(fromElement, inclusive));
        }
        public NavigableSet<E> subSet(E fromElement, E toElement) {
            return subSet(fromElement, true, toElement, false);
        }
        public NavigableSet<E> headSet(E toElement) {
            return headSet(toElement, false);
        }
        public NavigableSet<E> tailSet(E fromElement) {
            return tailSet(fromElement, true);
        }
        public NavigableSet<E> descendingSet() {
            return new KeySet<E>(m.descendingMap());
        }
        @SuppressWarnings("unchecked")
        public Spliterator<E> spliterator() {
            if (m instanceof ConcurrentSkipListMap)
                return ((ConcurrentSkipListMap<E,?>)m).keySpliterator();
            else
                return (Spliterator<E>)((SubMap<E,?>)m).keyIterator();
        }
    }

    static final class Values<E> extends AbstractCollection<E> {
        final ConcurrentNavigableMap<?, E> m;
        Values(ConcurrentNavigableMap<?, E> map) {
            m = map;
        }
        @SuppressWarnings("unchecked")
        public Iterator<E> iterator() {
            if (m instanceof ConcurrentSkipListMap)
                return ((ConcurrentSkipListMap<?,E>)m).valueIterator();
            else
                return ((SubMap<?,E>)m).valueIterator();
        }
        public boolean isEmpty() {
            return m.isEmpty();
        }
        public int size() {
            return m.size();
        }
        public boolean contains(Object o) {
            return m.containsValue(o);
        }
        public void clear() {
            m.clear();
        }
        public Object[] toArray()     { return toList(this).toArray();  }
        public <T> T[] toArray(T[] a) { return toList(this).toArray(a); }
        @SuppressWarnings("unchecked")
        public Spliterator<E> spliterator() {
            if (m instanceof ConcurrentSkipListMap)
                return ((ConcurrentSkipListMap<?,E>)m).valueSpliterator();
            else
                return (Spliterator<E>)((SubMap<?,E>)m).valueIterator();
        }
    }

    static final class EntrySet<K1,V1> extends AbstractSet<Map.Entry<K1,V1>> {
        final ConcurrentNavigableMap<K1, V1> m;
        EntrySet(ConcurrentNavigableMap<K1, V1> map) {
            m = map;
        }
        @SuppressWarnings("unchecked")
        public Iterator<Map.Entry<K1,V1>> iterator() {
            if (m instanceof ConcurrentSkipListMap)
                return ((ConcurrentSkipListMap<K1,V1>)m).entryIterator();
            else
                return ((SubMap<K1,V1>)m).entryIterator();
        }

        public boolean contains(Object o) {
            if (!(o instanceof Map.Entry))
                return false;
            Map.Entry<?,?> e = (Map.Entry<?,?>)o;
            V1 v = m.get(e.getKey());
            return v != null && v.equals(e.getValue());
        }
        public boolean remove(Object o) {
            if (!(o instanceof Map.Entry))
                return false;
            Map.Entry<?,?> e = (Map.Entry<?,?>)o;
            return m.remove(e.getKey(),
                            e.getValue());
        }
        public boolean isEmpty() {
            return m.isEmpty();
        }
        public int size() {
            return m.size();
        }
        public void clear() {
            m.clear();
        }
        public boolean equals(Object o) {
            if (o == this)
                return true;
            if (!(o instanceof Set))
                return false;
            Collection<?> c = (Collection<?>) o;
            try {
                return containsAll(c) && c.containsAll(this);
            } catch (ClassCastException unused) {
                return false;
            } catch (NullPointerException unused) {
                return false;
            }
        }
        public Object[] toArray()     { return toList(this).toArray();  }
        public <T> T[] toArray(T[] a) { return toList(this).toArray(a); }
        @SuppressWarnings("unchecked")
        public Spliterator<Map.Entry<K1,V1>> spliterator() {
            if (m instanceof ConcurrentSkipListMap)
                return ((ConcurrentSkipListMap<K1,V1>)m).entrySpliterator();
            else
                return (Spliterator<Map.Entry<K1,V1>>)
                    ((SubMap<K1,V1>)m).entryIterator();
        }
    }

    /**
     * Submaps returned by {@link ConcurrentSkipListMap} submap operations
     * represent a subrange of mappings of their underlying
     * maps. Instances of this class support all methods of their
     * underlying maps, differing in that mappings outside their range are
     * ignored, and attempts to add mappings outside their ranges result
     * in {@link IllegalArgumentException}.  Instances of this class are
     * constructed only using the {@code subMap}, {@code headMap}, and
     * {@code tailMap} methods of their underlying maps.
     *
     * @serial include
     */
    static final class SubMap<K,V> extends AbstractMap<K,V>
        implements ConcurrentNavigableMap<K,V>, Cloneable, Serializable {
        private static final long serialVersionUID = -7647078645895051609L;

        /** Underlying map */
        private final ConcurrentSkipListMap<K,V> m;
        /** lower bound key, or null if from start */
        private final K lo;
        /** upper bound key, or null if to end */
        private final K hi;
        /** inclusion flag for lo */
        private final boolean loInclusive;
        /** inclusion flag for hi */
        private final boolean hiInclusive;
        /** direction */
        private final boolean isDescending;

        // Lazily initialized view holders
        private transient KeySet<K> keySetView;
        private transient Set<Map.Entry<K,V>> entrySetView;
        private transient Collection<V> valuesView;

        /**
         * Creates a new submap, initializing all fields.
         */
        SubMap(ConcurrentSkipListMap<K,V> map,
               K fromKey, boolean fromInclusive,
               K toKey, boolean toInclusive,
               boolean isDescending) {
            Comparator<? super K> cmp = map.comparator;
            if (fromKey != null && toKey != null &&
                cpr(cmp, fromKey, toKey) > 0)
                throw new IllegalArgumentException("inconsistent range");
            this.m = map;
            this.lo = fromKey;
            this.hi = toKey;
            this.loInclusive = fromInclusive;
            this.hiInclusive = toInclusive;
            this.isDescending = isDescending;
        }

        /* ----------------  Utilities -------------- */

        boolean tooLow(Object key, Comparator<? super K> cmp) {
            int c;
            return (lo != null && ((c = cpr(cmp, key, lo)) < 0 ||
                                   (c == 0 && !loInclusive)));
        }

        boolean tooHigh(Object key, Comparator<? super K> cmp) {
            int c;
            return (hi != null && ((c = cpr(cmp, key, hi)) > 0 ||
                                   (c == 0 && !hiInclusive)));
        }

        boolean inBounds(Object key, Comparator<? super K> cmp) {
            return !tooLow(key, cmp) && !tooHigh(key, cmp);
        }

        void checkKeyBounds(K key, Comparator<? super K> cmp) {
            if (key == null)
                throw new NullPointerException();
            if (!inBounds(key, cmp))
                throw new IllegalArgumentException("key out of range");
        }

        /**
         * Returns true if node key is less than upper bound of range.
         */
        boolean isBeforeEnd(ConcurrentSkipListMap.Node<K,V> n,
                            Comparator<? super K> cmp) {
            if (n == null)
                return false;
            if (hi == null)
                return true;
            K k = n.key;
            if (k == null) // pass by markers and headers
                return true;
            int c = cpr(cmp, k, hi);
            if (c > 0 || (c == 0 && !hiInclusive))
                return false;
            return true;
        }

        /**
         * Returns lowest node. This node might not be in range, so
         * most usages need to check bounds.
         */
        ConcurrentSkipListMap.Node<K,V> loNode(Comparator<? super K> cmp) {
            if (lo == null)
                return m.findFirst();
            else if (loInclusive)
                return m.findNear(lo, GT|EQ, cmp);
            else
                return m.findNear(lo, GT, cmp);
        }

        /**
         * Returns highest node. This node might not be in range, so
         * most usages need to check bounds.
         */
        ConcurrentSkipListMap.Node<K,V> hiNode(Comparator<? super K> cmp) {
            if (hi == null)
                return m.findLast();
            else if (hiInclusive)
                return m.findNear(hi, LT|EQ, cmp);
            else
                return m.findNear(hi, LT, cmp);
        }

        /**
         * Returns lowest absolute key (ignoring directonality).
         */
        K lowestKey() {
            Comparator<? super K> cmp = m.comparator;
            ConcurrentSkipListMap.Node<K,V> n = loNode(cmp);
            if (isBeforeEnd(n, cmp))
                return n.key;
            else
                throw new NoSuchElementException();
        }

        /**
         * Returns highest absolute key (ignoring directonality).
         */
        K highestKey() {
            Comparator<? super K> cmp = m.comparator;
            ConcurrentSkipListMap.Node<K,V> n = hiNode(cmp);
            if (n != null) {
                K last = n.key;
                if (inBounds(last, cmp))
                    return last;
            }
            throw new NoSuchElementException();
        }

        Map.Entry<K,V> lowestEntry() {
            Comparator<? super K> cmp = m.comparator;
            for (;;) {
                ConcurrentSkipListMap.Node<K,V> n = loNode(cmp);
                if (!isBeforeEnd(n, cmp))
                    return null;
                Map.Entry<K,V> e = n.createSnapshot();
                if (e != null)
                    return e;
            }
        }

        Map.Entry<K,V> highestEntry() {
            Comparator<? super K> cmp = m.comparator;
            for (;;) {
                ConcurrentSkipListMap.Node<K,V> n = hiNode(cmp);
                if (n == null || !inBounds(n.key, cmp))
                    return null;
                Map.Entry<K,V> e = n.createSnapshot();
                if (e != null)
                    return e;
            }
        }

        Map.Entry<K,V> removeLowest() {
            Comparator<? super K> cmp = m.comparator;
            for (;;) {
                Node<K,V> n = loNode(cmp);
                if (n == null)
                    return null;
                K k = n.key;
                if (!inBounds(k, cmp))
                    return null;
                V v = m.doRemove(k, null);
                if (v != null)
                    return new AbstractMap.SimpleImmutableEntry<K,V>(k, v);
            }
        }

        Map.Entry<K,V> removeHighest() {
            Comparator<? super K> cmp = m.comparator;
            for (;;) {
                Node<K,V> n = hiNode(cmp);
                if (n == null)
                    return null;
                K k = n.key;
                if (!inBounds(k, cmp))
                    return null;
                V v = m.doRemove(k, null);
                if (v != null)
                    return new AbstractMap.SimpleImmutableEntry<K,V>(k, v);
            }
        }

        /**
         * Submap version of ConcurrentSkipListMap.getNearEntry
         */
        Map.Entry<K,V> getNearEntry(K key, int rel) {
            Comparator<? super K> cmp = m.comparator;
            if (isDescending) { // adjust relation for direction
                if ((rel & LT) == 0)
                    rel |= LT;
                else
                    rel &= ~LT;
            }
            if (tooLow(key, cmp))
                return ((rel & LT) != 0) ? null : lowestEntry();
            if (tooHigh(key, cmp))
                return ((rel & LT) != 0) ? highestEntry() : null;
            for (;;) {
                Node<K,V> n = m.findNear(key, rel, cmp);
                if (n == null || !inBounds(n.key, cmp))
                    return null;
                K k = n.key;
                V v = n.getValidValue();
                if (v != null)
                    return new AbstractMap.SimpleImmutableEntry<K,V>(k, v);
            }
        }

        // Almost the same as getNearEntry, except for keys
        K getNearKey(K key, int rel) {
            Comparator<? super K> cmp = m.comparator;
            if (isDescending) { // adjust relation for direction
                if ((rel & LT) == 0)
                    rel |= LT;
                else
                    rel &= ~LT;
            }
            if (tooLow(key, cmp)) {
                if ((rel & LT) == 0) {
                    ConcurrentSkipListMap.Node<K,V> n = loNode(cmp);
                    if (isBeforeEnd(n, cmp))
                        return n.key;
                }
                return null;
            }
            if (tooHigh(key, cmp)) {
                if ((rel & LT) != 0) {
                    ConcurrentSkipListMap.Node<K,V> n = hiNode(cmp);
                    if (n != null) {
                        K last = n.key;
                        if (inBounds(last, cmp))
                            return last;
                    }
                }
                return null;
            }
            for (;;) {
                Node<K,V> n = m.findNear(key, rel, cmp);
                if (n == null || !inBounds(n.key, cmp))
                    return null;
                K k = n.key;
                V v = n.getValidValue();
                if (v != null)
                    return k;
            }
        }

        /* ----------------  Map API methods -------------- */

        public boolean containsKey(Object key) {
            if (key == null) throw new NullPointerException();
            return inBounds(key, m.comparator) && m.containsKey(key);
        }

        public V get(Object key) {
            if (key == null) throw new NullPointerException();
            return (!inBounds(key, m.comparator)) ? null : m.get(key);
        }

        public V put(K key, V value) {
            checkKeyBounds(key, m.comparator);
            return m.put(key, value);
        }

        public V remove(Object key) {
            return (!inBounds(key, m.comparator)) ? null : m.remove(key);
        }

        public int size() {
            Comparator<? super K> cmp = m.comparator;
            long count = 0;
            for (ConcurrentSkipListMap.Node<K,V> n = loNode(cmp);
                 isBeforeEnd(n, cmp);
                 n = n.next) {
                if (n.getValidValue() != null)
                    ++count;
            }
            return count >= Integer.MAX_VALUE ? Integer.MAX_VALUE : (int)count;
        }

        public boolean isEmpty() {
            Comparator<? super K> cmp = m.comparator;
            return !isBeforeEnd(loNode(cmp), cmp);
        }

        public boolean containsValue(Object value) {
            if (value == null)
                throw new NullPointerException();
            Comparator<? super K> cmp = m.comparator;
            for (ConcurrentSkipListMap.Node<K,V> n = loNode(cmp);
                 isBeforeEnd(n, cmp);
                 n = n.next) {
                V v = n.getValidValue();
                if (v != null && value.equals(v))
                    return true;
            }
            return false;
        }

        public void clear() {
            Comparator<? super K> cmp = m.comparator;
            for (ConcurrentSkipListMap.Node<K,V> n = loNode(cmp);
                 isBeforeEnd(n, cmp);
                 n = n.next) {
                if (n.getValidValue() != null)
                    m.remove(n.key);
            }
        }

        /* ----------------  ConcurrentMap API methods -------------- */

        public V putIfAbsent(K key, V value) {
            checkKeyBounds(key, m.comparator);
            return m.putIfAbsent(key, value);
        }

        public boolean remove(Object key, Object value) {
            return inBounds(key, m.comparator) && m.remove(key, value);
        }

        public boolean replace(K key, V oldValue, V newValue) {
            checkKeyBounds(key, m.comparator);
            return m.replace(key, oldValue, newValue);
        }

        public V replace(K key, V value) {
            checkKeyBounds(key, m.comparator);
            return m.replace(key, value);
        }

        /* ----------------  SortedMap API methods -------------- */

        public Comparator<? super K> comparator() {
            Comparator<? super K> cmp = m.comparator();
            if (isDescending)
                return Collections.reverseOrder(cmp);
            else
                return cmp;
        }

        /**
         * Utility to create submaps, where given bounds override
         * unbounded(null) ones and/or are checked against bounded ones.
         */
        SubMap<K,V> newSubMap(K fromKey, boolean fromInclusive,
                              K toKey, boolean toInclusive) {
            Comparator<? super K> cmp = m.comparator;
            if (isDescending) { // flip senses
                K tk = fromKey;
                fromKey = toKey;
                toKey = tk;
                boolean ti = fromInclusive;
                fromInclusive = toInclusive;
                toInclusive = ti;
            }
            if (lo != null) {
                if (fromKey == null) {
                    fromKey = lo;
                    fromInclusive = loInclusive;
                }
                else {
                    int c = cpr(cmp, fromKey, lo);
                    if (c < 0 || (c == 0 && !loInclusive && fromInclusive))
                        throw new IllegalArgumentException("key out of range");
                }
            }
            if (hi != null) {
                if (toKey == null) {
                    toKey = hi;
                    toInclusive = hiInclusive;
                }
                else {
                    int c = cpr(cmp, toKey, hi);
                    if (c > 0 || (c == 0 && !hiInclusive && toInclusive))
                        throw new IllegalArgumentException("key out of range");
                }
            }
            return new SubMap<K,V>(m, fromKey, fromInclusive,
                                   toKey, toInclusive, isDescending);
        }

        public SubMap<K,V> subMap(K fromKey, boolean fromInclusive,
                                  K toKey, boolean toInclusive) {
            if (fromKey == null || toKey == null)
                throw new NullPointerException();
            return newSubMap(fromKey, fromInclusive, toKey, toInclusive);
        }

        public SubMap<K,V> headMap(K toKey, boolean inclusive) {
            if (toKey == null)
                throw new NullPointerException();
            return newSubMap(null, false, toKey, inclusive);
        }

        public SubMap<K,V> tailMap(K fromKey, boolean inclusive) {
            if (fromKey == null)
                throw new NullPointerException();
            return newSubMap(fromKey, inclusive, null, false);
        }

        public SubMap<K,V> subMap(K fromKey, K toKey) {
            return subMap(fromKey, true, toKey, false);
        }

        public SubMap<K,V> headMap(K toKey) {
            return headMap(toKey, false);
        }

        public SubMap<K,V> tailMap(K fromKey) {
            return tailMap(fromKey, true);
        }

        public SubMap<K,V> descendingMap() {
            return new SubMap<K,V>(m, lo, loInclusive,
                                   hi, hiInclusive, !isDescending);
        }

        /* ----------------  Relational methods -------------- */

        public Map.Entry<K,V> ceilingEntry(K key) {
            return getNearEntry(key, GT|EQ);
        }

        public K ceilingKey(K key) {
            return getNearKey(key, GT|EQ);
        }

        public Map.Entry<K,V> lowerEntry(K key) {
            return getNearEntry(key, LT);
        }

        public K lowerKey(K key) {
            return getNearKey(key, LT);
        }

        public Map.Entry<K,V> floorEntry(K key) {
            return getNearEntry(key, LT|EQ);
        }

        public K floorKey(K key) {
            return getNearKey(key, LT|EQ);
        }

        public Map.Entry<K,V> higherEntry(K key) {
            return getNearEntry(key, GT);
        }

        public K higherKey(K key) {
            return getNearKey(key, GT);
        }

        public K firstKey() {
            return isDescending ? highestKey() : lowestKey();
        }

        public K lastKey() {
            return isDescending ? lowestKey() : highestKey();
        }

        public Map.Entry<K,V> firstEntry() {
            return isDescending ? highestEntry() : lowestEntry();
        }

        public Map.Entry<K,V> lastEntry() {
            return isDescending ? lowestEntry() : highestEntry();
        }

        public Map.Entry<K,V> pollFirstEntry() {
            return isDescending ? removeHighest() : removeLowest();
        }

        public Map.Entry<K,V> pollLastEntry() {
            return isDescending ? removeLowest() : removeHighest();
        }

        /* ---------------- Submap Views -------------- */

        public NavigableSet<K> keySet() {
            KeySet<K> ks = keySetView;
            return (ks != null) ? ks : (keySetView = new KeySet<K>(this));
        }

        public NavigableSet<K> navigableKeySet() {
            KeySet<K> ks = keySetView;
            return (ks != null) ? ks : (keySetView = new KeySet<K>(this));
        }

        public Collection<V> values() {
            Collection<V> vs = valuesView;
            return (vs != null) ? vs : (valuesView = new Values<V>(this));
        }

        public Set<Map.Entry<K,V>> entrySet() {
            Set<Map.Entry<K,V>> es = entrySetView;
            return (es != null) ? es : (entrySetView = new EntrySet<K,V>(this));
        }

        public NavigableSet<K> descendingKeySet() {
            return descendingMap().navigableKeySet();
        }

        Iterator<K> keyIterator() {
            return new SubMapKeyIterator();
        }

        Iterator<V> valueIterator() {
            return new SubMapValueIterator();
        }

        Iterator<Map.Entry<K,V>> entryIterator() {
            return new SubMapEntryIterator();
        }

        /**
         * Variant of main Iter class to traverse through submaps.
         * Also serves as back-up Spliterator for views
         */
        abstract class SubMapIter<T> implements Iterator<T>, Spliterator<T> {
            /** the last node returned by next() */
            Node<K,V> lastReturned;
            /** the next node to return from next(); */
            Node<K,V> next;
            /** Cache of next value field to maintain weak consistency */
            V nextValue;

            SubMapIter() {
                Comparator<? super K> cmp = m.comparator;
                for (;;) {
                    next = isDescending ? hiNode(cmp) : loNode(cmp);
                    if (next == null)
                        break;
                    Object x = next.value;
                    if (x != null && x != next) {
                        if (! inBounds(next.key, cmp))
                            next = null;
                        else {
                            @SuppressWarnings("unchecked") V vv = (V)x;
                            nextValue = vv;
                        }
                        break;
                    }
                }
            }

            public final boolean hasNext() {
                return next != null;
            }

            final void advance() {
                if (next == null)
                    throw new NoSuchElementException();
                lastReturned = next;
                if (isDescending)
                    descend();
                else
                    ascend();
            }

            private void ascend() {
                Comparator<? super K> cmp = m.comparator;
                for (;;) {
                    next = next.next;
                    if (next == null)
                        break;
                    Object x = next.value;
                    if (x != null && x != next) {
                        if (tooHigh(next.key, cmp))
                            next = null;
                        else {
                            @SuppressWarnings("unchecked") V vv = (V)x;
                            nextValue = vv;
                        }
                        break;
                    }
                }
            }

            private void descend() {
                Comparator<? super K> cmp = m.comparator;
                for (;;) {
                    next = m.findNear(lastReturned.key, LT, cmp);
                    if (next == null)
                        break;
                    Object x = next.value;
                    if (x != null && x != next) {
                        if (tooLow(next.key, cmp))
                            next = null;
                        else {
                            @SuppressWarnings("unchecked") V vv = (V)x;
                            nextValue = vv;
                        }
                        break;
                    }
                }
            }

            public void remove() {
                Node<K,V> l = lastReturned;
                if (l == null)
                    throw new IllegalStateException();
                m.remove(l.key);
                lastReturned = null;
            }

            public Spliterator<T> trySplit() {
                return null;
            }

            public boolean tryAdvance(Consumer<? super T> action) {
                if (hasNext()) {
                    action.accept(next());
                    return true;
                }
                return false;
            }

            public void forEachRemaining(Consumer<? super T> action) {
                while (hasNext())
                    action.accept(next());
            }

            public long estimateSize() {
                return Long.MAX_VALUE;
            }

        }

        final class SubMapValueIterator extends SubMapIter<V> {
            public V next() {
                V v = nextValue;
                advance();
                return v;
            }
            public int characteristics() {
                return 0;
            }
        }

        final class SubMapKeyIterator extends SubMapIter<K> {
            public K next() {
                Node<K,V> n = next;
                advance();
                return n.key;
            }
            public int characteristics() {
                return Spliterator.DISTINCT | Spliterator.ORDERED |
                    Spliterator.SORTED;
            }
            public final Comparator<? super K> getComparator() {
                return SubMap.this.comparator();
            }
        }

        final class SubMapEntryIterator extends SubMapIter<Map.Entry<K,V>> {
            public Map.Entry<K,V> next() {
                Node<K,V> n = next;
                V v = nextValue;
                advance();
                return new AbstractMap.SimpleImmutableEntry<K,V>(n.key, v);
            }
            public int characteristics() {
                return Spliterator.DISTINCT;
            }
        }
    }

    // default Map method overrides

    public void forEach(BiConsumer<? super K, ? super V> action) {
        if (action == null) throw new NullPointerException();
        V v;
        for (Node<K,V> n = findFirst(); n != null; n = n.next) {
            if ((v = n.getValidValue()) != null)
                action.accept(n.key, v);
        }
    }

    public void replaceAll(BiFunction<? super K, ? super V, ? extends V> function) {
        if (function == null) throw new NullPointerException();
        V v;
        for (Node<K,V> n = findFirst(); n != null; n = n.next) {
            while ((v = n.getValidValue()) != null) {
                V r = function.apply(n.key, v);
                if (r == null) throw new NullPointerException();
                if (n.casValue(v, r))
                    break;
            }
        }
    }

    /**
     * Base class providing common structure for Spliterators.
     * (Although not all that much common functionality; as usual for
     * view classes, details annoyingly vary in key, value, and entry
     * subclasses in ways that are not worth abstracting out for
     * internal classes.)
     *
     * The basic split strategy is to recursively descend from top
     * level, row by row, descending to next row when either split
     * off, or the end of row is encountered. Control of the number of
     * splits relies on some statistical estimation: The expected
     * remaining number of elements of a skip list when advancing
     * either across or down decreases by about 25%. To make this
     * observation useful, we need to know initial size, which we
     * don't. But we can just use Integer.MAX_VALUE so that we
     * don't prematurely zero out while splitting.
     */
    abstract static class CSLMSpliterator<K,V> {
        final Comparator<? super K> comparator;
        final K fence;     // exclusive upper bound for keys, or null if to end
        Index<K,V> row;    // the level to split out
        Node<K,V> current; // current traversal node; initialize at origin
        int est;           // pseudo-size estimate
        CSLMSpliterator(Comparator<? super K> comparator, Index<K,V> row,
                        Node<K,V> origin, K fence, int est) {
            this.comparator = comparator; this.row = row;
            this.current = origin; this.fence = fence; this.est = est;
        }

        public final long estimateSize() { return (long)est; }
    }

    static final class KeySpliterator<K,V> extends CSLMSpliterator<K,V>
        implements Spliterator<K> {
        KeySpliterator(Comparator<? super K> comparator, Index<K,V> row,
                       Node<K,V> origin, K fence, int est) {
            super(comparator, row, origin, fence, est);
        }

        public Spliterator<K> trySplit() {
            Node<K,V> e; K ek;
            Comparator<? super K> cmp = comparator;
            K f = fence;
            if ((e = current) != null && (ek = e.key) != null) {
                for (Index<K,V> q = row; q != null; q = row = q.down) {
                    Index<K,V> s; Node<K,V> b, n; K sk;
                    if ((s = q.right) != null && (b = s.node) != null &&
                        (n = b.next) != null && n.value != null &&
                        (sk = n.key) != null && cpr(cmp, sk, ek) > 0 &&
                        (f == null || cpr(cmp, sk, f) < 0)) {
                        current = n;
                        Index<K,V> r = q.down;
                        row = (s.right != null) ? s : s.down;
                        est -= est >>> 2;
                        return new KeySpliterator<K,V>(cmp, r, e, sk, est);
                    }
                }
            }
            return null;
        }

        public void forEachRemaining(Consumer<? super K> action) {
            if (action == null) throw new NullPointerException();
            Comparator<? super K> cmp = comparator;
            K f = fence;
            Node<K,V> e = current;
            current = null;
            for (; e != null; e = e.next) {
                K k; Object v;
                if ((k = e.key) != null && f != null && cpr(cmp, f, k) <= 0)
                    break;
                if ((v = e.value) != null && v != e)
                    action.accept(k);
            }
        }

        public boolean tryAdvance(Consumer<? super K> action) {
            if (action == null) throw new NullPointerException();
            Comparator<? super K> cmp = comparator;
            K f = fence;
            Node<K,V> e = current;
            for (; e != null; e = e.next) {
                K k; Object v;
                if ((k = e.key) != null && f != null && cpr(cmp, f, k) <= 0) {
                    e = null;
                    break;
                }
                if ((v = e.value) != null && v != e) {
                    current = e.next;
                    action.accept(k);
                    return true;
                }
            }
            current = e;
            return false;
        }

        public int characteristics() {
            return Spliterator.DISTINCT | Spliterator.SORTED |
                Spliterator.ORDERED | Spliterator.CONCURRENT |
                Spliterator.NONNULL;
        }

        public final Comparator<? super K> getComparator() {
            return comparator;
        }
    }
    // factory method for KeySpliterator
    final KeySpliterator<K,V> keySpliterator() {
        Comparator<? super K> cmp = comparator;
        for (;;) { // ensure h corresponds to origin p
            HeadIndex<K,V> h; Node<K,V> p;
            Node<K,V> b = (h = head).node;
            if ((p = b.next) == null || p.value != null)
                return new KeySpliterator<K,V>(cmp, h, p, null, (p == null) ?
                                               0 : Integer.MAX_VALUE);
            p.helpDelete(b, p.next);
        }
    }

    static final class ValueSpliterator<K,V> extends CSLMSpliterator<K,V>
        implements Spliterator<V> {
        ValueSpliterator(Comparator<? super K> comparator, Index<K,V> row,
                       Node<K,V> origin, K fence, int est) {
            super(comparator, row, origin, fence, est);
        }

        public Spliterator<V> trySplit() {
            Node<K,V> e; K ek;
            Comparator<? super K> cmp = comparator;
            K f = fence;
            if ((e = current) != null && (ek = e.key) != null) {
                for (Index<K,V> q = row; q != null; q = row = q.down) {
                    Index<K,V> s; Node<K,V> b, n; K sk;
                    if ((s = q.right) != null && (b = s.node) != null &&
                        (n = b.next) != null && n.value != null &&
                        (sk = n.key) != null && cpr(cmp, sk, ek) > 0 &&
                        (f == null || cpr(cmp, sk, f) < 0)) {
                        current = n;
                        Index<K,V> r = q.down;
                        row = (s.right != null) ? s : s.down;
                        est -= est >>> 2;
                        return new ValueSpliterator<K,V>(cmp, r, e, sk, est);
                    }
                }
            }
            return null;
        }

        public void forEachRemaining(Consumer<? super V> action) {
            if (action == null) throw new NullPointerException();
            Comparator<? super K> cmp = comparator;
            K f = fence;
            Node<K,V> e = current;
            current = null;
            for (; e != null; e = e.next) {
                K k; Object v;
                if ((k = e.key) != null && f != null && cpr(cmp, f, k) <= 0)
                    break;
                if ((v = e.value) != null && v != e) {
                    @SuppressWarnings("unchecked") V vv = (V)v;
                    action.accept(vv);
                }
            }
        }

        public boolean tryAdvance(Consumer<? super V> action) {
            if (action == null) throw new NullPointerException();
            Comparator<? super K> cmp = comparator;
            K f = fence;
            Node<K,V> e = current;
            for (; e != null; e = e.next) {
                K k; Object v;
                if ((k = e.key) != null && f != null && cpr(cmp, f, k) <= 0) {
                    e = null;
                    break;
                }
                if ((v = e.value) != null && v != e) {
                    current = e.next;
                    @SuppressWarnings("unchecked") V vv = (V)v;
                    action.accept(vv);
                    return true;
                }
            }
            current = e;
            return false;
        }

        public int characteristics() {
            return Spliterator.CONCURRENT | Spliterator.ORDERED |
                Spliterator.NONNULL;
        }
    }

    // Almost the same as keySpliterator()
    final ValueSpliterator<K,V> valueSpliterator() {
        Comparator<? super K> cmp = comparator;
        for (;;) {
            HeadIndex<K,V> h; Node<K,V> p;
            Node<K,V> b = (h = head).node;
            if ((p = b.next) == null || p.value != null)
                return new ValueSpliterator<K,V>(cmp, h, p, null, (p == null) ?
                                                 0 : Integer.MAX_VALUE);
            p.helpDelete(b, p.next);
        }
    }

    static final class EntrySpliterator<K,V> extends CSLMSpliterator<K,V>
        implements Spliterator<Map.Entry<K,V>> {
        EntrySpliterator(Comparator<? super K> comparator, Index<K,V> row,
                         Node<K,V> origin, K fence, int est) {
            super(comparator, row, origin, fence, est);
        }

        public Spliterator<Map.Entry<K,V>> trySplit() {
            Node<K,V> e; K ek;
            Comparator<? super K> cmp = comparator;
            K f = fence;
            if ((e = current) != null && (ek = e.key) != null) {
                for (Index<K,V> q = row; q != null; q = row = q.down) {
                    Index<K,V> s; Node<K,V> b, n; K sk;
                    if ((s = q.right) != null && (b = s.node) != null &&
                        (n = b.next) != null && n.value != null &&
                        (sk = n.key) != null && cpr(cmp, sk, ek) > 0 &&
                        (f == null || cpr(cmp, sk, f) < 0)) {
                        current = n;
                        Index<K,V> r = q.down;
                        row = (s.right != null) ? s : s.down;
                        est -= est >>> 2;
                        return new EntrySpliterator<K,V>(cmp, r, e, sk, est);
                    }
                }
            }
            return null;
        }

        public void forEachRemaining(Consumer<? super Map.Entry<K,V>> action) {
            if (action == null) throw new NullPointerException();
            Comparator<? super K> cmp = comparator;
            K f = fence;
            Node<K,V> e = current;
            current = null;
            for (; e != null; e = e.next) {
                K k; Object v;
                if ((k = e.key) != null && f != null && cpr(cmp, f, k) <= 0)
                    break;
                if ((v = e.value) != null && v != e) {
                    @SuppressWarnings("unchecked") V vv = (V)v;
                    action.accept
                        (new AbstractMap.SimpleImmutableEntry<K,V>(k, vv));
                }
            }
        }

        public boolean tryAdvance(Consumer<? super Map.Entry<K,V>> action) {
            if (action == null) throw new NullPointerException();
            Comparator<? super K> cmp = comparator;
            K f = fence;
            Node<K,V> e = current;
            for (; e != null; e = e.next) {
                K k; Object v;
                if ((k = e.key) != null && f != null && cpr(cmp, f, k) <= 0) {
                    e = null;
                    break;
                }
                if ((v = e.value) != null && v != e) {
                    current = e.next;
                    @SuppressWarnings("unchecked") V vv = (V)v;
                    action.accept
                        (new AbstractMap.SimpleImmutableEntry<K,V>(k, vv));
                    return true;
                }
            }
            current = e;
            return false;
        }

        public int characteristics() {
            return Spliterator.DISTINCT | Spliterator.SORTED |
                Spliterator.ORDERED | Spliterator.CONCURRENT |
                Spliterator.NONNULL;
        }

        public final Comparator<Map.Entry<K,V>> getComparator() {
            // Adapt or create a key-based comparator
            if (comparator != null) {
                return Map.Entry.comparingByKey(comparator);
            }
            else {
                return (Comparator<Map.Entry<K,V>> & Serializable) (e1, e2) -> {
                    @SuppressWarnings("unchecked")
                    Comparable<? super K> k1 = (Comparable<? super K>) e1.getKey();
                    return k1.compareTo(e2.getKey());
                };
            }
        }
    }

    // Almost the same as keySpliterator()
    final EntrySpliterator<K,V> entrySpliterator() {
        Comparator<? super K> cmp = comparator;
        for (;;) { // almost same as key version
            HeadIndex<K,V> h; Node<K,V> p;
            Node<K,V> b = (h = head).node;
            if ((p = b.next) == null || p.value != null)
                return new EntrySpliterator<K,V>(cmp, h, p, null, (p == null) ?
                                                 0 : Integer.MAX_VALUE);
            p.helpDelete(b, p.next);
        }
    }

    // Unsafe mechanics
    private static final sun.misc.Unsafe UNSAFE;
    private static final long headOffset;
    private static final long SECONDARY;
    static {
        try {
            UNSAFE = sun.misc.Unsafe.getUnsafe();
            Class<?> k = ConcurrentSkipListMap.class;
            headOffset = UNSAFE.objectFieldOffset
                (k.getDeclaredField("head"));
            Class<?> tk = Thread.class;
            SECONDARY = UNSAFE.objectFieldOffset
                (tk.getDeclaredField("threadLocalRandomSecondarySeed"));

        } catch (Exception e) {
            throw new Error(e);
        }
    }
}
```
![](./assets/NeteaseCloud/HighPerformanceTopics/187.jpg)
```java
public class ArrayListDemo {
    public static void main(String[] args) {
        ArrayList<String> arrayList = new ArrayList<>();
        arrayList.add("a");
        arrayList.add("b");
        arrayList.add("c");

        Iterator<String> iterator = arrayList.iterator();
        while (iterator.hasNext()) {
            // iterator.remove();// IllegalStateException
            arrayList.remove(iterator.next()); // ConcurrentModificationException
        }
    }
}
```
![](./assets/NeteaseCloud/HighPerformanceTopics/188.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/189.jpg)
```java
// 测试将对象作为key
public class ObjectHashMapDemo {

    public static void main(String[] args) {
        HashMap<User, String> map = new HashMap<>();
        User user = new User("tony");
        map.put(user, "test");
        System.out.println(map.get(user)); // 1、 输出什么  test
        user = new User("tony");
        System.out.println(map.get(user));  // 2、 输出什么 test
    }
}

class User {
    public String name;

    public User(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object obj) {
        return name.equals(((User)obj).name);
    }

    @Override
    public int hashCode() {
        return name.hashCode();
    }
}
```
![](./assets/NeteaseCloud/HighPerformanceTopics/190.jpg)
```java
// 它是基于数组的阻塞循环队列， 此队列按 FIFO（先进先出）原则对元素进行排序。
public class ArrayBlockingQueueDemo {
    public static void main(String[] args) throws InterruptedException {
        // 构造时需要指定容量(量力而行),可以选择是否需要公平（最先进入阻塞的，先操作）
        ArrayBlockingQueue<String> queue = new ArrayBlockingQueue<>(3, false);
        // 1秒消费数据一个
        new Thread(() -> {
            while (true) {
                try {
                    System.out.println("取到数据：" + queue.poll()); // poll非阻塞
                    Thread.sleep(1000L);
                } catch (InterruptedException e) {
                }
            }
        }).start();

        Thread.sleep(3000L); // 让前面的线程跑起来

        // 三个线程塞数据
        for (int i = 0; i < 6; i++) {
            new Thread(() -> {
                try {
                     queue.put(Thread.currentThread().getName()); // put阻塞(如果当前的队列已经塞满了数据，线程不会继续往下执行，等待其他线程把
                    // 队列的数据拿出去// )
//                    queue.offer(Thread.currentThread().getName()); // offer非阻塞，满了返回false
                    System.out.println(Thread.currentThread() + "塞入完成");
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }).start();
        }
    }
}
```
```java
// 它是基于链表的队列，此队列按 FIFO（先进先出）排序元素。
// 如果有阻塞需求，用这个。类似生产者消费者场景
public class LinkedBlockingQueueDemo {
    public static void main(String[] args) throws InterruptedException {
        // 构造时可以指定容量，默认Integer.MAX_VALUE
        LinkedBlockingQueue<String> queue = new LinkedBlockingQueue<String>(3);
        // 1秒消费数据一个
        new Thread(() -> {
            while (true) {
                try {
                    System.out.println("取到数据：" + queue.poll()); // poll非阻塞
                    Thread.sleep(1000L);
                } catch (InterruptedException e) {
                }
            }
        }).start();

        Thread.sleep(3000L); // 让前面的线程跑起来

        // 三个线程塞数据
        for (int i = 0; i < 6; i++) {
            new Thread(() -> {
                try {
                    // queue.put(Thread.currentThread().getName()); // put阻塞
                    queue.offer(Thread.currentThread().getName()); // offer非阻塞，满了返回false
                    System.out.println(Thread.currentThread() + "塞入完成");
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }).start();
        }
    }
}
```
```java
// 是一个带优先级的 队列，而不是先进先出队列。
// 元素按优先级顺序被移除，该队列也没有上限
// 没有容量限制的，自动扩容
// 虽然此队列逻辑上是无界的，但是由于资源被耗尽，所以试图执行添加操作可能会导致 OutOfMemoryError），
// 但是如果队列为空，
// 那么取元素的操作take就会阻塞，所以它的检索操作take是受阻的。另外，
// 入该队列中的元素要具有比较能力
public class PriorityQueueDemo {
    public static void main(String[] args) {
        // 可以设置比对方式
        PriorityQueue<String> priorityQueue = new PriorityQueue<>(new Comparator<String>() {
            @Override //
            public int compare(String o1, String o2) {
                // 实际就是 元素之间的 比对。
                return 0;
            }
        });
        priorityQueue.add("c");
        priorityQueue.add("a");
        priorityQueue.add("b");

        System.out.println(priorityQueue.poll());
        System.out.println(priorityQueue.poll());
        System.out.println(priorityQueue.poll());

        PriorityQueue<MessageObject> MessageObjectQueue = new PriorityQueue<>(new Comparator<MessageObject>() {
            @Override
            public int compare(MessageObject o1, MessageObject o2) {
                return o1.order > o2.order ? -1 : 1;
            }
        });
    }
}

class MessageObject {
    String content;
    int order;
}
```
```java
// （基于PriorityQueue来实现的）是一个存放Delayed 元素的无界阻塞队列，
// 只有在延迟期满时才能从中提取元素。该队列的头部是延迟期满后保存时间最长的 Delayed 元素。
// 如果延迟都还没有期满，则队列没有头部，并且poll将返回null。
// 当一个元素的 getDelay(TimeUnit.NANOSECONDS) 方法返回一个小于或等于零的值时，
// 则出现期满，poll就以移除这个元素了。此队列不允许使用 null 元素。
public class DelayQueueDemo {
    public static void main(String[] args) throws InterruptedException {
        DelayQueue<Message> delayQueue = new DelayQueue<Message>();
        // 这条消息5秒后发送
        Message message = new Message("message - 00001", new Date(System.currentTimeMillis() + 5000L));
        delayQueue.add(message);

        while (true) {
            System.out.println(delayQueue.poll());
            Thread.sleep(1000L);
        }
        // 线程池中的定时调度就是这样实现的
    }
}

// 实现Delayed接口的元素才能存到DelayQueue
class Message implements Delayed {

    // 判断当前这个元素，是不是已经到了需要被拿出来的时间
    @Override
    public long getDelay(TimeUnit unit) {
        // 默认纳秒
        long duration = sendTime.getTime() - System.currentTimeMillis();
        return TimeUnit.NANOSECONDS.convert(duration, TimeUnit.MILLISECONDS);
    }

    @Override
    public int compareTo(Delayed o) {
        return o.getDelay(TimeUnit.NANOSECONDS) > this.getDelay(TimeUnit.NANOSECONDS) ? 1 : -1;
    }

    String content;
    Date sendTime;

    /**
     * @param content  消息内容
     * @param sendTime 定时发送
     */
    public Message(String content, Date sendTime) {
        this.content = content;
        this.sendTime = sendTime;
    }

    @Override
    public String toString() {
        return "Message{" +
                "content='" + content + '\'' +
                ", sendTime=" + sendTime +
                '}';
    }
}
```
#### 1.3.4Fork_Join框架详解
![](./assets/NeteaseCloud/HighPerformanceTopics/191.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/192.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/193.jpg)
```java
// 分而治之的理念
public class ForkJoinDemo {
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        // 默认情况下，并行线程数量等于可用处理器的数量
        // ForkJoinPool与其他类型的ExecutorService的区别主要在于它使用了工作窃取:
        // 池中的所有线程都试图查找和执行提交给池的任务和/或其他活动任务创建的任务
        // (如果不存在工作，则最终阻塞等待工作)。
        ForkJoinPool forkJoinPool = new ForkJoinPool();

        RecursiveTask<String> recursiveTask = new RecursiveTask<String>() {
            @Override
            protected String compute() {
                try {
                    Thread.sleep(1000L);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                System.out.println(toString() + "" + Thread.currentThread());
                ForkJoinTask<String> newTask = this.fork();
                newTask.join();
                System.out.println("执行结束");
                return "";
            }
        };

        ForkJoinTask<String> submit = forkJoinPool.submit(recursiveTask);
        ForkJoinTask<String> submitx = forkJoinPool.submit(recursiveTask);
        System.out.println(submit.get());

        recursiveTask.join();
    }
}
```
![](./assets/NeteaseCloud/HighPerformanceTopics/194.jpg)
```java
/**
 * 串行调用http接口
 */
@Service
public class UserService {

    @Autowired
    private RestTemplate restTemplate;

    /**
     * 查询多个系统的数据，合并返回
     */
    public Object getUserInfo(String userId) {
        // 其他例子, 查数据库的多个表数据,分多次查询

        // 1. 先从调用获取用户基础信息的http接口
        long userinfoTime = System.currentTimeMillis();
        String value = restTemplate.getForObject("http://www.tony.com/userinfo-api/get?userId=" + userId, String.class);
        JSONObject userInfo = JSONObject.parseObject(value);
        System.out.println("userinfo-api用户基本信息接口调用时间为" + (System.currentTimeMillis() - userinfoTime));

        // 2. 再调用获取用户积分信息的接口
        long integralApiTime = System.currentTimeMillis();
        String intergral = restTemplate.getForObject("http://www.tony.com/integral-api/get?userId=" + userId,
                String.class);
        JSONObject intergralInfo = JSONObject.parseObject(intergral);
        System.out.println("integral-api积分接口调用时间为" + (System.currentTimeMillis() - integralApiTime));

        // 3、 在调用一个接口 +n秒

        // 3. 合并为一个json对象
        JSONObject result = new JSONObject();
        result.putAll(userInfo);
        result.putAll(intergralInfo);

        return result;
    }

}
```
```java
	@Test
	public void testUserSerivce() {
		// 调用
		long currentTimeMillis = System.currentTimeMillis();
		// http 实际就是 线程 调用service
		Object userInfo = userService.getUserInfo("tony");

		System.out.println("getUserInfo总执行时间为" + (System.currentTimeMillis() - currentTimeMillis));
		System.out.println(userInfo.toString());
	}
```
```java
/**
 * 并行调用http接口
 */
@Service
public class UserServiceForkJoin {
    // 本质是一个线程池,默认的线程数量:CPU的核数
    ForkJoinPool forkJoinPool = new ForkJoinPool(10, ForkJoinPool.defaultForkJoinWorkerThreadFactory,
            null, true);
    @Autowired
    private RestTemplate restTemplate;

    /**
     * 查询多个系统的数据，合并返回
     */
    public Object getUserInfo(String userId) throws ExecutionException, InterruptedException {
        // 其他例子, 查数据库的多个表数据,分多次查询
        // fork/join
        // forkJoinPool.submit()
        ArrayList<String> urls = new ArrayList<>();
        urls.add("http://www.tony.com/userinfo-api/get?userId=" + userId);
        urls.add("http://www.tony.com/integral-api/get?userId=" + userId);

        HttpJsonRequest httpJsonRequest = new HttpJsonRequest(restTemplate, urls, 0, urls.size() - 1);
        ForkJoinTask<JSONObject> forkJoinTask = forkJoinPool.submit(httpJsonRequest);

        JSONObject result = forkJoinTask.get();
        return result;
    }
}

// 任务
class HttpJsonRequest extends RecursiveTask<JSONObject> {

    RestTemplate restTemplate;
    ArrayList<String> urls;
    int start;
    int end;

    HttpJsonRequest(RestTemplate restTemplate, ArrayList<String> urls, int start, int end) {
        this.restTemplate = restTemplate;
        this.urls = urls;
        this.start = start;
        this.end = end;
    }

    // 就是实际去执行的一个方法入口(任务拆分)
    @Override
    protected JSONObject compute() {
        int count = end - start; // 代表当前这个task需要处理多少数据
        // 自行根据业务场景去判断是否是大任务,是否需要拆分
        if (count == 0) {
            String url = urls.get(start);
            // TODO 如果只有一个接口调用,立刻调用
            long userinfoTime = System.currentTimeMillis();
            String response = restTemplate.getForObject(url, String.class);
            JSONObject value = JSONObject.parseObject(response);
            System.out.println(Thread.currentThread() + " 接口调用完毕" + (System.currentTimeMillis() - userinfoTime) + " #" + url);
            return value;
        } else { // 如果是多个接口调用,拆分成子任务  7,8,   9,10
            System.out.println(Thread.currentThread() + "任务拆分一次");
            int x = (start + end) / 2;
            HttpJsonRequest httpJsonRequest = new HttpJsonRequest(restTemplate, urls, start, x);// 负责处理哪一部分?
            httpJsonRequest.fork();

            HttpJsonRequest httpJsonRequest1 = new HttpJsonRequest(restTemplate, urls, x + 1, end);// 负责处理哪一部分?
            httpJsonRequest1.fork();

            // join获取处理结果
            JSONObject result = new JSONObject();
            result.putAll(httpJsonRequest.join());
            result.putAll(httpJsonRequest1.join());
            return result;
        }
    }
}
```
```java
	@Test
	public void testUserSerivce() {
		// 调用
		long currentTimeMillis = System.currentTimeMillis();
		// http 实际就是 线程 调用service
		Object userInfo = userServiceForkJoin.getUserInfo("tony");

		System.out.println("getUserInfo总执行时间为" + (System.currentTimeMillis() - currentTimeMillis));
		System.out.println(userInfo.toString());
	}
```
![](./assets/NeteaseCloud/HighPerformanceTopics/195.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/196.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/197.jpg)
```java
/**
 * 调用http接口
 */
@Service
public class UserServiceCountLatch {
    ExecutorService executorService = Executors.newCachedThreadPool();

    @Autowired
    private RestTemplate restTemplate;

    /**
     * 查询多个系统的数据，合并返回
     */
    public Object getUserInfo(String userId) throws InterruptedException {
        CountDownLatch count = new CountDownLatch(2);
        ArrayList<JSONObject> values = new ArrayList<>();
        // 你可以封装成一个 提交URL 就能自动多线程调用的 工具
            executorService.submit(() -> {
                // 1. 先从调用获取用户基础信息的http接口
                long userinfoTime = System.currentTimeMillis();
                String value = restTemplate.getForObject("http://www.tony.com/userinfo-api/get?userId=" + userId, String.class);
                JSONObject userInfo = JSONObject.parseObject(value);
                System.out.println("userinfo-api用户基本信息接口调用时间为" + (System.currentTimeMillis() - userinfoTime));
                values.add(userInfo);
                count.countDown();
            });
            executorService.submit(() -> {
                // 2. 再调用获取用户积分信息的接口
                long integralApiTime = System.currentTimeMillis();
                String intergral = restTemplate.getForObject("http://www.tony.com/integral-api/get?userId=" + userId,
                        String.class);
                JSONObject intergralInfo = JSONObject.parseObject(intergral);
                System.out.println("integral-api积分接口调用时间为" + (System.currentTimeMillis() - integralApiTime));
                values.add(intergralInfo);
                count.countDown();
        });

        count.await();// 等待计数器归零

        // 3. 合并为一个json对象
        JSONObject result = new JSONObject();
        for (JSONObject value : values) {
            result.putAll(value);
        }
        return result;
    }
}
```
![](./assets/NeteaseCloud/HighPerformanceTopics/198.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/199.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/200.jpg)
```java
/**
 * 串行调用http接口
 */
@Service
public class UserServiceFutureTask {
    ExecutorService executorService = Executors.newCachedThreadPool();
    @Autowired
    private RestTemplate restTemplate;

    /**
     * 查询多个系统的数据，合并返回
     */
    public Object getUserInfo(String userId) throws ExecutionException, InterruptedException {
        // 其他例子, 查数据库的多个表数据,分多次查询

        // 原味爱好
        // Future < >  Callable
        // 1 和runnable一样的业务定义.  但是本质上是有区别的:  返回值 异常 call run.
        Callable<JSONObject> callable = new Callable<JSONObject>() {
            @Override
            public JSONObject call() throws Exception {
                // 1. 先从调用获取用户基础信息的http接口
                long userinfoTime = System.currentTimeMillis();
                String value = restTemplate.getForObject("http://www.tony.com/userinfo-api/get?userId=" + userId, String.class);
                JSONObject userInfo = JSONObject.parseObject(value);
                System.out.println("userinfo-api用户基本信息接口调用时间为" + (System.currentTimeMillis() - userinfoTime));
                return userInfo;
            }
        };

        // 通过多线程运行callable
        NeteaseFutureTask<JSONObject> userInfoFutureTask = new NeteaseFutureTask<>(callable);
        new Thread(userInfoFutureTask).start();

        NeteaseFutureTask<JSONObject> intergralInfoTask = new NeteaseFutureTask(() -> {
            // 2. 再调用获取用户积分信息的接口
            long integralApiTime = System.currentTimeMillis();
            String intergral = restTemplate.getForObject("http://www.tony.com/integral-api/get?userId=" + userId,
                    String.class);
            JSONObject intergralInfo = JSONObject.parseObject(intergral);
            System.out.println("integral-api积分接口调用时间为" + (System.currentTimeMillis() - integralApiTime));
            return intergralInfo;
        });
        new Thread(intergralInfoTask).start();

        // 3. 合并为一个json对象
        JSONObject result = new JSONObject();
        result.putAll(userInfoFutureTask.get()); // 会等待任务执行结束
        result.putAll(intergralInfoTask.get());

        return result;
    }

}
```
```java
// 我们想一想,这个功能怎么实现
// (jdk本质,就是利用一些底层API,为开发人员提供便利)
public class NeteaseFutureTask<T> implements Runnable, Future { // 获取 线程异步执行结果 的方式
    Callable<T> callable; //  业务逻辑在callable里面
    T result = null;
    volatile String state = "NEW";  // task执行状态
    LinkedBlockingQueue<Thread> waiters = new LinkedBlockingQueue<>();// 定义一个存储等待者的集合

    public NeteaseFutureTask(Callable<T> callable) {
        this.callable = callable;
    }

    @Override
    public void run() {
        try {
            result = callable.call();
        } catch (Exception e) {
            e.printStackTrace();
            // result = exception
        } finally {
            state = "END";
        }

        // 唤醒等待者
        Thread waiter = waiters.poll();
        while (waiter != null) {
            LockSupport.unpark(waiter);

            waiter = waiters.poll(); // 继续取出队列中的等待者
        }
    }

    // 返回结果,
    @Override
    public T get() {
        if ("END".equals(state)) {
            return result;
        }

        waiters.offer(Thread.currentThread()); // 加入到等待队列,线程不继续往下执行

        while (!"END".equals(state)) {
            LockSupport.park(); // 线程通信的知识点
        }
        // 如果没有结束,那么调用get方法的线程,就应该进入等待
        return result;
    }

    @Override
    public boolean cancel(boolean mayInterruptIfRunning) {
        return false;
    }

    @Override
    public boolean isCancelled() {
        return false;
    }

    @Override
    public boolean isDone() {
        return false;
    }

    @Override
    public Object get(long timeout, TimeUnit unit) throws InterruptedException, ExecutionException, TimeoutException {
        return null;
    }
}
```
![](./assets/NeteaseCloud/HighPerformanceTopics/201.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/202.jpg)
#### 2.1.1TCP_UDP协议
![](./assets/NeteaseCloud/HighPerformanceTopics/203.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/204.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/205.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/206.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/207.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/208.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/209.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/210.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/211.jpg)
#### 2.1.2BIO阻塞式网络编程
![](./assets/NeteaseCloud/HighPerformanceTopics/212.jpg)
```java
public class BIOServer {

    public static void main(String[] args) throws Exception {
        ServerSocket serverSocket = new ServerSocket(8080);
        System.out.println("服务器启动成功");
        while (!serverSocket.isClosed()) {
            Socket request = serverSocket.accept();// 阻塞
            System.out.println("收到新连接 : " + request.toString());
            try {
                // 接收数据、打印
                InputStream inputStream = request.getInputStream(); // net + i/o
                BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream, "utf-8"));
                String msg;
                while ((msg = reader.readLine()) != null) { // 没有数据，阻塞
                    if (msg.length() == 0) {
                        break;
                    }
                    System.out.println(msg);
                }
                System.out.println("收到数据,来自："+ request.toString());
            } catch (IOException e) {
                e.printStackTrace();
            } finally {
                try {
                    request.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        serverSocket.close();
    }
}
```
```java
public class BIOClient {
	private static Charset charset = Charset.forName("UTF-8");

	public static void main(String[] args) throws Exception {
		Socket s = new Socket("localhost", 8080);
		OutputStream out = s.getOutputStream();

		Scanner scanner = new Scanner(System.in);
		System.out.println("请输入：");
		String msg = scanner.nextLine();
		out.write(msg.getBytes(charset)); // 阻塞，写完成
		scanner.close();
		s.close();
	}

}
```
```java
// 多线程支持
public class BIOServer1 {
    private static ExecutorService threadPool = Executors.newCachedThreadPool();

    public static void main(String[] args) throws Exception {
        ServerSocket serverSocket = new ServerSocket(8080);
        System.out.println("tomcat 服务器启动成功");
        while (!serverSocket.isClosed()) {
            Socket request = serverSocket.accept();
            System.out.println("收到新连接 : " + request.toString());
            threadPool.execute(() -> {
                try {
                    // 接收数据、打印
                    InputStream inputStream = request.getInputStream();
                    BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream, "utf-8"));
                    String msg;
                    while ((msg = reader.readLine()) != null) { // 阻塞
                        if (msg.length() == 0) {
                            break;
                        }
                        System.out.println(msg);
                    }
                    System.out.println("收到数据,来自："+ request.toString());
                } catch (IOException e) {
                    e.printStackTrace();
                } finally {
                    try {
                        request.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            });
        }
        serverSocket.close();
    }
}
```
![](./assets/NeteaseCloud/HighPerformanceTopics/213.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/214.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/215.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/216.jpg)
```java
public class BIOServer2 {

    private static ExecutorService threadPool = Executors.newCachedThreadPool();

    public static void main(String[] args) throws Exception {
        ServerSocket serverSocket = new ServerSocket(8080);
        System.out.println("服务器启动成功");
        while (!serverSocket.isClosed()) {
            Socket request = serverSocket.accept();
            System.out.println("收到新连接 : " + request.toString());
            threadPool.execute(() -> {
                try {
                    // 接收数据、打印
                    InputStream inputStream = request.getInputStream();
                    BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream, "utf-8"));
                    String msg;
                    while ((msg = reader.readLine()) != null) {
                        if (msg.length() == 0) {
                            break;
                        }
                        System.out.println(msg);
                    }

                    System.out.println("收到数据,来自："+ request.toString());
                    // 响应结果 200
                    OutputStream outputStream = request.getOutputStream();
                    outputStream.write("HTTP/1.1 200 OK\r\n".getBytes());
                    outputStream.write("Content-Length: 11\r\n\r\n".getBytes());
                    outputStream.write("Hello World".getBytes());
                    outputStream.flush();
                } catch (IOException e) {
                    e.printStackTrace();
                } finally {
                    try {
                        request.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            });
        }
        serverSocket.close();
    }
}
```
![](./assets/NeteaseCloud/HighPerformanceTopics/217.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/218.jpg)

#### 2.1.3NIO非阻塞网络编程三大核心理念

#### 2.2.1netty线程模型

#### 2.2.2责任链设计模式

#### 2.2.3零拷贝机制

#### 2.3.1推送系统功能实现及系统优化

#### 2.3.2网易后端开发中Netty最佳实践（网易邮箱）

#### 3.1.1类加载机制
![](./assets/NeteaseCloud/HighPerformanceTopics/219.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/220.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/221.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/222.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/223.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/224.jpg)
```java
/**
 * 查看类的加载器实例
 */
public class ClassLoaderView {
    public static void main(String[] args) throws Exception {
        // 加载核心类库的 BootStrap ClassLoader
        System.out.println("核心类库加载器："
                + ClassLoaderView.class.getClassLoader().loadClass("java.lang.String").getClassLoader());
        // 加载拓展库的 Extension ClassLoader
        System.out.println("拓展类库加载器：" + ClassLoaderView.class.getClassLoader()
                .loadClass("com.sun.nio.zipfs.ZipCoder").getClassLoader());
        // 加载应用程序的
        System.out.println("应用程序库加载器：" + ClassLoaderView.class.getClassLoader());

        // 双亲委派模型 Parents Delegation Model
        System.out.println("应用程序库加载器的父类：" + ClassLoaderView.class.getClassLoader().getParent());
        System.out.println(
                "应用程序库加载器的父类的父类：" + ClassLoaderView.class.getClassLoader().getParent().getParent());
    }
}
```
![](./assets/NeteaseCloud/HighPerformanceTopics/225.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/226.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/227.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/228.jpg)

D:\\HelloService.java
```java
public class HelloService {

    public static String value = getValue();

    static {
        System.out.println("###static code");
    }

    private static String getValue() {
        System.out.println("###static method");
        return "netease";
    }

    public void test() {
        System.out.println("hello..." + value);
    }
}
```

运行LoaderTest后，修改HelloService.java中的内容并重新编译，下面代码打印内容将不会改变
```java
import java.net.URL;
import java.net.URLClassLoader;

/**
 * 指定class 进行加载e
 */
public class LoaderTest {
    public static void main(String[] args) throws Exception {
        URL classUrl = new URL("file:D:\\");//jvm HelloService.java类放在位置
        // 创建一个新的类加载器
        URLClassLoader loader = new URLClassLoader(new URL[]{classUrl});
        while (true) {
            // 问题：静态块触发
            Class clazz = loader.loadClass("HelloService");
            System.out.println("HelloService所使用的类加载器：" + clazz.getClassLoader());

            Object newInstance = clazz.newInstance();
            Object value = clazz.getMethod("test").invoke(newInstance);
            System.out.println("调用getValue获得的返回值为：" + value);

            Thread.sleep(3000L); // 1秒执行一次
            System.out.println();
        }
    }
}
```
运行LoaderTest后，修改HelloService.java中的内容并重新编译，下面代码打印内容将会改变
```java
import java.net.URL;
import java.net.URLClassLoader;

/**
 * 指定class 进行加载e
 */
public class LoaderTest {
    public static void main(String[] args) throws Exception {
        URL classUrl = new URL("file:D:\\");//jvm HelloService.java类放在位置
        while (true) {
            // 创建一个新的类加载器
            URLClassLoader loader = new URLClassLoader(new URL[]{classUrl});
            // 问题：静态块触发
            Class clazz = loader.loadClass("HelloService");
            System.out.println("HelloService所使用的类加载器：" + clazz.getClassLoader());

            Object newInstance = clazz.newInstance();
            Object value = clazz.getMethod("test").invoke(newInstance);
            System.out.println("调用getValue获得的返回值为：" + value);

            Thread.sleep(3000L); // 1秒执行一次
            System.out.println();
        }
    }
}
```
问题：静态块触发（Object newInstance = clazz.newInstance();执行时触发）
![](./assets/NeteaseCloud/HighPerformanceTopics/229.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/230.jpg)
```java
import java.net.URL;
import java.net.URLClassLoader;

/**
 * 指定class 进行加载e
 */
public class LoaderTest {
    public static void main(String[] args) throws Exception {
        URL classUrl = new URL("file:D:\\");//jvm 类放在位置
        // 创建一个新的类加载器
        URLClassLoader loader = new URLClassLoader(new URL[]{classUrl});
        while (true) {
        	if (loader == null) break;
            // 问题：静态块触发
            Class clazz = loader.loadClass("HelloService");
            System.out.println("HelloService所使用的类加载器：" + clazz.getClassLoader());

            Object newInstance = clazz.newInstance();
            Object value = clazz.getMethod("test").invoke(newInstance);
            System.out.println("调用getValue获得的返回值为：" + value);

            Thread.sleep(3000L); // 1秒执行一次
            System.out.println();

            //  help gc  -verbose:class
            newInstance = null;
            loader = null;
        }
        System.gc();
    }
}
```
![](./assets/NeteaseCloud/HighPerformanceTopics/231.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/232.jpg)
```java
import java.net.URL;
import java.net.URLClassLoader;

/**
 * 热加载，指定class 进行加载e
 */
public class LoaderTest1 {
    public static void main(String[] args) throws Exception {
        URL classUrl = new URL("file:D:\\");
        // 测试双亲委派机制
        // 如果使用此加载器作为父加载器,则下面的热更新会失效,因为双亲委派机制,HelloService实际上是被这个类加载器加载的;
        //  URLClassLoader parentLoader = new URLClassLoader(new URL[]{classUrl});

        while (true) {
            // 创建一个新的类加载器，它的父加载器为上面的parentLoader
            URLClassLoader loader = new URLClassLoader(new URL[]{classUrl}, LoaderTest1.class.getClassLoader());// parentLoader

            Class clazz = loader.loadClass("HelloService");
            System.out.println("HelloService所使用的类加载器：" + clazz.getClassLoader());
            Object newInstance = clazz.newInstance();
            Object value = clazz.getMethod("test").invoke(newInstance);
            System.out.println("调用getValue获得的返回值为：" + value);

            // help gc
            newInstance = null;
            value = null;

            System.gc();
            loader.close();

            Thread.sleep(3000L); // 1秒执行一次
            System.out.println();
        }
    }
}
```

#### 3.1.2垃圾回收机制
![](./assets/NeteaseCloud/HighPerformanceTopics/233.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/234.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/235.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/236.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/237.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/238.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/239.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/240.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/241.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/242.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/243.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/244.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/245.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/246.jpg)

新生代-复制算法
1.当这些对象被反复挪至8次后，将会放至老年代
2.当新生代内存不够时，新生代的对象也会直接到达老年代
3.当大对象创建时，会直接进入老年代

老年代-标记整理算法

![](./assets/NeteaseCloud/HighPerformanceTopics/247.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/248.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/249.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/250.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/251.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/252.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/253.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/254.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/255.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/256.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/257.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/258.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/259.jpg)

#### 3.1.3JDK内置命令工具
![](./assets/NeteaseCloud/HighPerformanceTopics/260.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/261.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/262.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/263.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/264.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/265.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/266.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/267.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/268.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/269.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/270.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/271.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/272.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/273.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/274.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/275.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/276.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/277.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/278.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/279.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/280.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/281.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/282.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/283.jpg)

服务器CPU占用率高分析：
```
去看有多少线程处于RUNNABLE状态，如果所有线程处于等待，那理论上CUP不会很高。因为没有正式执行，一般都是我们的RUNNABLE线程过多导致CPU增大。
```

![](./assets/NeteaseCloud/HighPerformanceTopics/284.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/285.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/286.jpg)

#### 3.2.1JVM参数及调优
![](./assets/NeteaseCloud/HighPerformanceTopics/287.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/288.jpg)
```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Random;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

// 启动程序，模拟用户请求
// 每100毫秒钟创建1000线程，每个线程创建一个512kb的对象，最多100毫秒内同时存在1000线程，并发量1000/s，吞吐量6000/s，查看GC的情况
@SpringBootApplication
public class PerformanceApplication {
    public static void main(String[] args) {
        SpringApplication.run(PerformanceApplication.class, args);
        Executors.newScheduledThreadPool(1).scheduleAtFixedRate(() -> {
            new Thread(() -> {
                for (int i = 0; i < 1000; i++) {
                    try {
                        //  不干活，专门512kb的小对象
                        byte[] temp = new byte[1024 * 512];
                        Thread.sleep(new Random().nextInt(1000)); // 随机睡眠1秒以内
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            }).start();
        }, 100, 100, TimeUnit.MILLISECONDS);
    }
}

// 打包 mvn clean package
// 服务器上运行 performance-1.0.0.jar
```
![](./assets/NeteaseCloud/HighPerformanceTopics/289.jpg)
```sh
java -Xmx1024m -jar performance-1.0.0.jar
```
![](./assets/NeteaseCloud/HighPerformanceTopics/290.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/291.jpg)
```sh
java -Xmx1024m -Xloggc:/netease/gc1.log -jar performance-1.0.0.jar
```
![](./assets/NeteaseCloud/HighPerformanceTopics/292.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/293.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/294.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/295.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/296.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/297.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/298.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/299.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/300.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/301.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/302.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/303.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/304.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/305.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/306.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/307.jpg)
```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Random;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

// 启动程序，模拟用户请求
// 每100毫秒钟创建1000线程，每个线程创建一个512kb的对象，最多100毫秒内同时存在1000线程，并发量1000/s，吞吐量6000/s，查看GC的情况
@SpringBootApplication
public class PerformanceApplication {
    public static void main(String[] args) {
        SpringApplication.run(PerformanceApplication.class, args);
        Executors.newScheduledThreadPool(1).scheduleAtFixedRate(() -> {
            new Thread(() -> {
                for (int i = 0; i < 1000; i++) {
                    try {
                        //  不干活，专门512kb的小对象
                        byte[] temp = new byte[1024 * 512];
                        Thread.sleep(new Random().nextInt(50)); // 随机睡眠50毫秒以内
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            }).start();
        }, 100, 100, TimeUnit.MILLISECONDS);
    }
}

// 打包 mvn clean package
// 服务器上运行 performance-1.0.0.jar
```
![](./assets/NeteaseCloud/HighPerformanceTopics/308.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/309.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/310.jpg)
#### 3.2.2Tomcat网络处理线程模型
![](./assets/NeteaseCloud/HighPerformanceTopics/311.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/312.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/313.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/314.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/315.jpg)
#### 3.2.3Tomcat参数调优
![](./assets/NeteaseCloud/HighPerformanceTopics/316.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/317.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/318.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/319.jpg)
```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Random;
import java.util.concurrent.Callable;

@SpringBootApplication
@RestController
@EnableAsync
public class WebDemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(WebDemoApplication.class, args);
    }

    // 这个方法固定延时3秒，用于测试线程/连接数量控制
    @RequestMapping("/testCount")
    public String testCount() throws InterruptedException {
        Thread.sleep(3000);// connections  acceptCount
        return "Success";
    }

    @RequestMapping("/test")
    public String benchmark() throws InterruptedException {
        System.out.println("访问test：" + Thread.currentThread().getName());

        // 这段代码，一直运算。
        for (int i = 0; i < 200000; i++) {
            new Random().nextInt();
        }
        // 50毫秒的数据库等待，线程不干活
        Thread.sleep(50L);
        return "Success";
    }

    // 异步支持
    @RequestMapping("/testAsync")
    public Callable<String> benchmarkAsync() throws InterruptedException {
        return new Callable<String>() {
            @Override
            public String call() throws Exception {
                System.out.println("访问testAsync：" + Thread.currentThread().getName());
                // 这段代码，一直运算。
                for (int i = 0; i < 200000; i++) {
                    new Random().nextInt();
                }
                // 50毫秒的数据库等待，线程不干活
                Thread.sleep(50L);
                return "Success";
            }
        };
    }
}
```
```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.web.context.request.async.TimeoutCallableProcessingInterceptor;
import org.springframework.web.servlet.config.annotation.AsyncSupportConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

@Configuration
public class WebMvcConfig extends WebMvcConfigurationSupport {
    @Override
    public void configureAsyncSupport(final AsyncSupportConfigurer configurer) {
        configurer.setDefaultTimeout(60 * 1000L);
        configurer.registerCallableInterceptors(timeoutInterceptor());
        configurer.setTaskExecutor(threadPoolTaskExecutor());
    }

    @Bean
    public TimeoutCallableProcessingInterceptor timeoutInterceptor() {
        return new TimeoutCallableProcessingInterceptor();
    }

    @Bean
    public ThreadPoolTaskExecutor threadPoolTaskExecutor() {
        ThreadPoolTaskExecutor t = new ThreadPoolTaskExecutor();
        t.setCorePoolSize(200);
        t.setMaxPoolSize(200);
        t.setThreadNamePrefix("netease-demo-");
        return t;
    }
}
```
```sh
java -jar web-demo-1.1.0.jar --server.tomcat.maxConnections=2 --server.tomcat.maxThread=10 --server.tomcat.acceptCount=3
```
![](./assets/NeteaseCloud/HighPerformanceTopics/320.jpg)
#### 3.2.4内存爆炸、CPU100%问题分析、定位、解决
![](./assets/NeteaseCloud/HighPerformanceTopics/321.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/322.jpg)

```java
import java.util.concurrent.TimeUnit;

// 频繁调用system.gc导致fullgc次数过多
// 使用server模式运行 开启GC日志
// -Xmx512m -server -verbose:gc -XX:+PrintGCDetails -Xloggc:filepath -XX:+HeapDumpOnOutOfMemoryError
public class FullGCDemo1 {
    public static void main(String[] args) throws InterruptedException {

        for (int i = 0; i < 1000; i++) {
            byte[] tmp = new byte[1024 * 1024 * 256]; // 256兆
            System.gc(); // 8G堆 128兆。full GC
            System.out.println("我GC一次了");
            Thread.sleep(2000L);
        }
    }
}
```
![](./assets/NeteaseCloud/HighPerformanceTopics/323.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/324.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/325.jpg)
```java
import com.dianping.cat.Cat;
import com.dianping.cat.message.Event;
import com.dianping.cat.message.Transaction;

// 频繁调用system.gc导致fullgc次数过多
// 使用server模式运行 开启GC日志
// -Xmx512m -server -verbose:gc -XX:+PrintGCDetails
public class FullGCDemoCat {
    public static void main(String[] args) throws InterruptedException {

        for (int i = 0; i < 1000; i++) {
            // 大众点评的cat简单示例
            Transaction t = Cat.newTransaction("URL", "pageName");
            try {
                Cat.logEvent("URL.Server", "192.168.100.242", Event.SUCCESS, "ip=192.168.137.1");
                Cat.logMetricForCount("metric.key");
                Cat.logMetricForDuration("metric.key", 5);
                Thread.sleep(3000L);

                t.setStatus(Transaction.SUCCESS);
            } catch (Exception e) {
                t.setStatus(e);
                Cat.logError(e);
            } finally {
                t.complete();
            }
            // 结束
            byte[] tmp = new byte[1024 * 1024 * 256]; // 256兆
            System.gc();
            System.out.println("我GC一次了");
            Thread.sleep(2000L);
        }
    }
}
```
![](./assets/NeteaseCloud/HighPerformanceTopics/326.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/327.jpg)
```java
import jxl.Cell;
import jxl.Sheet;
import jxl.Workbook;
import jxl.WorkbookSettings;

import java.io.File;

// 使用server模式运行 开启GC日志
// -Xmx512m -server -verbose:gc -XX:+PrintGCDetails
// 很多人都会建议的规避System.gc带来的fullgc风险  -XX:+DisableExplicitGC 禁止程序显示调用gc方法
public class FullGCDemo2 {
    public static void main(String[] args) throws Exception {
        for (int i = 0; i < 1000; i++) {
            WorkbookSettings workbookSettings = new WorkbookSettings();
            workbookSettings.setGCDisabled(true);
            Workbook book = Workbook.getWorkbook(new File(FullGCDemo2.class.getClassLoader().getResource("FullGCDemo2.xls").getFile()), workbookSettings);
            // 获得第一个工作表对象
            Sheet sheet = book.getSheet(0);
            // 得到第一列第一行的单元格
            Cell cell1 = sheet.getCell(0, 0);
            String result = cell1.getContents();
            System.out.println(result);
            book.close(); // 第三方依赖包，内部可能适用了system.gc()
            Thread.sleep(2000L);
        }
    }
}
```
![](./assets/NeteaseCloud/HighPerformanceTopics/328.jpg)
```java
import java.util.ArrayList;

// 资源占用过多或者资源未释放，内存溢出
// 网易碰到问题
public class OutOfMemoryDemo1 {
    static ArrayList<Object> space = new ArrayList<Object>();

    public static void main(String[] args) throws Exception {
        // 内存泄漏 最终会导致  内存溢出
        for (int i = 0; i < 1000; i++) {
            space.add(new byte[1024 * 1024 * 64]); // 64兆
            Thread.sleep(3000L);
        }
    }
}
```
![](./assets/NeteaseCloud/HighPerformanceTopics/329.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/330.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/331.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/332.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/333.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/334.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/335.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/336.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/337.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/338.jpg)
```java
// 内存
public class OutOfMemoryDemo2 {
    public static void main(String[] args) throws Exception {
        // 1、 收到告警，保障可用性 （重启）
        // 2、 重启之前保留现场

        // 由于参数校验不严谨 导致的问题
        // 问题功能描述：查询列表数据.总数据99w订单量
        // controller -- service  ---- rpc
        // 导致一次查询 10W+的数据

        // 或者 请求过多（线程、资源)

    }
}
```
![](./assets/NeteaseCloud/HighPerformanceTopics/339.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/340.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/341.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/342.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/343.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/344.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/345.jpg)
```java
// 处理慢导致的问题(多次jsack定位，比对)
// 递归或死循环计算导致的CPU占用率过高(jstack定位)
public class Cpu100Demo1 {
    public static void main(String[] args) throws InterruptedException {
    }
}
```
```java
// 死锁
public class Cpu100Demo2 {
    public static String obj1 = "obj1";
    public static String obj2 = "obj2";

    public static void main(String[] args) {
        // 处理用户请求时，出现了死锁。用户无响应，多次重试，大量资源被占用（）
        Thread a = new Thread(new Lock1());
        Thread b = new Thread(new Lock2());
        a.start();
        b.start();
    }
}

class Lock1 implements Runnable {
    @Override
    public void run() {
        try {
            System.out.println("Lock1 running");
            while (true) {
                synchronized (Cpu100Demo2.obj1) {
                    System.out.println("Lock1 lock obj1");
                    Thread.sleep(3000);//获取obj1后先等一会儿，让Lock2有足够的时间锁住obj2
                    synchronized (Cpu100Demo2.obj2) {
                        System.out.println("Lock1 lock obj2");
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

class Lock2 implements Runnable {
    @Override
    public void run() {
        try {
            System.out.println("Lock2 running");
            while (true) {
                synchronized (Cpu100Demo2.obj2) {
                    System.out.println("Lock2 lock obj2");
                    Thread.sleep(3000);
                    synchronized (Cpu100Demo2.obj1) {
                        System.out.println("Lock2 lock obj1");
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```
![](./assets/NeteaseCloud/HighPerformanceTopics/346.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/347.jpg)
```java
// 活锁
public class Cpu100Demo3 {
    /**
     * 包子店
     */
    public static Object baozidian = null;

    /**
     * 会导致程序永久等待的wait/notify
     */
    public void waitNotifyDeadLockTest() throws Exception {
        // 启动消费者线程
        new Thread(() -> {
            if (baozidian == null) { // 如果没包子，则进入等待
                try {
                    Thread.sleep(5000L);
                } catch (InterruptedException e1) {
                    e1.printStackTrace();
                }
                synchronized (this) {
                    try {
                        System.out.println("1、进入等待，线程ID为： " + Thread.currentThread().getId());
                        this.wait(); // 多次查看
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            }
            System.out.println("2、买到包子，回家");
        }).start();
        // 3秒之后，生产一个包子
        Thread.sleep(3000L);
        baozidian = new Object();
        synchronized (this) {
            this.notifyAll();
            System.out.println("3、通知消费者");
        }
    }

    public static void main(String[] args) throws Exception {
        new Cpu100Demo3().waitNotifyDeadLockTest();
    }
}
```
```java
import java.util.Random;

// 线程过多导致的问题(jstack定位)
public class Cpu100Demo4 {
    // 资源：每一个请求,业务执行需要占用多少资源，CPU * 1--> 增加资源。
    // 线程池，控制线程数量，升级更高的配置
    public static void main(String[] args) throws InterruptedException {
        for (int i = 0; i < 1000; i++) {
            new Thread(() -> {
                try {
                    int x = 0;
                    for (int j = 0; j < 10000; j++) {
                        x = x + 1;
                        long random = new Random().nextInt(100);
                        Thread.sleep(random); // 模拟c处理耗时
                    }
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }).start();
            long random = new Random().nextInt(500);
            Thread.sleep(random); // 模拟接口调用
        }
    }
}
```
```java
import java.util.Random;

// 个别线程占用资源过多

public class Cpu100Demo5 {
    public static void main(String[] args) throws InterruptedException {
        new Thread(() -> {
            while (true) {
                new Random().nextInt(100);
            }
        }, "CPU-high").start();
        for (int i = 0; i < 1000; i++) {
            new Thread(() -> {
                try {
                    int x = 0;
                    for (int j = 0; j < 10000; j++) {
                        x = x + 1;
                        long random = new Random().nextInt(100);
                        Thread.sleep(random); // 模拟c处理耗时
                    }
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }).start();
            long random = new Random().nextInt(500);
            Thread.sleep(random); // 模拟接口调用
        }
    }
}
```
![](./assets/NeteaseCloud/HighPerformanceTopics/348.jpg)
![](./assets/NeteaseCloud/HighPerformanceTopics/349.jpg)

- top命令查看占用高的PID(十进制)
- printf "%x\n" PID，查看十六进制的PID
- jstack打印进程状态，找到对应PID的进程是否异常
