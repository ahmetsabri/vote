require('./bootstrap');
import Vue from 'vue';
import Home from './components/Home.vue';
import Vuex from 'vuex';
import vueRouter from 'vue-router';
import {routes} from './routes';
import storeData from './store/index';
import Vuetify from 'vuetify';

Vue.use(Vuex);
Vue.use(vueRouter);
Vue.use(Vuetify);

const router = new vueRouter({
  routes,
  mode:'history'
})
const store = new Vuex.Store(storeData);

const app = new Vue({
    el: '#app',

    router,
    store,
    components:{
      Home,
    }
});
