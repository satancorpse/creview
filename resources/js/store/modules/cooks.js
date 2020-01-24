import axios from "axios";

const state = {
    cooks: [],
    selectedCook: {id: '', name: '', email: ''}
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
    },

    removeCook: (context, cook) => {
        return new Promise((resolve, reject) => {
            axios.delete('/api/cooks/' + cook.id).then(res => {
                context.commit('cookRemoved', cook.id)
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

    cookSelected: (state, cook) => {
        state.selectedCook.id = cook.id
        state.selectedCook.name = cook.name
        state.selectedCook.email = cook.email
    },

    updateName: (state, name) => {
        state.selectedCook.name = name
    },

    updateEmail: (state, email) => {
        state.selectedCook.email = email
    },

    cookUpdated: (state, cook) => {

        const index = state.cooks.findIndex(i => i.id == cook.id)

        state.cooks.splice(index, 1, {
            id: cook.id,
            name: cook.name,
            email: cook.email
        })
    },

    cookRemoved: (state, cook) => {
        const index = state.cooks.findIndex(i => i.id == cook.id) + 1

        state.cooks.splice(index, 1)
    }
};

const getters = {
    cooks: state => state.cooks,
    selectedCook: state => state.selectedCook,
};

export default {
    state,
    getters,
    actions,
    mutations
};
