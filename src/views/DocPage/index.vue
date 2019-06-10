<template>
  <div class="docPage">
    <h3>{{ currentProject.name }}</h3>
    <p>{{ currentProject.description }}</p>
    <editor-block />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
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
    ...mapState(['user, projects']),
    ...mapGetters(['currentProject'])
  },
  mounted () {
    console.log('this.currentProject ===> ', this.currentProject)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./DocPage.scss" scoped lang='scss'></style>
