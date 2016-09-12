<template>
  <div class="vk-cell">
    <slot>
      <span class="vk-cell-mask" v-if="isLink"></span>
      <div class="vk-cell-title" :class="{'vk-cell-title-icon': icon ,'vk-cell-title-after': after}">
        <slot name="icon">
          <vk-icon v-if="icon" class="vk-cell-icon" :value="icon"></vk-icon>
        </slot>
        <slot name="title">
          <div class="vk-cell-text" v-if="title">{{title}}</div>
        </slot>
        <slot name="value">
          <div class="vk-cell-value">
            <span v-text="value"></span>
          </div>
        </slot>
        <slot name="after">
          <vk-icon v-if="after" class="vk-cell-after" :value="after"></vk-icon>
        </slot>
      </div>
      <div class="vk-cell-body" v-if="label || ext">
        <span class="vk-cell-label" v-text="label"></span>
        <div class="vk-cell-value">
          <span v-text="ext"></span>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
import vkIcon from './icon'

export default {
  props: {
    icon: String,
    title: String,
    label: String,
    isLink: {
      type: Boolean,
      default: true
    },
    value: String,
    ext: String,
    after: String
  },
  components: {
    vkIcon
  }
}
</script>
