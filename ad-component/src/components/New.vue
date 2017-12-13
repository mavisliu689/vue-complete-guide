<template>
    <div>
        <!-- <p>props: ['quote']</p> -->
        <div>
            <h3>New Quoqe</h3>
            <button @click="counter++">Increase!</button>
            <p>{{ counter}}</p>
        </div>

    </div>
</template>

<script>
    export default{
        data() {
            return {
                counter: 0
            };
        },
        destroyed() {
            console.log('Destroyed!');
        },
        deactivated() {
            console.log('Deactivated!');
        },
        activated() {
            console.log('reactivate!');
        }
    }
</script>

<style scoped>

</style>