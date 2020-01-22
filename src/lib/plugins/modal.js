import Modal from '../../modules/Common/components/Modal.vue'

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
