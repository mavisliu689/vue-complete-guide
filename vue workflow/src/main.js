import Vue from 'vue'
import App from './App.vue'
import ServerStatus from './ServerStatus'
Vue.component('app-server-status', ServerStatus)

const vm = new Vue({
  ...App,

})

vm.$mount('#app')