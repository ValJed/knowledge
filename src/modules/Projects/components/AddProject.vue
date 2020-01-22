<template>
  <el-col :span="8">
    <div class="add-project-container">
      <div
        class="cross"
        :class="{ corner: openedForm }"
        @click="openedForm = !openedForm"
      >
        <svg>
          <use xlink:href="/sprite.svg#cross" />
        </svg>
      </div>
      <div
        class="add-project-container__form"
        :class="{ show: openedForm }"
      >
        <el-form
          ref="form"
          :model="form"
          status-icon
        >
          <!-- :rules="formRules" -->
          <el-form-item label="Create a Project">
            <el-input
              v-model="form.name"
              type="name"
              placeholder="Project Name"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click.prevent="addProject(form.name)"
            >
              Create project
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </el-col>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex'

export default {
  name: 'ProjectsList',
  components: {
  },
  data () {
    return {
      openedForm: false,
      form: {
        name: ''
      }
    }
  },
  computed: {
    ...mapState(['user', 'projects'])
  },
  methods: {
    ...mapActions(['addProject'])
  }
}
</script>

<style src="./AddProject.scss" scoped lang='scss'></style>
