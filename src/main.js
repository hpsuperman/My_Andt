import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from '../src/router/index'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(Antd);
const router = new VueRouter({
  routes,
})
new Vue({
  el:'#app',
  router,
  render: h=> h(App)
}).$mount('#app')
