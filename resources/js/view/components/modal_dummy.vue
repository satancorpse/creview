<template>
<div class="modal" v-if="show">
    <div class="modal-overlay"></div>
    <div class="modal-container w-11/12 md:max-w-md">
        <div class="modal-close-top" @click.prevent="closeModal">
            <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
        </div>
        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="modal-content">
            <!--Title-->
            <div class="flex justify-end items-center pb-3">
                <div class="modal-close cursor-pointer z-50" @click.prevent="closeModal">
                    <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                    </svg>
                </div>
            </div>
            <form class="w-full max-w-lg mb-4">
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full px-3">
                        <label for="name">Name</label>
                        <input id="name" type="text" :value="cook.name" @input="getName" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full px-3">
                        <label for="email">Email Adress</label>
                        <input id="email" type="email" placeholder="Enter a valid email ID" :value="cook.email" @input="getEmail" />
                    </div>
                </div>
            </form>
            <!--Footer-->
            <div class="flex justify-between pt-2">
                <button type="submit" class="btn-primary mr-2" @click.prevent="editCook(cook)">Update</button>
                <button class="btn-warning" @click="closeModal">Cancel</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {

    computed: {
        ...mapGetters({
            cook: 'cookUnderEdit',
            show: 'showModal'
        }),
    },

    methods: {
        closeModal() {
            this.$store.dispatch('closeModal');
        },

        getName(e) {
            this.$store.commit('updateName', e.target.value)
        },

        getEmail(e) {
            this.$store.commit('updateEmail', e.target.value)
        },

        editCook(cook) {
            this.$store.dispatch('updateCook', cook)
        }
    }
}
</script>

<style>

</style>
