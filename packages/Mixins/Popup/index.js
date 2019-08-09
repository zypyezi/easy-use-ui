export default {
    watch: {
        show(val){
            val ? this.open() : this.close() 
        },
        overlay() {
            this.renderOverlay()
        }
    },
    methods: {
        // 打开弹窗
        open () {
            this.$emit('open')
            if (this.opened) {
                return 
            }
            this.opened = true
            this.renderOverlay()
        },
        // 关闭弹窗
        close () {
            this.$emit('close')
            if (!this.opened) {
                return 
            }
            this.opened = false
            this.closeOverlay(this)
        },
        // 关闭遮罩层
        onClickOverlay () {
            this.close()
            this.$emit('changeShow', false)
        }
    }
}