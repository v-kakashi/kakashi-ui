<template>
  <div class="vk-cell">
    <slot>
      <span class="vk-cell-mask" v-if="isLink"></span>
      <div class="vk-cell-title">
        <slot name="icon">
          <vk-icon v-if="icon" class="vk-cell-icon">{{icon}}</vk-icon>
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
          <vk-icon v-if="after" class="vk-cell-after">{{after}}</vk-icon>
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
import vkIcon from './Icon'

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


<style lang="less">
  @import "./assets/style/var.less";
  @import "./assets/style/border.less";

  @component-namespace: vk-cell;

  .@{component-namespace}{
     .border-top(@color-grey);
     .border-bottom(@color-grey);
     text-decoration: none;
     background-color: @color-white;
     box-sizing: border-box;
     color: inherit;
     display: flex;
     flex-direction: column;
     font-size: 16px;
     line-height: 1;
     overflow: hidden;
     padding: 16px 10px;
     position: relative;
     & + .@{component-namespace}::after {
       content: none;
     }
     &::before {
       left: 10px;
     }
     &:last-child::before {
       left: 0;
     }
     &-mask {
       &::after {
         background-color: #000;
         content: " ";
         opacity: 0;
         cursor: pointer;
         position: absolute;
         top: 0;
         right: 0;
         bottom: 0;
         left: 0;
       }
       &:active::after {
         opacity: .1;
       }
     }
     &-body {
       display: flex;
       font-size: 14px;
       margin-top: 14px;
       align-items: flex-end;
     }
     &-label {
       color: @cell-value-label;
       display: block;
       flex: 1;
     }
     img {
       vertical-align: middle;
     }
     &-title {
       flex: 1;
       vertical-align: middle;
       color: @cell-value-title;
       display: flex;
       align-items: center;
     }
     &-value {
       color: @cell-value-color;
       display: flex;
       align-items: center;
     }
     &-text {
       flex: 1;
       line-height: 18px;
     }
     &-icon {
       width: 22px;
       color: @border-color
     }
  }
</style>
