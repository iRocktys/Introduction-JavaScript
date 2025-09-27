// VARIÁVEL: Guarda o estado (o valor atual do contador)
let contador = 0;

// 1. SELEÇÃO DE ELEMENTOS (Usando getElementById)
const displayValor = document.getElementById('valorContador');
const botaoAumentar = document.getElementById('botaoAumentar');
const botaoDiminuir = document.getElementById('botaoDiminuir');


// 2. FUNÇÕES: Definem o que acontece em cada evento
function aumentarContador() {
    contador = contador + 1; // Lógica: Aumenta a variável
    // Manipulação do DOM: Atualiza o texto na página
    displayValor.textContent = contador;
}

function diminuirContador() {
    contador = contador - 1; // Lógica: Diminui a variável
    // Manipulação do DOM: Atualiza o texto na página
    displayValor.textContent = contador;
}


// 3. EVENTOS: Anexa as funções aos botões
// Trabalhar com Eventos (addEventListener)
botaoAumentar.addEventListener('click', aumentarContador);
botaoDiminuir.addEventListener('click', diminuirContador);
