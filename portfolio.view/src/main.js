import Vue from 'vue'
import 'vue-router'
import App from './App.vue'
import './assets/styles/scss/global.scss'
import router from './router.js'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app');








