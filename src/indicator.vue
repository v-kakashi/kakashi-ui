<template>
  <div class="vk-indicator" v-show="visible" transition="vk-indicator" >
    <div class="vk-indicator-wrapper" :style="{ 'padding': text ? '20px' : '15px' }">
      <spinner class="vk-indicator-spin" :type="convertedSpinnerType" :size="32"></spinner>
      <span class="vk-indicator-text" v-show="text">{{ text }}</span>
    </div>
    <div class="vk-indicator-mask" @touchmove.stop.prevent></div>
  </div>
</template>

<script>
  import Spinner from 'mint-spinner'

  import 'kakashi-theme/src/components/spinner.less'
  export default {

    components: {
      Spinner
    },

    computed: {
      convertedSpinnerType () {
        switch (this.spinnerType) {
          case 'double-bounce':
            return 1
          case 'triple-bounce':
            return 2
          case 'fading-circle':
            return 3
          default:
            return 0
        }
      }
    },

    props: {
      text: String,
      spinnerType: {
        type: String,
        default: 'snake'
      },
      visible: false
    }
  }
</script>
