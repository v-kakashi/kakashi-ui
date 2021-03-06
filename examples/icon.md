---
category: 组件
title: Icon 图标控件
---
---

## 说明

图标组件，目前使用 [Material Icons](https://icomoon.io/) 的字体图标，包含四十多个常用图标。

## 代码演示

```html
<div id="app">
  <div class="group">
    <header class="group-header">默认样式</header>
    <div class="group-body group-body-icons">
      <div class="icon-cell">
        <vk-icon value='alarms'></vk-icon> <div class="icon-text">alarms</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='balance'></vk-icon> <div class="icon-text">balance</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='box'></vk-icon> <div class="icon-text">box</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='add_alarm'></vk-icon> <div class="icon-text">add_alarm</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='add_fill'></vk-icon> <div class="icon-text">add_fill</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='add_circle'></vk-icon> <div class="icon-text">add_circle</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='adjust'></vk-icon> <div class="icon-text">adjust</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='apps'></vk-icon> <div class="icon-text">apps</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='arrow_down'></vk-icon> <div class="icon-text">arrow_down</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='arrow_up'></vk-icon> <div class="icon-text">arrow_up</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='battery_alert'></vk-icon> <div class="icon-text">battery_alert</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='phone'></vk-icon> <div class="icon-text">phone</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='cloud_down'></vk-icon> <div class="icon-text">cloud_down</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='edit'></vk-icon> <div class="icon-text">edit</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='desktop'></vk-icon> <div class="icon-text">desktop</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='face'></vk-icon> <div class="icon-text">face</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='favorite'></vk-icon> <div class="icon-text">favorite</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='folder'></vk-icon> <div class="icon-text">folder</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='folder_open'></vk-icon> <div class="icon-text">folder_open</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='info'></vk-icon> <div class="icon-text">info</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='info_outline'></vk-icon> <div class="icon-text">info_outline</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='lock_outline'></vk-icon> <div class="icon-text">lock_outline</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='mic'></vk-icon> <div class="icon-text">mic</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='mic_none'></vk-icon> <div class="icon-text">mic_none</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='mood_bad'></vk-icon> <div class="icon-text">mood_bad</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='add_note'></vk-icon> <div class="icon-text">add_note</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='pause1'></vk-icon> <div class="icon-text">pause1</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='pause2'></vk-icon> <div class="icon-text">pause2</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='pause3'></vk-icon> <div class="icon-text">pause3</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='iphone'></vk-icon> <div class="icon-text">iphone</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='pin'></vk-icon> <div class="icon-text">pin</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='play1'></vk-icon> <div class="icon-text">play1</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='play2'></vk-icon> <div class="icon-text">play2</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='power'></vk-icon> <div class="icon-text">power</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='list'></vk-icon> <div class="icon-text">list</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='zoom_in'></vk-icon> <div class="icon-text">zoom_in</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='zoom_out'></vk-icon> <div class="icon-text">zoom_out</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='zoom_map'></vk-icon> <div class="icon-text">zoom_map</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='warning'></vk-icon> <div class="icon-text">warning</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='remove'></vk-icon> <div class="icon-text">remove</div>
      </div>
      <div class="icon-cell">
        <vk-icon value='error'></vk-icon> <div class="icon-text">error</div>
      </div>
    </div>
  </div>
  <div class="group">
    <header class="group-header">不同颜色</header>
    <div class="group-body group-body-icons">
      <div class="icon-cell">
        <vk-icon color="red" value="box"></vk-icon> <div class="icon-text">red</div>
      </div>
      <div class="icon-cell">
        <vk-icon color="blue" value="box"></vk-icon> <div class="icon-text">blue</div>
      </div>
      <div class="icon-cell">
        <vk-icon color="#2baee9" value="box"></vk-icon> <div class="icon-text">#2baee9</div>
      </div>
    </div>
  </div>
</div>
```


```js
import vkIcon from 'kakashi-ui/src/icon'
import Vue from 'vue'

import 'kakashi-theme/src/components/icon.less'

new Vue({
  el: "#app",
  components: {
    vkIcon
  }
})
```

## 属性

| 参数      | 说明                                     | 类型       | 默认值 |
|-----------|------------------------------------------|------------|-------|
| value | 图标的图案 | String  | ''    |
| color | 图标颜色 | String | '' |
