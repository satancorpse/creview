import axios from "axios";

const state = {
    cooks: []
};

const actions = {
    fetchCooks: context => {
        axios
            .get("/api/cooks")
            .then(response => {
                context.commit("cooksFetched", response.data);
            })
            .catch(error => {
                // eslint-disable-next-line
                console.error(error);
            });
    }
};

const mutations = {
    cooksFetched: (state, cooks) => {
        state.cooks = cooks;
    }
};

const getters = {
    cooks: state => state.cooks
};

export default {
    state,
    getters,
    actions,
    mutations
};
