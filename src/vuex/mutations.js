// import Vue from 'vue'
import * as types from './mutation-types'

export default {
  [types.STORE_USER]: (state, payload) => (state.user = payload),
  [types.STORE_PROJECTS]: (state, payload) => (state.projects = payload),
  [types.ADD_PROJECT]: (state, payload) => (state.projects.push(payload)),
  [types.SET_CURRENT_PROJECT]: (state, payload) => (state.currentProject = payload)
  // [MutTypes.TOGGLE_SEARCH_STARTED]: (state) => (state.hasSearchStarted = !state.hasSearchStarted),
  // [MutTypes.TOGGLE_SEARCH_TYPE]: (state, payload) => (state.currentSearchType = payload),

}
