// #Abres
// console.group("nombre que desees");
// #Cierras
// console.groupEnd();

//Código cuadrado

/* Cuando dentro de las funciones recibimos - le llamamos parametros */

/* Cuando llamamos a una función lo que enviamos se llaman argumentos */

function perimetroCuadrado(lado) {
    return lado * 4;
}

perimetroCuadrado()

function areaCuadrado(lado) {
    return lado * lado;
}

areaCuadrado()

//Código triangulo

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// Código Circulo

function diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}