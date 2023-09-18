let res = document.getElementById("res"); //Config DOM

let num = Number(prompt("Digite um número"));

res.innerHTML = `
    <h1>Seu número é: ${num}</h1>
    <p>Raiz quadrada: ${Math.sqrt(num)}</p> 
    <p>Número é inteiro: ${Number.isInteger(num)}</p>
    <p>É NaN: ${isNaN(num)}</p>
    <p>Arredondando para baixo: ${Math.floor(num)}</p>
    <p>Arredondando para cima: ${Math.ceil(num)}</p>
    <p>Com duas casas decimais: ${num.toFixed(2)}</p>
`;