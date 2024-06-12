
let nombre = "Tony";


function renombrar(variableNombre) {
    variableNombre = "Peter";
}

function renombrar2() {
    return "Peter";
}

console.log(nombre);
// renombrar(nombre);
nombre = renombrar2();
console.log(nombre);



