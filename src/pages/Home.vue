<template>
  <div class="home">
    <div class="left-content">
      <div class="title">
        <WaterDrop>
          <img src="~@/assets/images/logo_color.png" alt="logo" />
        </WaterDrop>
        <p>leleqin.io</p>
      </div>
    </div>
    <div class="right-content"></div>
  </div>
</template>

<script lang="ts" setup>
  import { WaterDrop } from '@/components'
  defineOptions({
    name: 'HomePage',
  })
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    .left-content {
      width: 50%;

      .title {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        img {
          width: 88px;
          height: 88px;
        }

        p {
          font-size: 60px;
          font-weight: bold;
          color: white;
        }
      }
    }

    .right-content {
      flex: 1;
    }
  }
</style>
