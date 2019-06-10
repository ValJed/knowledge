<template>
  <div class="field">
    <h3>{{ field.name }}</h3>
  </div>
</template>

<script>

export default {
  // props: {
  //   field: Object
  // }
  components: {
  },
  props: {
    field: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {
  },
  mounted () {
    // this.getProjects(this.user._id)
  },
  methods: {
    // ...mapActions(['getProjects'])
  }
}
</script>
<style src="./Field.scss" scoped lang='scss'></style>
