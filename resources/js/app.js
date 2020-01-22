// window._ = require('lodash');
// window.axios = require('axios');
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from './store';
import App from './components/App';

Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    store,
    router: new VueRouter(routes)
});
