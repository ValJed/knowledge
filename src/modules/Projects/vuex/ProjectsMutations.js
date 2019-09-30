const types = {
  ADD_PROJECT: 'ADD_PROJECT'
}

const mutations = {
  [types.ADD_PROJECT]: (state, payload) => (state.projects.push(payload))
}

export {
  types,
  mutations
}
