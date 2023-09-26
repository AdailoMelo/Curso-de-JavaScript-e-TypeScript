function criaCalculadora(){
    return {
        display: document.querySelector('.display'),

        get inicia(){
            this.cliqueBtn();
            this.pressionaBackspace();
            this.pressionaEnter();
        },

        cliqueBtn(){
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-limpar')){
                    this.limpaDisplay();
                }

                if (el.classList.contains('btn-apagar')){
                    this.apagaUm();
                }

                if (el.classList.contains('btn-igual')){
                    this.fazConta();
                }

                this.display.focus();
            });
        },

        pressionaBackspace(){
            document.addEventListener('keydown', e => {
                if (e.keyCode === 8){
                    e.preventDefault();
                    this.apagaUm();
                }
            });
        },

        pressionaEnter(){
            document.addEventListener('keyup', e => {
                if (e.keyCode === 13){
                    this.fazConta();
                }
            });
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },

        limpaDisplay(){
            this.display.value = '';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },

        fazConta(){
            let conta = this.display.value;

            try {
               conta = eval(conta);
               
               if (!conta){
                alert('Conta inválida');
                return;
               }

               this.display.value = String(conta);
            } catch(e){
                alert('Conta inválida');
                return
            }
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia;