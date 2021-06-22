<template>
    <div>
       <Switch v-model:value="value"/>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'
export default {
    name: 'SwitchDemo',
    components: {
        Switch,
    },
    setup(){
        const value = ref(false);
        return {value}
    }
}
</script>

<style lang="scss">
    
</style>