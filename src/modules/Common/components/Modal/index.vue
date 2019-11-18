
<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="modal-container"
      @click="close"
    >
      <div
        class="modal"
        @click.stop
      >
        <h3>{{ title }}</h3>
        <el-form
          rel="form"
          @submit.native.prevent="submitForm({ ...form, ...actionParams })"
        >
          <el-form-item>
            <el-input
              v-show="showInput"
              ref="input"
              v-model="form.name"
              size="medium"
              type="name"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="submitForm({ ...form, ...actionParams })"
            >
              Ok
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </transition>
</template>

<script>
import Modal from '@/lib/plugins/modal'
import { mapActions } from 'vuex'

export default {
  props: {},
  data () {
    return {
      visible: false,
      showInput: true,
      title: '',
      content: '',
      actionToTrigger: '',
      actionParams: {},
      form: {
        name: ''
      }
    }
  },

  beforeMount () {
    // here we need to listen for emited events
    // we declared those events inside our plugin
    Modal.EventBus.$on('show', (params) => {
      this.show(params)
    })
  },

  methods: {
    ...mapActions(['addBlock', 'deleteBlock', 'addPage']),
    show (params) {
      this.visible = true
      this.title = params.title
      this.actionParams = params.actionParams || {}
      this.showInput = params.actionToTrigger !== 'deleteBlock'

      if (this[params.actionToTrigger]) {
        this.actionToTrigger = this[params.actionToTrigger]
      } else {
        console.log(`No action defined in the modal for ${params.actionToTrigger}`)
      }

      if (this.showInput) {
        this.$nextTick(() => {
          this.$refs.input.focus()
        })
      }
    },
    close () {
      this.visible = false
      this.form.name = ''
    },
    submitForm (params) {
      this.actionToTrigger(params)
      this.close()
    }
  }
}
</script>

<style src="./Modal.scss" scoped lang='scss'></style>
