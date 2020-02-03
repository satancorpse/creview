<template>
    <div>
        <table class="table-auto w-full mb-8">
            <thead class="border bg-teal-100">
                <tr>
                    <th class="py-2" colspan="3">Available reviews</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in published_items" :key="item.id">
                    <td class="border p-2 text-center">{{ index+1 }}</td>
                    <td class="border px-4 py-2">
                        <p class="mt-0 cursor-pointer" @click="redirectReview(item)">{{ item.name }}</p>
                        <span class="text-xs">Offered by <a href="#" class="text-teal-600 font-bold">{{ item.cook.name }}</a></span>
                    </td>
                    <td class="border p-1 text-center w-2/5">
                        <button class="btn-edit" @click.prevent="redirectSubmit(item)">Submit Feedback</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <table class="table-auto w-full mb-8">
            <thead class="border bg-teal-100">
                <tr>
                    <th class="py-2" colspan="2">Recently closed reviews</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in closed_items" :key="item.id">
                    <td class="border p-2 text-center">{{ index+1 }}</td>
                    <td class="border px-4 py-2">
                        <p class="mt-0 cursor-pointer" @click="redirectReview(item)">{{ item.name }} - <span class="text-xs"><a href="#" class="text-teal-600 font-bold"><i class="fa fa-user text-gray-600"></i> {{ item.cook.name }}</a></span></p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {

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
