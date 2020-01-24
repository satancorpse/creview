<template>
    <div>
        <div class="box min-h-16 mb-8 w-full">
            <UsersList></UsersList>
        </div>

        <div class="box mb-8">
            <CooksList></CooksList>
        </div>

    </div>
</template>

<script>
import UsersList from './UsersList';
import CooksList from './CooksList';

export default {
    components: { UsersList, CooksList },
}
</script>

<style>

</style>
