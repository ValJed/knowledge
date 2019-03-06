<template>
  <el-col :span=8>
    <div class="item-container">
      <h3>Project name</h3>
    </div>
  </el-col>
</template>

<script>
export default {
  name: 'ProjectsItem',
  components: {
  },
  data () {
    return {
      title: 'MY Project item'
    }
  }
}
</script>

<style src="./projectsItem.scss" scoped lang='scss'></style>
