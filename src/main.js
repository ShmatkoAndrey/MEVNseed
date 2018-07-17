import Vue from 'vue'
import App from './App'
import router from './router'

import Vuex from 'vuex';
Vue.use(Vuex);

Vue.config.productionTip = false

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.emulateJSON = true
const http=Vue.http
export default http

import store from './store/store'

require('./router.actions')

new Vue({
  el: '#app',
	router,
	store,
  template: '<App/>',
  components: { App }
})
