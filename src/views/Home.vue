<template>
  <el-container>
    <el-main>
      <el-row type="flex" justify="center" class="projects-container">
        <el-col :span=18>
          <projects-list></projects-list>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import ProjectsList from '@/components/ProjectsList.vue'

export default {
  name: 'Home',
  components: {
    ProjectsList
  },
  data () {
    return {
      msg: 'MY home'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/scss/Home.scss" scoped lang='scss'></style>
