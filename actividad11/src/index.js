//FUNCIONES DE DECLARACION 
// punto A
function saludar() {
    console.log("¡Hola, Bienvenido!")
}
saludar()

// punto B
function saludarPersona(nombre) {
    console.log(`¡Hola ${nombre}, Bienvenido!`);
}
saludarPersona("Andrés")

// punto C
function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}
let resultadoEdad = esMayorDeEdad(22);
console.log(resultadoEdad)

//FUNCIONES DE FLECHA
// punto A
const esMayorDeEdadFlecha = (edad) => {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
};
let resultadoEdadFlecha = esMayorDeEdadFlecha(16);
console.log(resultadoEdadFlecha)

// punto B
const compararNumeros = (num1, num2) => {
    if (num1 < num2) {
        console.log(`El número ${num1} es menor que ${num2}`)
    } else if (num1 === num2) {
        console.log(`El número ${num1} es igual que ${num2}`)
    }
    else {
        console.log(`El número ${num1} es mayor que ${num2}`)
    }
};
for (let i = 1; i <= 10; i++) {
    compararNumeros(i, 5);
}

//FUNCIONES CALLBACK
// punto A y punto B
const operacion = (num1, num2, callback) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
        callback (num1, num2);
    } else {
       console.log("Debe ingresar solo números");
    }
};

function suma(a, b) {
    console.log(`El resultado de la suma es ${a + b}`)
}

function resta(a, b) {
    console.log(`El resultado de la resta es ${a - b}`)
}
operacion(10, 5, suma)
operacion(10, 5, resta)
// control de error para el punto B
operacion("Hola", 5, suma)


