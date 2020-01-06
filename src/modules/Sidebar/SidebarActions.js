import { post, del } from '@/lib/network'
import { types } from './SidebarMutations'

const {
  ADD_BLOCK,
  ADD_PAGE,
  DELETE_BLOCK,
  DELETE_PAGE,
  SET_CURRENT_BLOCK,
  SET_CURRENT_PAGE } = types

export default {
  async addBlock ({ commit, getters, state }, data) {
    data.projectId = state.currentProjectId

    const res = await post('api/blocks', data)

    if (res && res.data.success) {
      commit(ADD_BLOCK, res.data.block)
      return {
        success: true
      }
    }

    return {
      success: false
    }
  },

  async deleteBlock ({ commit, getters, state }, data) {
    data.projectId = state.currentProjectId

    const res = await del('api/blocks', data)

    if (res.data.success) {
      commit(DELETE_BLOCK, data.blockId)

      return { success: true }
    }

    return { success: false }
  },

  async addPage ({ commit, getters, state }, data) {
    data.projectId = state.currentProjectId

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

    if (res.data.success) {
      commit(DELETE_PAGE, data)
      return {
        success: true
      }
    }

    return {
      success: false
    }
  },

  setCurrentBlock ({ commit, getters, state }, blockId) {
    commit(SET_CURRENT_BLOCK, blockId)
  },

  setCurrentPage ({ commit, getters, state }, { blockId, pageId }) {
    commit(SET_CURRENT_BLOCK, blockId)
    commit(SET_CURRENT_PAGE, pageId)
  }
}
