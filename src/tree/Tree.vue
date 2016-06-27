<template>
  <ul class="vk-tree">
    <slot></slot>
    <component :is="data.type ? data.type : 'vkTreeNodeIcon'" v-for="data in dataSoures" :img-src="data.imgSrc"  :selected="data.selected" :title="data.title" :data-soures="data.children"></component>
  </ul>
</template>

<script>
import vkTreeNodeIcon from './TreeNodeIcon'
import vkTreeNode from './TreeNode'
export default {
  role: 'NodeRoot',
  props: {
    dataSoures: Array,
    checkedKeys: Array
  },
  ready () {
    console.log(this.$children)
    console.log(this.checkedKeys)
  },
  components: {
    vkTreeNode,
    vkTreeNodeIcon
  }
}
</script>

<style>
.vk-tree{
  margin: 0;
  padding: 0;
}
</style>
