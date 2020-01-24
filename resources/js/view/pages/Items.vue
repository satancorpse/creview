<template>
    <div>
        <table class="table-auto w-full">
            <thead class="border bg-teal-100">
                <tr>
                    <th class="py-2" colspan="4">Recent food items</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in items" :key="item.id">
                    <td class="border p-2 text-center">{{ index+1 }}</td>
                    <td class="border px-4 py-2">{{ item.name }}</td>
                    <td class="border px-4 py-2">{{ item.cook.name }}</td>
                    <td class="border p-1 text-center w-2/5">
                        <button class="btn-edit">Edit</button>
                        <button class="btn-remove">Remove</button>
                    </td>
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
            items: 'items'
        }),
    },
}
</script>

<style>

</style>
