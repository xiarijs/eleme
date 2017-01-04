/**
 * Created by Administrator on 2017/1/3.
 */
import Vue from 'vue';
import VueResource from 'vue-resource';
import * as types from '../types';

Vue.use(VueResource);

// ajax返回数据判断
const ERROR_NO = 0;

const state = {
  seller: {},
  count: 10
};

const getters = {
  seller: (state) => {
    return state.seller;
  },
  count: (state) => {
    return state.count;
  }
};

const actions = {
  getseller: ({commit}) => {
    commit(types.GETSELLER);
  }
};

const mutations = {
  [types.GETSELLER]: (state) => {
    Vue.http.get('/api/seller').then((response) => {
      if (response.body.errno === ERROR_NO) {
        state.seller = response.body.data;
      }
      console.log(state.seller);
      console.log('获取seller数据！！！');
    });
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
