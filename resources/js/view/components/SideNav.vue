<template>

    <div class="sidebar">
        <h5 class="mb-0">
            <router-link
                to="/users"
                class="menu-item text-black"
                ><i class="fa fa-user-plus"></i> &nbsp; Manage User</router-link
            >
        </h5>
        <h5 class="mb-0">
            <router-link
                to="/cooks"
                class="menu-item text-black"
                ><i class="fa fa-free-code-camp"></i> &nbsp; Manage Cook</router-link
            >
        </h5>
        <h5 class="mb-0">
            <router-link
                to="/items"
                class="menu-item text-black"
                ><i class="fa fa-list"></i> &nbsp; Manage Items</router-link
            >
        </h5>
    </div>

</template>

<script>
export default {

};
</script>

<style></style>
