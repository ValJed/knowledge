
<template>
  <div
    class="icon"
    :class="[`icon--${name}`, `icon--${size}`, { 'has-align-fix': fixAlign }]"
  >
    <svg class="icon__svg">
      <use
        xmlns:xlink="http://www.w3.org/1999/xlink"
        :href="`/sprite.svg#${ name }`"
      />
    </svg>
  </div>
</template>

<script>
export default {
  // :href="../../assets/images/icons/code.svg#code"
  props: {
    name: {},
    size: {
      default: 'normal'
    },
    modifier: {
      default: null
    },
    fixAlign: {
      default: true
    }
  },
  mounted () {
    console.log('this.name ===> ', this.name)
  }
}
</script>

<style src="./Icon.scss" scoped lang='scss'></style>
