import Vue from 'vue'
import VueRouter from 'vue-router';
import resource from 'vue-resource'
import App from './App.vue'
import { routes } from './routers';
import store from './store/store';

Vue.use(VueRouter);
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
