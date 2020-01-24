<template>
    <div>
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
                    <td class="border p-1 text-center w-2/5">
                        <button class="btn-edit" @click.prevent="showModal(user)">Edit</button>
                        <button class="btn-remove">Remove</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <Modal submitText="Update" @closeModal="closeModal" v-if="this.show">
            <EditUser></EditUser>
        </Modal>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Modal from '../components/Modal';
import EditUser from './EditUser';

export default {

    components: { Modal, EditUser },

    data() {
        return {
            show: false
        }
    },

    created() {
        this.$store.dispatch('fetchUsers')
    },

    computed: {
        ...mapGetters({
            users: 'users'
        }),
    },

    methods: {

        showModal(user) {
            this.show = true
        },

        closeModal() {
            this.show = false
        }
    }

}
</script>

<style>

</style>
