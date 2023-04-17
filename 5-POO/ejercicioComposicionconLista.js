//Clase usuario
class User {

    constructor( primerNombre, email){

        this.primerNombre = primerNombre;
        this.email = email;
    }

}

let user1 = new User("usuario1", "usuario1@gmail.com");
let user2 = new User("usuario2", "usuario2@gmail.com");
let user3 = new User("usuario3", "usuario3@gmail.com");

class Evento {
    constructor (titulo, date, adminUser) {
        this.titulo = titulo;
        this. date = date;
        this. adminUser = adminUser;// Objeto de la clase User
        //Lista usuarios invitados
        this.users = [];
    }

    //Metodo añadir invitado

    addUser (usuario) {
        this.users.push(usuario);
    }

}



let date1 = new Date();
let evento1 = new Evento ("Clase de Java Script ", date1, user1);



console.log(evento1);
console.log(evento1.users.length);

//Añadir mas usuarios
evento1.addUser(user2);
evento1.addUser(user3);


console.log(`La reunion ${evento1.titulo} fue organizada por  ${evento1.adminUser.primerNombre}`);
console.log(`Hay un total de ${evento1.users.length} usuarios invitados`);