<template>
  <div
    class="block-submenu"
    :style="{height: isOpen ? `${height}px` : '0px'}"
  >
    <ul
      class="block-submenu-container"
    >
      <block-subitem
        v-for="page in block.pages"
        :key="page.index"
        :page="page"
      />
    </ul>
  </div>
</template>

<script>
import BlockSubitem from '@/components/Sidebar/BlockSubitem'

export default {
  components: {
    BlockSubitem
  },
  props: {
    block: {
      type: Object,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      height: 0
    }
  },
  mounted () {
    // Getting height of the block-submenu-container to manage dropdown
    const containerElem = Object.entries(this.$el.childNodes)
      .find((elem) => {
        return elem[1].className && elem[1].className.includes('block-submenu-container')
      })

    if (containerElem) {
      this.height = containerElem[1].offsetHeight
    }
  }
}
</script>

<style src="./BlockSubmenu.scss" scoped lang="scss" />
