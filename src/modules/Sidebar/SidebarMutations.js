
export const types = {
  ADD_BLOCK: 'ADD_BLOCK',
  ADD_PAGE: 'ADD_PAGE',
  DELETE_BLOCK: 'DELETE_BLOCK',
  DELETE_PAGE: 'DELETE_PAGE',
  SET_CURRENT_BLOCK: 'SET_CURRENT_BLOCK',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE'
}

export default {
  [types.ADD_BLOCK]: (state, block) => {
    const currentProject = state.projects[state.currentProjectId]

    state.projects = {
      ...state.projects,
      [currentProject._id]: {
        ...currentProject,
        blocks: {
          ...currentProject.blocks,
          [block._id]: block
        }
      }
    }
  },

  [types.ADD_PAGE]: (state, { blockId, data }) => {
    const currentProject = state.projects[state.currentProjectId]

    state.projects = {
      ...state.projects,
      [currentProject._id]: {
        ...currentProject,
        blocks: {
          ...currentProject.blocks,
          [blockId]: {
            ...currentProject.blocks[blockId],
            pages: [
              ...currentProject.blocks[blockId].pages,
              data
            ]
          }
        }
      }
    }
  },

  [types.DELETE_BLOCK]: (state, blockId) => {
    console.log('blockId ===> ', blockId)
    const currentProject = state.projects[state.currentProjectId]

    const newBlocks = { ...currentProject.blocks }

    delete newBlocks[blockId]

    state.projects = {
      ...state.projects,
      [currentProject._id]: {
        ...currentProject,
        blocks: newBlocks
      }
    }
  },

  [types.DELETE_PAGE]: (state, { projectId, blockId, pageName }) => {
    const currentProject = state.projects[state.currentProjectId]

    const newPages = currentProject.blocks[blockId].pages.filter((page) => page.name !== pageName)

    state.projects = {
      ...state.projects,
      [currentProject._id]: {
        ...currentProject,
        blocks: {
          ...currentProject.blocks,
          [blockId]: {
            ...currentProject.blocks[blockId],
            pages: newPages
          }
        }
      }
    }
  },

  [types.SET_CURRENT_BLOCK]: (state, blockId) => {
    state.currentBlockId = blockId
  },

  [types.SET_CURRENT_PAGE]: (state, pageId) => {
    state.currentPageId = pageId
  }
}
