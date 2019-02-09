<template>
  <div class="banner">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      msg: 'MY HEADER'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/scss/Banner.scss" scoped lang='scss'></style>
