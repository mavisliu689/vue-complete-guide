import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'
import App from './App.vue'
import { routes } from './routers';
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vue-stock-65c3c.firebaseio.com/';
Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
})
const router = new VueRouter({
  mode:'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
