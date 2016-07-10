<template>
  <div class="vk-field">
    <vk-cell
      :after="state ? state : after"
      :icon="icon"
      :title="label"
      v-clickoutside="active = false"
      :is-link="false"
      :class="[
      { 'is-textarea': type === 'textarea'},
      { 'is-icon': !!icon},
      'state-' + state ]">
      <template slot="value">
        <textarea
          class="vk-field-core"
          :placeholder="placeholder"
          v-if="type === 'textarea'"
          :rows="rows"
          v-model="value">
        </textarea>
        <input
          class="vk-field-core"
          :placeholder="placeholder"
          :number="type === 'number'"
          v-else
          :type="type"
          @focus="active = true"
          v-model="value">
        <vk-icon
          @click="value = ''"
          v-show="value && type !== 'textarea' && active"
          class="vk-field-clear">remove</vk-icon>
        </div>
      </template>
    </vk-cell>
  </div>
</template>

<script>
import vkCell from './cell'
import vkIcon from './icon'
import Clickoutside from 'vue-clickoutside'

export default {

  data () {
    return {
      active: false
    }
  },
  directives: {
    Clickoutside
  },
  props: {
    type: {
      type: String,
      validator: function (value) {
        return ['text',
                'number',
                'email',
                'url',
                'tel',
                'date',
                'datetime',
                'password',
                'textarea'].indexOf(value) >= 0
      },
      default: 'text'
    },
    icon: String,
    after: String,
    rows: String,
    label: String,
    placeholder: String,
    state: {
      validator: function (value) {
        return ['error', 'success', 'warning'].indexOf(value) >= 0
      },
      type: String
    },
    value: ''
  },

  components: {
    vkCell,
    vkIcon
  }
}
</script>
