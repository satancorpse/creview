<template>
    <header class="border-b sticky top-0 bg-white">
        <nav class="flex items-center justify-between flex-wrap px-16 py-4 mx-left w-3/4">
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                    <router-link
                        to="/about"
                        class="menu-item mr-4">
                        About
                    </router-link>
                    <a href="#responsive-header" class="mr-4">Docs</a>
                    <a href="#responsive-header" class="mr-4">Docs</a>
                    <a href="#responsive-header" class="mr-4">Docs</a>
                </div>
                <div>
                    <Logout></Logout>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import Logout from '../pages/Logout';

export default {
    components: { Logout },
}
</script>

<style>

</style>
