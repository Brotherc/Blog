---
title: 【源码】SpringMVC-DispatcherServlet
tags:
  - SpringMVC
---
# 【源码】SpringMVC-DispatcherServlet
## DispatcherServlet结构
![](./assets/springmvc/ds1.png)  
![](./assets/springmvc/ds2.png)  
DispatcherServlet里的9大组件  
https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-servlet/special-bean-types.html
![](./assets/springmvc/ds3.png)  
## 9大组件初始化
Tomcat触发Servlet的初始化  
org.springframework.web.servlet.HttpServletBean#init-> initServletBean  
org.springframework.web.servlet.FrameworkServlet#initServletBean-> initWebApplicationContext-> configureAndRefreshWebApplicationContext->刷新容器  
org.springframework.context.support.AbstractApplicationContext#refresh -> finishRefresh【刷新容器12步最后一步】-> publishEvent  
![](./assets/springmvc/ds4.png)  
![](./assets/springmvc/ds4_1.png)  
![](./assets/springmvc/ds5.png)
org.springframework.context.event.SimpleApplicationEventMulticaster#multicastEvent(ApplicationEvent) -> multicastEvent  
![](./assets/springmvc/ds6.png)  
此时的listener有一个是![](./assets/springmvc/ds7.png)，这个是DispatcherServlet启动的时候加的  
![](./assets/springmvc/ds8.png)  
调用listener的onApplicationEvent方法  
![](./assets/springmvc/ds9.png)  
org.springframework.context.event.SourceFilteringListener#onApplicationEvent  
![](./assets/springmvc/ds10.png)  
![](./assets/springmvc/ds11.png)  
org.springframework.context.event.GenericApplicationListenerAdapter#onApplicationEvent  
![](./assets/springmvc/ds12.png)  
![](./assets/springmvc/ds13.png)  
org.springframework.web.servlet.FrameworkServlet.ContextRefreshListener  
![](./assets/springmvc/ds14.png)  
org.springframework.web.servlet.FrameworkServlet#onApplicationEvent  
![](./assets/springmvc/ds15.png)    
org.springframework.web.servlet.DispatcherServlet#onRefresh  
![](./assets/springmvc/ds16.png)  
![](./assets/springmvc/ds17.png)  

### MultipartResolver
![](./assets/springmvc/MultipartResolver.png)

### LocaleResolver
![](./assets/springmvc/LocaleResolver1.png)  
org.springframework.web.servlet.DispatcherServlet#getDefaultStrategy -> org.springframework.web.servlet.DispatcherServlet#getDefaultStrategies  
![](./assets/springmvc/LocaleResolver2.png)  
去DispatcherServlet类路径下加载DispatcherServlet.properties文件，文件中配置了每一个组件的默认值，所以9大组件加载的时候如果没有，会从这个文件中按指定的名称找对应的值  
![](./assets/springmvc/LocaleResolver3.png)  
![](./assets/springmvc/LocaleResolver4.png)  
我们现在正在初始化LocaleResolver，所以key是，最终根据文件的默认值创建出AcceptHeaderLocaleResolver  
![](./assets/springmvc/LocaleResolver5.png)  
![](./assets/springmvc/LocaleResolver6.png)  
### handlerMappings
会初始化三个类，我们最常用的是RequestMappingHandlerMapping，下面以分析它为例  
![](./assets/springmvc/handlerMappings1.png)  
![](./assets/springmvc/handlerMappings2.png)  
![](./assets/springmvc/handlerMappings3.png)  
同样是通过bean容器获取实例，经过bean的生命周期，最后会来到初始化方法  
![](./assets/springmvc/handlerMappings4.png)  
org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping#afterPropertiesSet  
![](./assets/springmvc/handlerMappings5.png)  
org.springframework.web.servlet.handler.AbstractHandlerMethodMapping#afterPropertiesSet  
![](./assets/springmvc/handlerMappings6.png)  

拿到mvc容器(子容器)的所有组件  
![](./assets/springmvc/handlerMappings7.png)  
![](./assets/springmvc/handlerMappings8.png)  
org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping#isHandler，先判断标了Controller或RequestMapping注解的才行  
![](./assets/springmvc/handlerMappings9.png)
![](./assets/springmvc/handlerMappings10.png)  
org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping#getMappingForMethod  
![](./assets/springmvc/handlerMappings11.png)  
只找标了RequestMapping注解
![](./assets/springmvc/handlerMappings12.png)  
org.springframework.web.servlet.handler.AbstractHandlerMethodMapping#registerHandlerMethod
![](./assets/springmvc/handlerMappings13.png)  
org.springframework.web.servlet.handler.AbstractHandlerMethodMapping.MappingRegistry#register
![](./assets/springmvc/handlerMappings14.png)  
RequestMappingHandlerMapping中，有一个属性，其它Mapping中也有，只是名字叫得不同
![](./assets/springmvc/handlerMappings15.png)  
> BeanNameUrlHandlerMapping则是扫描所有bean名字以/开头的类作为Handler  

### RequestMappingHandlerAdapter
会初始化四个类，我们最常用的是RequestMappingHandlerAdapter，下面以分析它为例  
一样会经过bean的生命周期来到初始化，初始化里配置的内容都是为后续handler执行时服务  
![](./assets/springmvc/RequestMappingHandlerAdapter1.png)  
org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter#getDefaultArgumentResolvers，下面列了默认的参数解析器  
![](./assets/springmvc/RequestMappingHandlerAdapter2.png)  
org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter#getDefaultReturnValueHandlers，下面列了默认的返回值解析器
![](./assets/springmvc/RequestMappingHandlerAdapter3.png)  
### viewNameTranslator
![](./assets/springmvc/viewNameTranslator.png)  
如果我们没注入，默认使用的是DefaultRequestToViewNameTranslator
### handlerExceptionResolvers
默认会初始化3个，其中我们最常用到的就是ExceptionHandlerExceptionResolver，在初始化的时候会找到所有标了ControllerAdvice注解的类，把参数解析器和返回值解析器设置进去
![](./assets/springmvc/handlerExceptionResolvers1.png)  
![](./assets/springmvc/handlerExceptionResolvers5.png)
org.springframework.web.method.ControllerAdviceBean#findAnnotatedBeans
![](./assets/springmvc/handlerExceptionResolvers2.png)  
org.springframework.web.method.annotation.ExceptionHandlerMethodResolver#ExceptionHandlerMethodResolver  
扫描当前这个ControllerAdvice中所有标注了@ExceptionHandler的方法
![](./assets/springmvc/handlerExceptionResolvers3.png)  
每一个方法能处理什么异常类型，缓存到Map中。
![](./assets/springmvc/handlerExceptionResolvers4.png)  


## 流程
![](./assets/springmvc/流程1.png)  
所有请求最终会来到org.springframework.web.servlet.FrameworkServlet#processRequest
![](./assets/springmvc/流程2.png)  
org.springframework.web.servlet.DispatcherServlet#doService
![](./assets/springmvc/流程4.png)  
![](./assets/springmvc/流程5.png)   

### 获取Handler执行链
![](./assets/springmvc/Handler执行链1.png)   
因为我们最常用的就是RequestMapping，所以命中的是RequestMappingHandlerMapping
![](./assets/springmvc/Handler执行链2.png)   
org.springframework.web.servlet.handler.AbstractHandlerMapping#getHandler  
先找到对应的handler，然后再找到所有的拦截器，并构造成一个链
![](./assets/springmvc/Handler执行链3.png)   
org.springframework.web.servlet.handler.AbstractHandlerMethodMapping#getHandlerInternal
![](./assets/springmvc/Handler执行链4.png)  
![](./assets/springmvc/Handler执行链5.png)    
最终封装的HandlerMethod长这样
![](./assets/springmvc/Handler执行链6.png)    
org.springframework.web.servlet.handler.AbstractHandlerMethodMapping#lookupHandlerMethod  
关键在mappingRegistry里面  
![](./assets/springmvc/Handler执行链7.png)  
![](./assets/springmvc/Handler执行链8.png)    
org.springframework.web.servlet.handler.AbstractHandlerMapping#getHandlerExecutionChain
![](./assets/springmvc/Handler执行链9.png)    
org.springframework.web.servlet.handler.AbstractHandlerMapping#initApplicationContext  
拦截器是在初始化的时候放进去的
![](./assets/springmvc/Handler执行链10.png)  
![](./assets/springmvc/Handler执行链11.png)  
![](./assets/springmvc/Handler执行链12.png)  


### 找Handler的适配器
org.springframework.web.servlet.DispatcherServlet#getHandlerAdapter
![](./assets/springmvc/适配器1.png)  
![](./assets/springmvc/适配器2.png)   
org.springframework.web.servlet.mvc.HttpRequestHandlerAdapter  
只处理实现了HttpRequestHandler的Handler
![](./assets/springmvc/适配器3.png)   
```java
//BeanNameUrlHandlerMapping 创建好对象以后也要初始化，启动拿到容器中所有组件，看谁的名字是以/开始的，就把这个组件注册为处理器
@Controller("/helloReq") //BeanNameUrlHandlerMapping 就会把他注册进去
public class HelloHttpRequestHandler implements HttpRequestHandler {
	//启用 HttpRequestHandlerAdapter

	//处理请求
	@Override
	public void handleRequest(HttpServletRequest request,
							  HttpServletResponse response) throws ServletException, IOException {
		response.getWriter().write("HelloHttpRequestHandler....");
	}
}
```
获取Handler时，BeanNameUrlHandlerMapping中可以看到保存有相关的Handler
![](./assets/springmvc/适配器4.png)   
找到适配器后，执行适配器的handle方法，会回调到处理器的handleRequest方法
![](./assets/springmvc/适配器5.png)  

org.springframework.web.servlet.mvc.SimpleControllerHandlerAdapter  
只处理实现了Controller的Handler  
![](./assets/springmvc/适配器6.png)  
```java
@org.springframework.stereotype.Controller("/helloSimple")
public class HelloSimpleController implements Controller {
	@Override
	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return null;
	}
}
```
![](./assets/springmvc/适配器7.png)
找到适配器后，执行适配器的handle方法，会回调到处理器的handleRequest方法
![](./assets/springmvc/适配器8.png)  

org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter  
只处理实现了HandlerMethod的Handler
![](./assets/springmvc/适配器9.png)  
我们编写的@RequestMapping注解的接口就找到了RequestMappingHandlerAdapter这个适配器

适配器自己的理解  
> Springmvc已经找到了路径对应需要执行请求的Handler为什么还要有适配器呢，因为handler可以有很多种写法，那么每一种的执行可能都会略有不用，如果我们来写代码的话，可能就会写判断这个handler是哪种类型，然后在if里面写对应的handler的执行，这样就会有很多的if，Springmvc相当于把每一个if分支抽成一个适配器，适配器的support方法就是原先if的判断，if里面的逻辑就是handler的执行，然后外部就是遍历每个适配器，其实就是在判断走哪个if分支，拿到某个适配器也就意味着要走哪个if分支

### 拦截器的preHandle执行
![](./assets/springmvc/preHandle.png)
### 执行
前面已经介绍了HttpRequestHandlerAdapter和SimpleControllerHandlerAdapter如何调用handler的执行，下面重点介绍RequestMappingHandlerAdapter如何调用handler的执行  
org.springframework.web.servlet.mvc.method.AbstractHandlerMethodAdapter#handle
![](./assets/springmvc/执行1.png)
org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter#handleInternal
![](./assets/springmvc/执行2.png)  
![](./assets/springmvc/执行3.png)
org.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod#invokeAndHandle  
执行目标方法，处理返回值
![](./assets/springmvc/执行4.png)
org.springframework.web.method.support.InvocableHandlerMethod#invokeForRequest  
先找到方法反射执行时需要的参数值，再反射调用方法
![](./assets/springmvc/执行5.png)  
遍历方法的每个参数，看参数解析器中哪个解析器支持，找到解析器并将参数的值设置好
![](./assets/springmvc/执行6.png)  
![](./assets/springmvc/执行7.png)  
org.springframework.web.method.support.HandlerMethodArgumentResolverComposite#supportsParameter
![](./assets/springmvc/执行8.png)  
遍历每一种参数解析器，如果支持就返回解析器，解析器的判断比如RequestParamMethodArgumentResolver判断参数是否有RequestRaram注解、PathVariableMethodArgumentResolver判断参数是否有PathVariable注解、RequestHeaderMethodArgumentResolver判断参数是否有RequestHeader注解等
![](./assets/springmvc/执行9.png)  
方法反射执行完后，需要对返回值进行处理
![](./assets/springmvc/执行10.png)  
org.springframework.web.method.support.HandlerMethodReturnValueHandlerComposite#handleReturnValue
![](./assets/springmvc/执行11.png)  
遍历每一种返回值解析器，如果支持就返回解析器，解析器的判断比如ModelAndViewMethodReturnValueHandler判断返回值类型是否是ModelAndView、ModelMethodProcessor判断返回值类型是否是Model、ViewMethodReturnValueHandler判断返回值类型是否是void或String、RequestResponseBodyMethodProcessor判断是否标了@ResponseBody注解并且返回值是String等
![](./assets/springmvc/执行12.png)  
下面举例ViewMethodReturnValueHandler处理返回值的过程  
org.springframework.web.servlet.mvc.method.annotation.ViewNameMethodReturnValueHandler#handleReturnValue，判断是否需要转发或重定向  
> 这里可能会有疑问，我们平常返回String，而且标了RestController注解或@ResponseBody注解，并不会跳转页面，是因为这种用法会被RequestResponseBodyMethodProcessor解析处理，而这个返回值解析器是在ViewMethodReturnValueHandler解析之前  
> ![](./assets/springmvc/执行13.png)  

![](./assets/springmvc/执行14.png)  
方法反射执行完后，返回值也处理完，就封装ModelAndView  
org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter#getModelAndView  
![](./assets/springmvc/执行15.png)  

### 设置默认的视图名
org.springframework.web.servlet.DispatcherServlet#applyDefaultViewName
![](./assets/springmvc/执行16.png)  
![](./assets/springmvc/执行17.png)  

### 拦截器的PostHandle执行
![](./assets/springmvc/PostHandle.png)
### 异常处理
org.springframework.web.servlet.DispatcherServlet#processDispatchResult
![](./assets/springmvc/异常处理1.png)  
遍历所有的异常解析器，看哪个可以处理，如果没有可以处理的，直接抛出异常
![](./assets/springmvc/异常处理2.png)  
![](./assets/springmvc/异常处理3.png)  
org.springframework.web.servlet.handler.AbstractHandlerExceptionResolver  
异常解析器的父类抽象类  
![](./assets/springmvc/异常处理4.png)  
org.springframework.web.servlet.handler.AbstractHandlerMethodExceptionResolver  
ExceptionHandlerExceptionResolver的父类  
![](./assets/springmvc/异常处理5.png)  
org.springframework.web.servlet.mvc.method.annotation.ExceptionHandlerExceptionResolver#doResolveHandlerMethodException  
找到能处理异常的方法，再反射调用  
![](./assets/springmvc/异常处理6.png)  
前面解析器初始化的时候会编译所有标了ControllerAdvice注解的类封装成ExceptionHandlerMethodResolver，并找到类中标有ExceptionHandler注解的方法，并保存它能处理哪些异常类
![](./assets/springmvc/异常处理7.png)  
org.springframework.web.method.annotation.ExceptionHandlerMethodResolver#resolveMethod
![](./assets/springmvc/异常处理8.png)  
org.springframework.web.method.annotation.ExceptionHandlerMethodResolver#resolveMethodByThrowable
![](./assets/springmvc/异常处理9.png)  
![](./assets/springmvc/异常处理10.png)  
![](./assets/springmvc/异常处理11.png)    
```java
@ControllerAdvice  //专门处理所有controller异常的，默认加在容器中
public class MyExceptionHandler {

	@ResponseBody
	@ExceptionHandler(value = {ArithmeticException.class})
	public String handleZeroException(Exception exception){
		//参数位置  https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#mvc-ann-exceptionhandler-args
		//返回值   https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#mvc-ann-exceptionhandler-return-values
		// 异常处理器的功能怎么增强出来的【参数解析器，返回值处理器】.....
		return "Error";
	}
}
```
org.springframework.web.servlet.handler.SimpleMappingExceptionResolver
![](./assets/springmvc/异常处理12.png)    
org.springframework.web.servlet.mvc.support.DefaultHandlerExceptionResolver  
默认的异常解析器,判断是否是指定的异常，直接response.sendError，tomcat响应默认错误页  
![](./assets/springmvc/异常处理13.png)    
org.springframework.web.servlet.mvc.annotation.ResponseStatusExceptionResolver
![](./assets/springmvc/异常处理14.png)  
![](./assets/springmvc/异常处理15.png)  
![](./assets/springmvc/异常处理16.png)    

```java
/**
 * 自定义异常上有注解的
 */
@ResponseStatus(value = HttpStatus.CONFLICT,reason = "非法用户")
public class InvalidUserException  extends RuntimeException{
	private static final long serialVersionUID = -7034897190745766222L;
}
```
```java
@GetMapping("/hello")
public String sayHello(){
    //非法的用户信息
    throw new InvalidUserException();
    return "index.jsp";
}
```
对于上面没有任何异常解析器能够处理的异常，会直接往外抛出，最后被catch后做进一步处理  
org.springframework.web.servlet.DispatcherServlet#doDispatch  
![](./assets/springmvc/异常处理17.png)    
最后还是抛出去
![](./assets/springmvc/异常处理18.png)  
### 视图解析
![](./assets/springmvc/视图解析1.png)  
先解析视图，拿到视图后再渲染决定页面长什么样
![](./assets/springmvc/视图解析2.png)  
遍历所有的视图解析器，看哪个可以处理
![](./assets/springmvc/视图解析3.png)  
详细渲染过程，略

### 拦截器的AfterCompletion执行