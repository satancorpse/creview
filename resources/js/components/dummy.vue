<template>
    <div class="mt-8">
        <div class="container flex mx-auto">
            <div class="w-1/4 min-h-screen">
                <div class="sidebar px-12 border-r h-full">
                    <h3 class="mb-2">Manage users</h3>
                    <h6><a href="/" class="text-teal-600 font-bold"><span class="text-teal-500">+</span> Add new users</a></h6>
                    <hr>
                    <h3 class="mb-2">Manage cooks</h3>
                    <h6><a href="/" class="text-teal-600 font-bold"><span class="text-teal-500">+</span> Add new cooks</a></h6>
                    <hr>
                    <h3 class="mb-2">Manage reviews</h3>
                    <h6><a href="/" class="text-teal-600 font-bold"><span class="text-teal-500">+</span> Add a new item for review</a></h6>
                </div>
            </div>

            <div class="w-3/4 min-h-screen">

                <div class="container flex mx-auto">

                    <div class="w-1/2 pl-8">

                        <div class="box min-h-16 border p-4 mb-8">
                            <h2 class="text-center">Recently added users</h2>
                            <hr>
                            <table class="table-auto w-full">
                                <thead class="border bg-teal-100">
                                    <tr>
                                    <th class="px-4 py-2 border">SL</th>
                                    <th class="px-4 py-2 border">Name</th>
                                    <th class="px-4 py-2 border">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(user, index) in users" :key="user.id">
                                        <td class="border p-2 text-center">{{ index+1 }}</td>
                                        <td class="border px-4 py-2">{{ user.name }}</td>
                                        <td class="border px-4 py-2 text-center">
                                            <button class="border px-8 py-1 text-teal-500 font-semibold text-xs">Edit</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="box min-h-16 border p-4 mb-8">
                            <h2 class="text-center">Recently added users</h2>
                            <hr>
                            <table class="table-auto w-full">
                                <thead class="border bg-teal-100">
                                    <tr>
                                    <th class="px-4 py-2 border">SL</th>
                                    <th class="px-4 py-2 border">Name</th>
                                    <th class="px-4 py-2 border">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td class="border p-2 text-center">1</td>
                                    <td class="border px-4 py-2">John Doe</td>
                                    <td class="border px-4 py-2 text-center"><button class="border px-8 py-1 text-teal-500 font-semibold text-xs">Edit</button></td>
                                    </tr>
                                    <tr class="bg-gray-100">
                                    <td class="border p-2 text-center">2</td>
                                    <td class="border px-4 py-2">Jane Doe</td>
                                    <td class="border px-4 py-2 text-center"><button class="border px-8 py-1 text-teal-500 font-semibold text-xs">Edit</button></td>
                                    </tr>
                                    <tr>
                                    <td class="border p-2 text-center">3</td>
                                    <td class="border px-4 py-2">Adam Chris</td>
                                    <td class="border px-4 py-2 text-center"><button class="border px-8 py-1 text-teal-500 font-semibold text-xs">Edit</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div class="w-1/2 pl-8">

                        <div class="box min-h-16 border p-4 mb-8">

                            <h2 class="text-center">Recently added cooks</h2>
                            <hr>
                            <table class="table-auto w-full">
                                <thead class="border bg-teal-100">
                                    <tr>
                                    <th class="px-4 py-2 border">SL</th>
                                    <th class="px-4 py-2 border">Name</th>
                                    <th class="px-4 py-2 border">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(cook, index) in cooks" :key="cook.id">
                                        <td class="border p-2 text-center">{{ index+1 }}</td>
                                        <td class="border px-4 py-2">{{ cook.name }}</td>
                                        <td class="border px-4 py-2 text-center">
                                            <button class="border px-8 py-1 text-teal-500 font-semibold text-xs">Edit</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="box min-h-16 border p-4 mb-8">

                            <h2 class="text-center">Recently added users</h2>
                            <hr>
                            <table class="table-auto w-full">
                                <thead class="border bg-teal-100">
                                    <tr>
                                    <th class="px-4 py-2 border">SL</th>
                                    <th class="px-4 py-2 border">Name</th>
                                    <th class="px-4 py-2 border">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td class="border p-2 text-center">1</td>
                                    <td class="border px-4 py-2">John Doe</td>
                                    <td class="border px-4 py-2 text-center"><button class="border px-8 py-1 text-teal-500 font-semibold text-xs">Edit</button></td>
                                    </tr>
                                    <tr class="bg-gray-100">
                                    <td class="border p-2 text-center">2</td>
                                    <td class="border px-4 py-2">Jane Doe</td>
                                    <td class="border px-4 py-2 text-center"><button class="border px-8 py-1 text-teal-500 font-semibold text-xs">Edit</button></td>
                                    </tr>
                                    <tr>
                                    <td class="border p-2 text-center">3</td>
                                    <td class="border px-4 py-2">Adam Chris</td>
                                    <td class="border px-4 py-2 text-center"><button class="border px-8 py-1 text-teal-500 font-semibold text-xs">Edit</button></td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {

    data() {
        return {}
    },

    created() {
        this.$store.dispatch('fetchUsers')
        this.$store.dispatch('fetchCooks')
    },

    computed: {
        ...mapGetters({
            users: 'users',
            cooks: 'cooks'
        }),
    }
};
</script>

<style></style>
