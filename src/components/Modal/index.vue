
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
          @submit.native.prevent="actionToTrigger"
        >
          <el-form-item>
            <el-input
              ref="input"
              v-model="form.name"
              size="medium"
              type="name"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="actionToTrigger({ ...form, ...actionParams })"
            >
              Submit
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
    ...mapActions(['addPage', 'addBlock']),
    show (params) {
      this.visible = true
      this.title = params.title
      this.actionParams = params.actionParams || {}

      if (this[params.actionToTrigger]) {
        this.actionToTrigger = this[params.actionToTrigger]
      } else {
        console.log(`No action difined in the modal for ${params.actionToTrigger}`)
      }

      this.$nextTick(() => {
        this.$refs.input.focus()
      })
    },
    close () {
      this.visible = false
      this.form.name = ''
    }
  }
}
</script>

<style src="./Modal.scss" scoped lang='scss'></style>
