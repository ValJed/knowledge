<template>
  <div
    v-if="page.toto"
    class="block-page"
  >
    <field-menu />
    <el-submenu
      class="item-in-page"
      :index="`${page.blockIndex}-${page.index}`"
    >
      <template slot="title">
        <!-- <i class="el-icon-location" /> -->
        <span>{{ page.name }}</span>
      </template>
    </el-submenu>
  </div>
  <div
    v-else
    class="block-page"
  >
    <field-menu />
    <el-menu-item
      class="item-in-page"
      :index="`${page.blockIndex}-${page.index}`"
    >
      {{ page.name }}
    </el-menu-item>
  </div>
</template>

<script>
import FieldMenu from '@/components/Sidebar/FieldMenu'

export default {
  components: {
    FieldMenu
  },
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
<style src="./BlockPage.scss" scoped lang='scss'></style>
