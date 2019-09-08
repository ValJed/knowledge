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
          @click.stop="showModal"
        >
          Add
        </li>
        <li class="block-options-list__item">
          Delete
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>

export default {
  props: {
    block: {
      type: Object,
      required: true
    }
  },
  data: function () {
    return {
      openedOptions: false
    }
  },
  methods: {
    showOptions () {
      this.openedOptions = !this.openedOptions
    },
    closeOptions () {
      this.openedOptions = false
    },
    showModal () {
      const params = {
        title: `Add a page inside ${this.block.name} block`,
        actionToTrigger: 'addPage',
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

<style src="./BlockOptions.scss" scoped lang='scss'></style>
