export const types = {
  STORE_USER: 'STORE_USER',
  STORE_PROJECTS: 'STORE_PROJECTS'
}

export default {
  [types.STORE_USER]: (state, payload) => (state.user = payload),
  [types.STORE_PROJECTS]: (state, payload) => (state.projects = payload)
}
