const elementos = [
	{ tag: "p", texto: "Frase 1" },
	{ tag: "div", texto: "Frase 2" },
	{ tag: "footer", texto: "Frase 3" },
	{ tag: "section", texto: "Frase 4" }
];

let containter = document.querySelector(".container");
let div = document.createElement("div");

for (let i = 0; i < elementos.length; i++){
    let { tag, texto } = elementos[i]; //Pega os valores do objeto e coloca nas variaveis tag e texto
    let tagCriada = document.createElement(tag); 
    tagCriada.innerText = texto;
    div.appendChild(tagCriada); //A div recebe tagCriada como child
}

containter.appendChild(div); //Tudo vira filho do container e é mostrado na tela