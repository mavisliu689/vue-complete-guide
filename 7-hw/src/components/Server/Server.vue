<template>
    <li class="list-group-item"
        style="cursor: pointer"
        @click="serverSelected">
        Server #{{ server.id }} - {{ server.status }}

    </li>
</template>

<script>
    import {ServerBus} from '../../main';
    export default {
        props: ['server'],
        methods: {
            serverSelected() {
                ServerBus.serverSelected(this.server)
            }
        }
    }
</script>

<style>
</style>