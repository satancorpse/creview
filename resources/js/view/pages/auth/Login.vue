<template>
    <div
        style="position: absolute; top: calc(50% - 175px); left: calc(50% - 150px);"
    >
        <div class="w-full mx-auto">
            <form
                class="bg-white border shadow-md rounded px-16 pt-6 pb-8 mb-4"
                @submit.prevent="requestLogin"
            >
                <div class="mb-4">
                    <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="email"
                        >Email</label
                    >
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email ID"
                        v-model="user.email"
                    />
                </div>
                <div class="mb-6">
                    <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="password"
                        >Password</label

                    >
                    <input
                        class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Passcode"
                        v-model="user.password"
                    />

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
                password: ''
            }
        }
    },

    methods: {
        requestLogin() {
            this.$store.dispatch('requestLogin', this.user)
            .then(response => {
                this.$router.push({ name: 'dashboard' })
            })
            .catch(error => {
                console.log(error)
                this.password = ''
            })
        }
    }
};
</script>

<style></style>
