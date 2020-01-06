const getCurrentBlock = (state) => state.currentProjectId && state.currentBlockId
  ? state
    .projects[state.currentProjectId]
    .blocks[state.currentBlockId]
  : null

export default {
  currentBlock: (state) => getCurrentBlock(state),

  currentPage: (state) => {
    const currentBlock = getCurrentBlock(state)

    return currentBlock && currentBlock.pages && currentBlock.pages.find((page) => page._id === state.currentPageId)
  }
}
