<template>
  <div class="sidebar-nav">
    <div
      v-if="Object.values(currentProject.blocks).length"
      class="sidebar-nav__content"
    >
      these are blocks :
      <ul
        class="sidebar-nav__blocks"
        @open="handleOpen"
        @close="handleClose"
      >
        <block
          v-for="(block, index) in Object.values(currentProject.blocks)"
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
import AddBlock from '@/modules/Sidebar/components/AddBlock'
import Block from '@/modules/Sidebar/components/Block'

export default {
  components: {
    AddBlock,
    Block
  },
  computed: {
    ...mapGetters(['currentProject'])
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
