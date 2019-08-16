<template>
  <li
    v-if="block.pages.length"
    class="block"
  >
    <div
      class="block-title"
      @click="openMenu"
    >
      {{ block.name }}
    </div>
    <block-submenu
      :block="block"
      :is-open="isOpen"
    />
  </li>
  <li
    v-else
    class="block block-item"
  >
    <div class="block-title">
      {{ block.name }}
      <block-menu />
    </div>
  </li>
</template>
<script>
import BlockSubmenu from '@/components/Sidebar/BlockSubmenu'
import BlockMenu from '@/components/Sidebar/BlockMenu'

export default {
  components: {
    BlockSubmenu,
    BlockMenu
  },
  props: {
    block: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    openMenu () {
      this.isOpen = !this.isOpen
    },
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
