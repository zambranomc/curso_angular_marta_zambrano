//Clase Evento que tenga titulo, fecha, admin
//Clase evento con, titulo, fecha, admin, lista de invitados
// Aula con alumnos y ordenadores

//Clase usuario
class User {

    constructor( primerNombre, email ){

        this.primerNombre = primerNombre;
        this.email = email;
    }

}

let user1 = new User("usuario1", "usuario1@gmail.com");
let user2 = new User("usuario2", "usuario2@gmail.com");
let user3 = new User("usuario3", "usuario3@gmail.com");

//Clase Evento que tenga titulo, fecha, admin
class Evento {

    constructor (titulo, date, admin){
        this.titulo = titulo;
        this. date = date;
        this. admin = admin;// Objeto de la clase User
    }
}

    let evento1 = new Evento("Día del trabajador", new Date("2023-05-01"), user1);
   
    console.log(evento1.titulo);
    console.log(evento1.date);
    console.log(evento1.admin.primerNombre);
    console.log(evento1.admin.email);



