const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const somaPar = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0) acumulador += valor;
    return acumulador;
}, 0);
console.log(`A soma de todos os pares é: ${somaPar}`);

const somaImpar = numeros.reduce((acumulador, valor) => {
    if (valor % 2 !== 0) acumulador += valor;
    return acumulador;
}, 0);
console.log(`A soma de todos os ímpares é: ${somaImpar}`);

const total = numeros.reduce((acumulador, valor) => {
    acumulador += valor;
    return acumulador;
});
console.log(`A soma de todos os números é: ${total}`);