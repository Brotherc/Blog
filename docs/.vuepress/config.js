module.exports = {
    title: 'Brotherc 博客',
    description: '博客',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', {rel: 'icon', href: '/logo.png'}], // 增加一个自定义的 favicon(网页标签的图标)
        ['img-lazy']
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
                text: '问题&生产故障',
                items: [
                    {
                        text: 'RabbitMQ顺序性问题',
                        link: 'https://www.yuque.com/liuchunsheng-eihay/ny45pn/grihv06a0bccmt8w?singleDoc# 《RabbitMQ消息顺序不一致问题》'
                    },
                    {
                        text: 'SpringBoot&Cloud升级导致Stream消息消费问题',
                        link: 'https://www.yuque.com/liuchunsheng-eihay/ny45pn/gdufqukgslri2kxq?singleDoc# 《SpringBoot&Cloud升级导致Stream消息消费问题》'
                    },
                    {
                        text: 'JPA引发的内存泄漏问题',
                        link: 'https://www.yuque.com/liuchunsheng-eihay/ny45pn/ydl9sihwcrpl6m7g?singleDoc# 《JPA引发的内存泄漏问题》'
                    }
                ]
            },
            {
                text: '扩展',
                items: [{
                        text: 'WebFlux',
                        link: 'https://www.yuque.com/liuchunsheng-eihay/pwhmbd/xrhrtb8azs9pb2s3?singleDoc# 《WebFlux》'
                }]
            },
            {
                text: '工作实践',
                items: [
                    {
                        text: '用户中心',
                        link: 'https://www.yuque.com/liuchunsheng-eihay/ge0ykg/qysxd954rwuyffr4?singleDoc# 《用户中心》'
                    },
                    {
                        text: '网关',
                        link: 'https://www.yuque.com/liuchunsheng-eihay/ge0ykg/kk5uz64o2epi1mkd?singleDoc# 《网关》'
                    }
                ]
            },
            {
                text: '知识总结',
                items: [{
                    text: 'JVM',
                    link: 'https://www.zhixi.com/view/683f4602'
                },{
                    text: '并发编程',
                    link: 'https://www.zhixi.com/view/71e7473d'
                }]
            },
            {
                text: '源码',
                items: [{
                        text: 'ThreadPoolExecutor',
                        link: 'https://www.yuque.com/liuchunsheng-eihay/pwhmbd/zulc92xxxozlnmat?singleDoc# 《ThreadPoolExecutor源码解析》'
                    },{
                        text: 'HashMap',
                        link: 'https://www.yuque.com/liuchunsheng-eihay/pwhmbd/qptxl6hs0l6x1ghu?singleDoc# 《HashMap源码分析》'
                    },{
                        text: 'ConcurrentHashMap',
                        link: 'https://www.yuque.com/liuchunsheng-eihay/pwhmbd/qgf3vnnbn48tbqg8?singleDoc# 《ConcurrentHashMap源码分析》'
                    },{
                        text: 'uid-generator',
                        link: 'https://www.yuque.com/liuchunsheng-eihay/ny45pn/gm29019sxpczru30?singleDoc# 《uid-generator源码解析》'
                    },{
                        text: 'Redis',
                        link: 'https://www.yuque.com/liuchunsheng-eihay/pwhmbd/rgco8qn9vwk0fkau?singleDoc# 《Redis源码解析》'
                    },{
                        text: 'Kafka',
                        link: 'https://www.yuque.com/liuchunsheng-eihay/pwhmbd/nlp9ao45cy8c17rw?singleDoc# 《Kafka源码解析》'
                    },{
                        text: 'SpringCloudGateway',
                        link: 'https://www.yuque.com/liuchunsheng-eihay/pwhmbd/eon0t76ccalxra83?singleDoc# 《SpringCloudGateway源码解析》'
                    },{
                        text: '源码优秀设计思想',
                        link: 'https://www.yuque.com/liuchunsheng-eihay/pwhmbd/tocaf5vsklvhs7xe?singleDoc# 《源码优秀设计思想》'
                    }
                ]
            },
            // {
            //     text: '算法',
            //     items: []
            // },
            {
                text: "标签",
                link: '/tag/',
                tags: true
            },
            {
                text: '我的',
                items: [
                    {text: 'Github', link: 'https://github.com/brotherc'}
                ]
            },
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
                path: '/blog/document/front/vue-googel_map',
                collapsable: true,
                children: [
                    {title: "【案例】Vue实现谷歌地图集成", path: '/blog/document/front/vue-googel_map'}
                ]
            }, {
                title: '后端',
                path: '/blog/document/backend/Java-bit-operation',
                collapsable: true,
                children: [
                    {title: "【知识】搞懂位运算", path: '/blog/document/backend/Java-bit-operation'},
                    {title: "【工作】Java高频代码备忘录", path: '/blog/document/backend/JavaCodeMemo'},
                    {title: "【工作】Guava开发必备代码库", path: '/blog/document/backend/Google-Guava-Common-operations'},
                    {title: "【工作】Mybatis高频代码备忘录", path: '/blog/document/backend/Mybatis'},
                    {title: "【工作】策略模式在Spring中实现", path: '/blog/document/backend/Spring-strategy'},
                    {title: "【问题】RSA私钥获取异常", path: '/blog/document/backend/encoderissue'},
                    {title: "【拓展】Maven高级应用", path: '/blog/document/backend/Maven'}
                ]
            }, {
                title: '数据库',
                path: '/blog/document/database/Oracle',
                collapsable: true,
                children: [
                    {title: "【工作】Oracle开发代码速查", path: '/blog/document/database/Oracle'}
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
                    {title: "Spring-常用操作", path: '/blog/document/spring/spring-Common-operations'}
                ]
            }, {
                title: '认证授权',
                path: '/blog/document/spring/SpringSecurity-start',
                collapsable: true,
                children: [
                    {title: "SpringSecurity-开始开发", path: '/blog/document/spring/SpringSecurity-start'},
                    {
                        title: "SpringSecurity-使用SpringMVC开发RESTfulAPI",
                        path: '/blog/document/spring/SpringSecurity-SpringMVC-RESTful-API'
                    },
                    {title: "SpringSecurity-开发基于表单的认证", path: '/blog/document/spring/SpringSecurity-form'},
                    {title: "SpringSecurity-OAuth2集成第三方登录", path: '/blog/document/spring/SpringSecurity-oauth2'},
                    {
                        title: "SpringSecurity-认证流程源码级详解",
                        path: '/blog/document/spring/SpringSecurity-sourceCode'
                    },
                    {
                        title: "SpringSecurity-Social开发第三方认证",
                        path: '/blog/document/spring/SpringSocial-development-third'
                    }
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
                    {title: "限流-Guava", path: '/blog/document/latency_fault_tolerance/Google-xianliu-Guava'},
                    {title: "熔断-Hystrix", path: '/blog/document/latency_fault_tolerance/hystrix1'},
                    {
                        title: "熔断-基于hystrix的高可用缓存服务架构",
                        path: '/blog/document/latency_fault_tolerance/hystrix2'
                    }
                ]
            }, {
                title: '链路追踪',
                collapsable: true,
                path: '/blog/document/traceroute/skywalking',
                children: [
                    {title: "Skywalking-常见问题", path: '/blog/document/traceroute/skywalking'}
                ]
            },
            {
                title: '分布式ID',
                path: '/blog/document/distributed_id/distributed-id',
                collapsable: true,
                children: [
                    {title: "分布式ID-生成策略", path: '/blog/document/distributed_id/distributed-id'}
                ]
            },
            {
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
                title: '工作实践',
                path: '/blog/document/business/At-the-sametime-allow-only-one-client-front-end-interface-to-operate',
                collapsable: true,
                children: [
                    {
                        title: "同一时间只允许一个客户端操作前端界面",
                        path: '/blog/document/business/At-the-sametime-allow-only-one-client-front-end-interface-to-operate'
                    },
                    {title: "树形结构业务模型实践", path: '/blog/document/business/Tree-structure-business-model'},
                    {title: "获取区号", path: '/blog/document/business/Access-to-the-area-code'},
                    {title: "调用微信JS-SDK实现拍照功能", path: '/blog/document/business/wechat_take_photos'},
                    {title: "Nginx获取真实ip和客户端端口", path: '/blog/document/business/nginx-orgin-ip-port'},
                    {title: "Nginx代理内网上传文件到外网Sftp服务器", path: '/blog/document/business/nginx-proxy-sftp'},
                    {title: "ble安卓开发", path: '/blog/document/business/ble_android'}
                ]
            }, {
                title: '生产环境问题',
                path: '/blog/document/prod/cpu_hight_issue',
                collapsable: true,
                children: [
                    {title: "CPU高", path: '/blog/document/prod/cpu_hight_issue'}
                ]
            },
            // {
            //     title: '慕课',
            //     path: '/blog/document/mooc/Concurrent-programming-with-high-concurrency-solution-1',
            //     collapsable: true,
            //     children: [
            //         {title: "并发编程与高并发解决方案-并发编程", path: '/blog/document/mooc/Concurrent-programming-with-high-concurrency-solution-1'},
            //         {title: "并发编程与高并发解决方案-高并发解决方案", path: '/blog/document/mooc/Concurrent-programming-with-high-concurrency-solution-2'}
            //     ]
            // }, {
            //     title: '专题',
            //     path: '/blog/document/frame/NeteasePublic-Nginx',
            //     collapsable: true,
            //     children: [
            //         {title: "Nginx高并发实战注意事项", path: '/blog/document/frame/NeteasePublic-Nginx'},
            //         {title: "高并发架构限流技术分享", path: '/blog/document/frame/NeteasePublic-xianliu'},
            //         {title: "数据库并发压力大", path: '/blog/document/frame/NeteasePublic-db-concurrent'},
            //         {title: "SpringSession原理与坑", path: '/blog/document/frame/NeteasePublic-SpringSession'},
            //         {title: "MQ的分布式事务解决方案", path: '/blog/document/frame/NeteasePublic-transaction-mq'},
            //         {title: "微专业-高性能编程专题", path: '/blog/document/frame/NeteaseMicroProfessional-performance'},
            //         {title: "微专业-高并发中间件专题", path: '/blog/document/frame/NeteaseMicroProfessional-middleware'},
            //         {title: "微专业-分布式系统开发技术", path: '/blog/document/frame/NeteaseMicroProfessional-distributed'},
            //         {title: "微专业-双11电商网站应对千万级流量技术内幕", path: '/blog/document/frame/YunxiPublic-Double-11-Being-traffic'},
            //         {title: "Google平缓限流方案-Guava", path: '/blog/document/frame/YunxiPublic-Google-xianliu-Guava'},
            //         {title: "原生JDK线程扩展-Guava", path: '/blog/document/frame/YunxiPublic-JDK-xiancheng-Guava'},
            //         {title: "超时订单自动关闭的优雅实现", path: '/blog/document/frame/YunxiPublic-order-auto-close'}
            //     ]
            // },
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
            }, {
                title: 'AI',
                collapsable: true,
                children: [
                    {title: "AI", path: '/blog/document/ai/ai'}
                ]
            }, {
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
