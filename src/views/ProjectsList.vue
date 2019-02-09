<template>
  <el-row type="flex" justify="center" class="projects-container">
    <el-col :span=24>
      <h3>My Projects list</h3>
    </el-col>
  </el-row>
</template>

<script>
// import ProjectsList from '@/views/ProjectsList.vue'

export default {
  name: 'ProjectsList',
  components: {
    // ProjectsList
  },
  data () {
    return {
      msg: 'MY Project list'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/scss/Home.scss" scoped lang='scss'></style>
