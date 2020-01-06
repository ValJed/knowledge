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
  // mounted () {
  //   console.log('this.blockId ===> ', this.blockId)
  // },
  methods: {
    ...mapActions(['deletePage', 'setCurrentPage']),
    removePage () {
      this.$alert('Voulez-vous supprimer cette page ?', this.page.name, {
        confirmButtonText: 'OK'
      }).then(async (value) => {
        if (value === 'confirm') {
          const res = await this.deletePage({
            blockId: this.blockId,
            pageName: this.page.name
          })

          console.log('res ===> ', res)

          if (res.success) {
            this.$notify({
              type: 'success',
              message: `Deleted`
            })
          }
        }
      })
    }
  }
}
</script>
<style src="./BlockSubitem.scss" scoped lang='scss' />
