// Objeto não e json

const prod1 = {};
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40 ; // Evitar atributos com espaço

console.log(prod1);

const prod2 = {
    nome: ' Camisa Polo',
    prco: 79.90
    
}

console.log(prod2);

//exemplo json, json e texto

'{"nome": "Camisa", "preco": 79.90}'