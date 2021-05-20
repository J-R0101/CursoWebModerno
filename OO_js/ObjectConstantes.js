// pessoa -> 123 -> {...}
const pessoa = {nome: 'João'};
pessoa.nome = 'Pedro';
console.log(pessoa);

// pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'}; gera erro

Object.freeze(pessoa); // Congela o objecto transforma o objecto em constante

pessoa.nome = 'Maria';
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({nome: 'João'});

console.log(pessoaConstante);
