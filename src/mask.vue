<template>
  <div :class="['vk-mask', class]"
    tabindex="-1"
    transition="vk-fade"><slot></slot></div>
</template>

<script>
export default {
  props: {
    class: {
      type: String,
      default: ''
    }
  }
}
</script>
