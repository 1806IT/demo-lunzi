<template>
    <div class="row">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "grow"
    }
</script>

<style scoped lang="scss">

    .row{
        display: flex;
        justify-content: center;
        flex-direction: row;
    }


</style>