//Função sem retorno

function  imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma(2, 10, 4, 5, 6, 7, 8);
imprimirSoma();


//Função com retorno

function Soma(a, b = 1) {
     return a + b
}

console.log(Soma(4, 5));
console.log(Soma(4));
console.log(Soma());
