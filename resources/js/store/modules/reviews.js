import axios from "axios";

const state = {
    reviews: []
};

const actions = {
    fetchReviews: context => {
        axios.get("/api/reviews").then(response => {
            context.commit("reviewsFetched", response.data);
        }).catch(error => {
            // eslint-disable-next-line
            console.error(error);
        });
    },
}

const mutations = {
    reviewsFetched: (state, reviews) => {
        state.reviews = reviews;
    },
};

const getters = {
    reviews: state => state.reviews
};

export default {
    state,
    getters,
    actions,
    mutations
};
