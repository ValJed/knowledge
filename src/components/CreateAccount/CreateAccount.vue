<template>
  <el-col :span="5">
    <h3>Create an account</h3>
    <el-form
    :model="form"
    status-icon
    :rules="formRules"
    ref="form">
      <el-form-item label="Pseudo" prop="pseudo">
        <el-input
        type="name"
        v-model="form.pseudo"
        placeholder="Pseudo"></el-input>
      </el-form-item>
      <el-form-item label="Email" prop="email" :error="error.email">
        <el-input
        type="email"
        v-model="form.email"
        placeholder="Email"
        @input="cleanMailErrors"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input
        type="password"
        v-model="form.password"
        placeholder="Password"
        autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Confirm password" prop="checkPassword">
        <el-input
          type="password"
          v-model="form.checkPassword"
          placeholder="Password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(form)">
          Create account
          </el-button>
      </el-form-item>
    </el-form>
  </el-col>
</template>

<script>
import { createAccount, checkUserExist } from '../../lib/network'
import { cmp } from 'semver'

export default {
  name: 'Home',
  components: {},
  data () {
    return {
      form: {
        pseudo: 'val',
        email: 'test@test.co',
        password: 'shred4618',
        checkPassword: 'shred4618'
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
            // message: 'An account is already attached to this email address',
            trigger: 'blur'
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
    validatePassword (rule, value, callback) {
      if (value === '') {
        callback(new Error('Please input the password'))
      } else {
        if (this.formRules.checkPassword !== '') {
          this.$refs.form.validateField('checkPassword')
        }
        callback()
      }
    },

    validateCheckPassword (rule, value, callback) {
      if (value === '') {
        callback(new Error('Please input the password again'))
      } else if (value !== this.form.password) {
        callback(new Error("Two inputs don't match!"))
      } else {
        callback()
      }
    },

    async checkMailExist (rule, value, callback) {
      const res = await checkUserExist(value)

      if (res.body === 'exists') {
        callback(new Error('An account is already attached to this email address'))
      } else {
        callback()
      }
    },

    cleanMailErrors () {
      this.error.email = undefined
    },

    async submitForm (form) {
      this.$refs['form'].validate(async (valid) => {
        if (valid) {
          try {
            const res = await createAccount(form)

            if (res.status === 201) {
              console.log('account created ===> ')
            } else if (res.data === 'existing mail') {
              console.log('=============> HERE <================')
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
