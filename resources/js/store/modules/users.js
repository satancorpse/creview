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

    updateUser: (context, data) => {
        return new Promise((resolve, reject) => {
            axios.patch('/api/users/' + data.user.id, {
                name: data.user.name,
                email: data.user.email,
                role: data.user.role,
            }).then(res => {
                context.commit('userUpdated', res.data)
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },

    removeUser: (context, user) => {
        console.log(user)
        return new Promise((resolve, reject) => {
            axios.delete('/api/users/' + user.id).then(res => {
                context.commit('userRemoved', user.id)
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
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
    },

    updateName: (state, name) => {
        state.user.name = name
    },

    updateEmail: (state, email) => {
        state.user.email = email
    },

    updateRole: (state, role) => {
        state.user.role = role
    },

    userUpdated: (state, user) => {
        const index = state.users.findIndex(i => i.id == user.id)

        state.users.splice(index, 1, {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
        })
    },

    userRemoved: (state, user) => {
        const index = state.users.findIndex(i => i.id == user)

        state.users.splice(index, 1)
    }
};

const getters = {
    users: state => state.users,
    selectedUser: state => state.user
};

export default {
    state,
    getters,
    actions,
    mutations
};
