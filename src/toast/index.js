import Vue from 'vue'

const Toast = Vue.extend(require('./toast.vue'))
let toastPool = []

let getAnInstance = function () {
  // 重有已存在的实例
  if (toastPool.length > 0) {
    let instance = toastPool[0]
    toastPool.splice(0, 1)
    return instance
  }
  return new Toast({
    el: document.createElement('div')
  })
}
// 保存之前创建的实例
let returnAnInstance = function (instance) {
  if (instance) {
    toastPool.push(instance)
  }
}

export default function (options) {
  options = options || {}

  let message, position, duration, cls, icon
  // 配置属性
  if (typeof options === 'string') {
    message = options
    duration = 3000
    position = 'middle'
    cls = ''
    icon = ''
  } else {
    message = options.message
    duration = options.duration || 3000
    position = options.position || 'middle'
    cls = options.cls || ''
    icon = options.icon || ''
  }

  let instance = getAnInstance()

  instance.message = message
  instance.position = position
  instance.cls = cls
  instance.icon = icon

  Vue.nextTick(function () {
    instance.$appendTo(document.body)
    setTimeout(function () {
      instance.$remove()
      returnAnInstance(instance)
    }, duration)
  })
}
