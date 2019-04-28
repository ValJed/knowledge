<template>
  <el-row class="docPage">
    <el-col :span=24>
      <h3>{{ currentProject.name }}</h3>
      <p>{{ currentProject.description }}</p>
      <editor-block />
    </el-col>
  </el-row>
</template>

<script>
import { mapState } from 'vuex'
import EditorBlock from '@/components/EditorBlock/EditorBlock.vue'
// import ProjectsList from '@/components/ProjectsList/ProjectsList.vue'

export default {
  name: 'DocPage',
  components: {
    EditorBlock
    // ProjectsList
  },
  data () {
    return {
      msg: 'MESSAGE COOL'
    }
  },
  computed: {
    ...mapState(['user, projects', 'currentProject'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./DocPage.scss" scoped lang='scss'></style>
