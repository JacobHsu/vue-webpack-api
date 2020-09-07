// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import Api from './config/api';

Vue.config.productionTip = false
Vue.use(vueResource)

Vue.prototype.middleware =  'http://localhost:3000'

Vue.prototype.api = Api;
Vue.http.options.credentials = true
Vue.http.options.emulateJSON = true
Vue.http.options.headers = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  'Content-Type': 'application/json;charset=utf-8'
}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
