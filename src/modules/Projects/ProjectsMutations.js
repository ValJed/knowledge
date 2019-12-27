export const types = {
  ADD_PROJECT: 'ADD_PROJECT',
  SET_CURRENT_PROJECT_ID: 'SET_CURRENT_PROJECT_ID',
  DELETE_PROJECT: 'DELETE_PROJECT'
}

export default {
  [types.ADD_PROJECT]: (state, payload) => (state.projects = { ...state.projects, [payload._id]: payload }),
  [types.SET_CURRENT_PROJECT_ID]: (state, payload) => (state.currentProjectId = payload),
  [types.DELETE_PROJECT]: (state, projectId) => {
    const newProjects = { ...state.projects }
    delete newProjects[projectId]

    state.projects = newProjects
  }
}
