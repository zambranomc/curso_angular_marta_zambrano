/*Crear una clase que represente una Tarea que tenga las siguientes propiedades:
• id
• titulo
• descripcion
• estado
• prioridad
• fecha de entrega (es un Date)
 */

class Tarea {
    constructor (id, titulo, descripcion, estado, prioridad, fechaEntrega){
        this.id = id; // utilico el id para vincularlo con el array listaTareas
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = estado;
        this.prioridad = prioridad;
        this.fechaEntrega = fechaEntrega;
    }

}
/*Crear  una  clase  que  represente  un  servicio  de  tareas  que  tenga  como  atributo  una  estructura  de
datos de tareas y métodos para gestionar las tareas:
• Añadir una nueva tarea
• Devolver todas las tareas
• Devolver todas las tareas filtrando por estado
• Devolver todas las tareas filtrando por prioridad 1
• Actualizar una tarea
• Eliminar una tarea
 */

class ServiciosTareas{
    //Crear el Array para almacenar los identificares de tareas id
    constructor (){
        this.listaTareas = [];
    }
    //Metodo para añadir tareas al Array listaTareas que llama al metodo crearNuevoId
    addNuevaTarea(nuevaTarea){
        nuevaTarea.id = this.#crearNuevoId();
        this.listaTareas.push(nuevaTarea);
        return nuevaTarea;
    }
    //Metodo para crear un identeficador único para cada tarea añadida
    #crearNuevoId(){
        let maxId = 0;
        for (const actividadActual of this.listaTareas) {
            if (actividadActual.id > maxId)
                maxId = actividadActual.id;
        }
        return  ++maxId;
        console.log(`Valor id máximo: ${maxId}`);
        
    }

    //Método devolver todas las tareas creadas 
    findAll(){
        this.listaTareas.forEach(tarea => {
            console.log(tarea);
        });
    }
    
    //Devolver tareas filtradas por estado de la tarea 
    filtrarPorEstado(estado){
        return this.listaTareas.filter(nuevaTarea => nuevaTarea.estado === estado);
    }

    //Devolver las tareas filtardas por prioridad
    filtrarPorPrioridad(prioridad){
        return this.listaTareas.filter(nuevaTarea => nuevaTarea.prioridad === prioridad);
    }

    //Devolver las tareas filtardas por id
    filtrarPorId(id){
        return this.listaTareas.filter(nuevaTarea => nuevaTarea.id === id);
    }

    //Actualizar Tareas ya creadas
    actualizarTarea(nuevaTarea){
        let tareaIndice = this.listaTareas.findIndex(actividadActual => actividadActual.id === nuevaTarea.id);
        if(tareaIndice === -1)
           return undefined;

        this.listaTareas[tareaIndice].titulo = nuevaTarea.titulo;
        this.listaTareas[tareaIndice].descripcion = nuevaTarea.descripcion;
        this.listaTareas[tareaIndice].estado = nuevaTarea.estado;
        this.listaTareas[tareaIndice].prioridad = nuevaTarea.prioridad;
        this.listaTareas[tareaIndice].fechaEntrega = nuevaTarea.fechaEntrega;
        return nuevaTarea;
    }

    //Eliminar Tareas ya creadas con método splice para array, que especifica el id que debe eliminar
    borrarId(id){
        let tareaIndice = this.listaTareas.findIndex(actividadActual => actividadActual.id === id);
        if(tareaIndice === -1)
           return undefined;
        this.listaTareas.splice(tareaIndice,1);
    }


    // Metodo length de array, para determinar la cantidad de tareas existentes en el array

    contarTareas(){
        return this.listaTareas.length;
    }

    //Metodo para vaciar el array 
    vaciarlistaTareas(){
        this.listaTareas = [];
    }

}

/*Una  vez  creadas  las  dos  clases,  crear  una  instancia  del  servicio  de  tareas  y  ejecutar  todos  los
métodos que tiene para probar que todo funciona correctamente.
El resultado es que el servicio de tareas debe tener una estructura de datos con todas las tareas que
se han ido añadiendo, modificando, eliminando, etc.
 */
//Crear nuevo objeto tipo array en clase ServiciosTareas
let nuevaTarea1 = new ServiciosTareas();
//Crear nuevos objetos en clase Tarea con Id indefinido el cual es asignado 
//por metodo #crearNuevoId  de la clase ServiciosTarea
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

//Agrego la Tarea > reunionTrabajo al array listaTareas, llamando al el metodo creado addNuevaTarea en
//Clase ServicioTareas, el cual utiliza el método #crearNuevoId para dar el id único
reunionTrabajo = nuevaTarea1.addNuevaTarea(reunionTrabajo);
console.log(`El identificador único para la Tarea ${reunionTrabajo.titulo} es: ${reunionTrabajo.id}`);

running = nuevaTarea1.addNuevaTarea(running);
console.log(`El identificador único para la Tarea ${running.titulo} es: ${running.id}`);

paseo = nuevaTarea1.addNuevaTarea(paseo);
console.log(`El identificador único para la Tarea ${paseo.titulo} es: ${paseo.id}`);

//Ver todas las Tareas agregadas al array listaTareas con metodo findAll
console.log("Ver todas las Tareas agragadas al array listaTareas");
console.log(nuevaTarea1.findAll());

//Filtrar el Array listaTareas por el estado Pendiente con el metodo filtrarPorEstado
console.log("Filtrar las Tareas agragadas al array por estado Pendiente");
console.log(nuevaTarea1.filtrarPorEstado("Pendiente"));

//Filtrar el Array listaTareas por el prioridad Media con el metodo filtrarPorPrioridad
console.log("Filtrar las Tareas agragadas al array por prioridad Media");
console.log(nuevaTarea1.filtrarPorPrioridad("Media"));

//Filtrar el Array listaTareas por el id con el metodo filtrarPorId
console.log("Filtrar las Tareas agragadas al array por id 1");
console.log(nuevaTarea1.filtrarPorId(1));

//Actualizar en el Array datos de una Tarea ya creada con id = 3 y metodo actualizarTarea
console.log("Actualizar en el Array datos de una Tarea ya creada con id = 3");
let paseoModificado = new Tarea(3,"Paseo Modificado", undefined, "Terminado", "Finalizado", undefined);
console.log("Ver datos modificados de id = 3 en el nuevo objeto");
console.log(paseoModificado);
console.log("Objeto original id = 3 antes de modificar");
console.log(paseo);
nuevaTarea1.actualizarTarea(paseoModificado);
console.log("Objeto  id = 3 despues de modificar");
console.log(nuevaTarea1.filtrarPorId(3));

//Borrar un objeto de un array con un id determinado y método splice
//Primero contamos la cantidad de elementos que contiene el array con el metodo creado contarTarea
console.log("Cantidad de elementos en el array antes de eliminar el id = 3");
console.log(nuevaTarea1.contarTareas()); // 3 elementos
// Eliminar el elemento con id = 3 del array con el método borrarId y splice
nuevaTarea1.borrarId(3);
//Contar nuevamente los elementos del array para ver que se ha borrado el elemento id=3
console.log("Cantidad de elementos en el array DESPUES de eliminar el id = 3");
console.log(nuevaTarea1.contarTareas()); //2 elementos

//Vaciar el array con metod vaciarlistaTareas
nuevaTarea1.vaciarlistaTareas();
//Comprobar que ya no hay elementos en el array con metodo contarTareas
console.log("Cantidad de elementos en el array DESPUES de vaciar los 2 elementos ");
console.log(nuevaTarea1.contarTareas()); //0 elementos

