<template>
    <div>
        <h1>
            <i class="fa fa-user"></i> {{ user.name }} -
            <span class="text-xs align-middle"
                >Member since {{ user.created_at }}</span
            >
        </h1>
        <hr />
        <div>
            <h2>Recent Logs</h2>

            <div class="box">
                <p v-for="(review, index) in user.reviews" :key="review.id" class="p-2 bg-gray-100 shadow">
                    {{ name(user) }} gave a feedback on
                    <router-link to="">{{ review.item.name }}</router-link>
                    offered by <router-link to="">{{ review.item.cook.name }}</router-link>
                </p>
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
            authId: 'authId'
        })
    },

    methods: {
        name(user) {
            return user.id === this.authId ? 'You' : user.name;
        }
    }
};
</script>
