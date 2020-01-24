import axios from "axios";

const state = {
    items: []
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
            publish: item.publish,
            cook: {
                name: item.cook.name
            }
        })
    }
};

const getters = {
    items: state => state.items
};

export default {
    state,
    getters,
    actions,
    mutations
};
