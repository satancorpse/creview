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
                        <button class="btn-edit" @click.prevent="showModal(item)">Edit</button>
                        <button class="btn-remove">Remove</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <Modal @closeModal="closeModal" v-if="this.show">
            <EditItem @updated="closeModal"></EditItem>
        </Modal>
    </div>
</template>

<script>
import EditItem from './EditItem';
import Modal from '../components/Modal';
import { mapGetters } from 'vuex';

export default {

    components: { EditItem, Modal },

    data() {
        return {
            show: false,
        }
    },

    created() {
        this.$store.dispatch('fetchItems')
    },

    computed: {
        ...mapGetters({
            items: 'items'
        }),
    },

    methods: {
        showModal(item) {
            this.show = true
            this.$store.commit('itemSelected', item)
        },

        closeModal() {
            this.show = false
        },
    }
}
</script>

<style>

</style>
