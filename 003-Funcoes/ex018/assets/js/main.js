function Calculadora(){
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.pegaCliques();
        this.pegaBotao();
    };

    this.pegaCliques = () => {
        document.addEventListener('click', event => {
            if (event.target.classList.value === 'btn-num'){
                this.addDisplay(event.target.innerText);
            }

            if (event.target.classList.value === 'btn-limpar'){
                this.limpaDisplay();
            }

            if (event.target.classList.value === 'btn-apagar'){
                this.apagaUm();
            }

            if (event.target.classList.value === 'btn-igual'){
                this.fazConta();
            }

            this.display.focus();
        });
    };

    this.pegaBotao = () => {
        document.addEventListener('keypress', event => {
            if (event.keyCode === 13){
                this.fazConta();
            }

            if (event.keyCode === 8){
                this.apagaUm();
            }
        });

        document.addEventListener('keyup', e => {
            if (event.keyCode === 27){
                this.limpaDisplay();
            }
        });
    };

    this.addDisplay = (valor) => {
        this.display.value += valor; 
    };

    this.limpaDisplay = () => {
        this.display.value = '';
    };

    this.apagaUm = () => {
        this.display.value = this.display.value.slice(0, -1);
    };  

    this.fazConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);
            
            if (!conta){
                alert('Conta inválida');
                this.limpaDisplay();
                return
            }

            this.display.value = String(conta);

        } catch(e){
            alert('Conta inválida');
            this.limpaDisplay();
            return;
        }
    };

}

const calculadora = new Calculadora();
calculadora.inicia();