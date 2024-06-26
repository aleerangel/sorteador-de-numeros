document.getElementById('btn-reiniciar').disabled = true;
function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let sorteados = [];
    let numero;
    if (quantidade > 0 && de > 0 && ate > 0) {
        if (quantidade > ate) {
            alert ('Atenção! A quantidade é maior que o número limite. Por favor, revise os dados e os insira novamente!');
            return;
        }
        if (quantidade > (ate - de)) {
            alert ('Atenção! A quantidade é maior que o intervalo dos números. Por favor, revise os dados e os insira novamente');
            return;
        }
        for (let i = 0; i < quantidade; i++) {
            numero = obterNumeroAleatorio(de, ate);
            while (sorteados.includes(numero)) {
                numero = obterNumeroAleatorio(de, ate);
            }
            sorteados.push(numero);
        }
        let resultado = document.getElementById('resultado');
        if (quantidade == 1) { 
            resultado.innerHTML = `<label class="texto__paragrafo">Número sorteado:  ${sorteados}</label>`;
        } else {
            resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
        }
        alterarStatusBotaoReiniciar();
        alterarStatusBotaoSortear();
    } else {
        alert ('Preencha todos os campos!')
    }
    
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotaoReiniciar() {
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
        document.getElementById('btn-reiniciar').disabled = false;
    } else {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
        document.getElementById('btn-reiniciar').disabled = true;
    }  
}
function alterarStatusBotaoSortear() {
    let botaoSortear = document.getElementById('btn-sortear');
    if (botaoSortear.classList.contains('container__botao')) {
        botaoSortear.classList.remove('container__botao');
        botaoSortear.classList.add('container__botao-desabilitado');
        document.getElementById('btn-sortear').disabled = true;
    } else {
        botaoSortear.classList.remove('container__botao-desabilitado');
        botaoSortear.classList.add('container__botao');
        document.getElementById('btn-sortear').disabled = false;
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotaoReiniciar();
    alterarStatusBotaoSortear();
}

