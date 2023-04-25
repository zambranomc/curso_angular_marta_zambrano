//Importar clase de archivo laptop model 
import { Laptop } from "./laptop.model";


//Crear objeto en archivo Main
const laptop1 = new Laptop(1, 8, 4, "Lenovo", "Thinkpad");


console.log(laptop1.getFullName());