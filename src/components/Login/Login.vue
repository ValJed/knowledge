<template>
  <el-col :span=5>
    <h3>Log to your account</h3>
    <el-form action=""  justify="start">
      <el-form-item label="Email">
        <el-input type="name" v-model="form.email" placeholder="Name"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password" v-model="form.password" placeholder="Email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">
          Submit
        </el-button>
      </el-form-item>
    </el-form>
  </el-col>
</template>

<script>
// import ProjectsList from '@/components/ProjectsList/ProjectsList.vue'

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Login.scss" scoped lang='scss'></style>
