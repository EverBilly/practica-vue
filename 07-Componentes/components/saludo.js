Vue.component('saludo', {
    //Estoy llamando al saludo del data(){}
    template:
    `
    <div>
        <h3>{{saludo}}</h3>
        <h2>Segundo: {{saludo}}</h2>
    </div>    
    `,
    data(){
        return {
            saludo: 'Saludo desde Funcion'
        }
    } 
})

const app = new Vue({
    el: '#app',
    data: {
        saludo: 'Componentes Basicos'
    },
    methods: {

    }
})
