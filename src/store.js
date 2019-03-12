import Vue from 'vue'
import Vuex from 'vuex'
import buildContext from './lib/contextBuilder'

Vue.use(Vuex)

const { state } = buildContext()

export default new Vuex.Store({
  state,
  mutations: {

  },
  actions: {

  }
})
