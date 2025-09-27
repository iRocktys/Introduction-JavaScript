// CONDICIONAIS
const nota = 7.5;

if (nota >= 7) {
    console.log("Passou!"); 
} else {
    console.log("Desempenho: Insuficiente."); 
}

// SWITCH
const bebida = "chá";

switch (bebida) {
    case "café":
        console.log("Preço: R$ 5,00");
        break; // Interrompe a execução após encontrar o case
    case "chá":
        console.log("Preço: R$ 4,00");
        break;
    default: 
        console.log("Opção não disponível.");
}

// TERNÁRIO
const notaMinima = 6;
const notaAluno = 7.5;

const resultado = notaAluno >= notaMinima ? "Aprovado" : "Reprovado";
console.log(`Status do Aluno: ${resultado}`);
