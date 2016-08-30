---
category: 组件
title: Image 图片控件
---
---

## 代码演示

```html
<style>
.vk-image-circular img{ border-radius: 50%; }
</style>

<div id="app">
  <div class="group">
    <header class="group-header">默认样式</header>
    <div class="group-body">
      <vk-image src="http://lorempixel.com/80/80/people/"></vk-image>
    </div>
  </div>
  <div class="group">
    <header class="group-header">自定义样式</header>
    <div class="group-body">
      <vk-image class="vk-image-circular" src="http://lorempixel.com/80/80/people/"></vk-image>
    </div>
  </div>
</div>
```

```js
import vkImage from 'kakashi-ui/src/Image'
import Vue from 'vue'

import 'kakashi-theme'

new Vue({
  el: "#app",
  components: {
    vkImage
  }
})
```

## 属性

| 参数      | 说明                                     | 类型       | 默认值 |
|-----------|------------------------------------------|------------|-------|
| class | 图标 className | String  | '' |
| src | 图片路径 | String  | 1 像素图片 |
| alt | `img` 标签的 alt 属性  | String | '' |
| title	 | `img` 标签的 title 属性 | String | '' |
| width | 图片的宽度  | String, Number | '' |
| height | 图片的高度  | String, Number | '' |
| keepRatio | 保持图片的缩放比例  | Boolean | true |
