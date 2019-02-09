<template>
  <el-container>
    <el-aside>
      <sidebar />
    </el-aside>
    <el-main>
      <doc-page></doc-page>
    </el-main>
  </el-container>
</template>

<script>
import Sidebar from '@/views/Sidebar.vue'
import DocPage from '@/views/DocPage.vue'

export default {
  name: 'Project',
  components: {
    Sidebar,
    DocPage
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
