<template>
    <div class="col" :class="colClasses" :style=colStyle>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "gcol",
        props:{
            span:[Number,String],
            offset:{
                type:[Number,String]
            },
        },
        data(){
            return {
                gutter:0,

            }
        },
        computed:{
            colStyle(){
                return {
                    paddingLeft:this.gutter/2+'px',
                    paddingRight:this.gutter/2+'px'
                }
            },
            colClasses(){
                // return [this.span&&`col-${this.span}`,this.offset&&`offset-${this.offset}`]  下面用es6语法
                let {span,offset}=this
                return [
                    span&&`col-${span}`,
                    offset&&`offset-${offset}`
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
.col{
    height:100px ;
    background: grey;
    width: 50%;
    border: 1px solid red;
    $class-prefix:col-;

    @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{
            width:($n/24)*100%
        }
    }
    $class-prefix:offset-;
    @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{
            margin-left:($n/24)*100%
        }
    }
}



</style>