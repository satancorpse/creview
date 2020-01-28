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
                        <select class="" id="score" v-model="formData.score">
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
                            <input type="checkbox" class="form-checkbox" v-model="formData.meta.type" value="Taste">
                            <span class="ml-2">Taste</span>
                        </label>
                    </div>
                    <div>
                        <label class="inline-flex items-center">
                            <input type="checkbox" class="form-checkbox" v-model="formData.meta.type" value="Authantacity">
                            <span class="ml-2">Authantacity</span>
                        </label>
                    </div>
                    <div>
                        <label class="inline-flex items-center">
                            <input type="checkbox" class="form-checkbox" v-model="formData.meta.type" value="Quality">
                            <span class="ml-2">Quality</span>
                        </label>
                    </div>
                    <div>
                        <label class="inline-flex items-center w-full">
                            <span class="mr-2">Other: </span>
                            <input type="text" class="form-text mb-0" placeholder="Please specify" style="margin-bottom: 0 !important" v-model="formData.meta.other">
                        </label>
                    </div>
                </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full px-3">
                    <label class="block">
                        <span class="text-gray-700">Give a constructive feedback</span>
                        <textarea class="form-textarea mt-1 block w-full" rows="6" placeholder="Enter some long form content." v-model="formData.feedback"></textarea>
                    </label>
                </div>
            </div>

            <button type="submit" class="btn-primary" @click.prevent="submitReview">Submit</button>
        </form>

        {{ formData }}
    </div>
</template>

<script>

export default {

    data() {
        return {
            scores: [1,2,3,4,5],
            formData: {
                score: '',
                meta: {
                    type: [],
                    other: ''
                },
                feedback: '',
                user_id: 1,
                item_id: this.$route.params.id
            }
        }
    },

    computed: {

    },

    methods: {
        submitReview() {
            this.$store.dispatch('submitReview', {
                review: this.formData
            }).then(res => {
                this.$router.push({name: 'item-reviews', params: { id: this.formData.item_id }})
            })
        }
    }
}
</script>

<style>

</style>
