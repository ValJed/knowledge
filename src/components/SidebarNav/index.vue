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
          <field :field="field" />
        </div>
        <add-field />
      </div>
      <!-- <div
        class="sidebar-nav__content"
      /> -->
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AddField from '@/components/AddField'
import Field from '@/components/Field'

export default {
  components: {
    AddField,
    Field
  },
  computed: {
    ...mapGetters(['currentProject'])
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
