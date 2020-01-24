<template>
    <div class="sidebar pr-4 py-8">
        <h3 class="mb-2">Manage users</h3>
        <h6>
            <router-link to="/create-user" class="text-teal-600 font-bold"><span class="text-teal-500">+</span> Add new users</router-link>
        </h6>
        <hr>
        <h3 class="mb-2">Manage cooks</h3>
        <h6>
            <router-link to="/create-cook" class="text-teal-600 font-bold"><span class="text-teal-500">+</span> Add new cooks</router-link>
        </h6>
        <hr>
        <h3 class="mb-2">Manage reviews</h3>
        <h6>
            <router-link to="/create-review" class="text-teal-600 font-bold"><span class="text-teal-500">+</span> Add new review</router-link>
        </h6>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
