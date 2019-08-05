<template>
    <div class="eui-mask">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'eui-mask'
}
</script>

<style lang="scss" scoped>
    .eui-mask{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2001;
        background-color: rgba(0, 0, 0, 0.3);
    }
</style>
