// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import store from './store';
import '../node_modules/bootstrap'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
