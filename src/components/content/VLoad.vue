<template>
    <div v-loading="loading" loading-text="加载中......" class="box">
        <div class="ui-doc-section1">
            <doc-header>VLoad</doc-header>
            <card></card>
        </div>
        <div class="ui-doc-phone">
            <card>
                
            </card>
        </div>

    </div>
</template>

<script>
import Card from '../doc/card/Index.vue'
import docHeader from '../doc/header/Index.vue'
export default {
    name: 'loading',
    components: {Card,docHeader},
    data () {
        return {
            loading: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .box{
        position: relative;
    }
</style>
