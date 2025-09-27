// A lista de tarefas inicial
let tarefas = [
    { id: 1, descricao: "Estudar JS", concluida: true, prioridade: 1 },
    { id: 2, descricao: "Fazer Compras", concluida: false, prioridade: 2 },
    { id: 3, descricao: "Pagar Contas", concluida: false, prioridade: 1 }
];
console.log(tarefas);

// MÉTODOS MUTÁVEIS 

// .push()
tarefas.push({ id: 4, descricao: "Ligar para Cliente", concluida: false, prioridade: 3 });
console.log(tarefas.length); // Agora tem 4 itens

// .shift()
const removidaInicio = tarefas.shift();
console.log("Removida:", removidaInicio.descricao);
console.log(tarefas.length); // Agora tem 3 itens

// .splice():
tarefas.splice(1, 0, { id: 5, descricao: "Organizar E-mails", concluida: false, prioridade: 2 });
console.log(tarefas.map(t => t.descricao));

// MÉTODOS NÃO MUTÁVEIS (Criando novos Arrays)

// .map()
const prioridadeAjustada = tarefas.map(tarefa => ({
    ...tarefa, // Copia todas as propriedades existentes
    prioridade: tarefa.prioridade - 1 // Altera a prioridade
}));
console.log(prioridadeAjustada.map(t => t.prioridade));

// .filter()
const tarefasPrioritarias = tarefas.filter(tarefa => tarefa.prioridade === 1);
console.log(tarefasPrioritarias.map(t => t.descricao));

// .reduce()
const tarefasPendentes = tarefas.reduce((total, tarefa) => {
    if (tarefa.concluida === false) {
        return total + 1; // Incrementa o contador
    }
    return total;
}, 0);
console.log("Total de pendentes:", tarefasPendentes);

// .slice() e .concat()
const copia = tarefas.slice(0, 2);
console.log(copia.map(t => t.descricao));

//  .forEach()
tarefas.forEach(tarefa => {
    console.log(`[${tarefa.concluida ? 'OK' : 'X'}] ${tarefa.descricao}`);
});
