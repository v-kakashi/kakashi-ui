<template>
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

    <vk-tree :data-soures="treeData" :checked-keys="[1,2,3]">
    </vk-tree>
  </div>
</template>

<script>
import vkTreeNode from 'src/tree/TreeNode'
import vkTree from 'src/tree/Tree'
export default {
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
}
</script>

<style>
  body{
    margin: 0px;
  }
</style>
