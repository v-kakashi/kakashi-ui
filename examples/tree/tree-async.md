---
category: 组件
title: Tree 树形控件(异步加载)
---

## 代码演示


```html
<div id="app">
  <vk-tree :data-soures="data"  :disable-checkbox="true"  :is-async="true"  :on-expand="expand">
  </vk-tree>
</div>
```

```js
import vkTree from '../../src/tree/Tree'
import Vue from 'vue'

import 'kakashi-theme/src/components/tree.less'

new Vue({
  el: "#app",
  data () {
    return {
      data : [
        { title: 'Ab' }
      ]
    }
  },
  methods: {
    expand (node) {
      if(node.isSync == false) {
        setTimeout(function () {
          for(var i =0 ; i < 10 ; ++i) {
            node.dataSoures.push({ title: `A${i}`, children: []})
          }        
        }, 1000)
      }
      console.log(nodenode)
    }
  },
  components: {
    vkTree
  }
})
```
