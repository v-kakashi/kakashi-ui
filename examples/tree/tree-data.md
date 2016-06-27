## code


```html
<div id="app">
  <vk-tree :data-soures="treeData" :checked-keys="[1,2,3]">
    <vk-tree-node title="美术中心一部"></vk-tree-node>
  </vk-tree>
</div>
```

```js
import vkTreeNode from '../../src/tree/TreeNode'
import vkTree from '../../src/tree/Tree'
import vkTreeNodeIcon from '../../src/tree/TreeNodeIcon'
import Vue from 'vue'
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
  components: {
    vkTreeNode,
    vkTree,
    vkTreeNodeIcon
  }
})
```


## desc
一个组织机构树
