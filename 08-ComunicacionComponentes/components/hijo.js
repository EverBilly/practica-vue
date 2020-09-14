Vue.component('hijo', {
    template:`
    <div class="bg-success text-white">
        <h1>Soy Hijo {{numero}}</h1>
    </div>
    `,
    props:  ['numero']
})
var app = new Vue({
    el: '#app'
})