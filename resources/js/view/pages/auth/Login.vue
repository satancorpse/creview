<template>
    <div
        style="position: absolute; top: calc(50% - 175px); left: calc(50% - 150px);"
    >
        <div class="w-full mx-auto">
            <form
                class="bg-white border shadow-md rounded px-16 pt-6 pb-8 mb-4"
                @submit.prevent="requestLogin"
            >
                <div class="bg-red-100 border-l-4 border-red-500 text-red-700 px-4 py-2 mb-8" role="alert" v-if="server_error">
                    <p class="mt-0">{{ server_error }}</p>
                </div>

                <div class="mb-4">
                    <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="email"
                        >Email</label
                    >
                    <input
                        id="email"
                        type="email"
                        placeholder="Email ID"
                        v-model="user.email"
                        required
                    />
                </div>
                <div class="mb-6">
                    <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="password"
                        >Password</label

                    >
                    <input
                        id="password"
                        type="password"
                        placeholder="Passcode"
                        v-model="user.password"
                        required
                    />
                    <!-- <p class="text-red-500 text-xs italic" v-if="errors.validation_errors.password">{{ errors.validation_errors.password }}</p> -->

                </div>
                <div class="flex items-center justify-between">
                    <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Sign In
                    </button>
                    <a
                        class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        href="#"
                        >Forgot Password?</a
                    >
                </div>
            </form>
            <p class="text-center text-gray-500 text-xs">
                &copy;2020 SATANCORPSE. All rights reserved.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                email: '',
                password: '',
            },
            server_error: null,
        }
    },

    methods: {
        requestLogin() {
            this.$store.dispatch('requestLogin', this.user)
            .then(response => {
                this.$router.push({ name: 'dashboard' })
            })
            .catch(error => {
                console.log(error.response.data)
                this.server_error = error.response.data.message
                this.password = ''
            })
        },

        errorEmail() {
            return this.errors.errors.email[0] ? true : false
        }
    }
};
</script>

<style>

</style>
