const pessoas = [
    { Nome:'Adailo', Idade: 20 },
    { Nome:'Alberto', Idade: 20 },
    { Nome:'Cauã', Idade: 20 },
    { Nome:'Gustavo', Idade: 17 },
    { Nome:'Maria', Idade: 51 },
    { Nome:'Luzimar', Idade: 56 },
    { Nome:'Brenda', Idade: 25 },
    { Nome:'Aurora', Idade: 9 },
    { Nome:'João', Idade: 6 },
    { Nome:'Ruan', Idade: 17 }
];

function mostraEnfeitado(mensagem){
    console.log("===========================");
    console.log(mensagem);
    console.log("===========================");
}

function mostraNome(pessoas){
    for (pessoa of pessoas){
        console.log(pessoa.Nome);
    }
}

const maiorIdade = pessoas.filter(pessoa => pessoa.Idade >= 18);
mostraEnfeitado('Os maiores de idade são:');
mostraNome(maiorIdade);

const menorIdade = pessoas.filter(pessoa => pessoa.Idade < 18);
mostraEnfeitado('Os menores de idade são:');
mostraNome(menorIdade);

const maisDeCinquenta = pessoas.filter(pessoa => pessoa.Idade > 50);
mostraEnfeitado('Tem mais de 50 anos:');
mostraNome(maisDeCinquenta);

mostraEnfeitado(`Nome de todas as ${pessoas.length} pessoas presentes na lista:`);
mostraNome(pessoas);