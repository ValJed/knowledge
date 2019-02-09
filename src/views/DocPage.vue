<template>
  <el-row class="docPage">
    <el-col :span=24>
      <h3>My doc page </h3>
    </el-col>
  </el-row>
</template>

<script>

export default {
  name: 'DocPage',
  components: {
  },
  data () {
    return {
      msg: 'MESSAGE COOL'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/scss/Sidebar.scss" scoped lang='scss'></style>
