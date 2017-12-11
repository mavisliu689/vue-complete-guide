<template>
    <li class="list-group-item"
        style="cursor: pointer"
        @click="serverSelected">
        Server #{{ Server }}
    </li>
</template>

<script>
    import {ServerBus} from '../../main.js';
    export default {
        props: ['server'],
        methods: {
            serverSelected() {
                ServerBus.$emit('serverSelected', this.id)
            }
        }
    }
</script>

<style>

</style>

