<template>
  <div id="app">
    <img src="./assets/logo.svg" class="logo"/>
    <router-view/>
  </div>
</template>

<script>
  const {postAnswer} = require('./tophp');
  export default {
    name: 'app',
    mounted() {
      const self = this;
      const ANSWER_RESULT = 'answerResult';
      const RESUBMIT_ANSWER = 'resubmitAnswer';
      window.addEventListener('message', function (e) {
        //php反馈金币信息
        if (e.data.type === ANSWER_RESULT) {
          self.$store.state.goldnum = e.data.data.goldnum;
          self.$router.push('/end');
        }
        //php主动收卷
        else if (e.data.type === RESUBMIT_ANSWER) {
          if (!self.$store.state.isPost) {
            self.$store.commit('setPost', true);
            self.$store.dispatch('postAnswer');
          }
        }
      });
    }
  }
</script>

<style>
  #app {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    width: 19.2rem;
    height: 10.8rem;
  }

  .logo {
    position: absolute;
    z-index: 999;
    left: .5rem;
    bottom: .3rem;
    width: 1.9rem;
    /*height: 0.37rem;*/
  }
</style>
