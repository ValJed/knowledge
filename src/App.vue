<template>
  <el-container id="app">
    <el-header height="3rem">
      <banner />
    </el-header>
    <router-view />
    <modal />
  </el-container>
</template>

<script>
import Banner from '@/modules/Common/components/Banner'
import Modal from '@/modules/Common/components/Modal'
// import gql from 'graphql-tag'
// import { dev } from '../config'

export default {
  name: 'App',
  components: {
    Banner,
    Modal
  },
  data () {
    return {}
  }
}
</script>

<style src="./assets/scss/App.scss" lang='scss'></style>
