<template>
    <div class="eui-loading">
        <template v-if="type == 'circle' ">
            <svg class="eui-circle" viewBox="25 25 50 50" :style="{width: size, height: size}">
                <circle class="path" cx="50" cy="50" r="20" fill="none"/>
            </svg>
        </template>
        <template v-else>
            <span class="eui-spinner" style="color: rgb(201, 201, 201);" :style="{width: size, height: size}">
                <i v-for="i of 10" :class="`spinner-${i}th`"></i>
            </span>
        </template>
       
        <p v-if="text && vertical" :style="{fontSize: textSize}">{{text}}</p>
        <span v-else-if="text" :style="{fontSize: textSize}">{{text}}</span>
    </div>
</template>

<script>
export default {
    name: 'eui-loading',
    props: {
        type: {
            type: String,
            default: 'circle'
        },
        text: {
            type: String
        },
        size: {
            type: String,
            default: '24px'
        },
        vertical: {
            type: Boolean,
            default: true
        },
        textSize: {
            type: String,
            default: '14px'
        }

    }
}
</script>

<style lang="scss" scoped>
    @mixin setI($n:1){
        @for $n from 1 through 10 {
            .spinner-#{$n}th{
                -webkit-transform: rotate($n*30deg);
                transform: rotate($n*30deg);
            }
        }
    }
    .eui-loading{
        // color: #fff;
        text-align: center;
        font-size: 14px;
        .eui-circle {
            width:42px;
            height:42px;
            animation:loading-rotate 1s linear infinite;
            vertical-align: middle;
        }
        .eui-spinner{
            position: relative;
            display: inline-block;
            width: 30px;
            max-width: 100%;
            height: 30px;
            max-height: 100%;
            vertical-align: middle;
            -webkit-animation: loading-rotate 0.8s linear infinite;
            animation: loading-rotate 0.8s linear infinite;
            animation-timing-function: steps(12);
            vertical-align: middle;
            i{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
            i:before{
                display: block;
                width: 2px;
                height: 25%;
                margin: 0 auto;
                background-color: currentColor;
                border-radius: 40%;
                content: ' ';
            }
            @include setI
        }
        .path{
            animation:loading-dash 1.5s ease-in-out infinite;
            stroke-dasharray:90,150;
            stroke-dashoffset:0;
            stroke-width:2;
            stroke:#20a0ff;
            stroke-linecap:round;
        }

        span{
            vertical-align: middle;
        }
    }
    @keyframes loading-rotate{
        100%{transform:rotate(360deg)}
    }
     @keyframes loading-dash{
        0%{stroke-dasharray:1,200;stroke-dashoffset:0}
        50%{stroke-dasharray:90,150;stroke-dashoffset:-40px}
        100%{stroke-dasharray:90,150;stroke-dashoffset:-120px}
    }
</style>
