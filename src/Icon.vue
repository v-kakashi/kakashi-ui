<template>
  <div :class="['vk-icon', class]" :style="{color:color}"><slot>{{value}}</slot></div>
</template>

<script>
export default {
  props: {
    class: {
      type: String,
      default: ''
    },
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
