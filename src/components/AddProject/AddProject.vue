<template>
    <el-col :span="8">
      <div @click="openForm = !openForm" class="add-project-container">
        <div v-if="!openForm" class="add-project-content">
          <svg>
            <use xlink:href="../../assets/svg/add.svg#add" />
          </svg>
        </div>
        <div v-else class="add-project-content">
            <el-form
              :model="form"
              status-icon
              :rules="formRules"
              ref="form">
                <el-form-item label="Create a Project">
                  <el-input
                  type="name"
                  v-model="form.name"
                  placeholder="Project Name"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="AddProject(form)">
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
      openForm: false,
      form: {
        name: ''
      }
    }
  },
  // props: {

  // },
  computed: {
    ...mapState(['user', 'projects'])
  },
  methods: {
    ...mapActions(['addProject'])
  },
  mounted () {
    console.log('this.project ===> ', this.projects)
    // this.getProjects(this.user._id)
  }
}
</script>

<style src="./AddProject.scss" scoped lang='scss'></style>
