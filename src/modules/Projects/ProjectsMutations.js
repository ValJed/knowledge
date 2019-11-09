export const types = {
  ADD_PROJECT: 'ADD_PROJECT',
  SET_CURRENT_PROJECT_ID: 'SET_CURRENT_PROJECT_ID'
}

export default {
  [types.ADD_PROJECT]: (state, payload) => (state.projects.push(payload)),
  [types.SET_CURRENT_PROJECT_ID]: (state, payload) => (state.currentProjectId = payload)
}
