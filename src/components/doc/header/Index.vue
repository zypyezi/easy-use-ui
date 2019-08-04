
<template>
    <h1 class="ui-doc-header">
        <slot></slot>
    </h1>
</template>

<script>
export default {
    name: 's',
    props: ['text']
}
</script>

<style>
    .ui-doc-header{
        line-height: 1.5;
        font-weight: 400;
        color: #333;
        margin-bottom: 20px;
        font-size: 26px;
    }
</style>
