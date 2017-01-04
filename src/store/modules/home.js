/**
 * Created by Administrator on 2017/1/3.
 */
import * as types from '../types';

const state = {
  seller1: 111,
  count: 10
};

const getters = {
  seller1: (state) => {
    return state.seller1;
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
    console.log(state);
    console.log('获取seller数据！！！');
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
