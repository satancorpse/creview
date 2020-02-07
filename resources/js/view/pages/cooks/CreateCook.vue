<template>
    <div>
        <form class="w-full max-w-lg">
            <div
                class="bg-red-100 border-l-4 border-red-500 text-red-700 px-4 py-2 mb-8"
                role="alert"
                v-if="errors.server_error"
            >
                <p class="mt-0">{{ errors.server_error }}</p>
            </div>

            <div class="mb-4">
                <label for="name">
                    Name <span class="text-red-500">*</span>
                </label>
                <input
                    id="name"
                    v-model="name"
                    type="text"
                    placeholder="Full name"
                />

                <p class="text-red-500 text-xs italic" v-if="errors.name">
                    {{ errors.name[0] }}
                </p>
            </div>

            <div class="mb-4">
                <label for="email">
                    Email Adress <span class="text-red-500">*</span>
                </label>
                <input
                    id="email"
                    v-model="email"
                    type="email"
                    placeholder="Enter a valid email ID"
                />

                <p class="text-red-500 text-xs italic" v-if="errors.email">
                    {{ errors.email[0] }}
                </p>
            </div>

            <div class="mb-4">
                <label for="phone">
                    Phone Number
                </label>
                <input
                    id="phone"
                    v-model="phone"
                    type="text"
                    placeholder="Enter a valid phone number"
                />

                <p class="text-red-500 text-xs italic" v-if="errors.phone">
                    {{ errors.phone[0] }}
                </p>
            </div>

            <button
                type="submit"
                class="px-6 py-2 bg-teal-500 text-white"
                @click.prevent="registerCook"
            >
                Create
            </button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            email: "",
            phone: "",
            errors: {
                server_error: null,
                name: null,
                email: null,
                phone: null
            }
        };
    },

    methods: {
        registerCook() {
            this.$store
                .dispatch("createCook", {
                    name: this.name,
                    email: this.email,
                    phone: this.phone
                })
                .then(res => {
                    this.$router.push("/dashboard");
                })
                .catch(err => {
                    let errors = err.response.data;
                    this.errors.server_error = errors.message;
                    this.errors.name = errors.errors.name;
                    this.errors.email = errors.errors.email;
                    this.errors.phone = errors.errors.phone;
                });
        }
    }
};
</script>

<style></style>
