<template>
  <div class="add-field">
    <div
      v-closable="{
        className: 'open'
      }"
      class="add-field-content"
    >
      <span class="add-field-content__title">
        Add a block
      </span>
      <el-form
        rel="form"
        @submit.native.prevent="submitForm($event, form)"
      >
        <el-form-item size="mini">
          <el-input
            v-model="form.name"
            size="mini"
            type="name"
            @keyup.enter="addFiel"
          />
        </el-form-item>
      </el-form>
      <icon
        name="cross"
        :size="1.2"
        color="#fff"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Icon from '@/components/Icon'

export default {
  components: {
    Icon
  },
  data () {
    return {
      form: {
        name: ''
      }
    }
  },
  computed: {
    ...mapState(['currentProject'])
  },
  methods: {
    submitForm (e, form) {
      console.log('e ===> ', e)
      console.log('this.form ===> ', form)
    }
  }
}
</script>
<style src="./AddField.scss" scoped lang="scss" />
