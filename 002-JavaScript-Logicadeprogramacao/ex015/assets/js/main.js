document.addEventListener('click', function(e){
    const el = e.target;

    if (el.classList.contains('iniciar')) {
        relogio.classList.remove('red');
        pausaRelogio();
        iniciaRelogio();
    }

    if (el.classList.contains('pausar')) {
        relogio.classList.add('red');
        pausaRelogio();
    }

    if (el.classList.contains('zerar')) {
        relogio.classList.remove('red');
        zeraRelogio();
    }
});

let relogio = document.querySelector(".relogio");
let segundos = 0;
let timer;


function pegandoTempo(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = pegandoTempo(segundos);
    },1000);
}

function pausaRelogio(){
    clearInterval(timer);
}

function zeraRelogio(){
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = pegandoTempo(segundos);
}