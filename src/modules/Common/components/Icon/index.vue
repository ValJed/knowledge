
<template>
  <div
    class="icon"
    :class="`icon--${name}`"
    :style="iconStyle"
  >
    <svg
      class="icon__svg"
      :style="svgStyle"
    >
      <use
        xmlns:xlink="http://www.w3.org/1999/xlink"
        :href="`/sprite.svg#${ name }`"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      default: '',
      type: String,
      required: true
    },
    size: {
      default: 0.8,
      type: Number,
      required: false
    },
    color: {
      default: 'teal',
      type: String,
      required: false
    }
  },
  data () {
    return {
      iconStyle: {
        width: `${this.size}rem`,
        height: `${this.size}rem`
      },
      svgStyle: {
        fill: `${this.color}`
      }
    }
  }
}
</script>

<style src="./Icon.scss" scoped lang='scss'></style>
