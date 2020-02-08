<template>
    <div>
        <div class="flex justify-between">
            <div>
                <h3 class="mt-0 mb-2">
                    <span class="text-teal-600">{{ itemReviews.name }}</span>
                </h3>
                <h6>
                    Offered by -
                    <span class="text-teal-600">{{
                        itemReviews.cook.name
                    }}</span>
                </h6>
            </div>
            <div class="flex items-center">
                <button
                    class="btn-primary text-xs"
                    @click.prevent="closeReview(itemReviews)"
                    v-if="itemReviews.publish"
                >
                    Mark as closed
                </button>
                <span class="text-gray-800 border px-4 py-2 mt-2" v-else
                    ><i class="fa fa-power-off"></i>&nbsp; Closed for new
                    reviews</span
                >
            </div>
        </div>

        <hr />

        <div class="flex container mt-8" v-if="itemReviews.reviews.length">
            <div class="w-3/4 pr-4">
                <div
                    v-for="(review, index) in itemReviews.reviews"
                    :key="review.id"
                    class="mb-4 bg-gray-100 shadow border p-4"
                >
                    <h6 class="mb-2">
                        Reviewer:
                        <span class="text-green-700 normal-case">{{
                            review.user.name
                        }}</span>
                    </h6>
                    <h6 class="mb-2">
                        Score:
                        <span class="text-green-700">{{ review.score }}</span>
                    </h6>
                    <h6 class="mb-2">
                        Major Issues: <br>
                        <span class="text-green-700 normal-case" v-for="(type, index) in JSON.parse(review.meta).type" :key="index">- {{ type }}<br></span>
                    </h6>
                    <h6 class="mb-2">
                        Other Issues: <br>
                        <span class="text-green-700 normal-case">- {{ JSON.parse(review.meta).other || 'Not specified!' }}<br></span>
                    </h6>
                    <h6 class="mb-2">
                        Feedback:
                        <span class="text-green-700 normal-case">{{ review.feedback }}</span>
                    </h6>
                </div>
            </div>
            <div class="w-1/4">
                <div class="review_summary p-8 pt-2 mb-8">
                    <h6>
                        Total reviews:
                        <span class="text-teal-600">{{
                            itemReviews.meta_data.score_count
                        }}</span>
                    </h6>
                    <h6>
                        Overall score:
                        <span class="text-teal-600">{{
                            itemReviews.meta_data.score_avg
                        }}</span>
                    </h6>
                    <h6>
                        <span
                            >{{ itemReviews.meta_data.top_issue.count }} person
                            complaint about the
                            <span class="text-red-600 italic">{{
                                itemReviews.meta_data.top_issue.type
                            }}</span>
                            of the item.</span
                        >
                    </h6>
                </div>
            </div>
        </div>

        <div
            class="p-16 mt-16 bg-gray-100 border border-gray-300 shadow mb-4"
            v-else
        >
            <h1 class="text-center">Nobody submitted a review yet!</h1>
        </div>

        <div v-if="!itemReviews.meta_data.user_has_review">
            <router-link
                v-if="itemReviews.id"
                :to="{ name: 'submit-review', params: { id: itemReviews.id } }"
                class="border px-4 py-2 mt-4 inline-block text-center"
                ><i class="fa fa-pencil"></i> &nbsp; Submit a
                review</router-link
            >
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    data() {
        return {
            reviewClosed: false
        };
    },

    created() {
        this.$store
            .dispatch("fetchItemReviews", this.$route.params.id)
            .then(res => {
                console.log(res);
            });
    },

    computed: {
        ...mapState({
            itemReviews: state => state.reviews.itemReviews
        })
    },

    methods: {
        closeReview(item) {
            this.$store
                .dispatch("updateItem", { item, publish: 0 })
                .then(res => {
                    // console.log(res)
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
};
</script>

<style></style>
