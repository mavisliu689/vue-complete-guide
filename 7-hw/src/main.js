import Vue from 'vue'
import App from './App.vue'


export const ServerBus = new Vue({
  methods: {
    serverSelected(server) {
      this.$emit('serverSelected', server);
    },
    statusChange(server) {
      this.$emit('statusChange', server);
    }
  }
})
new Vue({
  el: '#app',
  render: h => h(App)
})
