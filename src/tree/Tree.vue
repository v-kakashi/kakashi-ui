<template>
  <ul class="vk-tree">
    <slot></slot>
    <vk-tree-node v-for="data in dataSoures" :selected="data.selected"  :title="data.title" :data-soures="data.children" ></vk-tree-node>
  </ul>
</template>

<script>
import vkTreeNode from './TreeNode'
export default {
  name: 'vk-tree',
  props: {
    dataSoures: Array,
    checkedKeys: Array
  },
  ready () {
    console.log(this.$children)
    console.log(this.checkedKeys)
  },
  components: {
    vkTreeNode
  }
}
</script>

<style>
.vk-tree{
  margin: 0;
  padding: 0;
}
</style>
