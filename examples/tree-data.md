## code


```html
<div id="app">
  <vk-tree :data-soures="treeData" :checked-keys="[1,2,3]">
    <vk-tree-node title="美术中心一部"></vk-tree-node>
  </vk-tree>
</div>
```

```js
import vkTreeNode from '../src/tree/TreeNode.vue'
import vkTree from '../src/tree/Tree.vue'
import Vue from 'vue'
new Vue({
  el: "#app",
  data () {
    return {
      treeData: [
        {title: 'A', children: [{title: 'a1', children: []}, {title: 'a2', children: []}]},
        {title: 'B', selected: true, children: []},
        {title: 'C', children: []}
      ]
    }
  },
  components: {
    vkTreeNode,
    vkTree
  }
})
```


## desc
一个组织机构树
