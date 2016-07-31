---
title: Tree 树形控件
---

## 代码演示


```html
<div id="app">
  <vk-tree :data-soures="treeData" :checked-keys="[1,2,3]" :on-select="select">
    <vk-tree-node title="美术中心一部"></vk-tree-node>
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
  data () {
    return {
      treeData: [
        {title: 'A', children: [
          {title: 'a1', children: [], extra:{ src: 'https://avatars2.githubusercontent.com/u/20056754?v=3&s=200'}, type: 'vkTreeNodeIcon'},
          {title: 'a2', children: []}]
        },
        {title: 'B', type: 'vkTreeNodeIcon', extra:{ src: 'https://avatars2.githubusercontent.com/u/20056754?v=3&s=200'}, selected: true, children: []},
        {title: 'C', children: []}
      ]
    }
  },
  methods: {
    select (selectData) {
      console.log(selectData)
    }
  },
  components: {
    vkTreeNode,
    vkTree,
    vkTreeNodeIcon
  }
})
```
