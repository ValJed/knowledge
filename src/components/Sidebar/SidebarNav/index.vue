<template>
  <div class="sidebar-nav">
    <div
      v-if="currentProject.blocks.length"
      class="sidebar-nav__content"
    >
      these are blocks :
      <ul
        class="sidebar-nav__blocks"
        @open="handleOpen"
        @close="handleClose"
      >
        <block
          v-for="(block, index) in currentProject.blocks"
          :key="index"
          :block="{...block, index}"
        />
      </ul>
    </div>
    <add-block />
    <!-- <div
        class="sidebar-nav__content"
      /> -->
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
    console.log('this.currentProject ===> ', this.currentProject)
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
