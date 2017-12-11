<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User {{name}}!</p>
        <button @click="changeName">Change my Name</button>
        <p>name is {{ name }}</p>
        <p>userAge is {{ age }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :myName="name"
                                  @nameWasReset="name = $event"
                                  :resetFn="resetName"
                                  :restAge="resetAge" ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="age"
                               @ageWasEdited="age = $event"></app-user-edit>
            </div>
        </div>
    </div>

</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
            return {
                name: 'Mavis',
                age: 25
            }
        },
        methods: {
            changeName: function() {
                this.name = 'Janice'
            },
            resetName: function() {
                this.name = 'Mavis',
                this.$emit('nameWasReset', this.name)
            },
            resetAge: function() {
                this.age = 25,
                this.$emit('ageWasEdited', this.age)
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

