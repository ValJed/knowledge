<template>
  <div
    class="block-menu"
  >
    <el-popover
      class="field-menu"
      placement="right-start"
      trigger="click"
      :visible-arrow="false"
    >
      <i
        slot="reference"
        class="el-icon-more"
      />
      <ul class="block-menu-list">
        <li @click="showModal">
          Add
          tt
        </li>
        <li>Delete kk</li>
      </ul>
    </el-popover>
  </div>
</template>

<script>

export default {
  data () {
    return {
      opened: false
    }
  },
  methods: {
    showModal () {
      console.log('=============> HERE <================')
      const params = {
        // title: `Add a new page inside ${this.block.name}`,
        // field: this.field,
        actionToTrigger: 'addPage'
      }

      console.log('this ===> ', this)

      this.$modal.show(params)
    }
  }
}
</script>
<style src="./BlockMenu.scss" scoped lang='scss'></style>
