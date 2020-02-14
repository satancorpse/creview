import axios from "axios";

const state = {
    auth_user: JSON.parse(localStorage.getItem('auth_user')) || null,
    access_token: localStorage.getItem('cr_key') || null
};

const actions = {
    requestLogin: (context, user) => {
        return new Promise((resolve, reject) => {
            axios
                .post("/api/login", {
                    email: user.email,
                    password: user.password
                })
                .then(response => {
                    localStorage.setItem("auth_user", JSON.stringify(response.data));
                    localStorage.setItem("cr_key", response.data.access_token);
                    context.commit("set_auth_user", response.data);
                    context.commit("set_token", response.data.access_token);

                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token;

                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },

    logout(context) {
        if (context.getters.signedIn) {
          return new Promise((resolve, reject) => {
            axios.post('/api/logout')
              .then(response => {
                  if(response) {
                    localStorage.removeItem('cr_key')
                    localStorage.removeItem('auth_user')
                    context.commit('loggedout')
                  }
                resolve(response)
              })
              .catch(error => {
                localStorage.removeItem('cr_key')
                localStorage.removeItem('auth_user')
                context.commit('loggedout')
                reject(error)
              })
          })
        }
      },
};

const mutations = {
    set_auth_user: (state, auth_user) => {
        state.auth_user = auth_user
    },
    set_token: (state, token) => {
        state.access_token = token
    },

    loggedout: (state) => {
        state.auth_user = null,
        state.access_token = null
    }
};

const getters = {
    signedIn: state => state.access_token !== null,
    god: state => state.auth_user.user.role === 1,
    admin: state => state.auth_user.user.role === 2,
    reviewer: state => state.auth_user.user.role === 0,
    token: state => state.access_token,
    authId: state => state.auth_user.user.id,
    firstName: state => state.auth_user.user.name.split(' ').slice(-2).join(' ')
};

export default {
    state,
    getters,
    actions,
    mutations
};
