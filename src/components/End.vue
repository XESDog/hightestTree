<template>
  <div>
    <transition name="fade">
      <div v-show='fadeIn'>
        <img src='../assets/load.png' class="bg"/>
        <img src="../assets/result.png" class="score"/>
        <img src="../assets/close.png" class="close" @click="click()"/>
        <p class="txt">{{$store.state.goldnum}}</p>
        <div class="timeout">{{time}}s</div>
      </div>
    </transition>
  </div>
</template>
<script>
  export default require('./EndCode');
</script>
<style scoped>
  .bg {
    width: 100%;
    height: 100%;
  }

  .score {
    position: absolute;
    left: 4.04rem;
    top: 0px;
    width: 11.12rem;
  }

  .txt {
    position: absolute;
    left: 9.09rem;
    top: 3.75rem;
    font-size: 0.5rem;
    width: 1.6rem;
    color: red;
    text-align: center;
    /*border: 1px solid red;*/
  }

  .close {
    top: .3rem;
    right: .4rem;
    width: 1rem;
    height: 1rem;
    position: absolute;
    cursor: pointer;

  }

  .timeout {
    position: absolute;
    top: 1.3rem;
    right: .6rem;
    color: #ee5766;
    font-weight: 400;
    font-family: YouYuan;
    font-size: .6rem;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */
  {
    opacity: 0
  }
</style>
