
export const types = {
  ADD_BLOCK: 'ADD_BLOCK',
  ADD_PAGE: 'ADD_PAGE',
  DELETE_BLOCK: 'DELETE_BLOCK',
  DELETE_PAGE: 'DELETE_PAGE'
}

export default {
  [types.ADD_BLOCK]: (state, block) => {
    const currentProject = state.projects[state.currentProjectId]

    currentProject.blocks = {
      ...currentProject.blocks,
      [block._id]: block
    }
  },

  [types.ADD_PAGE]: (state, payload) => {
    const currentProjectBlock = state.projects[state.currentProjectId].blocks[payload.blockID]

    currentProjectBlock.pages = {
      ...currentProjectBlock.pages,
      [payload.data._id]: payload
    }
  },

  // .find((project) => project._id === state.currentProjectId).blocks // Getting current project blocks
  // .find((block) => block._id === payload.blockId).pages // Getting current block pages
  // .push(payload.data),

  [types.DELETE_BLOCK]: (state, blockId) => {
    const index = state.projects
      .find((project) => project._id === state.currentProjectId).blocks
      .findIndex((block) => block.id === blockId)

    return state.projects
      .find((project) => project._id === state.currentProjectId).blocks
      .splice(index, 1)
  }

  // [types.DELETE_PAGE]: (state, { projectId, blockId, pageId }) => {
  //   const index = state.projects
  //     .find((project) => project._id === state.currentProjectId).blocks
  //     .find((page) => block._id)
  // }
}
