<template>
  <span
    class="vk-tree-checkbox"
    :class="selectCls"
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
    }
  },
  computed: {
    selectCls () {
      return CLS_NAMES[this.state]
    }
  }
}

</script>
