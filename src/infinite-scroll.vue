<script>
var throttle = function (fn, delay) {
  var now, lastExec, timer, context, args //eslint-disable-line

  var execute = function () {
    fn.apply(context, args)
    lastExec = now
  }

  return function () {
    context = this
    args = arguments

    now = Date.now()

    if (timer) {
      clearTimeout(timer)
      timer = null
    }

    if (lastExec) {
      var diff = delay - (now - lastExec)
      if (diff < 0) {
        execute()
      } else {
        timer = setTimeout(function () {
          execute()
        }, diff)
      }
    } else {
      execute()
    }
  }
}

var getScrollTop = function (element) {
  if (element === window) {
    // document.documentElement.scrollTop 有时会失效
    return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop)
  }

  return element.scrollTop
}

var getComputedStyle = document.defaultView.getComputedStyle

var getScrollEventTarget = function (element) {
  var currentNode = element
  // bugfix, see http://w3help.org/zh-cn/causes/SD9013 and http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
  // 获祖先中有设置 overflowY 为 scroll 的元素，如果没有，就使用 window 做为滚动容器
  while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
    var overflowY = getComputedStyle(currentNode).overflowY
    if (overflowY === 'scroll' || overflowY === 'auto') {
      return currentNode
    }
    currentNode = currentNode.parentNode
  }
  return window
}

var getVisibleHeight = function (element) {
  if (element === window) {
    return document.documentElement.clientHeight
  }

  return element.clientHeight
}

var getElementTop = function (element) {
  if (element === window) {
    return getScrollTop(window)
  }
  return element.getBoundingClientRect().top + getScrollTop(window)
}

var isAttached = function (element) {
  var currentNode = element.parentNode
  while (currentNode) {
    if (currentNode.tagName === 'HTML') {
      return true
    }
    if (currentNode.nodeType === 11) {
      return false
    }
    currentNode = currentNode.parentNode
  }
  return false
}

export default {
  doBind: function () { // 初次绑定事件
    if (this.binded) return // eslint-disable-line
    this.binded = true

    var directive = this
    var element = directive.el

    directive.scrollEventTarget = getScrollEventTarget(element)
    // 设置 200 秒延迟，防止过度刷新
    directive.scrollListener = throttle(directive.doCheck.bind(directive), 200)
    directive.scrollEventTarget.addEventListener('scroll', directive.scrollListener)

    var disabledExpr = element.getAttribute('infinite-scroll-disabled')
    var disabled = false

    if (disabledExpr) {
      this.vm.$watch(disabledExpr, function (value) {
        directive.disabled = value
        if (!value && directive.immediateCheck) {
          directive.doCheck()
        }
      })
      disabled = Boolean(directive.vm.$get(disabledExpr))
    }
    directive.disabled = disabled

    var distanceExpr = element.getAttribute('infinite-scroll-distance')
    var distance = 0
    if (distanceExpr) {
      distance = Number(directive.vm.$get(distanceExpr))
      if (isNaN(distance)) {
        distance = 0
      }
    }
    directive.distance = distance

    var immediateCheckExpr = element.getAttribute('infinite-scroll-immediate-check')
    var immediateCheck = true
    if (immediateCheckExpr) {
      immediateCheck = Boolean(directive.vm.$get(immediateCheckExpr))
    }
    directive.immediateCheck = immediateCheck

    if (immediateCheck) {
      directive.doCheck()
    }

    var eventName = element.getAttribute('infinite-scroll-listen-for-event')
    if (eventName) {
      directive.vm.$on(eventName, function () {
        directive.doCheck()
      })
    }
  },

  doCheck: function (force) {
    var scrollEventTarget = this.scrollEventTarget
    var element = this.el
    var distance = this.distance

    if (force !== true && this.disabled) return //eslint-disable-line
    var viewportScrollTop = getScrollTop(scrollEventTarget)
    var viewportBottom = viewportScrollTop + getVisibleHeight(scrollEventTarget)

    var shouldTrigger = false

    if (scrollEventTarget === element) {
      shouldTrigger = scrollEventTarget.scrollHeight - viewportBottom <= distance
    } else {
      // getElementTop(element) - getElementTop(scrollEventTarget) 父子之间的调试差
      var elementBottom = getElementTop(element) - getElementTop(scrollEventTarget) + element.offsetHeight + viewportScrollTop

      shouldTrigger = viewportBottom + distance >= elementBottom
    }

    if (shouldTrigger && this.expression) {
      this.vm.$get(this.expression)
    }
  },

  bind: function () {
    var directive = this
    var element = this.el

    directive.vm.$on('hook:ready', function () {
      if (isAttached(element)) {
        directive.doBind()
      }
    })

    this.bindTryCount = 0
    // 有可能该元素还没有被挂载到主文档中，所以要不断的尝试是否挂载
    var tryBind = function () {
      if (directive.bindTryCount > 10) return //eslint-disable-line
      directive.bindTryCount++
      if (isAttached(element)) {
        directive.doBind()
      } else {
        setTimeout(tryBind, 50)
      }
    }

    tryBind()
  },

  unbind: function () {
    this.scrollEventTarget.removeEventListener('scroll', this.scrollListener)
  }
}
</script>
