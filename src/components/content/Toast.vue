<template>
    <div>
        <!-- <div class="ui-doc-section1">
            <doc-header>Button 按钮</doc-header>
            <card></card>
        </div> -->
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
    name: 'toast',
    components: {Card,docHeader},
    created(){
        console.log(this)
        this.$toast()
    }
}
</script>

<style>

</style>
