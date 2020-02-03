<template>

    <div>
        <TopNav></TopNav>

        <SideNav></SideNav>

        <div class="page">
            <div class="page-content w-5/6 mx-auto py-8">
                <router-view></router-view>
            </div>
        </div>
    </div>

</template>

<script>
import TopNav from '../components/TopNav';
import SideNav from '../components/SideNav';

export default {

    components: {
        TopNav,
        SideNav,
    },

}
</script>

<style>

</style>
