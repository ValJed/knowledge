import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import buildContext from './lib/contextBuilder'
import { actions, getters, mutations } from '@/modules'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage
})

const state = buildContext()

export default new Vuex.Store({
  namespaced: false,
  strict: true,
  state,
  actions,
  mutations,
  getters,
  plugins: [vuexLocalStorage.plugin]
})
