<template>
  <el-container id="app">
    <h1>APP TITLE</h1>
    <el-header height="3rem">
      <banner />
    </el-header>
    <router-view></router-view>
  </el-container>
</template>

<script>
import Banner from '@/views/Banner.vue'
// import gql from 'graphql-tag'
// import { dev } from '../config'

export default {
  name: 'App',
  components: {
    Banner
  },
  data () {
    return {}
  }
}
</script>

<style src="./assets/scss/App.scss" lang='scss'></style>
