<template>
  <li class="vk-tree-node-warp">
    <div class="vk-tree-node" @click="handleExpand">
      <span
        class="vk-tree-checkbox"
        :class="selectCls"
        :style="{'margin-right': ((deep - 1) * 22) + 'px'}"
        @click.stop="handleSelect"
      >
        <span class="vk-tree-checkbox-inner"></span>
      </span>
      <span class="vk-tree-switcher" v-if="!isLeaf" :class="{'vk-tree-open':expand, 'vk-tree-close': !expand}">
        <vk-icon>play_arrow</vk-icon>
      </span>
      <span class="vk-tree-title" >{{title}}</span>
    </div>
    <ul v-show="expand" class="vk-tree-child vk-tree-child-open">
      <vk-tree-node v-for="data in dataSoures" :selected="data.selected" :title="data.title" :data-soures="data.children"></vk-tree-node>
      <slot></slot>
    </ul>
  </li>
</template>

<script>
import vkIcon from 'src/Icon'
const COMPONENT_NAME = 'vk-tree-node'
export default {
  name: COMPONENT_NAME,
  props: {
    dataSoures: Array,
    title: String,
    selected: {
      type: Boolean,
      default: false
    },
    disabled: Boolean,
    disableCheckbox: Boolean,
    isLeaf: {
      type: Boolean,
      default: true
    }
  },
  ready () {
    this.deep = getDeep(this)
    this.$children.forEach(component => {
      let existNodeTree = component.$options.name === COMPONENT_NAME
      if (existNodeTree) {
        this.isLeaf = false
        component.$on('select', this.handleSelectedByChild)
      }
    })

    this.$nextTick(() => {
      // 注册子组件
      if (this.$parent.$options.name === COMPONENT_NAME) {
        this.$parent.children.push(this)
      }
    })
  },
  data () {
    return {
      expand: false,
      someSelected: false,
      children: [],
      deep: 0
    }
  },
  methods: {
    handleExpand () {
      console.log(this.title + '-handleExpand')
      this.expand = !this.expand
      if (this.isLeaf) {
        this.handleSelect()
      }
    },
    handleSelect (event, {selected, isFromParent} = {}) {
      console.log(this.title + '-handleSelect')
      if (isFromParent) {
        // 从父新发来的事件，就不在用 $emit('select') 发回去了
        this.someSelected = this.selected = selected
      } else {
        this.someSelected = this.selected = !this.selected
        this.$emit('select')
      }

      // 通知子组件选中
      this.children.forEach(treeNode => {
        treeNode.handleSelect(event, {selected: this.selected, isFromParent: true})
      })
    },
    handleSelectedByChild () {
      this.someSelected = this.children.some(treeNode => treeNode.selected || treeNode.someSelected)
      this.selected = this.children.every(treeNode => treeNode.selected)
      this.$emit('select')
    }
  },
  computed: {
    // TODO: 要写测试用例
    selectCls () {
      if (this.isLeaf) {
        return this.selected ? 'vk-tree-checkbox-checked' : ''
      } else {
        if (this.selected) {
          return 'vk-tree-checkbox-checked'
        } else if (this.selected === false && this.someSelected) {
          return 'vk-tree-checkbox-indeterminate'
        } else {
          return ''
        }
      }
    }
  },
  components: {
    vkIcon
  }
}

/**
 * 获取组件被嵌套的深度
 * @param  {Vue} vm vm
 * @return {Number} 深度
 */
function getDeep (vm) {
  var deep = 0
  while ((vm = vm.$parent)) {
    ++deep
    if (vm.$options.name === 'vk-tree') {
      return deep
    }
  }
  return deep
}

</script>

<style lang="less">
@namespace: vk-tree;

.@{namespace}-node-warp{
  position: relative;
  display: flex;
  flex-direction: column;
  & + .@{namespace}-node-warp::after {
    content: none;
  }

  &:before {
    color: #d9d9d9;
    content: " ";
    width: 100%;
    height: 1;
    border-bottom: 1px solid;
    bottom: 0;
    left: 0;
    position: absolute;
    transform-origin: 0 100%;
  }
  &:after {
    color: #d9d9d9;
    content: " ";
    width: 100%;
    height: 1;
    border-top: 1px solid;
    top: 0;
    left: 0;
    position: absolute;
    transform-origin: 0 0;
  }
}

.@{namespace}-node{
  padding: 8px 10px;
  display: flex;
  align-items: center;
}

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

.@{namespace}-title{
  color: #333;
}

.@{namespace} li ul {
    margin: 0;
    padding: 0;
}
</style>
