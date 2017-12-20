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
    }
  },
  mounted() {
    const self = this;
    init('A6AF9B88387745EAB8D74C5C5AC76E68', 'source', true)
      .then(({lib, exportRoot}) => new Promise(resolve => {

        const loading = document.getElementsByClassName('page-loading')[0];
        loading.style.visibility = 'hidden';


        //your code
        let answerSpaces = [exportRoot['space_0'], exportRoot['space_1']
          , exportRoot['space_2'], exportRoot['space_3']];//答题框数据
        let mousemoveListen;
        let pressupListen;
        let targetSpace;
        let answerSpaceStatus = [];//6\7\8\9

        //提交
        exportRoot.submitBtn.on('mousedown',function () {
          if(answerSpaceStatus[0]&&answerSpaceStatus[1]&&answerSpaceStatus[2]&&answerSpaceStatus[3]) {
            if(answerSpaceStatus[0] + answerSpaceStatus[1] - answerSpaceStatus[2] === answerSpaceStatus[3]){
              let answerInfo=new AnswerInfo();
              answerInfo.success(0,"")
              self.$store.state.postArr.push(answerInfo);
              self.$store.dispatch('postAnswer')
            }else{
              let answerInfo=new AnswerInfo();
              answerInfo.fail(0, "");
              self.$store.state.postArr.push(answerInfo);
              self.$store.dispatch('postAnswer')
            }
          }else{
            console.log('还没填完');
          }
        })

        for (let i = 0; i < 4; i++) {
          let item = exportRoot['num_' + i];
          //记录原始位置
          item.p = [item.x, item.y];

          item.on('mousedown', () => {

            let childNum = exportRoot.numChildren;
            exportRoot.addChildAt(item, childNum);
            //清除之前的数据
            if (item.spaceNum>-1 && answerSpaceStatus[item.spaceNum]) {
              answerSpaceStatus[item.spaceNum] = null;
            }

            mousemoveListen = exportRoot.stage.on('stagemousemove', (e) => {
              item.x = e.localX;
              item.y = e.localY;
              let hitNum = hitTestSpace(item);
              if (hitNum > -1) {
                targetSpace = exportRoot['space_' + hitNum]
                targetSpace.gotoAndStop(1)

              }
              answerSpaces.forEach((value, index) => {
                if (index !== hitNum) {
                  value.gotoAndStop(0)
                }
              })

            });
            pressupListen = exportRoot.stage.on('pressup', (e) => {

              let hitNum = hitTestSpace(item);

              if (hitNum > -1 && !answerSpaceStatus[hitNum]) {
                item.x = exportRoot['space_' + hitNum].x;
                item.y = exportRoot['space_' + hitNum].y;
                answerSpaceStatus[hitNum] = item.value;
                item.spaceNum = hitNum;
              } else {
                item.x = item.p[0];
                item.y = item.p[1];
                item.spaceNum = null;
              }

              answerSpaces.forEach((value, index) => {
                value.gotoAndStop(0)
              })

              exportRoot.stage.off('stagemousemove', mousemoveListen);
              exportRoot.stage.off('pressup', pressupListen);

            })
          })

        }

        function hitTestSpace(item) {
          let numBounds = new createjs.Rectangle(item.x - 80, item.y - 80, 160, 160);
          let index = -1;
          answerSpaces.some((value, i) => {
            if (numBounds.intersects(value.bounds)) {
              index = i;
              return true;
            }

          });
          return index;
        }

      }));
  }
}
