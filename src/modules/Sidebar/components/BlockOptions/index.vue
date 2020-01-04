<template>
  <div
    class="block-options"
  >
    <div
      class="block-options__btn"
      @click="showOptions"
    >
      <i class="el-icon-more" />
    </div>
    <transition name="fade">
      <ul
        v-show="openedOptions"
        v-closable="{
          className: 'open',
          handler: 'closeOptions',
          excluded:['block-options', 'el-icon-more']}"
        class="block-options-list"
      >
        <li
          class="block-options-list__item"
          @click.stop="createPage()"
        >
          Add
        </li>
        <li
          class="block-options-list__item"
          @click.stop="removeBlock()"
        >
          Delete
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    block: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      openedOptions: false
    }
  },
  methods: {
    ...mapActions(['addPage', 'deleteBlock']),
    showOptions () {
      this.openedOptions = !this.openedOptions
    },
    closeOptions () {
      this.openedOptions = false
    },
    createPage () {
      this.$prompt('Add a page', 'Tip', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel'
        // inputPattern: //,
      }).then(async ({ value, action }) => {
        if (action === 'confirm') {
          const res = await this.addPage({ blockId: this.block._id, pageName: value })

          if (res.success) {
            this.$message({
              type: 'success',
              message: 'Your email is:'
            })
          }
        }
      })
    },
    removeBlock () {
      this.$alert('Do you want to delete this block ?', this.block.name, {
        confirmButtonText: 'Ok'
      }).then(async (value) => {
        if (value === 'confirm') {
          const res = await this.deleteBlock({ blockId: this.blockId })

          console.log('res ===> ', res)
        }
      })
    },
    showModal (type) {
      const params = type === 'add'
        ? {
          title: `Add a page inside ${this.block.name} block`,
          actionToTrigger: 'addPage',
          actionParams: {
            blockId: this.block._id
          }
        } : {
          title: `Do you want to delete the ${this.block.name} block`,
          actionToTrigger: 'deleteBlock',
          actionParams: {
            blockId: this.block._id
          }
        }

      this.openedOptions = false
      this.$modal.show(params)
    }
  }
}
</script>

<style src="./BlockOptions.scss" scoped lang="scss"></style>
