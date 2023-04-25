// La interface tambien me permite crear "MODELOS DE DATOS"
//Los modelos de datos solo tienen atributos para /leer / traer/consumir datos de un API REST
//o una URL. lugo podemos declarar esos atributos y objetos a partir de la interface
//Los metodos y comportamiento se puede definir en otra clase

//IBook : modelo de datos (interface)
//BookService: servicio de logica del negocio ( metodos y comportamientos) sobre objetos libros
//Modelo Vista Controlador - MVC

interface IBook {
    id: number;
    title: string;
    author: string;
    year: number;
    editorial: string;
    numPages: number;

}

//Crear OBJETOS a partir de la interface

let book1 : IBook ={
    id:1,
    title: "Book 1",
    author: "Autor 1",
    year: 2023,
    editorial: "Planeta",
    numPages: 345
}

let book2 : IBook ={
    id:1,
    title: "Book 2",
    author: "Autor 2",
    year: 2023,
    editorial: "Planeta",
    numPages: 200
}

console.log(book1);