<template>
    <div>
        <div class="page-title flex justify-between">
            <h1><i class="fa fa-book"></i> List of all registered users</h1>
            <router-link to="/create-user" class="link" v-if="!isReviewer">+ Add a new user</router-link
            >
        </div>
        <table class="table-auto w-full">
            <thead class="border bg-gray-200">
                <tr>
                    <th class="py-2 border">#</th>
                    <th class="py-2 border">Name</th>
                    <th class="py-2 border">Email</th>
                    <th class="py-2 border">Role</th>
                    <th class="py-2 border" v-if="!isReviewer">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="user.id">
                    <td class="border p-2 text-center">{{ index + 1 }}</td>
                    <td class="border px-4 py-2">
                        <router-link
                            :to="{
                                name: 'profile',
                                params: { id: user.id }
                            }"
                            >{{ user.name }}</router-link
                        >
                    </td>
                    <td class="border px-4 py-2">{{ user.email }}</td>
                    <td class="border px-4 py-2 text-center">
                        {{ userType(user.role) }}
                    </td>
                    <td class="border p-1 text-center" v-if="!isReviewer">
                        <div  v-if="user.role !== 1">
                            <button
                                class="btn-edit"
                                @click.prevent="showModal(user.id)"
                            >
                                Edit
                            </button>
                            <button class="btn-remove" @click.prevent="confirmRemove(user)" v-if="user.role !== 2 || isGod">Remove</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

        <Modal submitText="Update" @closeModal="closeModal" v-if="this.show">
            <EditUser @updated="closeModal"></EditUser>
        </Modal>

        <Modal v-if="this.confirm" @closeModal="closeModal" >
            <div>
                <h3>Are you sure?</h3>
                <h6>This will remove <span class="text-teal-600">{{ user.name }}</span> and the associated reviews from the database</h6>
                <hr>
                <button class="btn-primary" @click="removeUser(user)">Yes</button>
                <button class="btn-warning" @click="declineConfirm">No</button>
            </div>
        </Modal>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Modal from "../../components/Modal";
import EditUser from "./EditUser";

export default {
    components: { Modal, EditUser },

    data() {
        return {
            show: false,
            confirm: false
        }
    },

    created() {
        this.$store.dispatch("fetchUsers");
    },

    computed: {
        ...mapGetters({
            users: "users",
            user: "selectedUser",
            isGod: "god",
            isReviewer: 'reviewer'
        })
    },

    methods: {

        userType($role_id) {
            if ($role_id === 0) {
                return "Reviewer";
            } else if ($role_id === 1) {
                return "Super Admin";
            } else if ($role_id === 2) {
                return "Admin";
            } else {
                return null;
            }
        },

        showModal(user) {
            this.show = true;
            this.$store.dispatch('fetchProfile', user)
        },

        closeModal() {
            this.show = false;
            this.confirm = false;
        },

        confirmRemove(user) {
            this.confirm = true
            this.$store.commit('profileFetched', user)
        },

        declineConfirm() {
            this.confirm = false
        },

        removeUser(user) {
            this.$store.dispatch('removeUser', user).then(res => {
                this.confirm = false
            })
        }
    }
};
</script>

<style></style>
