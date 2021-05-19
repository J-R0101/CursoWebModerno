function compras(trabalho1, trabalho2) {
    
    const compraSorvete = trabalho1 || trabalho2; // tipo ou
    const comprarTv50 = trabalho1 && trabalho2; // tipo é
    //const comprarTv32 = !!(trabalho1 ^ trabalho2); bitwise xor
    const comprarTv32 = trabalho1 != trabalho2; // tipo ou exclusivo
    const manterSaudavel = !compraSorvete; // operador unario

    return {compraSorvete, comprarTv50, comprarTv32, manterSaudavel};

}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));


