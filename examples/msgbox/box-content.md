---
category: 组件
title: Msgbox 自定义内容
---
---

## 代码演示

```html
<div id="app">

  <div class="group">
    <header class="group-header">自定义内容</header>
    <div class="group-body">
      <vk-button :click="open" >打开对话框</vk-button>
      <vk-msgbox message="你好，程序员!" :visible.sync="isVisible">
        <div class="vk-msgbox-content" slot="content">
          <vk-image src="http://fanyi.baidu.com/static/translation/img/header/logo_cbfea26.png"></vk-image>
        </div>
      </vk-msgbox>
    </div>
  </div>
</div>
```

```js
import vkMsgbox from 'kakashi-ui/src/msgbox'
import vkImage from 'kakashi-ui/src/image'
import vkButton from 'kakashi-ui/src/button'
import Vue from 'vue'

import 'kakashi-theme/src/components/image.less'
import 'kakashi-theme/src/components/button.less'
import 'kakashi-theme/src/components/msgbox.less'

new Vue({
  el: "#app",
  data () {
    return {
      isVisible : false
    }
  },
  methods: {
    open ($event) {
      this.isVisible = true
    },
    action (type) {
      alert(`button 类型: ${type}`)
    }
  },
  components: {
    vkMsgbox,
    vkButton,
    vkImage
  }
})
```
