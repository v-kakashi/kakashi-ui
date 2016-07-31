---
title: Tree 树形控件
---

## 代码演示


```html
<div id="app">
  <vk-tree>
    <vk-tree-node title="美术中心一部">
      <component :is="'vkTreeNodeIcon'" title="工程院开发管理部门" img-src="https://avatars2.githubusercontent.com/u/20056754?v=3&s=200"></component>
    </vk-tree-node>
  </vk-tree>
</div>
```

```js
import vkTreeNode from '../../src/tree/TreeNode'
import vkTree from '../../src/tree/Tree'
import vkTreeNodeIcon from '../../src/tree/TreeNodeIcon'
import Vue from 'vue'
import VueTouch from 'vue-touch'

import 'kakashi-theme/src/components/tree.less'

Vue.use(VueTouch)
new Vue({
  el: "#app",
  components: {
    vkTree,
    vkTreeNode,
    vkTreeNodeIcon
  }
})
```
