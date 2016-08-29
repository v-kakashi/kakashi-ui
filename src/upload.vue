<template>
  <div :class="['vk-upload']">
    <div class="vk-upload-item" v-for="item in items" track-by="$index">
      <vk-image
        :src="item"
        :width="width"
        :height="height"
        :keep-ratio="false"
      >
      </vk-image>
      <vk-icon @click="handleRemove(item)" value="remove"></vk-icon>
    </div>
    <vk-image class="vk-upload-button"
      @click="handleAddItem"
      v-show="items.length < max"
      :width="width" :height="height" :src="buttonImage">
    </vk-image>
  </div>
</template>

<script>
import vkImage from './image.vue'
import vkIcon from './icon.vue'
export default {
  props: {
    items: {
      type: Array,
      default: [],
      twoWay: true
    },
    width: {
      type: [String, Number],
      default: '82px'
    },
    height: {
      type: [String, Number],
      default: '82px'
    },
    max: {
      type: Number,
      default: 9
    },
    buttonImage: {
      type: String,
      default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACoCAYAAAB0S6W0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAASbSURBVHic7d1BayN1HMbxZybNFKY0xc605KhzkOJNUNx3sG/Cu7h3EfTuwTegLIjvwLchHj1I6SFDj3GbCSTBtNOExIMNdLvdYrfpzvNvvh/YQ8qQ/R9+5Nfkm6HRcrnUdWVZvv6DG4qiiLie6x/x+lNJLyX9UhTFq62yLD+I4/jjw8PDTyS9uOvJJWk6nd55AK7n+gde/6GkHyR9X5blR1Gv1/tG0o87Ozva3d29z/8FrF1d15pMJprP55L07ZauXjWTJGn0YIAkbW9vS5IuLi7+Pj8//y3q9XpLSep2u40eDLgpTdMobvoQwF0YUFjbavoAwG3G47H6/f7PvILC0nQ6laSvYkl/tNvtho8D3C5aLpf3/rAVeGz9fl8Sb5JgjgGFtbgsy2ez2azpcwC3iiX9XlVV0+cAbsWKh6VOpyNJX/NBPSylaao8z/mgHt4YUFhjxcMSLR7WaPEIAi0elmjxCAIDCmu0eFijxcMaKx6WaPGwRotHEBhQWGPFwxItHtZo8QgCLR6WaPEIAgMKa7R4WKPFwxorHpZo8bBGi0cQGFBYY8XDEi0e1mjxCAItHpZo8QgCAwprtHhYo8XDGiselmjxsEaLRxAYUFhjxcMSLR7WaPEIAi0elmjxCAJvktZgsVioqiqNRiN1Oh1lWaZWq9X0sZ4EWvwaDIdDDQYDzWYzVVWl4XDY9JGeDFr8GoxGozsf493xO+gaXF5evvZ4NptpueR950PQ4mGNFo8gMKCwxoqHJVo8rNHiEYStoiie0eLhihUPawworNHiYY0WD2useFiixcMaLR5BYEBhjRUPS7R4WFu1+C391+K/aPg8781isdBwONR4PH7jm/DrdHJyspbnSZJEnU5H+/v7iuPNez3ZuPviz87ONBgMmj7GveV5roODg6aP8d5s7H3xod7QFuq5H2rjBvTqA+DghHruh9q4Fp9lmfI8V5IkTR/lf0mSRHmeK8uypo/SiKjX6y0lqdvtNn2WYB0fH7/xs6OjI0VR1MBpnoaN/R0UYaDFwxotHkFgQGGNFQ9LtHhY4754BIH74mGNFQ9rDCisbVyLR1i4Lx7WWPGwRIuHNVo8gsCAwhorHpZo8Wt08/aRdrvNt+kfiBa/Rnt7e3c+xrvbuPviHwN/7Xj9VvckMaCwxE1zCAItHtZo8bDGioclWjys0eIRBAYU1ljxsESLhzVaPIJA6oQlUieCwIDCGi0e1mjxsMaKhyVaPKzR4hEEBhTWWPGwRIuHNVo8gkCLhyVaPILAgMIaLR7WaPGwxoqHJVo8rNHiEQQGFNZY8bBEi4c1WjyCQIuHJVo8gsCAwhotHtZo8bDGioclWjys0eIRBAYU1ljxsESLhzVaPIJAi4clWjyCwIDCGi0e1mjxsMaKhyVaPKzR4hEEBhTWWPGwdL3Fn0pSXdfNngi4Utf1qsU/jyX91Gq1/opjtj2aV9e1JpPJ6uHLVYtvS/pS0gtJnw0GA83n87c+SZZluv4FE67n+ke4/h9JRSxJaZrO0jT9NU3Tz9M0jebz+Z9vfXZJVVV9mqZptPrH9Vy/xutPJX0nqSiK4tW/5glKuDN2k+sAAAAASUVORK5CYII='
    }
  },
  ready () {
    this.items = this.items.slice(0, this.max)
  },
  methods: {
    handleRemove (item) {
      this.items.$remove(item)
      this.$emit('upload-remove-item', item)
    },
    handleAddItem () {
      this.$emit('upload-add-item')
    }
  },
  components: {
    vkImage,
    vkIcon
  }
}
</script>
