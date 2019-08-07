<template>
    <div>
        <!-- <div class="ui-doc-section1">
            <doc-header>Popup 弹窗</doc-header>
            <card></card>
        </div> -->
        <div class="ui-doc-phone">
            <span @click="showPage">展示弹窗</span>
            <span @click="showCenterPage">展示中间弹窗</span>
            <eui-popup v-model="showCenter" key="center">
                <span >中间弹窗</span>
            </eui-popup>
            <eui-popup v-model="show" position="top" key="first">
                <span @click="showSecondPage">展示二次弹窗</span>
            </eui-popup>
             <eui-popup v-model="showSecond" position="bottom" key="second">
                <span @click="showThirdPage">展示三次弹窗</span>
            </eui-popup>
            <eui-popup v-model="showThird" position="left" key="third">
                <span @click="showForthPage">展示四次弹窗</span>
                <p @click="close">关闭</p>
            </eui-popup>
            <eui-popup v-model="showForth" position="right" key="forth">
                <span>展示四次弹窗</span>
            </eui-popup>
        </div>

    </div>
</template>

<script>
import Card from '../doc/card/Index.vue'
import docHeader from '../doc/header/Index.vue'
export default {
    name: 'popup',
    components: {Card,docHeader},
    data () {
        return {
            show : false,
            showCenter: false,
            showSecond: false,
            showThird: false,
            showForth: false
        }
    },
    methods: {
        showCenterPage () {
            this.showCenter = true
        },
        showSecondPage () {
            this.showSecond = true
        },
        showThirdPage () {
            this.showThird = true
        },
        close () {
            this.showThird = false
        },
        showPage () {
            this.show = true
        },
        showForthPage () {
            this.showForth = true
        }
    }
}
</script>

<style>

</style>
