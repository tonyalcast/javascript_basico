// Funcion que recibe un parametro
function saludo(nombre) {
    console.log("Hola " + nombre);
}

// Funcion que no recibe parametros
function saludo2() {
    console.log("Hola mundo");
}

// Funcion que retorna un valor
function saludo3() {
    return "Hola mundo";
}

// Funcion que recibe dos parametros y retorna un valor
function suma(num1, num2) {
    return num1 + num2;
}

// Arrow functions
// Funcion que recibe un parametro
let saludo4 = nombre => console.log("Hola " + nombre);

// Funcion que no recibe parametros
let saludo5 = () => console.log("Hola mundo");

// Funcion que retorna un valor
let saludo6 = () => "Hola mundo";

// Funcion que recibe dos parametros y retorna un valor
let suma2 = (num1, num2) => num1 + num2;



// Diferencias entre arrow functions y funciones normales

// Funcion que recibe un parametro
function saludo41(nombre) {
    console.log("Hola " + nombre);
}

// Arrow function
let saludo42 = nombre => console.log("Hola " + nombre);


// Arrow function con return
let saludo44 = nombre => "Hola " + nombre;

function saludo45 (nombre) {
    return "Hola " + nombre;
}

let por2 = a => a * 2;
function por2(a) {
    return a * 2;
}

// Arrow function ANONIMA
a => a * 2;