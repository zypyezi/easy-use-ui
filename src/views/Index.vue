<template>
    <div class="vue-app">
        <doc-nav @change="changeNav"></doc-nav>
        <div class="ui-doc-content-box">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

  import {mapState, mapMutations} from 'vuex'
  import docNav from '../components/doc/menu/Index.vue'
  export default {
    name: 'vue-app',
    components: {docNav},
    data(){
        return {
        }
    },
    computed:{
    },
    methods:{
        changeNav (nav) {
            this.$router.push('/' + nav.path)
        }
    }

}
</script>

<style lang="scss" >
    .vue-app{
        height: 100%;
    }
    .ui-doc-content-box{
        height: 100%;
        overflow: hidden;
        padding-left: 240px;
        background-color: #f0f3f6;
        min-width: 950px;
    }

    .ui-doc-section1{
        min-width: 530px;
        width: calc(100% - 420px);
        display: inline-block;
    }

    .ui-doc-phone{
        float: right;
        margin-right: 30px;
        margin-top: 50px;
        width: 375px;
        height: 640px;
        display: inline-block;
    }

</style>
