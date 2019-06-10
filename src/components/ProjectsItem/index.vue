<template>
  <el-col :span="8">
    <div class="item-container">
      <h3>{{ project.name }}</h3>
      <div class="item-content">
        <img src="https://fakeimg.pl/300x150/">
        <p>{{ project.description }}</p>
        <el-button
          type="primary"
          @click="accessProject()"
        >
          Access Project
        </el-button>
      </div>
    </div>
  </el-col>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'ProjectsItem',
  components: {
  },
  // data () {
  //   return {
  //     title: 'MY Project item'
  //   }
  // },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    ...mapMutations({
      setCurrentProjectId: 'SET_CURRENT_PROJECT_ID'
    }),
    accessProject () {
      const projectSlug = this.project.name.toLowerCase().replace(' ', '-')

      this.setCurrentProjectId(this.project._id)
      this.$router.push({ path: `/${this.user._id}/${projectSlug}` })
    }
  }
}
</script>

<style src="./ProjectsItem.scss" scoped lang='scss'></style>
