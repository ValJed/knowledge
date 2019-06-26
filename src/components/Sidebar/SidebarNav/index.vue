<template>
  <div class="sidebar-nav">
    <el-menu
      class="sidebar-nav__menu"
      @open="handleOpen"
      @close="handleClose"
    >
      <div
        v-if="currentProject.blocks.length"
        class="sidebar-nav__content"
      >
        these are blocks :
        <div
          v-for="(block, index) in currentProject.blocks"
          :key="index"
          class="sidebar-nav__blocks"
        >
          <block :block="{...block, index}" />
        </div>
      </div>
      <add-block />
      <!-- <div
        class="sidebar-nav__content"
      /> -->
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AddBlock from '@/components/Sidebar/AddBlock'
import Block from '@/components/Sidebar/Block'

export default {
  components: {
    AddBlock,
    Block
  },
  computed: {
    ...mapGetters(['currentProject'])
  },
  mounted () {
    console.log('this.currentProject ===> ', this.currentProject.blocks)
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style src="./SidebarNav.scss" scoped lang='scss'></style>
