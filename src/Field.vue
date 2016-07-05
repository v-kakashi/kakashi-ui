<template>
  <div class="vk-field">
    <cell
      :after="state ? state : after"
      :icon="icon"
      :title="label"
      clickoutside="active = false"
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
        <div
          @click="value = ''"
          class="vk-field-clear"
          v-show="value && type !== 'textarea' && active">
          <i class="mintui mintui-field-error"></i>
        </div>
      </template>
    </cell>
    <slot></slot>
  </div>
</template>

<script>
import Cell from './Cell'

/**
 * mt-field
 * @desc 编辑器，依赖 cell
 * @module components/field
 *
 * @param {string} [type=text] - field 类型，接受 text, number, email, url, tel, date, datetime, password, textarea 等
 * @param {string} [label] - 标签
 * @param {string} [rows] - textarea 的 rows
 * @param {string} [placeholder] - placeholder
 * @param {string} [state] - 表单校验状态样式，接受 error, warning, success
 *
 * @example
 * <mt-field label="用户名"></mt-field>
 * <mt-field label="密码" placeholder="请输入密码"></mt-field>
 * <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4"></mt-field>
 * <mt-field label="邮箱" placeholder="成功状态" state="success"></mt-field>
 */
export default {

  data () {
    return {
      active: false
    }
  },
/*
  directives: {
    Clickoutside
  },
*/
  computed: {
    stateCls () {
      return !this.state ? '' : ('state-' + this.state)
    }
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    icon: String,
    rows: String,
    label: String,
    placeholder: String,
    state: {
      validator: function (value) {
        return ['error', 'success', 'warning'].indexOf(value) >= 0
      },
      type: String
    },
    after: String,
    value: ''
  },

  components: {
    Cell
  }
}
</script>

<style lang="less">
  @import "./assets/style/var.less";
  @component-namespace: vk-field;

  .@{component-namespace}{

      display: flex;

      textarea {
        align-items: inherit;

        .vk-cell-title {
          padding-top: 5px;
        }
      }

      .vk-cell {
        padding: 9px 10px;
        flex: 1;
        flex-direction: row;
      }

      .vk-cell-text {
        width: 105px;
        flex: none;
      }

      .is-icon{
        .vk-cell-text{ width: 83px;}
      }

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

      &-clear {
        opacity: .2;
      }

      .state-success .vk-cell-after{ color: green; }
      .state-warning .vk-cell-after{ color: #ffc107; }
      .state-error .vk-cell-after{ color: red; }


    }
</style>
