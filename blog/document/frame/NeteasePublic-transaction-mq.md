---
title: 基于MQ的分布式事务解决方案
tags:
  - 网易云课堂公开课
---
![](./assets/NeteasePublic/transaction-mq/1.jpg)
![](./assets/NeteasePublic/transaction-mq/2.jpg)
![](./assets/NeteasePublic/transaction-mq/3.jpg)
![](./assets/NeteasePublic/transaction-mq/4.jpg)
![](./assets/NeteasePublic/transaction-mq/5.jpg)
![](./assets/NeteasePublic/transaction-mq/6.jpg)
![](./assets/NeteasePublic/transaction-mq/7.jpg)
![](./assets/NeteasePublic/transaction-mq/8.jpg)
![](./assets/NeteasePublic/transaction-mq/9.jpg)
![](./assets/NeteasePublic/transaction-mq/10.jpg)
![](./assets/NeteasePublic/transaction-mq/11.jpg)
![](./assets/NeteasePublic/transaction-mq/12.jpg)
![](./assets/NeteasePublic/transaction-mq/14.jpg)
![](./assets/NeteasePublic/transaction-mq/15.jpg)
![](./assets/NeteasePublic/transaction-mq/16.jpg)
![](./assets/NeteasePublic/transaction-mq/17.jpg)
![](./assets/NeteasePublic/transaction-mq/19.jpg)
![](./assets/NeteasePublic/transaction-mq/20.jpg)
![](./assets/NeteasePublic/transaction-mq/21.jpg)
![](./assets/NeteasePublic/transaction-mq/22.jpg)

```sql
CREATE TABLE `tb_distributed_message` (
  `unique_id` varchar(255) DEFAULT NULL COMMENT '唯一ID',
  `msg_content` varchar(1024) DEFAULT NULL COMMENT '消息内容',
  `msg_status` int(11) DEFAULT '0' COMMENT '是否发送到MQ：0:未发送；1:已发送',
  `create_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '消息创建时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='订单-分布式事务-本地消息表';

CREATE TABLE `table_order` (
  `order_id` varchar(255) NOT NULL COMMENT '订单号',
  `user_id` varchar(255) NOT NULL COMMENT '用户编号',
  `order_content` varchar(255) NOT NULL COMMENT '订单内容(买了哪些东西，送货地址)',
  `create_time` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='订单信息表';

CREATE TABLE `table_dispatch` (
  `dispatch_seq` varchar(255) NOT NULL COMMENT '调度流水号',
  `order_id` varchar(255) NOT NULL COMMENT '订单编号',
  `dispatch_status` varchar(255) DEFAULT NULL COMMENT '调度状态',
  `dispatch_content` varchar(255) DEFAULT NULL COMMENT '调度内容(送餐员，路线)',
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='调度信息表';
```

order-service:
```yaml
server:
  port: 8081

spring: 
  datasource: 
    url: jdbc:mysql://database.tony.com:3306/test-order-db?useUnicode=true&characterEncoding=UTF-8&zeroDateTimeBehavior=convertToNull&useSSL=false
    username: tony
    password: tony
    driver-class-name: com.mysql.jdbc.Driver
  rabbitmq:
    host: mq.tony.com
    port: 5672
    username: admin
    password: 12345678
    # 重要！  开启消息发送确认机制
    publisher-confirms: true
logging:
  level:
    root: warn
```

```java
@Service
public class OrderService {

	@Autowired
	OrderDatabaseService orderDatabaseService;

	@Autowired
	MQService mQService;
	
	/** 创建订单 */
	@Transactional(rollbackFor = Exception.class) // 订单创建整个方法添加事务
	public void createOrder(JSONObject orderInfo) throws Exception {
		// 1. 订单信息 - 插入订单系统，订单数据库（事务-1）
		orderDatabaseService.saveOrder(orderInfo);
		
		mQService.sendMsg(orderInfo);
//		// 2. 通过http接口发送订单信息到 运单系统
//		String result = callDispatchHttpApi(orderInfo);
//		if (!"ok".equals(result)) {
//			throw new Exception("订单创建失败，原因[运单接口调用失败]");
//		}
	}

	/**
	 * 通过http接口发送 运单系统，将订单号传过去
	 * 
	 * @return 接口调用结果
	 */
	public String callDispatchHttpApi(JSONObject orderInfo) {
		SimpleClientHttpRequestFactory requestFactory = new SimpleClientHttpRequestFactory();
		// 链接超时时间 > 3秒
		requestFactory.setConnectTimeout(3000);
		// 处理超时时间 > 2 秒
		requestFactory.setReadTimeout(2000);

		RestTemplate restTemplate = new RestTemplate(requestFactory);
		String httpUrl = "http://127.0.0.1:8080/dispatch-api/dispatch?orderId=" + orderInfo.getString("orderId");
		String result = restTemplate.getForObject(httpUrl, String.class);

		return result;
	}
}
```

```java
/**
 * 数据库操作相关的service
 * 
 * @author Tony
 */
@Service
@Transactional(rollbackFor = Exception.class)
public class OrderDatabaseService {

	@Autowired
	JdbcTemplate jdbcTemplate;

	/**
	 * 1.保存订单记录
	 * 
	 * @param userId       用户ID
	 * @param orderId      订单编号
	 * @param orderContent 订单内容
	 * @throws Exception 抛个异常
	 */
	public void saveOrder(JSONObject orderInfo) throws Exception {
		String sql = "insert into table_order (order_id, user_id, order_content, create_time) values (?, ?, ?,now())";
		// 1. 添加订单记录
		int count = jdbcTemplate.update(sql, orderInfo.get("orderId"), orderInfo.get("userId"),
				orderInfo.get("orderContent"));

		if (count != 1) {
			throw new Exception("订单创建失败，原因[数据库操作失败]");
		}

		// 2. 本地消息表(表示这个数据要通知到其他系统)
		saveLocalMessage(orderInfo);
	}

	/**
	 * 2 保存本地消息表信息
	 * 
	 * @param orderId        订单编号，此处当做消息唯一编号
	 * @param messageContent 消息内容
	 * @throws Exception
	 */
	public void saveLocalMessage(JSONObject orderInfo) throws Exception {
		String sql = "insert into tb_distributed_message (unique_id, msg_content, msg_status, create_time) values (?, ?, ?, now())";
		int count = jdbcTemplate.update(sql, orderInfo.get("orderId"), orderInfo.toJSONString(), 0);

		if (count != 1) {
			throw new Exception("出现异常，原因[数据库操作失败]");
		}
	}
}
```

```java
/**
 * 这是一个发送MQ消息，修改消息表的地方
 * 
 * @author Tony
 *
 */
@Service
@Transactional(rollbackFor = Exception.class)
public class MQService {
	private final Logger logger = LoggerFactory.getLogger(MQService.class);

	@Autowired
	JdbcTemplate jdbcTemplate;

	@Autowired
	private RabbitTemplate rabbitTemplate;

	@PostConstruct
	public void setup() {
		// 消息发送完毕后，则回调此方法 ack代表发送是否成功
		rabbitTemplate.setConfirmCallback(new ConfirmCallback() {
			@Override
			public void confirm(CorrelationData correlationData, boolean ack, String cause) {
				// ack为true，代表MQ已经准确收到消息
				if (!ack) {
					return;
				}

				try {
					// 2. 修改本地消息表的状态为“已发送”。删除、修改状态
					String sql = "update tb_distributed_message set msg_status=1 where unique_id=?";
					int count = jdbcTemplate.update(sql, correlationData.getId());

					if (count != 1) {
						logger.warn("警告：本地消息表的状态修改不成功");
					}
				} catch (Exception e) {
					logger.warn("警告：修改本地消息表的状态时出现异常", e);
				}

			}
		});
	}

	/**
	 * 发送MQ消息，修改本地消息表的状态
	 * 
	 * @throws Exception
	 */
	public void sendMsg(JSONObject orderInfo) throws Exception {
		// 1. 发送消息到MQ
		// CorrelationData 当收到消息回执时，会附带上这个参数
		rabbitTemplate.convertAndSend("createOrderExchange", "", orderInfo.toJSONString(),
				new CorrelationData(orderInfo.getString("orderId")));
	}
}
```

dispatch-service:
```yaml
server:
  port: 8080

spring: 
  datasource:
    url: jdbc:mysql://database.tony.com:3306/test-dispatch-db?useUnicode=true&characterEncoding=UTF-8&zeroDateTimeBehavior=convertToNull&useSSL=false
    username: tony
    password: tony
    driver-class-name: com.mysql.jdbc.Driver
  rabbitmq: 
    host: mq.tony.com
    port: 5672
    username: admin
    password: 12345678
    # 重要，开启手动ack，控制消息在MQ中的删除、重发...
    listener: 
      simple: 
        acknowledge-mode: MANUAL
```

```java
/**
 * 运单系统http API
 * 
 * @author Tony
 *
 */
@RestController
@RequestMapping("/dispatch-api")
public class DispatchController {

	@Autowired
	private DispatchService dispatchService;

	// 下订单后，添加调度信息
	@GetMapping("/dispatch")
	public String lock(String orderId) throws Exception {
		Thread.sleep(3000L); // 此处模拟业务耗时，接口调用者会认为超时
		dispatchService.dispatch(orderId); // 将外卖订单分配给送餐小哥
		return "ok";
	}
}
```

```java
/**
 * 消费者，取调度队列
 * 
 * @author Tony
 *
 */
@Component
public class OrderDispatchConsumer {
	private final Logger logger = LoggerFactory.getLogger(OrderDispatchConsumer.class);

	@Autowired
	DispatchService dispatchService;

	@RabbitListener(queues = "orderDispatchQueue")
	public void messageConsumer(String message, Channel channel, @Header(AmqpHeaders.DELIVERY_TAG) long tag)
			throws Exception {
		try {
			// mq里面的数据转为json对象
			JSONObject orderInfo = JSONObject.parseObject(message);
			logger.warn("收到MQ里面的消息：" + orderInfo.toJSONString());
			Thread.sleep(5000L);

			// 执行业务操作，同一个数据不能处理两次，根据业务情况去重，保证幂等性。 （拓展：redis记录处理情况）
			String orderId = orderInfo.getString("orderId");
			// 这里就是一个分配外卖小哥...
			dispatchService.dispatch(orderId);
			// ack - 告诉MQ，我已经收到啦
			channel.basicAck(tag, false);
		} catch (Exception e) {
			// 异常情况 :根据需要去： 重发/ 丢弃
			// 重发一定次数后， 丢弃， 日志告警
			channel.basicNack(tag, false, false);
			// 系统 关键数据，永远是有人工干预
		}
		// 如果不给回复，就等这个consumer断开链接后，mq-server会继续推送
	}
}
```

```java
/**
 * 调度相关操作
 * 
 * @author Tony
 *
 */
@Service
public class DispatchService {

	@Autowired
	JdbcTemplate jdbcTemplate;

	/**
	 * 添加调度信息（此处仅往数据库增加一条数据）
	 * 
	 * @param orderId 订单ID
	 */
	@Transactional
	public void dispatch(String orderId) throws Exception {
		// 往数据库插入一条记录 调度系统数据库事务2
		String sql = "insert into table_dispatch (dispatch_seq, order_id,dispatch_content) values (UUID(), ?, ?)";
		int update = jdbcTemplate.update(sql, orderId, "派送此订单");
		if (update != 1) {
			throw new SQLException("调度数据插入失败，原因[数据库操作]");
		}
	}
}
```