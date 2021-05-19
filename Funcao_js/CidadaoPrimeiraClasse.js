//Função em JS e First-Class Object{Citizens}
// Higher-order function

//Criar de forma literal

function fun1() {};

//Armazenar em uma variavel

const fun2 = function () {};

//Armazernar em um array

const array = [function (a, b) { return a + b; }, fun1, fun2 ];
console.log(array[0](2, 3));

const obj = {};

obj.falar = function () {
    return 'Opa';
};

console.log(obj.falar());

//Passar função como parametro

function run(fun) {
    fun()
};

run(function () {
    console.log('Executando...');
});

//Uma função pode retorna/conter uma função

function soma(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
    
};

soma(2,3)(4);
const cinco = soma(2, 3);
cinco(4);
