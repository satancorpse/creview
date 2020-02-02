import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import users from "./modules/users";
import cooks from "./modules/cooks";
import items from "./modules/items";
import reviews from "./modules/reviews";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
    modules: {
        auth,
        users,
        cooks,
        items,
        reviews
    },
    strict: debug
});
