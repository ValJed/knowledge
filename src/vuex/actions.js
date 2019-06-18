// import uniq from 'lodash/uniq'
import * as types from './mutation-types'
import { post } from '../lib/network'

export default {

  async logUser ({ commit, getters, state }, data) {
    try {
      const res = await post('log-user', data)

      if (res.status === 200) {
        const date = new Date()
        date.setDate(date.getDate() + 1)
        document.cookie = `knowledge-token=${res.data.token}; expires=${date}.`

        console.log('res.data.projects ===> ', res.data.projects)
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
  },

  async addProject ({ commit, getters, state }, projectName) {
    const { _id } = state.user

    const data = {
      _id,
      projectName
    }
    const res = await post('create-project', data)

    if (res.status === 200) {
      commit(types.ADD_PROJECT, res.data)
    }
  },

  async addBlock ({ commit, getters, state }, data) {
    data._id = state.currentProjectId

    const res = await post('add-block', data)

    if (res.status === 200) {
      commit(types.ADD_BLOCK, res.data)
    }
  },

  async addPage ({ commit, getters, state }, data) {
    data._id = state.currentProjectId

    const res = await post('add-page', data)

    if (res.status === 200) {
      commit(types.ADD_PAGE, res.data)
    }
  }

  // toggleField ({ commit, getters, state }, field) {
  //   try {
  //     commit(MutTypes.TOGGLE_LOADING, false)
  //     if (field.displayed && field.enabled) {
  //       // reset selected value of fields following current field
  //       const currentOrder = field.order
  //       Object.values(state.searches[state.currentSearchType].fields).forEach(f => {
  //         if (currentOrder <= f.order) {
  //           f.related && commit(MutTypes.UPDATE_SELECTED_VALUES, { fieldName: f.related.field, selectedValue: null })
  //           commit(MutTypes.UPDATE_SELECTED_VALUES, { fieldName: f.name, selectedValue: null })
  //         }
  //       })
  //       // update state.currentFieldName and remove rendered error if existed
  //       commit(MutTypes.TOGGLE_FIELD, field.name)
  //       commit(MutTypes.TOGGLE_OPTIONAL_STEPS, !field.required)
  //       commit(MutTypes.TOGGLE_RENDERED_ERROR, false)
  //     }
  //   } catch (error) {
  //     commit(MutTypes.TOGGLE_RENDERED_ERROR, true)
  //     logError(error)
  //   }
  // },

}
