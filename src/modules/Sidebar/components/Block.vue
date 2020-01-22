<template>
  <li
    v-if="block.pages.length"
    class="block"
  >
    <div class="block-container">
      <div
        class="block-title"
        @click="openMenu"
      >
        <i
          class="el-icon-arrow-down"
          :style="{transform: `rotate(${isOpen ? 180 : 0}deg)`}"
        />
        {{ block.name }}
      </div>
      <block-submenu
        :block="block"
        :is-open="isOpen"
      />
    </div>
    <block-options :block="block" />
  </li>
  <li
    v-else
    class="block block-item"
  >
    <div class="block-title">
      {{ block.name }}
    </div>
    <block-options :block="block" />
  </li>
</template>

<script>
import BlockSubmenu from '@/modules/Sidebar/components/BlockSubmenu.vue'
import BlockOptions from '@/modules/Sidebar/components/BlockOptions.vue'

export default {
  components: {
    BlockSubmenu,
    BlockOptions
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
    }
  }
}
</script>
<style src="./Block.scss" scoped lang='scss'></style>
