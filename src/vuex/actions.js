// import uniq from 'lodash/uniq'
import * as types from './mutation-types'

export default {

  storeUser ({ commit, getters, state }, user) {
    console.log('user ===> ', user)
    commit(types.STORE_USER, user)
  },

  getProjects ({ commit, getters, state }, userId) {
    console.log('=============> HERE <================')
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
