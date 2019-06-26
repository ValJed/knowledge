<template>
  <el-container>
    <el-main>
      <el-row
        type="flex"
        justify="center"
        class="projects-container"
      >
        <el-col :span="18">
          <projects-list />
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import ProjectsList from '@/components/Projects/ProjectsList'
import {
  // mapActions,
  mapState
} from 'vuex'

export default {
  name: 'Home',
  components: {
    ProjectsList
  },
  data () {
    return {
      msg: 'MY home'
    }
  },
  computed: {
    ...mapState(['user'])
  },
  created () {
    // this.getProjects()
  },
  methods: {
    // ...mapActions(['getProjects'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./User.scss" scoped lang='scss'></style>
