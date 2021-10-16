import Vue from 'vue'
import App from './App.vue' // render olacak dosya
import Home from './components/Home' //Home.vue içindeki component import ediliyor.

Vue.component("lamp-component", Home);

new Vue({
  el: '#app',
  // es6 function --> App render edilir.
  render: h => h(App)
})
