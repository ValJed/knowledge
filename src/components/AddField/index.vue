<template>
  <div class="add-field">
    <div class="open-form">
      <icon
        name="cross"
        :size="1.1"
        color="#fff"
      />
      Add a block
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Icon from '@/components/Icon'

export default {
  components: {
    Icon
  },
  computed: {
    ...mapState(['currentProject'])
  }
}
</script>
<style src="./AddField.scss" scoped lang="scss" />
