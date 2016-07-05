<template>
  <span
    class="vk-tree-checkbox"
    :class="selectCls"
    :style="{'margin-right': marginRight}"
  >
    <span class="vk-tree-checkbox-inner"></span>
  </span>
</template>

<script>
const CLS_NAMES = ['', 'vk-tree-checkbox-indeterminate', 'vk-tree-checkbox-checked']
export default {
  props: {
    state: {
      type: Number,
      default: 0
    },
    deep: {
      type: Number,
      default: 0
    },
    disable: Boolean
  },
  computed: {
    selectCls () {
      return CLS_NAMES[this.state]
    },
    marginRight () {
      return (this.deep - 1) * 22 + 'px'
    }
  }
}

</script>
