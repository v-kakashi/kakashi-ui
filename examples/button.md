---
category: 组件
title: Button 按钮控件
---
---

## 说明

按钮，提供几种基础样式和尺寸，可自定义图标。

## 代码演示

```html
<div id="app" style="padding-top:20px;">
  <h2>基本样式</h2>
  <div class="group">
    <header class="group-header">默认样式</header>
    <div class="group-body">
      <vk-button type="default">default</vk-button>
      <vk-button type="primary">primary</vk-button>
      <vk-button type="danger">danger</vk-button>
    </div>
  </div>
  <div class="group">
    <header class="group-header">缕空样式</header>
    <div class="group-body">
      <vk-button type="default" plain>default</vk-button>
      <vk-button type="primary" plain>primary</vk-button>
      <vk-button type="danger" plain>danger</vk-button>
    </div>
  </div>
  <div class="group">
    <header class="group-header">按钮大小</header>
    <div class="group-body">
      <vk-button size="small">small</vk-button>
      <vk-button size="normal">normal</vk-button>
      <vk-button size="large">large</vk-button>
    </div>
  </div>
  <div class="group">
    <header class="group-header">按钮状态</header>
    <div class="group-body">
      <vk-button plain>缕空按钮</vk-button>
      <vk-button disabled :click="touch">禁用</vk-button>
    </div>
  </div>
  <div class="group">
    <header class="group-header">带图标按钮</header>
    <div class="group-body">
      <vk-button icon="alarms">按钮1</vk-button>
      <vk-button icon="balance">按钮2</vk-button>
      <vk-button icon="box">按钮3</vk-button>
    </div>
  </div>
  <div class="group">
    <header class="group-header">事件</header>
    <div class="group-body">
      <vk-button :click="touch">单击事件</vk-button>
    </div>
  </div>
</div>
```


```js
import vkButton from 'kakashi-ui/src/Button'
import Vue from 'vue'
import 'kakashi-theme'

new Vue({
  el: "#app",
  components: {
    vkButton
  },
  methods: {
    touch ($event) {
      alert('触发点击事件')
    }
  }
})
```

## 属性

| 参数      | 说明                                     | 类型       | 默认值 |
|-----------|------------------------------------------|------------|-------|
| icon | 按钮的图标由 [vkIcon](../icon.html) 组件提供显示 | String  | '' |
| disabled | 是否禁用图标，为禁用时，不能阻止 @click 绑定的事件，只能阻止通过 :click 绑定的事件 | Boolean  | false |
| plain | 是否设置成缕空按钮 | Boolean | false |
| type	 | 按钮类型，只接受	default , danger , primary （以后会改名）| String | 'default' |
| size | 安钮大小，只接受	small , normal , large  | String | 'normal' |
| click | 点击 button 按钮，传入参数为 $event | Function |
