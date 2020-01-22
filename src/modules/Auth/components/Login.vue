<template>
  <el-col :span="5">
    <h3>Log to your account</h3>
    <el-form
      ref="form"
      :model="form"
      status-icon
      :rules="formRules"
    >
      <el-form-item
        label="Email"
        prop="email"
      >
        <el-input
          v-model="form.email"
          type="email"
          placeholder="Email"
        />
      </el-form-item>
      <el-form-item
        label="Password"
        prop="password"
      >
        <el-input
          v-model="form.password"
          type="password"
          placeholder="Password"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm(form)"
        >
          Login
        </el-button>
      </el-form-item>
    </el-form>
  </el-col>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      form: {
        email: 'jed@test.com',
        password: 'tututu'
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
  computed: {
    ...mapState(['user', 'projects'])
  },
  methods: {
    ...mapActions([
      'logUser'
    ]),

    async submitForm (form) {
      this.$refs['form'].validate(async (valid) => {
        if (valid) {
          const credentials = {
            email: form.email,
            password: form.password
          }

          const isLogged = await this.logUser(credentials)

          if (isLogged) {
            this.$router.push({ path: `/${this.user._id}` })
          }
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Login.scss" scoped lang='scss'></style>
