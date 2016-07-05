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
import vkCell from './Cell'
import vkIcon from './Icon'
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

<style lang="less">
  @import "./assets/style/var.less";
  @component-namespace: vk-field;

  .@{component-namespace}{

      display: flex;

      textarea { align-items: inherit; }

      .vk-cell {
        padding: 9px 10px;
        flex: 1;
        flex-direction: row;
      }

      .vk-cell-text {
        width: 105px;
        flex: none;
      }

      .is-icon .vk-cell-text{ width: 83px; }

      .vk-cell-value {
        flex: 1;
        color: inherit;
        display: flex;
      }

      &-core {
        appearance: none;
        border-radius: 0;
        border: 0;
        flex: 1;
        outline: 0;
        line-height: 1.6;
        font-size: inherit;
        width: 100%;
      }

      &-clear { opacity: .2; }

      .state-success .vk-cell-after{ color: green; }
      .state-warning .vk-cell-after{ color: #ffc107; }
      .state-error .vk-cell-after{ color: red; }


    }
</style>
