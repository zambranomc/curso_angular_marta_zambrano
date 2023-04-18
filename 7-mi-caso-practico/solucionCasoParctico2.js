class Tarea {
    constructor (id, titulo, descripcion, estado, prioridad, fechaEntrega){
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = estado;
        this.prioridad = prioridad;
        this.fechaEntrega = fechaEntrega;
      
    }
}

class ServiciosTareas{
    constructor (){
        this.listaTareas=[];
    }



}




// Generar ID
#generateNextId(){
    if (this.listaTareas.length === 0)
    return 1;
    //Utilizar metodo map para obtener un arrays de id
    let ids = this.activities.map( activity => activity.id);
    console.log(ids);
    //Obtener el máximo id con Math.max
    let maxId = Math.max(...ids);
    maxId++;
    return maxId;
}


// let ids = [1,2,3,4,8];
// let maxNumber = Math.max(...ids);
//console.log(maxNumber);