<template>
  <el-row :gutter="20" type="flex" justify="center" class="projects-container">
    <el-col :span=24>
      <h3>{{ title }}</h3>
      <projects-item />
      <projects-item />
      <projects-item />
    </el-col>
  </el-row>
</template>

<script>
import ProjectsItem from '@/components/ProjectsItem.vue'

export default {
  name: 'ProjectsList',
  components: {
    ProjectsItem
  },
  data () {
    return {
      title: 'MY Project list'
    }
  }
}
</script>

<style src="../assets/scss/projectsList.scss" scoped lang='scss'></style>
