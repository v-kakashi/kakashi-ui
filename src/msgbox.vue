<template>
  <div>
    <div class="vk-msgbox-wrapper">
      <vk-mask v-show="visible" @touchend.prevent="visible = false"></vk-mask>
      <div class="vk-msgbox" v-show="visible">
        <div class="vk-msgbox-header" v-if="title !== ''">
          <div class="vk-msgbox-title">{{ title }}</div>
        </div>
        <slot name="content">
          <div class="vk-msgbox-content" v-if="message !== ''">
            <div class="vk-msgbox-status d-icon {{ type ? 'icon-' + type : '' }}"></div>
            <div class="vk-msgbox-message"><p>{{ message }}</p></div>
              <div class="vk-msgbox-input" v-show="showInput">
                <input type="text" v-model="inputValue" :placeholder="inputPlaceholder" v-el:input />
                <div class="vk-msgbox-errormsg" :style="{ visibility: !!editorErrorMessage ? 'visible' : 'hidden' }">{{editorErrorMessage}}</div>
              </div>
          </div>
        </slot>
        <div class="vk-msgbox-btns" :class="{ 'vk-msgbox-btns-reverse': confirmButtonPosition === 'left' }">
          <button class="{{ cancelButtonClasses }}" v-show="showCancelButton" @click="handleAction('cancel')">{{ cancelButtonText }}</button>
          <button class="{{ confirmButtonClasses }}" v-show="showConfirmButton" @click="handleAction('confirm')">{{ confirmButtonText }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import vkMask from './mask.vue'

  export default {
    props: {
      title: {
        type: String,
        default: '提示'
      },
      message: {
        type: String,
        default: ''
      },
      showInput: false,
      inputValue: {
        type: String,
        default: ''
      },
      inputPlaceholder: {
        type: String,
        default: ''
      },
      inputPattern: {
        type: Object,
        default: null
      },
      inputValidator: {
        type: Function,
        default: null
      },
      inputErrorMessage: {
        type: String,
        default: '输入的数据不合法!'
      },
      visible: {
        type: Boolean,
        default: true,
        twoWay: true
      },
      mask: {
        type: Boolean,
        default: true
      },
      closeOnPressEscape: {
        type: Boolean,
        default: true
      },
      showConfirmButton: {
        type: Boolean,
        default: true
      },
      showCancelButton: {
        type: Boolean,
        default: false
      },
      confirmButtonText: {
        type: String,
        default: '确定'
      },
      cancelButtonText: {
        type: String,
        default: '取消'
      },
      confirmButtonPosition: {
        type: String,
        default: 'right'
      },
      confirmButtonHighlight: {
        type: Boolean,
        default: false
      },
      confirmButtonClass: {
        type: String,
        default: ''
      },
      confirmButtonDisabled: {
        type: Boolean,
        default: false
      },
      cancelButtonClass: {
        type: String,
        default: ''
      },
      cancelButtonHighlight: {
        type: Boolean,
        default: false
      },
      editorErrorMessage: {
        type: String,
        default: ''
      },
      onAction: {
        type: Function,
        default: () => {}
      }
    },

    computed: {
      confirmButtonClasses () {
        var classes = 'vk-msgbox-btn vk-msgbox-confirm ' + this.confirmButtonClass
        if (this.confirmButtonHighlight) {
          classes += ' vk-msgbox-confirm-highlight'
        }
        return classes
      },
      cancelButtonClasses () {
        var classes = 'vk-msgbox-btn vk-msgbox-cancel ' + this.cancelButtonClass
        if (this.cancelButtonHighlight) {
          classes += ' vk-msgbox-cancel-highlight'
        }
        return classes
      }
    },

    methods: {
      handleAction (action) {
        if (this.$type === 'prompt' && action === 'confirm' && !this.validate()) {
          return
        }
        this.visible = false
        var visible = this.onAction(action)
        if (typeof visible === 'boolean') {
          this.visible = visible
        } else {
          this.visible = false
        }
      },

      validate () {
        if (this.$type === 'prompt') {
          var inputPattern = this.inputPattern
          if (inputPattern && !inputPattern.test(this.inputValue || '')) {
            this.editorErrorMessage = this.inputErrorMessage
            return false
          }
          var inputValidator = this.inputValidator
          if (typeof inputValidator === 'function') {
            var validateResult = inputValidator(this.inputValue)
            if (validateResult === false) {
              this.editorErrorMessage = this.inputErrorMessage
              return false
            }
            if (typeof validateResult === 'string') {
              this.editorErrorMessage = validateResult
              return false
            }
          }
        }
        this.editorErrorMessage = ''
        return true
      }
    },

    watch: {
      inputValue () {
        if (this.$type === 'prompt') {
          this.validate()
        }
      },

      visible (val) {
        if (val && this.$type === 'prompt') {
          setTimeout(() => {
            if (this.$els.input) {
              this.$els.input.focus()
            }
          }, 500)
        }
      }
    },
    components: {
      vkMask
    }
  }
</script>
