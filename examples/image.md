---
title: Image 图片控件
---

## 代码演示

```html
<div id="app">
  <vk-image src="http://fanyi.baidu.com/static/translation/img/header/logo_cbfea26.png"></vk-image>
</div>
```

```js
import vkImage from '../src/Image'
import Vue from 'vue'

import 'kakashi-theme/src/components/image.less'

new Vue({
  el: "#app",
  components: {
    vkImage
  }
})
```
