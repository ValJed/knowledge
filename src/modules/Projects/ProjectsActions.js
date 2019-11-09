import { types } from './ProjectsMutations'

export default {
  async addProject ({ commit, getters, state }, projectName) {
    const { _id } = state.user

    const data = {
      _id,
      projectName
    }
    const res = await post('projects', data)

    if (res.status === 200) {
      commit(types.ADD_PROJECT, res.data)
    }
  }
}
