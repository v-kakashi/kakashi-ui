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
import vkIcon from './Icon'
/**
 * mt-header
 * @module components/button
 * @desc 按钮
 * @param {string} [type=default] - 显示类型，接受 default, primary, danger
 * @param {boolean} [disabled=false] - 禁用
 * @param {boolean} [plain=false] - 幽灵按钮
 * @param {string} [size=normal] - 尺寸，接受 normal, small, large
 * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .mintui-xxx）
 * @param {slot} - 显示文本
 * @param {slot} [icon] 显示图标
 *
 * @example
 * <mt-button size="large" icon="back" type="primary">按钮</mt-button>
 */
export default {
  props: {
    icon: String,
    disabled: Boolean,
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
      if (this.disabled) {
        $event.preventDefault()
        $event.stopPropagation()
      }
    }
  },
  components: {
    vkIcon
  }
}
</script>


<style lang="less">
  /* Button Component */
  @button-default-color: #656b79;
  @button-default-background-color: #f6f8fa;
  @button-default-plain-color: #5a5a5a;
  @button-default-box-shadow: 0 0 1px #b8bbbf;
  @button-primary-color: #fff;
  @button-primary-background-color: #26a2ff;
  @button-danger-color: #fff;
  @button-danger-background-color: #ef4f4f;

  @namespace: vk-button;

  button.@{namespace}{
    appearance: none;
    border-radius: 4px;
    border: 0;
    box-sizing: border-box;
    color: inherit;
    display: block;
    font-size: 18px;
    height: 41px;
    line-height: 18px;
    margin: 0 0.2rem 0.2rem 0;
    outline: 0;
    overflow: hidden;
    position: relative;
    text-align: center;

    // 做点击的遮罩
    &::after {
      background-color: #000;
      content: " ";
      opacity: 0;
      position: absolute;
      top:0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    &:not(.@{namespace}-disabled):active::after {
      opacity: .4;
    }


    .@{namespace}-icon {
      vertical-align: middle;
      display: inline-block;
    }


    &.@{namespace}-default {
      color: @button-default-color;
      background-color: @button-default-background-color;
      box-shadow: @button-default-box-shadow;

      &.@{namespace}-plain {
        border: 1px solid @button-default-plain-color;
        background-color: transparent;
        box-shadow: none;
        color: @button-default-plain-color;
      }
    }

    &.@{namespace}-primary {
      color: @button-primary-color;
      background-color: @button-primary-background-color;

      &.@{namespace}-plain {
        border: 1px solid @button-primary-background-color;
        background-color: transparent;
        color: @button-primary-background-color;
      }
    }

    &.@{namespace}-danger {
      color: @button-danger-color;
      background-color: @button-danger-background-color;

      &.@{namespace}-plain {
        border: 1px solid @button-danger-background-color;
        background-color: transparent;
        color: @button-danger-background-color;
      }
    }

    &.@{namespace}-large {
      display: inline-block;
      font-size: 26px;
      line-height: 26px;
      height: 50px;
      padding: 0 1rem;
    }

    &.@{namespace}-normal {
      display: inline-block;
      padding: 0 0.75rem;
    }

    &.@{namespace}-small {
      display: inline-block;
      font-size: 14px;
      padding: 0 0.75rem;
      line-height: 2rem;
      height: 33px;
    }

    &.@{namespace}-block {
      display: block;
      width: 100%;
    }

    &.@{namespace}-disabled {
      opacity: .6;
    }
  }
</style>
