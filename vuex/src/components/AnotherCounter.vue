<template>
    <div>
        <button class="btn btn-primary" @click="asynIncrement({by: 50, duration: 100})">Increment</button>
        <button class="btn btn-primary" @click="asynDecrement({by: 100, duration: 100})">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import * as types from '../store/types';
    export default {
        methods: {
            ...mapActions([
                'asynIncrement',
                'asynDecrement'
            ]),
            // increment() {
            //     this.$store.commit('increment');
            // },
            // decrement() {
            //     this.$store.commit('decrement');
            // }
        }
    }
</script>