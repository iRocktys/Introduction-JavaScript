// A. DECLARAÇÃO DE FUNÇÃO (Clássica).
function somar(a, b) {
    return a + b;
}

// B. EXPRESSÃO DE FUNÇÃO (Anônima)
const subtrair = function(a, b) {
    return a - b;
};

// C. ARROW FUNCTION (Seta)
const multiplicar = (a, b) => a * b;

// D. FUNÇÃO DE ORDEM SUPERIOR (Callback)
const numeros = [1, 2, 3];
const dobrados = numeros.map(item => item * 2);


// CHAMA AS FUNÇÕES E EXIBE OS RESULTADOS
console.log("Soma (Declaração):", somar(10, 5));
console.log("Subtração (Expressão):", subtrair(10, 5));
console.log("Multiplicação (Arrow):", multiplicar(10, 5));
console.log("Números dobrados (Callback):", dobrados);
