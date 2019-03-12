<template>
  <el-col :span="5">
    <h3>Create an account</h3>
    <el-form :model="form" status-icon :rules="formRules" ref="form" justify="start">
      <el-form-item label="Pseudo" prop="pseudo">
        <el-input type="name" v-model="form.pseudo" placeholder="Pseudo"></el-input>
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input type="email" v-model="form.email" placeholder="Email"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input type="password" v-model="form.password" placeholder="Password" autocomplete="off"></el-input>
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
        <el-button type="primary" @click="submitForm(form)">Create account</el-button>
      </el-form-item>
    </el-form>
  </el-col>
</template>

<script>
import { createAccount } from '../../lib/network'

export default {
  name: 'Home',
  components: {},
  data () {
    return {
      form: {
        pseudo: 'val',
        email: 'test@test.com',
        password: 'toto',
        checkPassword: 'toto'
      },
      formRules: {
        pseudo: [
          { required: true, message: 'Please choose a pseudo', trigger: 'blur' }
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
          }
        ],
        password: [
          { required: true, validator: this.validatePassword, trigger: 'blur' }
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
    submitForm (form) {
      this.$refs['form'].validate((valid) => {
        console.log('valid ===> ', valid)
        if (valid) {
          createAccount(form)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./CreateAccount.scss" scoped lang='scss'></style>
