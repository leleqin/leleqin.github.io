<script lang="ts" setup>
  defineOptions({
    name: 'SVGIcon',
  })
  defineProps({
    icon: {
      type: String,
    },
  })
</script>

<template>
  <svg class="i-my-icon" v-bind="$attrs" aria-hidden="true" @click="$emit('click')">
    <use :xlink:href="'#icon-' + icon"></use>
  </svg>
</template>

<style lang="scss" scoped>
  .i-my-icon {
    width: 1em;
    height: 1em;
    vertical-align: middle;
    fill: currentColor;
    overflow: hidden;
  }
</style>
