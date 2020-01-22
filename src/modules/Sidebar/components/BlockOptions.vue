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
            this.$notify({
              message: 'Page has been created !',
              type: 'success'
            })
          } else {
            this.$notify.error({
              title: 'Error',
              message: 'Page has been created !'
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
          const res = await this.deleteBlock({ blockId: this.block._id })

          if (res.success) {
            this.$notify({
              message: `Block ${this.block.name} has been deleted !`,
              type: 'success'
            })
          } else {
            this.$notify.error({
              message: `Cannot delete this block !`
            })
          }
        }
      })
    }
  }
}
</script>

<style src="./BlockOptions.scss" scoped lang="scss"></style>
