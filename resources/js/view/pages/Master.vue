<template>

<div>
    <div>
        <div class="flex mx-auto">
            <div class="w-1/5 min-h-screen bg-gray-100 border-r">
                <SideNav></SideNav>
            </div>

            <div class="w-4/5">
                <TopNav></TopNav>
                <div class="w-3/4 px-16 py-8">
                    <router-view class=""></router-view>
                </div>
            </div>
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
