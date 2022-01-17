<template>
<div>
  <h1>{{ title }}</h1>
  <button v-on:click="notify">notify</button>
  <notifications group="foo" position='center middle'/>

</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import Vue from 'vue'
export default defineComponent({
    setup() {

    },
    layout(context) {
        return 'blog'
    },
    data() {
      return {
        title: 'Hello World!'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'My custom description'
          }
        ]
      }
    },
    methods: {
        notify(e) {
            console.log('notify')
         Vue.notify({
            group: 'foo',
            title: 'Important message',
            text: 'Hello user! This is a notification!'
            })
        }
    }
})
</script>
