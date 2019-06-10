
// import sortBy from 'lodash/sortBy'
// const { computeSpecifications } = require('dgad-base/lib/modules/dgad-utils/src/utils')

// const getCurrentProject = (state) => state.projects.find((project) => project._id === state.currentProject)

export default {
  currentProject: (state) => state.projects
    .find((project) => project._id === state.currentProjectId)
}
