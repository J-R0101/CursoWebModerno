const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3)); // valor na tabela ask/unicode da silaba de indice 3
console.log(escola.indexOf('3'));//valor assosiado ao indice 3

console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log('Escola ' .concat(escola).concat("!"));
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e'));
console.log(escola.replace(/\d/, 'e'));

console.log('Ana,Maria,Pedro'.split(','));
console.log('Ana,Maria,Pedro'.split(/,/));



