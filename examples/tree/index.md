---
category: 组件
title: Tree 树形控件
---
---

## 何时使用

文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用`树控件`可以完整展现其中的层级关系，并具有展开收起选择等交互功能。

## 代码演示

```html
<div id="app">
  <vk-tree>
    <vk-tree-node title="工程院开发管理部门">
      <vk-tree-node title="福建网龙计算机网络">
        <vk-tree-node title="美术中心一部"></vk-tree-node>
        <vk-tree-node title="美术中心二部"></vk-tree-node>
        <vk-tree-node title="美术中心三部"></vk-tree-node>
      </vk-tree-node>
      <vk-tree-node title="福建一零一教育科技有限公司">
        <vk-tree-node title="开发一部"></vk-tree-node>
        <vk-tree-node title="开发二部"></vk-tree-node>
        <vk-tree-node title="开发三部"></vk-tree-node>
      </vk-tree-node>
      <vk-tree-node title="福州软件职业技术学院"></vk-tree-node>
    </vk-tree-node>
    <vk-tree-node title="香港分公司"></vk-tree-node>
    <vk-tree-node title="北师大国家级教育技术科研平台"></vk-tree-node>
    <vk-tree-node title="福州天问贸易有限公司"></vk-tree-node>
    <vk-tree-node title="国家数字化学习工程技术研究中心"></vk-tree-node>
  </vk-tree>
</div>
```

```js
import vkTreeNode from 'kakashi-ui/src/tree/TreeNode'
import vkTree from 'kakashi-ui/src/tree/Tree'
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

### 属性 (Tree)

| 参数      | 说明                                     | 类型       | 默认值 |
|-----------|------------------------------------------|------------|-------|
| selectKeys | 选中节点，取每个节点的 key 值 | Array  | null    |
| extra | 扩展字段 | Object | null |
| dataSoures | 数据源 | Array | [] |
| disableCheckbox | 禁用 CheckBox (后期把默值改成 `true` ) | Boolean | false |
| isSync | 是否为同步数据 | Boolean | true |
| onSelect | 选中节点事件，入参为 选中的节点 | Function | - |
| onExpand | 展开节点事件，入参为 展开中的节点 | Function | - |

---

### 属性 (TreeNode)

| 参数      | 说明                                     | 类型       | 默认值 |
|-----------|------------------------------------------|------------|-------|
| title     | 节点标题    | String  | ''  |
| subTitle  | 节点副标题   | String | ''   |
| disabled  | 禁用该节点 | Boolean | false |
| disableCheckbox  | 禁用该节点 CheckBox | Boolean | false |
| isLeaf    | 是否为叶子节点，如果不是叶子节点，就会显示可以展开按钮 | Boolean | true |
| syncState | 该节点的同步状态 <br /> `SYNC_ING` <br /> `NOT_SYNC` <br /> `COMPLETE_SYNC` | String | `COMPLETE_SYNC` |
| key       | 设置该节点的唯一 key 值，Tree 的 selectKeys 属性控制该节点是没否选中  | String, Number | '' |
| dataSoures | 设置孩子节点的数据 | Array | [] |

### 事件 (TreeNode)

| 参数      | 说明                                     | 入参 |
|----------|-----------------------------------------|------|
| select | 选中节点事件 | 选中的节点数据 |
| expand | 展开节点事件 | 选中的节点数据 |

---

### 属性 (TreeNodeIcon)

| 参数      | 说明                                     | 类型       | 默认值 |
|-----------|------------------------------------------|------------|-------|
| title     | 节点标题    | String  | ''  |
| subTitle  | 节点副标题  | String  | ''  |
| width  | 图片宽度，单位为像素  | Number  | 40  |
| height  | 图片高度，单位为像素  | Number  | 40  |
| src       | 图片路径  | String  | ''  |
| key       | 设置该节点的唯一 key 值，Tree 的 selectKeys 属性控制该节点是没否选中  | String, Number | '' |
| disabled  | 禁用该节点 | Boolean | false |
| disableCheckbox  | 禁用该节点 CheckBox | Boolean | false |

### 事件 (TreeNodeIcon)

| 事件名      | 说明                                     | 入参 |
|----------|-----------------------------------------|------|
| select | 选中节点事件 | 选中的节点数据 |
| expand | 展开节点事件 | 选中的节点数据 |

---

### 属性 (NodeCheck)

| 参数      | 说明                                     | 类型       | 默认值 |
|-----------|------------------------------------------|------------|-------|
| state | 选择框状态；<br />0: 未选中;<br />1: 半选中;<br />2: 选中; | Number  | 0    |
| disable | 是否禁用选节点 | Boolean | false |
