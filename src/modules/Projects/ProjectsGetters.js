export default {
  currentProject: (state) => state.projects
    .find((project) => project._id === state.currentProjectId)
}
