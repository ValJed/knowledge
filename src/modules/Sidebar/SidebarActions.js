import { post } from '@/lib/network'
import { types } from './SidebarMutations'

const { ADD_BLOCK, ADD_PAGE } = types

export default {
  async addBlock ({ commit, getters, state }, data) {
    data._id = state.currentProjectId

    const res = await post('blocks', data)

    if (res && res.status === 200) {
      commit(ADD_BLOCK, res.data)
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

      commit(ADD_PAGE, payload)
    }
  }
}
