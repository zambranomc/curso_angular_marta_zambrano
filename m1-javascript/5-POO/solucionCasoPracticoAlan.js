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

class ActivityDatabase {

    constructor() {
        this.activities = [];// Inicializar el array
    }

    /**
     * Añadir una nueva actividad en el array de actividades
     * Para cada actividad que se quiera añadir genera un nuevo id que este libre
     * Para simular una base de datos generamos un nuve  id (1, 2, ) unico para cada actividad
     * 
     */

    addActivity(activity) {

        activity.id = this.#generateNextId();//llama al metodo que genera el id
        this.activities.push(activity);
        return activity;
    }
    
        /*
        Para simular una base de datos, generamos un id (1, 2, 3, ...) único para cada Activity
        con un bucle for o con la clase Math calcular el id más alto de todos los ids 
        Calcula cual es el id mas alto de todos los id del array activities 
        El id maximo lo coloca en una variable

        */
       #generateNextId(){
        let maxId = 0;
        for (const currentActivity of this.activities) {
            if (currentActivity.id > maxId)
                maxId = currentActivity.id;
        }
        return ++maxId;// primero incrementa y luego hace el return
       }
       

    //Metodos
    //Devolver todos los elementos con metodo findAll
    //Equivales a Select * From activities where id = X
    findAll(){
        return this.activities;
    }




     //Metodo 2 filtrar por atributo id , comparación estricta, puede devolver un array de objetos
     //cada id es unico en la base de datos
     filterById(id) {
        
        return this.activities.filter(activity => activity.id === id);
     }

     //Devuelve estructura de datos tareas, devuelve una estructura de datos filterByStatus ("en progreso")
     //Devulve un array
     //status es un string que representa un estado de tarea
     filterByStatus (status){
        return this.activities.filter(activity => activity.status === status);
     }

     //Filtro para extraer un título o cadena de texto de la lista fiterByTitle ("Reunion")
     //No es coincidencia extricta o exacta, solo que contenga
     filterByTitle(title) {
        return this.activities.filter(activity => activity.title.includes(title));
     }

     //Update actualiazar un objeto Activity en el array de activities
     // activity es parametro de addActivity
     //activity.id 
     update(activity){
        let activityIndex = this.activities.findIndex(
            currentActivity => currentActivity.id === activity.id
        );
        //Si la actividad no existe
        if (activityIndex === -1)
            return undefined;

        this.activities[activityIndex].title = activity.title;
        this.activities[activityIndex].status = activity.status;
        return activity;
     }

     //Opcion 2 de update para hacer cambios sin generar una linea cada vez
     



     //Borrar un elemento u objeto del array activities
     deleteById(){
        let activityIndex = this.activities.findIndex(activity => activity.id === id);
        if (activityIndex === -1)
            return;
        this.activities.splice(activityIndex,1);
     }

     /**
      * Vacia el array de activities y lo deja en lenght =0
      */

     deleteAll(){
        this.activities = [];
     }

     //Devuelve el numero de  activities
     count(){
        return this.activities.length;
     }

}

//Crear objeto en base de datos y probar métodos CRUD
let activityDatabase = new ActivityDatabase();

//Crear objetos en Activity
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

let paseo = new Activity(
    undefined,
    "Encuentro familiar",
    "Viaje a BCN", 
    "Pendiente",
    "Normal",
    new Date("2023-04-20")
);

//Cargar los objetos creados
activityDatabase.addActivity(reunionTrabajo); // id 1
activityDatabase.addActivity(running); // id 2
activityDatabase.addActivity(paseo);// id 3

//Probar Filtro por Id de actividad = 1
console.log("Prueba filtro por id actividad 1 ");
let activity1 = activityDatabase.filterById(1);
console.log(activity1);

//Probar filtro por Id de actividad = 2
let activity2 = activityDatabase.filterById(2);
console.log(activity2);

//let filtrar por ID otra forma de escribir
console.log(activityDatabase.filterById(1));

//Probar filtro por status de la actividad
console.log("Prueba filtro status con Terminado y Pendiente ");
let activitiesByStatus = activityDatabase.filterByStatus("Pendiente");//imprime array vacio porque no existe el status
console.log(activityDatabase.filterByStatus("Terminado"));

//let activitiesByTitle =  activityDatabase.filterByTitle("Entrenamiento");

//Filtro para extraer un título o cadena de texto de la lista fiterByTitle ("Entrenamiento cardiovascular")
console.log("Prueba filtro de título para Entrenamiento ");
console.log(activityDatabase.filterByTitle("Entrenamiento cardiovascular"));

// Probar actualizar archivo con update
console.log("Prueba actualizar con Up date ");
let activity1Edited = new Activity(1, "modificado", undefined, "ver cambio", undefined, undefined);
console.log(activityDatabase.update(10));
console.log(activity1Edited);
console.log(activityDatabase.filterById(1));



// Probar borrar todo el array y comprobar que la longitud a quedado en 0
console.log("Prueba borrar todo el array y comprobar que la longitud a quedado en 0 ");
console.log(activityDatabase.count());// 3
//activityDatabase.deleteAll();

console.log("Prueba que borró array ");
console.log(activityDatabase.count()); // 0