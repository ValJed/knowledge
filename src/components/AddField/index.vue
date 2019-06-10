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
        @submit.native.prevent="addField(form.name)"
      >
        <el-form-item size="mini">
          <el-input
            v-model="form.name"
            size="mini"
            type="name"
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
import {
  mapActions,
  mapGetters
} from 'vuex'
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
    ...mapGetters(['currentProject'])
  },
  methods: {
    ...mapActions(['addField'])
  }
}
</script>
<style src="./AddField.scss" scoped lang="scss" />
