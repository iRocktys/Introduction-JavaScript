// 1. FUNÇÃO DE EXPRESSÃO (O Callback)
const aplicarDesconto = function(valor, percentualDesconto) {
    return valor * (1 - percentualDesconto);
};
// 2. FUNÇÃO DE ORDEM SUPERIOR (Aplica o desconto em lote)
function calcularEmLote(valorInicial, vezesAplicado, callbackDesconto) {
    let valorAtual = valorInicial;
    const taxaDesconto = 0.1; 

    for (let i = 0; i < vezesAplicado; i++) {
        valorAtual = callbackDesconto(valorAtual, taxaDesconto);
    }
    return valorAtual;
}
// CHAMADA PRINCIPAL
const precoInicial = 500;
const vezes = 3;

const precoFinal = calcularEmLote(
    precoInicial,    
    vezes,           
    aplicarDesconto  
);
console.log(`Preço Inicial: R$ ${precoInicial.toFixed(2)}`);
console.log(`Preço Final após ${vezes} descontos em lote: R$ ${precoFinal.toFixed(2)}`);
// Saída: Preço Final após 3 descontos em lote: R$ 364.50

