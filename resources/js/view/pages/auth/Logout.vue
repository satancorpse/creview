<template>
    <button @click.prevent="logout"><i class="fa fa-sign-out"></i> Logout</button>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$store.dispatch('logout').then(
                this.$router.push('/login')
            ).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>

<style>

</style>
