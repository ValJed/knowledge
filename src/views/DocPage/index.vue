<template>
  <div class="docPage">
    <h3>{{ currentProject.name }}</h3>
    <p>{{ currentProject.description }}</p>
    <editor-block />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EditorBlock from '@/components/EditorBlock'
// import ProjectsList from '@/components/ProjectsList'

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
