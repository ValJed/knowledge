<template>
  <div class="block">
    <span>
      {{ block.name }}
    </span>
    <div
      class="block__add"
      @click="showModal"
    >
      <icon
        name="cross"
        :size="1.2"
        color="#fff"
      />
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  components: {
    Icon
  },
  props: {
    block: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  methods: {
    showModal () {
      const params = {
        title: `Add a page inside ${this.block.name} block`,
        block: this.block,
        actionToTrigger: 'addPage'
      }

      this.$modal.show(params)
    }
  }
}
</script>
<style src="./Block.scss" scoped lang='scss'></style>
