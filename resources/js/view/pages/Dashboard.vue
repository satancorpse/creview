<template>
    <div>
        <div class="box min-h-16 mb-8 w-full">
            <Reviews></Reviews>
        </div>

        <div class="box min-h-16 mb-8 w-full">
            <Items></Items>
        </div>

        <div class="box min-h-16 mb-8 w-full">
            <Users></Users>
        </div>

        <div class="box mb-8">
            <Cooks></Cooks>
        </div>

    </div>
</template>

<script>
import Users from './Users';
import Cooks from './Cooks';
import Reviews from './Reviews';
import Items from './Items';

export default {
    components: { Users, Cooks, Reviews, Items },
}
</script>

<style>

</style>
