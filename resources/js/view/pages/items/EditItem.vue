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
                <label for="name"> Food Item </label>
                <input
                    id="name"
                    type="text"
                    placeholder="Item name"
                    v-model="name"
                />

                <p class="text-red-500 text-xs italic" v-if="errors.name">
                    {{ errors.name[0] }}
                </p>
            </div>

            <div class="mb-4">
                <label for="cook">
                    Cook
                </label>
                <div class="relative">
                    <select class="" id="cook_id" v-model="cook_id">
                        <option disabled value="">Select a cook</option>
                        <option
                            v-for="(cook, index) in cooks"
                            :key="cook.id"
                            :value="cook.id"
                            >{{ cook.name }}</option
                        >
                    </select>

                    <p class="text-red-500 text-xs italic" v-if="errors.cook_id">
                        {{ errors.cook_id[0] }}
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
                @click.prevent="submitData(item)"
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
                cook_id: null
            }
        };
    },

    computed: {
        ...mapGetters({
            item: "selectedItem",
            cooks: "cooks"
        }),

        name: {
            get() {
                return this.item.name;
            },
            set(value) {
                this.$store.commit("updateName", value);
            }
        },

        cook_id: {
            get() {
                return this.item.cook_id;
            },
            set(value) {
                this.$store.commit("updateCook", value);
            }
        }
    },

    methods: {
        submitData(item) {
            this.$store.dispatch("updateItem", {item, publish: true}).then(res => {
                this.$emit("updated");
            })
            .catch(err => {
                let errs = err.response.data

                this.errors.server_error = errs.message
                this.errors.name = errs.errors.name
                this.errors.cook_id = errs.errors.cook_id
            })
        }
    }
};
</script>

<style></style>
