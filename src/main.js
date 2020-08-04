import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(ElementUI, {locale});
import store from './store/store'


Vue.config.productionTip = false


import axios from 'axios'
Vue.prototype.$axios = axios








/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  render: h => h(App)
})
