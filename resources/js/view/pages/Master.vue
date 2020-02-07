<template>

    <div>
        <Header></Header>

        <Sidebar></Sidebar>

        <div class="page">
            <div class="page-content w-5/6 mx-auto py-8">
                <router-view></router-view>
            </div>
        </div>
    </div>

</template>

<script>
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default {

    components: {
        Header,
        Sidebar,
    },

}
</script>

<style>
.border-red-500 {
    border-color: #f56565 !important;
}
</style>
