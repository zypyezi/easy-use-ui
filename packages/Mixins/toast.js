export default {
    mounted() {
        this.portal()
        
    },
    methods: {
        portal () {
            document.body.appendChild(this.$el)
        }
    }
}