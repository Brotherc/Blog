---
title: Java-常用类
tags:
  - Java基础
---

### Object类概述及其构造方法

#### 构造方法
public Object()

#### 成员方法
public int hashCode()
```
A:返回该对象的哈希码值。默认情况下，该方法会根据对象的地址来计算
B:不是实际地址值，可以理解为逻辑地址值。
```

public final Class getClass()
```java
A:返回对象的字节码文件对象，反射中我们会详细讲解
B:可以通过Class类中的一个方法，获取对象的真实类的全名称。
	public String getName()
```

public String toString()
```java
A:返回该对象的字符串表示。
	底层源码。
	public static String valueOf(Object obj) {
    return (obj == null) ? "null" : obj.toString();
  }
B:它的值等于：
	getClass().getName() + '@' + Integer.toHexString(hashCode())
C:由于默认情况下的数据对我们来说没有意义，一般建议重写该方法，但是最终还是自动生成。
```

public boolean equals(Object?obj)
```
A:指示其他某个对象是否与此对象“相等”。
B:默认情况下比较的是对象的引用是否相同。
C:由于比较对象的引用没有意义，一般建议重写该方法，但是最终还是自动生成。
D:两个注意问题:
	·直接输出一个对象名称，其实默认调用了该对象的toString()方法。
	·==和equals()的区别。(面试题)
	A:==
		基本类型：比较的是值是否相同
		引用类型：比较的是地址值是否相同
	B:equals()
		只能比较引用类型。默认情况下，比较的是地址值是否相同。
		但是，我们可以根据自己的需要重写该方法。
```

protected void finalize()
```
A:当垃圾回收器确定不存在对该对象的更多引用时，由对象的垃圾回收器调用此方法。
B:垃圾回收器不会马上回收垃圾，但是我们可以建议它尽快回收垃圾。(System.gc()方法)
C:主要针对堆内存。
```

protected Object clone()
```java
创建并返回此对象的一个副本，这种克隆机制十分高效，而且二者之间完全隔离。
自定义类实现克隆步骤：
	A:自定义类实现Cloneable接口，这是个标记性接口，实现这个接口的类的对象可实现自我克隆。
	B:自定义类中重写Object类的clone()方法。
	C:重写clone()方法时通过super.clone()调用Object类的clone()方法来得到该对象的副本，并返回该副本。

注意：A:克隆和两个引用指向同一个对象的区别?
      B:Object类clone()方法虽然简单，易用，但仅仅是一种”浅克隆”,它只克隆该对象所有的Field值，        不会对引用类型的Field所引用的对象进行克隆。开发中，我们也可以实现对象的”深度克隆”。

public class Student implements cloneable{
	...
	@Override
	protected Object clone(){
		return super.clone();
	}
}
public class StudentDemo{
	public static void main(String[] args){
		Student s=new Student();
		Object obj=s.clone();
		Student s2=(Student)obj;
	}
}
```

### Scanner类概述及其构造方法
#### 构造方法
```java
A:讲解了System.in这个东西。
	它其实是标准的输入流,对应于键盘录入
B:构造方法
	InputStream is = System.in;

	Scanner(InputStream is)
C:常用的格式
	Scanner sc = new Scanner(System.in);
```

#### 基本方法格式
```
A:hasNextXxx() 判断是否是某种类型的
B:nextXxx()	返回某种类型的元素
```

#### 掌握的两个方法
```java
A:public int nextInt()
B:public String nextLine()
```

```
需要注意的小问题
A:同一个Scanner对象，先获取数值，再获取字符串会出现一个小问题。
B:解决方案：
	a:重新定义一个Scanner对象
	b:把所有的数据都用字符串获取，然后再进行相应的转换
```

### String类概述及其构造方法
#### 构造方法
```java
public String()
public String(byte[] bytes)
public String(byte[] bytes,int offset,int length)
public String(char[] value)
public String(char[] value,int offset,int count)
public String(String original)
·注意：
  String s = “helloworld”;
  s也是一个对象。
```

#### String类的特点及面试题
```java
·字符串一旦被赋值，就不能改变。（这里指的是字符串的内容不能改变，而不是引用不能改变。）
·String s = new String("hello");和String s = "hello"的区别?
  前者创建2个对象，后者创建1个对象。

说一下字符串中的equals()方法重写了Object()的方法，比较的是内容。


A:==和equals()
		String s1 = new String("hello");
		String s2 = new String("hello");
		System.out.println(s1 == s2);// false
		System.out.println(s1.equals(s2));// true

		String s3 = new String("hello");
		String s4 = "hello";
		System.out.println(s3 == s4);// false
		System.out.println(s3.equals(s4));// true

		String s5 = "hello";
		String s6 = "hello";
		System.out.println(s5 == s6);// true
		System.out.println(s5.equals(s6));// true
B:字符串的拼接
		String s1 = "hello";
		String s2 = "world";
		String s3 = "helloworld";
		System.out.println(s3 == s1 + s2);// false
		System.out.println(s3.equals((s1 + s2)));// true

		System.out.println(s3 == "hello" + "world");// true
		System.out.println(s3.equals("hello" + "world"));// true

字符串如果是变量相加，先开空间，再拼接。
字符串如果是常量相加，是先加，然后在常量池找，如果有就直接返回，否则，就创建。
```

#### String类的判断功能
```java
boolean equals(Object obj)：区分大小写
boolean equalsIgnoreCase(String str)：忽略大小写
boolean contains(String str)：判断大字符串中是否包含小字符串
boolean startsWith(String str)：判断字符串是否以某个指定的字符串开头
boolean endsWith(String str)：
boolean isEmpty()判断字符串内容是否为空
```

#### String类的获取功能
```java
int length()
char charAt(int index)
int indexOf(int ch)
int indexOf(String str)
int indexOf(int ch,int fromIndex)
int indexOf(String str,int fromIndex)
String substring(int start)
String substring(int start,int end)（包start不包end）
```

#### String类的转换功能
```java
byte[] getBytes()
char[] toCharArray()
static String valueOf(char[] chs)
static String valueOf(int i)
String toLowerCase()
String toUpperCase()
String concat(String str）
```

#### String类的其他功能
```java
·替换功能
  String replace(char old,char new)
  String replace(String old,String new)
·去除字符串两空格
  String trim()
·按字典顺序比较两个字符串
  int compareTo(String str)
  int compareToIgnoreCase(String str)
```

### StringBuffer类概述
用字符串做拼接，比较耗时并且也耗内存，而这种拼接操作又是比较常见的，为   了解决这个问题，Java就提供了一个字符串缓冲区类。StringBuffer供我们使用

#### 构造方法
```java
StringBuffer()
StringBuffer(int size)
StringBuffer(String str)
```

#### 成员方法
```java
·添加功能
  public StringBuffer append(String str)
  public StringBuffer insert(int offset,String str)
·删除功能
  public StringBuffer deleteCharAt(int index)
  public StringBuffer delete(int start,int end)
·替换功能
  public StringBuffer replace(int start,int end,String str)
·反转功能
  public StringBuffer reverse()
·截取功能
  public String substring(int start)
  public String substring(int start,int end)
  截取功能和前面几个功能的不同
  返回值类型是String类型，本身没有发生改变
```

#### StringBuffer和String的区别?
```
前者长度和内容可变，后者不可变
如果使用前者做字符串的拼接，不会浪费太多的资源
```

#### 面试题
```
小细节：
	StringBuffer：同步的，数据安全，效率低。
	StringBuilder：不同步的，数据不安全，效率高。
A:String,StringBuffer,StringBuilder的区别
B:StringBuffer和数组的区别?
	二者都可以看做是一个容器，装其他的数据，
	但是，StringBuffer的数据最终是一个字符串数据
	而数组可以放置多种数据，但必须是同一种类型
```

#### String作为形式参数，StringBuffer作为形式参数。
```java
    public static void main(String[] args) {
        String s1="hello";
        String s2="world";
        System.out.println(s1+"---"+s2);
        change(s1,s2);
        System.out.println(s1+"---"+s2);


        StringBuffer sb1=new StringBuffer("hello");
        StringBuffer sb2=new StringBuffer("world");
        System.out.println(sb1+"---"+sb2);
        change(sb1,sb2);
        System.out.println(sb1+"---"+sb2);

    }
    private static void change(String s1,String s2){
        s1 = s2;
        s2 = s1 + s2;
    }

    private static void change(StringBuffer sb1,StringBuffer sb2){
        sb1 = sb2;
        sb1.append(sb2);
    }
```
```
hello---world
hello---world
hello---world
hello---worldworld
```

### 数组高级
#### 冒泡排序
相邻元素两两比较，大的往后放，第一次完毕，最大值出现在了最大索引处。同理，其他的元素就可以排好。
```java
			public static void bubbleSort(int[] arr) {
				for(int x=0; x<arr.length-1; x++) {
					for(int y=0; y<arr.length-1-x; y++) {
						if(arr[y] > arr[y+1]) {
							int temp = arr[y];
							arr[y] = arr[y+1];
							arr[y+1] = temp;
						}
					}
				}
			}
```

#### 选择排序
把0索引的元素，和索引1以后的元素都进行比较，第一次完毕，最小值出现在了0索引。同理，其他的元素就可以排好。
```java
			public static void selectSort(int[] arr) {
				for(int x=0; x<arr.length-1; x++) {
					for(int y=x+1; y<arr.length; y++) {
						if(arr[y] < arr[x]) {
							int temp = arr[x];
							arr[x] = arr[y];
							arr[y] = temp;
						}
					}
				}
			}
```

#### 基本查找
针对数组无序的情况
```java
			public static int getIndex(int[] arr,int value) {
				int index = -1;

				for(int x=0; x<arr.length; x++) {
					if(arr[x] == value) {
						index = x;
						break;
					}
				}

				return index;
			}
```

#### 二分查找(折半查找)
针对数组有序的情况(千万不要先排序，在查找)
```java
			public static int binarySearch(int[] arr,int value) {
				int min = 0;
				int max = arr.length-1;
				int mid = (min+max)/2;

				while(arr[mid] != value) {
					if(arr[mid] > value) {
						max = mid - 1;
					}else if(arr[mid] < value) {
						min = mid + 1;
					}

					if(min > max) {
						return -1;
					}

					mid = (min+max)/2;
				}

				return mid;
			}
```

### Arrays类概述及其常用方法
#### Arrays类概述
针对数组进行操作的工具类。
提供了排序，查找等功能。
#### 成员方法
  public static String toString(int[] a)
  public static void sort(int[] a)
  public static int binarySearch(int[] a,int key)

### 基本类型包装类概述
·常用的操作之一：用于基本数据类型与字符串之间的转换。
·基本类型和包装类的对应
  Byte,Short,Integer,Long,Float,Double，Character,Boolean

#### Integer类概述及其构造方法

##### 构造方法
```java
  public Integer(int value)
  public Integer(String s)
	A:Integer i = new Integer(100);
	B:Integer i = new Integer("100");
·注意：这里的字符串必须是由数字字符组成
```

##### 成员方法
```java
·int类型和String类型的相互转换
A:String -- int
	Integer.parseInt("100");
B:int -- String
	String.valueOf(100);

public int intValue()
public static int parseInt(String s)
public static String toString(int i)
public static Integer valueOf(int i)
public static Integer valueOf(String s)

·常用的基本进制转换
  public static String toBinaryString(int i)
  public static String toOctalString(int i)
  public static String toHexString(int i)
·十进制到其他进制
  public static String toString(int i,int radix)
·其他进制到十进制
  public static int parseInt(String s,int radix)
·Java程序中的进制范围
	2-36
```

##### JDK5的新特性
```java
·JDK1.5以后，简化了定义方式。
  Integer x = new Integer(4);可以直接写成
  Integer x = 4;//自动装箱。
  x  = x + 5;//自动拆箱。通过intValue方法。
·需要注意：
  在使用时，Integer  x = null;上面的代码就会出现NullPointerException。
```

##### 面试题
缓冲池(看程序写结果)
```java
        Integer i1 = new Integer(127);
        Integer i2 = new Integer(127);
        System.out.println(i1 == i2);
        System.out.println(i1.equals(i2));

        Integer i3 = new Integer(128);
        Integer i4 = new Integer(128);
        System.out.println(i3 == i4);
        System.out.println(i3.equals(i4));

        Integer i5 = 127;
        Integer i6 = 127;
        System.out.println(i5 == i6);
        System.out.println(i5.equals(i6));

        Integer.valueOf(127);

        Integer i7 = 128;
        Integer i8 = 128;
        System.out.println(i7 == i8);
        System.out.println(i7.equals(i8));
```
```
false
true
false
true
true
true
false
true
```
注意：Integer的数据直接赋值，如果在-128到127之间，会直接从缓冲池里去取数据
针对-128到127之间的数据，做了一个数据缓冲池。

#### Character类概述及其构造方法
##### 构造方法
```java
  public Character(char value)
	Character ch = new Character('a');
```

##### 成员方法
```
  public static boolean isUpperCase(char ch)
  public static boolean isLowerCase(char ch)
  public static boolean isDigit(char ch)
  public static char toUpperCase(char ch)
  public static char toLowerCase(char ch)

A:判断给定的字符是否是大写
B:判断给定的字符是否是小写
C:判断给定的字符是否是数字字符
D:把给定的字符转成大写
E:把给定的字符转成小写
```

### 正则表达式概述及基本使用
正则表达式：是指一个用来描述或者匹配一系列符合某个句法规则的字符串的单个字符串。其实就是一种规则。有自己特殊的应用。

#### 常见规则
字符:
```
			x 字符 x。举例：'a'表示字符a
			\\ 反斜线字符。
			\n 新行（换行）符 ('\u000A')
			\r 回车符 ('\u000D')
```

字符类:
```
			[abc] a、b 或 c（简单类）
			[^abc] 任何字符，除了 a、b 或 c（否定）
			[a-zA-Z] a到 z 或 A到 Z，两头的字母包括在内（范围）
			[0-9] 0到9的字符都包括
```

预定义字符类:
```
			. 任何字符。我的就是.字符本身，怎么表示呢? \.
			\d 数字：[0-9]
			\w 单词字符：[a-zA-Z_0-9]
				在正则表达式里面组成单词的东西必须有这些东西组成
```

边界匹配器:
```
			^ 行的开头
			$ 行的结尾
			\b 单词边界
				就是不是单词字符的地方。
				举例：hello world?haha;xixi
```

Greedy 数量词:
```
			X? X，一次或一次也没有
			X* X，零次或多次
			X+ X，一次或多次
			X{n} X，恰好 n 次
			X{n,} X，至少 n 次
			X{n,m} X，至少 n 次，但是不超过 m 次
```

#### 常见功能：(分别用的是谁呢?)
```java
		A:判断功能
			String类的public boolean matches(String regex)
		B:分割功能
			String类的public String[] split(String regex)
		C:替换功能
			String类的public String replaceAll(String regex,String replacement)
		D:获取功能
			Pattern和Matcher
				Pattern p = Pattern.compile("a*b");
				Matcher m = p.matcher("aaaaab");

				find():查找存不存在
				group():获取刚才查找过的数据
```
判断:
```java
public static booleam chackQQ(String qq){
	String reqex="[1-9][0-9]{4,14}";
	booleam flag=qq.matches(reqex);
	return flag;
}

public static booleam chackEmail(String email){
	String reqex="[a-zA-Z_0-9]+@[a-zA-Z_0-9]{2,6}(\\.[a-zA-Z-0-9]{2,3})+";
//	String reqex="\\w+@\\w{2,6}(\\.\\w{2,3})+";
	booleam flag=email.matches(reqex);
	return flag;
}
```
分割:
```java
String ages = "18-24";

String regex = "-";

String[] strArray = ages.split(regex);

public static void main(String[] args) {
	// 定义一个字符串
	String s1 = "aa,bb,cc";
	// 直接分割
	String[] str1Array = s1.split(",");
	for (int x = 0; x < str1Array.length; x++) {
		System.out.println(str1Array[x]);
	}
	System.out.println("---------------------");

	String s2 = "aa.bb.cc";
	String[] str2Array = s2.split("\\.");
	for (int x = 0; x < str2Array.length; x++) {
		System.out.println(str2Array[x]);
	}
	System.out.println("---------------------");

	String s3 = "aa    bb                cc";
	String[] str3Array = s3.split(" +");
	for (int x = 0; x < str3Array.length; x++) {
		System.out.println(str3Array[x]);
	}
	System.out.println("---------------------");

	//硬盘上的路径，我们应该用\\替代\
	String s4 = "E:\\JavaSE\\day14\\avi";
	String[] str4Array = s4.split("\\\\");
	for (int x = 0; x < str4Array.length; x++) {
		System.out.println(str4Array[x]);
	}
	System.out.println("---------------------");
}
```

替换:
```java

 	String类的public String replaceAll(String regex,String replacement)
 	使用给定的 replacement 替换此字符串所有匹配给定的正则表达式的子字符串。
public class RegexDemo {
	public static void main(String[] args) {
		// 定义一个字符串
		String s = "helloqq12345worldkh622112345678java";

		// 我要去除所有的数字,用*给替换掉
		// String regex = "\\d+";
		// String regex = "\\d";
		//String ss = "*";


		// 直接把数字干掉
		String regex = "\\d+";
		String ss = "";

		String result = s.replaceAll(regex, ss);
		System.out.println(result);
	}
}
```

获取:
```java
		Pattern和Matcher类的使用

		模式和匹配器的基本使用顺序

public class RegexDemo {
	public static void main(String[] args) {
		// 模式和匹配器的典型调用顺序
		// 把正则表达式编译成模式对象
		Pattern p = Pattern.compile("a*b");
		// 通过模式对象得到匹配器对象，这个时候需要的是被匹配的字符串
		Matcher m = p.matcher("aaaaab");
		// 调用匹配器对象的功能
		boolean b = m.matches();
		System.out.println(b);

		//这个是判断功能，但是如果做判断，这样做就有点麻烦了，我们直接用字符串的方法做
		String s = "aaaaab";
		String regex = "a*b";
		boolean bb = s.matches(regex);
		System.out.println(bb);
	}
}
				find():查找存不存在
				group():获取刚才查找过的数据
```

### Math类概述
Math 类包含用于执行基本数学运算的方法，如初等指数、对数、平方根和三角函数。
#### 成员方法
```java
public static int abs(int a)绝对值
public static double ceil(double a)向上取整
public static double floor(double a)向下取整
public static int max(int a,int b) 两个数据中的大值  min自学
public static double pow(double a,double b)a的b次幂
public static double random()随机数
public static int round(float a)  四舍五入  参数为double的自学
public static double sqrt(double a)正平方根
```

### Random类概述及其构造方法
Random:产生随机数的类
#### 构造方法
```java
public Random():没有给种子，用的是默认种子，是当前时间的毫秒值
public Random(long seed):给出指定的种子

给定种子后，每次得到的随机数是相同的。
```

#### 成员方法
```java
public int nextInt()：返回的是int范围内的随机数
public int nextInt(int n):返回的是[0,n)范围的内随机数
```

```java
public class RandomDemo {
	public static void main(String[] args) {
		// 创建对象
		// Random r = new Random();
		Random r = new Random(1111);

		for (int x = 0; x < 10; x++) {
			// int num = r.nextInt();
			int num = r.nextInt(100) + 1;
			System.out.println(num);
		}
	}
}
```

### System类概述及其成员方法
#### System类概述
System 类包含一些有用的类字段和方法。它不能被实例化。
#### 成员方法
```java
public static void gc()运行垃圾回收器
public static void exit(int status)终止当前正在运行的 Java 虚拟机。参数用作状态码；根据惯例，非 0 的状态码表示异常终止。
public static long currentTimeMillis()返回以毫秒为单位的当前时间
public static void arraycopy(Object src,int srcPos,Object dest,int destPos,int length)数组复制
```
```java
public class Person {
...

	@Override
	protected void finalize() throws Throwable {
		System.out.println("当前的对象被回收了" + this);
		super.finalize();
	}

}


public class SystemDemo {
	public static void main(String[] args) {
		Person p = new Person("赵雅芝", 60);
		System.out.println(p);

		p = null; // 让p不再指定堆内存
		System.gc();
	}
}
```
```java
public class SystemDemo {
	public static void main(String[] args) {
		// 定义数组
		int[] arr = { 11, 22, 33, 44, 55 };
		int[] arr2 = { 6, 7, 8, 9, 10 };

		// 请大家看这个代码的意思
		System.arraycopy(arr, 1, arr2, 2, 2);

		System.out.println(Arrays.toString(arr));
		System.out.println(Arrays.toString(arr2));
	}
}
```
```
[11, 22, 33, 44, 55]
[6, 7, 22, 33, 10]
```

### BigInteger类概述及其构造方法
BigInteger:可以让超过Integer范围内的数据进行运算
#### 构造方法
```java
BigInteger(String val)
```

```java
public class BigIntegerDemo {
	public static void main(String[] args) {
		// 这几个测试，是为了简单超过int范围内，Integer就不能再表示，所以就更谈不上计算了。
		// Integer i = new Integer(100);
		// System.out.println(i);
		// // System.out.println(Integer.MAX_VALUE);
		// Integer ii = new Integer("2147483647");
		// System.out.println(ii);
		// // NumberFormatException
		// Integer iii = new Integer("2147483648");
		// System.out.println(iii);

		// 通过大整数来创建对象
		BigInteger bi = new BigInteger("2147483648");
		System.out.println("bi:" + bi);
	}
}
```

#### 成员方法
```java
public BigInteger add(BigInteger val):加
public BigInteger subtract(BigInteger val):减
public BigInteger multiply(BigInteger val):乘
public BigInteger divide(BigInteger val):除
public BigInteger[] divideAndRemainder(BigInteger val):返回商和余数的数组
```

### BigDecimal类概述及其构造方法
因为float类型的数据存储和整数不一样导致的。它们大部分的时候，都是带有有效数字位。
由于在运算的时候，float类型和double很容易丢失精度，演示案例。所以，为了能精确的表示、计算浮点数，Java提供了BigDecimal
BigDecimal类：不可变的、任意精度的有符号十进制数,可以解决数据丢失问题。

#### 成员方法
```java
public BigDecimal add(BigDecimal augend)
public BigDecimal subtract(BigDecimal subtrahend)
public BigDecimal multiply(BigDecimal multiplicand)
public BigDecimal divide(BigDecimal divisor)
public BigDecimal divide(BigDecimal divisor,int scale,int roundingMode):商，几位小数，如何舍取
```

### Date类概述及其方法
#### Date类概述
类 Date 表示特定的瞬间，精确到毫秒。

#### 构造方法
```java
Date():根据当前的默认毫秒值创建日期对象
Date(long date)：根据给定的毫秒值创建日期对象
```

#### 成员方法
```java
public long getTime():获取时间，以毫秒为单位
public void setTime(long time):设置时间
```

### DateFormat类概述及其方法
DateForamt:可以进行日期和字符串的格式化和解析，但是由于是抽象类，所以使用具体子类SimpleDateFormat。
#### 构造方法
```java
public SimpleDateFormat():默认模式
public SimpleDateFormat(String pattern):给定的模式
```

#### 成员方法
```java
public final String format(Date date)  Date	 --	 String(格式化)
public Date parse(String source)       String -- Date(解析)
年 y
月 M
日 d
时 H
分 m
秒 s
```

```java
public class DateFormatDemo {
	public static void main(String[] args) throws ParseException {

		Date d = new Date();

		SimpleDateFormat sdf = new SimpleDateFormat("yyyy年MM月dd日 HH:mm:ss");
		String s = sdf.format(d);
		System.out.println(s);


		String str = "2008-08-08 12:12:12";
		//在把一个字符串解析为日期的时候，请注意格式必须和给定的字符串格式匹配
		SimpleDateFormat sdf2 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date dd = sdf2.parse(str);
		System.out.println(dd);
	}
}
```

### Calendar类概述及其方法
Calendar:它为特定瞬间与一组诸如 YEAR、MONTH、DAY_OF_MONTH、HOUR 等 日历字段之间的转换提供了一些方法，并为操作日历字段（例如获得下星期的日期）提供了一些方法。
#### 成员方法
```java
public static Calendar getInstance()本质返回的是子类对象
public int get(int field)
public void add(int field,int amount):根据给定的日历字段和对应的时间，来对当前的日历进行操作。
public final void set(int year,int month,int date)设置当前日历的年月日
```

```java
public class CalendarDemo {
	public static void main(String[] args) {
		// 获取当前的日历时间
		Calendar c = Calendar.getInstance();

		// 获取年
		int year = c.get(Calendar.YEAR);
		// 获取月
		int month = c.get(Calendar.MONTH);
		// 获取日
		int date = c.get(Calendar.DATE);
		System.out.println(year + "年" + (month + 1) + "月" + date + "日");

		// 5年后的10天前
		c.add(Calendar.YEAR, 5);
		c.add(Calendar.DATE, -10);
		// 获取年
		year = c.get(Calendar.YEAR);
		// 获取月
		month = c.get(Calendar.MONTH);
		// 获取日
		date = c.get(Calendar.DATE);
		System.out.println(year + "年" + (month + 1) + "月" + date + "日");
		System.out.println("--------------");

		c.set(2011, 11, 11);
		// 获取年
		year = c.get(Calendar.YEAR);
		// 获取月
		month = c.get(Calendar.MONTH);
		// 获取日
		date = c.get(Calendar.DATE);
		System.out.println(year + "年" + (month + 1) + "月" + date + "日");
	}
}
```
### Runtime类
Runtime:每个 Java 应用程序都有一个 Runtime 类实例，使应用程序能够与其运行的环境相连接。
```java
exec(String command)

public class RuntimeDemo {
	public static void main(String[] args) throws IOException {
		Runtime r = Runtime.getRuntime();
//		r.exec("winmine");
		// r.exec("notepad");
		// r.exec("calc");
//		r.exec("shutdown -s -t 10000");
		r.exec("shutdown -a");
	}
}

class Runtime {
	private Runtime() {}
	private static Runtime currentRuntime = new Runtime();
	public static Runtime getRuntime() {
      		return currentRuntime;
   	}
}
```
