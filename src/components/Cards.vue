<template>
  <div class="cards">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
  defineOptions({
    name: 'Cards',
  })
</script>

<style lang="scss" scoped>
  .cards {
    width: 200px;
    height: 100px;
    border-radius: 6px;
    background-color: #00000040;
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
