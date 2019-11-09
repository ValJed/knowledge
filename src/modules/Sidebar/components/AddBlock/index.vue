<template>
  <div
    class="new-block"
    @click="showModal"
  >
    <span class="new-block__title">
      Add a new block
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
import Icon from '@/modules/Common/components/Icon'

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
        title: `Add a new block inside ${this.currentProject.name} project`,
        field: this.field,
        actionToTrigger: 'addBlock'
      }

      this.$modal.show(params)
    }
  }
}
</script>
<style src="./AddBlock.scss" scoped lang="scss" />
