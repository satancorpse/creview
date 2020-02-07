<template>
    <header class="navbar flex justify-between">
        <div class="sidebar-button">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                viewBox="0 0 448 512"
                class="icon"
            >
                <path
                    fill="currentColor"
                    d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
                ></path>
            </svg>
        </div>
        <h1 class="logo text-center">
            <router-link :to="home"><i class="fa fa-gg"></i> iCode</router-link>
        </h1>
        <div>
            <router-link
                :to="{
                    name: 'profile',
                    params: { id: userId }
                }"
                class="mr-8"
                ><i class="fa fa-user-circle-o"></i>
                {{ firstName }}</router-link
            >

            <Logout></Logout>
        </div>
    </header>
</template>

<script>
import Logout from "../pages/auth/Logout";
import { mapGetters } from "vuex";

export default {
    components: { Logout },

    data() {
        return {
            home: "/"
        };
    },

    created() {
        if (this.signedIn) {
            this.home = "/dashboard";
        }
    },

    computed: {
        ...mapGetters({
            signedIn: "signedIn",
            firstName: "firstName",
            userId: 'authId'
        }),
    }
};
</script>

<style></style>
