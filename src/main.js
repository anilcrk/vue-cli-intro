import Vue from 'vue'
import App from './App.vue' // render olacak dosya

new Vue({
  el: '#app',
  // es6 function --> App render edilir.
  render: h => h(App)
})
