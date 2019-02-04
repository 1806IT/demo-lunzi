<template>
    <div class="wrapper" :class="{error}">
        <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
            @change="$emit('change',$event)"
            @input="$emit('input',$e)"
            @focus="$emit('focus',$e)"
            @iblur="$emit('blur',$e)"
        >
        <template v-if="error">
            <icon name="setting"></icon>
            <span class="errorMessage">{{error}}</span>
        </template>

    </div>
</template>

<script>
    import Icon from './icon'

    export default {
        name: "lunzi-input",
        methods:{

        },

        props: {
            value: {
                type: String,
                default: '请输入'
            },
            disabled:{
                type:Boolean,
                default: false
            },
            readonly:{
                type:Boolean,
                default:false
            },
            error:{
                type:String
            }
        },
        components:{
            Icon
        }
    }
</script>

<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $font-size: 12px;
    $box-shadow-color:rgba(0,0,0,0.5);
    $red:#f1453d;
    .wrapper {
        font-size:$font-size;
        display: inline-flex;
        align-items: center;
        >*{
            margin-right: 0.5em;
            &:last-child{margin-right: 0}
        }
        &.error{
            >input{
                border-color: $red;
            }
        }
        > input {
            border: 1px solid $border-color;
            height: $height;
            border-radius: var(--border-radius);
            padding: 0 8px;
            &:hover {
                border-color: $border-color-hover;
            }
            &:focus{
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }
            &[disabled],&[readonly]{
                border-color:#ccc;
                color: #ccc;
                cursor: not-allowed;
            }
            &[readonly]{
                cursor: not-allowed;
            }
        }
    }
</style>