<template>
  <el-col :span=5>
    <h3>Log to your account</h3>
    <el-form
    :model="form"
    status-icon
    :rules="formRules"
    ref="form">
      <el-form-item label="Email" prop="email">
        <el-input
        type="email"
        v-model="form.email"
        placeholder="Email"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input
        type="password"
        v-model="form.password"
        placeholder="Password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(form)">
          Submit
        </el-button>
      </el-form-item>
    </el-form>
  </el-col>
</template>

<script>
// import ProjectsList from '@/components/ProjectsList/ProjectsList.vue'
import { logUser } from '../../lib/network'

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      form: {
        email: 'test@test.com',
        password: 'toto'
      },
      formRules: {
        email: [
          {
            required: true,
            message: 'Please enter your email',
            trigger: 'blur' },
          {
            type: 'email',
            message: 'Please input correct email address',
            trigger: ['blur', 'change']
          }
        ],
        password: [
          {
            required: true,
            message: 'Please enter your password',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    async submitForm (form) {
      this.$refs['form'].validate(async (valid) => {
        if (valid) {
          try {
            const res = await logUser(form)

            console.log('res ===> ', res)

            if (res.status === 200) {
              console.log('account created ===> ')
            } else if (res.data === 'existing mail') {
              console.log('This mail already exists')
            }
          } catch (err) {
            console.error('error ===> ', err)
          }
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Login.scss" scoped lang='scss'></style>
