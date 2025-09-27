// A função async é necessária para usar o 'await'
async function buscarPrecoAtual() {
    // 1. Seleciona o elemento para exibir o resultado
    const displayPreco = document.getElementById('precoAtual');
    displayPreco.textContent = "Carregando...";
    
    // URL da API para o preço atual
    const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';

    try {
        // 2. Espera a resposta da rede
        const resposta = await fetch(apiUrl); 
        
        // 3. Espera a conversão para JSON
        const dados = await resposta.json();
        
        // 4. Acessa o valor do preço (caminho: dados.bitcoin.usd)
        const preco = dados.bitcoin.usd.toFixed(2);

        // 5. Atualiza o DOM
        displayPreco.textContent = `US$ ${preco}`;
        
    } catch (erro) {
        // Lida com qualquer falha
        displayPreco.textContent = "Erro ao buscar preço. Verifique sua conexão.";
        console.error("Erro:", erro);
    }
}


// Anexa a função ao evento de clique do botão
const botao = document.getElementById('botaoBusca');
botao.addEventListener('click', buscarPrecoAtual);