const idadeMotorista = 16;

if (idadeMotorista >= 18) {
    console.log("Você pode tirar a CNH.");
} else {
    console.log("Você ainda não pode dirigir.");
}

// Operador ternário para um caso simples
const statusIdade = idadeMotorista >= 18 ? "Adulto" : "Menor de idade";
console.log(statusIdade);
