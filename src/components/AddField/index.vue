<template>
  <div class="add-field">
    <div
      v-closable="{
        className: 'open'
      }"
      class="add-field-content"
    >
      <icon
        name="cross"
        :size="1.2"
        color="#fff"
      />
      <span>Add a block</span>
      <el-form
        class="add-field-content__form"
        rel="form"
      >
        <el-form-item size="mini">
          <el-input
            v-model="form.name"
            class="toto"
            type="name"
          />
        </el-form-item>
      </el-form>
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
  }
}
</script>
<style src="./AddField.scss" scoped lang="scss" />
