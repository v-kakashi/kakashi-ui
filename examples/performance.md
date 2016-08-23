---
category: 组件
title: 性能测试
---

## 代码演示

```html
<div id="app">
  <vk-button @click="expand">aaaa</vk-button>
  {{data.length}}
  <div v-for="a in data" track-by="title">
    <div>{{a.title}}</div>
  </div>
</div>
```

```js
import vkButton from '../src/button'
import Vue from 'vue'

import 'kakashi-theme/src/components/button.less'

new Vue({
  el: "#app",
  data () {
    return {
      data : [
        { title: 'A' }
      ],
      index: 0
    }
  },
  methods: {
    expand () {
      var result = []
      for(var i = 0; i<= 500; ++i){
        ++this.index
        result.push({title: 'a'+ this.index })
      }
      this.data = this.data.concat(result)
    }
  },
  components: {
    vkButton
  }
})
```
