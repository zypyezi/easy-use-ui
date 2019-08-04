<template>
    <div>
        <div class="ui-doc-section1">
            <doc-header>Button 按钮</doc-header>
            <card></card>
        </div>
        <div class="ui-doc-phone">
            <card>
                <eui-btn></eui-btn>
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
