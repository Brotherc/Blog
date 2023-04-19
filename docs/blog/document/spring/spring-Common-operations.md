---
title: Spring-常用操作
tags:
  - Spring
---
### 初始化bean时，普通成员变量获取不到@Value注解的变量值
问题：
```java
public class Xxx {
    @Value("${value}")
    private String value;

    private Map<String, String> map = new HashMap<String, String>(){{
         put("key", value);// value取不到值
    }};
}
```
修改：
```java
public class Xxx {
    @Value("${value}")
    private String value;
    private Map<String, String> map;

    @PostConstruct
    private void init(){
      map = new HashMap<String, String>(){{
           put("key", value);
      }};
    }
}
```
参考：  
[https://blog.csdn.net/zlp1992/article/details/78346420](https://blog.csdn.net/zlp1992/article/details/78346420)  

### springboot yaml文件数组表示
```yaml
array: item1, item2, item3, item4, item5
```
参考：  
[https://stackoverflow.com/questions/26699385/spring-boot-yaml-configuration-for-a-list-of-strings](https://stackoverflow.com/questions/26699385/spring-boot-yaml-configuration-for-a-list-of-strings)  

### springboot 获取上下文
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
参考：  
[https://blog.csdn.net/qq_27818541/article/details/105719962](https://blog.csdn.net/qq_27818541/article/details/105719962)  

### spring 获取对象的属性名&属性值
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

### 禁用swagger-ui
```properties
springfox.documentation.enabled=false
```
参考:  
[https://stackoverflow.com/questions/66596813/springfox-boot-starter-how-to-disable-swagger-ui-for-production-profile](https://stackoverflow.com/questions/66596813/springfox-boot-starter-how-to-disable-swagger-ui-for-production-profile)  
[https://www.baeldung.com/swagger-ui-turn-off-in-production](https://www.baeldung.com/swagger-ui-turn-off-in-production)  

### 删除引用jar包中的无用bean
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
参考：  
[https://www.jb51.net/article/252654.htm](https://www.jb51.net/article/252654.htm)  
