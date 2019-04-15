// import uniq from 'lodash/uniq'
import * as types from './mutation-types'
import { post } from '../lib/network'

export default {

  async logUser ({ commit, getters, state }, data) {
    try {
      const res = await post('log-user', data)

      console.log('res ===> ', res)
      if (res.status === 200) {
        const date = new Date()
        date.setDate(date.getDate() + 1)
        document.cookie = `token=${res.data.token}; expires=${date}.`

        commit(types.STORE_USER, res.data.user)
        commit(types.STORE_PROJECTS, res.data.projects)
      } else if (res.status === 401) {
        console.log('Unhautorized access')
      }
    } catch (err) {
      console.error('error ===> ', err)
    }
  },

  async addProject ({ commit, getters, state }, projectName) {
    const { _id } = state.user
    const data = {
      _id,
      projectName
    }
    const res = await post('create-project', data)

    console.log('res ===> ', res)
    // commit(types.STORE_PROJECTS, )
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

  // async toggleSearchStarted ({ commit, dispatch, state }) {
  //   commit(MutTypes.TOGGLE_LOADING, true)
  //   const { searches, currentSearchType, currentFieldName } = state
  //   getFieldValuesIfNeeded(searches, currentSearchType, currentFieldName) && await dispatch('getFieldValues', currentFieldName)
  //   commit(MutTypes.TOGGLE_LOADING, false)
  //   commit(MutTypes.TOGGLE_SEARCH_STARTED)
  // },

  // async getFieldValues ({ commit, dispatch, getters, state }, fieldName) {
  //   try {
  //     const searchType = state.currentSearchType
  //     const fields = getters.getFieldsBySearchType

  //     // call API to get values of selected field
  //     const values = await dispatch('tsuLogic/getFieldValues', { searchType, fieldName, fields }, { root: true })
  //     if (!values[fieldName].values.length) {
  //       throw new Error(`The API return no data for ${fieldName}`)
  //     }

  //     commit(MutTypes.UPDATE_FIELDS_VALUES, values)
  //   } catch (error) {
  //     commit(MutTypes.TOGGLE_RENDERED_ERROR, true)
  //     logError(error)
  //   }
  // }

}
