const pessoas = [
    { nome: 'Adailo', idade: 20 },
    { nome: 'Alberto', idade: 20 },
    { nome: 'Cauã', idade: 20 },
    { nome: 'João',idade: 22 },
    { nome: 'Gustavo', idade: 17 }
];

const nomePessoas = pessoas.map(valor => {
    return `${valor.nome} -> map()`;
});
console.log(nomePessoas);

const idadePessoas = pessoas.map(valor => {
    return `${valor.idade} anos`;
});
console.log(idadePessoas);

const idadeCao = pessoas.map(pessoas => {
    return { Nome: pessoas.nome, Idade: (pessoas.idade / 7).toFixed(2)};
});
console.log(idadeCao);

const pessoaComId = pessoas.map((valor, indice) => {
    return { Id: indice, Nome: valor.nome, Idade: valor.idade };
});
console.log(pessoaComId);