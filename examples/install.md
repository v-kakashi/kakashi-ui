---
category: 组件
title: 安装
---

## 代码演示


```html
<div id="app">
  <vk-tree :data-soures="data" :is-async="true"  :on-expand="expand">
  </vk-tree>
</div>
```

```js
import vkTreeNode from '../src/tree/TreeNode'
import vkTree from '../src/tree/Tree'
import vkTreeNodeIcon from '../src/tree/TreeNodeIcon'
import Vue from 'vue'

import 'kakashi-theme/src/components/tree.less'
window.onerror = function (e){
  alert(e)
}
new Vue({
  el: "#app",
  data () {
    return {
      data : [
        { title: 'A' }
      ]
    }
  },
  methods: {
    expand (node) {
      if(node.isSync == false) {
        setTimeout(function () {
          for(var i =0 ; i < 100 ; ++i) {
            node.dataSoures.push({ title: `A${i}`, children: []})
          }        
        }, 300)
      }
    }
  },
  components: {
    vkTree,
    vkTreeNode,
    vkTreeNodeIcon
  }
})
```
