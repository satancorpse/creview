import axios from "axios";

const state = {
    users: [],
    user: []
};

const actions = {

    fetchUsers: context => {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.getters.token;

        axios.get('/api/users').then(response => {
                context.commit('usersFetched', response.data);
            }).catch(error => {
                console.error(error);
        });
    },

    fetchProfile: (context, data) => {
        axios.get('/api/profile/' + data).then(response => {
            context.commit('profileFetched', response.data);
            }).catch(error => {
                console.error(error);
        });
    },

    createUser: (context, data) => {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.getters.token;

        return new Promise((resolve, reject) => {
            axios.post('/api/users/register', {
                name: data.name,
                email: data.email,
                password: data.password,
                password_confirmation: data.password_confirmation
            }).then(res => {
                context.commit('userRegistered', res.data)
                resolve(res)
            }).catch(err => {
                console.log(err)
                reject(err)
            })
        })
    },
}

const mutations = {
    usersFetched: (state, users) => {
        state.users = users;
    },

    profileFetched: (state, user) => {
        state.user = user
    },

    userRegistered: (state, user) => {
        state.users.push({
            name: user.name,
            email: user.email
        })
    }
};

const getters = {
    users: state => state.users
};

export default {
    state,
    getters,
    actions,
    mutations
};
