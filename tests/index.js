import Vue from 'vue'
import plugin from '../src'
import { expect } from 'chai'


let timing
beforeEach(() => {
  function record(diffTime) {
    timing = diffTime
  }
  Vue.use(plugin, {
    record
  })
})
describe('vue-mount-time', () => {
  it('mount time', (done) => {
    let vm = new Vue({
      render(h) {
        return (
          <div>hello world</div>
        )
      }
    }).$mount()
    setTimeout(() => {
      expect(timing > 0).to.be
      done()
    }, 1000)
  })
})
