// import Vue from 'vue'
import * as types from './mutation-types'

export default {
  [types.STORE_USER]: (state, payload) => (state.user = payload),
  [types.STORE_PROJECTS]: (state, payload) => (state.projects = payload)
  // [MutTypes.TOGGLE_SEARCH_STARTED]: (state) => (state.hasSearchStarted = !state.hasSearchStarted),
  // [MutTypes.TOGGLE_SEARCH_TYPE]: (state, payload) => (state.currentSearchType = payload),

}
