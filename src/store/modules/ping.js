import api from './../api'

let mutations = {
  PING: "PING"
}

let Ping = {
  state: {
    ping: ''
  },
  actions: {
    PingIt({ commit }) {
      api.Ping.pingIt()
        .then(result => {
          commit(mutations.PING, result)
        })
    }
  },
  mutations: {
    [mutations.PING](state, result) {
      state.ping = result;
    }
  },
  getters: {
    ping(state) {
      return state.ping
    },
  }
}

export default Ping;