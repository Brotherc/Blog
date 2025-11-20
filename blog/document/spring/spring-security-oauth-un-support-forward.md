---
title: 【实践】解决forward在SpringSecurityOAuth2中失效
tags:
  - Java
---
# 【实践】解决forward在SpringSecurityOAuth2中失效

## 问题描述
在项目中使用了`forward:xxx`将请求进行转发，发现这种方式并不会经过SpringSecurity的过滤器，导致认证失效  

## 工程代码
当前项目的信息及相关代码如下：  

**springboot版本**  
2.3.12.RELEASE  

**SpringSecurityOAuth2相关maven依赖**  
```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-oauth2</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-security</artifactId>
</dependency>
```

**SpringSecurity配置代码**
```java
package com.demo;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;

public interface HttpSecurityConfigurer {
    void configure(HttpSecurity http) throws Exception;
}
```

```java
package com.demo;

import com.demo.HttpSecurityConfigurer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class WebSecurityConfig implements HttpSecurityConfigurer {

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers(
                        "/**/druid/**", "/**/public/**",
                        "/**/file/**", "/**/*.js", "/**/*.css", "/**/*.jpg", "/**/*.png", "/**/*.woff2",
                        "/**/swagger-resources/**", "/**/v2/api-docs/**", "/**/actuator/**", "/**/doc.html",
                        "/**/swagger-ui/index.html", "/**/swagger-ui/**"
                ).permitAll()
                .antMatchers("/**").authenticated()
                .anyRequest().authenticated()
                .and().csrf().disable()
                .cors();
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }

    @Bean
    public PasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

}
```

**SpringSecurityOauth2配置代码**

```java
package com.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;
import org.springframework.security.oauth2.provider.token.store.JwtTokenStore;
import org.springframework.util.StringUtils;

import java.util.Map;

@EnableResourceServer
@EnableWebSecurity
@Configuration
public class ResourceServerConfig extends ResourceServerConfigurerAdapter {
    private static final Logger log = LoggerFactory.getLogger(ResourceServerConfig.class);
    @Value("${ut-oauth.jwt-sign-key:123}")
    private String signingKey;
    @Value("${ut-oauth.api-white-list:}")
    private String apiWhiteList;
    private HttpSecurityConfigurer httpSecurityConfigurer;

    @Autowired(required = false)
    public void setHttpSecurityConfigurer(HttpSecurityConfigurer httpSecurityConfigurer) {
        this.httpSecurityConfigurer = httpSecurityConfigurer;
    }

    @Override
    public void configure(HttpSecurity http) throws Exception {
        if (this.httpSecurityConfigurer == null) {
            String[] defWhiteArray = new String[]{
                    "/**/druid/**", "/**/public/**", "/**/file/**", "/**/*.js", "/**/*.css", "/**/*.jpg", "/**/*.png",
                    "/**/*.woff2", "/**/swagger-resources/**", "/**/v2/api-docs/**", "/**/actuator/**",
                    "/**/doc.html", "/**/swagger-ui/index.html"
            };
            String[] apiWhiteArray = StringUtils.isEmpty(this.apiWhiteList) ? new String[0] : this.apiWhiteList.trim().split(",");
            ((((http.authorizeRequests().antMatchers(StringUtils.concatenateStringArrays(defWhiteArray, apiWhiteArray))).permitAll().antMatchers("/**")).authenticated().anyRequest()).authenticated().and()).csrf().disable();
        } else {
            this.httpSecurityConfigurer.configure(http);
        }

    }

    @Override
    public void configure(ResourceServerSecurityConfigurer resources) {
        resources.resourceId("demo-service").tokenStore(this.tokenStore());
    }

    @Bean
    protected JwtAccessTokenConverter jwtTokenEnhancer() {
        CustomJwtAccessTokenConverter converter = new CustomJwtAccessTokenConverter();
        converter.setSigningKey(this.signingKey);
        return converter;
    }

    @Bean
    public TokenStore tokenStore() {
        return new JwtTokenStore(this.jwtTokenEnhancer());
    }

    public static class CustomJwtAccessTokenConverter extends JwtAccessTokenConverter {
        @Override
        public OAuth2Authentication extractAuthentication(Map<String, ?> claims) {
            OAuth2Authentication authentication = super.extractAuthentication(claims);
            authentication.setDetails(claims);
            return authentication;
        }
    }

}
```

**业务代码**  

```java
package com.demo;

import org.springframework.stereotype.Service;

@Service
public class FuncInvokeService {

    public String funcInvoke(String url) {
        return "forward:" + url;
    }

}
```

## 问题解决
Spring配置中增加SpringSecurity过滤器拦截类型
```yaml
  # 默认只有ERROR、REQUEST、ASYNC，增加FORWARD为了forward也能经过security过滤器
spring:
  security:
    filter:
      dispatcher-types:
        - request
        - async
        - error
        - forward
```
SpringSecurity配置增加`.filterSecurityInterceptorOncePerRequest(false)`  
```java
package com.demo;

import com.demo.HttpSecurityConfigurer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class WebSecurityConfig implements HttpSecurityConfigurer {

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .filterSecurityInterceptorOncePerRequest(false) // 让forward调用也经过springSecurity过滤器
                .antMatchers(
                        "/**/druid/**", "/**/public/**",
                        "/**/file/**", "/**/*.js", "/**/*.css", "/**/*.jpg", "/**/*.png", "/**/*.woff2",
                        "/**/swagger-resources/**", "/**/v2/api-docs/**", "/**/actuator/**", "/**/doc.html",
                        "/**/swagger-ui/index.html", "/**/swagger-ui/**"
                ).permitAll()
                .antMatchers("/**").authenticated()
                .anyRequest().authenticated()
                .and().csrf().disable()
                .cors();
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }

    @Bean
    public PasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

}
```

> Spring Security 默认行为：oncePerRequest = true （只过滤一次），也就是说： 一次 HTTP 请求，不管经过多少 servlet forward / include / async dispatch，只会被 Security 过滤一次。  
> 开启 filterSecurityInterceptorOncePerRequest(false)会导致： FilterSecurityInterceptor 不再将过滤过程限制为一次请求一次。  

