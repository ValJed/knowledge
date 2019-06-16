<template>
  <div
    class="add-block"
    @click="showModal"
  >
    <span class="add-block-content__title">
      Add a block
    </span>
    <icon
      name="cross"
      :size="1.2"
      color="#fff"
      @click="showModal"
    />
  </div>
</template>

<script>
import {
  mapActions,
  mapGetters
} from 'vuex'
import Icon from '@/components/Icon'

export default {
  components: {
    Icon
  },
  data () {
    return {
      form: {
        name: ''
      }
    }
  },
  computed: {
    ...mapGetters(['currentProject'])
  },
  methods: {
    ...mapActions(['addBlock']),
    showModal () {
      const params = {
        title: `Add a block inside ${this.currentProject.name} project`,
        field: this.field,
        actionToTrigger: 'addBlock'
      }

      this.$modal.show(params)
    }
  }
}
</script>
<style src="./AddBlock.scss" scoped lang="scss" />
