<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col>
          <h1>Welcome to Knowledge</h1>
          <div class="description">
            <p>
              Knwoledge is an easy to use documentation system.
            </p>
            <p>
              Create an account to add for each of your projects a proper documentation.
            </p>
          </div>
        </el-col>
      </el-row>
      <el-row
        :gutter="70"
        type="flex"
        justify="center"
      >
        <login />
        <create-account />
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import Login from '@/modules/Auth/components/Login'
import CreateAccount from '@/modules/Auth/components/CreateAccount'

export default {
  name: 'Home',
  components: {
    Login,
    CreateAccount
  },
  data () {
    return {
      msg: 'MY home'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Home.scss" scoped lang='scss'></style>
