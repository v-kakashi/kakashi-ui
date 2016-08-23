<template>
  <span class="vk-tree-switcher" :class="{'vk-tree-open':expand, 'vk-tree-close': !expand}">
    <vk-icon v-if="isLoading === false" value='play1'></vk-icon>
    <spinner v-if="isLoading" class="vk-indicator-spin" :type="3" :size="18"></spinner>
  </span>
</template>

<script>
import vkIcon from '../icon'
import spinner from 'mint-spinner'

import 'kakashi-theme/src/components/spinner.less'
export default {
  props: {
    expand: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  components: {
    vkIcon,
    spinner
  }
}
</script>
