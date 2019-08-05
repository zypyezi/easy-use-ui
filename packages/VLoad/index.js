import Vue from 'vue'
import EuiVLoad from './Index.vue'
let Mask = Vue.extend(EuiVLoad)

EuiVLoad.install = function (Vue) {
    console.log('install')
    Vue.directive('loading', {
        bind: function (el, binding) {
            console.log(el,binding)
            el.instance = new Mask({
                el: document.createElement('div'),
                data: {
                    text: el.getAttribute('loading-text')
                }
            })

            el.appendChild(el.instance.$el)
            el.instance.visible = binding.value

        },
        update: function (el, binding) {
            if (binding.oldValue !== binding.value) {
                el.instance.visible = binding.value
                document.documentElement.style.overflow = binding.value ? 'hidden' : ''
            }
        },
        unbind: function (el, binding) {
            document.documentElement.style.overflow = ''
            el.removeChild(el.instance.$el)
        }
    })
}


export default EuiVLoad