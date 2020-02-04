<template>
    <div>
        <h1>Showing Review</h1>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {

    created() {
        this.$store.dispatch('fetchItems')
    },

    computed: {
        ...mapGetters({
            items: 'items',
            selectedItem: 'selectedItem'
        }),
    },

    methods: {

    }
}
</script>

<style>

</style>
