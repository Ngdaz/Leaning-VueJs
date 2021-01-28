import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Home from '../views/Home.vue'                                                                                      
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)




const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
