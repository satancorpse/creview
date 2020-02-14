<template>
    <div>
        <div class="flex">
            <div class="w-3/5">
                <div>
                    <h2>Recent Items</h2>
                    <hr>
                    <div class="box">
                        <div v-for="(item, index) in cook.items" :key="item.id" class="bg-gray-100 border p-3 mb-4">
                            <h5>
                                <router-link to="">{{ item.name }}</router-link>
                                <span class="text-gray-600 text-xs">- {{ item.created_at | moment("from") }}</span>
                            </h5>
                            <h6 class="mb-2 normal-case">
                                Total reviews: {{ item.meta.reviews_count }}
                            </h6>

                            <h6 class="mb-2 normal-case">
                                Overall score: {{ item.meta.avg_score }}
                            </h6>

                            <h6 class="mb-2 normal-case">
                                Major issue: {{ Object.keys(item.meta.top_issue)[0] }} - ({{  (Object.values(item.meta.top_issue)[0]) }} complaints)
                            </h6>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-2/5 px-8 py-5">
                <h2 class="leading-none">
                    {{ cook.name }}
                    <br />
                    <span class="text-xs align-middle"
                        >Registered since
                        {{ cook.created_at | moment("MMMM Do, YYYY") }}</span
                    >
                </h2>
                <h6 class="mb-2 normal-case">
                    <i class="fa fa-envelope"></i>&nbsp; {{ cook.email }}
                </h6>

                <h6 class="mb-2 normal-case">
                    <i class="fa fa-phone"></i>&nbsp; {{ cook.phone }}
                </h6>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
    created() {
        this.$store.dispatch("fetchCook", this.$route.params.id).then(res => {
            console.log(res);
        });
    },

    computed: {
        ...mapState({
            cook: state => state.cooks.cook
        }),

        ...mapGetters({
            authId: "authId"
        })
    }
};
</script>
