---
category: 组件
title: Upload 上传图片组件
---

## 说明

上传图片组件

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

## Props

| 参数      | 说明                                     | 类型       | 默认值 |
|-----------|------------------------------------------|------------|-------|
| value | 图标的图案 | String  | ''    |
| color | 图标颜色 | String | '' |
| class | 图标的 className | String | '' |

## Slot
