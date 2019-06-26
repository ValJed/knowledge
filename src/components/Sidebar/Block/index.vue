<template>
  <div
    v-if="block.pages.length"
    class="block-submenu"
  >
    <el-submenu
      :key="block.index"
      :index="`${block.index}`"
      class="item-in-block"
    >
      <template slot="title">
        <span>{{ block.name }}</span>
      </template>
      <i
        class="el-icon-circle-plus-outline add-icon"
      />
      <div
        v-for="(page, index) in block.pages"
        :key="index"
        class="block__pages"
      >
        <block-page :page="{...page, index, BlockIndex: block.index}" />
      </div>
    </el-submenu>
  </div>
  <div
    v-else
    class="block-item"
  >
    <el-menu-item
      class="item-in-block"
      :index="`${block.index}`"
    >
      {{ block.name }}
      <i
        class="el-icon-circle-plus-outline add-icon"
      />
    </el-menu-item>
  </div>
</template>
<script>
import BlockPage from '@/components/Sidebar/BlockPage'

export default {
  components: {
    BlockPage
  },
  props: {
    block: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  methods: {
    showModal () {
      const params = {
        title: `Add a page inside ${this.block.name} block`,
        actionToTrigger: 'addPage',
        actionParams: {
          blockId: this.block._id
        }
      }

      this.$modal.show(params)
    }
  }
}
</script>
<style src="./Block.scss" scoped lang='scss'></style>
