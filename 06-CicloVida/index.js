const app = new Vue({
    el: '#app',
    data: {
        saludo: 'Ciclo de Vida'
    },
    beforeCreate() {
        console.log('before')
    },
    created() {
        console.log('created')
    },
    beforeMount() {
        console.log('beforeMount')
    },
    mounted() {
        console.log('mounted')
    },
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    updated(){
        console.log('update')
    },
    beforeDestoy() {
        console.log('beforeDestroy')
    },
    destroyed() {
        console.log('destroyed')
    },
    methods: {
        destruir(){
            this.$destroy()
        }
    }
})