---
title: Cell 单元格控件
---

## 说明

单元格，可用作展示列表信息、链接或者表单等。

## 代码演示

```html
<div id="app">
  <div class="group">
    <header class="group-header">列表样式</header>
    <vk-cell title="新闻标题1" label="企业传播处" ext="2016-06-16 11:27"></vk-cell>
    <vk-cell title="新闻标题2" label="企业传播处" ext="2016-06-16 11:27"></vk-cell>
    <vk-cell title="不能点击" :is-link="false" label="企业传播处" ext="2016-06-16 11:27"></vk-cell>
    <vk-cell title="超长新闻标题超长新闻标题超长新闻标题超长新闻标题超长新闻标题超长新闻标题超长新闻标题1" label="企业传播处" ext="2016-06-16 11:27"></vk-cell>
  </div>
  <div class="group">
    <header class="group-header">单元格样式</header>
    <vk-cell title="组织机构" value="福建省" is-link after="nav_next"></vk-cell>
    <vk-cell title="自定义图标1" is-link>
      <template slot="after">
        <img src="/static/img/logo.png" style="width: 20px;" />
      </template>
    </vk-cell>
    <vk-cell icon="apps" title="带图标样式"></vk-cell>
    <vk-cell title="自定义图标2">
      <template slot="icon">
        <img src="/static/img/logo.png" style="width: 20px; margin-right:4px;" />
      </template>
    </vk-cell>
  </div>
  <div class="group">
    <header class="group-header">自定义内容</header>
    <vk-cell>
      <div slot>
        <h4 style="margin-bottom:4px;">自定义标题</h4>
        <div>自定义内容</div>
      </div>     
    </vk-cell>
  </div>
</div>
```


```js
import vkCell from 'src/Cell'
import Vue from 'vue'
new Vue({
  el: "#app",
  components: {
    vkCell
  }
})
```

## API

| 参数      | 说明                                     | 类型       | 默认值 |
|-----------|------------------------------------------|------------|-------|
| icon | 左侧图标默认由 [vkIcon](./icon.html) 组件提供显示，slot after 可以自定义的图标  | String  | '' |
| after | 右侧图标默认由 [vkIcon](./icon.html) 组件提供显示，slot after 可以自定义图标  | String  | '' |
| title | 标题 | String | '' |
| label | 备注信息| String | '' |
| value | 右侧显示文字| String | '' |
| ext   | 扩展信息，在右下角显示 | String | '' |
| is-link | 可点击的链接| Boolean | true |



## Slot
| name      | 说明                                     |
|-----------|------------------------------------------|
| - | 自定义布局 |
| title | 同 title, 会覆盖 title 属性 |
| icon | 同 icon, 会覆盖 icon 属性，例如可以传入图片|
| after | 同 after, 会覆盖 after 属性，例如可以传入图片|
