// VARIÁVEL: Guarda o estado, iniciando como ATIVO
let estaAtivo = true;

// 1. Seleção dos elementos
const titulo = document.getElementById('statusTitulo');
const botao = document.getElementById('alternarBotao');

// 2. Função que realiza a lógica e manipula o DOM
function alternarStatus() {
    // Alterna o valor booleano
    estaAtivo = !estaAtivo; 

    // Lógica para manipular Conteúdo e Atributos
    if (estaAtivo) {
        titulo.textContent = "Status: ATIVO"; 
        titulo.setAttribute('data-status', 'on'); 
    } else {
        titulo.textContent = "Status: INATIVO"; 
        titulo.setAttribute('data-status', 'off'); 
    }
}

// 3. Anexa o Evento de clique
botao.addEventListener('click', alternarStatus);
