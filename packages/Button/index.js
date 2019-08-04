import EuiBtn from './Index.vue'
// 插件形式
EuiBtn.install = function(Vue){
  Vue.component(EuiBtn.name, EuiBtn)
}

export default EuiBtn