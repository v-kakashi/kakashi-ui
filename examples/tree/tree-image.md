---
category: 组件
title: Tree 树形控件(图片)
---

## 代码演示


```html
<div id="app">
  <vk-tree>
    <vk-tree-node title="美术中心一部">
      <vk-tree-node-icon title="工程院开发管理部门" src="https://avatars2.githubusercontent.com/u/20056754?v=3&s=200"></vk-tree-node-icon>
    </vk-tree-node>
  </vk-tree>
</div>
```

```js
import vkTreeNode from '../../src/tree/TreeNode'
import vkTree from '../../src/tree/Tree'
import vkTreeNodeIcon from '../../src/tree/TreeNodeIcon'
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