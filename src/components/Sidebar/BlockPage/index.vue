<template>
  <div
    v-if="page.toto"
    class="block-page"
  >
    <el-submenu
      class="item-in-page"
      :index="`${page.blockIndex}-${page.index}`"
    >
      <template slot="title">
        <!-- <i class="el-icon-location" /> -->
        <span>{{ page.name }}</span> tutu
      </template>
    </el-submenu>
  </div>
  <div
    v-else
    class="block-page"
  >
    <el-menu-item
      class="item-in-page"
      :index="`${page.blockIndex}-${page.index}`"
    >
      {{ page.name }}
    </el-menu-item>
  </div>
</template>

<script>

export default {
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  mounted () {
    console.log('this.computedIndex() ===> ', this.computeIndex(2, 8))
  }
}
</script>
<style src="./" scoped lang='scss'></style>
