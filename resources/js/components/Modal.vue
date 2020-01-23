<template>
  <!--Modal-->
  <div class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center" v-if="show">
    <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

    <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">

      <div class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50" @click.prevent="closeModal">
        <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
        </svg>
      </div>

      <!-- Add margin if you want to see some of the overlay behind the modal-->
      <div class="modal-content py-4 text-left px-6">
        <!--Title-->
        <div class="flex justify-end items-center pb-3">
          <div class="modal-close cursor-pointer z-50" @click.prevent="closeModal">
            <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          </div>
        </div>

        <form class="w-full max-w-lg mb-8">
            <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full px-3">
                    <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="name"
                    >
                        Name
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="name"
                        type="text"
                        :value="cook.name"
                        @input="getName"
                    />
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full px-3">
                    <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="email"
                    >
                        Email Adress
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="email"
                        type="email"
                        placeholder="Enter a valid email ID"
                        :value="cook.email"
                        @input="getEmail"
                    />
                </div>
            </div>

            <button type="submit" class="px-6 py-2 bg-teal-500 text-white" @click.prevent="editCook(cook)">Edit</button>
        </form>

        <!--Footer-->
        <div class="flex justify-end pt-2">
          <button class="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">Action</button>
          <button class="cursor-pointer modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400" @click="closeModal">Close</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {

    data() {
        return {
            form: {}
        }
    },

    mounted() {
        // console.log(this.$store.state)
    },

    computed: {
        ...mapGetters({
            cook: 'cookUnderEdit',
            show: 'showModal'
        }),
    },

    methods: {
        closeModal() {
            this.$store.dispatch('closeModal');
        },

        getName(e) {
            this.$store.commit('updateName', e.target.value)
        },

        getEmail(e) {
            this.$store.commit('updateEmail', e.target.value)
        },

        editCook(cook) {
            this.$store.dispatch('updateCook', cook)
        }
    }
}
</script>

<style>

</style>
