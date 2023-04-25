function isValidUsername(username) {

    const MAX_STRING_LENGTH = 10;
    const MIN_STRING_LENGTH = 5;

    if (username.length > MIN_STRING_LENGTH && username.length < MAX_STRING_LENGTH){
        console.log("es usuario valido");
    }else{
        console.log("es usuario no es valido");
    }
}

let validUser = isValidUsername("marta6");

if (isValidUsername("jemplousuario")) {
    console.log("es usuario valido");
}