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

        <Footer></Footer>
    </div>

</template>

<script>
import Footer from './Footer';

export default {
    components: { Footer }
};
</script>

<style></style>
