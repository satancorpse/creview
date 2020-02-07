<template>

    <div class="sidebar">
        <h5 class="mb-0" @click="close">
            <router-link
                to="/users"
                class="menu-item text-black"
                ><i class="fa fa-user-plus"></i> &nbsp; Manage User</router-link
            >
        </h5>
        <h5 class="mb-0" @click="close">
            <router-link
                to="/cooks"
                class="menu-item text-black"
                ><i class="fa fa-free-code-camp"></i> &nbsp; Manage Cook</router-link
            >
        </h5>
        <h5 class="mb-0">
            <a
                href="/items"
                class="menu-item text-black flex justify-between"
                @click.prevent="toggleClass"
                >
                <span><i class="fa fa-list"></i> &nbsp; Manage Items</span>
                 <span><i class="fa" :class="[menuOpen ? 'fa-angle-up' : 'fa-angle-down']"></i></span>
            </a>
        </h5>
        <div class="sub-items" :class="{'menu-open': menuOpen}">
            <h6 class="mb-0">
                <router-link
                    to="/items/published"
                    class="menu-item text-black pl-4"
                    ><i class="fa fa-list"></i> &nbsp; Published Items</router-link>
            </h6>

            <h6 class="mb-0">
                <router-link
                    to="/items/closed"
                    class="menu-item text-black pl-4"
                    ><i class="fa fa-list"></i> &nbsp; Closed Items</router-link>
            </h6>
        </div>

        <Footer></Footer>
    </div>

</template>

<script>
import Footer from './Footer';

export default {
    components: { Footer },

    data() {
        return {
            menuOpen: false
        }
    },

    created() {
        if( this.$route.name === 'closed-items' || this.$route.name === 'published-items') {
            this.menuOpen = true
        }
    },

    watch: {
        $route (to, from) {
            if( this.$route.name !== 'closed-items' && this.$route.name !== 'published-items') {
                this.menuOpen = false
            }
        }
    },

    methods: {
        toggleClass() {
            this.menuOpen = !this.menuOpen
        },

        close() {
            this.menuOpen = false
        }
    }
};
</script>

<style>
    .flex {
        display: -webkit-box !important;
        display: flex !important;
    }
    .sub-items {
        max-height: 0;
        overflow: hidden;
        -webkit-transition: max-height .9s ease;
        transition: max-height .9s ease;
    }
    .sub-items.menu-open {
        max-height: none;
    }
    .menu-open .menu-item {
        padding-left: 2.5rem;
    }
</style>
