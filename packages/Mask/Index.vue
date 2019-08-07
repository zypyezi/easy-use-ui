<template>
    <div class="eui-mask" :style="{zIndex: zIndex}" @click="handleClick" v-show="show">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'eui-mask',
    props: {
        zIndex: {
            type: Number,
            default: 2000
        },
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClick () {
            this.$emit('click')
        }
    }
}
</script>

<style lang="scss" scoped>
    .eui-mask{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
    }
</style>
