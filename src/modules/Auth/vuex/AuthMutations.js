const types = {
  STORE_USER: 'STORE_USER',
  STORE_PROJECTS: 'STORE_PROJECTS'
}

const mutations = {
  [types.STORE_USER]: (state, payload) => (state.user = payload),
  [types.STORE_PROJECTS]: (state, payload) => (state.projects = payload)
}

export {
  types,
  mutations
}
