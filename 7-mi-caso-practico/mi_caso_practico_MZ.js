/*Crear una clase que represente una Tarea que tenga las siguientes propiedades:
• id
• titulo
• descripcion
• estado
• prioridad
• fecha de entrega (es un Date)
Crear  una  clase  que  represente  un  servicio  de  tareas  que  tenga  como  atributo  una  estructura  de
datos de tareas y métodos para gestionar las tareas:
• Añadir una nueva tarea
• Devolver todas las tareas
• Devolver todas las tareas filtrando por estado
• Devolver todas las tareas filtrando por prioridad
1
• Actualizar una tarea
• Eliminar una tarea
Una  vez  creadas  las  dos  clases,  crear  una  instancia  del  servicio  de  tareas  y  ejecutar  todos  los
métodos que tiene para probar que todo funciona correctamente.
El resultado es que el servicio de tareas debe tener una estructura de datos con todas las tareas que
se han ido añadiendo, modificando, eliminando, etc.
 */

class Tarea {
    constructor (id, titulo, descripcion, estado, prioridad, fechaEntrega){
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = estado;
        this.prioridad = prioridad;
        this.fechaEntrega = fechaEntrega;
        this.listaTareas=[id, titulo, descripcion, estado, fechaEntrega];

    }

     //Añadir Tarea
     addTarea (tipoTarea) {
        this.listaTareas.push(tipoTarea);
    }
    //Imprimir tareas
    imprimirTarea (){
        console.log(`La tarea es ${this.listaTareas}`);
    }

    //Tareas filtardas por estado
    
}


let date1 = new Date();
let tarea1 = new Tarea(1, "estudiar", "repaso POO", "pendiente", "urgente", date1);

tarea1.addTarea ("trabajo");


console.log(tarea1.imprimirTarea());
