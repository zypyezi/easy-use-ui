<template>
    <div>
        <div class="ui-doc-section1">
            <doc-header>Button 按钮</doc-header>
            <card></card>
        </div>
        <div class="ui-doc-phone">
            <card>
                <eui-btn text="default" type="default"></eui-btn>
                <eui-btn text="primary" type="primary"></eui-btn>
                <eui-btn text="disabled" disabled></eui-btn>
                <eui-btn text="small" size="small"></eui-btn>
                <eui-btn text="large" size="large"></eui-btn>
                <!-- <eui-btn text="细边框" type="primary" hairline></eui-btn> -->
            </card>
        </div>

    </div>
</template>

<script>
import Card from '../doc/card/Index.vue'
import docHeader from '../doc/header/Index.vue'
export default {
    name: 'btn',
    components: {Card,docHeader}
}
</script>

<style>

</style>
