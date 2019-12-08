<template>
  <el-row
    :gutter="20"
    type="flex"
    justify="center"
    class="projects-container"
  >
    <el-col :span="24">
      <h3>
        {{ title }}
      </h3>
      <projects-item
        v-for="(project, index) in getProjects"
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
  mapState,
  mapGetters
} from 'vuex'

export default {
  components: {
    ProjectsItem,
    AddProject
  },
  data () {
    return {
      title: 'My Projects list',
      projectsViews: []
    }
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['getProjects'])
  }
}
</script>

<style src="./ProjectsList.scss" scoped lang='scss'></style>
