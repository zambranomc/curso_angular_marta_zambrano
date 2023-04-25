/**Crear una clase que represente una Tarea que tenga las siguientes propiedades:
• id
• titulo
• descripcion
• estado
• prioridad
• fecha de entrega (es un Date)
*/ 
class Activity {

    constructor(id, title, content, status, importance, date) { 
        this.id = id;
        this.title = title;
        this.content = content;
        this.status = status;
        this.importance = importance;
        this.date = date;
    }
}


/*Crear  una  clase  que  represente  un  servicio  de  tareas  que  tenga  como  atributo  una  estructura  de
datos de tareas y métodos para gestionar las tareas:
• Añadir una nueva tarea
• Devolver todas las tareas ver  (file all)
• Devolver todas las tareas filtrando por estado
• Devolver todas las tareas filtrando por prioridad
  Actualizar una tarea
• Eliminar una tarea
 
 */

class ActivityDatabase {

    constructor() {
        this.activities = [];
    }

    addActivity(activity) {
    
        /*
        Para simular una base de datos, generamos un id (1, 2, 3, ...) único para cada Activity
        con un bucle for o con la clase Math calcular el id más alto de todos los ids 
        */
        let maxId = 0;
        for (const currentActivity of this.activities) {
            if (currentActivity.id > maxId)
                maxId = currentActivity.id;
        }
        console.log(`Valor id máximo: ${maxId}`);

        maxId++;
        activity.id = maxId;
        this.activities.push(activity);
        return activity;
    }

  
    //Devolver todos los elementos con metodo findAll
    findAll(){
        return this.activities;
    }

    //Filtrar una actividad
    filterById(id) {  // filtrar por ID filterById(1)
        return this.activities.filter(activity => activity.id === id);
    }


     //Metodo 2 filtrar por atributo id , comparación estricta, puede devolver un array de objetos
     //cada id es unico en la base de datos
     filterById(id) {
        
        return this.activities.filter(activity => activity.id === id);
     }

     //Devuelve estructura de datos tareas, devuelve una estructura de datos filterByStatus ("en progreso")
     filterByStatus (status){
        return this.activities.filter(activity => activity.status === status);
     }

     //Filtro para extraer un título o cadena de texto de la lista fiterByTitle ("Reunion")
     filterByTitle(title) {
        return this.activities.filter(activity => activity.title.includes(title));
     }

     //Borrar un elemento
     deleteById(){
        let activityIndex = this.activities.findIndex(activity => activity.id === id);
        this.activities.splice(activityIndex,1);
     }

}
 //Crear objetos y probar métodos CRUD
 let activityDatabase = new ActivityDatabase();
 let reunionTrabajo = new Activity(
     undefined, 
     "Reunión JavaScript", 
     "tratar caso práctico", 
     "En progreso",
     "Media",
     new Date("2023-04-18")
     );
 let running = new Activity(
     undefined,
     "Entrenamiento cardiovascular",
     "Correr 5 KM", 
     "Terminado",
     "Normal",
     new Date("2023-04-15")
 );
 activityDatabase.addActivity(reunionTrabajo); // id 1
 activityDatabase.addActivity(running); // id 2


//activityDatabase.update(reunionTrabajo);

//Probar Filtros
let activity1 = activityDatabase.filterById(1);
let activity2 = activityDatabase.filterById(2);
let activitiesByStatus = activityDatabase.filterByStatus("Pendiente");
let activitiesByTitle =  activityDatabase.filterByTitle("Entrenamiento");
//Borrar un indice
activityDatabase.deleteById(2);

//update


    