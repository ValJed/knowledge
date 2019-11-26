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
        :blockid="block._id"
      />
    </ul>
    <div class="test-toto">
      toto
    </div>
  </div>
</template>

<script>
import BlockSubitem from '@/modules/Sidebar/components/BlockSubitem'

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
      itemHeight: 0
    }
  },
  computed: {
    height () {
      return this.itemHeight * this.block.pages.length
    }
  },
  mounted () {
    this.getItemHeight()
  },
  methods: {
    getItemHeight () {
      const itemElem = Object.values(this.$el.childNodes)
        .reduce((acc, container) => {
          const item = container.childNodes.item(0)
          return item instanceof Element && item.className.includes('block-subitem')
            ? item
            : acc
        }, null)

      if (itemElem) {
        this.itemHeight = itemElem.offsetHeight
      }
    }
  }
}
</script>

<style src="./BlockSubmenu.scss" scoped lang="scss" />
