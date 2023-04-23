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

        activity.id = this.#generateNextId2();//llama al metodo que genera el id
        this.activities.push(activity);
        return activity;
    }

     /**
     * Primero calcula cuál es el id (int) más alto de todos los ids pertenecientes 
     * a los objetos actividad del array activities. 
     * Una vez que obtiene el id máximo en la variable maxId entonces lo incrementa porque esa será el siguiente nuevo id
     * 
     * Utiliza map y Math.max
     * @returns 
     */
     #generateNextId2() {

        if (this.activities.length === 0)
            return 1;

        // utilizar el método map() para obtener un array de ids. Utilizamos map para extraer el id de cada activity
        let ids = this.activities.map( activity => activity.id );

        // Obtener el id máximo utilizando Math.max()
        let maxId = Math.max(...ids); // se utiliza el operador ... para desglosar el array en elementos
        return ++maxId;

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

//Cargar los objetos creados
activityDatabase.addActivity(reunionTrabajo); // id 1
activityDatabase.addActivity(running); // id 2

console.log(`El identificador único para la actividad  ${reunionTrabajo.title} es: ${reunionTrabajo.id}`);
console.log(`El identificador único para la actividad  ${running.title} es: ${running.id}`);
