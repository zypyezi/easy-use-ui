<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

  import {mapState, mapMutations} from 'vuex'

  export default {
    name: 'app',
    data(){
        return {
        }
    },
      computed:{
      },
      methods:{
          
      }

    }
</script>

<style lang="scss">
  html,body{
    margin: 0;
    padding:0;
    height:100%
  }

  #app{
    background-color: #f0f3f6;
    height:100%
  }

</style>
