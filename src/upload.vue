<template>
  <div :class="['vk-upload', cls]">
    <div class="vk-upload-item" v-for="item in items" track-by="$index">
      <vk-image
        :src="item"
        :width="width"
        :height="height"
        :keep-ratio="false"
      >
      </vk-image>
      <vk-icon v-touch:tap="handleRemove(item)" value="remove"></vk-icon>
    </div>
    <div class="vk-upload-button" v-touch:tap="handleAddItem" v-show="items.length < max"
      :style="{ 'width': width, 'height': height, 'line-height': height}">
      <vk-icon value="add_circle"></vk-icon>
    <div>
  </div>
</template>

<script>
import vkImage from './image.vue'
import vkIcon from './icon.vue'
export default {
  props: {
    cls: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: [],
      twoWay: true
    },
    width: {
      type: [String, Number],
      default: '82px'
    },
    height: {
      type: [String, Number],
      default: '82px'
    },
    max: {
      type: Number,
      default: 9
    }
  },
  ready () {
    this.items = this.items.slice(0, this.max)
  },
  methods: {
    handleRemove (item) {
      this.items.$remove(item)
      this.$emit('upload-remove-item', item)
    },
    handleAddItem () {
      this.$emit('upload-add-item')
    }
  },
  components: {
    vkImage,
    vkIcon
  }
}
</script>
