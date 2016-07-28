<template>
  <li class="vk-tree-node-warp">
    <div class="vk-tree-node" v-touch:tap="handleExpand">
      <vk-node-check :state="state" v-show='disableCheckbox' v-touch:tap="handleSelect"></vk-node-check>
      <div :style="{'width': (deep - 1) * 22 + 'px'}"></div>
      <vk-node-switcher v-if="isSync === false || !!children.length" :expand="expand"></vk-node-switcher>
      <div class="vk-tree-content">
        <span class="vk-tree-title" >{{title}}</span>
        <span class="vk-tree-subtitle" >{{subTitle}}</span>
      </div>
    </div>
    <ul v-show="expand" class="vk-tree-child vk-tree-child-open">
      <slot></slot>
      <component
        :is="data.type ? data.type : 'vkTreeNode'"
        v-for="data in dataSoures"
        track-by="$index"
        @select="onSelect"
        @expand="onExpand"
        :extra="data"
        :selected="data.selected"
        :title="data.title"
        :key="data.id"
        :disable-checkbox="disableCheckbox"
        :sub-title="data.subTitle"
        :is-leaf="childrenIsLeaf"
        :is-sync="!!data.isSync || childrenIsSync"
        :data-soures="data.children">
      </component>
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
    dataSoures: {
      type: Array,
      default: () => []
    },
    subTitle: String,
    key: [String, Number],
    title: String,
    disabled: Boolean,
    disableCheckbox: Boolean,
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
  ready () {
    this.childrenIsLeaf = this.isLeaf
    this.childrenIsSync = this.isSync
    this.deep = this.getDeep()
    this.$on('childSelect', this.handleSelectedByChild)
    this.$nextTick(() => {
      // 注册子组件
      if (this.$parent.$options && this.$parent.$options.role === 'NodeParent') {
        this.$parent.children.push(this)
        this.$parent.isSync = true
        this.state = this.$parent.state
      }
    })
  },
  data () {
    return {
      childrenIsLeaf: true,
      expand: false,
      children: [], // 收集孩子组件
      deep: 0,
      state: 0,
      childrenIsSync: true
    }
  },
  computed: {},
  watch: {
    children (children) {
      this.$dispatch('children-mount', children)
    }
  },
  events: {
    'childrenLoadSuccess' (key, data) {
      if (this.key === key) {
        this.isSync = true
        this.isLeaf = data.length === 0
        // this.handleExpand()
      } else {
        return true
      }
    }
  },
  methods: {
    handleExpand () {
      this.expand = !this.expand
      this.$dispatch('expand', this)
      // 通知子组件选中
      this.children.forEach(treeNode => {
        // 跟随父亲的状态
        treeNode.setSelect(this.state)
      })
      // 如果数据已同步，且没有子节点就触发选中事件
      if (this.children.length === 0 && this.isSync) {
        this.handleSelect()
      }
    },
    handleSelect ($event, state) {
      $event && $event.srcEvent.stopPropagation()
      if (state === undefined) {
        state = this.state >= 1 ? 0 : 2
      }
      this.setSelect(state)
      this.$dispatch('childSelect')
      this.$dispatch('select', this)
    },
    setSelect (state) {
      this.state = state
      // 通知子组件选中
      this.children.forEach(treeNode => {
        treeNode.setSelect(state)
      })
    },
    handleSelectedByChild () {
      if (this.children && this.children.length) {
        var isSelectAll = this.children.every(treeNode => treeNode.state === 2)
        if (isSelectAll) {
          this.state = 2
        } else {
          this.state = this.children.some(treeNode => treeNode.state >= 1) ? 1 : 0
        }
      }
      return true
    },
    // 获取父亲节点
    getParentsNode () {
      var nodeParent, node
      nodeParent = this.$parent
      while (nodeParent && nodeParent.$options && nodeParent.$options.name !== 'vkTree') {
        if (nodeParent && nodeParent.$options && nodeParent.$options.name === 'vkTreeNode') {
          node = nodeParent
        }
        nodeParent = nodeParent.$parent
      }
      return node
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
