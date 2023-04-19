---
title: 树形结构业务模型实践
tags:
  - 业务场景
---
## 数据库表结构
TREE表：
```
ID    P_CODE      CODE          NAME
1      null       001           1级1
2      null       002           1级2
3      null       003           1级3
4      001        001001        2级1
5      002        002001        2级2
6      002        002002        2级3
7      003        003001        2级4
8      003001     003001001     3级1
9      003001001  003001001001  4级1
```
## Mybatis
treeMapper.xml：
```xml
<mapper ...>
  <select id="list" ...>
    SELECT * FROM TREE
  </select>
</mapper>
```
## Java
Node:
```java
public class Node {
  private Long id;

  private String pCode;

  private String code;

  private String name;

  private List<Node> children;
}
```
TreeMapper：
```java
public interface TreeMapper {
  List<Node> list();
}
```
TreeService:
```java
@Service
public class TreeService {

  @Autowired
  private TreeMapper treeMapper;

  public List<Node> getTree() {
    List<Node> list = treeMapper.list();
    return getFatherNode(list);
  }

  private List<Node> getFatherNode(List<Node> treesList) {
    List<Node> newTrees = new ArrayList<>();
    for (Node node : treesList) {
      if (StringUtils.isEmpty(node.getPCode())) {//如果pCode为空，则该节点为父节点
        //递归获取父节点下的子节点
        node.setChildren(getChildrenNode(node.getCode(), treesList));
        newTrees.add(node);
      }
    }
    return newTrees;
  }

  private List<Node> getChildrenNode(String pCode, List<Node> treesList) {
    List<Node> newTrees = new ArrayList<>();
    for (Node node : treesList) {
      if (StringUtils.isEmpty(node.getPCode())) continue;
      if (node.getPCode().equals(pCode)) {
        //递归获取子节点下的子节点，即设置树控件中的children
        node.setChildren(getChildrenNode(node.getCode(), treesList));
        newTrees.add(node);
      }
    }
    return newTrees;
  }
}
```
参考：  
[https://www.cnblogs.com/WHqingwei/p/5852657.html](https://www.cnblogs.com/WHqingwei/p/5852657.html)  
[https://www.cnblogs.com/lwenbo/archive/2012/12/19/2824959.html](https://www.cnblogs.com/lwenbo/archive/2012/12/19/2824959.html)  
