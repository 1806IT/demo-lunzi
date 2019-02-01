<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
        <!--<button class="g-button" :class="{'undefined':true}">-->
        <!--<button class="g-button" :class="{'left':true}">-->
        <!--<button class="g-button" :class="{'right':true}">-->
        <!--<svg v-if="icon" class="icon">-->
            <!--<use :xlink:href=`#i-${icon}`></use>-->
        <!--</svg>-->
        <g-icon class="icon" v-if="icon" :name="icon"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        name: 'g-button',
        // props: ['icon', 'iconPosition']
        props:{
            icon:{},
            iconPosition:{
                type:String,
                default:'left',
                validator(value){
                    // 获取用户传递的值
                    console.log(value);
                    return !(value !== 'right'&& value !== 'left');
                }
            }
        }
    }
</script>

<style lang="scss">
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        background: var(--button-bg);
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        padding: 0 1em;
        display:inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background: var(--button-active-bg)
        }
        &:focus {
            outline: none;
        }
        > .icon{
            order: 1;
            margin-right: .3em;
        }
        > .content{
            order:2;
        }
        &.icon-right{
            > .icon{
                order:2;
                margin-right: 0;
                margin-left: .3em;
            }
            > .content{
                order:1;
            }
        }
    }

</style>