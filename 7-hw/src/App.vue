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
    import headerr from './header.vue';
    import footerr from './footer.vue';
    import leftContent from './leftContent.vue';
    import rightContent from './rightContent.vue';

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
