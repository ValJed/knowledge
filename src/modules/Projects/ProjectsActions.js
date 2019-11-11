import { types } from './ProjectsMutations'
import { post } from '@/lib/network'

const { ADD_PROJECT } = types

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
  }
}
