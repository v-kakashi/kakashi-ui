---
title: Button 按钮控件
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
    <header class="group-header">幽灵样式</header>
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
      <vk-button plain>幽灵按钮</vk-button>
      <vk-button disabled>禁用</vk-button>
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
</div>
```


```js
import vkButton from 'src/Button'
import Vue from 'vue'
import 'kakashi-theme/src/components/button.less'

new Vue({
  el: "#app",
  components: {
    vkButton
  }
})
```
