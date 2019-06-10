<template>
  <div class="sidebar">
    <h3>{{ currentProject.name }}</h3>
    <sidebar-nav />
  </div>
</template>

<script>
// import SidebarNav from '@/views/SidebarNav.vue'
import SidebarNav from '@/components/SidebarNav'
import { mapGetters } from 'vuex'

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
    ...mapGetters(['currentProject'])
    // ...mapState(['currentProject'])
  },
  mounted () {
    console.log('=============> HERE <================')
    console.log('this.getCurrentProject ===> ', this.currentProject)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src='./Sidebar.scss' scoped lang='scss'></style>
