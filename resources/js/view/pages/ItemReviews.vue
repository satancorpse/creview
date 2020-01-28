<template>
    <div>
        <h3 class="mt-0">Item: <span class="text-teal-600">{{ itemReviews.name }}</span></h3>
        <h6>Offered by - <span class="text-teal-600">{{ itemReviews.cook.name }}</span></h6>
        <hr>
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
