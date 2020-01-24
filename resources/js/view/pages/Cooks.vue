<template>

    <div>
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
                    <td class="border p-1 text-center w-2/5">
                        <button class="btn-edit" @click.prevent="showModal(cook)">Edit</button>
                        <button class="btn-remove" @click.prevent="confirmRemove(cook)">Remove</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <Modal @closeModal="closeModal" v-if="this.show">
            <EditCook @updated="closeModal"></EditCook>
        </Modal>

        <Modal v-if="this.confirm" @closeModal="closeModal" >
            <div>
                <h3>Are you sure?</h3>
                <h6>This will remove <span class="text-teal-600">{{ selectedCook.name }}</span> from the database</h6>
                <hr>
                <button class="btn-primary" @click="removeCook(selectedCook)">Yes</button>
                <button class="btn-warning" @click="declineConfirm">No</button>
            </div>
        </Modal>
    </div>

</template>

<script>
import { mapGetters } from 'vuex';
import Modal from '../components/Modal';
import EditCook from './EditCook';

export default {

    components: { Modal, EditCook },

    data() {
        return {
            show: false,
            confirm: false
        }
    },

    created() {
        this.$store.dispatch('fetchCooks')
    },

    computed: {
        ...mapGetters({
            cooks: 'cooks',
            selectedCook: 'selectedCook'
        }),
    },

    methods: {

        showModal(cook) {
            this.show = true
            this.$store.commit('cookSelected', cook)
        },

        closeModal() {
            this.show = false
            this.confirm = false
        },

        confirmRemove(cook) {
            this.confirm = true
            this.$store.commit('cookSelected', cook)
        },

        declineConfirm() {
            this.confirm = false
        },

        removeCook(cook) {
            this.$store.dispatch('removeCook', cook).then(res => {
                this.confirm = false
            })

        }
    }
}
</script>

<style>

</style>
