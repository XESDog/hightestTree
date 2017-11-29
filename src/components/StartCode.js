let {init} = require('../exportRoot');
let {AnswerInfo} = require('../tophp')


/**
 * flash动画播放到最后一帧
 * @param mc
 * @return {Promise}
 */
function flashAnimatePromise(mc) {
  return new Promise((resolve) => {
    mc.gotoAndPlay(1);
    let tick = mc.on('tick', function () {
      if (mc.totalFrames - 1 === mc.currentFrame) {
        mc.off('tick', tick);
        resolve();
      }
    })
  })
}

function tweenAnimatePromise(mc, option, duration) {
  return new Promise(resolve => {
    createjs.Tween.get(mc).to(option, duration).call(resolve);
  })
}

let optionMcs = [];

function cleanOptionMcs() {
  for (let i = optionMcs.length - 1; i >= 0; i--) {
    let option = optionMcs[i];
    option.off('click', option.listen);
    optionMcs.splice(optionMcs.length - 1);
  }
}

export default {
  name: 'Start',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    const self = this;
    const questions = this.$store.state.questions;
    init('397C013A9DAC4A65A5F98BE97E083478', 'source', true)
      .then(({lib, exportRoot}) => new Promise(resolve => {

        const loading = document.getElementsByClassName('page-loading')[0];
        loading.style.visibility = 'hidden';

        let questionLength = questions.length;

        for (let i = 0; i < questionLength; i++) {

          exportRoot.gameMc.on(`question_${i}`, (function () {

            cleanOptionMcs();

            let options = questions[i].options;
            let answerIndex = questions[i].answerIndex;
            const monkey = exportRoot.gameMc.monkey;
            const monkeyPosition = [monkey.x, monkey.y];
            const j = i;
            const txt = exportRoot.gameMc[`txt_${j}`];
            txt.alpha = 0;

            for (let i = 0; i < options.length; i++) {

              const option = this[`option_${j}_${options[i]}`];
              let lock = false;
              option.cursor = 'pointer';
              optionMcs.push(option);

              option.listen = option.on('click', function () {
                if (lock) return;
                lock = true;
                let distance = Math.abs(monkey.x - option.x);
                monkey.gotoAndStop('run');
                tweenAnimatePromise(monkey, {x: option.x}, distance * 4)
                  .then(() => {
                    monkey.gotoAndStop('stand');
                  })
                  .then(() => {
                    return flashAnimatePromise(option)
                  })
                  .then(() => {
                    const answerInfo = new AnswerInfo();
                    if (i === answerIndex) {
                      option.visible = false;
                      monkey.gotoAndStop('catch');

                      answerInfo.success(j, "");
                      self.$store.state.postArr.push(answerInfo);

                      return flashAnimatePromise(monkey.getChildAt(0));
                    } else {
                      answerInfo.fail(j, "");
                      self.$store.state.postArr.push(answerInfo);
                    }
                  })
                  .then(() => {
                    return new Promise(resolve=>{
                      setTimeout(function () {
                        return resolve();
                      }, 1000)
                    })

                  })
                  .then(() => {
                    monkey.x = monkeyPosition[0];
                    monkey.gotoAndStop('stand');
                    if (j === questionLength - 1) {
                      //题目答完
                      cleanOptionMcs();
                      self.$store.commit('setPost', true);
                      self.$store.dispatch('postAnswer');
                    } else {
                      exportRoot.gameMc.gotoAndStop(j + 2);//第0帧是片头，第1帧是答题1对应j=0，要跳到第2题j=j+2
                    }
                    lock = false;
                  })
              })

            }
          }).bind(exportRoot.gameMc))
        }

      }));
  }
}
