var app = new Vue({
    el: '.app',
    data: {
        message: 'Bienvenido Vue',
        frutas: [
            { nombre: 'Pera', cantidad: 5 },
            { nombre: 'Manzana', cantidad: 2 },
            { nombre: 'Durazno', cantidad: 0 }
        ],
        nuevaFruta: '',
        total: 0
    },
    methods: {
        agregarFruta(){
            // console.log('Click')
            this.frutas.push({
                 nombre: this.nuevaFruta,
                 cantidad: this.cantidad
            })
            this.nuevaFruta = ''
        }
    },
    computed: {
        sumarFrutas(){
            this.total = 0;
            for(fruta of this.frutas){
                this.total = this.total + fruta.cantidad
            }
            return this.total
        }
    }
})