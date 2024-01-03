import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTyperPlugin from 'vue-typer'
import AOS from 'aos';
import "aos/dist/aos.css";
// CommonJS
// var VueTyperPlugin = require('vue-typer').default
// Global
// var VueTyperPlugin = window.VueTyper.default


Vue.use(VueTyperPlugin)

Vue.config.productionTip = false

new Vue({
  created(){
    AOS.init();
  },
  router,
  render: h => h(App)
}).$mount('#app')
