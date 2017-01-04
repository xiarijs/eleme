/**
 * Created by Administrator on 2017/1/3.
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import Home from './modules/home';

export default new Vuex.Store({
  modules: {
    Home
  }
});
