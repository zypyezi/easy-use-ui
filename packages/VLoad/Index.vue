<template>
    <eui-mask>
       <div class="eui-loading">
           <svg class="circular" viewBox="25 25 50 50">
                <circle class="path" cx="50" cy="50" r="20" fill="none"/>
            </svg>
           <p v-if="text">{{text}}</p>
        </div> 
    </eui-mask>
</template>

<script>
import EuiMask from '../Mask/Index.vue'
export default {
    name: 'eui-vload',
    components: {EuiMask},
    data () {
        return {
            text: '',
            visible: false
        }
    }
}
</script>

<style lang="scss" scoped>
    .eui-loading{
        color: #fff;
        text-align: center;
        font-size: 14px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%) translateX(-50%);
        left: 50%;
        .circular {
            width:42px;
            height:42px;
            animation:loading-rotate 2s linear infinite
        }
        .path{
            animation:loading-dash 1.5s ease-in-out infinite;
            stroke-dasharray:90,150;
            stroke-dashoffset:0;
            stroke-width:2;
            stroke:#20a0ff;
            stroke-linecap:round;
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
