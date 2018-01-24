import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Vuelidate from 'vuelidate'

import router from './router'
import store from './store'

Vue.use(Vuelidate)

axios.defaults.baseURL = 'https://vue-update-368f6.firebaseio.com/';
//axios.defaults.headers.common['Authorization'] = 'dfdfd';
axios.defaults.headers.get['Accept'] = 'application/json'

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log("request", config)
  return config
});

const resInterceptor = axios.interceptors.response.use(res => {
  console.log("response",res)
  return res
})

axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
