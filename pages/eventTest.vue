<template>
    <div>
        <button v-on:click="increase">increase</button>
        <p>you've clicked the button {{ counter }}</p>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
    data() {
      return {
        counter: 0
      }
    },
    methods: {
        increase(e) {
            console.log('increase')
            this.counter++
        }
    }
})
</script>
