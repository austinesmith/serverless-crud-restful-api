// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import '@/plugins/vuetify.js';
import '@/plugins/vec-table.js';
import '@/plugins/firebase.js';
import store from '@/store/store.js';
import App from './App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');