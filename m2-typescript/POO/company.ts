//Ejemplo de uso de Modificador de acceso Public
//Cuando tenemos modificadores de acceso como el Public o Private, en los atributos
//podemos hacer la asignacion de los atributos directo en el constructor

class Company {
    //Constructor
    constructor(public id: number, 
                public cif: string, 
                public legalName: string, 
                public income: number, 
                public outcome: number){ }


    //Metodos
    getFullName(): string {
        return`${this.cif} ${this.legalName}`;
    }

    getNetIconme(): number{
        return this.income - this.outcome;
    }
}

//Crear Objeto
const company1 = new Company(1,'b12345', 'DESARROLLOS AB SL', 50000, 20000);
console.log(company1.getFullName()); //Objeto con metodo
console.log(company1.getNetIconme());

//Como los atributos son Public se pueden acceder directamente, 
//lo ideal es hacer un metodo set y acceder por el metodo para que no se puedan modificar
console.log(company1.outcome);//Objeto con atributo
company1.legalName = "otra empresa";
console.log(company1.legalName)
