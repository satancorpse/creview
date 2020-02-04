<template>
    <div>
        <div class="page-title flex justify-between">
            <h1><i class="fa fa-book"></i> Available reviews</h1>
            <router-link to="/create-item" class="link">+ Publish a new item</router-link>
        </div>
        <table class="table-auto w-full mb-16">
            <thead class="border bg-gray-200">
                <tr>
                    <th class="py-2 border">#</th>
                    <th class="py-2 border">Item</th>
                    <th class="py-2 border">Cook</th>
                    <th class="py-2 border">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in published_items" :key="item.id">
                    <td class="border p-2 text-center">{{ index+1 }}</td>
                    <td class="border px-4 py-2">
                        <p class="mt-0 cursor-pointer" @click="redirectReview(item)">{{ item.name }}</p>
                    </td>
                    <td class="border px-4 py-2"><a href="#">{{ item.cook.name }}</a></td>

                    <td class="border p-1 text-center">
                        <button class="btn-edit" @click.prevent="redirectSubmit(item)">Submit Feedback</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="page-title flex justify-between">
            <h1><i class="fa fa-book"></i> Recently closed reviews</h1>
        </div>

        <table class="table-auto w-full mb-8">
            <thead class="border bg-gray-200">
                <tr>
                    <th class="py-2 border">#</th>
                    <th class="py-2 border">Item</th>
                    <th class="py-2 border">Cook</th>
                    <th class="py-2 border">Rating</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in closed_items" :key="item.id">
                    <td class="border p-2 text-center">{{ index+1 }}</td>
                    <td class="border px-4 py-2">
                        <p class="mt-0 cursor-pointer" @click="redirectReview(item)">{{ item.name }}</p>
                    </td>
                    <td class="border px-4 py-2"><a href="#">{{ item.cook.name }}</a></td>
                    <td class="border px-4 py-2 text-center">5</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {

    created() {
        this.$store.dispatch('fetchItems')
    },

    computed: {
        ...mapGetters({
            published_items: 'published_items',
            closed_items: 'closed_items',
        }),
    },

    methods: {
        redirectSubmit(item) {
            this.$router.push({ name: 'submit-review', params: {id: item.id}}).catch(error => {
                if (error.name != "NavigationDuplicated") {
                    throw error;
                }
            })

            this.$nextTick(function () {
                this.$store.commit('itemSelected', item)
            });
        },

        redirectReview(item) {
            this.$router.push({ name: 'item-reviews', params: {id: item.id}}).catch(error => {
                if (error.name != "NavigationDuplicated") {
                    throw error;
                }
            })

            this.$nextTick(function () {
                console.log(item)
            });
        },
    }
}
</script>

<style>

</style>
