const usuario = { nome: "Alice", email: "alice@exemplo.com", ativo: true };
const endereco = { rua: "Rua X", numero: 10 };

// 1. Clonagem e Mesclagem (Spread Operator)
const usuarioCompleto = { ...usuario, ...endereco, ativo: false }; 
// usuarioCompleto terá todas as propriedades, com 'ativo' sobreescrito para 'false'

// 2. Iteração (Object.keys())
const chaves = Object.keys(usuario);
console.log(chaves); // Saída: ["nome", "email", "ativo"]

// 3. Iteração (Object.entries())
// Ideal para usar dentro de um laço for...of:
for (const [chave, valor] of Object.entries(usuario)) {
    console.log(`${chave}: ${valor}`);
}
// Saída: nome: Alice, email: alice@exemplo.com, ativo: true
