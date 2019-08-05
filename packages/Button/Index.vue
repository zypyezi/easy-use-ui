

<template>
    <div :class="`eui-btn eui-btn-${type} eui-btn-${size}`">
        {{text}}
    </div>
</template>

<script>
export default {
    name: 'eui-btn',
    props: {
        text: {
            type: String
        },
        type: {
            type: String,
            default: 'default'
        },
        size: {
            type: String,
            default: 'normal'
        }
    }
}
</script>

<style lang="scss" scoped>
    $primary: #1890ff;
    $default: #d9d9d9;
    $disabled: #f5f5f5;
    .eui-btn{
        /* width:100%; */
        /* height:100%; */
        display: inline-block;
        font-size: 14px;
        border-radius: 4px;
        cursor: pointer;
        position: relative;
        &.eui-btn-default{
            color: rgba(0,0,0,0.65);
            background-color: #fff;
            border-color: $default;
        }

        &.eui-btn-primary{
            color: #fff;
            background-color: $primary;
            border-color: $primary;
        }

        &[disabled]{
            color: rgba(0,0,0,0.25);
            background-color: $disabled;
            border-color: #d9d9d9;
            text-shadow: none;
            -webkit-box-shadow: none;
            box-shadow: none;
            pointer-events: none;
        }

        &[hairline]{
            &:after{
                position: absolute;
                box-sizing: border-box;
                content: ' ';
                pointer-events: none;
                top: -50%;
                right: -50%;
                bottom: -50%;
                left: -50%;
                border-color: inherit;
                border-radius: 4px;
                border-width: 1px;
                -webkit-transform: scale(0.5);
                transform: scale(0.5);
            }
        }

        &.eui-btn-normal{
            padding: 5px 10px;
        }

        &.eui-btn-large{
            width: 100%;
            height: 50px;
            line-height: 48px;
            text-align: center;
        }
         
        &.eui-btn-small{
            padding: 0 8px
        }

        &:before{
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            height: 100%;
            background-color: #000;
            border: inherit;
            border-color: #000;
            border-radius: inherit;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            opacity: 0;
            content: ' ';
        }

        &:active:before{
            opacity: 0.1;
        }

       
    }
</style>

