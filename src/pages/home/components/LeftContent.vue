<template>
  <div class="left-content">
    <div class="title">
      <WaterDrop :water-style="{ width: '150px', height: '150px', marginRight: '50px' }">
        <img src="~@/assets/images/logo_color.png" alt="logo" />
      </WaterDrop>
      <p>leleqin.io</p>
    </div>
    <div class="profile"> 👋 Hello! I'm Merry, a frontend developer that enjoys being at the intersection of design and code. </div>
    <div class="contact">
      <svg-icon icon="github-fill" class="icon-font-size" />
      <svg-icon icon="email-fill" class="icon-font-size" />
    </div>
  </div>
</template>
<script setup>
  import { WaterDrop } from '@/components'
  defineOptions({
    name: 'HomeLeftContent',
  })
</script>
<style lang="scss" scoped>
  .left-content {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

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

    .profile {
      width: 500px;
      font-size: 24px;
      margin-bottom: 30px;
      margin-top: 40px;
    }

    .contact {
      height: 20px;

      .icon-font-size {
        font-size: 40px;
        margin-right: 30px;
      }
    }
  }
</style>
