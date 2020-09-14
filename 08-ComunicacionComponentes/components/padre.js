Vue.component('padre', {
    template: `
    <div class="bg-dark text-white">
        <h1>Componente Padre  {{numeroPadre}}</h1>
        <button class="btn btn-info" @click="numeroPadre++">+</button>
        <hijo :numero="numeroPadre"></hijo>
    </div>
    `,
    data(){
        return {
        numeroPadre: 0
        }
    }
})