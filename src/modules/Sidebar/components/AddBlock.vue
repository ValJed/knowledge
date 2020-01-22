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
import Icon from '@/modules/Common/components/Icon.vue'

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
      this.$prompt('Add a block', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel'
        // inputPattern: //,
      }).then(async ({ value, action }) => {
        if (action === 'confirm') {
          const res = await this.addBlock({ blockName: value })

          if (res.success) {
            this.$notify({
              message: 'Block has been successfully created !',
              type: 'success'
            })
          } else {
            this.$notify.error({
              message: 'Couldn\'t create block'
            })
          }
        }
      }).catch((error) => {
        if (error !== 'cancel') {
          this.$notify.error({
            message: 'Couldn\'t create block'
          })
        }
      })
    }
  }
}
</script>
<style src="./AddBlock.scss" scoped lang="scss" />
