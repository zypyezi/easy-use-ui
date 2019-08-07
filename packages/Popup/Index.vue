
<template>
    <transition :name="`trans${position}`">
        <div :class="`eui-pop eui-pop-${position}`" v-show="show">
            <slot></slot>
        </div>
    </transition>
    
</template>

<script>
import EuiMask from '../Mask/Index.vue'
import Overlay from '../Mixins/Popup/overlay.js'
export default {
    name: 'eui-popup',
    components: {EuiMask},
    mixins: [Overlay],
    model: {
        prop: 'show',
        event: 'changeShow'
    },
    watch: {
        show(val){
            val ? this.open() : this.close() 
        },
        overlay() {
            this.renderOverlay()
        }
    },
    created () {

    },
    mounted () {
        this.show && this.open() 
    },
    props: {
        show: {
           type: Boolean
        },
        position: {
            type: String,
            default: 'center'
        },
        overlay: {
            type: Boolean,
            default: true
        },
        closeOnClickOverlay : {
            type: Boolean,
            default: true
        }
    },
    methods: {
        // 打开弹窗
        open () {
            this.$emit('open')
            if (this.opened) {
                return 
            }
            this.opened = true
            this.renderOverlay()
        },
        // 关闭弹窗
        close () {
            this.$emit('close')
            if (!this.opened) {
                return 
            }
            this.opened = false
            this.closeOverlay(this)
        },
        // 关闭遮罩层
        onClickOverlay () {
            this.close()
            this.$emit('changeShow', false)
        }
    }
}
</script>

<style lang="scss" scoped>
    .eui-pop{
        background-color: #fff;
         transition: 0.3s ease-out;
        &.eui-pop-center{
            padding: 20px;
            display: inline-block;
            position: absolute;
            top: 50%;
            transform: translateY(-50%) translateX(-50%);
            left: 50%;
            transition: 0s;
        }
        &.eui-pop-top, &.eui-pop-bottom{
            padding:20px 0 ;
            position: absolute;
            max-height: 100%;
            overflow-y: auto;
            left: 0;
            right: 0;
            z-index: 2001
        }
        &.eui-pop-top{
            top: 0;
        }
        &.eui-pop-bottom{
            bottom: 0;
        }
        &.eui-pop-left, &.eui-pop-right{
            height:100%;
            padding: 0 20px ;
            position: absolute;
            max-width: 100%;
            overflow-x: auto;
            top: 0;
            bottom: 0; 
        }

        &.eui-pop-left{
            left:0
        }

         &.eui-pop-right{
            right:0
        }

       
    }

    .transtop-enter,  .transtop-leave-active{
        transform: translate3d(0, -100%, 0);
    }

    .transbottom-enter, .transbottom-leave-active{
       transform: translate3d(0, 100%, 0);
    }

     .transleft-enter, .transleft-leave-active{
       transform: translate3d(-100%, 0, 0);
    }

    .transright-enter, .transright-leave-active{
       transform: translate3d(100%, 0, 0);
    }
</style>
