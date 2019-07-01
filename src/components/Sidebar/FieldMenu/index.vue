<template>
  <el-dropdown
    class="field-menu"
    trigger="click"
  >
    <i class="el-icon-more" />
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item icon="el-icon-plus">
        Add
      </el-dropdown-item>
      <el-dropdown-item icon="el-icon-delete">
        Delete
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>

export default {

}
</script>
<style src="./FieldMenu.scss" scoped lang='scss'></style>
