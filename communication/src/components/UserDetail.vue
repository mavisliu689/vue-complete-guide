<template>
    <div class="component">
        <h3>人生無常</h3>
        <p>月有陰晴圓缺</p>
        <p>把握當下 {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">resetName</button>
        <button @click="resetFn()">resetName</button>
    </div>

</template>
<script>
    import { eventBus } from '../main';
    export default {
        props: {
            // myName: [String, Array]
            myName: {
                type: String,
                // required: true, //一定要符合這樣的type
                //default: 'Max'//no need required
                default : function(){
                    return {
                        name: 'Mavis'
                    }
                },
            },
            resetFn: Function,
            userAge: Number
        },
        methods: {
            switchName() {
                return this.myName.split("").reverse().join("");
            },
            resetName() {
                this.myName = 'Mavis';
                this.$emit('nameWasReset', this.myName);
            }
        },
        created() {
            eventBus.$on('ageWasEdited', (age) => {
                this.userAge = age;
            });
        }

    }
</script>
<style scoped>
    div {
        background-color: lightcoral;
    }
</style>

