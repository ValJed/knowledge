<template>
  <el-container>
    <el-aside>
      <sidebar />
    </el-aside>
    <el-main>
      <doc-page />
    </el-main>
  </el-container>
</template>

<script>
import Sidebar from '@/views/Sidebar'
import DocPage from '@/views/DocPage'
// import { mapState } from 'vuex'

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
  },
  computed: {
    // ...mapState(['user, projects', 'currentProject'])
    // ...mapGetters(['getCurrentProject'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Project.scss" scoped lang='scss'></style>
