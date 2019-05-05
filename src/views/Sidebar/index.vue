<template>
  <el-row class="sidebar">
    <el-col :span="24">
      <h3>{{ currentProject.name }}</h3>
      <sidebar-nav />
    </el-col>
  </el-row>
</template>

<script>
// import SidebarNav from '@/views/SidebarNav.vue'
import SidebarNav from '@/components/SidebarNav'
import { mapState } from 'vuex'

export default {
  name: 'Sidebar',
  components: {
    SidebarNav
  },
  data () {
    return {
      msg: 'MESSAGE COOL'
    }
  },
  computed: {
    ...mapState(['currentProject'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src='./Sidebar.scss' scoped lang='scss'></style>
