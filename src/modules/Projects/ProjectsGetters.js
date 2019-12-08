export default {
  currentProject: (state) => state.projects[state.currentProjectId],
  getProjects: (state) => Object.values(state.projects)
}
