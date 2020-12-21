import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import plusExtends from '@/utils/plusExtend.js'
Vue.prototype.$Plus = plusExtends

Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
