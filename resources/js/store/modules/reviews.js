import axios from "axios";

const state = {
    itemReviews: {
        cook: {},
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
                user_id: 1,
                item_id: data.review.item_id
            }).then(res => {
                console.log(res.data)
                context.commit('reviewSubmitted', res.data)
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

    reviewSubmitted: (state, review) => {
        state.reviews.push(review)
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
