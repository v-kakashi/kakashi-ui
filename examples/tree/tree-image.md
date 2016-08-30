---
category: 组件
title: Tree 树形控件(图片)
---
---

## 代码演示


```html
<div id="app">
  <vk-tree>
    <vk-tree-node title="美术中心一部">
      <vk-tree-node-icon title="刘一" src="https://avatars2.githubusercontent.com/u/20056754?v=3&s=200"></vk-tree-node-icon>
      <vk-tree-node-icon title="陈二" src="https://avatars2.githubusercontent.com/u/20056754?v=3&s=200"></vk-tree-node-icon>
      <vk-tree-node-icon title="张三" src="https://avatars2.githubusercontent.com/u/20056754?v=3&s=200"></vk-tree-node-icon>
      <vk-tree-node-icon title="李四" src="https://avatars2.githubusercontent.com/u/20056754?v=3&s=200"></vk-tree-node-icon>
      <vk-tree-node-icon title="王五" src="https://avatars2.githubusercontent.com/u/20056754?v=3&s=200"></vk-tree-node-icon>
    </vk-tree-node>
    <vk-tree-node title="美术中心二部">
      <vk-tree-node-icon title="赵六" src="https://avatars2.githubusercontent.com/u/20056754?v=3&s=200"></vk-tree-node-icon>
      <vk-tree-node-icon title="孙七" src="https://avatars2.githubusercontent.com/u/20056754?v=3&s=200"></vk-tree-node-icon>
      <vk-tree-node-icon title="周八" src="https://avatars2.githubusercontent.com/u/20056754?v=3&s=200"></vk-tree-node-icon>
      <vk-tree-node-icon title="吴九" src="https://avatars2.githubusercontent.com/u/20056754?v=3&s=200"></vk-tree-node-icon>
      <vk-tree-node-icon title="郑十" src="https://avatars2.githubusercontent.com/u/20056754?v=3&s=200"></vk-tree-node-icon>
    </vk-tree-node>
  </vk-tree>
</div>
```

```js
import vkTreeNode from 'kakashi-ui/src/tree/TreeNode'
import vkTree from 'kakashi-ui/src/tree/Tree'
import vkTreeNodeIcon from 'kakashi-ui/src/tree/TreeNodeIcon'
import Vue from 'vue'

import 'kakashi-theme/src/components/tree.less'

new Vue({
  el: "#app",
  components: {
    vkTree,
    vkTreeNode,
    vkTreeNodeIcon
  }
})
```
