const nome = 'Rebeca';
const concatenacao = 'Ola ' + nome + '!';
const template =`Olá
${nome}!`;// sinal de crase ou backtip 
console.log(concatenacao, template);

//expressoes

console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase(); // => arrow function

console.log(`Ei... ${up('cuidado')}!`);