<script lang="ts" setup>
  import { WaterDrop } from '@/components'
  defineOptions({
    name: 'HomePage',
  })
</script>

<template>
  <div class="home">
    <div class="left-content">
      <div class="title">
        <WaterDrop :water-style="{ width: '150px', height: '150px', marginRight: '50px' }">
          <img src="~@/assets/images/logo_color.png" alt="logo" />
        </WaterDrop>
        <p>leleqin.io</p>
      </div>
      <!-- <div class="motto">
        <Card :box-width="400" :box-height="120">
          <div class="desc">
            <p>This is the life</p>
            <p>我有一个梦想！</p>
          </div>
        </Card>
      </div> -->
    </div>
    <div class="right-content"></div>
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

    .left-content {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      .title {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        img {
          width: 60px;
          height: 60px;
        }

        p {
          font-size: 60px;
          font-weight: bold;
          color: white;
        }
      }

      .motto {
        width: 400px;
        margin-top: 50px;

        .desc {
          margin: 20px;
          p {
            color: #fff;
          }
          p:first-child {
            padding-top: 20px;
            font-size: 20px;
          }
          p:last-child {
            padding-top: 10px;
            font-size: 30px;
          }
        }
      }
    }

    .right-content {
      flex: 1;
    }
  }
</style>
