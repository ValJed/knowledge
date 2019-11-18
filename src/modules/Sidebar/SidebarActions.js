import { post, del } from '@/lib/network'
import { types } from './SidebarMutations'

const { ADD_BLOCK, ADD_PAGE, DELETE_BLOCK } = types

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

    console.log('res ===> ', res)

    if (res.data.success) {
      console.log('=============> HERE <================')
      commit(DELETE_BLOCK, res.data.blockId)
    }
  },

  async addPage ({ commit, getters, state }, data) {
    data._id = state.currentProjectId

    console.log('data ===> ', data)

    const res = await post('api/blocks/pages', data)

    if (res && res.data.success) {
      const payload = {
        blockId: data.blockId,
        data: res.data.page
      }

      console.log('payload ===> ', payload)

      commit(ADD_PAGE, payload)
    }
  },

  async deletePage ({commit, getters, state}, data) {
    console.log('data ===> ', data)
  }
}
