import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const {AnswerInfo,postAnswer} = require('../tophp');


const state = {
  postArr: [],//答题情况
  goldnum: 0,//金币数
  isPost: false,//是否已经提交答案
  questions: [//题目
    {
      options: ['a', 'b', 'c', 'd'],
      answerIndex: 0,
      answerContent:'208'
    },
    {
      options: ['a', 'b', 'c', 'd'],
      answerIndex: 0,
      answerContent:'105'
    }
  ]
};
const getters = {};
const actions = {
  postAnswer({state}){
    postAnswer(state.postArr, state.questions.length);
  }
};
const mutations = {
  setPost(state,value){
    state.isPost=value;
  }

};
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})


export default store
