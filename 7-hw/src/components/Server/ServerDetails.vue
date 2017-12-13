<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
        <p v-if="!server"></p>
        <div v-else>
            <p>{{ server.id }} : {{server.status}}</p>
            <button class="btn btn-promary" @click="changeStatus('Normal')">
                Normal
            </button>
            <button class="btn btn-promary" @click="changeStatus('Critical')">
                Critical
            </button>
            <button class="btn btn-promary" @click="changeStatus('Unknow')">
                Unknow
            </button>
        </div>

    </div>

</template>

<script>
    import {ServerBus} from '../../main.js';
    export default {
        data: function(){
            return {
                server:null
            }
        },
        created() {
            ServerBus.$on('serverSelected', (server) => {
                this.server = server;
            })
        },
        methods: {
            changeStatus(status){
                this.server.status = status
                ServerBus.statusChange(this.server);
            }
        }
    }
</script>

<style>

</style>
