<template>
  <li class="block-subitem">
    {{ page.name }}
  </li>
</template>

<script>

export default {
  components: {
  },
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  mounted () {
  }
}
</script>
<style src="./BlockSubitem.scss" scoped lang='scss' />
