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
          Login
        </el-button>
      </el-form-item>
    </el-form>
  </el-col>
</template>

<script>
// import ProjectsList from '@/components/ProjectsList/ProjectsList.vue'
import { post } from '../../lib/network'
import { mapActions } from 'vuex'

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
    ...mapActions([
      'storeUser'
    ]),

    async submitForm (form) {
      this.$refs['form'].validate(async (valid) => {
        if (valid) {
          try {
            const data = {
              email: form.email,
              password: form.password
            }

            const res = await post('log-user', data)

            console.log('res ===> ', res)

            if (res.status === 200) {
              const date = new Date()

              date.setDate(date.getDate() + 1)

              console.log('date ===> ', date)

              document.cookie = `token=${res.data.token}; expires=${date}`

              const userId = res.data._id
              this.storeUser(res.data.user)
              this.$router.push({ path: `/${userId}` })
              console.log('this.router ===> ', this)
            } else if (res.status === 401) {
              console.log('Unhautorized access')
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
