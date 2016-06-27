<template>
  <span
    class="vk-tree-checkbox"
    :class="selectCls"
    :style="{'margin-right': marginRight}"
  >
    <span class="vk-tree-checkbox-inner"></span>
  </span>
</template>

<script>
const CLS_NAMES = ['', 'vk-tree-checkbox-indeterminate', 'vk-tree-checkbox-checked']
export default {
  props: {
    state: {
      type: Number,
      default: 0
    },
    selected: {
      type: Boolean,
      default: false
    },
    deep: {
      type: Number,
      default: 0
    },
    disableCheckbox: Boolean
  },
  computed: {
    selectCls () {
      return CLS_NAMES[this.state]
    },
    marginRight () {
      return (this.deep - 1) * 22 + 'px'
    }
  }
}

</script>

<style lang="less">
@namespace: vk-tree;

.@{namespace}-checkbox{
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  display: inline-block;
  line-height: 1;
  position: relative;
  vertical-align: middle;
  margin: 2px 0px 0 0;
  padding-right: 10px;
  &.@{namespace}-checkbox-indeterminate{
    .@{namespace}-checkbox-inner{
      border-color: #2db7f5;
      background-color: #2db7f5;
      &:after{
        content: ' ';
        transform: scale(1);
        position: absolute;
        left: 6px;
        top: 10px;
        width: 8px;
        height: 0px;
      }
    }
  }

  .@{namespace}-checkbox-inner{
    position: relative;
    display: inline-block;
    width: 22px;
    height: 22px;
    border-radius: 22px;
    border: 1px solid #d9d9d9;
    background-color: #fff;
    transition: border-color .1s cubic-bezier(.71,-.46,.29,1.46),background-color .1s cubic-bezier(.71,-.46,.29,1.46);

    &:after{
      transform: rotate(45deg) scale(0);
      position: absolute;
      left: 7px;
      top: 3px;
      display: table;
      width: 6px;
      height: 10px;
      border: 2px solid #fff;
      border-top: 0;
      border-left: 0;
      content: ' ';
      transition: all .1s cubic-bezier(.71,-.46,.88,.6);
    }
  }
}

&.@{namespace}-checkbox-checked{
  .@{namespace}-checkbox-inner {
    border-color: #2db7f5;
    background-color: #2db7f5;

    &:after{
      transform: rotate(45deg) scale(1);
      transition: all .2s cubic-bezier(.12,.4,.29,1.46) .1s;
    }
  }
}

</style>
