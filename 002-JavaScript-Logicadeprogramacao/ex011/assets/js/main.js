const paragrafos = document.querySelectorAll(".paragrafos");
const ps = document.querySelectorAll("p");

const estilosBody = getComputedStyle(document.body);
const backgroundBody = estilosBody.backgroundColor;

for (let p of ps) {
    p.style.backgroundColor = backgroundBody;
    p.style.color = "#fff";
}