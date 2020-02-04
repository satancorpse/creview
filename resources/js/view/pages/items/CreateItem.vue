<template>
    <div>
        <form class="w-full max-w-lg">

            <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full px-3">
                    <label for="name"> Food Item </label>
                    <input id="name" type="text" placeholder="Item name" v-model="name" />
                </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full px-3">
                    <label for="cook">
                        Cook
                    </label>
                    <div class="relative">
                        <select class="" id="cook" v-model="cook_id">
                            <option disabled value="">Select a cook</option>
                            <option v-for="(cook, index) in cooks" :key="cook.id" :value="cook.id">{{ cook.name }}</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
<!--
                    <label class="md:w-2/3 block text-gray-500 font-bold mt-4">
                        <input class="mr-2 leading-tight" type="checkbox" v-model="publish">
                        <span class="text-sm">
                            Publish for review
                        </span>
                    </label> -->
                </div>
            </div>

            <button type="submit" class="btn-primary" @click.prevent="createItem">Save</button>
        </form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {

    data() {
        return {
            name: '',
            cook_id: '',
        }
    },

    created() {
        this.$store.dispatch('fetchCooks')
    },

    computed: {
        ...mapGetters({
            cooks: 'cooks'
        }),
    },

    methods: {

        createItem() {
            this.$store.dispatch('createItem', {
                name: this.name,
                cook_id: this.cook_id,
            }).then(res => {
                this.$router.push('/dashboard')
            })
        }

    }
};
</script>

<style></style>
