let res = document.getElementById("res"); //DOM

let nome = prompt("Digite seu nome completo");  
let nomeTamanho = nome.length; 
let nomeSegundaLetra = nome[1];
let tresUltimasLetras = nome.slice(nomeTamanho - 3, nomeTamanho);
let nomeMaiusculo = nome.toUpperCase();
let nomeMinusculo = nome.toLowerCase();
let primeiroIndiceA = nomeMaiusculo.indexOf("A");

res.innerHTML = `
    Seu nome é ${nome} <br>
    Seu nome tem ${nomeTamanho} letras <br>
    A segunda letra do seu nome é ${nomeSegundaLetra} <br>
    A letra A aparece primeiro no indice: ${primeiroIndiceA} <br>
    As três ultimas letras do seu nome são: ${tresUltimasLetras} <br>
    Seu nome em letras maiúsculas fica assim: ${nomeMaiusculo} <br>
    Seu nome em letras minúsculas fica assim: ${nomeMinusculo}
`