<template>
    <div>
        <div class="flex">
            <div class="w-3/5">
                <div>
                    <h3>Recent Activities</h3>
                    <div class="box">
                        <p
                            v-for="(review, index) in user.reviews"
                            :key="review.id"
                            class="p-2 bg-gray-100 shadow"
                        >
                            {{ name(user) }} gave a feedback on
                            <router-link to="">{{
                                review.item.name
                            }}</router-link>
                            offered by
                            <router-link to="">{{
                                review.item.cook.name
                            }}</router-link>
                            <span class="text-gray-600"
                                >-
                                {{ review.created_at | moment("from") }}</span
                            >
                        </p>
                    </div>
                </div>
            </div>
            <div class="w-2/5 px-8 py-5">
                <h2 class="leading-none">
                    {{ user.name }}
                    <button class="text-xs px-6 py-1 bg-gray-200 border border-green-500 text-green-500"><i class="fa fa-edit"></i></button>
                    <br>
                    <span class="text-xs align-middle"
                        >Member since
                        {{ user.created_at | moment("MMMM Do, YYYY") }}</span
                    >
                </h2>
                <h6 class="mb-2 normal-case">
                    <i class="fa fa-envelope"></i>&nbsp; {{ user.email }}
                </h6>

                <h6 class="mb-2 normal-case">
                    <i class="fa fa-book"></i>&nbsp; {{ user.reviews_count }} reviews submitted
                </h6>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
    created() {
        this.$store
            .dispatch("fetchProfile", this.$route.params.id)
            .then(res => {
                console.log(res);
            });
    },

    computed: {
        ...mapState({
            user: state => state.users.user
        }),

        ...mapGetters({
            authId: "authId"
        })
    },

    methods: {
        name(user) {
            return user.id === this.authId ? "You" : user.name;
        }
    }
};
</script>
