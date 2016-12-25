// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import App from './App';
import Goods from 'components/goods/goods';
import Ratings from 'components/ratings/ratings';
import Seller from 'components/seller/seller';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueResource);

const routes = [
  { path: '/goods', component: Goods },
  { path: '/ratings', component: Ratings },
  { path: '/seller', component: Seller }
];

const router = new VueRouter({
  routes, // （缩写）相当于 routes: routes
  linkActiveClass: 'active'
});

let sellerData = null;
const SELLER_ERR_OK = 0;

const SellerStore = new Vuex.Store({
  state: {
    seller: {}
  },
  mutations: {
    getSeller (seller) {
      seller = sellerData;
      console.log(seller);
    }
  }
});

const app = new Vue({
  router,
  created () {
    this.$http.get('/api/seller').then((response) => {
      if (response.body.errno === SELLER_ERR_OK) {
        sellerData = response.body.data;
        SellerStore.commit('getSeller');
      }
    });
  },
  template: '<App/>',
  components: {App}
});
app.$mount('#app');

router.push('/goods');
