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
import BlockSubmenu from '@/modules/Sidebar/components/BlockSubmenu'
import BlockOptions from '@/modules/Sidebar/components/BlockOptions'

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
  mounted () {
    console.log('this.block ===> ', this.block)
  },
  methods: {
    openMenu () {
      this.isOpen = !this.isOpen
    },
    showModal () {
      this.$prompt('Add a page', 'Tip', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel'
        // inputPattern: //,
      }).then(({ value }) => {
        console.log('value ===> ', value)
        this.$message({
          type: 'success',
          message: 'Your email is:' + value
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Input canceled'
        })
      })
      // const params = {
      //   title: `Add a page inside ${this.block.name} block`,
      //   actionToTrigger: 'addPage',
      //   actionParams: {
      //     blockId: this.block._id
      //   }
      // }

      // this.$modal.show(params)
    }
  }
}
</script>
<style src="./Block.scss" scoped lang='scss'></style>
