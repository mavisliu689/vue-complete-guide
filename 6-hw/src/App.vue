<template>
    <div class="container">
        <headerr></headerr>
        <hr>
        <div class="row">
            <left-content></left-content>
            <right-content></right-content>
        </div>
        <hr>
        <footerr></footerr>
    </div>
</template>

<script>
    import headerr from './components/shared/header.vue';
    import footerr from './components/shared/footer.vue';
    import leftContent from './components/server/leftContent.vue';
    import rightContent from './components/server/rightContent.vue';

    export default {
        components:{
            headerr,
            footerr,
            leftContent,
            rightContent
        }
    }
</script>

<style>

</style>
