<script lang="ts" setup>
  defineOptions({
    name: 'Card',
  })
  defineProps({
    boxWidth: {
      type: Number,
      // default: 200,
    },
    boxHeight: {
      type: Number,
      // default: 100,
    },
    isExtra: Boolean,
  })
</script>

<template>
  <div class="card" :style="{ width: boxWidth ? `${boxWidth}px` : 'auto', height: boxHeight ? `${boxHeight}px` : 'auto' }">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    width: 200px;
    height: 100px;
    border-radius: 15px;
    /* background-color: #00000040; */
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    transform: scale(1);
    transition:
      backdrop-filter 0.3s,
      transform 0.3s;
    &:hover {
      transform: scale(1.01);
    }
    &:active {
      transform: scale(0.98);
    }
  }
</style>
