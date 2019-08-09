<template>
    <div class="eui-toast">
        eee
    </div>
</template>

<script>
export default {
    name: 'eui-toast',
    created () {
        console.log(1121)
    },
     mounted() {
        this.portal()
        
    },
    methods: {
        portal () {
            // TODO
            document.body.appendChild(this.$el)
        }
    }
}
</script>

<style lang="scss" scoped>
    .eui-toast{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        background-color: rgba(50, 50, 51, 0.88);
        border-radius: 4px;
    }
</style>
