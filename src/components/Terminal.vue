<template>
  <div class="terminal-wrapper">
    <div class="header">
      <h4 class="title">leleqin</h4>
      <ul class="dot-list">
        <li class="red" />
        <li class="yellow" />
        <li class="green" />
      </ul>
    </div>
    <div class="terminal">
      <div class="terminal-inner"> </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  defineOptions({
    name: 'TerminalIndex',
  })
</script>

<style lang="scss">
  .terminal-wrapper {
    position: relative;
    font-size: 16px;
    margin: 5vh auto 10px !important;
    width: 60%;
    max-width: 1200px;
    border-radius: 4px;
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media screen and (max-width: 760px) {
      width: 100%;
      margin-top: 2vh !important;
    }

    .header {
      position: absolute;
      z-index: 2;
      top: 0;
      right: 0;
      left: 0;
      background-color: #222;
      text-align: center;
      padding: 2px;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      text-shadow:
        rgb(160, 156, 155) 0px 0px 1px,
        rgb(255, 255, 251) 0px 0px 1px,
        rgb(255, 255, 251) 0px 0px 1px;
      box-shadow: inset 0px 3px 20px 0px #414141;

      .title {
        margin: 5px;
        letter-spacing: 1px;
        font-weight: 300;
      }

      .dot-list {
        position: absolute;
        top: 3px;
        left: 5px;
        padding-left: 0;
        margin: 0;
        cursor: pointer;

        li {
          display: inline-block;
          width: 12px;
          border-radius: 6px;
          background-color: rgb(49, 49, 49);
          margin-left: 6px;
          height: 12px;
        }

        .red {
          background-color: rgb(200, 48, 48);
        }

        .yellow {
          background-color: rgb(247, 219, 96);
        }

        .green {
          background-color: rgb(46, 201, 113);
        }
      }
    }

    .terminal {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      overflow: auto;
      z-index: 1;
      margin-top: 10px;
      height: 90vh;
      max-height: 90vh;
      box-shadow: -2px 7px 20px 3px #222;
      background-color: rgb(49, 49, 49);

      @media screen and (max-width: 760px) {
        box-shadow: none;
        height: 96vh;
        max-height: 96vh;
      }

      .terminal-inner {
        min-height: 140px;
        padding: 20px;
        font-weight: normal;
        font-family: 'Fira Code', 'Source Code Pro', Monaco, Menlo, Consolas, monospace;
        color: #fff;
        text-shadow:
          rgb(160, 156, 155) 0px 0px 1px,
          rgb(255, 255, 251) 0px 0px 1px;
        @media screen and (max-width: 760px) {
          padding: 20px 5px 0px 5px;
        }
      }
    }
  }
</style>
