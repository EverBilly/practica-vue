const app = new Vue({
    el: '#app',
    data: {
        message: 'Hola',
        contador: 0
    },
    methods: {
        alerta(){
            swal('hola')
        }
    },
    computed: {
        invertir(){
            return this.message.split('').reverse().join('')
        },
        color(){
            return {
                'bg-success': this.contador <= 10,
                'bg-warning': this.contador > 10 && this.contador < 20,
                'bg-danger': this.contador >= 20,
            }
        }
    }
})