<template>
  <li class="vk-tree-node-warp">
    <div class="vk-tree-node" @click="handleSelect" :style="{lineHeight: height || '40px'}">
      <vk-node-check :state="state" v-show='disableCheckbox'></vk-node-check>
      <div :style="{'width': (deep - 1) * 22 + 'px'}"></div>
      <slot>
        <vk-image class="vk-tree-image"  :keep-ratio="false" :src="src" :width="width || '40px'" :height="height || '40px'"></vk-image>
        <div class="vk-tree-content">
          <span class="vk-tree-title" >{{title}}</span>
          <span class="vk-tree-subtitle" >{{subTitle}}</span>
        </div>
      </slot>
    </div>
  </li>
</template>

<script>
import vkImage from '../image'
import vkNodeCheck from './nodeCheck'
import mixData from '../mix/data'

export default {
  mixins: [mixData],
  name: 'vkTreeNodeIcon',
  role: 'NodeChild',
  props: {
    data: Object,
    key: String,
    src: String,
    width: Number,
    height: Number,
    subTitle: String,
    title: String,
    state: { // 可以在 data 里定义
      type: Number,
      default: 0
    },
    disabled: Boolean,
    disableCheckbox: Boolean
  },
  ready () {
    this.deep = this.getDeep()
    this.$nextTick(() => {
      // 注册子组件
      if (this.$parent.$options.role === 'NodeParent') {
        this.$parent.children.push(this)
        this.$parent.isSync = true
        this.state = this.$parent.state
      }
    })
  },
  data () {
    return {
      deep: 0
    }
  },
  methods: {
    handleSelect ($event, state) {
      $event && $event.stopPropagation()
      if (state == null) {
        state = this.state === 0 ? 2 : 0
      }
      this.state = state
      this.$emit('select')
    },
    setSelect (state) {
      this.state = state
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
    vkImage,
    vkNodeCheck
  }
}

</script>
