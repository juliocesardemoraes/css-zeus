// Exercícios de 'CRUD'
// GET - CREATE/ READ
// 1. Crie um objeto chamado 'carro' com as propriedades 'marca', 'modelo', e 'ano'.
// Acesse e imprima cada uma das propriedades no console.
const carro = {
  marca: "marba",
  modelo: "novo",
  ano: 2023,
};

console.log("EXERCÍCIO 1");
console.log(carro.ano);
console.log(carro.modelo);
console.log(carro.marca);
console.log("-----------");

// POST - INSERT
// 2. Adicione uma nova propriedade 'cor'
// ao objeto 'carro' e atribua a ela o valor "vermelho".
carro.cor = "vermelho";

console.log("EXERCÍCIO 2");
console.log(carro.cor);
console.log("-----------");

// PUT - UPDATE
// 3. Modifique o valor da propriedade 'ano' do objeto 'carro' para o ano atual.
carro.ano = 2024;

console.log("EXERCÍCIO 3");
console.log(carro.ano);
console.log("-----------");

// DELETE - DELETE
// 4. Delete a propriedade 'modelo' do objeto 'carro'
// e tente acessar essa propriedade após a exclusão.
delete carro.modelo;

console.log("EXERCÍCIO 4");
console.log(carro);
console.log("-----------");

// Múltiplos Métodos
// 5. Crie um objeto chamado 'pessoa' com as propriedades 'nome', 'idade', e 'cidade'.
// Modifique a 'idade' para ser 5 anos maior.
const pessoa = {
  nome: "júlio",
  idade: 28,
  cidade: "Itajubá",
};
pessoa.idade += 5;

console.log("EXERCÍCIO 5");
console.log(pessoa.idade);
console.log("-----------");

// 6. Acesse e imprima o valor da propriedade 'nome' do objeto 'pessoa'
// usando a notação de colchetes.
console.log("EXERCÍCIO 6");
console.log(pessoa["nome"]);
console.log("-----------");

// 7. Crie um loop 'for...in' para iterar sobre todas as propriedades
// do objeto 'pessoa' e imprima chave e valor.

console.log("EXERCÍCIO 7");
for (let chave in pessoa) {
  console.log(`A chave é ${chave}, e o valor é ${pessoa[chave]}`);
}
console.log("-----------");

// 8. Adicione uma nova propriedade 'profissao' ao objeto 'pessoa'
// e atribua o valor "Engenheira".
console.log("EXERCÍCIO 8");
pessoa.profissao = "Engenheira";
console.log(pessoa.profissao);
console.log("-----------");
