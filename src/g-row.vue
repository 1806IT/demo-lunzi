<template>
    <div class="row" :style="{marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "grow",
        props:{
            gutter:{
                type:[String,Number]
            }
        },
        created(){
            console.log('children:');
            console.log(this.$children);
        },
        mounted(){
            console.log(this.$children);
            this.$children.forEach(col=>{
              col.gutter=this.gutter
            })
        }
    }
</script>

<style scoped lang="scss">

    .row{
        display: flex;
    }


</style>