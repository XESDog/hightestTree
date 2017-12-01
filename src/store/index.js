import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const {AnswerInfo,postAnswer} = require('../tophp');


const state = {
  postArr: [],//答题情况
  isPost: false,//是否已经提交答案
};
const getters = {};
const actions = {
  postAnswer({state}){
    postAnswer(state.postArr, 1);
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
