import axios from "axios";

const state = {
    itemReviews: {
        cook: {},
        meta_data: {},
        reviews: {}
    }
};

const actions = {
    fetchItemReviews: (context, data) => {
        axios.get('/api/items/' + data + '/reviews').then(response => {
            context.commit("ItemReviewsFetched", response.data);
        }).catch(error => {
            // eslint-disable-next-line
            console.error(error);
        });
    },

    submitReview: (context, data) => {
        return new Promise((resolve, reject) => {
            axios.post('/api/reviews/create', {
                score: data.review.score,
                meta: JSON.stringify(data.review.meta),
                feedback: data.review.feedback,
                user_id: context.rootGetters.authId,
                item_id: data.review.item_id
            }).then(res => {
                resolve(res)
            }).catch(err => {
                console.log(err)
                reject(err)
            })
        })
    },
};

const mutations = {
    ItemReviewsFetched: (state, reviews) => {
        state.itemReviews = reviews
    },

    reviewClosed: (state) => {
        state.itemReviews.publish = 0
    }
};

const getters = {
};

export default {
    state,
    getters,
    actions,
    mutations
};
