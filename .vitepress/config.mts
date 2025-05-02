import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Brotherc 博客",
  description: "技术博客",
  lang: "zh-CN",
/*  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', {rel: 'stylesheet', href: '/theme/custom.css'}]
  ],*/
  markdown: {
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true
    },
    lineNumbers: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      label: '本页内容', // 替换默认的"On this page"
      level: [2, 3] // 可选：指定要包含的标题级别
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    nav: [ {
      text: '首页',
      link: '/'
    }
      // {
      //     text: '算法',
      //     items: []
      // },
      // {
      //   text: "标签",
      //   link: '/tag/',
      //   tags: true
      // },
      // {
      //   text: '我的',
      //   items: [
      //     {text: 'Github', link: 'https://github.com/brotherc'}
      //   ]
      // },
    ],

    sidebar: [{
        text: '前端',
        collapsed: false,
        items: [
          {text: "【案例】Vue谷歌地图集成", link: '/blog/document/front/vue-googel_map'},
          {text: "【案例】前端项目构建", link: '/blog/document/front/vue-project'}
        ]
      },
      {
        text: '后端',
        collapsed: false,
        items: [
          {text: "【知识】搞懂位运算", link: '/blog/document/backend/Java-bit-operation'},
          {text: "【知识】WebFlux", link: '/blog/document/backend/webflux'},
          {text: "【工作】Java高频代码备忘录", link: '/blog/document/backend/JavaCodeMemo'},
          {text: "【工作】Guava开发必备代码库", link: '/blog/document/backend/Google-Guava-Common-operations'},
          {text: "【工作】Mybatis高频代码备忘录", link: '/blog/document/backend/Mybatis'},
          {text: "【工作】Nginx获取客户端ip端口", link: '/blog/document/business/nginx-orgin-ip-port'},
          {text: "【手册】linux常用指令", link: '/blog/document/backend/linux-Commonly-used-instructions'},
          {text: "【手册】开发必备网站", link: '/blog/document/backend/resource-list'},
          {text: "【工作】Maven高级应用", link: '/blog/document/backend/Maven'}
        ]
      },{
        text: '工作学习',
        collapsed: false,
        items: [
          {text: "【案例】Spring国际化落地实践", link: '/blog/document/work/springboot_i18n'},
          {text: "【案例】网关升级改造", link: '/blog/document/work/gateway'},
          {text: "【案例】金额计算中关于加锁与事务的顺序", link: '/blog/document/work/lock_transactional'},
          {text: "【案例】SpringCloud升版引起的消息消费异常", link: '/blog/document/work/springcloudstream'},
          {text: "【案例】JVM堆外内存泄漏", link: '/blog/document/work/noheap_leak'},
          {text: "【案例】学会看堆栈日志排查非Java问题", link: '/blog/document/work/error_stack'},
          {text: "【案例】微信JS-SDK拍照集成", link: '/blog/document/business/wechat_take_photos'},
          {text: "【案例】Nginx代理Sftp服务器文件上传", link: '/blog/document/business/nginx-proxy-sftp'},
          {text: "【总结】用户中心", link: '/blog/document/work/user_center'}
        ]
      },{
        text: '源码阅读',
        collapsed: false,
        items: [
          {text: "【源码】HashMap", link: '/blog/document/sourcecode/HashMap'},
          {text: "【源码】ConcurrentHashMap", link: '/blog/document/sourcecode/ConcurrentHashMap'},
          {text: "【源码】uid-generator", link: '/blog/document/sourcecode/uid-generator'},
          {text: "【源码】ThreadPoolExecutor", link: '/blog/document/sourcecode/ThreadPoolExecutor'},
          {text: "【源码】kafka", link: '/blog/document/sourcecode/kafka'},
          {text: "【源码】Redis", link: '/blog/document/sourcecode/redis'},
          {text: "【源码】SpringMVC-启动", link: '/blog/document/sourcecode/SpringMVC_start'},
          {text: "【源码】SpringMVC-DispatcherServlet", link: '/blog/document/sourcecode/SpringMVC_DispatcherServlet'},
          {text: "【源码】SpringCloudGateway", link: '/blog/document/sourcecode/SpringCloudGateway'},
          {text: "【源码】优秀设计思想", link: '/blog/document/sourcecode/sourcecode'}
        ]
      }, {
        text: '生产环境问题',
        collapsed: false,
        items: [
          {text: "【问题】CPU高", link: '/blog/document/prod/cpu_hight_issue'},
          {text: "【问题】Redis请求超时", link: '/blog/document/prod/redis_time_out'},
          {text: "【问题】RedisCluster之RENAME异常", link: '/blog/document/prod/redis_rename'},
          {text: "【问题】Jpa内存泄漏", link: '/blog/document/prod/jpa'},
          {text: "【问题】RabbitMQ消息顺序问题", link: '/blog/document/prod/rabbitmq_order'},
          {text: "【问题】用户订单金额少扣", link: '/blog/document/prod/redis_lock_lose'}
        ]
      }, {
        text: '技术长文',
        collapsed: false,
        items: [
          {text: "RocketMQ篇", link: '/blog/document/technicalArticle/RocketMQ'},
          {text: "SpringCloudGateway篇", link: '/blog/document/technicalArticle/SpringCloudGateway'}
        ]
      },{
        text: '开发问题汇总',
        collapsed: false,
        items: [
          {text: "【问题】RSA私钥获取异常", link: '/blog/document/backend/encoderissue'},
          {text: "【问题】Skywalking启动异常", link: '/blog/document/backend/skywalking'}
        ]
      }, {
        text: '数据库',
        collapsed: false,
        items: [
          {text: "【工作】Oracle开发代码速查", link: '/blog/document/database/Oracle'}
        ]
      },{
        text: 'spring',
        collapsed: false,
        items: [
          {text: "【工作】Spring奇巧淫技", link: '/blog/document/spring/spring-Common-operations'},
          {text: "【工作】策略模式在Spring中实现", link: '/blog/document/spring/Spring-strategy'},
          {text: "【工作】RestTemplate实战", link: '/blog/document/spring/resttemplate'},
          {text: "【工作】Feign", link: '/blog/document/spring/feign'}
        ]
      },{
        text: '分布式',
        collapsed: false,
        items: [
          {text: "【学习】分布式ID", link: '/blog/document/distributed_id/distributed-id'},
          {text: "【学习】分布式事务(一)", link: '/blog/document/distributed_transaction/distributed_transaction1'},
          {text: "【学习】分布式事务(二)", link: '/blog/document/distributed_transaction/distributed_transaction2'},
          {text: "【学习】分布式事务(三)", link: '/blog/document/distributed_transaction/distributed_transaction3'},
          {text: "【学习】分布式事务(四)", link: '/blog/document/distributed_transaction/distributed_transaction4'},
          {text: "【学习】分布式事务(五)", link: '/blog/document/distributed_transaction/seata'},
          {text: "【学习】分布式锁", link: '/blog/document/distributed_lock/distributed_lock'},
          {text: "【学习】分布式任务调度XXL-JOB", link: '/blog/document/taskschedule/xxl-job'}
        ]
      },{
        text: '高并发',
        collapsed: false,
        items: [
          {text: "【学习】限流-Guava", link: '/blog/document/latency_fault_tolerance/Google-xianliu-Guava'},
          {text: "【学习】熔断-Hystrix", link: '/blog/document/latency_fault_tolerance/hystrix1'},
          {text: "【学习】熔断-基于hystrix的高可用缓存服务架构", link: '/blog/document/latency_fault_tolerance/hystrix2'}
        ]
      },{
        text: '监控',
        collapsed: false,
        items: [
          {text: "【工作】Prometheus篇", link: '/blog/document/monitor/prometheus'},
          {text: "【工作】Influxdb篇", link: '/blog/document/monitor/influxdb'},
          {text: "【工作】Telegraf篇", link: '/blog/document/monitor/telegraf'},
          {text: "【工作】Kapacitor篇", link: '/blog/document/monitor/kapacitor'}
        ]
      },{
        text: "开发编辑器",
        collapsed: false,
        items: [
          {text: "idea", link: "/blog/document/editor/idea/idea-setting"},
          {text: "atom", link: "/blog/document/editor/atom/atom-setting"}
        ],
      }, {
        text: 'AI革命',
        collapsed: false,
        items: [
          {text: "【资源】玩转AI", link: '/blog/document/ai/ai'}
        ]
      }, {
        text: '开发者百宝箱',
        collapsed: false,
        items: [
          {text: "【资源】宝藏网站", link: '/blog/document/other/website'},
          {text: "【资源】Chrome插件利器", link: '/blog/document/browser/Chrome'},
          {text: "【资源】技术学习", link: '/blog/document/other/study'}
        ]
      }, {
        text: '其它',
        collapsed: false,
        items: [
          {text: "【拓展】ble开发", link: '/blog/document/business/ble_android'}
        ]
      },
      // {
      // items: [{
      //   text: '工作实践',
      //   collapsed: false,
      //   items: [
      //       {text: "同一时间只允许一个客户端操作前端界面", link: '/blog/document/business/At-the-sametime-allow-only-one-client-front-end-interface-to-operate'},
      //     {text: "树形结构业务模型实践", link: '/blog/document/business/Tree-structure-business-model'},
      //     {text: "获取区号", link: '/blog/document/business/Access-to-the-area-code'}
      //   ]
      // },
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
      // ]}
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/CyrilFeng/Q-calculator' }
    ]
  }
})
