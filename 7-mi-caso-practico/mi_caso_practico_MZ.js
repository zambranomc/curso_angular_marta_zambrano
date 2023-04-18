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
      
    }

}

class ServiciosTareas{

    constructor (){
        this.listaTareas = [];
    }

    addNuevaTarea(nuevaTarea){
        let maxId = 0;
        for (const actividadActual of this.listaTareas) {
            if (actividadActual.id > maxId)
                maxId = actividadActual.id;
        }
        console.log(`Valor id máximo: ${maxId}`);

        maxId++;
        nuevaTarea.id = maxId;
        this.listaTareas.push(nuevaTarea);
        return nuevaTarea;
    }


}

let nuevaTarea1 = new ServiciosTareas();
let reunionTrabajo = new Tarea (
    undefined,
    "Reunión JavaScript",
    "Ver caso práctico",
    "En progreso",
    "Media",
    new Date("2023-04-18")
    );

let running = new Tarea(
    undefined,
    "Entrenamiento carrera",
    "Correr 2 KM",
    "Pendiente",
    "Normal",
    new Date("2023-04-15")
    );

    let paseo = new Tarea(
        undefined,
        "Paseo a chorrera",
        "Caminar 2 KM",
        "Pendiente",
        "Normal",
        new Date("2023-04-17")
        );

    reunionTrabajo = nuevaTarea1.addNuevaTarea(reunionTrabajo);
    console.log(reunionTrabajo.id);

    running = nuevaTarea1.addNuevaTarea(running);
    console.log(running.id);

    paseo = nuevaTarea1.addNuevaTarea(paseo);
    console.log(paseo.id);
