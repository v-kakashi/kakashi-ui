---
category: 组件
title: Upload 上传图片组件
---
---

## 说明

上传图片组件，这个要基于手机的原生功能，在 pc 不能完成上传功能。

## 代码演示

```html
<div id="app">
  <div class="group">
    <header class="group-header">默认样式</header>
    <vk-field label="图片上传">
      <vk-upload :items.sync="items" @upload-remove-item="removeImage" @upload-add-item="addImage" :max="9"></vk-upload>
    </vk-field>
  </div>
</div>
```


```js
import vkUpload from 'src/upload'
import vkCell from 'src/cell'
import vkField from 'src/field'
import Vue from 'vue'

import 'kakashi-theme/src/components/field.less'
import 'kakashi-theme/src/components/upload.less'

new Vue({
  el: "#app",
  data: {
    items: [
      'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2133296935,2175909175&fm=80',
      'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1158637019,1386129520&fm=58',
      'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=88452212,114486442&fm=58',
      'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=46809222,1320104452&fm=58',
      'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=46809222,1320104452&fm=58',
      'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=46809222,1320104452&fm=58']
  },
  methods: {
    addImage () {
      this.items.push('https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=46809222,1320104452&fm=58')
    },
    removeImage (item) {
      console.log(`删除：${item}`)
    }
  },
  components: {
    vkUpload,
    vkCell,
    vkField
  }
})
```

## 属性

| 参数      | 说明                                     | 类型       | 默认值 |
|-----------|------------------------------------------|------------|-------|
| items     | 上传图片路径 | Array  | []    |
| width     | 图片显示高度 | String, Number | 82px |
| height    | 图片显示高度 | String, Number | 82px |
| max       | 最多上传图版的数量 | Number | 9 |
| buttonImage | 上传按钮图片路径 | String | 很长的一串 base64 值 |

## 事件

| 事件名      | 说明                                     | 入参 |
|------------|-----------------------------------------|------|
| upload-add-item | 增加一个元素时触发 | 加入该的元素信息 |
| upload-remove-item | 移除一个元素触发 | 移除该的元素信息 |
