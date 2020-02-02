<template>
    <div class="sidebar pb-8 ml-auto w-3/5 sticky top-0">

        <h1 class="text-teal-700 mb-6 mx-auto">
            <router-link :to="home" class="block py-3"><i class="fa fa-gg"></i> iCode</router-link>
        </h1>
        <h6 class="mb-0">
            <router-link
                to="/create-user"
                class="menu-item text-black"
                ><i class="fa fa-user-plus"></i> &nbsp; Manage User</router-link
            >
        </h6>
        <h6 class="mb-0">
            <router-link
                to="/create-cook"
                class="menu-item text-black"
                ><i class="fa fa-free-code-camp"></i> &nbsp; Manage Cook</router-link
            >
        </h6>
        <h6 class="mb-0">
            <router-link
                to="/create-item"
                class="menu-item text-black"
                ><i class="fa fa-list"></i> &nbsp; Manage Items</router-link
            >
        </h6>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
        data() {
        return {
            home: '/'
        }
    },

    created() {
        if(this.signedIn) {
            this.home = '/dashboard'
        }
    },

    computed: {
        ...mapGetters({
            signedIn: 'signedIn'
        })
    },
};
</script>

<style></style>
