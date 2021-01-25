import Vue from 'vue'
import ElementUI from 'element-ui';
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'

import { store } from '../src/store/store';


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI)


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
