<template>
    <el-col :span="8">
      <div class="add-project-container">
        <div @click="openForm = !openForm" class="cross" :class="{ corner: openForm }">
          <svg>
            <use xlink:href="../../assets/svg/add.svg#add" />
          </svg>
        </div>
        <div class="add-project-container__form" :class="{ show: openForm }">
            <el-form
              :model="form"
              status-icon
              ref="form">
              <!-- :rules="formRules" -->
                <el-form-item label="Create a Project">
                  <el-input
                  type="name"
                  v-model="form.name"
                  placeholder="Project Name"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="addProject(form.name)">
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
    // async createProject (form) {
    //   await this.addProject(form)
    // }
  },
  mounted () {
    console.log('this.project ===> ', this.projects)
    // this.getProjects(this.user._id)
  }
}
</script>

<style src="./AddProject.scss" scoped lang='scss'></style>
