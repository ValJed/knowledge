import { post, del } from '@/lib/network'
import { types } from './SidebarMutations'

const { ADD_BLOCK, ADD_PAGE, DELETE_BLOCK, DELETE_PAGE } = types

export default {
  async addBlock ({ commit, getters, state }, data) {
    data._id = state.currentProjectId

    const res = await post('api/blocks', data)

    if (res && res.data.success) {
      commit(ADD_BLOCK, res.data.block)
    }
  },

  async deleteBlock ({ commit, getters, state }, data) {
    data.projectId = state.currentProjectId

    const res = await del('api/blocks', data)

    if (res.data.success) {
      commit(DELETE_BLOCK, res.data.blockId)

      return { success: true }
    }

    return { success: false }
  },

  async addPage ({ commit, getters, state }, data) {
    data.projectId = state.currentProjectId

    console.log('data ===> ', data)

    const res = await post('api/blocks/pages', data)

    if (res && res.data.success) {
      const payload = {
        blockId: data.blockId,
        data: res.data.page
      }

      commit(ADD_PAGE, payload)
      return { success: true }
    }

    return { success: false }
  },

  async deletePage ({ commit, getters, state }, data) {
    data.projectId = state.currentProjectId

    const res = await del('api/blocks/pages', data)

    console.log('res ===> ', res)

    if (res.data.success) {
      commit(DELETE_PAGE, data)
    }
  }
}
