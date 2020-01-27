import axios from "axios";

const state = {
    items: [],
    selectedItem: {id: '', name: '', cook: {name: ''}, publish: ''}
};

const actions = {
    fetchItems: context => {
        axios.get("/api/items").then(response => {
            context.commit("itemsFetched", response.data);
        }).catch(error => {
            // eslint-disable-next-line
            console.error(error);
        });
    },

    createItem: (context, data) => {
        return new Promise((resolve, reject) => {
            axios.post('/api/items/create', {
                name: data.name,
                cook_id: data.cook_id,
                publish: data.publish
            }).then(res => {
                console.log(res.data)
                context.commit('itemCreated', res.data)
                resolve(res)
            }).catch(err => {
                console.log(err)
                reject(err)
            })
        })
    },

    updateItem: (context, item) => {
        console.log(item)
        return new Promise((resolve, reject) => {
            axios.patch('/api/items/' + item.id, {
                name: item.name,
                publish: item.publish,
                cook_id: item.cook_id
            }).then(res => {
                context.commit('itemUpdated', res.data)
                resolve(res)
            }).catch(err => {
                console.log(err)
                reject(err)
            })
        })
    },
}

const mutations = {
    itemsFetched: (state, items) => {
        state.items = items;
    },

    itemCreated: (state, item) => {
        state.items.push({
            name: item.name,
            cook_id: item.cook_id,
            publish: item.publish,
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
        console.log(cook)
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
            publish: item.publish,
            cook_id: item.cook.id,
            cook: { name: item.cook.name}
        })
    },

};

const getters = {
    items: state => state.items,
    selectedItem: state => state.selectedItem
};

export default {
    state,
    getters,
    actions,
    mutations
};