<template>
    <div>
        <div class="box min-h-16 mb-8 w-full">
            <table class="table-auto w-full">
                <thead class="border bg-teal-100">
                    <tr>
                        <th class="py-2" colspan="3">Recently added users</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in users" :key="user.id">
                        <td class="border p-2 text-center">{{ index+1 }}</td>
                        <td class="border px-4 py-2">{{ user.name }}</td>
                        <td class="border px-4 py-2 text-center">
                            <button class="border px-8 py-1 text-teal-500 font-semibold text-xs">Edit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="box mb-8">
            <table class="table-auto w-full">
                <thead class="border bg-teal-100">
                    <tr>
                        <th class="py-2" colspan="3">Recently added cooks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(cook, index) in cooks" :key="cook.id">
                        <td class="border p-2 text-center">{{ index+1 }}</td>
                        <td class="border px-4 py-2">{{ cook.name }}</td>
                        <td class="border px-4 py-2 text-center">
                            <button class="border px-8 py-1 text-teal-500 font-semibold text-xs" @click.prevent="showModal(cook)">Edit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <modal></modal>

    </div>
</template>

<script>
import modal from './Modal';
import { mapGetters } from 'vuex';

export default {

    components: {modal},

    created() {
        this.$store.dispatch('fetchUsers')
        this.$store.dispatch('fetchCooks')
    },

    computed: {
        ...mapGetters({
            users: 'users',
            cooks: 'cooks'
        }),
    },

    methods: {
        showModal(cook) {
            this.$store.dispatch('showModal', cook)
        }
    }

}
</script>

<style>

</style>
