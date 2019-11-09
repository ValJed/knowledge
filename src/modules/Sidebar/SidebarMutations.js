
export const types = {
  ADD_BLOCK: 'ADD_BLOCK',
  ADD_PAGE: 'ADD_PAGE'
}

export default {
  [types.ADD_BLOCK]: (state, payload) => (state.projects.find((project) => project._id === state.currentProjectId).blocks.push(payload)),
  [types.ADD_PAGE]: (state, payload) => state.projects
    .find((project) => project._id === state.currentProjectId).blocks // Getting current project blocks
    .find((block) => block._id === payload.blockId).pages // Getting current block pages
    .push(payload.data)
}
