import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTyperPlugin from 'vue-typer'
// CommonJS
// var VueTyperPlugin = require('vue-typer').default
// Global
// var VueTyperPlugin = window.VueTyper.default


Vue.use(VueTyperPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
