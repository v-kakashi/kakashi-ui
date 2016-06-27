<template>
  <li class="vk-tree-node-warp">
    <div class="vk-tree-node" @click.stop="handleSelect">
      <vk-node-check :state="state" :deep="deep"></vk-node-check>
      <slot>
        <vk-image class="vk-tree-image" :src="imgSrc" :width="imgWidth" :height="imgHeight"></vk-image>
        <span class="vk-tree-title" >{{title}}</span>
      </slot>
    </div>
  </li>
</template>

<script>
import vkImage from '../Image'
import vkNodeCheck from './NodeCheck'
export default {
  name: 'vkTreeNodeIcon',
  role: 'NodeChild',
  props: {
    imgSrc: String,
    imgWidth: {
      type: String,
      default: '40px'
    },
    imgHeight: {
      type: String,
      default: '40px'
    },
    title: String,
    state: {
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
      }
    })
  },
  data () {
    return {
      deep: 0
    }
  },
  methods: {
    handleSelect () {
      console.log(this.title + '-handleSelect')
      this.state = this.state === 0 ? 2 : 0
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

<style>
.vk-tree-image{
  margin-right: 10px;
}
.vk-tree-image .vk-image-img{
  border-radius: 100%;
}
</style>
