import Vue from 'vue'
import Vuex from 'vuex'

import Ping from './modules/ping'

Vue.use(Vuex)
Vue.config.debug = true

export default new Vuex.Store({
  modules: {
    Ping
  }
})
