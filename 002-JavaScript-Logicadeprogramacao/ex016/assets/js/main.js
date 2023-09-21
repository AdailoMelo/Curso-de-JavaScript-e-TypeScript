let inputTarefa = document.querySelector('.input-tarefa');
let btnTarefa = document.querySelector('.btn-tarefa');
let tarefas = document.querySelector('.tarefas');
let li;
let botaoApagar;

inputTarefa.addEventListener('keypress', function(event){
    if (event.keyCode === 13) {
        if (inputTarefa.value !== ""){
            criaTarefa();
        }
    }
});

btnTarefa.addEventListener('click', function(event){
    if (inputTarefa.value !== ""){
        criaTarefa();
    }
});

document.addEventListener('click', function(event) {
    const el = event.target;
  
    if (el.classList.contains('apagar')) {
      el.parentElement.remove();
    }
  });

  
function criaTarefa(){
    li = document.createElement('li');
    li.innerText = inputTarefa.value + ' ';
    tarefas.appendChild(li);

    inputTarefa.value = "";
    inputTarefa.focus();

    botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Remover';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);    
}