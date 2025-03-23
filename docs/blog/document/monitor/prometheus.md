---
title: 【工作】Prometheus篇
tags:
  - 监控
  - prometheus
---

## Exporter

### Oracle Exporter issues

**Golang-pkg-config --cflags oci8, Package oci8 was not found in the pkg-config search path.**

在linux下可以正常运行[oracledb_exporter](https://github.com/iamseth/oracledb_exporter)，在windows64下启动时报错
```
pkg-config --cflags oci8
Package oci8 was not found in the pkg-config search path.
```
因为linux中已经安装了oracle客户端，所以怀疑可能是windows下没有导致的


#### 1.go-oci8
- 地址：[https://github.com/wendal/go-oci8](https://github.com/wendal/go-oci8)
- 它是 [https://github.com/mattn/go-oci8](https://github.com/mattn/go-oci8) 的分支，增加了windows下中文的安装说明及相关文件。
- 从oracledb_exporter的代码中可以看到引用的是go-oci8
`_ "github.com/mattn/go-oci8"`,所以需要安装windows的oracle连接。

#### 2.安装oci
- 地址：[https://www.oracle.com/technetwork/database/database-technologies/instant-client/downloads/index.html](https://www.oracle.com/technetwork/database/database-technologies/instant-client/downloads/index.html)
- 我的安装目录为：F:\instantclient_18 _3

#### 3.安装oci-sdk
- 地址：同上。
- 我的安装目录为F:\instantclient_18 _3\sdk

#### 4.安装MinGW
- 地址：[https://sourceforge.net/projects/mingw-w64/files/](https://sourceforge.net/projects/mingw-w64/files/)
- 我的安装目录为F:\mingw-w64
- 配置环境变量：在系统变量path中追加 F:\mingw-w64\x86_64-8.1.0-posix-seh-rt_v6-rev0\mingw64\bin

#### 5.下载go-oci8驱动
- 地址：[https://github.com/wendal/go-oci8](https://github.com/wendal/go-oci8)
- 运行命令 go get github.com/wendal/go-oci8 (报错先不管)
- 复制GOPATH目下的\src\github.com\wendal\go-oci8\windows\pkg-config.exe到到mingw的安装目录mingw64\bin下。
- 复制GOPATH目下的\src\github.com\wendal\go-oci8\windows\oci8.pc到到mingw的安装目录mingw64\lib\pkg-config的下。
- 修改oci8.pc
> #Package Information for pkg-config
> prefix=F:/instantclient_18_3
> exec_prefix=F:/instantclient_18_3
> libdir=${exec_prefix}
> includedir=${prefix}/sdk/include/
>
> Name: OCI
> Description: Oracle database engine
> Version: 18.3
> Libs: -L${libdir} -loci
> Libs.private:
> Cflags: -I${includedir}

#### 6.环境变量配置
- PATH=原有PATH;F:\instantclient_18_3;
- PKG_CONFIG_PATH=F:\mingw-w64\x86_64-8.1.0-posix-seh-rt_v6-rev0\mingw64\lib\pkg-config


##### 启动报错
```
F:\GOENV\src\github.com\wendal\go-oci8\oci8.go:119: cannot use (**_Ctype_struct_OCIServer)(unsafe.Pointer(&conn.svc)) (type **_Ctype_struct_OCIServer) as type **_Ctype_struct_OCISvcCtx in argument to func literal
F:\GOENV\src\github.com\wendal\go-oci8\oci8.go:136: cannot use (*_Ctype_struct_OCIServer)(c.svc) (type *_Ctype_struct_OCIServer) as type *_Ctype_struct_OCISvcCtx in argument to func literal
F:\GOENV\src\github.com\wendal\go-oci8\oci8.go:263: cannot use (*_Ctype_struct_OCIServer)(s.c.svc) (type *_Ctype_struct_OCIServer) as type *_Ctype_struct_OCISvcCtx in argument to func literal
F:\GOENV\src\github.com\wendal\go-oci8\oci8.go:383: cannot use (*_Ctype_struct_OCIServer)(s.c.svc) (type *_Ctype_struct_OCIServer) as type *_Ctype_struct_OCISvcCtx in argument to func literal
```
##### 替换GOPATH目下的\src\github.com\wendal\go-oci8里四处OCIServer为OCISvcCtx。

参考：  
[https://www.cnblogs.com/ghj1976/p/3437250.html](https://www.cnblogs.com/ghj1976/p/3437250.html)  
[https://blog.csdn.net/wq57885/article/details/82841792](https://blog.csdn.net/wq57885/article/details/82841792)  