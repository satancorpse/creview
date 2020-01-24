<template>

<div class="p-8 border">
    <h2>Modal Header</h2>
    <hr>
    <div class="modal_body bg-gray-800 min-h-24 p-8">

        <slot></slot>

    </div>
    <hr>
    <h2 class="flex justify-end">
        <button class="border bg-red-800 text-white px-6 py-2" @click="$emit('closeModal')">Cancel</button>
        <button class="border bg-red-800 text-white px-6 py-2" @click="$emit('closeModal')">Cancel Again</button>
    </h2>
</div>

</template>

<script>

export default {

    // data() {
    //     return {
    //         show: false,
    //         data: ''
    //     }
    // },

    // created() {
    //     this.$parent.$on('showModal', function (data) {
    //         this.show = true;
    //         this.data = data
    //     });
    // },

    // methods: {
    //     cancel() {
    //         this.show = false
    //     }
    // }

}
</script>

<style>

</style>
