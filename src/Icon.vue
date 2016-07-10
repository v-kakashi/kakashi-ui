<template>
  <div :class="['vk-icon']" :style="{color:color}"><slot>{{value}}</slot></div>
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
  }
}
</script>
