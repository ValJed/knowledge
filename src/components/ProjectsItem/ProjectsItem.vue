<template>
  <el-col :span="8">
    <div @click="getSession" class="item-container">
      <h3>{{ project.name }}</h3>
      <div class="item-content">
        <img src="https://fakeimg.pl/300x150/">
        <p>{{ project.description }}</p>
        <el-button type="primary" @click="accessProject()">
          Access Project
        </el-button>
      </div>
    </div>
  </el-col>
</template>

<script>
import { get } from '../../lib/network'
import { mapState } from 'vuex'

export default {
  name: 'ProjectsItem',
  components: {
  },
  data () {
    return {
      title: 'MY Project item'
    }
  },
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
    getSession () {
      const res = get('session')

      console.log('res ===> ', res)
    },
    accessProject () {
      console.log('this.project ===> ', this.project)
      const projectSlug = this.project.name.toLowerCase().replace(' ', '-')

      console.log('projectSlug ===> ', projectSlug)

      this.$router.push({ path: `/${this.user._id}/${projectSlug}` })
    }
  },
  mounted () {
    console.log('this.project ===> ', this.project)
  }
}
</script>

<style src="./ProjectsItem.scss" scoped lang='scss'></style>
