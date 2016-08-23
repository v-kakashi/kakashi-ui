---
category: 组件
title: Tree 树形控件(keys)
---

## 代码演示

```html
<div id="app">
  <vk-tree :select-keys="['a1','a3','b3']">
    <vk-tree-node title="工程院开发管理部门" key="a1">
      <vk-tree-node title="福建网龙计算机网络" key="a2">
        <vk-tree-node title="美术中心一部" key="a3"></vk-tree-node>
        <vk-tree-node title="美术中心二部" key="a4"></vk-tree-node>
        <vk-tree-node title="美术中心三部" key="a5"></vk-tree-node>
      </vk-tree-node>
      <vk-tree-node title="福建一零一教育科技有限公司" key="a6">
        <vk-tree-node title="开发一部" key="a7"></vk-tree-node>
        <vk-tree-node title="开发二部" key="a8"></vk-tree-node>
        <vk-tree-node title="开发三部" key="a9"></vk-tree-node>
      </vk-tree-node>
      <vk-tree-node title="福州软件职业技术学院"></vk-tree-node>
    </vk-tree-node>
    <vk-tree-node title="香港分公司"></vk-tree-node>
    <vk-tree-node title="北师大国家级教育技术科研平台" key="b1">
      <vk-tree-node title="北师附小" key="b2">
        <vk-tree-node title="北师附小学一年级" key="b3"></vk-tree-node>
      </vk-tree-node>
      <vk-tree-node title="北师附中" key="b4"></vk-tree-node>
    </vk-tree-node>
    <vk-tree-node title="福州天问贸易有限公司"></vk-tree-node>
    <vk-tree-node title="国家数字化学习工程技术研究中心"></vk-tree-node>
  </vk-tree>
</div>
```

```js
import vkTreeNode from '../../src/tree/TreeNode'
import vkTree from '../../src/tree/Tree'
import Vue from 'vue'

import 'kakashi-theme/src/components/tree.less'

new Vue({
  el: "#app",
  components: {
    vkTreeNode,
    vkTree
  }
})
```
