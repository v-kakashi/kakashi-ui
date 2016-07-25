<template>
  <div :class="['vk-icon', iconClass]" :style="{color:color}"></div>
</template>

<script>
export default {
  props: {
    value: {
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconClass () {
      return 'icon-' + this.value
    }
  }
}
</script>
