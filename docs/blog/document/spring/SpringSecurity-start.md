---
title: SpringSecurity-开始开发
tags:
  - Spring Security
---
## 1.架构介绍
security：主模块
security-core: 核心业务逻辑（子模块）
security-browser: 浏览器安全特定代码（子模块）
security-app: app相关特定代码（子模块）
security-demo: 样例程序（子模块）
```
            security

          security-core
                ↑
          --------------
          |            |
security-browser  security-app
          ↑            ↑
          --------------
                |
          security-demo
```
security pom.xml：
```xml
<properties>
  <security.version>1.0.0-SNAPSHOT</security.version>
</properties>

<dependencyManagement>
  <!--管理版本、依赖-->
  <dependencies>
    <dependency>
      <groupId>io.spring.platform</groupId>
      <artifactId>platform-bom</artifactId>
      <version>Brussels-SR4</version>
      <type>pom</type>
      <scope>import</scope>
    </dependency>
    <dependency>
      <groupId>org.springframework.cloud</groupId>
      <artifactId>spring-cloud-dependencies</artifactId>
      <version>Dalston.SR2</version>
      <type>pom</type>
      <scope>import</scope>
    </dependency>
  </dependencies>
</dependencyManagement>

<build>
  <plugins>
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-compiler-plugin</artifactId>
      <version>2.3.2</version>
      <configuration>
        <source>1.8</source>
        <target>1.8</target>
        <encoding>UTF-8</encoding>
      </configuration>
    </plugin>
  </plugins>
</build>

<modules>
  <module>../security-app</module>
  <module>../security-browser</module>
  <module>../security-core</module>
  <module>../security-demo</module>
</modules>
```

security-core pom.xml：
```xml
<dependencies>
  <dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-oauth2</artifactId>
  </dependency>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
  </dependency>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-jdbc</artifactId>
  </dependency>
  <dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
  </dependency>
  <dependency>
    <groupId>org.springframework.social</groupId>
    <artifactId>spring-social-config</artifactId>
  </dependency>
  <dependency>
    <groupId>org.springframework.social</groupId>
    <artifactId>spring-social-core</artifactId>
  </dependency>
  <dependency>
    <groupId>org.springframework.social</groupId>
    <artifactId>spring-social-security</artifactId>
  </dependency>
  <dependency>
    <groupId>org.springframework.social</groupId>
    <artifactId>spring-social-web</artifactId>
  </dependency>
  <dependency>
    <groupId>commons-lang</groupId>
    <artifactId>commons-lang</artifactId>
  </dependency>
  <dependency>
    <groupId>commons-collections</groupId>
    <artifactId>commons-collections</artifactId>
  </dependency>
  <dependency>
    <groupId>commons-beanutils</groupId>
    <artifactId>commons-beanutils</artifactId>
  </dependency>
</dependencies>
```

security-app pom.xml：
```xml
<dependencies>
  <dependency>
    <groupId>com.security</groupId>
    <artifactId>security-core</artifactId>
    <version>${security.version}</version>
  </dependency>
</dependencies>
```

security-browser pom.xml：
```xml
<dependencies>
  <dependency>
    <groupId>com.security</groupId>
    <artifactId>security-core</artifactId>
    <version>${security.version}</version>
  </dependency>

  <dependency>
    <groupId>org.springframework.session</groupId>
    <artifactId>spring-session</artifactId>
  </dependency>
</dependencies>
```

security-demo pom.xml：
```xml
<dependencies>
  <dependency>
    <groupId>com.security</groupId>
    <artifactId>security-browser</artifactId>
    <version>${security.version}</version>
  </dependency>

  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
  </dependency>
</dependencies>
```

## 2.Hello Spring Security
security-demo application.properties：
```properties
spring.datasource.driver-class-name = com.mysql.jdbc.Driver
spring.datasource.url= jdbc:mysql://127.0.0.1:3306/demo?useUnicode=yes&characterEncoding=UTF-8&useSSL=false
spring.datasource.username = root
spring.datasource.password = 123456

spring.session.store-type = none

#security.basic.enabled = false

server.port = 8060
```
