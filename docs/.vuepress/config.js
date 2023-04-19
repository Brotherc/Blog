module.exports = {
    title: 'Brotherc 博客',
    description: '博客',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        [
            'link', {
            rel: 'icon',
            href: '/logo.png'
        }
        ] // 增加一个自定义的 favicon(网页标签的图标)
    ],
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 3,
        tags: "tags",
        subSidebar: 'auto',
        nav: [
            {
                text: "标签云",
                link: '/tag/',
                tags: true
            },
            {
                text: '我的',
                items: [
                    {text: 'Github', link: 'https://github.com/brotherc'}
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    {title: "介绍", path: "/"}
                ]
            },
            {
                title: '前端',
                path: '/blog/document/front/typescript',
                collapsable: true,
                children: [
                    {title: "Typescript", path: '/blog/document/front/typescript'},
                    {title: "Vue-集成谷歌地图", path: '/blog/document/front/vue-googel_map'},
                    {title: "Augular", path: '/blog/document/front/Angular-Common-operations'},
                    {title: "Augular-样式与交互", path: '/blog/document/front/Angular-style'},
                    {title: "Augular-表单", path: '/blog/document/front/Angular-form'},
                    {title: "Augular-网络", path: '/blog/document/front/Angular-http'},
                    {title: "第三方库", path: '/blog/document/front/momentJs'}
                ]
            }, {
                title: '后端',
                path: '/blog/document/backend/Golang',
                collapsable: true,
                children: [
                    {title: "Golang", path: '/blog/document/backend/Golang'},
                    {title: "Java-位运算", path: '/blog/document/backend/Java-bit-operation'},
                    {title: "Java-面向对象", path: '/blog/document/backend/Java-OOP'},
                    {title: "Java-常用类", path: '/blog/document/backend/Java-CommonlyUsedClass'},
                    {title: "Java-集合", path: '/blog/document/backend/Java-collection'},
                    {title: "Java-多线程(一)", path: '/blog/document/backend/Java-multithreading'},
                    {title: "Java-多线程(二)", path: '/blog/document/backend/Java-multithreading2'},
                    {title: "Java-多线程(三)", path: '/blog/document/backend/Java-multithreading3'},
                    {title: "Java-jdk1.8新特性", path: '/blog/document/backend/java8'},
                    {title: "Java-Valid", path: '/blog/document/backend/java-Valid'},
                    {title: "Java-常用操作", path: '/blog/document/backend/JavaCommonOperation'},
                    {title: "Java-jdbc", path: '/blog/document/backend/Java-jdbc-date-insert'},
                    {title: "Java-regexp", path: '/blog/document/backend/Java-exp'}
                ]
            }, {
                title: '数据库',
                path: '/blog/document/database/Oracle',
                collapsable: true,
                children: [
                    {title: "Oracle", path: '/blog/document/database/Oracle'},
                    {title: "Oracle-monitorSql", path: '/blog/document/database/Oracle_monitor_sql'},
                    {title: "MySQL-主从复制与读写分离", path: '/blog/document/database/mysql-Master-slave-replication-read-write-separation'},
                    {title: "MySQL-性能优化", path: '/blog/document/database/mysql-performance-optimization'}
                ]
            }, {
                title: 'ORM',
                path: '/blog/document/mybatis/Mybatis',
                collapsable: true,
                children: [
                    {title: "Mybatis", path: '/blog/document/mybatis/Mybatis'},
                    {title: "MybatisPlus", path: '/blog/document/mybatis/Mybatis-plus'}
                ]
            }, {
                title: 'Java第三方库',
                path: '/blog/document/guava/Google-Guava-Common-operations',
                collapsable: true,
                children: [
                    {title: "Guava", path: '/blog/document/guava/Google-Guava-Common-operations'}
                ]
            }, {
                title: '设计模式',
                path: '/blog/document/pattern/Simple-factory',
                collapsable: true,
                children: [
                    {title: "简单工厂", path: '/blog/document/pattern/Simple-factory'},
                    {title: "工厂方法", path: '/blog/document/pattern/Factory-method'},
                    {title: "抽象工厂", path: '/blog/document/pattern/Abstract-factory'},
                    {title: "建造者", path: '/blog/document/pattern/builder'},
                    {title: "原型模式", path: '/blog/document/pattern/prototype'},
                    {title: "装饰者模式", path: '/blog/document/pattern/decorator'},
                    {title: "策略模式", path: '/blog/document/pattern/Spring-strategy'}
                ]
            }, {
                title: '加解密',
                path: '/blog/document/encryption&decryption/JAVA-encryption&decryption',
                collapsable: true,
                children: [
                    {title: "Java-加解密实现", path: '/blog/document/encryption&decryption/JAVA-encryption&decryption'},
                    /*'/blog/document/encryption&decryption/Encryption-type-and-its-related-algorithm'*/
                    {title: "问题", path: '/blog/document/encryption&decryption/issue'}
                ]
            }, {
                title: '日志',
                collapsable: true,
                path: '/blog/document/log/logback',
                children: [
                    {title: "Logback", path: '/blog/document/log/logback'}
                ]
            }, {
                title: '操作系统',
                path: '/blog/document/linux/linux-Commonly-used-instructions',
                collapsable: true,
                children: [
                    {title: "linux-常用指令", path: '/blog/document/linux/linux-Commonly-used-instructions'},
                    {title: "centos7-知识点", path: '/blog/document/linux/centos7'}
                ]
            }, {
                title: 'spring',
                path: '/blog/document/spring/spring-Common-operations',
                collapsable: true,
                children: [
                    {title: "Spring", path: '/blog/document/spring/spring-Common-operations'}
                ]
            }, {
                title: '认证授权',
                path: '/blog/document/spring/SpringSecurity-start',
                collapsable: true,
                children: [
                    {title: "SpringSecurity-开始开发", path: '/blog/document/spring/SpringSecurity-start'},
                    {title: "SpringSecurity-使用SpringMVC开发RESTfulAPI", path: '/blog/document/spring/SpringSecurity-SpringMVC-RESTful-API'},
                    {title: "SpringSecurity-开发基于表单的认证", path: '/blog/document/spring/SpringSecurity-form'},
                    {title: "SpringSecurity-OAuth2集成第三方登录", path: '/blog/document/spring/SpringSecurity-oauth2'},
                    {title: "SpringSecurity-认证流程源码级详解", path: '/blog/document/spring/SpringSecurity-sourceCode'},
                    {title: "SpringSecurity-Social开发第三方认证", path: '/blog/document/spring/SpringSocial-development-third'}
                ]
            }, {
                title: '微服务',
                collapsable: true,
                path: '/blog/document/microservice/resttemplate',
                children: [
                    {title: "Resttemplate", path: '/blog/document/microservice/resttemplate'},
                    {title: "Feign", path: '/blog/document/microservice/feign'}
                ]
            }, {
                title: '限流熔断',
                path: '/blog/document/latency_fault_tolerance/hystrix1',
                collapsable: true,
                children: [
                    {title: "Hystrix", path: '/blog/document/latency_fault_tolerance/hystrix1'},
                    {title: "Hystrix-基于hystrix的高可用缓存服务架构", path: '/blog/document/latency_fault_tolerance/hystrix2'}
                ]
            }, {
                title: '链路追踪',
                collapsable: true,
                path: '/blog/document/traceroute/skywalking',
                children: [
                    {title: "Skywalking", path: '/blog/document/traceroute/skywalking'}
                ]
            }, {
                title: '分布式事务',
                path: '/blog/document/distributed_transaction/distributed_transaction1',
                collapsable: true,
                children: [
                      {title: "介绍(一)", path: '/blog/document/distributed_transaction/distributed_transaction1'},
                      {title: "介绍(二)", path: '/blog/document/distributed_transaction/distributed_transaction2'},
                      {title: "介绍(三)", path: '/blog/document/distributed_transaction/distributed_transaction3'},
                      {title: "介绍(四)", path: '/blog/document/distributed_transaction/distributed_transaction4'},
                      {title: "介绍(五)", path: '/blog/document/distributed_transaction/seata'}
                ]
            }, {
                title: '分布式锁',
                path: '/blog/document/distributed_lock/distributed_lock',
                collapsable: true,
                children: [
                    {title: "分布式锁", path: '/blog/document/distributed_lock/distributed_lock'}
                ]
            }, {
                title: '分布式任务调度',
                path: '/blog/document/taskschedule/xxl-job',
                collapsable: true,
                children: [
                    {title: "XXL-JOB", path: '/blog/document/taskschedule/xxl-job'}
                ]
            },
            {
                title: '监控',
                collapsable: true,
                path: '/blog/document/monitor/prometheus',
                children: [
                    {title: "Prometheus", path: '/blog/document/monitor/prometheus'},
                    {title: "Influxdb", path: '/blog/document/monitor/influxdb'},
                    {title: "Telegraf", path: '/blog/document/monitor/telegraf'},
                    {title: "Kapacitor", path: '/blog/document/monitor/kapacitor'}
                ]
            }, {
                title: '容器',
                path: '/blog/document/container/docker',
                collapsable: true,
                children: [
                    {title: "Docker-基础", path: '/blog/document/container/docker'},
                    {title: "Docker-安装Oracle12", path: '/blog/document/container/docker-Oracle-12c'}
                ]
            }, {
                title: '业务场景',
                path: '/blog/document/business/At-the-sametime-allow-only-one-client-front-end-interface-to-operate',
                collapsable: true,
                children: [
                    {title: "同一时间只允许一个客户端操作前端界面", path: '/blog/document/business/At-the-sametime-allow-only-one-client-front-end-interface-to-operate'},
                    {title: "树形结构业务模型实践", path: '/blog/document/business/Tree-structure-business-model'},
                    {title: "获取区号", path: '/blog/document/business/Access-to-the-area-code'},
                    {title: "调用微信JS-SDK实现拍照功能", path: '/blog/document/business/wechat_take_photos'},
                    {title: "Nginx获取真实ip和客户端端口", path: '/blog/document/business/nginx-orgin-ip-port'},
                    {title: "Nginx代理内网上传文件到外网Sftp服务器", path: '/blog/document/business/nginx-proxy-sftp'}
                ]
            }, {
                title: '生产环境问题',
                path: '/blog/document/prod/cpu_hight_issue',
                collapsable: true,
                children: [
                    {title: "CPU高", path: '/blog/document/prod/cpu_hight_issue'}
                ]
            }, {
                title: '慕课',
                path: '/blog/document/mooc/Concurrent-programming-with-high-concurrency-solution-1',
                collapsable: true,
                children: [
                    {title: "并发编程与高并发解决方案-并发编程", path: '/blog/document/mooc/Concurrent-programming-with-high-concurrency-solution-1'},
                    {title: "并发编程与高并发解决方案-高并发解决方案", path: '/blog/document/mooc/Concurrent-programming-with-high-concurrency-solution-2'}
                ]
            }, {
                title: '专题',
                path: '/blog/document/frame/NeteasePublic-Nginx',
                collapsable: true,
                children: [
                    {title: "Nginx高并发实战注意事项", path: '/blog/document/frame/NeteasePublic-Nginx'},
                    {title: "高并发架构限流技术分享", path: '/blog/document/frame/NeteasePublic-xianliu'},
                    {title: "数据库并发压力大", path: '/blog/document/frame/NeteasePublic-db-concurrent'},
                    {title: "SpringSession原理与坑", path: '/blog/document/frame/NeteasePublic-SpringSession'},
                    {title: "MQ的分布式事务解决方案", path: '/blog/document/frame/NeteasePublic-transaction-mq'},
                    {title: "微专业-高性能编程专题", path: '/blog/document/frame/NeteaseMicroProfessional-performance'},
                    {title: "微专业-高并发中间件专题", path: '/blog/document/frame/NeteaseMicroProfessional-middleware'},
                    {title: "微专业-分布式系统开发技术", path: '/blog/document/frame/NeteaseMicroProfessional-distributed'},
                    {title: "微专业-双11电商网站应对千万级流量技术内幕", path: '/blog/document/frame/YunxiPublic-Double-11-Being-traffic'},
                    {title: "Google平缓限流方案-Guava", path: '/blog/document/frame/YunxiPublic-Google-xianliu-Guava'},
                    {title: "原生JDK线程扩展-Guava", path: '/blog/document/frame/YunxiPublic-JDK-xiancheng-Guava'},
                    {title: "一线互联网企业高并发场景的订单号/ID生成策略", path: '/blog/document/frame/YunxiPublic-distributed-id'},
                    {title: "超时订单自动关闭的优雅实现", path: '/blog/document/frame/YunxiPublic-order-auto-close'}
                ]
            },
            {
                title: "编辑器",
                path: '/blog/document/editor/idea/idea-setting',
                collapsable: true, // 不折叠
                children: [
                    {title: "idea", path: "/blog/document/editor/idea/idea-setting"},
                    {title: "atom", path: "/blog/document/editor/atom/atom-setting"}
                ],
            }, {
                title: '浏览器',
                collapsable: true,
                children: [
                    {title: "Chrome", path: '/blog/document/browser/Chrome'}
                ]
            },
            {
                title: '其它',
                collapsable: true,
                path: '/blog/document/other/website',
                children: [
                    {title: "网站", path: '/blog/document/other/website'},
                    {title: "world", path: '/blog/document/other/world'},
                    {title: "excel", path: '/blog/document/other/excel'}
                ]
            }
        ]
    },
    theme: 'reco'
}
