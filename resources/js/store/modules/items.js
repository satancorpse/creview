import axios from "axios";

const state = {
    items: [],
    selectedItem: {id: '', name: '', cook: {name: ''}}
};

const actions = {
    fetchItems: context => {

        axios.get("/api/items").then(response => {
            context.commit("itemsFetched", response.data);
        }).catch(error => {
            console.error(error);
        });
    },

    createItem: (context, data) => {
        return new Promise((resolve, reject) => {
            axios.post('/api/items/create', {
                name: data.name,
                cook_id: data.cook_id,
            }).then(res => {
                context.commit('itemCreated', res.data)
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },

    updateItem: (context, item) => {
        return new Promise((resolve, reject) => {
            axios.patch('/api/items/' + item.id, {
                name: item.name,
                cook_id: item.cook_id
            }).then(res => {
                context.commit('itemUpdated', res.data)
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },

    removeItem: (context, item) => {
        return new Promise((resolve, reject) => {
            axios.delete('/api/items/' + item.id).then(res => {
                context.commit('itemRemoved', item.id)
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
}

const mutations = {
    itemsFetched: (state, items) => {
        state.items = items;
    },

    itemCreated: (state, item) => {
        state.items.push({
            name: item.name,
            cook_id: item.cook_id,
            cook: {
                name: item.cook.name
            }
        })
    },

    itemSelected: (state, item) => {
        state.selectedItem = item
    },

    updateName: (state, name) => {
        state.selectedItem.name = name
    },

    updateCook: (state, cook) => {
        state.selectedItem.cook_id = cook
    },

    updatePublish: (state, publish) => {
        state.selectedItem.publish = publish
    },

    itemUpdated: (state, item) => {
        const index = state.items.findIndex(i => i.id == item.id)

        state.items.splice(index, 1, {
            id: item.id,
            name: item.name,
            cook_id: item.cook_id,
            cook: { name: item.cook.name }
        })
    },

    itemRemoved: (state, item) => {
        const index = state.items.findIndex(i => i.id == item);

        state.items.splice(index, 1)
    }

};

const getters = {
    items: state => state.items,
    published_items: state => state.items.filter(item => item.publish),
    closed_items: state => state.items.filter(item => !item.publish),
    selectedItem: state => state.selectedItem
};

export default {
    state,
    getters,
    actions,
    mutations
};
