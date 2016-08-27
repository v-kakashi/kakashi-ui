<template>
  <div class="vk-toast {{ customClass }}" transition="vk-toast">
    <vk-icon class="vk-toast-icon" v-if="icon !== ''" :value='icon'></vk-icon>
    <span class="vk-toast-text" :style="{ 'padding-top': icon === '' ? '0' : '10px' }">{{ message }}</span>
  </div>
</template>

<script>
  import vkIcon from '../icon.vue'
  export default {
    props: {
      message: String,
      className: {
        type: String,
        default: ''
      },
      position: {
        type: String,
        default: 'middle'
      },
      icon: {
        type: String,
        default: ''
      }
    },
    components: {
      vkIcon
    },
    computed: {
      customClass () {
        var classes = []
        switch (this.position) {
          case 'top':
            classes.push('vk-toast-placetop')
            break
          case 'bottom':
            classes.push('vk-toast-placebottom')
            break
          default:
            classes.push('vk-toast-placemiddle')
        }
        classes.push(this.className)

        return classes.join(' ')
      }
    }
  }
</script>
