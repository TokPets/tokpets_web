import Vue from 'vue'
import vLoaderComponent from '@/components/common/loading/loading.component.vue'

describe('vLoader.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(vLoaderComponent)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent).to.equal('Welcome to Your Vue.js PWA')
  })
})
