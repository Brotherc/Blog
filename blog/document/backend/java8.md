---
title: Java-jdk1.8新特性
tags:
  - Java8
---
### HashMap结构
- HashMap如果不用Hash算法、Hash表，那么每添加一个元素都要进行equals判断一次，效率很慢，HashMap默认大小为16。
- jdk1.7 数组+链表
> 首先取对象的HashCode进行运算，生成数组的索引值，根据索引值找到位置，如果对应位置没有元素，则直接存储。
> 如果存在元素，再通过equals比较两个对象的内容，如果内容一样，则覆盖原先的值，内容不一样，则在表头插入，形成链表。
> 我们应该尽量减少元素的碰撞，否则效率很低，一旦出现碰撞，就得遍历整个链表的元素进行equals判断，所以
> HashCode和equals要尽量写得严谨些。但是，即使再严谨碰撞的情况也避免不了。所以HashMap提供了加载因子，当HashMap的
> 大小超过75%时进行扩容，将会对元素重新运算位置，碰撞的概率也因此降低。
- jdk1.8 数组+链表+红黑树
> 当某个链表的长度 > 8 并且总元素 > 64时，将会把链表转成红黑树。这样的好处是，出了添加操作，其他的操作都比链表快，而且扩容时，只需要将整棵树从新运算位置即可。
> 同时，ConcurrentHashMap 的结构也跟着改变，也是数组+链表+红黑树的结构
> 删除了concurrentlevel = 16,采用CAS算法，效率比锁高。

### JVM内存结构
- jdk1.7
> 存在永久区，永久区也会被垃圾回收，只是回收机制比较苛刻。
- jdk1.8
> 没有永久区，取而代之的是MetaSpace元空间。元空间使用的是物理内存（物理内存有多大，元空间就有多大）
> 只有当元空间的容量快满时，才会被回收。现在取决于物理内存（很大）。所以，垃圾回收机制触发的概率也低了。
> OOM发生的概率也低了。
> 调优参数由以前的PremGenSize、MaxPremGenSize替换为MetaSpaceSize和MaxMetaSpaceSize

### 接口中的默认方法与静态方法
demo1:
```java
public interface MyFun {
	default String getName(){
		return "哈哈哈";
	}
}
```
```java
public class MyClass {
	public String getName(){
		return "XXX";
	}
}
```
```java
public class SubClass extends MyClass implements MyFun {}
```
```java
public class TestDefaultInterface {
	public static void main(String[] args) {
		SubClass sc = new SubClass();
		System.out.println(sc.getName()); //XXX
	}
}
```
demo2:
```java
public interface MyInterface {
	default String getName(){
		return "呵呵呵";
	}

	public static void show(){
		System.out.println("接口中的静态方法");
	}
}
```
```java
public class SubClass /*extends MyClass*/ implements MyFun, MyInterface{
	@Override
	public String getName() {
		return MyInterface.super.getName();
	}
}
```
```java
public class TestDefaultInterface {
	public static void main(String[] args) {
		SubClass sc = new SubClass();
		System.out.println(sc.getName()); //呵呵呵

		MyInterface.show(); //接口中的静态方法
	}
}
```


### Stream API 的操作步骤
创建 Stream：
```java
//创建 Stream：
	@Test
	public void test1(){
		//1. Collection 提供了两个方法  stream() 与 parallelStream()
		List<String> list = new ArrayList<>();
		Stream<String> stream = list.stream(); //获取一个顺序流
		Stream<String> parallelStream = list.parallelStream(); //获取一个并行流

		//2. 通过 Arrays 中的 stream() 获取一个数组流
		Integer[] nums = new Integer[10];
		Stream<Integer> stream1 = Arrays.stream(nums);

		//3. 通过 Stream 类中静态方法 of()
		Stream<Integer> stream2 = Stream.of(1,2,3,4,5,6);

		//4. 创建无限流
		//迭代
		Stream<Integer> stream3 = Stream.iterate(0, (x) -> x + 2).limit(10);
		stream3.forEach(System.out::println);

		//生成
		Stream<Double> stream4 = Stream.generate(Math::random).limit(2);
		stream4.forEach(System.out::println);

	}
```
中间操作：
```java
// 初始化数据
	List<Employee> emps = Arrays.asList(
			new Employee(102, "李四", 59, 6666.66, Status.BUSY),
			new Employee(101, "张三", 18, 9999.99, Status.FREE),
			new Employee(103, "王五", 28, 3333.33, Status.VOCATION),
			new Employee(104, "赵六", 8, 7777.77, Status.BUSY),
			new Employee(104, "赵六", 8, 7777.77, Status.FREE),
			new Employee(104, "赵六", 8, 7777.77, Status.FREE),
			new Employee(105, "田七", 38, 5555.55, Status.BUSY)
	);
```
```java
	/*
	  筛选与切片
		filter——接收 Lambda ， 从流中排除某些元素。
		limit——截断流，使其元素不超过给定数量。
		skip(n) —— 跳过元素，返回一个扔掉了前 n 个元素的流。若流中元素不足 n 个，则返回一个空流。与 limit(n) 互补
		distinct——筛选，通过流所生成元素的 hashCode() 和 equals() 去除重复元素
	 */

	//内部迭代：迭代操作 Stream API 内部完成
	@Test
	public void test2(){
		//所有的中间操作不会做任何的处理
		Stream<Employee> stream = emps.stream()
			.filter((e) -> {
				System.out.println("测试中间操作");
				return e.getAge() <= 35;
			});

		//只有当做终止操作时，所有的中间操作会一次性的全部执行，称为“惰性求值”
		stream.forEach(System.out::println);
	}

	//外部迭代
	@Test
	public void test3(){
		Iterator<Employee> it = emps.iterator();

		while(it.hasNext()){
			System.out.println(it.next());
		}
	}

	@Test
	public void test4(){
		emps.stream()
			.filter((e) -> {
				System.out.println("短路！"); // &&  ||
				return e.getSalary() >= 5000;
			}).limit(3)
			.forEach(System.out::println);
	}

	@Test
	public void test5(){
		emps.parallelStream()
			.filter((e) -> e.getSalary() >= 5000)
			.skip(2)
			.forEach(System.out::println);
	}

	@Test
	public void test6(){
		emps.stream()
			.distinct()
			.forEach(System.out::println);
	}
```
```java
	/*
		映射
		map——接收 Lambda ， 将元素转换成其他形式或提取信息。接收一个函数作为参数，该函数会被应用到每个元素上，并将其映射成一个新的元素。
		flatMap——接收一个函数作为参数，将流中的每个值都换成另一个流，然后把所有流连接成一个流
	 */

	@Test
	public void test1(){
		Stream<String> str = emps.stream()
			.map((e) -> e.getName());

		System.out.println("-------------------------------------------");

		List<String> strList = Arrays.asList("aaa", "bbb", "ccc", "ddd", "eee");

		Stream<String> stream = strList.stream()
			   .map(String::toUpperCase);

		stream.forEach(System.out::println);

		Stream<Stream<Character>> stream2 = strList.stream()
			   .map(TestStreamAPI1::filterCharacter);

		stream2.forEach((sm) -> {
			sm.forEach(System.out::println);
		});

		System.out.println("---------------------------------------------");

		Stream<Character> stream3 = strList.stream()
			   .flatMap(TestStreamAPI1::filterCharacter);

		stream3.forEach(System.out::println);
	}

	public static Stream<Character> filterCharacter(String str){
		List<Character> list = new ArrayList<>();

		for (Character ch : str.toCharArray()) {
			list.add(ch);
		}

		return list.stream();
	}
```
```java
	/*
		sorted()——自然排序
		sorted(Comparator com)——定制排序
	 */
	@Test
	public void test2(){
		emps.stream()
			.map(Employee::getName)
			.sorted()
			.forEach(System.out::println);

		System.out.println("------------------------------------");

		emps.stream()
			.sorted((x, y) -> {
				if(x.getAge() == y.getAge()){
					return x.getName().compareTo(y.getName());
				}else{
					return Integer.compare(x.getAge(), y.getAge());
				}
			}).forEach(System.out::println);
	}
```
终止操作：
```java
	/*
		allMatch——检查是否匹配所有元素
		anyMatch——检查是否至少匹配一个元素
		noneMatch——检查是否没有匹配的元素
		findFirst——返回第一个元素
		findAny——返回当前流中的任意元素
		count——返回流中元素的总个数
		max——返回流中最大值
		min——返回流中最小值
	 */
	@Test
	public void test1(){
			boolean bl = emps.stream()
				.allMatch((e) -> e.getStatus().equals(Status.BUSY));

			System.out.println(bl);

			boolean bl1 = emps.stream()
				.anyMatch((e) -> e.getStatus().equals(Status.BUSY));

			System.out.println(bl1);

			boolean bl2 = emps.stream()
				.noneMatch((e) -> e.getStatus().equals(Status.BUSY));

			System.out.println(bl2);
	}

	@Test
	public void test2(){
		Optional<Employee> op = emps.stream()
			.sorted((e1, e2) -> Double.compare(e1.getSalary(), e2.getSalary()))
			.findFirst();

		System.out.println(op.get());

		System.out.println("--------------------------------");

		Optional<Employee> op2 = emps.parallelStream()
			.filter((e) -> e.getStatus().equals(Status.FREE))
			.findAny();

		System.out.println(op2.get());
	}

	@Test
	public void test3(){
		long count = emps.stream()
						 .filter((e) -> e.getStatus().equals(Status.FREE))
						 .count();

		System.out.println(count);

		Optional<Double> op = emps.stream()
			.map(Employee::getSalary)
			.max(Double::compare);

		System.out.println(op.get());

		Optional<Employee> op2 = emps.stream()
			.min((e1, e2) -> Double.compare(e1.getSalary(), e2.getSalary()));

		System.out.println(op2.get());
	}

	//注意：流进行了终止操作后，不能再次使用
	@Test
	public void test4(){
		Stream<Employee> stream = emps.stream()
		 .filter((e) -> e.getStatus().equals(Status.FREE));

		long count = stream.count();

		stream.map(Employee::getSalary)
			.max(Double::compare);
	}

	/*
		归约
		reduce(T identity, BinaryOperator) / reduce(BinaryOperator) ——可以将流中元素反复结合起来，得到一个值。
	 */
	@Test
	public void test1(){
		List<Integer> list = Arrays.asList(1,2,3,4,5,6,7,8,9,10);

		Integer sum = list.stream()
			.reduce(0, (x, y) -> x + y);

		System.out.println(sum);

		System.out.println("----------------------------------------");

		Optional<Double> op = emps.stream()
			.map(Employee::getSalary)
			.reduce(Double::sum);

		System.out.println(op.get());
	}

	//需求：搜索名字中 “六” 出现的次数
	@Test
	public void test2(){
		Optional<Integer> sum = emps.stream()
			.map(Employee::getName)
			.flatMap(TestStreamAPI1::filterCharacter)
			.map((ch) -> {
				if(ch.equals('六'))
					return 1;
				else
					return 0;
			}).reduce(Integer::sum);

		System.out.println(sum.get());
	}

	//collect——将流转换为其他形式。接收一个 Collector接口的实现，用于给Stream中元素做汇总的方法
	@Test
	public void test3(){
		List<String> list = emps.stream()
			.map(Employee::getName)
			.collect(Collectors.toList());

		list.forEach(System.out::println);

		System.out.println("----------------------------------");

		Set<String> set = emps.stream()
			.map(Employee::getName)
			.collect(Collectors.toSet());

		set.forEach(System.out::println);

		System.out.println("----------------------------------");

		HashSet<String> hs = emps.stream()
			.map(Employee::getName)
			.collect(Collectors.toCollection(HashSet::new));

		hs.forEach(System.out::println);
	}

	@Test
	public void test4(){
		Optional<Double> max = emps.stream()
			.map(Employee::getSalary)
			.collect(Collectors.maxBy(Double::compare));

		System.out.println(max.get());

		Optional<Employee> op = emps.stream()
			.collect(Collectors.minBy((e1, e2) -> Double.compare(e1.getSalary(), e2.getSalary())));

		System.out.println(op.get());

		Double sum = emps.stream()
			.collect(Collectors.summingDouble(Employee::getSalary));

		System.out.println(sum);

		Double avg = emps.stream()
			.collect(Collectors.averagingDouble(Employee::getSalary));

		System.out.println(avg);

		Long count = emps.stream()
			.collect(Collectors.counting());

		System.out.println(count);

		System.out.println("--------------------------------------------");

		DoubleSummaryStatistics dss = emps.stream()
			.collect(Collectors.summarizingDouble(Employee::getSalary));

		System.out.println(dss.getMax());
	}

	//分组
	@Test
	public void test5(){
		Map<Status, List<Employee>> map = emps.stream()
			.collect(Collectors.groupingBy(Employee::getStatus));

		System.out.println(map);
	}

	//多级分组
	@Test
	public void test6(){
		Map<Status, Map<String, List<Employee>>> map = emps.stream()
			.collect(Collectors.groupingBy(Employee::getStatus, Collectors.groupingBy((e) -> {
				if(e.getAge() >= 60)
					return "老年";
				else if(e.getAge() >= 35)
					return "中年";
				else
					return "成年";
			})));

		System.out.println(map);
	}

	//分区
	@Test
	public void test7(){
		Map<Boolean, List<Employee>> map = emps.stream()
			.collect(Collectors.partitioningBy((e) -> e.getSalary() >= 5000));

		System.out.println(map);
	}

	//
	@Test
	public void test8(){
		String str = emps.stream()
			.map(Employee::getName)
			.collect(Collectors.joining("," , "----", "----"));

		System.out.println(str);
	}

	@Test
	public void test9(){
		Optional<Double> sum = emps.stream()
			.map(Employee::getSalary)
			.collect(Collectors.reducing(Double::sum));

		System.out.println(sum.get());
	}
```

### 时间日期操作
jdk8以前时间操作线程问题：
```java
  class DateFormatThreadLocal {

  	private static final ThreadLocal<DateFormat> df = new ThreadLocal<DateFormat>(){

  		protected DateFormat initialValue(){
  			return new SimpleDateFormat("yyyyMMdd");
  		}

  	};

  	public static final Date convert(String source) throws ParseException{
  		return df.get().parse(source);
  	}

  }

	public static void main(String[] args) throws Exception {

		/*SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");

		Callable<Date> task = new Callable<Date>() {

			@Override
			public Date call() throws Exception {
				return sdf.parse("20161121");
			}

		};

		ExecutorService pool = Executors.newFixedThreadPool(10);

		List<Future<Date>> results = new ArrayList<>();

		for (int i = 0; i < 10; i++) {
			results.add(pool.submit(task));
		}

		for (Future<Date> future : results) {
			System.out.println(future.get());
		}

		pool.shutdown();*/

		//解决多线程安全问题
		/*Callable<Date> task = new Callable<Date>() {

			@Override
			public Date call() throws Exception {
				return DateFormatThreadLocal.convert("20161121");
			}

		};

		ExecutorService pool = Executors.newFixedThreadPool(10);

		List<Future<Date>> results = new ArrayList<>();

		for (int i = 0; i < 10; i++) {
			results.add(pool.submit(task));
		}

		for (Future<Date> future : results) {
			System.out.println(future.get());
		}

		pool.shutdown();*/

		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyyMMdd");

		Callable<LocalDate> task = new Callable<LocalDate>() {

			@Override
			public LocalDate call() throws Exception {
				LocalDate ld = LocalDate.parse("20161121", dtf);
				return ld;
			}

		};

		ExecutorService pool = Executors.newFixedThreadPool(10);

		List<Future<LocalDate>> results = new ArrayList<>();

		for (int i = 0; i < 10; i++) {
			results.add(pool.submit(task));
		}

		for (Future<LocalDate> future : results) {
			System.out.println(future.get());
		}

		pool.shutdown();
	}
```
新的时间API
```java
	//1. LocalDate、LocalTime、LocalDateTime
	@Test
	public void test1(){
		LocalDateTime ldt = LocalDateTime.now();
		System.out.println(ldt);

		LocalDateTime ld2 = LocalDateTime.of(2016, 11, 21, 10, 10, 10);
		System.out.println(ld2);

		LocalDateTime ldt3 = ld2.plusYears(20);
		System.out.println(ldt3);

		LocalDateTime ldt4 = ld2.minusMonths(2);
		System.out.println(ldt4);

    LocalDateTime ldt5 = LocalDateTime.ofInstant(Instant.now(), ZoneId.systemDefault());
    System.out.println(ldt5);

		System.out.println(ldt.getYear());
		System.out.println(ldt.getMonthValue());
		System.out.println(ldt.getDayOfMonth());
		System.out.println(ldt.getHour());
		System.out.println(ldt.getMinute());
		System.out.println(ldt.getSecond());
	}
```
```java
	//2. Instant : 时间戳。 （使用 Unix 元年  1970年1月1日 00:00:00 所经历的毫秒值）
	@Test
	public void test2(){
		Instant ins = Instant.now();  //默认使用 UTC 时区
		System.out.println(ins);

		OffsetDateTime odt = ins.atOffset(ZoneOffset.ofHours(8));
		System.out.println(odt);

		System.out.println(ins.getNano());

		Instant ins2 = Instant.ofEpochSecond(5);
    // Instant.ofEpochMilli(1471337924226L)
		System.out.println(ins2);

    // 时间戳转Date
    Date date = Date.from(Instant.ofEpochMilli(1471337924226L);
    System.out.println(date);
	}
```
```java
	//3.
	//Duration : 用于计算两个“时间”间隔
	//Period : 用于计算两个“日期”间隔
	@Test
	public void test3(){
		Instant ins1 = Instant.now();

		System.out.println("--------------------");
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
		}

		Instant ins2 = Instant.now();

		System.out.println("所耗费时间为：" + Duration.between(ins1, ins2));

		System.out.println("----------------------------------");

		LocalDate ld1 = LocalDate.now();
		LocalDate ld2 = LocalDate.of(2011, 1, 1);

		Period pe = Period.between(ld2, ld1);
		System.out.println(pe.getYears());
		System.out.println(pe.getMonths());
		System.out.println(pe.getDays());
	}
```
```java
	//4. TemporalAdjuster : 时间校正器
	@Test
	public void test4(){
	LocalDateTime ldt = LocalDateTime.now();
		System.out.println(ldt);

		LocalDateTime ldt2 = ldt.withDayOfMonth(10);
		System.out.println(ldt2);

		LocalDateTime ldt3 = ldt.with(TemporalAdjusters.next(DayOfWeek.SUNDAY));
		System.out.println(ldt3);

		//自定义：下一个工作日
		LocalDateTime ldt5 = ldt.with((l) -> {
			LocalDateTime ldt4 = (LocalDateTime) l;

			DayOfWeek dow = ldt4.getDayOfWeek();

			if(dow.equals(DayOfWeek.FRIDAY)){
				return ldt4.plusDays(3);
			}else if(dow.equals(DayOfWeek.SATURDAY)){
				return ldt4.plusDays(2);
			}else{
				return ldt4.plusDays(1);
			}
		});

		System.out.println(ldt5);

	}
```
```java
	//5. DateTimeFormatter : 解析和格式化日期或时间
	@Test
	public void test5(){
//		DateTimeFormatter dtf = DateTimeFormatter.ISO_LOCAL_DATE;

		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy年MM月dd日 HH:mm:ss E");

		LocalDateTime ldt = LocalDateTime.now();
		String strDate = ldt.format(dtf);

		System.out.println(strDate);

		LocalDateTime newLdt = ldt.parse(strDate, dtf);
		System.out.println(newLdt);
	}
```
```java
	//6.ZonedDate、ZonedTime、ZonedDateTime ： 带时区的时间或日期********
	@Test
	public void test7(){
		LocalDateTime ldt = LocalDateTime.now(ZoneId.of("Asia/Shanghai"));
		System.out.println(ldt);

		ZonedDateTime zdt = ZonedDateTime.now(ZoneId.of("US/Pacific"));
		System.out.println(zdt);
	}

	@Test
	public void test6(){
		Set<String> set = ZoneId.getAvailableZoneIds();
		set.forEach(System.out::println);

    ZoneId defaultZone = ZoneId.systemDefault();
    System.out.println(defaultZone);
	}
```
### Optional类
```java
/*
 * 一、Optional 容器类：用于尽量避免空指针异常
 * 	Optional.of(T t) : 创建一个 Optional 实例
 * 	Optional.empty() : 创建一个空的 Optional 实例
 * 	Optional.ofNullable(T t):若 t 不为 null,创建 Optional 实例,否则创建空实例
 * 	isPresent() : 判断是否包含值
 * 	orElse(T t) :  如果调用对象包含值，返回该值，否则返回t
 * 	orElseGet(Supplier s) :如果调用对象包含值，返回该值，否则返回 s 获取的值
 * 	map(Function f): 如果有值对其处理，并返回处理后的Optional，否则返回 Optional.empty()
 * 	flatMap(Function mapper):与 map 类似，要求返回值必须是Optional
 */

 	@Test
	public void test1(){
		Optional<Employee> op = Optional.of(new Employee());
		Employee emp = op.get();
		System.out.println(emp);
	}

	@Test
	public void test2(){
		/*Optional<Employee> op = Optional.ofNullable(null);
		System.out.println(op.get());*/

//		Optional<Employee> op = Optional.empty();
//		System.out.println(op.get());
	}

	@Test
	public void test3(){
		Optional<Employee> op = Optional.ofNullable(new Employee());

		if(op.isPresent()){
			System.out.println(op.get());
		}

		Employee emp = op.orElse(new Employee("张三"));
		System.out.println(emp);

		Employee emp2 = op.orElseGet(() -> new Employee());
		System.out.println(emp2);
	}

	@Test
	public void test4(){
		Optional<Employee> op = Optional.of(new Employee(101, "张三", 18, 9999.99));

		Optional<String> op2 = op.map(Employee::getName);
		System.out.println(op2.get());

		Optional<String> op3 = op.flatMap((e) -> Optional.of(e.getName()));
		System.out.println(op3.get());
	}

	//需求：获取一个男人心中女神的名字
	public String getGodnessName(Man man){
		if(man != null){
			Godness g = man.getGod();

			if(g != null){
				return g.getName();
			}
		}
		return "老师";
	}
	public String getGodnessName2(Optional<NewMan> man){
		return man.orElse(new NewMan())
				  .getGodness()
				  .orElse(new Godness("老师"))
				  .getName();
	}

	@Test
	public void test5(){
		Man man = new Man();

		String name = getGodnessName(man);
		System.out.println(name);
	}

	//运用 Optional 的实体类
	@Test
	public void test6(){
		Optional<Godness> godness = Optional.ofNullable(new Godness("林志玲"));

		Optional<NewMan> op = Optional.ofNullable(new NewMan(godness));
		String name = getGodnessName2(op);
		System.out.println(name);
	}
```
