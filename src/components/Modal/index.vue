
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
          @submit.native.prevent="actionToTrigger(form)"
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
              @click="actionToTrigger(form)"
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

  mounted () {
    this.$nextTick(() => {
      console.log(this.$refs)
    })
  },

  methods: {
    ...mapActions(['addPage']),
    show (params) {
      this.visible = true
      this.title = params.title
      // this.actionToTrigger = params.actionToTrigger
      this.actionToTrigger = this[params.actionToTrigger]

      this.$nextTick(() => {
        console.log('this ===> ', this['addPage'])
        this.$refs.input.focus()
      })
    },
    close () {
      this.visible = false
      this.form.name = ''
    },
    submitForm () {

    }
  }
}
</script>

<style src="./Modal.scss" scoped lang='scss'></style>
