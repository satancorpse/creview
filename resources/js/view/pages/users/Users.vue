<template>
    <div>
        <div class="page-title flex justify-between">
            <h1><i class="fa fa-book"></i> List of all registered users</h1>
            <router-link to="/create-user" class="link">+ Add a new user</router-link>
        </div>
        <table class="table-auto w-full">
            <thead class="border bg-gray-200">
                <tr>
                    <th class="py-2 border">#</th>
                    <th class="py-2 border">Name</th>
                    <th class="py-2 border">Email</th>
                    <th class="py-2 border">Role</th>
                    <th class="py-2 border">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="user.id">
                    <td class="border p-2 text-center">{{ index+1 }}</td>
                    <td class="border px-4 py-2">{{ user.name }}</td>
                    <td class="border px-4 py-2">{{ user.email }}</td>
                    <td class="border px-4 py-2 text-center">{{ userType(user.role) }}</td>
                    <td class="border p-1 text-center">
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
import Modal from '../../components/Modal';
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
        },

        userType($role_id) {
            if ($role_id === 0) {
                return 'Reviewer'
            } else if ($role_id === 1) {
                return 'Super Admin'
            } else if ($role_id === 2) {
                return 'Admin'
            } else {
                return null;
            }
        }
    }

}
</script>

<style>

</style>
