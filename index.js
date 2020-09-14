var app = new Vue({
    el: '.app',
    data: {
        message: 'Bienvenido Vue',
        frutas: [
            { nombre: 'Pera', cantidad: 5 },
            { nombre: 'Manzana', cantidad: 2 },
            { nombre: 'Durazno', cantidad: 0 }
        ],
        nuevaFruta: ''
    },
    methods: {
        agregarFruta(){
            // console.log('Click')
            this.frutas.push({
                 nombre: this.nuevaFruta, cantidad: 0
            })
        }
    }
})