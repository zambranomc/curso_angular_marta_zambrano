class Circulo{

        constructor(radio){
            this.radio = radio;
        }

        //Getter para calculo del área
        get area(){
            return Math.PI* this.radio**2;
        }

        //Getter para calculo del perimetro
        get perimetro(){
            return 2* Math.PI * this.radio;
        }

        //Setter para modificar el radio
        

}
  //Crear objeto

  const circulo1 = new Circulo(5);
  console.log(`El área del círculo de radio 5 es ${circulo1.area} y su perímetro es:  ${circulo1.perimetro}`);


