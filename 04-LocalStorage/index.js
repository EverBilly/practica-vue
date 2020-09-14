const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Tarea',
        tareas: [],
        nuevaTarea: ''
    },
    methods: {
        agregarTarea(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            })
            this.nuevaTarea = '',
            localStorage.setItem('tareas-vue', JSON.stringify(this.tareas))
        },
        editarTarea(index){
            this.tareas[index].estado = true
            localStorage.setItem('tareas-vue', JSON.stringify(this.tareas))
        },
        eliminarTarea(index){
            this.tareas.splice(index,1)
            localStorage.setItem('tareas-vue', JSON.stringify(this.tareas))
        }
    },
    created: function(){
        let datos = JSON.parse(localStorage.getItem('tareas-vue'))
        if(datos === null){
            this.tareas = []
        }else{
            this.tareas = datos
        }
    }
})