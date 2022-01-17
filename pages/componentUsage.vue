<template>
<CustomButton>Custom Button</CustomButton>
</template>


<script>
import { defineComponent } from '@vue/composition-api'

const CustomButton = {
    template: '<button>custom button</button>'
}

export default defineComponent({

    setup() {
        
    },
    components: {
        CustomButton
    }
})
</script>
