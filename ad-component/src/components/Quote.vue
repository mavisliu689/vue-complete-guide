<template>
    <div>
        <div>
            <slot name="title"></slot>
            <span style="color:#ccc"><slot name="subtitle">subTitle</slot></span>
        </div>
        <hr>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default{
        // props:['quote']
    }
</script>

<style scoped>
    div {
        border: 1px sold #ccc;
        box-shadow: 1px 1px 2px ;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }
    h2 {
        color: red;
    }
    .title {
        font-style: italic;
    }
</style>