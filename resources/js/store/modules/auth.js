import axios from "axios";

const state = {
    auth_user: JSON.parse(localStorage.getItem('auth_user')) || null
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
                    context.commit("set_auth_user", response.data);

                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },

    // authUser: (context) => {
    //     console.log(context.getters.superAdmin)
    //     axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.cr_token

    //     if(!context.getters.signedIn) {
    //         return null;
    //     }

    //     return new Promise((resolve, reject) => {
    //         axios
    //             .get("/api/auth-user")
    //             .then(response => {
    //                 context.commit("set_auth_user", response.data);

    //                 resolve(response)
    //             })
    //             .catch(error => {
    //                 reject(error);
    //             });
    //     });
    // }
};

const mutations = {
    // setToken: (state, token) => {
    //     state.cr_token = token
    // },

    set_auth_user: (state, auth_user) => {
        state.auth_user = auth_user
    }
};

const getters = {
    token: state => state.auth_user.access_token,
    signedIn: state => state.auth_user !== null,
    god: state => state.auth_user.user.role === 1,
    admin: state => state.auth_user.user.role === 2
};

export default {
    state,
    getters,
    actions,
    mutations
};
