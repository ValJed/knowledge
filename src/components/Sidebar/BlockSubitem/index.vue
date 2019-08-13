<template>
  <li class="block-subitem">
    {{ page.name }}
  </li>
</template>

<script>
// import FieldMenu from '@/components/Sidebar/FieldMenu'

export default {
  components: {
    // FieldMenu
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
