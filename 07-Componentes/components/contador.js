Vue.component('contador', {
    template:
    `
    <div>
        <h3>{{numero}}</h3>
        <button btn btn-primary @click="numero++">+</button>
    </div>
    `,
    data(){
        return {
            numero: 0
        }
    }
})