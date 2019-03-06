<template>
  <el-row class="sidebar">
    <el-col :span=24>
      <h3>My sidebar</h3>
      <sidebar-nav></sidebar-nav>
    </el-col>
  </el-row>
</template>

<script>
import SidebarNav from '@/views/SidebarNav.vue'

export default {
  name: 'Sidebar',
  components: {
    SidebarNav
  },
  data () {
    return {
      msg: 'MESSAGE COOL'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src='./Sidebar.scss' scoped lang='scss'></style>
