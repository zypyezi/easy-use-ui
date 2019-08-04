<template>
    <div class="ui-doc-card">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'card',


}
</script>

<style scoped>
    .ui-doc-card{
        height:100%;
        padding: 24px;
        margin-bottom: 24px;
        border-radius: 6px;
        background-color: #fff;
        -webkit-box-shadow: 0 8px 12px #ebedf0;
        box-shadow: 0 8px 12px #ebedf0;
    }

</style>
