// Inventário inicial
const inventario = {
    monitor: { preco: 800, quantidade: 5 },
    teclado: { preco: 350, quantidade: 10 },
    mouse: { preco: 150, quantidade: 20 }
};

// Objeto de atualizações
const atualizacoes = {
    monitor: { preco: 850, quantidade: 4 }, 
    teclado: { preco: 350, quantidade: 8 },
    headset: { preco: 250, quantidade: 15 } 
};

function calcularValorInventario(inventarioBase, novasAtualizacoes) {
    // 1. Mesclagem com Spread Operator (...)
    const inventarioFinal = {
        ...inventarioBase,
        ...novasAtualizacoes 
    };

    let valorTotalEmEstoque = 0;

    // 2. Iteração: Usando Object.keys()
    const produtosChaves = Object.keys(inventarioFinal);

    for (const produto of produtosChaves) {
        const preco = inventarioFinal[produto].preco;
        const quantidade = inventarioFinal[produto].quantidade;

        // Cálculo e acúmulo
        valorTotalEmEstoque += preco * quantidade;
    }

    return valorTotalEmEstoque;
}

// CHAMADA PRINCIPAL
const valorFinal = calcularValorInventario(inventario, atualizacoes);

console.log(`O valor total de todos os produtos em estoque é: R$ ${valorFinal.toFixed(2)}`);
