import Modal from '../../components/Modal'

const modal = {
  install (Vue, options) {
    this.EventBus = new Vue()

    Vue.component('modal', Modal)

    Vue.prototype.$modal = {
      show (params) {
        modal.EventBus.$emit('show', params)
      }
    }
  }
}

export default modal
