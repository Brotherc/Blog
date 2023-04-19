---
title: linux-常用指令
tags:
  - linux
---
## 查看目录下有什么文件/目录
> ls &emsp;&emsp;&emsp;&emsp;&emsp; //list 列出目录的文件信息  
> ls -l或ll &emsp;&emsp;&ensp; //list -list 以"详细信息"查看目录文件  
> ls -a &ensp;&emsp;&emsp; &emsp; //list -all 查看目录"全部"（包括隐藏文件）文件  
> ls -al &ensp;&emsp;&emsp;&emsp; //list -all list 查看目录"全部"（包括隐藏文件）文件，以"详细信息"显示  
> ls 目录 &ensp;&emsp; &emsp; //查看指定目录下有什么文件  
> ls -i &emsp;&emsp;&emsp;&emsp; //查看文件索引号码  

## 进行目录切换
> cd dirname &emsp;//进行目录切换    
> cd .. &emsp;&emsp;&emsp;&emsp;&ensp;//想上级目录切换  
> cd ~ 或 cd &emsp;&ensp;//直接切换到当前用户  

## 查看完整的操作位置
> pwd  

## 用户切换
> su -  或 su - root &emsp;//向root用户切换  
> exit &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp; //退回到原用户  
> su 用户名 &emsp;&emsp;&emsp;&emsp;//普通用户切换   

多次使用su指令，会造成用户的"叠加"：  
（su和exit最好配合使用）  
lcs--->root--->lcs--->root--->lcs  

## 查看当前用户是谁
> whoami  

## 图形界面与命令界面切换
root用户可以切换  
> #init 3  
> #init 5  

## 查看一个指令对应的执行程序文件在哪
> which 指令  

## 目录相关操作
1）创建目录 make directory  

> mkdir 目录名字  
> mkdir -p newdir/newdir/newdir //递归方式创建多个连续目录，新的多级目录数目如果大于等于2个，就要使用-p参数  
mkdir dir/newdir &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;//不用-p参数  
> mkdir -p dir/newdir/newdir &emsp;&emsp;//使用-p参数  

2）移动目录 move  

> mv dir1 dir2  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;//把dir1移动到dir2目录下  
> mv dir1/dir2 dir3  &emsp;&emsp;&emsp;&ensp; //把dir2移动到dir3目录下  
> mv dir1/dir2 dir3/dir4  &emsp;&ensp;//把dir2移动到dir4目录下  
> mv dir1/dir2 ./ &emsp;&emsp;&emsp;&emsp;&emsp;//把dir2移动到当前目录下  

3）改名字  

> mv dir1 newdir &emsp;&emsp;&emsp;&emsp;//修改dir1的名字为newdir  
>
> mv是"移动"和"改名字"合并的指令  
> mv dir1 ./newdir &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;//dir1移动到当前目录下，并改名字为newdir    
> mv dir1/dir2 dir3 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp; //dir2移动到dir3目录下，并改名字为"原名"  
> mv dir1/dir2 dir3/newdir &emsp;&emsp;&emsp;&emsp;//dir2移动到dir3目录下，并改名字为newdir  
> mv dir1/dir2 dir3/dir4 &emsp;&emsp;&emsp;&emsp;&emsp; //dir2移动到dir4目录下，并改名字为"原名"  
> mv dir1/dir2 dir3/dir4/newdir &emsp;&ensp;//dir2移动到dir4目录下，并改名字为newdir    

4）复制（文件和目录）copy  

①文件的复制
> cp file1 dir/newfile2  &emsp;&emsp;&emsp;&emsp;//file1被复制一份到dir目录下，并改名字为newfile2  
> cp file1 dir  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;//file1被复制一份到dir目录下，并改名字为"原名"  
> cp dir1/filea dir2/newfile  &emsp;&ensp; //filea被复制一份到dir目录下，并改名字为newfile      

②目录的复制（需要设置-r[recursive递归]参数，无视目录的层次）
> cp -r dir1 dir2  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;//dir1被复制到dir2目录下，并改名字为"原名"  
> cp -r dir1/dir2 dir3/newdir  &emsp;&emsp;&emsp;//dir2被复制到dir3目录下，并改名字为newdir  
> cp -r dir1/dir2 dir3/dir4  &emsp;&emsp;&emsp;&emsp; //dir2被复制到dir4目录下，并改名字为"原名"  
> cp -r dir1/dir2 dir3/dir4/newdir &ensp;//dir2被复制到dir4目录下，并改名字为newdir  
> cp -r dir1 ../../newdir  &emsp;&emsp;&emsp;&emsp;&emsp;&ensp;//dir1被复制到上两级目录下，并改名字为newdir    
> \cp sourceDir targetDir &emsp;&emsp;&emsp;&emsp;&emsp;//复制时如果有文件名重复，直接覆盖

③删除（文件和目录）remove
> rm 文件  
> rm -r 目录  &emsp;&emsp;&emsp;&emsp;&emsp;//-r[recursive递归]递归方式删除目录  
> rm -rf 文件/目录  &emsp;&emsp; //-r force 递归强制方式删除文件，force强制，不需要额外导入提示  

## 文件操作
1）查看文件内容  

> cat filename  &emsp;&emsp;&emsp;//打印文件内容到输出终端  
> more filename  &emsp;&emsp;//通过敲回车方式逐行查看文件的各个行内容，默认从第一行开始查看，  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; //不支持回看，q退出查看  
> less &emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;//通过"上下左右"键查看文件的各个部分内容，支持回看，q退出查看  
> head -n filename &ensp; //查看文件的前n行内容  
> tail -n filename &emsp;&ensp; //查看文件的最末尾n行内容  
> wc filename &emsp;&emsp;&emsp; //查看文件的行数  
>
> cat filename | tail -n +3000 | head -n 1000 //从第3000行开始，显示1000行。即显示3000~3999行  
> cat filename| head -n 3000 | tail -n +1000 //显示1000行到3000行  
> cat filename | grep -n '关键字' //按关键字查看并显示行号  
> cat filename | grep -C 20 '关键字' //显示文件里匹配关键字那行以及上下20行  
> cat filename | grep -B 20 '关键字' //显示关键字及前20行  
> cat filename | grep -A 20 '关键字' //显示关键字及后20行  

2）创建文件

> touch dir1/filename  
> touch filename  

3）给文件追加内容  

> echo 内容 > 文件名称 &emsp;&emsp;&emsp;&emsp;//把"内容"以[覆盖写]方式追加给"文件"  
> echo 内容 >> 文件名称 &emsp;&emsp;&emsp; //把"内容"以[追加]方式写给"文件"  

（如果文件不存在会创建文件）  

## 用户操作
配置文件：/etc/passwd  
1）创建用户 user add  

>#useradd  
>#useradd liming &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;//创建liming用户，  
同时会创建一个同名的组出来  
>#useradd -g 组别编号 username &emsp;&emsp;&ensp;//把用户的组别设置好，避免创建同名的组出来  
>#useradd -g 组编号 -u 用户编号 -d 家目录 username  

2）修改用户 user modify  

>#usermod -g 组编号 -u 用户编号 -d 家目录 -l 新名字 username  
（修改家目录时需要手动创建之）  

3）删除用户 user delete  

>#userdel username  
>#userdel -r username //删除用户同时删除其家目录     

4）给用户设置密码，使其登录系统  

>passwd 用户名  

## 组别操作
配置文件：/etc/group  
1）创建组 group add  

>#groupadd music  
>#groupadd movie  
>#groupadd php  

2）修改组 group modify  

>#groupmod -g gid -n 新名字 groupname  

3）删除组 group delete  

>#groupdel groupname //组下边如果有用户存在，就禁止删除  

## 查看指令可设置的参数
>man 指令  

## 给文件设置权限
1）字母相对方式设置权限  
// 针对一个组别设置权限，其他组别权限没有变化，称为“相对方式”权限设置  
chmod指令  
chmod u+rwx filename //给filename文件的主人增加“读、写、执行”权限  
chmod g-rx filename //给filename文件的同组用户 删除“读、执行”权限   

chmod u+/-rwx,g+/-rwx,o+/-rwx filename  
说明：  
①每个单元“+” “-”只能使用一个  
②可以同时给一个组或多个组设置权限，组别之间使用“，”分割  
③每个单元的权限可以是“rwx”中的一个或多个   

> chmod u+w,g-rx,o+rw filename //给filename文件主人增加写权限，同组删除读、执行权限，其他组增加读、写权限  
> chmod u+w,u-x filename //给filename文件主人“增加写权限”同时“删除执行权限”  

chmod +/-rwx filename //无视具体组别，统一给全部的组设置权限  
>chmod +rw filename //给filename全部用户增加“读、写”权限  

2）数字绝对方式设置权限  
r读：4 &emsp;&emsp; w写：2 &emsp;&emsp; x执行：1  
0：没有权限  
1：执行  
2：写  
3：写、执行  
4：读  
5：读、执行  
6：读、写  
7：读、写、执行  

chmod ABC filename //ABC分别代表主人、同组、其他组用户的数字权限  
> chmod 753 filename //主人读、写、执行；同组读、执行；其他组写、执行  

问：字母相对 和 数字绝对 方式权限设置取舍？  
答：修改的权限相对“比较少”的时候使用“字母”方式，相反，权限变动“非常多”的时候就使用“数字”方式  

## 在文件中查找内容
grep 被搜索内容 文件  
> grep hello passwd //在passwd文件中搜索hello内容，会把hello所在行的内容都打印到终端显示   
> grep -o '关键字' filename | wc -l //统计关键字数量   

## 计算文件占据磁盘空间大小
> du -h 文件（目录）  

## 文件查找
find 查找目录 选项 选项值 选项 选项值 ...  
1）-name选项 根据名字进行查找  

> find / -name passwd &emsp;&emsp;&emsp;&emsp;//"递归遍历"/根目录及其内部深层目录，寻找名称等于“passwd”的文件  
> find / -name "pas*"[模糊查找] //在系统全部目录，模糊查找一个名字是“pas”开始的文件  
> find / -name "*er*" &emsp;&emsp;&emsp;&emsp;&emsp; //文件名字有出现“er”字样即可，不要位置  

2）限制查找的目录层次 -maxdepth -mindepth  
-maxdepth 限制查找的最深目录  
-mindepth 限制查找的最浅目录  

> find / -maxdepth 4 -name passwd  
> find / -maxdepth 4 -mindepth 3 -name passwd  

3）根据大小为条件进行文件查找  
-size +/-数字  
+号表示大小大于某个范围  
-号表示大小小于某个范围  
大小单位：  
-size 5 &emsp;&emsp; //单位是“512字节” 5*512字节   
-size 10c &emsp; //单位是“字节” 10字节  
-size 3k &emsp;&ensp; //单位是“千字节” 3*1024字节  
-size 6M &emsp; //单位是“1024*千字节” 6M兆字节  

> find ./ -size 14c &emsp;&emsp;//在当前目录查找大小等于14千字节的文件  
> find / -size +50M  &emsp;//在系统全部目录里边查找大小大于50M的文件  

## vim
搜索：  
> /+关键字 ，回车即可。此为从文档当前位置向下查找关键字，按n键查找关键字下一个位置，按N键查找关键字上一个位置  
> ?+关键字，回车即可。此为从文档挡圈位置向上查找关键字，按n键向上查找关键字  
> 搜索带空格关键字，在空格前加转义字符\  

多行注释：  
> 首先按esc进入命令行模式下，按下Ctrl + v，进入列（也叫区块）模式;  
> 在行首使用上下键选择需要注释的多行;  
> 按下键盘（大写）“I”键，进入插入模式;  
> 然后输入注释符（“//”、“#”等）;  
> 最后按下“Esc”键。  
> 注：在按下esc键后，会稍等一会才会出现注释，不要着急~~时间很短的  

## java程序启动
- 不要使用 “nohup” 命令；使用 “nohup” 会记大量日志在 “nohup.out”，这个日志文件会一直累加，直到硬盘挤爆，这个文件一般不好找；
- 如果非要加“nohup”，在最后加上“ >/dev/null 2>&1”，不记录 “nohup.out”日志；
- 程序启动的时候，不需要进入到jar包目录再对jar包启动，使用绝对路径，方便其他人通过历史记录知道jar的位置；
- 如“java -jar /home/ms/eureka/cloud-eureka-0.0.1-SNAPSHOT.jar >/dev/null 2>&1 &”；

## 磁盘操作
```shell script
--查看大于某个容量的文件
find / -size +100M

--查看磁盘空间大小
df -h

--查看某一个目录中子目录的大小
du -lhd 1

--查看某一个文件的大小
ll -h /usr/local/nginx-1.16.0/logs/crm.access.log
```

## wget
发送post请求：--post-data设置请求body  
携带query参数：url需加上双引号  
```shell
wget --header="Authorization: XXX" --post-data='{}' "https://xxx.com/xxx?a=b&c=d"
```
参考：  
[http://www.manongjc.com/detail/25-cwpauuilypravwr.html](http://www.manongjc.com/detail/25-cwpauuilypravwr.html)  
