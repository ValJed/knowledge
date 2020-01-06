<template>
  <div class="docPage">
    <h3>{{ itemToDisplay.name }}</h3>
    <!-- <p>{{ itemToDisplay.content }}</p> -->
    <editor-block :content="itemToDisplay.content" />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import EditorBlock from '@/modules/Page/components/EditorBlock'
// import ProjectsList from '@/modules/Projects/ProjectsList'

export default {
  name: 'DocPage',
  components: {
    EditorBlock
    // ProjectsList
  },
  data () {
    return {
      // name: '',
      // content: ''
    }
  },
  computed: {
    ...mapState(['user, projects']),
    ...mapGetters(['currentProject', 'currentBlock', 'currentPage']),
    itemToDisplay () {
      if (this.currentPage) {
        return {
          name: this.currentPage.name,
          content: this.currentPage.content
        }
      } else if (this.currentBlock) {
        return {
          name: this.currentBlock.name,
          content: this.currentBlock.content
        }
      }

      return {
        name: this.currentProject.name,
        content: this.currentProject.description
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./DocPage.scss" scoped lang='scss'></style>
