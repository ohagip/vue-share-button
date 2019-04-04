import Vue from 'vue'
import App from './App.vue'
import VueShareButton from './vue-share-button'

Vue.config.productionTip = false

Vue.use(VueShareButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
