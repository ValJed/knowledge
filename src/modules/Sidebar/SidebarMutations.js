
export const types = {
  ADD_BLOCK: 'ADD_BLOCK',
  ADD_PAGE: 'ADD_PAGE',
  DELETE_BLOCK: 'DELETE_BLOCK'
}

export default {
  [types.ADD_BLOCK]: (state, payload) => state.projects
    .find((project) => project._id === state.currentProjectId).blocks.push(payload),

  [types.ADD_PAGE]: (state, payload) => state.projects
    .find((project) => project._id === state.currentProjectId).blocks // Getting current project blocks
    .find((block) => block._id === payload.blockId).pages // Getting current block pages
    .push(payload.data),

  [types.DELETE_BLOCK]: (state, blockId) => {
    const index = state.projects
      .find((project) => project._id === state.currentProjectId).blocks
      .findIndex((block) => block.id === blockId)

    return state.projects
      .find((project) => project._id === state.currentProjectId).blocks
      .splice(index, 1)
  }
}
