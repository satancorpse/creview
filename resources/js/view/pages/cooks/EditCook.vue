<template>
    <div>
        <form class="w-full max-w-lg mb-2">

            <div
                class="bg-red-100 border-l-4 border-red-500 text-red-700 px-4 py-2 mb-8"
                role="alert"
                v-if="errors.server_error"
            >
                <p class="mt-0">{{ errors.server_error }}</p>
            </div>

            <div class="mb-4">
                <label for="name">Name</label>
                <input
                    id="name"
                    type="text"
                    v-model="name"
                />

                <p class="text-red-500 text-xs italic" v-if="errors.name">
                    {{ errors.name[0] }}
                </p>
            </div>

            <div class="mb-4">
                <label for="email">Email Adress</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Enter a valid email ID"
                    v-model="email"
                />

                <p class="text-red-500 text-xs italic" v-if="errors.email">
                    {{ errors.email[0] }}
                </p>
            </div>

            <div class="mb-4">
                <label for="phone">Phone Number</label>
                <input
                    id="phone"
                    type="text"
                    placeholder="Enter a valid phone ID"
                    v-model="phone"
                />

                <p class="text-red-500 text-xs italic" v-if="errors.phone">
                    {{ errors.phone[0] }}
                </p>
            </div>
        </form>

        <div class="flex justify-end">
            <button
                type="submit"
                class="btn-primary mr-2"
                @click="submitData(cook)"
            >
                Update
            </button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {

    data() {
        return {
            errors: {
                server_error: null,
                name: null,
                email: null,
                phone: null
            }
        }
    },

    computed: {
        ...mapGetters({
            cook: "selectedCook"
        }),

        name: {
            get() { return this.cook.name },
            set(value) { this.$store.commit('updateName', value) }
        },

        email: {
            get() { return this.cook.email },
            set(value) { this.$store.commit('updateEmail', value) }
        },

        phone: {
            get() { return this.cook.phone },
            set(value) { this.$store.commit('updatePhone', value) }
        }
    },

    methods: {
        submitData(cook) {
            this.$store.dispatch("updateCook", cook).then(res => {
                this.$emit("updated");
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
