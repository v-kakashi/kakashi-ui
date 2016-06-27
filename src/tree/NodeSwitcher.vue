<template>
  <span class="vk-tree-switcher" :class="{'vk-tree-open':expand, 'vk-tree-close': !expand}">
    <vk-icon>play_arrow</vk-icon>
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

<style lang="less">
@namespace: vk-tree;

.@{namespace}-switcher{
  margin: 0;
  border: 0 none;
  cursor: pointer;
  outline: none;
  height: 22px;
  width: 22px;
  .vk-icon{
    font-size: 16px;
    line-height: 22px;
    zoom: 1;
    display: inline-block;
    font-weight: 700;
    color: #9f9f9f;
    position: absolute;
    transition: transform .3s ease;
  }
  &.@{namespace}-close{
    .vk-icon{
      transform: rotate(0deg);
    }
  }

  &.@{namespace}-open{
    .vk-icon{
      transform: rotate(90deg)
    }
  }
}

</style>
