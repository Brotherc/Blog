---
title: 【工作】RestTemplate实战
tags:
  - Java
  - Spring
---
# 【工作】RestTemplate实战
## 请求通用类封装
```java
@Slf4j
@Component
public class RestTemplateHelper {

    private static final Pattern FORM_FEED_PATTERN = Pattern.compile("\f");
    private static final Pattern COLON_PATTERN = Pattern.compile(":");

    @Autowired
    private ObjectMapper objectMapper;

    @Resource(name = "domainFunctionRestTemplate")
    private RestTemplate restTemplate;

    /**
     * http请求
     *
     * @param uriString           请求路径
     * @param httpMethod          请求方法类型
     * @param headerMultiValueMap 请求头
     * @param paramMultiValueMap  请求参数
     * @param contentLength       HTTP消息实体的传输长度(请求头Content-Length)
     * @param contentType         数据类型(请求头Content-Type)
     * @param body                请求体
     * @param <T>                 请求体类型
     * @return 响应结果的封装类
     */
    public <T> ResponseEntity<byte[]> request(
            String uriString, HttpMethod httpMethod, MultiValueMap<String, String> headerMultiValueMap,
            MultiValueMap<String, String> paramMultiValueMap, Long contentLength, MediaType contentType, T body) {
        // 拼接请求参数到url上
        URI uri = buildUriWithQueryParam(uriString, paramMultiValueMap);

        RequestEntity.BodyBuilder requestEntityBuilder = RequestEntity.method(httpMethod, uri);

        // 将用户传的请求头进行透传
        if (!CollectionUtils.isEmpty(headerMultiValueMap)) {
            for (Map.Entry<String, List<String>> entry : headerMultiValueMap.entrySet()) {
                requestEntityBuilder.header(entry.getKey(), entry.getValue().toArray(new String[0]));
            }
        }

        RequestEntity<?> requestEntity = requestEntityBuilder.build();
        // 如果请求是POST、PUT、DELETE、PATCH支持请求体的，则将Content-Length、Content-Type、请求体进行透传
        if (HttpMethod.POST.equals(httpMethod) || HttpMethod.PUT.equals(httpMethod) ||
                HttpMethod.DELETE.equals(httpMethod) || HttpMethod.PATCH.equals(httpMethod)) {
            if (contentLength != null) {
                requestEntityBuilder.contentLength(contentLength);
            }
            if (contentType != null) {
                requestEntityBuilder.contentType(contentType);
            }
            if (body != null) {
                requestEntity = requestEntityBuilder.body(body);
            }
        }

        // 记录请求日志
        logRequestInfo(requestEntity);

        // http请求
        ResponseEntity<byte[]> responseEntity = restTemplate
                .exchange(requestEntity, new ParameterizedTypeReference<byte[]>() {
        });

        // 记录响应日志
        logResponseInfo(responseEntity);

        return responseEntity;
    }

    /**
     * 参考org.springframework.cloud.netflix.zuul.filters.ProxyRequestHelper#getQueryString
     */
    private URI buildUriWithQueryParam(String uri, MultiValueMap<String, String> paramsMultiValueMap) {
        if (CollectionUtils.isEmpty(paramsMultiValueMap)) {
            return UriComponentsBuilder.fromUriString(uri).build().toUri();
        }

        // 创建字符串拼接器，字符串以&进行拼接，拼接后字符串前缀为?，无后缀
        StringJoiner paramPlaceholder = new StringJoiner("&", "?", "");
        Map<String, Object> paramsMap = new HashMap<>(paramsMultiValueMap.size());

        for (Map.Entry<String, List<String>> entry : paramsMultiValueMap.entrySet()) {
            String paramName = entry.getKey();
            int i = 0;
            for (String paramValue : entry.getValue()) {
                StringBuilder keyPair = new StringBuilder(paramName);
                if (!Strings.isNullOrEmpty(paramValue)) {
                    String key = paramName;
                    if (key.contains("\f")) {
                        key = (FORM_FEED_PATTERN.matcher(key).replaceAll("\f\f"));
                    }
                    if (key.contains(":")) {
                        key = COLON_PATTERN.matcher(key).replaceAll("\f");
                    }
                    key = key + i;
                    paramsMap.put(key, paramValue);
                    keyPair.append("={");
                    keyPair.append(key);
                    keyPair.append("}");
                }
                paramPlaceholder.add(keyPair);
                i++;
            }
        }
        return UriComponentsBuilder.fromUriString(uri + paramPlaceholder).build(paramsMap);
    }

    private void logRequestInfo(RequestEntity<?> requestEntity) {
        log.info("请求方法:{}", requestEntity.getMethod());
        log.info("请求url:{}", requestEntity.getUrl());
        log.info("请求头:{}", requestEntity.getHeaders());

        if (requestEntity.hasBody()) {
            byte[] body = new byte[]{};
            if (requestEntity.getBody() instanceof byte[]) {
                body = (byte[]) requestEntity.getBody();
            } else {
                try {
                    body = objectMapper.writeValueAsBytes(requestEntity.getBody());
                } catch (JsonProcessingException e) {
                    log.error("数据转换异常: {}", requestEntity.getBody(), e);
                }
            }
            log.info("请求体:{}", new String(body, StandardCharsets.UTF_8));
        }
    }

    private void logResponseInfo(ResponseEntity<byte[]> responseEntity) {
        log.info("响应码:{}", responseEntity.getStatusCodeValue());
        log.info("响应头:{}", responseEntity.getHeaders());
        if (responseEntity.getBody() != null) {
            log.info("响应体:{}", new String(responseEntity.getBody(), StandardCharsets.UTF_8));
        }
    }

}
```
```java
ResponseEntity<byte[]> responseEntity = restTemplateHelper.request(
        请求路径, 请求方法, 请求头, 请求参数, 
        HTTP消息实体的传输长度, 数据类型, parseMultipartRequest(request)
);
```

<br>

## 文件上传
从请求头获取文件数据
```java
private MultiValueMap<String, Object> parseMultipartRequest(HttpServletRequest request) {
    MultiValueMap<String, Object> multiValueMap = new LinkedMultiValueMap<>();
        if (request instanceof MultipartRequest) {
            MultipartRequest multipartRequest = (MultipartRequest) request;
            for (Map.Entry<String, List<MultipartFile>> entry : multipartRequest.getMultiFileMap().entrySet()) {
                for (MultipartFile file : entry.getValue()) {
                    multiValueMap.add(entry.getKey(), file.getResource());
                }
            }
        }
    return CollectionUtils.isEmpty(multiValueMap) ? null : multiValueMap;
}
```

<br>

## 文件下载获取数据
响应数据类型使用字节数组进行接收byte[]  
详情见:[https://stackoverflow.com/questions/70632754/download-file-of-content-type-octet-stream-using-resttemplate](https://stackoverflow.com/questions/70632754/download-file-of-content-type-octet-stream-using-resttemplate)  

<br>

## 自定义异常处理
处理HTTP状态码为400、500等错误码时，如何获取到其响应结果内容
```java
/**
 * 设置自定义异常处理器，RestTemplate默认对于4**或5**的状态码会认为异常
 */
@Bean
public RestTemplate restTemplate(RestTemplateBuilder builder) {
    // 自定义ResponseErrorHandler
    ResponseErrorHandler responseErrorHandler = new ResponseErrorHandler() {
        @Override
        public boolean hasError(@NonNull ClientHttpResponse clientHttpResponse) {
            // 返回false，没有错误，不抛异常
            return false;
        }

        @Override
        public void handleError(@NonNull ClientHttpResponse clientHttpResponse) {
            // hasError方法返回false，即没有异常，所以无需处理
        }
    };

    return builder.errorHandler(responseErrorHandler).build();
}
```
