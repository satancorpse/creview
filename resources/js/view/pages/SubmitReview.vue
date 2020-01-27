<template>
    <div>
        <h1>Submit</h1>
        <hr>

        <form class="w-full max-w-lg">

            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label for="cook">
                        How much would you rate the item?
                    </label>
                    <div class="relative">
                        <select class="" id="id" v-model="id">
                            <option disabled value="">Give a score</option>
                            <option v-for="(score, index) in scores" :key="score" :value="score">{{ score }}</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
            </div>

            <div class="block mb-4">
                <label for="cook">Check all that describe the problems with the item</label>
                <div class="mt-2">
                    <div>
                        <label class="inline-flex items-center">
                            <input type="checkbox" class="form-checkbox">
                            <span class="ml-2">Taste</span>
                        </label>
                    </div>
                    <div>
                        <label class="inline-flex items-center">
                            <input type="checkbox" class="form-checkbox">
                            <span class="ml-2">Authantacity</span>
                        </label>
                    </div>
                    <div>
                        <label class="inline-flex items-center">
                            <input type="checkbox" class="form-checkbox">
                            <span class="ml-2">Quality</span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full px-3">
                    <label class="block">
                        <span class="text-gray-700">Give a constructive feedback</span>
                        <textarea class="form-textarea mt-1 block w-full" rows="12" placeholder="Enter some long form content."></textarea>
                    </label>
                </div>
            </div>

            <button type="submit" class="btn-primary">Submit</button>
        </form>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {

    data() {
        return {
            scores: [1,2,3,4,5],
            id: ''
        }
    },

    computed: {

    },

    methods: {

    }
}
</script>

<style>

</style>
