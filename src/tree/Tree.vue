<template>
  <ul class="vk-tree">
    <slot></slot>
    <component
      v-for="data in dataSoures"
      :is="data.type ? data.type : 'vkTreeNode'"
      :data="data"
      :selected="data.selected"
      :title="data.title"
      :key="data.id"
      :data-soures="data.children"
      :on-select="onSelect"
      :on-expand="onExpand"
      :disable-checkbox="disableCheckbox"
      :is-leaf="isLeaf"
      :sync-state="!!data.isSync ? 'COMPLETE_SYNC' : 'NOT_SYNC'"
      :sub-title="data.subTitle"
      @select="onSelect"
      @expand="onExpand"
      >
    </component>
  </ul>
</template>

<script>
import vkTreeNodeIcon from './treeNodeIcon'
import vkTreeNode from './treeNode'

export default {
  name: 'vkTree',
  role: 'NodeRoot',
  props: {
    dataSoures: Array,
    selectKeys: Array,
    disableCheckbox: {
      type: Boolean,
      default: true
    },
    isSync: {
      type: Boolean,
      default: true
    },
    onSelect: {
      type: Function,
      default: () => true
    },
    onExpand: {
      type: Function,
      default: () => true
    },
    isLeaf: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      state: 0
    }
  },
  methods: {
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
