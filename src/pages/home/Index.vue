<script lang="ts" setup>
  import RightContent from './components/RightContent.vue'
  import LeftContent from './components/LeftContent.vue'
  defineOptions({
    name: 'HomePage',
  })
</script>

<template>
  <div class="home">
    <LeftContent />
    <RightContent />
  </div>
</template>

<style lang="scss" scoped>
  .home {
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    .right-content {
      flex: 1;
    }
  }
</style>
