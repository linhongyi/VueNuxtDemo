<template>
<div>
    <h1>Welcome Login Page</h1>
    <button v-on:click="showBusy">showBusy</button>
    <button v-on:click="hideBusy">hideBusy</button>
</div>
    
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    loading: false,
    setup() {
        
    },
    data () {
    },
    validate() {
        return true;
    },
    methods: {
        showBusy() {
            console.log('show busy');
            this.$nuxt.$loading.start();
        }
        ,
        hideBusy() {
            console.log('hide busy');
            this.$nuxt.$loading.finish();
        }
    }
})
</script>
