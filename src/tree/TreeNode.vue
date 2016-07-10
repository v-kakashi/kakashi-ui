<template>
  <li class="vk-tree-node-warp">
    <div class="vk-tree-node" @click="handleExpand">
      <vk-node-check :state="state" :deep="deep" @click.stop="handleSelect"></vk-node-check>
      <vk-node-switcher v-if="!isLeaf" :expand="expand"></vk-node-switcher>
      <span class="vk-tree-title" >{{title}}</span>
    </div>
    <ul v-show="expand" class="vk-tree-child vk-tree-child-open">
      <slot></slot>
      <component :is="data.type ? data.type : 'vkTreeNode'" v-for="data in dataSoures" :extra="data.extra" :selected="data.selected" :title="data.title" :data-soures="data.children"></component>
    </ul>
  </li>
</template>

<script>
import vkNodeCheck from './nodeCheck'
import vkNodeSwitcher from './nodeSwitcher'
import vkTreeNodeIcon from './treeNodeIcon'

export default {
  name: 'vkTreeNode',
  role: 'NodeParent',
  props: {
    extra: Object,
    dataSoures: Array,
    key: String,
    title: String,
    state: Number,
    disabled: Boolean,
    disableCheckbox: Boolean,
    isLeaf: {
      type: Boolean,
      default: true
    }
  },
  ready () {
    this.deep = this.getDeep()
    console.log(this.$children)
    this.$children.forEach(component => {
      let existNodeTree = ['NodeParent', 'NodeChild'].indexOf(component.$options.role) >= 0
      if (existNodeTree) {
        this.isLeaf = false
        component.$on('select', this.handleSelectedByChild)
      }
    })

    this.$nextTick(() => {
      // 注册子组件
      if (this.$parent.$options.role === 'NodeParent') {
        this.$parent.children.push(this)
      }
    })
  },
  data () {
    return {
      expand: false,
      children: [],
      deep: 0
    }
  },
  methods: {
    handleExpand () {
      console.log(this.title + '-handleExpand')
      this.expand = !this.expand
      if (this.isLeaf) {
        this.handleSelect()
      }
    },
    handleSelect (event, state) {
      console.log(this.title + '-handleSelect')
      if (state === undefined) {
        state = this.state >= 1 ? 0 : 2
      }
      this.setSelect(state)
      this.$emit('select')
    },
    setSelect (state) {
      this.state = state
      // 通知子组件选中
      this.children.forEach(treeNode => {
        treeNode.setSelect(state)
      })
    },
    handleSelectedByChild () {
      var isSelectAll = this.children.every(treeNode => treeNode.state === 2)
      if (isSelectAll) {
        this.state = 2
      } else {
        this.state = this.children.some(treeNode => treeNode.state >= 1) ? 1 : 0
      }
      this.$emit('select')
    },
    /**
     * 获取组件被嵌套的深度
     * @param  {Vue} vm vm
     * @return {Number} 深度
     */
    getDeep () {
      var vm = this
      var deep = 0
      while ((vm = vm.$parent)) {
        ++deep
        if (vm.$options.role === 'NodeRoot') {
          return deep
        }
      }
      return deep
    }
  },
  components: {
    vkNodeCheck,
    vkNodeSwitcher,
    vkTreeNodeIcon
  }
}

</script>
