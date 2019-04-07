<template>
  <el-row :gutter="20" type="flex" justify="center" class="projects-container">
    <el-col :span="24">
      <h3>{{ title }}</h3>
        <projects-item
          v-for="project in projects"
          :key="project._id"
          :project="project" />
        <add-project />
    </el-col>
  </el-row>
</template>

<script>
import ProjectsItem from '@/components/ProjectsItem/ProjectsItem.vue'
import AddProject from '@/components/AddProject/AddProject.vue'

import {
  mapState
  // mapActions
} from 'vuex'

export default {
  name: 'ProjectsList',
  components: {
    ProjectsItem,
    AddProject
  },
  data () {
    return {
      title: 'MY Project list'
    }
  },
  // props: {

  // },
  computed: {
    ...mapState(['user', 'projects'])
  },
  methods: {
    // ...mapActions(['getProjects'])
  },
  mounted () {
    console.log('this.project ===> ', this.projects)
    // this.getProjects(this.user._id)
  }
}
</script>

<style src="./ProjectsList.scss" scoped lang='scss'></style>
