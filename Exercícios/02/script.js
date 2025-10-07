const caracteresBase = "abcdefghijKLMNOPQRSTUV123456789!@#$";
const tamanhoSenha = 10;
let senhaGerada = "";

// O laço executa 10 vezes (do 0 ao 9)
for (let i = 0; i < tamanhoSenha; i++) {
    // 1. Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * caracteresBase.length);
    // 2. Extrai e concatena o caractere
    senhaGerada += caracteresBase[indiceAleatorio];
}
console.log("A senha gerada é:", senhaGerada);
