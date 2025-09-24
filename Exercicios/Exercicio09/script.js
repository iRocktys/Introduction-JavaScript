// 1. Seleciona os elementos do DOM
const nomeInput = document.getElementById('nome');
const profissaoInput = document.getElementById('profissao');
const descricaoInput = document.getElementById('descricao');
const gerarBotao = document.getElementById('gerarBotao');
const cartaoExibicao = document.getElementById('cartao-exibicao');

// 2. Cria uma função para gerar o cartão
function gerarCartao() {
    // 3. Pega os valores dos inputs
    const nome = nomeInput.value;
    const profissao = profissaoInput.value;
    const descricao = descricaoInput.value;

    // 4. Usa o controle de fluxo para verificar se os campos estão preenchidos
    if (nome === '' || profissao === '' || descricao === '') {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // 5. Cria um objeto com os dados
    const dadosPessoa = {
        nomeCompleto: nome,
        cargo: profissao,
        bio: descricao
    };

    // 6. Manipulação do DOM para criar o HTML do cartão
    cartaoExibicao.innerHTML = `
        <h2>${dadosPessoa.nomeCompleto}</h2>
        <p><strong>Profissão:</strong> ${dadosPessoa.cargo}</p>
        <p>${dadosPessoa.bio}</p>
    `;
}

// 7. Adiciona um ouvinte de evento ao botão para acionar a função
gerarBotao.addEventListener('click', gerarCartao);
