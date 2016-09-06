---
category: 指令
title: infinite-scroll 无限滚动指令
---
---

## 说明

无限滚动条加载更多信息

## 代码演示

```html
<style>
.page-loading{
  text-align: center;
  height: 50px;
  line-height: 50px;
}
</style>
<div id="app">
  <ul
    v-vk-infinite-scroll="loadMore()"
    infinite-scroll-disabled="loading">
    <vk-cell :title="item.title" :label="item.label" :ext="item.date" v-for="item in list"></vk-cell>
    <p class="page-loading" v-show="loading && isMore">
      加载中...
    </p>
    <p class="page-loading" v-show="isMore == false">
      全部加载完毕
    </p>
  </ul>
</div>
```


```js
import vkInfiniteScroll from '../src/infinite-scroll'
import vkCell from 'kakashi-ui/src/cell'
import Vue from 'vue'
import 'kakashi-theme'

new Vue({
  el: "#app",
  data () {
    return {
      isMore: true,
      loading: false,
      list : []
    }
  },
  methods: {
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        if(this.list.length > 40){
          this.isMore = false
        } else {
          for (let i = 1; i <= 10; i++) {
            this.list.push({ title: "新闻标题" + (this.list.length + 1), label: "企业传播处",  date: "2016-06-16 11:27"})
          }
        }
        this.loading = false
      }, 2500);
    }
  },
  directives: {
    vkInfiniteScroll
  },
  components: {
    vkCell
  }
})
```

## 属性
| 参数      | 说明                                     | 类型       | 默认值 |
|-----------|------------------------------------------|------------|-------|
| text    | 加载文字 | String       | ''    |
| visible | 是否显示 | Boolean      | false |
| infinite-scroll-disabled        | 若为真，则无限滚动不会被触发 | Boolean	 | false |
| infinite-scroll-distance        | 触发加载方法的滚动距离阈值（像素） | Number	 | 0 |
| infinite-scroll-immediate-check | 若为真，则指令被绑定到元素上后会立即检查是否需要执行加载方法。在初始状态下内容有可能撑不满容器时十分有用。 | Boolean	 | true |
| infinite-scroll-listen-for-event | 一个 event，被执行时会立即检查是否需要执行加载方法。 | Function | - |
