<template>
  <span class="vk-tree-switcher" :class="{'vk-tree-open':expand, 'vk-tree-close': !expand}">
    <vk-icon>play1</vk-icon>
  </span>
</template>

<script>
import vkIcon from '../Icon'
export default {
  props: {
    expand: {
      type: Boolean,
      default: false
    }
  },
  components: {
    vkIcon
  }
}
</script>
