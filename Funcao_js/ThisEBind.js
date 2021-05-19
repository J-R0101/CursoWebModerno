const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao);
    }
};

pessoa.falar();

const falar = pessoa.falar;

falar();// Conflito de paradigna: funcional e OO

const falaDePessoa = pessoa.falar.bind(pessoa);

falaDePessoa();