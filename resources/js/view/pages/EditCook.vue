<template>
    <div>
        <form class="w-full max-w-lg mb-2">
            <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full px-3">
                    <label for="name">Name</label>
                    <input id="name" type="text" :value="cook.name" @input="getName" />
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full px-3">
                    <label for="email">Email Adress</label>
                    <input id="email" type="email" placeholder="Enter a valid email ID" :value="cook.email" @input="getEmail"/>
                </div>
            </div>
        </form>

        <div class="flex justify-end">
            <button type="submit" class="btn-primary mr-2" @click="submitData(cook)">Update</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {

    computed: {
        ...mapGetters({
            cook: 'selectedCook'
        }),
    },

    methods: {
        getName(e) {
            this.$store.commit('updateName', e.target.value)
        },

        getEmail(e) {
            this.$store.commit('updateEmail', e.target.value)
        },

        submitData(cook) {
            this.$store.dispatch('updateCook', cook).then(res => {
                this.$emit('updated')
            })
        }
    }

}
</script>

<style>

</style>
