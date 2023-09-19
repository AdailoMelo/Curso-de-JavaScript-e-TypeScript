function main(){
    let res = document.getElementById("res");
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    peso = Number(peso);
    altura = Number(altura);
    let imc = peso / altura ** 2;

    if (peso <= 0 || altura <=0) {
        res.innerHTML = `<p class="invalido">Peso inválido</p>`
    } else {
        if (imc < 17) {
            res.innerHTML = `<p class="valido">Seu IMC é de: ${imc.toFixed(2)}, você está abaixo do peso</p>`;
        } else if (imc < 25) {
            res.innerHTML = `<p class="valido">Seu IMC é de: ${imc.toFixed(2)}, Seu peso está normal</p>`;
        } else if (imc < 30) {
            res.innerHTML = `<p class="valido">Seu IMC é de: ${imc.toFixed(2)}, Você está com sobrepeso</p>`;
        } else if (imc < 35) {
            res.innerHTML = `<p class="valido">Seu IMC é de: ${imc.toFixed(2)}, Você tem obesidade de grau I</p>`;
        } else if (imc <= 40) {
            res.innerHTML = `<p class="valido">Seu IMC é de: ${imc.toFixed(2)}, Você tem obesidade de grau II</p>`;
        } else {
            res.innerHTML = `<p class="valido">Seu IMC é de: ${imc.toFixed(2)}, Você tem obesidade de grau III</p>`;
        }
    }
}
