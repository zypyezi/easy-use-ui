

<template>
    <div class="btn">
        {{text}}
    </div>
</template>

<script>
export default {
    name: 'eui-btn',
    props: {
        text: {
            type: String
        },
        type: {
            type: String,
            default: 'default'
        }
    }
}
</script>

<style scoped>
    .btn{
        width:100%;
        height:100%;
        padding: 5px 10px;
    }
</style>

