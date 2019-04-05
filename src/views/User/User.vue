<template>
  <el-container>
    <el-main>
      <el-row type="flex" justify="center" class="projects-container">
        <el-col :span='18'>
          <projects-list></projects-list>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import ProjectsList from '@/components/ProjectsList/ProjectsList.vue'
import { mapActions, mapState } from 'vuex'

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
  methods: {
    ...mapActions(['getProjects'])
  },
  created () {
    console.log('this ===> ', this)
    this.getProjects()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./User.scss" scoped lang='scss'></style>
