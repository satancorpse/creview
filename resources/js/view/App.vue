<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
    // beforeCreate() {
    //     this.$store.dispatch('authUser');
    // },

    mounted() {
        // console.log(JSON.parse(localStorage.getItem('auth_user')).user.role)
    },

    computed: {
        ...mapGetters({
            signedIn: 'signedIn',
        })
    }
};
</script>

<style></style>
