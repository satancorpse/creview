import axios from "axios";

const state = {
    cooks: [],
    modal: false,
    cookUnderEdit: {id: '', name: '', email: ''}
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
    },

    updateCook: (context, cook) => {
        return new Promise((resolve, reject) => {
            axios.patch('/api/cooks/' + cook.id, {
                name: cook.name,
                email: cook.email,
            }).then(res => {
                context.commit('cookUpdated', res.data)
                resolve(res)
            }).catch(err => {
                console.log(err)
                reject(err)
            })
        })
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
        state.cookUnderEdit.id = cook.id
        state.cookUnderEdit.name = cook.name
        state.cookUnderEdit.email = cook.email
    },

    modalClosed: (state) => {
        state.modal = false
    },

    updateName: (state, name) => {
        state.cookUnderEdit.name = name
    },

    updateEmail: (state, email) => {
        state.cookUnderEdit.email = email
    },

    cookUpdated: (state, cook) => {

        state.modal = false

        const index = state.cooks.findIndex(i => i.id == cook.id)

        state.cooks.splice(index, 1, {
            id: cook.id,
            name: cook.name,
            email: cook.email
        })
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
