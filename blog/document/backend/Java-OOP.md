---
title: Java-面向对象
tags:
  - Java基础
---

### 匿名对象
·匿名对象：就是没有名字的对象。
  是对象的一种简化表示形式
·匿名对象的两种使用情况
  对象调用方法仅仅一次的时候
  作为实际参数传递

```java
class Student {
	public void show() {
		System.out.println("show");
	}
}

class StudentDemo {
	//如果参数是一个类名，那么实际需要的是一个具体的对象
	public void method(Student s) {
		s.show();
	}
}

class StudentTest {
	public static void main(String[] args) {
		StudentDemo sd = new StudentDemo();
		Student s = new Student();
		sd.method(s);

		//多个匿名对象的写法
		new StudentDemo.method(new Student());
	}
}
```

### this关键字
·this:代表所在类的对象引用
·记住：
·方法被哪个对象调用，this就代表那个对象
  什么时候使用this呢?
  局部变量隐藏成员变量
  其他用法后面和super一起讲解


### static关键字
·可以修饰成员变量和成员方法
·static关键字特点
  随着类的加载而加载
  优先于对象存在
  被类的所有对象共享
  这也是我们判断是否使用静态关键字的条件
  可以通过类名调用
·static关键字注意事项
  在静态方法中是没有this关键字的
  静态方法只能访问静态的成员变量和静态的成员方法

### 代码块
在Java中，使用{}括起来的代码被称为代码块，根据其位置和声明的不同，可以分为局部代码块，构造代码块，静态代码块，同步代码块(多线程讲解)。
·局部代码块
  在方法中出现；限定变量生命周期，及早释放，提高内存利用率
·构造代码块
  在类中方法外出现；多个构造方法方法中相同的代码存放到一起，每次调用  构造都执行，并且在构造方法前执行
·静态代码块 在类中方法外出现，加了static修饰
  在类中方法外出现，并加上static修饰；用于给类进行初始化，在加载的时  候就执行，并且值执行一次。

执行顺序
静态代码块>构造代码块>构造方法

```java
	static {
		System.out.println("静态代码块");
	}

	{
		System.out.println("构造代码块");
	}

	public Student() {
		System.out.println("构造方法");
	}
```
#### 面试题：
```java
class Student{
	static{
	   System.out.print("Student 静态代码块");
	}
	{
	   System.out.print("Student 构造代码块");
	}
	public student(){
	   System.out.print("Student 构造方法");
	}
}
class StudentDemo {
	static{
	   System.out.print("林青霞都60了，我很伤心");
	}
	public static void main(String[] args){
	   System.out.print("我是main方法");

	   student s1 = new Student();
	   student s2 = new Student();
	}
}
```

结果:
```
林青霞都60了，我很伤心
我是main方法
Student 静态代码块
Student 构造代码块
Student 构造方法
Student 构造代码块
Student 构造方法
```

### 继承中成员变量的关系
·在子类方法中访问一个变量
  首先在子类局部范围找
  然后在子类成员范围找
  最后在父类成员范围找(肯定不能访问到父类局部范围)
  如果还是没有就报错。(不考虑父亲的父亲…)
  如果我要访问父类的成员变量该怎么办呢?通过回想this来引入super关键字

### 继承中成员方法的关系
·通过子类对象去访问一个方法
  首先在子类中找
  然后在父类中找
  如果还是没有就报错。(不考虑父亲的父亲…)
  如果我要访问父类的成员方法该怎么办呢?回想刚才提过的super关键字
·方法重写的注意事项
  父类中私有方法不能被重写
  子类重写父类方法时，访问权限不能更低
  父类静态方法，子类也必须通过静态方法进行重写。

### 继承中构造方法的关系
·每一个构造方法的第一条语句默认都是：super()
·如何父类中没有构造方法，该怎么办呢?
  子类通过super去显示调用父类其他的带参的构造方法
  子类通过this去调用本类的其他构造方法，本类其他构造也必须首先访问了父类构造
·一定要注意：
  super(…)或者this(….)必须出现在第一条语句山

#### 面试题:
```java
	class Fu {
		static {
			System.out.println("静态代码块Fu");
		}

		{
			System.out.println("构造代码块Fu");
		}

		public Fu() {
			System.out.println("构造方法Fu");
		}
	}

	class Zi extends Fu {
		static {
			System.out.println("静态代码块Zi");
		}

		{
			System.out.println("构造代码块Zi");
		}

		public Zi() {
			System.out.println("构造方法Zi");
		}
	}

	Zi z = new Zi();
```

A:静态随着类的加载而加载。
B:静态代码块 -- 构造代码块 -- 构造方法的执行流程
  静态代码块 -- 构造代码块 -- 构造方法
C:只要有子父关系，肯定先初始化父亲的数据，然后初始化子类的数据。

结果：
```
	静态代码块Fu
	静态代码块Zi
	构造代码块Fu
	构造方法Fu
	构造代码块Zi
	构造方法Zi
```
#### 面试题:
```java
	class X {
		Y b = new Y();
		X() {
			System.out.print("X");
		}
	}
	class Y {
		Y() {
			System.out.print("Y");
		}
	}
	public class Z extends X {
		Y y = new Y();
		Z() {
			System.out.print("Z");
		}
		public static void main(String[] args) {
			new Z();
		}
	}
```
结果：YXYZ

第一个：成员变量有基本类型和引用类型的。
```java
	class Demo {
		int x = 10;//基本类型
		Student s = new Student();//引用类型
	}
```

第二个：类的初始化过程
```
	加载class文件
	堆中开辟空间
	变量的默认初始化
	变量的显示初始化
	构造代码块初始化
	构造方法初始化
```

第三个：遇到extends，就要知道，先初始化父类数据，然后初始化子类数据。分层初始化。

### 多态
·成员访问特点
  成员变量：编译看左边，运行看左边
·成员方法：编译看左边，运行看右边
·静态方法：编译看左边，运行看左边（所以前面我说静态方法不能算方法的重写）

#### 面试题：
```java
class A{
	public void show(){
		show2();
	}
	public void show2(){
		System.out.println("我");
	}
}
class B extends A {
	public void show2(){
		System.out.println("爱");
	 }
}
class C extends B {
	public void show(){
		super.show();
	}

	public void show2(){
		System.out.println("你");
	}
}
 
public class Test
{
	public static void main(String[] args)
	{
		A a = new B();
		a.show();
 
		B b = new C();
		b.show();
	}
}
```
结果：爱
      你

#### 多态中的转型问题
·向上转型
·向下转型

```java
class Animal{
	public void eat(){..}
}

class Dog extends Animal{
	public void eat(){..}
	public void lookdoor(){..}
}

class Cat extends Animal{
	public void eat(){..}
	public void playgame(){..}
}
class AnimalDemo{
	public static void main(String[] args){
		Animal a=new Dog();
		a.eat();
		a.lookdoor();//报错

 		Dog d=(Dog)a;
		d.eat();
		d.lookdoor();

		a=new Cat();
		a.eat();
		a.playgame();//报错

		Cat c=(Cat)a;
		c.eat();
		c.playgame();

		Dog dd=(Dog)a;//报错
	}
}
```

#### 抽象类的几个小问题
·abstract不能和哪些关键字共存
  private	冲突
  final	 	冲突
  static	无意义

#### 抽象类和接口的区别
·成员区别
  抽象类      变量,常量;有构造方法;抽象方法,非抽象方法
  接口        常量(默认public static final);抽象方法(默认public abstract)
·关系区别
  类与类      继承，单继承
  类与接口    实现，单实现，多实现
  接口与接口  继承，单继承，多继承
·设计理念区别
  抽象类      被继承体现的是：”is a”的关系。共性功能
  接口        被实现体现的是：”like a”的关系。扩展功能

### 内部类位置
·成员位置(成员内部类)
·成员内部的常见修饰符
  private：为了保证数据的安全性
  static ：为了让数据访问更方便

成员内部类不是静态的：外部类名.内部类名 对象名 = new 外部类名.new 内部类名();
成员内部类是静态的：外部类名.内部类名 对象名 = new 外部类名.内部类名();

非静态的成员内部类，成员只能是非静态的
被静态修饰的成员内部类只能访问外部类的静态成员
被静态修饰的成员内部类中的方法有静态和非静态之分
访问非静态方法：外部类名.内部类名 对象名 = new 外部类名.内部类名();
访问静态方法：  上面创建的对象访问，或者外部类名.内部类名.方法名();

面试题：
```java
class Outer {
	public int num = 10;

	class Inner {
		public int num = 20;

		public void show() {
			int num = 30;
			System.out.println(num);
			System.out.println(this.num);
			System.out.println(Outer.this.num);
		}
	}
}

class OuterDemo {
	public static void main(String[] args) {
		Outer.Inner oi = new Outer().new Inner();
		oi.show();
	}
}
```

·局部位置(局部内部类)
·可以创建内部类对象，通过对象调用内部类方法，来使用局部内部类功能
·局部内部类访问局部变量的注意事项：
  必须被final修饰?
  为什么呢?
(因为局部变量会随着方法的调用完毕而消失，这个时候，局部对象并没有立马从堆内存中消失，还要使用那个变量。为了让数据还能继续被使用，就用fianl修饰，这样，在堆内存里面存储的其实是一个常量值。通过反编译工具可以看一下。)

```java
class Outer {
	public void method() {
		final int n = 100;
		class Inner {
			public void show() {
				System.out.println(n);
			}
		}

		Inner i = new Inner();
		i.show();
	}
}

class OuterDemo {
	public static void main(String[] args) {
		Outer o = new Outer();
		o.method();
	}
}
```

### 匿名内部类
·就是内部类的简化写法。
·前提：存在一个类或者接口
  这里的类可以是具体类也可以是抽象类。
·格式：
  new 类名或者接口名() {重写方法;}
·本质：
  是一个继承了类或者实现了接口的子类匿名对象

```java
abstract class Person {
	public abstract void show();
}

class PersonDemo {
	public void method(Person p) {
		s.show();
	}
}

class PersonTest {
	public static void main(String[] args) {
		//如何调用PersonDemo中的method方法呢?
		PersonDemo pd = new PersonDemo ();
		pd.method(new Person() {
			public void show() {
				System.out.println("show");
			}
		});
	}
}
```

#### 面试题：
按照要求，补齐代码
```java
	interface Inter { void show(); }
	class Outer { //补齐代码 }
	class OuterDemo {
	    public static void main(String[] args) {
		      Outer.method().show();
		  }
	}
要求在控制台输出"HelloWorld"
答案：
class Outer {
	//补齐代码
	public static Inter method() {
		return new Inter() {
			public void show() {
				System.out.println("HelloWorld");
			}
		};
	}
}
```
