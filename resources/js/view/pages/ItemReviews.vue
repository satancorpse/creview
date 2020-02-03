<template>
    <div>
        <h3 class="mt-0 mb-2">Item: <span class="text-teal-600">{{ itemReviews.name }}</span></h3>
        <h6>Offered by - <span class="text-teal-600">{{ itemReviews.cook.name }}</span></h6>
        <hr>
        <h4 class=" mb-2">Summary:</h4>
        <div class="review_summary bg-gray-100 p-8 mb-8 border">
            <h6>Total reviews: <span class="text-teal-600">{{ itemReviews.meta_data.score_count }}</span></h6>
            <h6>Overall score: <span class="text-teal-600">{{ itemReviews.meta_data.score_avg }}</span></h6>
            <h6><span class="text-teal-600">{{ itemReviews.meta_data.top_issue.count }} person complaint about the <span class="text-red-600 italic">{{ itemReviews.meta_data.top_issue.type }}</span> of the item.</span></h6>
        </div>

        <hr>

        <h4 class="mt-8 mb-2">Reviews:</h4>
        <div v-for="(review, index) in itemReviews.reviews" :key="review.id" class="mb-4 bg-gray-100 shadow border p-4">
            <h6 class="mb-1">Reviewer: <span class="text-teal-600">{{ review.user.name }}</span></h6>
            <h6 class="mb-1">Score: <span class="text-teal-600">{{ review.score }}</span></h6>
            <h6 class="mb-1">Meta: <span class="text-teal-600">{{ review.meta }}</span></h6>
            <h6 class="mb-1">Feedback: <span class="text-teal-600">{{ review.feedback }}</span></h6>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {

    created() {
        this.$store.dispatch('fetchItemReviews', this.$route.params.id).then(res => {console.log(res)});
    },

    computed: {
        ...mapState({
            itemReviews: state => state.reviews.itemReviews
        }),
    },

    methods: {

    }
}
</script>

<style>

</style>
