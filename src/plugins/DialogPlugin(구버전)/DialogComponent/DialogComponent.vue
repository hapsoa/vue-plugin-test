<template>
  <div class="curtain" v-if="isOpen">
    <div class="modal">
      <div class="title">{{title}}</div>
      <div class="content">{{content}}</div>
      <div class="button-zone">
        <div @click="confirm" class="positive-answer">{{positiveAnswer}}</div>
        <div @click="cancel" class="negative-answer">{{negativeAnswer}}</div>
      </div>
    </div>
  </div>
</template>

<script src='./DialogComponent.ts' lang='ts' />

<style scoped lang='scss'>
.curtain {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  .modal {
    position: relative;
    width: 600px;
    height: 600px;
    left: calc(50% - 300px);
    top: calc(50% - 300px);
    background-color: white;

    .title {
      height: 50px;
      padding: 10px;
    }
    .content {
      width: 100%;
      height: 500px;
      border-top: 1px solid #aaa;
      border-bottom: 1px solid #aaa;
      padding: 10px;
    }
    .button-zone {
      display: flex;
      width: 100%;
      height: 50px;
      .positive-answer {
        flex: 1;
        width: 50%;
        height: 100%;
        cursor: pointer;
        border-right: 1px solid #aaa;
        padding: 10px;
        text-align: center;
        line-height: 35px;
      }
      .negative-answer {
        flex: 1;
        width: 50%;
        height: 100%;
        cursor: pointer;
        padding: 10px;
        text-align: center;
        line-height: 35px;
      }
    }
  }
}

.display-none {
  display: none;
}
</style>