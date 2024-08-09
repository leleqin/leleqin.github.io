<template>
  <div class="water">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
  defineOptions({
    name: 'WaterDrop',
  })
</script>

<style lang="scss" scoped>
  .water {
    width: 200px;
    height: 200px;
    margin: 100px 50px;
    border-radius: 61% 39% 57% 43% / 46% 67% 33% 54%;
    box-shadow:
      inset 10px 20px 30px rgba(0, 0, 0, 0.5),
      10px 10px 20px rgba(0, 0, 0, 0.3),
      15px 15px 30px rgba(0, 0, 0, 0.05),
      inset -10px -20px 30px rgba(255, 255, 255, 0.8);
    position: relative;
    animation: water-a 3s linear infinite alternate;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .water::before {
    content: '';
    position: absolute;
    top: 15%;
    left: 50%;
    width: 10px;
    height: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 46% 54% 36% 64% / 46% 43% 57% 54%;
    animation: water-b 2s linear infinite alternate;
  }
  .water::after {
    content: '';
    position: absolute;
    top: 25%;
    left: 30%;
    width: 6px;
    height: 6px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 46% 54% 36% 64% / 46% 43% 57% 54%;
  }
  @keyframes water-a {
    25% {
      border-radius: 58% 42% 59% 41% / 52% 56% 54% 48%;
    }
    50% {
      border-radius: 46% 54% 40% 60% / 52% 33% 67% 48%;
    }
    75% {
      border-radius: 65% 35% 71% 29% / 31% 60% 40% 69%;
    }
    100% {
      border-radius: 60% 40% 43% 57% / 45% 51% 49% 55%;
    }
  }
  @keyframes water-b {
    25% {
      top: 17%;
      left: 50%;
    }
    50% {
      top: 20%;
      left: 50%;
    }
    100% {
      top: 22%;
      left: 50%;
    }
  }
</style>
