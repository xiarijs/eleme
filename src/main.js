// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Goods from './components/goods/goods';
import Ratings from './components/ratings/ratings';
import Seller from './components/seller/seller';

Vue.use(VueRouter);

const routes = [
  { path: '/goods', component: Goods },
  { path: '/ratings', component: Ratings },
  { path: '/seller', component: Seller }
];

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
});

const app = new Vue({
  router,
  template: '<App/>',
  components: {App}
});
app.$mount('#app');
// set default router url
router.push('/goods');
