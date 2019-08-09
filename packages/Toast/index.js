import EuiToast from './Index.vue'
import Vue from 'vue'
// EuiToast.install = function (Vue) {
//     Vue.component(EuiToast.name, EuiToast)

//     Vue.prototype.$toast = EuiToast
// }


const defaultOptions = {
    type: 'text',
    message: '',
    value: true,
}

function isObj (x) {
    const type = typeof x;
   return  x !== null && (type === 'object' || type === 'function');
}

function parseOptions(message) {
    if (isObj(message)) {
      return message;
    }
  
    return { message };
  }


function Toast (options = {}) {
    const toast = new (Vue.extend(EuiToast))({
        el: document.createElement('div')
    })

    options = {
        ...defaultOptions,
        ...parseOptions(options),
    }

    Object.assign(toast, options)

    return toast
}


Toast.install = () => {
    Vue.use(EuiToast)
}
 
Vue.prototype.$toast = Toast

export default Toast

