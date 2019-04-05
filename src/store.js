import Vue from 'vue'
import Vuex from 'vuex'
import buildContext from './lib/contextBuilder'
import { actions, getters, mutations } from './vuex'

Vue.use(Vuex)

const state = buildContext()

export default new Vuex.Store({
  namespaced: false,
  strict: true,
  state,
  actions,
  mutations,
  getters
})
