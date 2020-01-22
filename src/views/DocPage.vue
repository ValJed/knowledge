<template>
  <div class="docPage">
    <h3>{{ itemToDisplay.name }}</h3>
    <!-- <p>{{ itemToDisplay.content }}</p> -->
    <div class="save">
      <el-button
        type="primary"
        @click="savePage(itemToDisplay)"
      >
        Save changes
      </el-button>
    </div>
    <editor-block :content="itemToDisplay.content" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import EditorBlock from '@/modules/Page/components/EditorBlock.vue'
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
        return this.currentPage
      } else if (this.currentBlock) {
        return this.currentBlock
      }

      return this.currentProject
    }
  },
  methods: {
    ...mapActions(['updatePage']),
    async savePage (item) {
      if (this.currentPage) {
        const res = await this.updatePage({ page: item, blockId: this.currentBlock._id })

        console.log('res ===> ', res)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./DocPage.scss" scoped lang='scss'></style>
