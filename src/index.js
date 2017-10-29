function plugin(Vue, opts) {
  let timer, duration, startTime, performance, record

  startTime = new Date().getTime()
  record = opts.record || noop
  duration = opts.duration || 1000
  
  console.warn('use mixin mounted hooks')

  Vue.mixin({
    mounted: function() {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(function() {
        performance = new Date().getTime() - startTime - duration
        if (typeof record === 'function') {
          record(performance)
        }
      }, duration)
    }
  })
}

function noop() { }

export default plugin
