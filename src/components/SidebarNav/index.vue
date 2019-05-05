<template>
  <div class="sidebar-nav">
    <el-menu
      class="sidebar-nav__menu"
      @open="handleOpen"
      @close="handleClose"
    >
      <div
        v-if="currentProject.fields.length"
        class="sidebar-nav__content"
      >
        there are fields
        <div
          v-for="(field, index) in currentProject.fields"
          :key="index"
          class="sidebar-nav__field"
        >
          {{ field }}
        </div>
      </div>
      <div
        v-else
        class="sidebar-nav__content"
      >
        <add-field />
      </div>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AddField from '@/components/AddField'

export default {
  components: {
    AddField
  },
  computed: {
    ...mapState(['currentProject'])
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style src="./SidebarNav.scss" scoped lang='scss'></style>
