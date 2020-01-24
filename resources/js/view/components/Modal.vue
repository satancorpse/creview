<template>
<div class="modal">
    <div class="modal-overlay" @click="$emit('closeModal')"></div>
    <div class="modal-container w-11/12 md:max-w-md">
        <div class="modal-close-top" @click="$emit('closeModal')">
            <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
        </div>
        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="modal-content">
            <!--Title-->
            <div class="flex justify-end items-center pb-3">
                <div class="modal-close cursor-pointer z-50" @click="$emit('closeModal')">
                    <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                    </svg>
                </div>
            </div>

            <slot></slot>

        </div>
    </div>
</div>
</template>

<script>

export default {

    computed: {

    },

    methods: {

    }
}
</script>

<style>

</style>
