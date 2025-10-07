// Lista inicial de alunos
let alunos = ['Alice', 'Bruno', 'Carlos', 'Diana'];
console.log("Lista Inicial:", alunos); 

// 1. Remover o aluno "Bruno" (Usando splice para remover por valor)
const indiceBruno = alunos.indexOf('Bruno'); 

// Em seguida, removemos 1 elemento a partir daquele índice
if (indiceBruno !== -1) {
    alunos.splice(indiceBruno, 1);
}
console.log("\nLista após remoção de Bruno:", alunos);

// 2. Adicionar o aluno "Eva" ao final (Usando push)
alunos.push('Eva');
console.log("Lista após adição de Eva:", alunos);

// 3. Criar uma nova lista filtrada (Usando filter)
const nomesCurtos = alunos.filter(nome => {
    return nome.length <= 5;
});
console.log("\nNova Lista (Nomes de até 5 letras):", nomesCurtos);
