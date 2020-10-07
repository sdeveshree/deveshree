import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './styles/app.scss'

Vue.config.productionTip = false
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
AOS.init()

new Vue({
  render: h => h(App),
  created: function () {
    window.addEventListener('mousemove', this.move)
  },
  methods: {
    move (e) {
      const pointer = document.querySelector('.pointer')
      pointer.setAttribute('style', `left: ${e.pageX}px; top: ${e.pageY}px`)
    }
  }
}).$mount('#app')
