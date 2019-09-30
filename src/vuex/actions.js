// import uniq from 'lodash/uniq'
import * as types from './mutation-types'
import { post } from '../lib/network'

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
