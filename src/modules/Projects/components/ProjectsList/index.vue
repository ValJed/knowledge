<template>
  <el-row
    :gutter="20"
    type="flex"
    justify="center"
    class="projects-container"
  >
    <el-col :span="24">
      <h3>{{ title }}</h3>
      <projects-item
        v-for="(project, index) in projects"
        :key="index"
        :project="project"
      />
      <add-project />
    </el-col>
  </el-row>
</template>

<script>
import ProjectsItem from '@/modules/Projects/components/ProjectsItem'
import AddProject from '@/modules/Projects/components/AddProject'

import {
  mapState
  // mapActions
} from 'vuex'

export default {
  components: {
    ProjectsItem,
    AddProject
  },
  data () {
    return {
      title: 'My Projects list'
    }
  },
  // props: {

  // },
  computed: {
    ...mapState(['user', 'projects'])
  },
  mounted () {
    // this.getProjects(this.user._id)
  },
  methods: {
    // ...mapActions(['getProjects'])
  }
}
</script>

<style src="./ProjectsList.scss" scoped lang='scss'></style>
