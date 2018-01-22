<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of Clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import * as types from '../store/types';    
    export default {
        computed: {
            // counter(){
            //     return this.$store.getters.doubleCounter
            //     // return this.$store.statue.counter *2
            // },
            // clicks() {
            //     return this.$store.getters.stringCounter
            // }
            ...mapGetters({
                doubleCounter: types.DOUBLE_COUNTER,
                stringCounter: types.CLICK_COUNTER
            })
        }
    }
</script>