<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}"
            @click="$emit('click')">
        <!--<button class="g-button" :class="{'undefined':true}">-->
        <!--<button class="g-button" :class="{'left':true}">-->
        <!--<button class="g-button" :class="{'right':true}">-->
        <!--<svg v-if="icon" class="icon">-->
        <!--<use :xlink:href=`#i-${icon}`></use>-->
        <!--</svg>-->
        <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon class ="loading icon" v-if="loading" name="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import Vue from 'vue'
    import gIcon from './icon'
    export default {
        name: 'g-button',
        components:{
            gIcon
        },
        // props: ['icon', 'iconPosition']
        props: {
            icon: {},
            loading:{
                type:Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    // 获取用户传递的值
                    // console.log(value);
                    return !(value !== 'right' && value !== 'left');
                }
            }
        },
        methods:{

        }
    }
</script>

<style lang="scss">
    @keyframes spin{
        0%{transform:rotate(0deg)}
        100%{transform:rotate(360deg)}
    }
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        background: var(--button-bg);
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        padding: 0 1em;
        display: inline-flex;
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

        > .icon {
            order: 1;
            margin-right: .3em;
        }

        > .content {
            order: 2;
        }

        &.icon-right {
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .3em;
            }

            > .content {
                order: 1;
            }
        }
        .loading{
            animation:spin 1s infinite linear;
        }
    }

</style>