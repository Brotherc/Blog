---
title: 【工作】Spring奇巧淫技
tags:
  - Java
  - Spring
---
## 成员变量获取配置属性值
初始化bean时，普通成员变量获取不到@Value注解的变量值
```java
public class Xxx {
    @Value("${value}")
    private String value;

    private Map<String, String> map = new HashMap<String, String>(){{
         put("key", value);// value取不到值
    }};
}
```
```java
public class Xxx {
    @Value("${value}")
    private String value;
    private Map<String, String> map;

    // 通过@PostConstruct注入
    @PostConstruct
    private void init(){
      map = new HashMap<String, String>(){{
           put("key", value);
      }};
    }
}
```

<br>

## spring上下文
```java
@Configuration
public class ApplicationContextConfiguration {
  @Bean
  public InitApplicationContext initApplicationContext() {
    return new InitApplicationContext();
  }
}
```
```java
public class InitApplicationContext implements ApplicationContextAware  {
  
  @Override
  public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
    AppEnvContext.setApplicationContext(applicationContext);
  }
  
}
```
```java
public final class AppEnvContext {

  private static ApplicationContext applicationContext;

  private AppEnvContext() { }

  static void setApplicationContext(ApplicationContext applicationContext) {
    AppEnvContext.applicationContext = applicationContext;
  }

  public static ApplicationContext getApplicationContext() {
    return applicationContext;
  }
  
  public static Object getBean(String beanName) {
    return applicationContext.getBean(beanName);
  }

  public static <T> T getBean(Class<T> t) {
    return applicationContext.getBean(t);
  }

  public static <T> Map<String, T> getBeansOfType(Class<T> type) {
    return applicationContext.getBeansOfType(type);
  }

  public static String getActiveProfile() {
    return applicationContext.getEnvironment().getActiveProfiles()[0];
  }

}
```
```java
String env = AppEnvContext.getActiveProfile();
```

<br>

## spring反射类应用
获取对象的属性名&属性值
```java
private void putAllField(Object obj, Map<String, Object> item) {
    PropertyDescriptor[] beanProperties = ReflectUtils.getBeanProperties(obj.getClass());
    try {
      for (PropertyDescriptor property : beanProperties) {
        Method readMethod = property.getReadMethod();
        if (readMethod == null)
          continue;
        if (property.getPropertyType().isAssignableFrom(Date.class)) {
          item.put(property.getName(), DateUtil.date2string((Date) readMethod.invoke(obj), DATA_FORMAT));
        } else if (property.getPropertyType().isAssignableFrom(Double.class)) {
          item.put(property.getName(), String.format("%.2f", (Double) readMethod.invoke(obj)));
        } else {
          item.put(property.getName(), property.getReadMethod().invoke(obj));
        }
      }
    } catch (Exception e) {
    }
}
```

<br>

## 禁用swagger-ui
```properties
springfox.documentation.enabled=false
```

<br>

## 移除三方依赖的Bean
删除引用jar包中不想注入的bean
```java
@Component
public class RemoveRegistryBeanFactoryPostProcessor implements BeanDefinitionRegistryPostProcessor {

    @Override
    public void postProcessBeanDefinitionRegistry(BeanDefinitionRegistry registry) throws BeansException {
        registry.removeBeanDefinition("XXX");
    }

    @Override
    public void postProcessBeanFactory(@NonNull ConfigurableListableBeanFactory configurableListableBeanFactory) throws BeansException {
        // execute postProcessBeanFactory
    }

}
```
