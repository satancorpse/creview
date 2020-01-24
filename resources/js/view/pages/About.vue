<template>
  <div>
      <h1>About page</h1>
      <hr>

      <button class="border bg-gray-200 px-5 py-2 font-bold mb-4" @click="showModal">Show Modal</button>

      <Example v-if="this.show" @closeModal="close">
          <p class="text-white m-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, accusamus?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, ipsam fugiat!
          </p>
      </Example>
  </div>
</template>

<script>
import Example from '../components/Example';

export default {
    components: { Example },

    data() {
        return {
            show: false
        }
    },

    methods: {
        showModal() {
            this.show = true
        },

        close() {
            this.show = false
        }
    }

    // data() {
    //     return {
    //         // show: false,
    //         // data: ''
    //     }
    // },

    // methods: {
    //     showModal() {
    //         this.$emit('showModal', {name: 'hello world'})
    //     }
    // }
}
</script>

<style>

</style>
