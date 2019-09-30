import { types } from './AuthMutations'

export default {
  async logUser ({ commit, getters, state }, data) {
    try {
      const res = await post('users/log', data)

      if (res.status === 200) {
        const date = new Date()
        date.setDate(date.getDate() + 1)
        document.cookie = `knowledge-token=${res.data.token}; expires=${date}.`

        commit(types.STORE_USER, res.data.user)
        commit(types.STORE_PROJECTS, res.data.projects)
        return true
      } else if (res.status === 401) {
        console.log('Unauthorized access')
        return false
      }
    } catch (err) {
      console.error('error ===> ', err)
      return false
    }
  }
}
