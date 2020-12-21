import Vue from 'vue'
import App from './App.vue'
import plusExtends from '@/utils/plusExtend.js'
Vue.config.productionTip = false
Vue.prototype.$Plus = plusExtends
new Vue({
  render: h => h(App),
}).$mount('#app')
