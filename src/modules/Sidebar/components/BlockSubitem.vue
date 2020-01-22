<template>
  <li
    class="block-subitem"
  >
    <span @click="setCurrentPage({ blockId, pageId: page._id })">{{ page.name }}</span>
    <icon
      name="cross"
      :size="1"
      color="#fff"
      @click.native="removePage()"
    />
  </li>
</template>

<script>

import Icon from '@/modules/Common/components/Icon'
import { mapActions } from 'vuex'

export default {
  components: {
    Icon
  },
  props: {
    page: {
      type: Object,
      required: true
    },
    blockId: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapActions(['deletePage', 'setCurrentPage']),
    removePage () {
      this.$alert('Voulez-vous supprimer cette page ?', this.page.name, {
        confirmButtonText: 'OK'
      }).then(async (value) => {
        if (value === 'confirm') {
          const res = await this.deletePage({
            blockId: this.blockId,
            pageId: this.page._id
          })

          this.$notify({
            type: res.success ? 'success' : 'error',
            message: res.success ? 'Deleted' : 'Failed to detete'
          })
        }
      })
    }
  }
}
</script>
<style src="./BlockSubitem.scss" scoped lang='scss' />
