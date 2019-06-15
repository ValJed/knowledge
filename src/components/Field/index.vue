<template>
  <div class="field">
    <span>
      {{ field.name }}
    </span>
    <div
      class="add-field"
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
    field: {
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
        title: `Add a page inside ${this.field.name} block`,
        field: this.field,
        actionToTrigger: 'addPage'
      }

      this.$modal.show(params)
    }
  }
}
</script>
<style src="./Field.scss" scoped lang='scss'></style>
