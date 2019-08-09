import 'babel-polyfill'

import Vue from 'vue'
import Index from './Index.vue'
import router from './router'
import store from './store'
import vconsole from 'vconsole'
import './style/index.scss'


import EuiBtn from '../packages/Button/index.js'
import EuiLoading from '../packages/Loading/index.js'
import EuiVLoad from '../packages/VLoad/index.js'
import EuiPopup from '../packages/Popup/index.js'
import Toast from '../packages/Toast/index.js'

Vue.use(EuiBtn).use(EuiLoading).use(EuiVLoad).use(EuiPopup).use(Toast)


if(process.env.NODE_ENV == 'development'){
  new vconsole()
}


new Vue({
    el: '#app',
    store,
    router,
    template: '<Index/>',
    components: { Index }
})

