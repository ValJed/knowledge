<template>
  <el-col :span="5">
    <h3>Create an account</h3>
    <el-form
      ref="form"
      :model="form"
      status-icon
      :rules="formRules"
    >
      <el-form-item
        label="Pseudo"
        prop="pseudo"
      >
        <el-input
          v-model="form.pseudo"
          type="name"
          placeholder="Pseudo"
        />
      </el-form-item>
      <el-form-item
        label="Email"
        prop="email"
        :error="error.email"
      >
        <el-input
          v-model="form.email"
          type="email"
          placeholder="Email"
          @input="cleanMailErrors"
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
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item
        label="Confirm password"
        prop="checkPassword"
      >
        <el-input
          v-model="form.checkPassword"
          type="password"
          placeholder="Password"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm(form)"
        >
          Create account
        </el-button>
      </el-form-item>
    </el-form>
  </el-col>
</template>

<script>
import { put, get } from '../../lib/network'

export default {
  name: 'Home',
  components: {},
  data () {
    return {
      form: {
        pseudo: 'val',
        email: 'test@test.com',
        password: 'tototo',
        checkPassword: 'tototo'
      },
      error: {
        email: undefined
      },
      formRules: {
        pseudo: [
          {
            required: true,
            message: 'Please choose a pseudo',
            trigger: 'blur'
          }
        ],
        email: [
          {
            required: true,
            message: 'Please input email address',
            trigger: 'blur'
          },
          {
            type: 'email',
            message: 'Please input correct email address',
            trigger: ['blur', 'change']
          },
          {
            required: true,
            validator: this.checkMailExist,
            message: 'An account is already attached to this email address',
            trigger: ['blur', 'change']
          }
        ],
        password: [
          {
            required: true,
            validator: this.validatePassword,
            trigger: 'blur'
          },
          { min: 6, message: 'Length should be of 6 characters minimum', trigger: 'blur' }
        ],
        checkPassword: [
          {
            required: true,
            validator: this.validateCheckPassword,
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    validatePassword (rule, value, cb) {
      if (value === '') {
        cb(new Error('Please input the password'))
      } else {
        if (this.formRules.checkPassword !== '') {
          this.$refs.form.validateField('checkPassword')
        }
        cb()
      }
    },

    validateCheckPassword (rule, value, cb) {
      if (value === '') {
        cb(new Error('Please input the password again'))
      } else if (value !== this.form.password) {
        cb(new Error("Two inputs don't match!"))
      } else {
        cb()
      }
    },

    async checkMailExist (rule, value, cb) {
      const params = { email: value }

      const res = await get('get-user', params)

      if (res.data === 'exists') {
        cb(new Error('An account is already attached to this email address'))
      } else {
        cb()
      }
    },

    cleanMailErrors () {
      this.error.email = undefined
    },

    async submitForm (form) {
      this.$refs['form'].validate(async (valid) => {
        if (valid) {
          try {
            const res = await put('create-account', form)

            console.log('res   ===> ', res)
            if (res.status === 201) {

            } else if (res.data === 'existing mail') {
              this.error.email = undefined
              // this.error.email = 'An account is already attached to this email address'
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
<style src="./CreateAccount.scss" scoped lang='scss'></style>
