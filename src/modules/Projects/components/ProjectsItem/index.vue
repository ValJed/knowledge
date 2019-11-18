<template>
  <el-col :span="8">
    <el-card
      class="card"
      :body-style="{ padding: '0px' }"
    >
      <!-- <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="image"
      > -->
      <img
        class="image"
        src="https://fakeimg.pl/400x150/"
      >
      <div style="padding: 14px;">
        <h3>{{ project.name }}</h3>
        <div class="bottom clearfix">
          <el-button
            type="text"
            class="button"
            @click="accessProject()"
          >
            Access Project
          </el-button>
        </div>
      </div>
    </el-card>
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
