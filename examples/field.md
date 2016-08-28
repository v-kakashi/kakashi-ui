---
category: 组件
title: Field 表单元素
---
---

## 说明

常用的的表单输入元素，和表单状态

## 代码演示

```html
<div id="app">
  <div class="group">
    <header class="group-header">默认样式</header>
    <vk-field label="用户名" placeholder="请输入用户名"></vk-field>
    <vk-field label="邮箱" placeholder="请输入邮箱" type="email"></vk-field>
    <vk-field label="密码" placeholder="请输入密码" type="password"></vk-field>
    <vk-field label="手机号" placeholder="请输入手机号" type="tel"></vk-field>
    <vk-field label="网站" placeholder="请输入网址" type="url"></vk-field>
    <vk-field label="数字" placeholder="请输入数字" type="number"></vk-field>
    <vk-field label="生日" placeholder="请输入生日" type="date"></vk-field>
    <vk-field placeholder="没有 label"></vk-field>
    <vk-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4"></vk-field>
  </div>
  <div class="group">
    <header class="group-header">图标样式</header>
    <vk-field icon="apps" label="应用名" placeholder="请输入应用名"></vk-field>
    <vk-field icon="pin" label="地址" placeholder="福州市"></vk-field>
    <vk-field icon="iphone" placeholder="请输入手机号"></vk-field>
    <vk-field icon="iphone" placeholder="请输入手机号" state="success"></vk-field>
  </div>
  <div class="group">
    <header class="group-header">状态样式</header>
    <vk-field label="帐号" state="success" placeholder="请输入帐号"></vk-field>
    <vk-field label="帐号" state="warning" placeholder="请输入帐号"></vk-field>
    <vk-field label="帐号" state="error" placeholder="请输入帐号"></vk-field>
  </div>
</div>
```

```js
import vkField from 'src/field'
import Vue from 'vue'

import 'kakashi-theme/src/components/field.less'

new Vue({
  el: "#app",
  components: {
    vkField
  }
})
```

## 属性

| 参数      | 说明                                     | 类型       | 默认值 |
|-----------|------------------------------------------|------------|-------|
| type | 输入框类型 , 只接受 text, number, email, url, tel, date, datetime, password, textarea | String  | 'text' |
| label | 标签 | String  | ''    |
| rows | 类型为 textarea 时可指定高度（显示行数） | Number | '' |
| value	 | 绑定表单输入值	 | String | '' |
| placeholder | 占位内容 | String | '' |
| state | 表单校验状态样式，只接受 error, warning, success | String | '' |
| after | 尾部图标 由 [vkIcon](./icon.html) 组件提供显示 | String | '' |
| icon | 头部图标 由 [vkIcon](./icon.html) 组件提供显示 | String | '' |

## Slot
| name      | 说明                                     |
|-----------|------------------------------------------|
| - | 自定义布局右侧 |
