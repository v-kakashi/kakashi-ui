<template>
  <button
    class="vk-button"
    :class="['vk-button-' + type, 'vk-button-' + size, {
        'vk-button-disabled': disabled,
        'vk-button-plain': plain
      }]"
    @touchstart="handleClick">
    <span class="vk-button-icon">
      <slot name="icon">
        <vk-icon class="mintui" v-if="icon">{{icon}}</vk-icon>
      </slot>
    </span>
    <label class="vk-button-text"><slot></slot></label>
  </button>
</template>

<script>
import vkIcon from './icon.vue'
// TODO: 填充BUTTON
export default {
  props: {
    icon: String,
    disabled: {
      type: Boolean,
      default: false
    },
    plain: Boolean,
    type: {
      type: String,
      default: 'default',
      validator (value) {
        return [
          'default',
          'danger',
          'primary'
        ].indexOf(value) > -1
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator (value) {
        return [
          'small',
          'normal',
          'large'
        ].indexOf(value) > -1
      }
    }
  },
  methods: {
    handleClick ($event) {
      if (this.disabled === false) {
        this.$dispatch('vk-button-touch')
      }
    }
  },
  components: {
    vkIcon
  }
}
</script>
