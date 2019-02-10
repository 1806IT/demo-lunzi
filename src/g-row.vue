<template>
    <div class="row" :style="rowStyle">
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
        computed:{
          rowStyle(){
              return {
                  marginLeft:-this.gutter/2+'px',
                  marginRight:-this.gutter/2+'px'
              }
          }
        },
        mounted(){
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