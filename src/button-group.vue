import button from './button'
import icon from './icon
<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "g-button-group",
        mounted(){
            console.log(this.$children);
            console.log(this.$el.children);
            for(let node in this.$el.children){
                console.log(node)
            }
            for(let node2 of this.$el.children){
                console.log(node2)
                let name=node2.nodeName.toLowerCase()
                if(name!=='button'){
                    console.warn(`g-button-group的子元素应该全是g-button,但是你写的是${name}`)
                }
            }
        }
    }
</script>

<style lang="scss">
    .g-button-group{
        display :inline-flex;
        vertical-align: middle;
        >.g-button{
            border-radius: 0;

            &:not(:first-child){
                margin-left: -1px;
            }
            &:first-child{
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child{
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
            &:hover{
                position: relative;
                z-index: 1;
            }
            /*&:not(:first-child){
                border-left:none;
            }边框有bug*/
        }
    }


</style>