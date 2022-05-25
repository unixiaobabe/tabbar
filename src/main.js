import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/font/iconfont.css'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://applet-base-api-t.itheima.net/'

Vue.prototype.$axios = axios;

//全局指令
Vue.directive('gfocus',{
  inserted(e){
    e.focus()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
