<template>
    <div>
        <div class="page-title flex justify-between items-center mb-4">
            <h1 class="m-0"><i class="fa fa-book"></i> List of all items</h1>
            <router-link to="/create-item" v-if="!isReviewer">+ Add a new item</router-link>
        </div>

        <table class="table-auto w-full" v-if="published_items.length">
            <thead class="border bg-gray-200">
                <tr>
                    <th class="py-2 border">#</th>
                    <th class="py-2 border">Name</th>
                    <th class="py-2 border">Cook</th>
                    <th class="py-2 border" v-if="!isReviewer">Action</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(item, index) in published_items" :key="item.id">
                    <td class="border p-2 text-center">{{ index+1 }}</td>
                    <td class="border px-4 py-2">
                        <p class="mt-0 cursor-pointer" @click="redirectReview(item)">{{ item.name }}</p>
                    </td>
                    <td class="border px-4 py-2">{{ item.cook.name }}</td>
                    <td class="border p-1 text-center" v-if="!isReviewer">
                        <button class="btn-edit" @click.prevent="showModal(item)">Edit</button>
                        <button class="btn-remove" @click.prevent="confirmRemove(item)">Remove</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="p-16 mt-16 bg-gray-100 border border-gray-300 shadow" v-else>
            <h1 class="text-center"><i class="fa fa-rocket"></i> Nothing but empty space here!</h1>
        </div>

        <Modal @closeModal="closeModal" v-if="this.show">
            <EditItem @updated="closeModal"></EditItem>
        </Modal>

        <Modal v-if="this.confirm" @closeModal="closeModal" >
            <div>
                <h3>Are you sure?</h3>
                <h6>This will remove <span class="text-teal-600">{{ selectedItem.name }}</span> as well as all associated reviews from the database</h6>
                <hr>
                <button class="btn-primary" @click="removeItem(selectedItem)">Yes</button>
                <button class="btn-warning" @click="declineConfirm">No</button>
            </div>
        </Modal>
    </div>
</template>

<script>
import EditItem from './EditItem';
import Modal from '../../components/Modal';
import { mapGetters } from 'vuex';

export default {

    components: { EditItem, Modal },

    data() {
        return {
            show: false,
            confirm: false
        }
    },

    created() {
        this.$store.dispatch('fetchItems')
    },

    computed: {
        ...mapGetters({
            published_items: 'published_items',
            selectedItem: 'selectedItem',
            isReviewer: 'reviewer'
        }),
    },

    methods: {
        showModal(item) {
            this.$store.commit('itemSelected', item)
            this.$store.dispatch('fetchCooks')
            this.show = true
        },

        closeModal() {
            this.show = false
            this.confirm = false
        },

        confirmRemove(item) {
            this.confirm = true
            this.$store.commit('itemSelected', item)
        },

        declineConfirm() {
            this.confirm = false
        },

        removeItem(item) {
            this.$store.dispatch('removeItem', item).then(res => {
                this.confirm = false
            })
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
