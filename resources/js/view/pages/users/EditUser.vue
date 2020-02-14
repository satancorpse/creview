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
                <label for="name">Name</label>
                <input id="name" type="text" v-model="name" />
                <p class="text-red-500 text-xs italic" v-if="errors.name">
                    {{ errors.name[0] }}
                </p>
            </div>

            <div class="mb-4">
                <label for="email">Email Adress</label>
                <input id="email" type="text" v-model="email" />
                <p class="text-red-500 text-xs italic" v-if="errors.email">
                    {{ errors.email[0] }}
                </p>
            </div>

            <div class="mb-4" v-if="user.role !== 1 && isGod">
                <label for="role">
                    Role
                </label>
                <div class="relative">
                    <select class="" id="role" v-model="role">
                        <option disabled value="">Select a role</option>
                        <option
                            v-for="(role, index) in roles"
                            :key="index"
                            :value="role"
                            >{{
                                role === 0
                                    ? "Reviwer"
                                    : role === 1
                                    ? "Super Admin"
                                    : role === 2
                                    ? "Admin"
                                    : "Undefined"
                            }}</option
                        >
                    </select>

                    <p class="text-red-500 text-xs italic" v-if="errors.role">
                        {{ errors.role[0] }}
                    </p>

                    <div
                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                    >
                        <svg
                            class="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <button
                type="submit"
                class="btn-primary"
                @click.prevent="submitData(user)"
            >
                Update
            </button>
        </form>
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
                role: null
            },
            roles: [0, 1, 2]
        };
    },

    computed: {
        ...mapGetters({
            user: "selectedUser",
            isGod: "god"
        }),

        name: {
            get() {
                return this.user.name;
            },
            set(value) {
                this.$store.commit("updateName", value);
            }
        },

        email: {
            get() {
                return this.user.email;
            },
            set(value) {
                this.$store.commit("updateEmail", value);
            }
        },

        role: {
            get() {
                return this.user.role;
            },
            set(value) {
                this.$store.commit("updateRole", value);
            }
        }
    },

    methods: {
        submitData(user) {
            this.$store.dispatch("updateUser", {user}).then(res => {
                this.$emit("updated");
            })
            .catch(err => {
                let errs = err.response.data

                this.errors.server_error = errs.message
                this.errors.name = errs.errors.name
                this.errors.email = errs.errors.email
                this.errors.role = errs.errors.role
            })
        }
    }
};
</script>

<style></style>
