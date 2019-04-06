<template>
  <el-col :span="8">
    <div @click="getSession" class="item-container">
      <h3>{{ title }}</h3>
      <div class="item-content">
        <img src="https://fakeimg.pl/300x150/">
        <p>description</p>
      </div>
    </div>
  </el-col>
</template>

<script>
import { get } from '../../lib/network'

export default {
  name: 'ProjectsItem',
  components: {
  },
  data () {
    return {
      title: 'MY Project item'
    }
  },
  methods: {
    getSession: () => {
      const res = get('session')

      console.log('res ===> ', res)
    }
  }
}
</script>

<style src="./projectsItem.scss" scoped lang='scss'></style>
