import axios from 'axios';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.getters.token;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "./store";
import App from "./view/App";

Vue.use(VueRouter);

const router = new VueRouter(routes);

router.beforeEach((to, from, next) => {
    if (!store.getters.signedIn) {
        if (to.path !== "/login") {
            next("/login");
        }
        next();
    } else {
        if (to.path === "/") {
            next("/dashboard");
        } else if (to.path === "/login") {
            next("/dashboard");
        } else {
            if (to.matched.some(record => record.meta.requiresAdmin)) {
                if (!(store.getters.god || store.getters.admin)) {
                    next("/dashboard");
                } else {
                    next();
                }
            } else if (to.matched.some(record => record.meta.requiresGod)) {
                if (!store.getters.god) {
                    next("/dashboard");
                } else {
                    next();
                }
            }
            next();
        }
        next();
    }
});

const app = new Vue({
    el: "#app",
    components: {
        App
    },
    template: "<App/>",
    store,
    router
});
