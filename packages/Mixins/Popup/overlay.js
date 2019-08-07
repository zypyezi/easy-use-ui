import {context} from './context'
import EuiMask from '../../Mask/Index.vue'
import Vue from 'vue'
let overlay = null


function onClickOverlay () {
    if (context.top()) {
        // 当前弹框实例
        const { vm } = context.top()
        vm.$emit('click-overlay')
        if (vm.closeOnClickOverlay) {
            if (vm.onClickOverlay) {
                vm.onClickOverlay()
            } else {
                vm.close()
            }
        }
    }
}
export default {
    methods: {
        renderOverlay () {
            if ( !this.show) {
                return;
            }
            this.updateZIndex(this.overlay ? 1 : 0);

            if (this.overlay) {
                this.openOverlay(this, {
                    zIndex: context.zIndex++,
                    duration: this.duration,
                    className: this.overlayClass,
                    customStyle: this.overlayStyle
                });
            } else {
                this.closeOverlay(this);
            }
        },
        updateZIndex (value) {
            this.$el.style.zIndex = ++context.zIndex + value
        },
        openOverlay(vm, config) {
            if (!context.stack.some(item => item.vm === vm)) {
                context.stack.push({ vm, config });
                this.updateOverlay();
              }
        },
        closeOverlay (vm) {
            const { stack } = context;

            if (stack.length) {
                if (context.top().vm === vm) {
                    stack.pop();
                    this.updateOverlay();
                } else {
                    context.stack = stack.filter(item => item.vm !== vm);
                }
            }
        },
        updateOverlay () {
            if (!overlay) {
                overlay = new Vue ({
                    el : document.createElement('div'),
                    props: EuiMask.props,
                    render(h) {
                        return h(EuiMask, {
                            props: this.$props,
                            on: {
                                click: onClickOverlay
                            }
                        })
                    }
                })
              }
              
              if (context.top()) {
                const { vm, config } = context.top();
                const el = vm.$el; 
                if (el && el.parentNode) {
                  el.parentNode.insertBefore(overlay.$el, el);
                } else {
                  document.body.appendChild(overlay.$el);
                }
            
                Object.assign(overlay, {
                    className: '',
                    customStyle: {}
                }, config, {
                  show: true
                })
              } else {
                overlay.show = false
              }
        }
    }
}