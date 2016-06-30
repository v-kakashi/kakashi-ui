<template>
  <ul class="vk-tree">
    <slot></slot>
    <component
      v-for="data in dataSoures"
      :is="data.type ? data.type : 'vkTreeNode'"
      :extra="data.extra"
      :selected="data.selected"
      :title="data.title"
      :data-soures="data.children">
    </component>
  </ul>
</template>

<script>
import vkTreeNodeIcon from './TreeNodeIcon'
import vkTreeNode from './TreeNode'
export default {
  role: 'NodeRoot',
  props: {
    extra: Object,
    dataSoures: Array,
    selectKeys: Array
  },
  ready () {
    this.$nextTick(() => {
      setSelect(this, this.selectKeys)
    })
  },
  components: {
    vkTreeNode,
    vkTreeNodeIcon
  }
}

function setSelect (node, selectKeys) {
  node.$children.forEach(component => {
    let existNodeTree = ['NodeParent', 'NodeChild'].indexOf(component.$options.role) >= 0
    if (existNodeTree && selectKeys && component.key) {
      if (selectKeys.indexOf(component.key) >= 0) {
        component.handleSelect(null, 2)
      }
    }
    setSelect(component, selectKeys)
  })
}
</script>

<style>
.vk-tree{
  background: #fff;
  margin: 0;
  padding: 0;
}
</style>
