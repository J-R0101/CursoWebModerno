function teste1(num) {
    if(num > 7)
      console.log('teste1 = ' + num);

    console.log('Final teste1');
};

teste1(6);
teste1(8);

function teste2(num) {
    if(num > 7); { // cuidado com o ';', não usar com estruturas de controle
        console.log('teste2 = ' + num);
    }
};

teste2(6);
teste2(8);

function teste3(num) {
    if (num > 7) { 
        console.log('teste3 = ' +num);
    }
};

teste3(6);
teste3(8);