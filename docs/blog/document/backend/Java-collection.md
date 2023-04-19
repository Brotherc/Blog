---
title: Java-集合
tags:
  - Java基础
---

### 集合和数组的区别?
```
A:长度区别
	数组固定
	集合可变
B:内容区别
	数组可以是基本类型，也可以是引用类型
	集合只能是引用类型
C:元素内容
	数组只能存储同一种类型
	集合可以存储不同类型(其实集合一般存储的也是同一种类型)
```

### 集合的继承体系结构
```
由于需求不同，Java就提供了不同的集合类。这多个集合类的数据结构不同，但是它们都是要提供存储和遍历功能的，
我们把它们的共性不断的向上提取，最终就形成了集合的继承体系结构图。
		Collection
			|--List
				|--ArrayList
				|--Vector
				|--LinkedList
			|--Set
				|--HashSet
				|--TreeSet
```

### Collection接口
```java
Collection 层次结构中的根接口。Collection 表示一组对象，这些对象也称为  collection 的元素。一些 collection 允许有重复的元素，而另一些则不允许。一些   collection 是有序的，而另一些则是无序的。
Collection接口成员方法
	A:添加功能
		boolean add(E e)
		boolean addAll(collection c)
	B:删除功能
		boolean remove(Object o)
		boolean removeAll(collection c)只要有一个元素被删除就返回true
		void clear()
	C:判断功能
		boolean contains(Object o)
		boolean containsAll(Collection c)只有包含所有的元素才叫包含
	D:获取功能
		boolean isEmpty()
	E:长度功能
		int size()
	F:交集
		boolean retainAll(Collection c)
		假设有两个集合A,B
		A对B做交集，最终的结果保存在A中，B不变
		返回值表示的是A是否发生改变
	H:Collection集合的遍历
		A:把集合转数组
			Object[] toArray()
		B:迭代器(集合专用方式)
			Iterator iterator()
```

### Iterator接口
```java
对 collection 进行迭代的迭代器
		A:是集合的获取元素的方式。
		B:是依赖于集合而存在的。
		C:迭代器的原理和源码。
			a:为什么定义为了一个接口而不是实现类?
			b:看了看迭代器的内部类实现。
Iterator接口成员方法
boolean hasNext()如果还有元素可以迭代，则返回true
E next() 获取元素，并返回到下一个位置
```

### List接口
```java
(1)List是Collection的子接口
	特点：有序(存储顺序和取出顺序一致)，可重复。
(2)List的特有功能：(自己补齐)
	A:添加功能     void add(int index,E element)
	B:删除功能     E remove(int index)
	C:获取功能     E get(int index)
	D:迭代器功能   ListIterator listIterator()
	E:修改功能     E set(int index,E element)
(3)List集合的特有遍历功能
	A:由size()和get()结合。
	B:代码演示
			//创建集合对象
			List list = new ArrayList();

			//创建并添加元素
			list.add("hello");
			list.add("world");
			list.add("java");

			//遍历集合
			Iterator it = list.iterator();
			while(it.hasNext()) {
				String s =(String) it.next();
				System.out.println(s);
			}
			System.out.println("----------");

			for(int x=0; x<list.size(); x++) {
				String s =(String) list.get(x);
				System.out.println(s);
			}

(4)ListIterator接口的成员方法
boolean hasPrevious()
E previous()

		可以逆向遍历，但是要先正向遍历，所以无意义，基本不使用。
（5)并发修改异常
ConcurrentModificationException
当方法检测到对象的并发修改，但不允许这种修改时，抛出此异常
		A:出现的现象
			迭代器遍历集合，集合修改集合元素
		B:原因
			迭代器是依赖于集合的，而集合的改变迭代器并不知道。
		C:解决方案
			a:迭代器遍历，迭代器修改(ListIterator)
				元素添加在刚才迭代的位置
			b:集合遍历，集合修改(size()和get())
				元素添加在集合的末尾
(6)常见数据结构
	A:栈 先进后出
	B:队列 先进先出
	C:数组 查询快，增删慢
	D:链表 查询慢，增删快
(7)List的子类特点(面试题)
	ArrayList
		底层数据结构是数组，查询快，增删慢。
		线程不安全，效率高。
	Vector
		底层数据结构是数组，查询快，增删慢。
		线程安全，效率低。
	LinkedList
		底层数据结构是链表，查询慢，增删快。
		线程不安全，效率高。

	到底使用谁呢?看需求?
	分析：
		要安全吗?
			要：Vector(即使要，也不使用这个，后面再说)
			不要：ArrayList或者LinkedList
				查询多；ArrayList
				增删多：LinkedList

	什么都不知道，就用ArrayList。
```

Vector:
```java
Vector类特有功能
public void addElement(E obj) --	add()
public E elementAt(int index) --	get()
public E numeration elements() --  iterator()
```

LinkedList:
```java
LinkedList类特有功能
public void addFirst(E e) 及 addLast(E e)
public E getFirst()       及 getLast()
public E removeFirst()    及 public E removeLast()
```

### 泛型
泛型类
格式:public class 类名<泛型类型1,…>
注意:泛型类型必须是引用类型
```java
/*
 * 泛型类：把泛型定义在类上
 */
public class ObjectTool<T> {
	private T obj;

	public T getObj() {
		return obj;
	}

	public void setObj(T obj) {
		this.obj = obj;
	}
}

/*
 * 泛型类的测试
 */
public class ObjectToolDemo {
	public static void main(String[] args) {

		ObjectTool<String> ot = new ObjectTool<String>();
		ot.setObj(new String("林青霞"));
		String s = ot.getObj();
		System.out.println("姓名是：" + s);

		ObjectTool<Integer> ot2 = new ObjectTool<Integer>();
		ot2.setObj(new Integer(27));
		Integer i = ot2.getObj();
		System.out.println("年龄是：" + i);
	}
}
```

泛型方法
格式:public <泛型类型> 返回类型 方法名(泛型类型 .)
```java
/*
 * 泛型方法：把泛型定义在方法上
 */
public class ObjectTool {
	public <T> void show(T t) {
		System.out.println(t);
	}
}

public class ObjectToolDemo {
	public static void main(String[] args) {
		ObjectTool ot = new ObjectTool();
		ot.show("hello");
		ot.show(100);
		ot.show(true);
	}
}
```

泛型接口
格式:public  interface 接口名<泛型类型1…>
```java
/*
 * 泛型接口：把泛型定义在接口上
 */
public interface Inter<T> {
	public abstract void show(T t);
}

public class InterImpl<T> implements Inter<T> {

	@Override
	public void show(T t) {
		System.out.println(t);
	}
}

public class InterDemo {
	public static void main(String[] args) {

		Inter<String> i = new InterImpl<String>();
		i.show("hello");

		Inter<Integer> ii = new InterImpl<Integer>();
		ii.show(100);
	}
}
```

### 泛型高级(通配符)
泛型通配符
<?>
任意类型，如果没有明确，那么就是Object以及任意的Java类了
? extends E
向下限定，E及其子类
? super E
向上限定，E及其父类
```java
class Animal {}
class Dog extends Animal {}
class Cat extends Animal {}
public class CollectionDemo {
  public static void main(String[] args) {
    Collection<?> c1 = new ArrayList<Animal>();
    Collection<?> c2 = new ArrayList<Dog>();
    Collection<?> c3 = new ArrayList<Cat>();
    Collection<?> c4 = new ArrayList<Object>();

    Collection<? extends Animal> c5 = new ArrayList<Animal>();
    Collection<? extends Animal> c6 = new ArrayList<Dog>();
    Collection<? extends Animal> c7 = new ArrayList<Cat>();
    // Collection<? extends Animal> c8 = new ArrayList<Object>();

    Collection<? super Animal> c9 = new ArrayList<Animal>();
    // Collection<? super Animal> c10 = new ArrayList<Dog>();
    // Collection<? super Animal> c11 = new ArrayList<Cat>();
    Collection<? super Animal> c12 = new ArrayList<Object>();
    }
}
```
