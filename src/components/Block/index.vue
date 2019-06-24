<template>
  <el-submenu
    class="block"
    :index="block.index"
  >
    <template slot="title">
      <i class="el-icon-location" />
      <span>{{ block.name }}</span>
    </template>
    <div
      v-if="block.pages.length"
      class="block-submenu"
    >
      <el-submenu
        v-for="(page, index) in block.pages"
        :key="index"
        :index="`${block.index}-${index}`"
      >
        <template slot="title">
          <i class="el-icon-location" />
          <span>{{ page.name }}</span>
        </template>
      </el-submenu>
    </div>
    <div
      v-else
      class="block-item"
    >
      <el-menu-item
        index="1-1"
      >
        item un
      </el-menu-item>
    </div>
  </el-submenu>
</template>
<script>
import Icon from '@/components/Icon'

export default {
  components: {
    Icon
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
  mounted () {
    console.log('this.block ===> ', this.block)
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
