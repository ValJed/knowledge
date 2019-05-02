<template>
  <el-container id="app">
    <el-header height="3rem">
      <banner />
    </el-header>
    <router-view />
  </el-container>
</template>

<script>
import Banner from '@/components/Banner'
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
