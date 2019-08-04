<template>
    <div class="ui-doc-nav">
        <template v-for="menu of menuList">
            <div class="ui-doc-nav-item" @click="$emit('change',menu)">{{menu.name}}</div>
        </template>
    </div>
</template>

<script>
import {COMPONENTS_LIST} from '../../../constant'
export default {
    name: 'nav',
    data() {
        return {
            menuList: COMPONENTS_LIST
        }
    }
}
</script>

<style lang="scss" scoped>
    .ui-doc-nav{
        position: fixed;
        left:0;
        bottom: 0;
        top: 0;
        width: 220px;
        overflow-y: scroll;
        padding: 25px 0 75px;
        background-color: #fff;
        /* -webkit-box-shadow: 0 8px 12px #ebedf0; */
        box-shadow: 0 8px 12px #ebedf0;
        border-right: 1px solid #f1f4f8;
    }
    .ui-doc-nav-item{
        padding-left:20px;
        color: #333;
        font-size: 16px;
        cursor:pointer;
        line-height: 22px;
        &.active{
            color: #1989fa;
        }
    }
</style>

