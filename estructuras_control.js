// Estructura de control if
let num = 10;
if (num > 5) {
    console.log(num + " es mayor que 5");
} else if (num === 5) {
    console.log(num + " es igual a 5");
} else if (num === 20) {
    console.log(num + " es igual a 20");
} else {
    console.log(num + " es menor o igual que 5");
}

// Estructura de control for
for (let i = 0; i < 5; i++) {
    console.log("Iteración número " + i);
}

// Estructura de control while
let i = 0;
while (i < 5) {
    console.log("Iteración número " + i);
    i++;
}

// Estructura de control do while
let j = 0;
do {
    console.log("Iteración número " + j);
    j++;
} while (j < 5);



// Estructura de control switch
let color = "azul";
switch (color) {
    case "rojo":
        console.log("El color es rojo");
        break;

    case "amarillo":
    case "azul":
    case "verde":
        console.log("El color es verde o azul o amarillo");
        break;

    default:
        console.log("El color no es ni rojo ni verde");
        break;
}