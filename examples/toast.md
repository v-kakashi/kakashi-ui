---
category: 组件
title: Toast 提示框
---

## 代码演示

```html
<div id="app">
  <div class="group-body">
    <vk-button type="primary" @click="showToast">弹出 Toast</vk-button><br />
    <vk-button type="primary" @click="showIconToast">带有 Icon 的 Toast</vk-button><br />
  </div>
</div>
```

```js
import Vue from 'vue'
import vkButton from 'src/Button'
import toast from '../src/toast/index'
import 'kakashi-theme/src/components/toast.less'


new Vue({
  el: "#app",
  methods: {
    showToast() {
      toast('提示信息')
    },
    showIconToast() {
      toast({
        message: '提示信息',
        position: 'bottom',
        duration: 5000,
        icon: 'info'
      })
    },
  },
  components: {
    vkButton
  }
})

```

## Props

| 参数      | 说明                                     | 类型       | 默认值 |
|-----------|------------------------------------------|------------|-------|
| message | 文本内容 | String  | ''    |
| position | 	Toast 的位置('top','bottom','middle') | String | '' |
| duration | 	持续时间（毫秒） | Number | 3000 |
| icon | 图标 由 [vkIcon](./icon.html) 组件提供显示 | String | '' |
| cls | Toast 的类名。可以为其添加样式 | String | '' |
