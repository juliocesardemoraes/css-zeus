// 0 - Crie um array de cores com 4 cores,
// e um array de frutas com os valores ["Banana", "Pera"]
const cores = ["azul", "vermelho", "roxo", "branco"];
const frutas = ["Banana", "Pera"];

// 1. Acesse o segundo e o último elemento do array 'cores'.
console.log("Exercício 1");
console.log(cores[2]);
console.log(cores.at(-1));

console.log("-----------");

// 2. Adicione "Uva" no final do array 'frutas'.
console.log("Exercício 2");
frutas.push("Uva");
console.log(frutas);
console.log("-----------");

// 3. Adicione "Manga" no início do array 'frutas'.
console.log("Exercício 3");
frutas.unshift("Manga");
console.log(frutas);
console.log("-----------");

// 4. Adicione "Morango" na posição 2 do array 'frutas'.
console.log("Exercício 4");
frutas.splice(2, 0, "Morango");
console.log(frutas);
console.log("-----------");

// 5. Atualize o terceiro elemento do array 'frutas' para "Laranja".
console.log("Exercício 5");
frutas[3] = "Laranja";
console.log(frutas);
console.log("-----------");

// 6. Remova o último elemento do array 'frutas'.
console.log("Exercício 6");
frutas.pop();
console.log(frutas);
console.log("-----------");

// 7. Remova o primeiro elemento do array 'frutas'.
console.log("Exercício 7");
frutas.shift();
console.log(frutas);
console.log("-----------");

// 8. Remova o segundo elemento do array 'frutas'. (Desafio) Pode procurar no google
console.log("Exercício 8");
frutas.splice(2, 1);
console.log(frutas);
console.log("-----------");

// 9. Use um loop 'for' tradicional para imprimir todos os elementos do array 'frutas'.
console.log("Exercício 9");
for (let i = 0; i < frutas.length; i++) {
  console.log("Fruta ", frutas[i]);
}
console.log("-----------");

// 10. Use 'map' para criar um novo array com todas as frutas em maiúsculas.
console.log("Exercício 10");
frutas.map((item) => {
  console.log(item);
});
console.log("-----------");
