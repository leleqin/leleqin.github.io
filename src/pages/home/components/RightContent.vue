<script lang="ts" setup>
  import { Card } from '@/components'
  import { useRouter } from 'vue-router'
  defineOptions({
    name: 'HomeRightContent',
  })

  const router = useRouter()

  const goToAbout = () => {
    router.push({ name: 'About' })
  }
</script>

<template>
  <div class="content">
    <Card class="card-1" @click="goToAbout"> About </Card>
    <Card class="card-2">Awesome components</Card>
    <Card class="card-3">Technical stack</Card>
    <Card class="card-4">Article</Card>
  </div>
</template>

<style lang="scss" scoped>
  .content {
    position: relative;
    height: calc(100vh - 150px);
    width: 800px;
    display: grid;
    grid-template-columns: 0.5fr repeat(5, 1fr) 0.5fr 0.2fr;
    grid-template-rows: 0.5fr repeat(7, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 30px;

    .card-1 {
      grid-area: 2 / 1 / 5 / 4;
    }
    .card-2 {
      grid-area: 1 / 4 / 6 / 7;
    }
    .card-3 {
      grid-area: 6 / 4 / 9 / 8;
    }
    .card-4 {
      grid-area: 5 / 2 / 11 / 4;
    }
  }
</style>
