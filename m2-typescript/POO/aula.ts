//Constructor con atributos privados

class Aula {
    constructor (private id: number,
                private capacidad: number,
                private ventilacion: boolean
        ){ }
    
//Metodos para accesar a los atributos
        getCapacidad(){
            return this.capacidad;
        }

        setCapacidad(capacidad: number){
            this.capacidad = capacidad >= 0 && capacidad <= 90 ? capacidad: this.capacidad;
        }

        

}

//Crear objetos

const aulaCursoAngular = new Aula(1, 25, true);
const aulaSalaReuniones = new Aula(2, 3, false);
const aulaAnalisisDatos = new Aula(3, 20, true);

//console.log(aulaCursoAngular.id); da erro porque la propiedad id es privada y solo es accesible de class Aula

console.log(aulaCursoAngular);

aulaCursoAngular.setCapacidad(35);
console.log(aulaCursoAngular.getCapacidad());

aulaCursoAngular.setCapacidad(37);
console.log(aulaCursoAngular.getCapacidad());


aulaCursoAngular.setCapacidad(80);
console.log(aulaCursoAngular.getCapacidad());