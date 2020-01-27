<template>
    <form class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full px-3">
                <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="name"
                >
                    Name
                </label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="name"
                    v-model="name"
                    type="text"
                    placeholder="Full name"
                />
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full px-3">
                <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="email"
                >
                    Email Adress
                </label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    v-model="email"
                    type="email"
                    placeholder="Enter a valid email ID"
                />
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full px-3">
                <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="password"
                >
                    Password
                </label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="password"
                    v-model="password"
                    type="password"
                    placeholder="Set a password"
                />
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-4">
            <div class="w-full px-3">
                <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="password_confirmation"
                >
                    Confirm password
                </label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="password_confirmation"
                    v-model="password_confirmation"
                    type="password"
                    placeholder="Confirm the password"
                />
            </div>
        </div>
        <button type="submit" class="px-6 py-2 bg-teal-500 text-white" @click.prevent="registerUser">Register</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        }
    },

    methods: {
        registerUser() {
            this.$store.dispatch('createUser', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation,
            }).then(res => {
                this.$router.push('/dashboard')
            })
        },
    }
};
</script>

<style></style>
