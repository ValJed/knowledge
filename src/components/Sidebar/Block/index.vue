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
    <field-menu />
    {{ block.name }}
  </li>
</template>
<script>
import BlockSubmenu from '@/components/Sidebar/BlockSubmenu'
import FieldMenu from '@/components/Sidebar/FieldMenu'

export default {
  components: {
    BlockSubmenu,
    FieldMenu
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
  mounted () {
    // this.submenuHeight
    // const submenuElem = Object.entries(this.$el.childNodes)
    //   .find((elem) => elem[1].className && elem[1].className.includes('block-submenu'))

    // if (submenuElem) {
    //   console.log('submenuElem[1].offsetHeight ===> ', submenuElem[1])
    //   this.submenuHeight = submenuElem[1].offsetHeight
    // }
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
