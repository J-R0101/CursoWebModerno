// Armazenando uma função em uma variavel

const imprimirSoma = function (a, b) {
    console.log( a + b);
};

imprimirSoma(3, 4);

//Armazenando uma função arrow em uma variavel

const soma = (a, b) => {
    return a + b;
};

console.log(soma(6, 4));

// Retorno implicito

const subtracao = (a, b) => a - b;
console.log(subtracao(3, 6));