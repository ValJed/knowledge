import { types } from './ProjectsMutations'
import { post, del } from '@/lib/network'

const { ADD_PROJECT, DELETE_PROJECT } = types

export default {
  async addProject ({ commit, getters, state }, projectName) {
    const { _id } = state.user

    const data = {
      _id,
      projectName
    }

    const res = await post('api/projects', data)

    if (res.data.success) {
      commit(ADD_PROJECT, res.data.project)
    }
  },

  async deleteProject ({ commit, getters, state }, projectId) {
    const data = {
      projectId,
      userId: state.user._id
    }

    const res = await del('api/projects', data)

    if (res.data.success) {
      commit(DELETE_PROJECT, data.projectId)

      return {
        success: true
      }
    }
  }
}
