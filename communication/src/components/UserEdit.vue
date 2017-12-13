<template>
    <div class="component">
        <h3>人生無常2</h3>
        <p>月有陰晴圓缺2</p>
        <p>把握當下2</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="editAge">editAge</button>
    </div>

</template>
<script>
    import { eventBus } from '../main';
    export default {
        props: ['userAge'],
        methods: {
            editAge() {
                this.userAge = 18;
                // this.$emit('ageWasEdited', this.userAge);
                eventBus.changeAge(this.userAge);
            }
        },

    }
</script>
<style scoped>
    div {
        background-color: lightskyblue;
    }
</style>

