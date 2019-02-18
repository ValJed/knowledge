import Vue from 'vue'
import Vuex from 'vuex'
import buildContext from './utils/contextBuilder'

Vue.use(Vuex)

const { state } = buildContext()

console.log('buildContext ===> ', state)

export default new Vuex.Store({
  state,
  mutations: {

  },
  actions: {

  }
})
