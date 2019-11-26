<template>
  <li
    class="block-subitem"
  >
    <span>{{ page.name }}</span>
    <icon
      name="cross"
      :size="1"
      color="#fff"
      @click.native="removePage(page)"
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
    blockid: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapActions([
      'deletePage'
    ]),
    removePage () {
      this.$alert('Voulez-vous supprimer cette page ?', this.page.name, {
        confirmButtonText: 'OK'
      }).then(async (value) => {
        if (value === 'confirm') {
          const data = {
            pageId: this.page._id,
            blockId: this.blockid
          }
          const res = await this.deletePage(data)

          console.log('res ===> ', res)
          this.$notify({
            type: 'success',
            message: `Deleted`
          })
        }
      })
    }
  }
}
</script>
<style src="./BlockSubitem.scss" scoped lang='scss' />
