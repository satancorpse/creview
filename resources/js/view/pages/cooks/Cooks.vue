<template>
    <div>
        <div class="page-title flex justify-between items-center mb-4">
            <h1 class="m-0"><i class="fa fa-book"></i> List of all cooks</h1>
            <router-link to="/create-cook" v-if="!isReviewer"
                >+ Add a new cook</router-link
            >
        </div>

        <table class="table-auto w-full" v-if="cooks.length">
            <thead class="border bg-gray-200">
                <tr>
                    <th class="py-2 border">#</th>
                    <th class="py-2 border">Name</th>
                    <th class="py-2 border">Email</th>
                    <th class="py-2 border">Phone</th>
                    <th class="py-2 border" v-if="!isReviewer">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(cook, index) in cooks" :key="cook.id">
                    <td class="border p-2 text-center">{{ index + 1 }}</td>
                    <td class="border px-4 py-2">
                        <router-link :to="{ name: 'cook', params: { id: cook.id } }">{{ cook.name }}</router-link>
                    </td>
                    <td class="border px-4 py-2">{{ cook.email }}</td>
                    <td class="border px-4 py-2">{{ cook.phone }}</td>
                    <td class="border p-1 text-center" v-if="!isReviewer">
                        <button
                            class="btn-edit"
                            @click.prevent="showModal(cook)"
                        >
                            Edit
                        </button>
                        <button
                            class="btn-remove"
                            @click.prevent="confirmRemove(cook)"
                        >
                            Remove
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="p-16 mb-8 bg-gray-100 border border-gray-300 shadow" v-else>
            <h1 class="text-center">
                <i class="fa fa-rocket"></i> Nothing but empty space here!
            </h1>
        </div>

        <Modal @closeModal="closeModal" v-if="this.show">
            <EditCook @updated="closeModal"></EditCook>
        </Modal>

        <Modal v-if="this.confirm" @closeModal="closeModal">
            <div>
                <h3>Are you sure?</h3>
                <h6>
                    This will remove
                    <span class="text-teal-600">{{ selectedCook.name }}</span>
                    from the database
                </h6>
                <hr />
                <button class="btn-primary" @click="removeCook(selectedCook)">
                    Yes
                </button>
                <button class="btn-warning" @click="declineConfirm">No</button>
            </div>
        </Modal>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Modal from "../../components/Modal";
import EditCook from "./EditCook";

export default {
    components: { Modal, EditCook },

    data() {
        return {
            show: false,
            confirm: false
        };
    },

    created() {
        this.$store.dispatch("fetchCooks");
    },

    computed: {
        ...mapGetters({
            cooks: "cooks",
            selectedCook: "selectedCook",
            isReviewer: "reviewer"
        })
    },

    methods: {
        showModal(cook) {
            this.show = true;
            this.$store.commit("cookSelected", cook);
        },

        closeModal() {
            this.show = false;
            this.confirm = false;
        },

        confirmRemove(cook) {
            this.confirm = true;
            this.$store.commit("cookSelected", cook);
        },

        declineConfirm() {
            this.confirm = false;
        },

        removeCook(cook) {
            this.$store.dispatch("removeCook", cook).then(res => {
                this.confirm = false;
            });
        }
    }
};
</script>

<style></style>
