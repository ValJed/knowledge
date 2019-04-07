<template>
  <el-col :span="8">
    <div @click="getSession" class="item-container">
      <h3>{{ project.name }}</h3>
      <div class="item-content">
        <img src="https://fakeimg.pl/300x150/">
        <p>{{ project.description }}</p>
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
  props: {
    project: {
      type: Object,
      required: true
      // _id: {
      //   type: String
      // },
      // name: {
      //   type: String
      // },
      // description: {
      //   type: String
      // },
      // fields: {
      //   type: Object
      // },
      // img: {
      //   type: String
      // },
      // owners: {
      //   type: Array
      // }
    }
  },
  methods: {
    getSession: () => {
      const res = get('session')

      console.log('res ===> ', res)
    }
  },
  mounted () {
    console.log('this.project ===> ', this.project)
  }
}
</script>

<style src="./ProjectsItem.scss" scoped lang='scss'></style>
