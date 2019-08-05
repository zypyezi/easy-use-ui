<template>
    <div>
        <div class="ui-doc-section1">
            <doc-header>Loading 加载</doc-header>
            <card></card>
        </div>
        <div class="ui-doc-phone">
            <card>
                <eui-loading type="spinner" text="spinner"></eui-loading>
                <eui-loading type="circle" text="circle"></eui-loading>
                <eui-loading type="circle" text="circle" size="30px" text-size="16px"></eui-loading>
                <eui-loading type="circle" text="circle" :vertical="false"></eui-loading>
            </card>
        </div>

    </div>
</template>

<script>
import Card from '../doc/card/Index.vue'
import docHeader from '../doc/header/Index.vue'
export default {
    name: 'loading',
    components: {Card,docHeader}
}
</script>

<style>

</style>
