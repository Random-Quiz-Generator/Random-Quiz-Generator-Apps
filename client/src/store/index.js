import Vue from 'vue'
import Vuex from 'vuex'
import io from 'socket.io-client'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    socket: null,
    players: [],
    isPlaying: false,
    question: {}
  },
  mutations: {
    START_CONNECTION (state) {
      state.socket = io('http://localhost:3000')
    },
    UPDATE_PLAYERS (state, payload) {
      console.log(payload, 'ini payload')
      state.players = payload
    },
    SET_PLAYING (state, payload) {
      state.isPlaying = payload
    },
    SET_QUESTION (state, payload) {
      state.question = payload
      console.log(state.question, 'question')
    },
    END_CONNECTION (state) {
      state.socket.emit('leave')
      state.socket = null
    }
  },
  actions: {
  },
  modules: {
  }
})
