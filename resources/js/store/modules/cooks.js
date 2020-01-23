import axios from "axios";

const state = {
    cooks: [],
    modal: false,
    cookUnderEdit: ''
};

const actions = {
    fetchCooks: context => {
        axios.get("/api/cooks").then(response => {
            context.commit("cooksFetched", response.data);
        }).catch(error => {
            // eslint-disable-next-line
            console.error(error);
        });
    },

    createCook: (context, data) => {

        return new Promise((resolve, reject) => {
            axios.post('/api/cooks/create', {
                name: data.name,
                email: data.email,
            }).then(res => {
                context.commit('cookCreated', res.data)
                resolve(res)
            }).catch(err => {
                console.log(err)
                reject(err)
            })
        })
    },

    showModal: (context, cook) => {
        context.commit('cookBeingEdited', cook)
    },

    closeModal: (context) => {
        context.commit('modalClosed')
    }
};

const mutations = {
    cooksFetched: (state, cooks) => {
        state.cooks = cooks;
    },

    cookCreated: (state, cook) => {
        state.cooks.push({
            name: cook.name,
            email: cook.email
        })
    },

    cookBeingEdited: (state, cook) => {
        state.modal = true
        state.cookUnderEdit = cook
    },

    modalClosed: (state) => {
        state.modal = false
    }
};

const getters = {
    cooks: state => state.cooks,
    cookUnderEdit: state => state.cookUnderEdit,
    showModal: state => state.modal
};

export default {
    state,
    getters,
    actions,
    mutations
};
