---
title: 获取区号
tags:
  - 业务场景
---
## 爬取
- 用qq注册页面获取html元素
- 再进行正则匹配去除每种语言的区号">(.+?)<\/  

参考：  
[https://stackoverflow.com/questions/56268174/regex-for-matching-html-tags-with-specific-attributes](https://stackoverflow.com/questions/56268174/regex-for-matching-html-tags-with-specific-attributes)    
[https://baike.baidu.com/item/%E5%9B%BD%E9%99%85%E7%94%B5%E8%AF%9D%E5%8C%BA%E5%8F%B7/445182?fr=aladdin](https://baike.baidu.com/item/%E5%9B%BD%E9%99%85%E7%94%B5%E8%AF%9D%E5%8C%BA%E5%8F%B7/445182?fr=aladdin)  
[http://xn--dkr0qp73f46s.cybo.com/%E5%AE%89%E6%8F%90%E7%93%9C%E5%92%8C%E5%B7%B4%E5%B8%83%E8%BE%BE/](http://xn--dkr0qp73f46s.cybo.com/%E5%AE%89%E6%8F%90%E7%93%9C%E5%92%8C%E5%B7%B4%E5%B8%83%E8%BE%BE/)  
[https://blog.csdn.net/shjhuang/article/details/8174021?utm_source=blogxgwz5](https://blog.csdn.net/shjhuang/article/details/8174021?utm_source=blogxgwz5)
[http://blog.sina.com.cn/s/blog_41b827d401018ty1.html](http://blog.sina.com.cn/s/blog_41b827d401018ty1.html)  


## 第三方依赖
```xml
    <dependency>
      <groupId>com.googlecode.libphonenumber</groupId>
      <artifactId>libphonenumber</artifactId>
      <version>8.12.1</version>
    </dependency>
```
```java
public class AreaCodeConstants {

  private AreaCodeConstants() {
    throw new IllegalStateException("Utility class");
  }

  /**
   * 区域一
   */
  protected static final Map<String, String> regionOne = new ImmutableMap.Builder<String, String>()
      .put("PR", "1787").put("AG", "1268").put("AI", "1264").put("AS", "1684").put("BB", "1246").put("BM", "1441")
      .put("BS", "1242").put("CA", "1").put("SX", "1721").put("TC", "1649").put("TT", "1868").put("DM", "1767")
      .put("DO", "1809").put("US", "1").put("VC", "1784").put("VG", "1284").put("VI", "1340").put("GD", "1473")
      .put("GU", "1671").put("JM", "1876").put("KN", "1869").put("KY", "1345").put("LC", "1758").put("MP", "1670")
      .put("MS", "1664").build();

  public static final Map<String, String> getRegionOne() {
    return regionOne;
  }

}
```
```java
private static final String ZH = "zh";

public List<AreaCode> list(String condition) {
  // 获取所有地区名称代码
  Set<String> set = PhoneNumberUtil.getInstance().getSupportedRegions();
  // 根据地区代码获取国际区号
  List<AreaCode> list = set.stream().distinct()
      .map(region -> {
        // 获取地区代码
        String countryCode = String.valueOf(PhoneNumberUtil.getInstance().getCountryCodeForRegion(region.toUpperCase()));
        // 获取地区名称
        String regionName = new Locale(ZH, region).getDisplayCountry();
        // 区域1的地区需要额外处理
        if (countryCode.equals("1")) {
          countryCode = AreaCodeConstants.getRegionOne().get(region);
        }
        // 加上前缀+
        return AreaCode.builder().regionName(regionName).countryCode("+" + countryCode).build();
      }).collect(Collectors.toList());
  // 过滤查询
  if (condition != null) {
    return list.stream().filter(o -> o.getRegionName().contains(condition)).collect(Collectors.toList());
  }
  return list;
}
```