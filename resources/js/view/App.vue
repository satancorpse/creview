<template>
<div>
    <TopNav></TopNav>
    <div>
        <div class="container w-2/3 flex mx-auto">
            <div class="w-1/4 min-h-screen">
                <SideNav></SideNav>
            </div>

            <div class="w-3/4 border-l p-8">
                <router-view></router-view>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import TopNav from './components/TopNav';
import SideNav from './components/SideNav';

export default {

    components: {
        TopNav,
        SideNav,
    },

    data() {
        return {}
    },

};
</script>

<style></style>
