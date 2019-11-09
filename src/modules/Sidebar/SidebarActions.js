export default {
  async addBlock ({ commit, getters, state }, data) {
    data._id = state.currentProjectId

    const res = await post('blocks', data)

    if (res && res.status === 200) {
      commit(types.ADD_BLOCK, res.data)
    }
  },

  async addPage ({ commit, getters, state }, data) {
    data._id = state.currentProjectId

    const res = await post('pages', data)

    if (res && res.status === 200) {
      const payload = {
        blockId: data.blockId,
        data: res.data
      }

      commit(types.ADD_PAGE, payload)
    }
  }
}
