<template>
  <el-col :span=8 >
    <div class="item-container">
      <h3>{{ title }}</h3>
      <div class="item-content">
        <img src="https://fakeimg.pl/300x150/">
        <p>description</p>
      </div>
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
